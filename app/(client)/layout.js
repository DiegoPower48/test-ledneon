import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "./components/index";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NeonLedStore",
  description:
    "Descubrexd luces LED personalizadas y decorativas. Ilumina tus espacios con estilo único, calidad premium y diseños modernos.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/home/logo_mlg_letras_doradas_con_iluminacion.webp"
          imagesrcset="/home/logo_mlg_letras_doradas_con_iluminacion.webp"
          imagesizes="100vw"
          fetchpriority="high"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
