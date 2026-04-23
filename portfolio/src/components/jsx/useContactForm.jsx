import emailjs from "@emailjs/browser";
import { useState } from "react";

const SERVICE_ID  = "service_1k6pwdg";
const TEMPLATE_ID = "template_6z0k8kl";
const PUBLIC_KEY  = "sZa51XiBA9ZVpUcHl";

export function useContactForm() {
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    async function sendEmail(e) {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;

        const params = {
            from_name:  form.name.value,
            from_email: form.email.value,
            message:    form.request.value,
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
            setStatus("success");
            form.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return { sendEmail, status };
}