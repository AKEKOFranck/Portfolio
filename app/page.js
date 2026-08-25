import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const dataWork = [
    {
      id: 1,
      description:
        "Une ONG qui lutte pour rendre le droit accessible à tous et qui se préoccupe des prisonniers",
      link: "https://ong-ensemble.vercel.app/",
      pic: "/FondWork (1).png",
    },
    {
      id: 2,
      description: "Un site de vente de produits cosmétiques",
      link: "https://all-for-beauty.vercel.app/",
      pic: "/FondWork (2).png",
    },
    {
      id: 3,
      description: "Un site pour une entreprise de rénovation",
      link: "https://em-2-renov.vercel.app/",
      pic: "/FondWork (3).png",
    },
    {
      id: 4,
      description: "Une plateforme digitale",
      link: "https://maucode2.vercel.app/",
      pic: "/FondWork (4).png",
    },
    {
      id: 5,
      description: "Un foodtruck à Abidjan",
      link: "https://foodtruck-lac.vercel.app/",
      pic: "/FondWork (5).png",
    },
    {
      id: 6,
      description: "Un site pour une entreprise de massage",
      link: "https://spa-service-seven.vercel.app/",
      pic: "/FondWork (6).png",
    },
    {
      id: 7,
      description:
        "Un site pour un restaurant avec réservation possible via Gmail",
      link: "https://le-resto-murex.vercel.app/",
      pic: "/FondWork (7).png",
    },
  ];

  const skillsDev = [
    { label: "HTML / CSS", value: 90 },
    { label: "JavaScript / Python", value: 75 },
    { label: "React.js / Next.js", value: 68 },
    { label: "Bureautique (Word, Excel, PowerPoint)", value: 85 },
  ];

  const skillsDroit = [
    { label: "Recherche juridique", value: 85 },
    { label: "Esprit d'analyse et de synthèse", value: 90 },
    { label: "Argumentation juridique", value: 82 },
    { label: "Droit public et administratif", value: 85 },
  ];

  const timeline = [
    {
      date: "2021 — 2022",
      title: "Baccalauréat",
      org: "Collège Notre Dame d'Afrique de Bietry",
      desc: "Le point de départ de l'histoire.",
      side: "dev",
    },
    {
      date: "Septembre 2023",
      title: "Certificat — Coding with Python",
      org: "Gomycode",
      desc: "Variables, structures de contrôle, fonctions et manipulation de données : la logique de programmation posée noir sur blanc.",
      side: "dev",
    },
    {
      date: "Octobre 2024",
      title: "Certificat — Introduction to Web Development",
      org: "Gomycode",
      desc: "HTML, CSS et JavaScript : structurer, mettre en forme et rendre une page vivante, avec de bonnes pratiques de responsive design.",
      side: "dev",
    },
    {
      date: "2024 — 2025",
      title: "Licence en Droit Public",
      org: "Université Internationale Privée d'Abidjan",
      desc: "L'entrée officielle dans l'arène du droit public et administratif.",
      side: "droit",
    },
    {
      date: "2026",
      title: "Délégué — OIJD Model United Nations",
      org: "Délégué de la Russie, Comité ECOSOC — Abidjan",
      desc: "Négociation, argumentation et rédaction de résolutions dans un cadre multilatéral simulé.",
      side: "droit",
    },
    {
      date: "2026 — Présent",
      title: "Membre, Département Informatique",
      org: "Organisation Internationale pour la Jeunesse Diplomatique (OIJD)",
      desc: "Appui technique et numérique aux projets et événements diplomatiques de l'organisation.",
      side: "dev",
    },
    {
      date: "Juillet 2026",
      title: "Formation en rédaction d'actes juridiques",
      org: "Formation professionnelle",
      desc: "Les compétences nécessaires à la rédaction des principaux actes juridiques.",
      side: "droit",
    },
  ];

  return (
    <main className={styles.main}>
      {/* ============ HERO / SPLASH PAGE ============ */}
      <section className={styles.hero}>
        <div className={`${styles.heroHalf} ${styles.heroDev}`} />
        <div className={`${styles.heroHalf} ${styles.heroDroit}`} />
        <div className={styles.speedBurst} />

        <div className={styles.heroTag}>
          <span>AKEKO — VOL. 01</span>
          <span>ABIDJAN, CÔTE D&apos;IVOIRE</span>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.kicker}>Le portfolio de</div>
          <h1 className={`${styles.name} ${styles.shout}`}>
            AKEKO MAURICE
            <br />
            FRANCK EMMANUEL
          </h1>

          <div className={styles.duality}>
            <span
              className={`${styles.dualityWord} ${styles.dualityWordDev} ${styles.shout}`}
            >
              CODE
            </span>
            <span className={`${styles.dualityX} ${styles.shout}`}>×</span>
            <span
              className={`${styles.dualityWord} ${styles.dualityWordDroit} ${styles.shout}`}
            >
              DROIT
            </span>
          </div>

          <p className={styles.heroSub}>
            Développeur front-end en free-lance et étudiant en Master de
            Droit Public. Deux disciplines, une même rigueur : construire
            des interfaces solides et défendre des arguments bien
            structurés.
          </p>
        </div>

        <div className={styles.heroScroll}>Scroll</div>
      </section>

      {/* ============ COMPETENCES ============ */}
      <section className={styles.chapter}>
        <div className={styles.chapterHead}>
          <span className={`${styles.chapterNum} ${styles.eyebrow}`}>
            Chapitre 01
          </span>
          <h2 className={`${styles.chapterTitle} ${styles.shout}`}>
            Compétences
          </h2>
        </div>

        <div className={styles.statsGrid}>
          {/* DEV PANEL */}
          <div className={`${styles.panel} ${styles.statPanel} ${styles.statPanelDev}`}>
            <div className={styles.statPanelHead}>
              <svg className={styles.statIcon} viewBox="0 0 48 48" fill="none">
                <rect x="3" y="3" width="42" height="42" stroke="currentColor" strokeWidth="2.5" />
                <path d="M16 16L9 24L16 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                <path d="M32 16L39 24L32 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                <path d="M27 13L21 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
              </svg>
              <div>
                <h3>Développeur</h3>
                <p>front-end — 11 sites livrés</p>
              </div>
            </div>

            {skillsDev.map((s) => (
              <div className={styles.statRow} key={s.label}>
                <div className={styles.statLabelRow}>
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className={styles.statTrack}>
                  <div className={styles.statFill} style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}

            <div className={styles.softSkills}>
              <span className={styles.softBadge}>6× Next.js</span>
              <span className={styles.softBadge}>3× React.js</span>
              <span className={styles.softBadge}>1× HTML/CSS</span>
              <span className={styles.softBadge}>Anglais B1</span>
            </div>
          </div>

          {/* DROIT PANEL */}
          <div className={`${styles.panel} ${styles.statPanel} ${styles.statPanelDroit}`}>
            <div className={styles.statPanelHead}>
              <svg className={styles.statIcon} viewBox="0 0 48 48" fill="none">
                <path d="M24 6V42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                <path d="M8 42H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                <path d="M24 6L10 14M24 6L38 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                <path d="M10 14L4 26H16L10 14Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                <path d="M38 14L32 26H44L38 14Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
              </svg>
              <div>
                <h3>Juriste</h3>
                <p>Master en Droit Public</p>
              </div>
            </div>

            {skillsDroit.map((s) => (
              <div className={styles.statRow} key={s.label}>
                <div className={styles.statLabelRow}>
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className={styles.statTrack}>
                  <div className={styles.statFill} style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}

            <div className={styles.softSkills}>
              <span className={styles.softBadge}>Délégué MUN — ECOSOC</span>
              <span className={styles.softBadge}>OIJD</span>
              <span className={styles.softBadge}>Français C2</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARCOURS / TIMELINE ============ */}
      <section className={styles.chapter}>
        <div className={styles.chapterHead}>
          <span className={`${styles.chapterNum} ${styles.eyebrow}`}>
            Chapitre 02
          </span>
          <h2 className={`${styles.chapterTitle} ${styles.shout}`}>
            Parcours
          </h2>
        </div>

        <div className={styles.timeline}>
          {timeline.map((t, i) => (
            <div className={styles.tlItem} key={i}>
              <span
                className={`${styles.tlDot} ${
                  t.side === "dev" ? styles.tlDotDev : styles.tlDotDroit
                }`}
              />
              <div className={styles.tlTop}>
                <span className={styles.tlDate}>{t.date}</span>
                <span className={styles.tlTitle}>{t.title}</span>
              </div>
              <div className={styles.tlOrg}>{t.org}</div>
              <p className={styles.tlDesc}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PROJETS ============ */}
      <section className={styles.chapter}>
        <div className={styles.chapterHead}>
          <span className={`${styles.chapterNum} ${styles.eyebrow}`}>
            Chapitre 03
          </span>
          <h2 className={`${styles.chapterTitle} ${styles.shout}`}>
            Mes travaux
          </h2>
        </div>

        <p className={styles.projectsIntro}>
          Sept sites conçus et développés en free-lance, du site vitrine à la
          plateforme avec réservation intégrée.
        </p>

        <div className={styles.container}>
          {dataWork.map((idx, i) => (
            <div className={styles.box} key={idx.id}>
              <div className={styles.imageBox}>
                <Image
                  src={idx.pic}
                  alt={idx.description}
                  width={900}
                  height={600}
                  className={styles.image}
                />
              </div>

              <span className={styles.cardNum}>
                {String(i + 1).padStart(2, "0")} / {String(dataWork.length).padStart(2, "0")}
              </span>

              <div className={styles.desc}>{idx.description}</div>

              <Link href={idx.link} className={styles.Link} target="_blank">
                Visiter →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CONTACT / FIN ============ */}
      <footer className={styles.footer}>
        <span className={`${styles.eyebrow} ${styles.dualityWordDev}`} style={{ color: "var(--paper)" }}>
          Fin du chapitre — à suivre
        </span>
        <h2 className={`${styles.footerShout} ${styles.shout}`} style={{ marginTop: 14 }}>
          Travaillons ensemble
        </h2>
        <p className={styles.footerSub}>
          Disponible pour des missions de développement front-end ou pour
          échanger sur le droit public et les relations internationales.
          Un message suffit pour commencer l&apos;histoire.
        </p>

        <div className={styles.footerLinks}>
          <a href="mailto:fm0055970@gmail.com" className={styles.footerLink}>
            fm0055970@gmail.com
          </a>
          <a href="tel:+2250789763083" className={styles.footerLink}>
            +225 07-89-76-30-83
          </a>
          <a href="#" className={styles.footerLink}>
            GitHub
          </a>
          <a href="#" className={styles.footerLink}>
            LinkedIn
          </a>
        </div>

        <div className={styles.footerEnd}>
          <span>Akeko Maurice Franck Emmanuel</span>
          <span>Abidjan, Côte d&apos;Ivoire</span>
        </div>
      </footer>
    </main>
  );
}