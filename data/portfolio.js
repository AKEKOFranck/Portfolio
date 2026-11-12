// Fonds d'écran : une image par page (fichiers du dossier public/).
// Mets null pour une page sans image. "default" sert aux pages non listées.
export const backgrounds = {
  "/": "/fondMain.jpg",
  "/about": "/FondAbout.png",
  "/skills": "/FondMain.png",
  "/projects": "/fondPro.jpg",
  "/contact": "/fondContact.jpg",
  default: null,
};

export const links = {
  github: "https://github.com/AKEKOFranck",
  linkedin: "https://www.linkedin.com/in/maurice-franck-akeko-461881315",
};

export const nav = [
  { href: "/", label: "Accueil", rune: "ᚠ" },
  { href: "/about", label: "Parcours", rune: "ᚱ" },
  { href: "/skills", label: "Compétences", rune: "ᛉ" },
  { href: "/projects", label: "Projets", rune: "ᛟ" },
  { href: "/contact", label: "Contact", rune: "ᛗ" },
];

export const stats = [
  { value: "11", label: "sites en ligne" },
  { value: "6", label: "projets clients" },
  { value: "2", label: "profils : juriste et développeur" },
];
export const parcours = [
  { rune: "ᚦ", title: "Droit public", text: "Licence en droit public à l’Université Internationale Privée d’Abidjan (2024-2025), puis Master 2 en cours. Droit administratif et institutions." },
  { rune: "ᚨ", title: "Droit du numérique", text: "Passionné par le droit du numérique, notamment dans son rapport aux institutions. Mon Master 2 de droit public nourrit une démarche de recherche à la croisée du droit et de la technique." },
  { rune: "ᛉ", title: "Diplomatie", text: "Délégué de la Russie au comité ECOSOC du Model United Nations de l’OIJD à Abidjan (2026). Membre du département informatique de l’OIJD." },
  { rune: "ᚲ", title: "Développement front-end", text: "Freelance. Certifié Gomycode en Python (2023) et en développement web (2024). 6 sites en Next.js, 3 en React.js, 1 en HTML/CSS." },
  { rune: "ᛗ", title: "Formation juridique", text: "Formation en rédaction d’actes juridiques (juillet 2026). Baccalauréat en 2022 au Collège Notre Dame d’Afrique de Bietry." },
];

export const skills = [
  { title: "Développer", text: "Des sites rapides, adaptés au mobile.", tags: ["HTML/CSS", "JavaScript", "Python", "React.js", "Next.js"] },
    { title: "Analyser", text: "Comprendre, argumenter, rédiger.", tags: ["Recherche juridique", "Analyse et synthèse", "Argumentation", "Rédaction de contrats", "Droit public et administratif", "Droit du numérique", "Institutions"] },
  { title: "Outils et langues", text: "Autonome au bureau et à l’international.", tags: ["Word", "Excel", "PowerPoint", "Français C2", "Anglais B1"] },
];

export const projects = [
  { kind: "client", name: "MauCodeWeb", tag: "Plateforme", url: "https://maucode-web.vercel.app/", text: "Formation Office (Word, Excel, PowerPoint) et création de sites web à Abidjan." },
  { kind: "client", name: "Roba Shop", tag: "E-commerce", url: "https://roba-shop.vercel.app/", text: "Boutique en ligne avec panier et commande simple." },
  { kind: "client", name: "All For Beauty", tag: "Beauté", url: "https://all-for-beauty.vercel.app/", text: "Site d’un institut de beauté, élégant et rassurant." },
  { kind: "client", name: "Hôtel Chemoa", tag: "Hôtel", url: "https://chemoa-hotel.vercel.app/", text: "Présentation des chambres et prise de contact rapide." },
  { kind: "client", name: "ONG Ensemble", tag: "Association", url: "https://ong-ensemble.vercel.app/", text: "Missions, actions et appel au soutien d’une association." },
  { kind: "client", name: "EM2 Rénov", tag: "Bâtiment", url: "https://em-2-renov.vercel.app/", text: "Vitrine d’une entreprise de rénovation et de ses chantiers." },
  { kind: "client", name: "FlowFit", tag: "Site vitrine", url: "https://marcial-web.vercel.app/", text: "Présentation d’un coach sportif et de ses services." },
  { kind: "concept", name: "Coffee Shop", tag: "Restaurant", url: "https://coffee-shop-nine-ecru.vercel.app/", text: "Concept de café chaleureux avec carte et ambiance." },
  { kind: "concept", name: "Hair We", tag: "Beauté", url: "https://hair-we.vercel.app/", text: "Concept de salon de coiffure moderne." },
  { kind: "concept", name: "Web Dress", tag: "E-commerce", url: "https://web-dress.vercel.app/", text: "Concept de boutique de mode en ligne." },
  { kind: "concept", name: "Resto Web", tag: "Restaurant", url: "https://resto-web-two.vercel.app/", text: "Concept de restaurant avec menu et réservation." },
  { kind: "concept", name: "FoodTruck", tag: "Restaurant", url: "https://foodtruck-lac.vercel.app/", text: "Concept de food truck : menu, lieux et commande." },
];

export const vitrineUrl = "https://maucode-vitrine.vercel.app/";