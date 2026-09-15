import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Montserrat } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LJ Chirombo — Digital Designer",
  description:
    "Portfolio of Lovejoy Chirombo — Digital Designer with skills in printmaking, animation, web design, UI/UX, and programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${montserrat.variable} ${caveat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
