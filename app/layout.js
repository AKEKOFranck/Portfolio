import "./globals.css";
import { Cinzel, Inter } from "next/font/google";
import Background from "@/components/Background";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";
import Intro from "@/components/Intro";
import Spotlight from "@/components/Spotlight";

const display = Cinzel({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "Maurice Akeko | Juriste en droit public et développeur front-end",
  description: "Portfolio de Maurice Akeko : droit public, développement front-end, sites Next.js et React.",
};
export const viewport = { themeColor: "#f5f4f1", viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <Background />
        <Spotlight />
        <Intro />
        <div className="app">
          <Navigation />
          <main className="stage">
            <Topbar />
            <div className="pane">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}