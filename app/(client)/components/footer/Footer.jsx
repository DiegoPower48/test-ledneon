import Link from "next/link";
import styles from './footer.module.css'
import { SocialMedia } from "./SocialMedia";
import { cn } from "@/lib/utils";
export default function Footer() {   
    return (
        <>
            <footer className={`overflow-hidden h-[900px] lg:h-auto bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso] w-full pb-20`}>
                <div className={`after:w-[200%] h-[800px] lg:h-auto after:translate-x-[-25%] after:z-10 after:absolute after:inset-0 relative after:bg-[--azul_oscuro] pt-16 pb-72  after:rounded-b-[50%]`}>
                    <div className={`rounded-full flex justify-center items-center p-7 bg-white overflow-hidden absolute w-[130px]  right-[calc(50%-65px)] bottom-[0] translate-y-[40%] z-30`}>
                        <img className={`w-[80px]" src="/header_footer/logo_azul_letraNegra_ledneonpublicidad.webp" alt="Logotipo de Neon LED Publicidad con letras negras`} />
                    </div>
                    <div className={cn(styles.footercontent, "absolute pt-10 inset-0 z-20 flex flex-col justify-center lg:flex-row lg:justify-center mx-28 gap-12 text-center lg:text-left text-white font-semibold mb-28")}>
                        <ul>
                            <li className={`flex flex-col`}>
                                <h2 className={cn(styles.title,"text-[--azul_brillante] text-lg lg:text-xl")}>Contáctanos</h2>
                                <span className={`w-[30px] mx-auto lg:mx-0 h-[6px] border-t-2 border-solid border-t-[--azul_brillante]`}></span>
                            </li>
                            <li className={`flex flex-col`}>
                                <p className={styles.text}>Dirección:</p>
                                <p className={styles.text}>Jr. Paruro 1404. S130, Lima,</p>
                                <p className={styles.text}>Perú</p>
                            </li>
                            <li className={`flex flex-col mt-4`}>
                                <p>Celular:</p>
                                <p>+51 994 078 320</p>
                            </li>
                        </ul>
                        <ul>
                            <li className={`flex flex-col`}>
                                <h2 className={cn(styles.title,`text-[--azul_brillante] text-lg lg:text-xl`)}>Horario</h2>
                                <span className={`w-[30px] mx-auto lg:mx-0 h-[6px] border-t-2 border-solid border-t-[--azul_brillante]`}></span>
                            </li>
                            <li className={`flex flex-col text-base md:text-lg`}>
                                <p className={styles.text}>Disponibilidad:</p>
                                <p className={styles.text}>Lunes a Viernes</p>
                                <p className={styles.text}>8:00 a.m - 7:00 p.m</p>
                            </li>

                        </ul>
                        <ul>
                            <li className={`flex flex-col`}>
                                <h2 className={cn(styles.title,`text-[--azul_brillante] text-lg lg:text-xl`)}>Redes sociales</h2>
                                <span className={`w-[30px] mx-auto lg:mx-0 h-[6px] border-t-2 border-solid border-t-[--azul_brillante]`}></span>
                                <div className={`flex gap-4 justify-center align-middle lg:justify-between mt-2`}>                                    
                                    <SocialMedia />
                                </div>
                            </li>
                        </ul>
                        <div className={`flex flex-col items-center lg:items-start`}>
                            <h2 className={cn(styles.title,`text-[--azul_brillante] text-lg lg:text-xl`)}>Reclamaciones</h2>
                            <span className={`w-[30px] mx-auto lg:mx-0 h-[6px] border-t-2 border-solid border-t-[--azul_brillante]`}></span>
                            <Link className={`w-[200px] m-1`} href={"/reclamaciones"}>
                                <p className={cn(styles.text,`text-center`)}>Libro de reclamos</p>
                                <img className={`w-full`} src="/reclamaciones/librodereclamaciones_ledneonpublicidad.webp" alt="Ilustración de un libro de reclamaciones abierto con páginas blancas" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}