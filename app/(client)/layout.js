
import { Header, Footer } from "./components/index";
import Head from "next/head";


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
        <link rel="preload" as="image"
      href="https://test.ledneonpublicidad.com/path/to/lcp-mobile.webp"
      media="(max-width:767px)"
      type="image/webp"></link>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
