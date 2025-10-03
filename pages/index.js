
import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Scale, BarChart3, Clock } from "lucide-react";
import React from "react";

/********************
 * Données de page  *
 ********************/
const DATA = {
  site: {
    title: "Optimiser aujourd’hui pour prospérer demain",
    description:
      "J’accompagne les dirigeants de TPE & PME en France pour transformer leurs blocages d’organisation, de trésorerie et de litiges en leviers de croissance.",
    email: "oc.conseilssolutions@gmail.com",
    phone: "06 67 65 60 12",
    logoSrc: "/Logo.PNG",
  },
  problems: [
    { icon: BarChart3, text: "Difficultés de trésorerie" },
    { icon: Scale, text: "Litiges avec tiers" },
    { icon: Clock, text: "Manque de temps / phobie administrative" },
    { icon: Users, text: "Isolement professionnel" },
  ],
  offers: [
    { name: "Lignée Essentielle", price: "", desc: "8h / mois de gestion selon vos besoins", details: [] },
    { name: "Lignée Signature", price: "", desc: "15h / mois + gestion financière avancée", details: [] },
    { name: "Lignée Prestige", price: "", desc: "30h / mois + gestion de litiges et trésorerie", details: [] },
    { name: "Hors Lignée ", price: "", desc: "Tarification à l'heure", details: [] },
  ],
  gestions: [
    {
      name: "Gestion Administration / RH",
      desc: [
        "Création documents / formulaire interne ou courrier type",
        "Mise en place & Refonte de l'organisation administrative ou RH",
        "Gestion du personnel",
        "Mission SOS / Gestion de Litiges*",
        "Possibilité d'actions selon vos besoins.",
      ],
      etc: "*Uniquement dans lignée Prestige",
    },
    {
      name: "Gestion Commerciale",
      desc: [
        "Relances",
        "Prospection",
        "Mise en place de Conditions générale de vente ou d'intervention",
        "Automatisation Facturation et Relances",
        "Mission SOS / Gestion de Litiges*",
        "Possibilité d'actions selon vos besoins...",
      ],
      etc: "*Uniquement dans lignée Prestige",
    },
    {
      name: "Gestion Financière",
      desc: [
        "Élaboration de prévisionnels ou tableaux de bord KPIs",
        "Révision des prix de vente (calcul prix plancher)",
        "Pré-Compta* : Accompagnement à la préparation du bilan",
        "Audit Flash* avec Plans d’actions",
        "Mission SOS / Gestion de Litiges*",
        "Structuration levée de fonds*",
        "Possibilité d’actions selon vos besoins...",
      ],
      etc: "*Uniquement dans lignée Prestige",
    }
  ],
  keywords: `Accompagnement ; autonomie ; bilan ; budgétaire ; commercial ; conseil ; contrôle de gestion ; développement ; aide ; entrepreneurs ; finance ; kpis ; organisation ; outils ; performance ; problèmes ; prospection ; rh ; solutions ; tableaux de bord ; Micro entrepreneur ; Micro entreprise ; SAS ; SASU ; SARL ; EURL ; EIRL ; administratif ; bénéfices ; cessation de paiement ; conditions générales de vente ; courriers types ; croissance ; dirigeants ; dépôt de bilan ; entreprise générale ; externalisation ; gestion administrative ; gestion commerciale ; gestion du personnel ; gestion financière ; liquidation ; litiges ; phobie administrative ; pilotage ; procédure de sauvegarde ; prévisionnel ; redressement ; startup ; tableaux de bord rh ; tpe pme ; trésorerie ; Statut juridique ; accompagnement personnalisé ; accompagnement pme ; accompagnement transformation digitale ; administratif rh ; bras droit ; daf temps partagé ; documents internes ; entreprises en France ; externalisation administrative ; externalisation secrétariat ; gestion de trésorerie ; organisation administrative ; pme France ; prévisionnel financier ; relances clients ; simplification administrative ; structuration entreprise ; suivi administratif ; tableau de trésorerie ; valeur perçue ; accompagnement levée de fonds ; aide ; administrative ; indépendant ; audit flash ; automatisation facturation ; business plan professionnel ; croissance entreprise accompagnement ; directeur administratif et financier externalisé ; gestion contrats ; gestion prévisionnelle ; gestion saine ; litige expert comptable ; logiciels facturation ; mise en conformité entreprise ; mission sos ; optimisation trésorerie ; organisation interne ; outils gestion ; plan de financement startup ; plan de trésorerie simplifié ; raf externalisé ; reporting en ligne ; reporting financier mensuel ; réduction des coûts de gestion ; services aux entrepreneurs ; services complémentaires ; stratégie organisationnelle ; suivi factures fournisseurs ; sérénité financière ; éviter faillite ; Entreprise individuelle ; accompagnement dirigeants pme ; accompagnement gestion dirigeant isolé ; accompagnement personnalisé dirigeants ; accompagnement à distance ou sur site ; accompagner levée de fonds startup ; ambiance améliorée ; amélioration gestion interne ; amélioration performance organisationnelle ; appui administratif entrepreneurs ; automatisation administrative ; automatisation relances clients ;`
};

