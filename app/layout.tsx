import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robledo & Cía - Excelencia Legal. Visión Moderna.",
  description: "Asesoría jurídica integral para empresas y particulares en el siglo XXI. Estudio jurídico moderno especializado en Derecho Corporativo, Litigios Civiles y Protección Patrimonial.",
  keywords: ["abogados", "estudio jurídico", "derecho corporativo", "litigios civiles", "asesoría legal"],
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-lato">{children}</body>
    </html>
  );
}
