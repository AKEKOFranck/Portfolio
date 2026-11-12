"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/portfolio";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className="dock" aria-label="Navigation principale">
      <div className="logo">MAURICE</div>
      {nav.map((n) => (
        <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}>
          <span>{n.rune}</span>
          {n.label}
        </Link>
      ))}
    </nav>
  );
}