import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { FaBookJournalWhills } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Navigation() {
  const dataNav = [
  {
    id: 1,
    icon: <MdHome />,
    link: "/",
  },
  {
    id: 2,
    icon: <FaBookJournalWhills />,
    link: "/about",
  },
  {
    id: 3,
    icon: <FaGithub />,
    link: "https://github.com/AKEKOFranck",
  },
];

  return (
    
      <main className={styles.header}>
        <h3 className={styles.logo}>
          Maurice AKEKO
        </h3>

        <nav className={styles.nav}>
          {dataNav.map((item) =>(
           <Link
  key={item.id}
  href={item.link}
  target={item.link.startsWith("http") ? "_blank" : "_self"}
  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
>
  <div className={styles.icon}>
    {item.icon}
  </div>
</Link>
          ))}
        </nav>
      </main>
   
  );
}
