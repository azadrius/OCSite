import Head from "next/head";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Scale, BarChart3, Clock } from "lucide-react";

/********************
 * Données de page  * (condensées pour l'exemple)
 ********************/
const DATA = {
  site: {
    title: "Optimiser aujourd’hui pour prospérer demain",
    description:
      "J’accompagne les dirigeants de TPE & PME en France pour transformer leurs blocages d’organisation, de trésorerie et de litiges en leviers de croissance.",
    email: "oc.conseilssolutions@gmail.com",
    enterprise: "Océ Conseils & Solutions",
    phone: "06 65 67 60 12",
    logoSrc: "/Logo.PNG",
  },
  problems: [
    { icon: BarChart3, text: "Difficultés de trésorerie" },
    { icon: Scale, text: "Litiges avec tiers" },
    { icon: Clock, text: "Manque de temps / phobie administrative" },
    { icon: Users, text: "Isolement professionnel" },
  ],
  offers: [
    { name: "Lignée Essentielle", price: "", desc: "8h / mois de gestion selon vos besoins" },
    { name: "Lignée Signature", price: "", desc: "15h / mois + gestion financière avancée" },
    { name: "Lignée Prestige", price: "", desc: "30h / mois + gestion de litiges et trésorerie" },
    { name: "Hors Lignée", price: "", desc: "Tarification a l'heure" },
  ],
  gestions: [
        {
          name: "Gestion Administration/RH",
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
            "Pré‑Compta* : Accompagnement à la préparation du bilan",
            "Audit Flash* avec Plans d’actions",
            "Mission SOS / Gestion de Litiges*",
            "Structuration levée de fonds*",
            "Possibilité d’actions selon vos besoins...",
          ],
          etc: "*Uniquement dans lignée Prestige",
        },
      ],
  prestations: [
          {
            name: "Lignée",
            desc: [
              "Essentielle",
              "Signature",
              "Prestige",
            ],
          },
          {
            name: "Gestion Administration/RH",
            desc: [
              "Création documents / formulaire interne ou courrier type",
              "Mise en place & Refonte de l'organisation administrative ou RH",
              "Gestion du personnel",
              "Mission SOS / Gestion de Litiges",
            ],
          },
          {
            name: "Gestion Commerciale",
            desc: [
              "Relances",
              "Prospection",
              "Mise en place de Conditions générale de vente ou d'intervention",
              "Automatisation Facturation et Relances",
              "Mission SOS / Gestion de Litiges",
            ],
          },
          {
            name: "Gestion Financière",
            desc: [
              "Élaboration de prévisionnels ou tableaux de bord KPIs",
              "Révision des prix de vente (calcul prix plancher)",
              "Pré‑Compta : Accompagnement à la préparation du bilan",
              "Audit Flash avec Plans d’actions",
              "Mission SOS / Gestion de Litiges",
              "Structuration levée de fonds",
            ],
          },
          {
            name: "Autre",
            desc: [
              "A définir selon vos besoin",
            ],
          },
        ],
  keywords:
    `Accompagnement ; autonomie ; bilan ; budgétaire ; commercial ; conseil ; contrôle de gestion ; développement ; aide ; entrepreneurs ; finance ; kpis ; organisation ; outils ; performance ; problèmes ; prospection ; rh ; solutions ; tableaux de bord ; Micro entrepreneur ; Micro entreprise ; SAS ; SASU ; SARL ; EURL ; EIRL ; administratif ; bénéfices ; cessation de paiement ; conditions générales de vente ; courriers types ; croissance ; dirigeants ; dépôt de bilan ; entreprise générale ; externalisation ; gestion administrative ; gestion commerciale ; gestion du personnel ; gestion financière ; liquidation ; litiges ; phobie administrative ; pilotage ; procédure de sauvegarde ; prévisionnel ; redressement ; startup ; tableaux de bord rh ; tpe pme ; trésorerie ; Statut juridique ; accompagnement personnalisé ; accompagnement pme ; accompagnement transformation digitale ; administratif rh ; bras droit ; daf temps partagé ; documents internes ; entreprises en France ; externalisation administrative ; externalisation secrétariat ; gestion de trésorerie ; organisation administrative ; pme France ; prévisionnel financier ; relances clients ; simplification administrative ; structuration entreprise ; suivi administratif ; tableau de trésorerie ; valeur perçue ; accompagnement levée de fonds ; aide ; administrative ; indépendant ; audit flash ; automatisation facturation ; business plan professionnel ; croissance entreprise accompagnement ; directeur administratif et financier externalisé ; gestion contrats ; gestion prévisionnelle ; gestion saine ; litige expert comptable ; logiciels facturation ; mise en conformité entreprise ; mission sos ; optimisation trésorerie ; organisation interne ; outils gestion ; plan de financement startup ; plan de trésorerie simplifié ; raf externalisé ; reporting en ligne ; reporting financier mensuel ; réduction des coûts de gestion ; services aux entrepreneurs ; services complémentaires ; stratégie organisationnelle ; suivi factures fournisseurs ; sérénité financière ; éviter faillite ; Entreprise individuelle ; accompagnement dirigeants pme ; accompagnement gestion dirigeant isolé ; accompagnement personnalisé dirigeants ; accompagnement à distance ou sur site ; accompagner levée de fonds startup ; ambiance améliorée ; amélioration gestion interne ; amélioration performance organisationnelle ; appui administratif entrepreneurs ; automatisation administrative ; automatisation relances clients ;`,
};

