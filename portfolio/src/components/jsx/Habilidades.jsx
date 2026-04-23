import '../../App.css'
import '../css/Habilidades.css'
import { useAppContext } from "./AppContext";

const TEXT = {
    es: {
        skillsTitle: "Habilidades",
        frontend: "Front-end",
        backend: "Back-end",
        db: "Bases de datos",
        soft: "Blandas",
        softSkills: ["Trabajo en equipo", "Responsabilidad", "Comunicativo", "Adaptable"],
        valuesTitle: "Valores",
        values: [
            {
                name: "Comunicación",
                desc: "Mantener un canal abierto y fluido durante cada proyecto, donde tanto mis opiniones como las del cliente tienen espacio para ser escuchadas."
            },
            {
                name: "Excelencia",
                desc: "Buscar los más altos estándares de calidad y servicio al cliente antes, durante y después del trabajo."
            },
            {
                name: "Colaboración",
                desc: "Trabajar en equipo formando relaciones cordiales que fomentan un ambiente sano donde se entrega un producto de calidad."
            }
        ]
    },
    en: {
        skillsTitle: "Skills",
        frontend: "Front-end",
        backend: "Back-end",
        db: "Databases",
        soft: "Soft skills",
        softSkills: ["Teamwork", "Responsibility", "Communicative", "Adaptable"],
        valuesTitle: "Values",
        values: [
            {
                name: "Communication",
                desc: "Maintaining an open and fluid channel throughout each project, where both my opinions and the client's have space to be heard."
            },
            {
                name: "Excellence",
                desc: "Pursuing the highest standards of quality and client service before, during and after the work."
            },
            {
                name: "Collaboration",
                desc: "Working as a team by building cordial relationships that foster a healthy environment where a quality product is delivered."
            }
        ]
    }
};

export function Habilidades() {
    const { lang } = useAppContext();
    const t = TEXT[lang];

    return (
        <>
            <div id="conocimientos">
                <h2>{t.skillsTitle}</h2>
                <div className="divider"></div>

                <div className="skill-category">
                    <p className="skill-category-label">{t.frontend}</p>
                    <div className="tags">
                        <span className="tag">HTML5 / CSS</span>
                        <span className="tag">React</span>
                    </div>
                </div>

                <div className="skill-category">
                    <p className="skill-category-label">{t.backend}</p>
                    <div className="tags">
                        <span className="tag">C#</span>
                        <span className="tag">Java</span>
                        <span className="tag">JavaScript</span>
                    </div>
                </div>

                <div className="skill-category">
                    <p className="skill-category-label">{t.db}</p>
                    <div className="tags">
                        <span className="tag">SQL</span>
                        <span className="tag">MongoDB</span>
                    </div>
                </div>

                <div className="skill-category">
                    <p className="skill-category-label">{t.soft}</p>
                    <div className="tags">
                        {t.softSkills.map(s => (
                            <span key={s} className="tag-soft">{s}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div id="valores">
                <h2>{t.valuesTitle}</h2>
                <div className="divider"></div>

                {t.values.map(v => (
                    <div key={v.name} className="value-item">
                        <p className="value-name">{v.name}</p>
                        <p className="value-desc">{v.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
