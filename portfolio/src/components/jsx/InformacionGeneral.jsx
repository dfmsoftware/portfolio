import "../../App.css"
import "../css/InformacionGeneral.css"

import oversight from "../../img/oversight-bro.png";
import CV_ENG from "../../assets/CV_ENG.pdf"
import CV_ESP from "../../assets/CV_ESP.pdf"
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { useAppContext } from "./AppContext";

const TEXT = {
    es: {
        eyebrow: "Quién soy",
        label1: "Perfil profesional",
        p1: "Ingeniero de software con experiencia en programación y diseño de sistemas para aplicaciones web con tecnología React, JavaScript y .NET",
        label2: "Misión",
        p2: "Brindar soluciones de software cómodas, intuitivas e innovadoras basadas en las necesidades individuales de cada cliente.",
        label3: "Visión",
        p3: "Ser un profesional conocido por la calidad de su trabajo, la satisfacción de sus clientes y la honestidad de sus relaciones laborales.",
        sobreHeading: "Sobre mí",
        sobreText: "He trabajado en múltiples proyectos tanto académicos como personales, y mi experiencia en equipos me ha llevado a aprender cómo mantener una comunicación abierta y efectiva.",
        cvBtn: "Curriculum vitae",
    },
    en: {
        eyebrow: "Who I am",
        label1: "Professional profile",
        p1: "Software engineer with experience in programming and system design for web applications using React, JavaScript and .NET",
        label2: "Mission",
        p2: "Deliver comfortable, intuitive and innovative software solutions based on each client's individual needs.",
        label3: "Vision",
        p3: "To be a professional known for the quality of work, client satisfaction, and the honesty and transparency of working relationships.",
        sobreHeading: "About me",
        sobreText: "I have worked on multiple academic and personal projects, and my experience in team environments has taught me how to maintain open and effective communication.",
        cvBtn: "Curriculum vitae",
    }
};

export function InformacionGeneral() {
    const { lang } = useAppContext();
    const t = TEXT[lang];

    return (
        <>
            <div id="seccion2-perfil">
                <p className="panel-eyebrow">{t.eyebrow}</p>

                <div className="profile-entry">
                    <span className="profile-label">{t.label1}</span>
                    <p>{t.p1}</p>
                </div>

                <div className="profile-entry">
                    <span className="profile-label">{t.label2}</span>
                    <p>{t.p2}</p>
                </div>

                <div className="profile-entry">
                    <span className="profile-label">{t.label3}</span>
                    <p>{t.p3}</p>
                </div>
            </div>

            <div id="seccion2-sobre-mi">
                <p className="sobre-heading">{t.sobreHeading}</p>
                <p className="sobre-text">{t.sobreText}</p>

                <div className="btn-row">
                    <a href={lang === "es" ? CV_ESP : CV_ENG} download>
                        <button className="cv-btn"><FaDownload />{t.cvBtn}</button>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-fallas-7255513b2/" target="_blank" rel="noreferrer">
                        <button className="cv-btn"><FaLinkedin />LinkedIn</button>
                    </a>
                    <a href="https://github.com/dfmsoftware" target="_blank" rel="noreferrer">
                        <button className="cv-btn"><FaGithub />GitHub</button>
                    </a>
                </div>

                <img src={oversight} alt="Dibujo de un hombre en un escritorio siendo visto con una gran lupa" />
            </div>
        </>
    );
}