/************************
 * SEO
 ************************/
function SEOHead({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
const SEOHiddenKeywords = ({ keywords }) => (
  <div style={{ display: "none" }}>{keywords}</div>
);

/************************
 * Sections (pass global mobile‑first)
 ************************/
const SiteHeader = ({ logoSrc, enterprise }) => (
  <header className="w-full py-4 sm:py-6 px-4 flex items-center justify-center">
    <img src={logoSrc} alt="Logo entreprise" className="h-12 sm:h-16 object-contain" />
    <h1 className="text-lg sm:text-2xl font-bold text-white tracking-wide">{enterprise}</h1>
  </header>
);

const Hero = ({ title, description }) => (
  <section className="relative text-center px-4 py-16 sm:py-24 md:py-28 bg-gradient-to-b from-[#00246C] to-[#001A4A] rounded-none sm:rounded-2xl sm:mx-3">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto">
      {title}
    </h1>
    <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
      {description}
    </p>
    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
      <a href="#contact" className="inline-flex justify-center rounded-2xl px-6 py-3 text-[#00246C] bg-[#FF1493] font-semibold hover:bg-pink-600 transition">
        Contact rapide
      </a>
      <a href="#offres" className="inline-flex justify-center rounded-2xl px-6 py-3 border border-[#0A2F80] bg-[#001A4A]/60 hover:bg-[#001A4A]/80 transition">
        Voir mes offres
      </a>
    </div>
  </section>
);

const Problems = ({ items }) => (
  <section className="px-3 sm:px-6 py-10 sm:py-16 max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] text-center mb-6 sm:mb-10">
      Vos problématiques, mes solutions
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {items.map((p, i) => (
        <div key={i} className="flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-[#00246C]/90 border border-[#0A2F80]">
          <p.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF1493] flex-shrink-0" />
          <span className="text-sm sm:text-base text-gray-100">{p.text}</span>
        </div>
      ))}
    </div>
  </section>
);

const Offers = ({ items }) => (
  <section id="offres" className="px-3 sm:px-6 py-10 sm:py-16 max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] text-center mb-6 sm:mb-10">Mes offres</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((offer, i) => (
        <Card
          key={i}
          className={`rounded-2xl shadow-lg overflow-hidden ${
            offer.name === "Prestige"
              ? "bg-[#FF1493] text-[#00246C]"
              : "bg-gradient-to-br from-[#00246C] to-[#001A4A] text-white border border-[#0A2F80]"
          }`}
        >
          <CardHeader className="p-5 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl text-center font-bold">{offer.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-5 sm:p-6 pt-0 text-center space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base opacity-90">{offer.desc}</p>
            <p className="text-lg sm:text-xl font-bold">{offer.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

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
            <div key={i} className="w-full flex-shrink-0 p-3 sm:p-6">
              <Card className="bg-gradient-to-br from-[#00246C] to-[#001A4A] text-white border border-[#0A2F80] rounded-2xl shadow-xl relative">
                <CardHeader className="p-5 sm:p-6">
                  <CardTitle className="text-lg sm:text-2xl font-bold text-center text-[#FF1493]">{gestion.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 sm:p-6 pt-0 space-y-2 text-left">
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
      <button aria-label="Précédent" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#001A4A]/90 backdrop-blur px-3 py-1.5 sm:py-2 rounded-full border border-[#0A2F80]">‹</button>
      <button aria-label="Suivant" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#001A4A]/90 backdrop-blur px-3 py-1.5 sm:py-2 rounded-full border border-[#0A2F80]">›</button>
      <div className="flex justify-center gap-2 mt-3 sm:mt-4">
        {gestions.map((_, i) => (
          <button key={i} aria-label={`Aller à la gestion ${i + 1}`} onClick={() => setCurrent(i)} className={`h-2 w-5 sm:w-6 rounded-full ${i === current ? "bg-[#FF1493]" : "bg-gray-500"}`} />
        ))}
      </div>
    </div>
  );
}

const GestionSliderSection = ({ gestions }) => (
  <section className="px-3 sm:px-6 py-10 sm:py-16 max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] text-center mb-6 sm:mb-8">Mes Prestations</h2>
    <GestionCarousel gestions={gestions} />
  </section>
);

const Testimonials = () => (
  <section className="px-3 sm:px-6 py-10 sm:py-16 max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] text-center mb-6 sm:mb-10">Ce que disent mes clients</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
      {[
        {
          text:
            "Excellente gestionnaire, professionnelle, réactive et toujours à l’écoute. Fiable, compétente et avec d'excellents conseils. Elle est un véritable soutien et un atout précieux pour mon entreprise.",
          author: "Théophile MARSAULT",
        },
      ].map((t, i) => (
        <blockquote key={i} className="bg-[#00246C]/90 p-4 sm:p-6 rounded-xl border border-[#0A2F80]">
          <p className="italic mb-3 sm:mb-4 text-sm sm:text-base">“{t.text}”</p>
          <footer className="font-semibold text-[#FF1493] text-xs sm:text-sm">— {t.author}</footer>
        </blockquote>
      ))}
    </div>
  </section>
);

/************************
 * Formulaire (mobile‑first & homogène)
 ************************/
function ContactForm({ gestions, email, phone }) {
  return (
    <section id="contact" className="px-3 sm:px-6 py-12 sm:py-16 bg-gradient-to-r from-[#001A4A] via-[#00246C] to-[#001A4A] rounded-none sm:rounded-2xl sm:mx-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#FF1493] mb-6 sm:mb-8 text-center">Contactez‑moi</h2>

      <form className="max-w-3xl mx-auto grid gap-3 sm:gap-4">
        {/* Nom / Prénom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Nom" />
          <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Prénom" />
        </div>

        {/* Forme juridique / Société */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Forme Juridique" />
          <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Société" />
        </div>

        {/* Adresse */}
        <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Adresse" />

        {/* Code postal / Ville */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Code postal" />
          <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Ville" />
        </div>

        {/* Téléphone / Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Téléphone" />
          <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Votre email" />
        </div>

        {/* Prestations (checkbox) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <label className="flex items-center justify-between gap-3 w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white border border-[#0A2F80] focus-within:ring-2 focus-within:ring-[#FF1493]/60">
            <span className="text-sm sm:text-base">Présentiel</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF1493]" />
          </label>
          <label className="flex items-center justify-between gap-3 w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white border border-[#0A2F80] focus-within:ring-2 focus-within:ring-[#FF1493]/60">
            <span className="text-sm sm:text-base">À distance</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF1493]" />
          </label>
        </div>

        {/* Sélecteur lié à prestations */}
        <select className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]">
          <option value="">Sélectionnez une prestation</option>
          {DATA.prestations.flatMap((g, i) => g.desc.slice(1).map((d, j) => (
            <option key={`${i}-${j}`} value={`${g.name} - ${d}`}>{g.name} - {d}</option>
          )))}
        </select>

        {/* Objet / Message */}
        <input className="w-full min-h-12 p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Objet" />
        <textarea className="w-full p-3 sm:p-4 rounded-xl bg-[#001A4A]/80 text-white placeholder-gray-300 text-sm sm:text-base border border-[#0A2F80] focus:outline-none focus:ring-2 focus:ring-[#FF1493]/60 focus:border-[#FF1493]" placeholder="Demande" rows={5}></textarea>

        <Button className="w-full sm:w-auto justify-center bg-[#FF1493] hover:bg-pink-600 text-[#00246C] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg">
          Envoyer
        </Button>
      </form>

      <div className="text-center mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base">
        <p>{email} | {phone}</p>
      </div>
    </section>
  );
}

/********************
 * Page export
 ********************/
export default function OnePagePremium() {
  const { site, problems, offers, gestions, keywords } = DATA;
  return (
    <div className="bg-gradient-to-b from-[#001A4A] via-[#00246C] to-[#001A4A] text-white min-h-screen">
      <SEOHead title={site.title} description={site.description} keywords={keywords} />
      <SEOHiddenKeywords keywords={keywords} />

      <SiteHeader logoSrc={site.logoSrc} enterprise={site.enterprise}/>
      <Hero title={site.title} description={site.description} />
      <Problems items={problems} />
      <GestionSliderSection gestions={gestions} />
      <Offers items={offers} />
      <Testimonials />
      <ContactForm gestions={gestions} email={site.email} phone={site.phone} />

      <footer className="px-4 py-8 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} OC Conseil & Solutions — Tous droits réservés
      </footer>
    </div>
  );
}
