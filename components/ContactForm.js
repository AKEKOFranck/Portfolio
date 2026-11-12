"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ status: "idle", msg: "" });

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setState({ status: "sending", msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(f)),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Envoi impossible.");
      form.reset();
      setState({ status: "ok", msg: "Message envoyé. Je vous réponds rapidement." });
    } catch (err) {
      setState({ status: "error", msg: err.message });
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <input name="name" required minLength={2} maxLength={80} placeholder="Votre nom" aria-label="Nom" />
      <input name="email" type="email" required maxLength={120} placeholder="Votre e-mail" aria-label="E-mail" />
      <textarea name="message" required minLength={10} maxLength={3000} rows={5} placeholder="Votre message" aria-label="Message" />
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button className="btn p" type="submit" disabled={state.status === "sending"}>
        {state.status === "sending" ? "Envoi en cours" : "Envoyer le message"}
      </button>
      <p role="status" className={"note " + state.status}>{state.msg}</p>
    </form>
  );
}