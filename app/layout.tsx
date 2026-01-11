import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estudio Jurídico Robledo y Cía - Excelencia Legal con Visión Moderna",
  description: "Asesoría jurídica integral para empresas y particulares. Especialistas en Derecho Corporativo, Litigios Civiles y Protección Patrimonial. Más de 15 años de experiencia.",
  keywords: ["abogados", "estudio jurídico", "derecho corporativo", "litigios civiles", "asesoría legal", "Chile", "Robledo"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Estudio Jurídico Robledo y Cía",
    description: "Excelencia Legal con Visión Moderna",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter">{children}<Analytics /></body>
    </html>
  );
}
