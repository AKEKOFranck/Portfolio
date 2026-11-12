"use client";
import { useEffect, useState } from "react";

export default function Intro() {
  const [s, setS] = useState("show");

  useEffect(() => {
    try { if (sessionStorage.getItem("intro")) setS("gone"); } catch {}
  }, []);

  const enter = () => {
    if (s !== "show") return;
    try { sessionStorage.setItem("intro", "1"); } catch {}
    setS("out");
    setTimeout(() => setS("gone"), 900);
  };

  useEffect(() => {
    const k = (e) => { if (e.key === "Enter" || e.key === " ") enter(); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });

  if (s === "gone") return null;
  return (
    <div className={"intro" + (s === "out" ? " out" : "")} onClick={enter} role="button" tabIndex={0} aria-label="Entrer dans le portfolio">
      <button className="skip" onClick={enter}>Passer</button>
      <div>
        <div className="ring">
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <defs><path id="rp" d="M150,150 m-122,0 a122,122 0 1,1 244,0 a122,122 0 1,1 -244,0" /></defs>
            <circle className="c" cx="150" cy="150" r="140" />
            <circle className="c c2" cx="150" cy="150" r="98" />
            <g className="spin"><text className="r"><textPath href="#rp">ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ</textPath></text></g>
          </svg>
          <div className="who"><b>MAURICE</b><i>Juriste en droit public et développeur front-end</i></div>
        </div>
        <div className="press">Appuyez sur Entrée pour commencer</div>
      </div>
    </div>
  );
}