/************************
 * Utilitaires SEO
 ************************/
function SEOHead({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}
function SEOHiddenKeywords({ keywords }) {
  return <div style={{ display: "none" }}>{keywords}</div>;
}

/************************
 * UI
 ************************/
function SiteHeader({ logoSrc }) {
  return (
    <header className="flex items-center justify-center py-6">
      <img src={logoSrc} alt="Logo entreprise" className="h-20 object-contain" />
    </header>
  );
}

function Hero({ title, description }) {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 sm:py-40 bg-gradient-to-b from-[#00246C] to-[#001A4A]">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white max-w-3xl">{title}</h1>
      <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl">{description}</p>
    </section>
  );
}

function Problems({ items }) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto bg-[#001A4A]/60 rounded-2xl my-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] mb-8 sm:mb-10 text-center">Vos problématiques, mes solutions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-4 bg-[#00246C]/90 p-6 rounded-xl shadow-md">
            <p.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF1493]" />
            <span className="text-base sm:text-lg text-gray-200">{p.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function GestionCarousel({ gestions }) {
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % gestions.length), 4000);
    return () => clearInterval(id);
  }, [paused, gestions.length]);
  const prev = () => setCurrent((c) => (c - 1 + gestions.length) % gestions.length);
  const next = () => setCurrent((c) => (c + 1) % gestions.length);
  return (
    <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden rounded-2xl">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
          {gestions.map((gestion, i) => (
            <div key={i} className="w-full flex-shrink-0 p-6">
              <Card className="bg-gradient-to-br from-[#00246C] to-[#001A4A] text-white border border-[#0A2F80] rounded-2xl shadow-xl relative">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#FF1493] text-center">{gestion.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-left">
                  {gestion.desc.map((line, idx) => (
                    <p key={idx} className="text-gray-300 text-sm sm:text-base">• {line}</p>
                  ))}
                </CardContent>
                {gestion.etc && (
                  <div className="absolute bottom-3 right-4 text-xs sm:text-sm text-gray-400 italic">{gestion.etc}</div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
      <button aria-label="Précédent" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#001A4A]/90 backdrop-blur px-3 py-2 rounded-full border border-[#0A2F80]">‹</button>
      <button aria-label="Suivant" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#001A4A]/90 backdrop-blur px-3 py-2 rounded-full border border-[#0A2F80]">›</button>
      <div className="flex justify-center gap-2 mt-4">
        {gestions.map((_, i) => (
          <button key={i} aria-label={`Aller à la gestion ${i + 1}`} onClick={() => setCurrent(i)} className={`h-2 w-6 rounded-full ${i === current ? "bg-[#FF1493]" : "bg-gray-500"}`} />
        ))}
      </div>
    </div>
  );
}

function Offers({ items }) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto bg-[#001A4A]/60 rounded-2xl my-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] mb-8 sm:mb-10 text-center">Mes offres</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((offer, i) => (
          <Card
            key={i}
            className={`rounded-2xl shadow-lg ${
              offer.name === "Prestige"
                ? "bg-[#FF1493] text-[#00246C]"
                : "bg-gradient-to-br from-[#00246C] to-[#001A4A] text-white border border-[#0A2F80]"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">{offer.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-base sm:text-lg">{offer.desc}</p>
              <p className="text-lg sm:text-xl font-bold">{offer.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function GestionSliderSection({ gestions }) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#00246C]/80 rounded-2xl my-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] mb-8 text-center">Domaines de gestion</h2>
      <div className="max-w-4xl mx-auto">
        <GestionCarousel gestions={gestions} />
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#001A4A]/70 rounded-2xl my-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] mb-8 sm:mb-10 text-center">Ce que disent mes clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          {
            text:
              "Océane est très compétente et impliquée. Elle a su régler un litige complexe avec professionnalisme et efficacité, ce qui m’a beaucoup soulagé et pérennisé mon entreprise.",
            author: "Pierre Alexandre PARMENTIER",
          },
          {
            text:
              "Excellente gestionnaire, professionnelle, réactive et toujours à l’écoute. Fiable, compétente et avec d'excellents conseils. Elle est un véritable soutien et un atout précieux pour mon entreprise.",
            author: "Théophile MARSAULT",
          },
        ].map((t, i) => (
          <blockquote key={i} className="bg-[#00246C]/90 p-6 rounded-xl border border-[#0A2F80]">
            <p className="italic mb-4 text-base sm:text-lg">“{t.text}”</p>
            <footer className="font-semibold text-[#FF1493] text-sm sm:text-base">— {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function ContactFormSend({ gestions, email, phone }) {
  const [form, setForm] = React.useState({
    nom: "", prenom: "", forme: "", societe: "", adresse: "", cp: "",
    ville: "", tel: "", mail: "", presentiel: false, distance: false,
    prestation: "", objet: "", message: "", website: "" // honeypot
  });
  const [sending, setSending] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [startedAt] = React.useState(() => Date.now());

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.nom || !form.mail || !form.message) return "Nom, email et message sont requis.";
    const emailOk = form.mail.includes("@") && form.mail.includes(".");
    if (!emailOk) return "Email invalide.";
    if (form.website) return "Spam détecté.";          // honeypot
    const elapsed = Date.now() - startedAt;
    if (elapsed < 4000) return "Soumission trop rapide (anti-spam).";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    const v = validate();
    if (v) { setErr(v); return; }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, startedAt })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Une erreur est survenue");
      setOk(true);
      setForm({
        nom: "", prenom: "", forme: "", societe: "", adresse: "", cp: "",
        ville: "", tel: "", mail: "", presentiel: false, distance: false,
        prestation: "", objet: "", message: "", website: ""
      });
    } catch (e) {
      setErr(e.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#001A4A] via-[#00246C] to-[#001A4A] rounded-2xl my-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] mb-8 sm:mb-10 text-center">Contactez‑moi</h2>

      {ok && (
        <div className="max-w-3xl mx-auto mb-4 p-3 rounded-xl bg-green-600/20 text-green-200 border border-green-600">
          Merci, votre message a bien été envoyé.
        </div>
      )}
      {err && (
        <div className="max-w-3xl mx-auto mb-4 p-3 rounded-xl bg-red-600/20 text-red-200 border border-red-600">
          {err}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-4">
        {/* Nom / Prénom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="nom" value={form.nom} onChange={onChange} className="w-full p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Nom *" />
          <input name="prenom" value={form.prenom} onChange={onChange} className="w-full p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Prénom" />
        </div>
        {/* Forme juridique / Société */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="forme" value={form.forme} onChange={onChange} className="w-full p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Forme Juridique" />
          <input name="societe" value={form.societe} onChange={onChange} className="w-full p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Société" />
        </div>
        {/* Adresse */}
        <input name="adresse" value={form.adresse} onChange={onChange} className="p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Adresse" />
        {/* Code postal / Ville */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="cp" value={form.cp} onChange={onChange} className="w-full p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Code postal" />
          <input name="ville" value={form.ville} onChange={onChange} className="w-full p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Ville" />
        </div>
        {/* Téléphone / Email */}
        <input name="tel" value={form.tel} onChange={onChange} className="p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Téléphone" />
        <input name="mail" value={form.mail} onChange={onChange} className="p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Votre email *" />
        {/* Prestations (checkbox) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex items-center gap-2 w-full p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white">
            <input type="checkbox" className="w-5 h-5 accent-[#FF1493]" />
            <span>Présentiel</span>
          </label>
          <label className="flex items-center gap-2 w-full p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white">
            <input type="checkbox" className="w-5 h-5 accent-[#FF1493]" />
            <span>À distance</span>
          </label>
        </div>
        {/* Sélecteur lié à gestions (desc[1], desc[2], ...) */}
        <select name="prestation" value={form.prestation} onChange={onChange} className="p-3 rounded-xl bg-[#001A4A]/80 text-white">
          <option value="">Sélectionnez une prestation</option>
          {DATA.gestions.flatMap((g, i) => g.desc.slice(1).map((d, j) => (
            <option key={`${i}-${j}`} value={`${g.name} - ${d}`}>{g.name} - {d}</option>
          )))}
        </select>
        {/* Objet / Message */}
        <input name="objet" value={form.objet} onChange={onChange} className="p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Objet" />
        <textarea name="message" value={form.message} onChange={onChange} className="p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-400" placeholder="Demande *" rows={5}></textarea>

        {/* Anti-spam : champ piège invisible */}
        <input name="website" value={form.website} onChange={onChange} className="hidden" tabIndex="-1" autoComplete="off" />

        <Button disabled={sending} className="bg-[#FF1493] hover:bg-pink-600 disabled:opacity-60 disabled:cursor-not-allowed text-[#00246C] font-semibold px-8 py-4 rounded-2xl text-lg">
          {sending ? "Envoi en cours…" : "Envoyer"}
        </Button>
      </form>
      <div className="text-center mt-8 text-gray-400 text-sm sm:text-base">
        <p>{email} | {phone}</p>
      </div>
    </section>
  );
}

export default function Home() {
  const { site, problems, offers, gestions, keywords } = DATA;
  return (
    <div className="bg-gradient-to-b from-[#001A4A] via-[#00246C] to-[#001A4A] text-white min-h-screen">
      <SEOHead title={site.title} description={site.description} keywords={keywords} />
      <SEOHiddenKeywords keywords={keywords} />
      <SiteHeader logoSrc={site.logoSrc} />
      <Hero title={site.title} description={site.description} />
      <Problems items={problems} />
      <Offers items={offers} />
      <GestionSliderSection gestions={gestions} />
      <Testimonials />
      <ContactFormSend gestions={gestions} email={site.email} phone={site.phone} />
    </div>
  );
}
