
import nodemailer from "nodemailer";

// Rate-limit simple en mémoire : 3 requêtes / heure / IP
const BUCKET = new Map();
const WINDOW_MS = 60 * 60 * 1000;
const LIMIT = 3;
function isRateLimited(ip) {
  const now = Date.now();
  const entry = BUCKET.get(ip) || { t: now, c: 0 };
  if (now - entry.t > WINDOW_MS) {
    BUCKET.set(ip, { t: now, c: 1 });
    return false;
  }
  entry.c += 1;
  BUCKET.set(ip, entry);
  return entry.c > LIMIT;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Méthode non autorisée" });

  const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").toString().split(",")[0].trim();
  if (isRateLimited(ip)) return res.status(429).json({ error: "Trop de tentatives, réessayez plus tard." });

  const {
    nom, prenom, forme, societe, adresse, cp, ville,
    tel, mail, presentiel, distance, prestation, objet, message, website, startedAt
  } = req.body || {};

  // Anti-spam : champ piège + délai de saisie
  if (website) return res.status(400).json({ error: "Spam détecté" });
  if (!startedAt || Date.now() - Number(startedAt) < 3500) {
    return res.status(400).json({ error: "Soumission trop rapide" });
  }

  if (!nom || !mail || !message) {
    return res.status(400).json({ error: "Nom, email et message requis" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const to = process.env.CONTACT_TO || "oc.conseilssolutions@gmail.com";
  const subject = `Nouveau message site — ${objet || "Sans objet"}`;
  const html =
    `<h2>Nouveau message depuis le site</h2>` +
    `<p><b>Nom :</b> ${nom} ${prenom || ""}</p>` +
    `<p><b>Email :</b> ${mail}</p>` +
    `<p><b>Téléphone :</b> ${tel || ""}</p>` +
    `<p><b>Entreprise :</b> ${societe || ""} — ${forme || ""}</p>` +
    `<p><b>Adresse :</b> ${adresse || ""}, ${cp || ""} ${ville || ""}</p>` +
    `<p><b>Mode :</b> ${presentiel ? "Présentiel " : ""}${distance ? "À distance" : ""}</p>` +
    `<p><b>Prestation :</b> ${prestation || ""}</p>` +
    `<p><b>Message :</b><br/>${(message || "").replace(/\n/g, "<br/>")}</p>`;

  try {
    await transporter.sendMail({ from: `Site web <${process.env.SMTP_USER}>`, to, subject, html });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Impossible d'envoyer l'email" });
  }
}
