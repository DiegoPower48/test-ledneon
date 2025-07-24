import Image from "next/image";
import NuestrosProductos from "./productos/components/NuestrosProductos";
import FilaProductos from "./productos/components/FilaProductos";
import Slider from "./components/slider/Slider";
import Slider2 from "./components/slider2/Slider2";

const AboutStatic = () => (
  <section className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-[--azul_brillante] to-[--azul_cobalto] text-white p-4 md:p-8 w-4/5 max-w-4xl mx-auto rounded-2xl shadow-lg mb-12">
    <h1 className="text-sm md:text-4xl font-bold mb-3">NOSOTROS</h1>
    <span className="w-16 border-2 border-white mb-3"></span>
    <p className="text-sm font-medium md:text-lg leading-relaxed max-w-full text-center sm:text-center whitespace-normal break-words px-10 ">
        Nosotros somos Neón led publicidad una empresa formal que <br /> se dedica a la creación de espacios personalizados que <br /> transforman tu negocio con estilo y personalidad
    </p>
  </section>
);

export default function Home() {
  const fila1 = [
    {
      imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942883/letrero_crocs_verde_con_letras_blancas_nzenlb.webp",
      altText: "Producto 1",
      description: "LETRAS DE ACRÍLICO",
      route: "/productos/letras-acrilico"
    },
    {
      imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942882/logo_lux_nails_studio_iluminado_en_dorado_v6ihnx.webp",
      altText: "Producto 2",
      description: "LETRAS DORADAS Y PLATEADAS",
      route: "/productos/letras-doradas"
    },
    {
      imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942883/fachada_farmacia_maria_pacheco_con_cruz_verde_gsqtzk.webp",
      altText: "Fachada de Farmacia Lda. Maria Pacheco con cruz verde luminosa",
      description: "LETREROS LUMINOSOS",
      route: "/productos/letreros-luminosos"
    },
    {
      imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942884/letrero_woks_cerveza_artesanal_neon_verde_y_ambar_b7up1y.webp",
      altText: "Letrero neón de Wok's Cerveza Artesanal en colores verde y ámbar de noche",
      description: "LETRAS DE NEÓN",
      route: "/productos/letras-neon"
    },
  ];

  const slidesData = [
    { imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942676/logo_mlg_letras_doradas_con_iluminacion_s2wy9w.webp", altText: "Logotipo dorado iluminado de MLG en pared de oficina" },
    { imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942675/letreros_negocio_2_rvnini.webp", altText: "Letrero iluminado de Bembos" },
    { imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942673/letrero_neon_tienda_tatuajes_tattoo_c8smhh.webp", altText: "Letrero neón con diseño de máquina de tatuajes y palabra Tattoo en vidriera" },
    { imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942674/letrero_tambo_colores_amarillo_y_magenta_k7cqaa.webp", altText: "Letrero luminoso de Tambo con fondo amarillo y letras magenta" },
  ];

  const slidesDataMovil = [
    { imgSrc: "/home/logo_mlg_letras_doradas_con_iluminacion_mobile.webp", altText: "Logotipo dorado iluminado de MLG en pared de oficina" },
    { imgSrc: "/home/letreros_negocio_2_mobile.webp", altText: "Logotipo dorado iluminado de MLG en pared de oficina", altText: "Letrero iluminado de Bembos" },
    { imgSrc: "/home/letrero_neon_tienda_tatuajes_tattoo_mobile.webp", altText: "Logotipo dorado iluminado de MLG en pared de oficina", altText: "Letrero neón con diseño de máquina de tatuajes y palabra Tattoo en vidriera" },
    { imgSrc: "/home/letrero_tambo_colores_amarillo_y_magenta_mobile.webp", altText: "Logotipo dorado iluminado de MLG en pared de oficina", altText: "Letrero luminoso de Tambo con fondo amarillo y letras magenta" },
  ];

    const clientLogos = [
    { imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942999/Jockeyplaza_Logo_ledneonpublicidad_gba4th.webp", altText: "Logotipo blanco y negro del centro comercial Jockey Plaza con letra J" },
    { imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752943001/Malldelsur_Logo_ledneonpublicidad_p39w4h.webp", altText: "Logotipo de Mall del Sur con pétalos de colores sobre fondo azul" },
    { imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752943000/logo_lk_constructora_e_inversiones_b62s4d.webp", altText: "Logotipo de L&K Constructora e Inversiones con diseño de edificio en tonos azules y verdes" },
    { imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942998/Crisol_Logo_ledneopublicidad_ddnymo.webp", altText: "Logotipo de Crisol con fondo amarillo y texto azul Libros y Más" }, 
    { imgSrc: "https://res.cloudinary.com/dqaetlpog/image/upload/v1752942997/BancodelaNaci%C3%B3n_ledneonpublicidad_rl0fq9.webp", altText: "Logotipo del Banco de la Nación Perú con texto negro y símbolo rojo" }, 
  ];

  return (
    <>
      <div className="bg-[--azul_oscuro] overflow-hidden">
      <Slider slides={slidesData} slidesMovil={slidesDataMovil} />

        <div className="px-4 lg:px-8 mt-20 mb-24">
          <NuestrosProductos />
          <div className="mt-8">
            {/* <FilaProductos productos={fila1} /> */}
            
          </div>
        </div>

        <AboutStatic />


        {/* <div className="flex justify-center mt-20 mb-24">
        <Slider2 slides={clientLogos} />
        </div> */}


      </div>
    </>
  );
}
