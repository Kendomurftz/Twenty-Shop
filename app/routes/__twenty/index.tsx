import logo from "a/public/assets/TwentyLogo.png";
import css from "s/index.css";
import { useRef, useEffect, useState } from 'react';
import Image from "~/components/image"

export function links() {
    return [
        {
            rel: "Stylesheet", href: css
        },
    ];
}


export default function Index() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://cdn.discordapp.com/attachments/941959975641686036/1053691694392025210/Discord_2f1qogkaQS.png',
        'https://cdn.discordapp.com/attachments/941959975641686036/1053691694723383336/Discord_MUhLfPlSwq.png',
        'https://cdn.discordapp.com/attachments/941959975641686036/1053691695050543164/Discord_8atiqujrgb.png',
        "https://cdn.discordapp.com/attachments/941959975641686036/1053691695423824002/Discord_4Q1VHxd8IN.png",
        "https://cdn.discordapp.com/attachments/941959975641686036/1053691695734210681/Discord_1GmFnUe0Jd.png",
        "https://cdn.discordapp.com/attachments/941959975641686036/1053691696078135376/Discord_eGtG2KcgnJ.png"
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, images.length]);



    const currentImage = images[currentIndex];




    return (
        <div>
            <div id="homee" className="Landing">
                <img src={logo} />
                <div className="texto">
                    <h1>Twenty <span>Shop</span></h1>
                    <p> Somos un equipo para optimizar y obtener el mejor rendimiento de sus juegos favoritos: Valorant, Fortnite y Minecraft. Puedes comprar en nuestra tienda las optimizaciones y esto estará respaldado por el mejor experto en juegos de computadora.</p>
                </div>
                <a href="https://discord.gg/bAME2FnTdG" target="_blank" className="button">Obtener</a>
            </div>

            <b className="hr"></b>
            <section id="Optimic" className="optis">
                <h1>Optimiz<span>aciones</span></h1>
                <div className="OptiDiv">
                    <div className="Features">
                        <div className="ImgDiv">
                            <img src="https://cdn.discordapp.com/attachments/1049133767958216754/1051862704480079912/shark_96px.png" />
                        </div>
                        <div className="TextDiv">
                            <h1>
                                FPS BOOST
                            </h1>
                            <p>Aumenta y estabiliza tus FPS!</p>
                        </div>
                    </div>
                    <div className="Features">
                        <div className="ImgDiv">
                            <img src="https://cdn.discordapp.com/attachments/1049133767958216754/1051864545389445252/mouse_96px.png" />
                        </div>
                        <div className="TextDiv">
                            <h1>
                                Input Lag
                            </h1>
                            <p>Reduce la latencia de tus periféricos</p>
                        </div>
                    </div>
                    <div className="Features">
                        <div className="ImgDiv">
                            <img src="https://cdn.discordapp.com/attachments/1049133767958216754/1051865641042317313/wi-fi_connected_96px.png" />
                        </div>
                        <div className="TextDiv">
                            <h1>
                                Conexion
                            </h1>
                            <p>Mejora tu conexion Wifi para menos ms</p>
                        </div>
                    </div>

                    <div className="Features">
                        <div className="ImgDiv">
                            <img src="https://cdn.discordapp.com/attachments/1049133767958216754/1053718113402765422/windows_11_96px.png" />
                        </div>
                        <div className="TextDiv">
                            <h1>
                                Windows
                            </h1>
                            <p>Optimizacion de windows</p>
                        </div>
                    </div>
                    <div className="Features">
                        <div className="ImgDiv">
                            <img src="https://cdn.discordapp.com/attachments/1049133767958216754/1053718114153541713/delete_shield_96px.png" />
                        </div>
                        <div className="TextDiv">
                            <h1>
                                Errores
                            </h1>
                            <p>Corregimos errores de tu pç</p>
                        </div>
                    </div>
                </div>
            </section>
            <b className="hr"></b>

            <section id="testim" className="centerSec">
                <h1>Rese<span>ñas</span></h1>


                <img id="s" src={currentImage} />

            </section>
            <b className="hr"></b>

            <section className="centerSec">
                <h1>Pla<span>nes</span></h1>

                <div className="planes">
                    <div className="card">
                        <div className="card-border-top">
                        </div>

                        <h1 className="img">⚔️</h1>

                        <span>Advanced</span>
                        <ul className="job">
                            <li>Mas FPS</li>
                            <li>Menos Delay</li>
                            <li>Optimiza Windows</li>
                            <li>Estabilidad</li>
                            <p className="job">20 Dolares💵

                            </p>
                        </ul>


                    </div>
                    <div className="card e">
                        <div className="card-border-top">
                        </div>

                        <h1 className="img">✨</h1>

                        <span>Performance</span>
                        <ul className="job">
                            <li>Windows Clean</li>
                            <li>Duplica FPS</li>
                            <li>Limpieza PC</li>
                            <li>Optimiza Discord</li>
                            <li>Optimiza Spotify</li>
                            <li>Fluidez de encendido</li>

                            <p className="job">30 Dolares💵 (USB)

                            </p>
                        </ul>


                    </div>
                    <div className="card">
                        <div className="card-border-top">
                        </div>

                        <h1 className="img">👑</h1>

                        <span>Pack Duo</span>
                        <ul className="job">
                            <li>2 Windows Clean</li>
                            <li>Pack "perfomance"</li>
                            <li>Configuracion OBS</li>
                            <li>Menos Ping </li>
                            <p className="job">35 Dolares💵 (USB)

                            </p>
                        </ul>


                    </div>
                </div>
            </section>

        </div>

    );
}