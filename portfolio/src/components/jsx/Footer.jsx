import "../../App.css"
import "../css/Footer.css"
import { FaLinkedin, FaGithub, FaImage } from "react-icons/fa";
import { useAppContext } from "./AppContext";

export function Footer() {
    const { lang } = useAppContext();

    return (
        <>
            <footer>
                <a href="https://storyset.com/work" alt="Work illustrations by Storyset">
                    <FaImage />
                </a>

                <a className="footer-link" href="https://www.linkedin.com/in/daniel-fallas-7255513b2/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>

                <a className="footer-link" href="https://github.com/dfmsoftware" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </footer>
        </>
    );
}
