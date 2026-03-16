import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adota Fácil — Plataforma de Adoção Animal para ONGs",
  description: "SaaS multitenant para ONGs de proteção animal. CMS para páginas web, gestão de animais e acompanhamento de pós-adoção.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
