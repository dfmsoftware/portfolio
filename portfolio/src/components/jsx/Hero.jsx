import '../../App.css'
import '../css/Hero.css';
import logo from "../../img/logo.png";
import { useAppContext } from "./AppContext";

const TEXT = {
    es: {
        title: "Daniel Fallas Muñoz",
        role: "Ingeniero de software y desarrollador web",
        tagline: "Su visión, mi misión",
    },
    en: {
        title: "Daniel Fallas Muñoz",
        role: "Software engineer and web developer",
        tagline: "Your vision, my mission",
    }
};

export function Hero() {
    const { lang } = useAppContext();
    const t = TEXT[lang];

    return (
        <>
            <div id="seccion1-logo-semicirculo">
                <img src={logo} alt="DFM Logo" />
            </div>

            <div id="seccion1-nombre">
                <div id="seccion1-nombre-informacion">
                    <h1>{t.title}</h1>
                    <p>{t.role}</p>
                    <p>{t.tagline}</p>
                </div>
            </div>
        </>
    );
}
