import { useState, useEffect } from "react";
import "../css/FloatingControls.css";
import { useAppContext } from "./AppContext";
import { FaWhatsapp } from "react-icons/fa";

const SECTIONS = ["seccion1", "seccion2", "seccion3", "seccion4", "seccion5"];

export function FloatingControls({ scrollerRef, whatsappNumber = "50612345678" }) {
    const [visible, setVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
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

    useEffect(() => {
        const observers = [];
        SECTIONS.forEach((id, index) => {
            const el = document.querySelector(`#${id}`);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(index); },
                { threshold: 0.5 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const scrollToSection = (index) => {
        const scroller = scrollerRef?.current;
        const target = document.querySelector(`#${SECTIONS[index]}`);
        if (!target) return;
        if (scroller) {
            scroller.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        } else {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(true);
    };

    const scrollToTop = () => {
        const scroller = scrollerRef?.current;
        if (scroller) scroller.scrollTo({ top: 0, behavior: "smooth" });
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
                    <FaWhatsapp size={22} color="#ffffff" />
                </button>
                <div className="fc-menu-wrapper">
                    <div className={`fc-menu-panel${menuOpen ? " fc-menu-open" : ""}`}>

                        {/* Section navigation */}
                        <p className="fc-menu-label">{lang === "es" ? "Secciones" : "Sections"}</p>
                        <nav className="fc-section-nav">
                            {SECTIONS.map((_, i) => (
                                <button
                                    key={i}
                                    className={`fc-dot${activeSection === i ? " fc-dot-active" : ""}`}
                                    onClick={() => scrollToSection(i)}
                                    aria-label={`${lang === "es" ? "Ir a sección" : "Go to section"} ${i + 1}`}
                                    title={`${lang === "es" ? "Sección" : "Section"} ${i + 1}`}
                                />
                            ))}
                        </nav>

                        <div className="fc-menu-divider" />

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