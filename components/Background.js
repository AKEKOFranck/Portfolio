"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { backgrounds } from "@/data/portfolio";

export default function Background() {
  const path = usePathname();
  const src = backgrounds[path] ?? backgrounds.default ?? null;
  const [layers, setLayers] = useState([src]);

  useEffect(() => {
    setLayers((l) => (l[l.length - 1] === src ? l : [l[l.length - 1], src]));
    const t = setTimeout(() => setLayers([src]), 1300);
    return () => clearTimeout(t);
  }, [src]);

  return (
    <div className="bg" aria-hidden="true">
      {layers.map((s) =>
        s ? <div key={s} className="bg-img" style={{ backgroundImage: `url("${encodeURI(s)}")` }} /> : null
      )}
      <div className="bg-shade" />
    </div>
  );
}