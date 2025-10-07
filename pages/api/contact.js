// pages/api/contact.js
import nodemailer from "nodemailer";

const WINDOW_MS = 60 * 60 * 1000;
const LIMIT = 3;
const BUCKET = new Map();

// --------- utils logs ---------
function now() {
  return new Date().toISOString();
}
function rid(req) {
  // petit id par requête pour corréler les logs
  if (!req._rid) req._rid = Math.random().toString(36).slice(2, 10);
  return req._rid;
}
function logInfo(req, msg, extra = {}) {
  console.log(JSON.stringify({ level: "INFO", t: now(), rid: rid(req), msg, ...extra }));
}
function logWarn(req, msg, extra = {}) {
  console.warn(JSON.stringify({ level: "WARN", t: now(), rid: rid(req), msg, ...extra }));
}
function logError(req, msg, error, extra = {}) {
  console.error(JSON.stringify({ level: "ERROR", t: now(), rid: rid(req), msg, err: String(error?.message || error), stack: error?.stack, ...extra }));
}

// ---------- rate limit simple ----------
function isRateLimited(req) {
  const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").toString().split(",")[0].trim();
  const nowTs = Date.now();
  const entry = BUCKET.get(ip) || { t: nowTs, c: 0 };
  if (nowTs - entry.t > WINDOW_MS) {
    BUCKET.set(ip, { t: nowTs, c: 1 });
    return { limited: false, ip };
  }
  entry.c += 1;
  BUCKET.set(ip, entry);
  return { limited: entry.c > LIMIT, ip };
}

// ---------- transporter ----------
function createTransport(req) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    const missing = { host: !!host, user: !!user, pass: !!pass };
    logError(req, "Missing SMTP env vars", null, { missing });
    throw new Error("Env SMTP manquantes: SMTP_HOST/SMTP_USER/SMTP_PASS");
  }

  const secure = port === 465; // SSL on 465, STARTTLS on 587
  const enableDebug = (process.env.SMTP_DEBUG || "false").toLowerCase() === "true";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    logger: enableDebug, // logs nodemailer -> console
    debug: enableDebug,  // protocole
  });

  // log non sensible
  logInfo(req, "SMTP transporter created", {
    host,
    port,
    secure,
    userMasked: maskEmail(user),
    debug: enableDebug,
  });

  return transporter;
}

function maskEmail(email) {
  if (!email) return "";
  const [name, domain] = email.split("@");
  if (!domain) return "***";
  return `${name?.slice(0, 2) || ""}***@${domain}`;
}

// ---------- handler ----------
export default async function handler(req, res) {
  try {
    logInfo(req, "Incoming request", {
      method: req.method,
      path: "/api/contact",
      ua: req.headers["user-agent"],
    });

    if (req.method === "GET") {
      // Test de connectivité SMTP sans envoyer de mail
      try {
        const transporter = createTransport(req);
        const ok = await transporter.verify();
        logInfo(req, "SMTP verify completed", { ok });
        return res.status(200).json({ ok, message: "SMTP OK" });
      } catch (e) {
        logError(req, "SMTP verify failed", e);
        return res.status(500).json({ error: "SMTP verify failed", detail: String(e?.message || e) });
      }
    }

    if (req.method !== "POST") {
      logWarn(req, "Method not allowed", { method: req.method });
      return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { limited, ip } = isRateLimited(req);
    if (limited) {
      logWarn(req, "Rate limited", { ip });
      return res.status(429).json({ error: "Trop de tentatives, réessayez plus tard." });
    }

    const {
      nom, prenom, forme, societe, adresse, cp, ville,
      tel, mail, presentiel, distance, prestation, objet, message, website, startedAt,
    } = req.body || {};

    // logs d’input (sanitisés)
    logInfo(req, "Validating payload", {
      hasNom: !!nom, hasMail: !!mail, hasMessage: !!message,
      presentiel: !!presentiel, distance: !!distance,
      prestation
