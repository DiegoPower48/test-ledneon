import { Montserrat } from 'next/font/google';
import "../styles/globals.css";
import { WhatsAppButton } from "./(client)/components/index";
import Head from 'next/head';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-montserrat',
});

export const metadata = {
  title: "Neon Led Publicidad _ Inicio",
   description: "Transforma tu marca con Neones LED, Pantallas publicitarias, vinilos personalizados y más. Diseños innovadores, instalación profesional y atención local.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head  >
<link rel="preload" as="image" href="https://res.cloudinary.com/dqaetlpog/image/upload/v1752942676/logo_mlg_letras_doradas_con_iluminacion_s2wy9w.webp" />
        <link rel="preload" as="image" href="/home/logo_mlg_letras_doradas_con_iluminacion_mobile.webp" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
         <WhatsAppButton />
      </body>
    </html>
  );
}
