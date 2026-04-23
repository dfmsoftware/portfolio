import '../../App.css'
import "../css/Contacto.css"
import { useContactForm } from "./useContactForm";
import { useAppContext } from "./AppContext";

const TEXT = {
    es: {
        heading: "¡Hablemos!",
        subtitle: "Cuéntame en qué puedo ayudarte",
        labelName: "Nombre",
        placeholderName: "Nombre completo",
        labelEmail: "Correo",
        placeholderEmail: "Correo electrónico",
        labelMsg: "Mensaje",
        placeholderMsg: "Cuéntame tu idea",
        privacy: "Tu información está segura.",
        submit: "Enviar",
        sending: "Enviando...",
        success: "¡Enviado!",
        error: "Error, intenta de nuevo",
    },
    en: {
        heading: "Let's talk!",
        subtitle: "Tell me how I can help you",
        labelName: "Name",
        placeholderName: "Full name",
        labelEmail: "Email",
        placeholderEmail: "Email address",
        labelMsg: "Message",
        placeholderMsg: "Tell me your idea",
        privacy: "Your information is safe.",
        submit: "Send",
        sending: "Sending...",
        success: "Sent!",
        error: "Error, please try again",
    }
};

export function Contacto() {
    const { sendEmail, status } = useContactForm();
    const { lang } = useAppContext();
    const t = TEXT[lang];

    const submitLabel =
        status === "sending" ? t.sending :
        status === "success" ? t.success :
        status === "error"   ? t.error :
        t.submit;

    return (
        <>
            <div className="form-section">
                <h1>{t.heading}</h1>
                <p className="form-subtitle">{t.subtitle}</p>

                <form id="contact-form" onSubmit={sendEmail}>
                    <div className="field-group">
                        <label htmlFor="name">{t.labelName}</label>
                        <input type="text" id="name" name="name" placeholder={t.placeholderName} required />
                    </div>

                    <div className="field-group">
                        <label htmlFor="email">{t.labelEmail}</label>
                        <input type="email" id="email" name="email" placeholder={t.placeholderEmail} required />
                    </div>

                    <div className="field-group">
                        <label htmlFor="request">{t.labelMsg}</label>
                        <textarea
                            id="request"
                            name="request"
                            placeholder={t.placeholderMsg}
                            maxLength="426"
                            required
                        />
                    </div>

                    <div className="submit-row">
                        <span className="privacy-note">{t.privacy}</span>
                        <input
                            type="submit"
                            id="submit"
                            value={submitLabel}
                            disabled={status === "sending"}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
