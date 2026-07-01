import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0D1117",
};

export const metadata: Metadata = {
  title: "Matheus Teixeira — Software Developer",
  description:
    "Desenvolvo plataformas web, automações e dashboards do zero — com usuários ativos, métricas mensuráveis e código em produção.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
