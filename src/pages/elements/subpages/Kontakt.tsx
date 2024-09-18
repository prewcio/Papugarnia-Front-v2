import { useEffect } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
    useEffect(() => {
        document.title = "Kontakt - Papugarnia Carmen Warszawa"
    })
    return(
        <div className="content">
            <h1>FORMULARZ KONTAKTOWY</h1>
            <p>Masz pytanie? Skontaktuj się z nami, a odpowiemy Ci najszybciej jak to możliwe!</p>
            <ContactForm />
        </div>
    )
}