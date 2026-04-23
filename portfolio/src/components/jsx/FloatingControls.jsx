import { useState, useEffect } from "react";
import "../css/FloatingControls.css";
import { useAppContext } from "./AppContext";
import {FaWhatsapp} from "react-icons/fa";

export function FloatingControls({ scrollerRef, whatsappNumber = "50612345678" }) {
    const [visible, setVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang, setLang, darkMode, setDarkMode, colorblind, setColorblind } = useAppContext();

    useEffect(() => {
        const firstSection = document.querySelector("#seccion1");
        if (!firstSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0.1 }
        );

        observer.observe(firstSection);
        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        const scroller = scrollerRef?.current;
        if (scroller) {
            scroller.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openWhatsapp = () => {
        window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    };

    return (
        <>
            {menuOpen && (
                <div className="fc-backdrop" onClick={() => setMenuOpen(false)} />
            )}

            <div className={`fc-wrapper${visible ? " fc-visible" : ""}`}>

                <button
                    className="fc-btn fc-top"
                    onClick={scrollToTop}
                    aria-label="Volver arriba"
                    title="Volver arriba"
                >
                    ↑
                </button>

                <button
                    className="fc-btn fc-whatsapp"
                    onClick={openWhatsapp}
                    aria-label="Contactar por WhatsApp"
                    title="WhatsApp"
                >
                    <FaWhatsapp size={22} color="#ffffff"/>
                </button>

                <div className="fc-menu-wrapper">
                    <div className={`fc-menu-panel${menuOpen ? " fc-menu-open" : ""}`}>
                        <p className="fc-menu-label">{lang === "es" ? "Idioma" : "Language"}</p>
                        <div className="fc-toggle-row">
                            <span>ES</span>
                            <button
                                className={`fc-toggle${lang === "en" ? " fc-toggle-on" : ""}`}
                                onClick={() => setLang(l => l === "es" ? "en" : "es")}
                                aria-label="Cambiar idioma"
                            >
                                <span className="fc-toggle-knob" />
                            </button>
                            <span>EN</span>
                        </div>

                        <p className="fc-menu-label">{lang === "es" ? "Modo oscuro" : "Dark mode"}</p>
                        <div className="fc-toggle-row">
                            <span>☀️</span>
                            <button
                                className={`fc-toggle${darkMode ? " fc-toggle-on" : ""}`}
                                onClick={() => setDarkMode(d => !d)}
                                aria-label="Modo oscuro"
                            >
                                <span className="fc-toggle-knob" />
                            </button>
                            <span>🌙</span>
                        </div>

                        <p className="fc-menu-label">{lang === "es" ? "Modo daltónico" : "Colorblind mode"}</p>
                        <div className="fc-toggle-row">
                            <span>👁</span>
                            <button
                                className={`fc-toggle${colorblind ? " fc-toggle-on" : ""}`}
                                onClick={() => setColorblind(c => !c)}
                                aria-label="Modo daltónico"
                            >
                                <span className="fc-toggle-knob" />
                            </button>
                            <span>◑</span>
                        </div>
                    </div>

                    <button
                        className={`fc-btn fc-menu${menuOpen ? " fc-menu-active" : ""}`}
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Menú"
                        title="Menú"
                    >
                        <span className={`fc-hamburger${menuOpen ? " fc-hamburger-open" : ""}`}>
                            <span /><span /><span />
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}
