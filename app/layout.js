import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation/page';
import Footer from './components/Footer/page';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-title",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Maurice AKEKO | Développeur Front-End & Juriste",
  description:
    "Portfolio de Maurice AKEKO, développeur Front-End spécialisé en interfaces modernes. Juriste de formation, je conçois des expériences numériques élégantes, performantes et accessibles.",
  keywords: [
    "Maurice AKEKO",
    "Portfolio",
    "Développeur Front-End",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Juriste",
    "UI Design",
    "Web Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <Navigation/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}