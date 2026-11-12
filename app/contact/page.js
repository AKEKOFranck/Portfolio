import Screen from "@/components/Screen";
import ContactForm from "@/components/ContactForm";
import { links } from "@/data/portfolio";

export const metadata = { title: "Contact | Maurice Akeko" };

export default function Contact() {
  return (
    <Screen title="Contact" subtitle="Disponible pour échanger">
      <p className="lead">Un poste en droit, un projet web ou une question ? Laissez-moi un message, je vous réponds.</p>
      <ContactForm />
      <div className="btns">
        <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </Screen>
  );
}