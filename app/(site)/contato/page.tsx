import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contato — Matheus Teixeira",
  description: "Fale com Matheus Teixeira sobre um projeto ou peça uma demo ao vivo.",
};

export default function ContatoPage() {
  return (
    <main className="main">
      <Contact />
      <Footer />
    </main>
  );
}
