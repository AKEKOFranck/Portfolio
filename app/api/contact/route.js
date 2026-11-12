import { NextResponse } from "next/server";

const hits = new Map(); // limite simple : 3 messages / 10 min / IP
const fail = (error, status) => NextResponse.json({ error }, { status });

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 600000);
  if (recent.length >= 3) return fail("Trop de messages. Réessayez dans quelques minutes.", 429);

  let body;
  try { body = await req.json(); } catch { return fail("Requête invalide.", 400); }

  const { name = "", email = "", message = "", website = "" } = body;
  if (website) return NextResponse.json({ ok: true }); // piège anti-robots

  const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 120;
  if (name.length < 2 || name.length > 80 || !okEmail || message.length < 10 || message.length > 3000) {
    return fail("Vérifiez les champs du formulaire.", 400);
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!key || !to) return fail("Le service d’envoi n’est pas configuré.", 500);

  const cleanName = name.replace(/[\r\n]+/g, " ");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio : message de ${cleanName}`,
      text: `${message}\n\nDe : ${cleanName} <${email}>`,
    }),
  });
  if (!res.ok) return fail("L’envoi a échoué. Réessayez plus tard.", 502);

  hits.set(ip, [...recent, now]);
  return NextResponse.json({ ok: true });
}