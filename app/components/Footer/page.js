import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {

  const dataFooter = [
    {
      id:1,
      icon: <MdOutgoingMail />,
      link:"mailto:em0055970@gmail.com",
    },
    {
      id:2,
      icon: <FaLinkedinIn />,
      link:"https://www.linkedin.com/in/maurice-franck-akeko-461881315",
    },
  ]
  return (
    
      <main className={styles.footer}>
      <h2 className={styles.title}>
        Contact
      </h2>

      <div className={styles.box}>
        {dataFooter.map((index) =>(
          <Link key={index.id} href={index.link} className={styles.icon}>
            {index.icon}
          </Link>
        ))}
      </div>
      </main>
   
  );
}
