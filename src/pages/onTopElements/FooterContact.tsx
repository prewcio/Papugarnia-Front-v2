import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { MdQuestionAnswer } from "react-icons/md";

import { InputTextarea } from "primereact/inputtextarea"
import { FormEvent, useState } from "react"
import axios from "axios";


export default function FooterContact() {
    const [formData, setFormData] = useState({
        name: "",
        type: null,
        email: "",
        topic: "",
        content: ""
    });
    const [error, setError] = useState(0);
    const submitForm = ((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formData.name.length > 0 && formData.type !== null && formData.email.length > 0 && formData.content.length > 0) {
            axios.post(process.env.REACT_APP_API_URL+'/api/sendMail', formData);
            setError(-1);
            setFormData({
                name: "",
                type: null,
                email: "",
                topic: "",
                content: ""
            })
            setTimeout(() => {
                setError(0);
            }, 5000)
        } else {
            setError(1);
            setTimeout(() => {
                setError(0);
            }, 5000)
        }
    })
    const options = [
        {
            name: 'Zapytanie dot. wycieczek', 
            code: 'wycieczka'
        },
        {
            name: 'Zapytanie dot. urodzin',
            code: 'urodziny'
        },
        {
            name: 'Inne',
            code: 'inne'
        }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: any }>) => {
        if ('name' in e.target) {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else {
            // If it's not an input or textarea, handle it differently (e.g., dropdown)
            setFormData(prevState => ({
                ...prevState,
                type: e.target.value
            }));
        }
    };
    const handleDropdownChange = (e: { value: any }) => {
        setFormData(prevState => ({
            ...prevState,
            type: e.value
        }));
    };
    return(
        <form onSubmit={submitForm} className="footerContactForm">
            <h2 className="contactInfoElement"><MdQuestionAnswer className="icon" />&ensp;Formularz kontaktowy</h2>
            <InputText name="name" placeholder="Imię i Nazwisko" value={formData.name} onChange={handleChange} type="text" required/>
            <InputText name="email" type="email" placeholder="Adres E-Mail" value={formData.email} onChange={handleChange} required/>
            <Dropdown className="footerContactFromDropdown" value={formData.type} onChange={handleDropdownChange} options={options} optionLabel="name" placeholder="Wybierz typ pytania" required/>
            <InputText name="topic" placeholder="Podaj temat" value={formData.topic} onChange={handleChange} required/>
            <InputTextarea autoResize name="content" value={formData.content} onChange={handleChange} placeholder="Podaj treść pytania" required/>
            <Button className="p-button-success" type="submit" label="Wyślij"/>
            {error === 1 &&
            <p className="errorText" style={{fontWeight: '600'}}>Wypełnij wszystkie pola.</p>
            }
            {error === -1 &&
            <p className="successText" style={{fontWeight: '600'}}>Wysłano wiadomość.<br /></p>
            }
        </form>
    )
}