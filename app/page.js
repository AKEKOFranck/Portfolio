import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const dataWork = [
    {
      id:1,
      description:"Une ong qui lutte pour rendre le droit accessible à tous et qui se préoccupe des prisonniers",
      link:"https://ong-ensemble.vercel.app/",
      pic:"/FondWork (1).png",
    },
     {
      id:2,
      description:"un site de vente de produit cosmetique",
      link:"https://all-for-beauty.vercel.app/",
      pic:"/FondWork (2).png",
    },
     {
      id:3,
      description:"un site pour de la renovation",
      link:"https://em-2-renov.vercel.app/",
      pic:"/FondWork (3).png",
    },
     {
      id:4,
      description:"une plateforme digital",
      link:"https://maucode2.vercel.app/",
      pic:"/FondWork (4).png",
    },
     {
      id:5,
      description:"un foodtruck à abidjan",
      link:"https://foodtruck-lac.vercel.app/",
      pic:"/FondWork (5).png",
    },
     {
      id:6,
      description:"un site pour une entreprise de massage",
      link:"https://spa-service-seven.vercel.app/",
      pic:"/FondWork (6).png",
    },
     {
      id:7,
      description:"un site pour un resto avec une possibilité de réservation via Gmail",
      link:"https://le-resto-murex.vercel.app/",
      pic:"/FondWork (7).png",
    },
  ]
  return (
    
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.title}>
            Developpeur Web Front
          </h2>
           <h2 className={styles.title}>
            ET
          </h2>
           <h2 className={styles.title}>
            Juriste en formation
          </h2>
        </section>

        <section className={styles.second}>
          <div className={styles.Secondtitle}>
            DECOUVRER MES TRAVAUX
          </div>

          <div className={styles.container}>
            {dataWork.map((idx) =>(
               <div className={styles.box} key={idx.id}>
               <Image src={idx.pic} alt="imageWork" width={900} height={600} className={styles.imageBox}>
               </Image>

               <div className={styles.desc}>
                {idx.description}
               </div>

               <Link href={idx.link} className={styles.Link}>
              Visiter
               </Link>
            </div>
            ))}
          </div>
        </section>
      </main>
   
  );
}
