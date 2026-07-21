import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function About() {

  return (
    
      <main className={styles.main}>
        <section className={styles.left}>
             <h1 className={styles.title}> Maurice AKEKO </h1>

             <p className={styles.description}>
                Étudiant en Master de Droit public et développeur front-end en freelance, je combine rigueur juridique et compétences techniques pour concevoir des solutions adaptées aux besoins des organisations et des entreprises. Passionné par le droit international, la diplomatie, le droit administratif et constitutionnel, je m'intéresse également de près aux enjeux du numérique et à leur impact sur les pratiques juridiques modernes.

Toujours en formation dans ces deux domaines, je cultive une réelle envie d'apprendre et de me perfectionner continuellement, que ce soit à travers l'analyse juridique, la veille sur les relations internationales, ou l'approfondissement de mes compétences en programmation. Curieux, rigoureux et adaptable, je considère chaque projet comme une occasion de conjuguer esprit critique et créativité.
             </p>

        </section>
         <section className={styles.right}>
             <Image src={"/FondAbout.png"} alt="image" width={500} height={500} className={styles.image}/>
        </section>
      </main>
   
  );
}
