import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { BsPinMapFill, BsPhoneFill } from "react-icons/bs"
import { GrMail } from "react-icons/gr";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    const locator = useLocation();
    const [adres, setAdres] = useState("j200")
    const [addURL, setAddURL] = useState("https://goo.gl/maps/5Hyc4iSe29Zqwi1RA");
    const [phone, setPhone] = useState("+48 506 059 999");
    const [phoneURL, setPhoneURL] = useState("tel:+48506059999");
    const [mail, setMail] = useState("warszawa.j200@papugarniacarmen.pl");
    const [mailURL, setMailURL] = useState("mailto:warszawa.j200@papugarniacarmen.pl");
    const [fbURL, setFbURL] = useState("https://www.facebook.com/papugarniawarszawacarmen");
    const [igURL, setIgURL] = useState("https://www.instagram.com/papugarnia_warszawa_carmen");

    useEffect(() => {
        if(locator.pathname.includes("warszawa-m44")) {
            setAdres("m44");
            setAddURL("https://maps.app.goo.gl/hwQAtpg3eyGk5C7q6");
            setPhone("+48 799 090 080");
            setPhoneURL("tel:+48799090080");
            setMail("warszawa.m44@papugarniacarmen.com");
            setMailURL("mailto:warszawa.m44@papugarniacarmen.com");
            setFbURL("https://www.facebook.com/papugarniacarmenwarszawa");
            setIgURL("https://www.instagram.com/papugarnia_marywilska44/");
        } else {
            setAdres("j200");
            setAddURL("https://goo.gl/maps/5Hyc4iSe29Zqwi1RA");
            setPhone("+48 506 059 999");
            setPhoneURL("tel:+48506059999");
            setMail("warszawa.j200@papugarniacarmen.pl");
            setMailURL("mailto:warszawa.j200@papugarniacarmen.pl");
            setFbURL("https://www.facebook.com/papugarniawarszawacarmen");
            setIgURL("https://www.instagram.com/papugarnia_warszawa_carmen");
        }
    }, [locator.pathname])    

    useEffect(() => {        
        if(locator.pathname.includes("warszawa-m44")) {
            setAdres("m44");
            setAddURL("https://maps.app.goo.gl/hwQAtpg3eyGk5C7q6");
            setPhone("+48 799 090 080");
            setPhoneURL("tel:+48799090080");
            setMail("warszawa.m44@papugarniacarmen.com");
            setMailURL("mailto:warszawa.m44@papugarniacarmen.com");
        } 

        const handleSBV = () => {
            const sttElement = document.getElementById('stt');
            if (sttElement) {
                document.body.scrollTop > 50 ? sttElement.classList.add("show") : sttElement.classList.remove("show");
                document.body.scrollTop > 50 ? sttElement.addEventListener('click', handleClk) : sttElement.removeEventListener('click', handleClk);
                document.documentElement.scrollTop > 50 ? sttElement.classList.add("show") : sttElement.classList.remove("show");
                document.documentElement.scrollTop > 50 ? sttElement.addEventListener('click', handleClk) : sttElement.removeEventListener('click', handleClk);
            }
        }

        const handleClk = () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        window.addEventListener('scroll', handleSBV);

        return () => {
            window.removeEventListener('scroll', handleSBV);
        }
    }, []);
    return ( 
        <>
            <div className='scrollToTop' id="stt">
            </div>
            <footer>
                <div id='footerContact'>
                    <div id='contactInfo'>
                        <h1>Papuzi Kontakt</h1>
                        <p>Jeśli szukasz kontaktu z nami to tutaj masz kilka sposobów, aby się skontaktować!</p>
                        <h2 className='contactInfoElement'><BsPinMapFill id="mapPin" className='icon' />&emsp;Nasza papugarnia</h2>
                        <h3><a href={addURL} target='_blank' rel="noreferrer">{adres === "m44" && <>Warszawa, Marywilska 44<br/>(Wodny Park Handlowy)</>}
                        {adres === "j200" && <>Warszawa, Al. Jerozolimskie 200<br />(Wejście od strony ul. Łopuszańskiej)<br /></>}
                        </a>
                        {adres === "m44" &&
                            <span id='workHours'><p>Poniedziałek - Piątek: 11-18</p>
                            <p>Sobota - Niedziela: 10-18</p></span>
                        }
                        {adres === "j200" && 
                            <span id='workHours'><p>Poniedziałek - Piątek: 10-19</p>
                            <p>Sobota - Niedziela: 10-20</p></span>
                        } 

                        </h3>
                        <h2 className='contactInfoElement'><BsPhoneFill id="phone" className='icon' />&emsp;Zadzwoń do nas</h2>
                        <h3><a href={phoneURL} target='_blank' rel="noreferrer">{phone}</a></h3>
                        <h2 className='contactInfoElement'><GrMail id="mail" className='icon' />&emsp;Napisz do nas</h2>
                        <h3><a href={mailURL} target='_blank' rel="noreferrer">{mail}</a></h3>
                        <h3 className='contactInfoElement social'><a href={fbURL} target='_blank' rel='noreferrer'><FaFacebook id='fb'/></a><a href={igURL} target='_blank' rel='noreferrer'><FaInstagram id='ig'/></a></h3>
                    </div>
                    <div id='map'>
                        {adres === "m44" &&
                            <iframe title="papugarniaCarmenMap" id='mapa' frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.7930626587813!2d21.004652077048412!3d52.31975745103512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec9b3184afeef%3A0x79ceba1664b733a4!2sPapugarnia%20Carmen%20Marywilska!5e0!3m2!1spl!2spl!4v1702556502637!5m2!1spl!2spl"></iframe>
                        }
                        {adres == "j200" && 
                            <iframe title="papugarniaCarmenMap" id='mapa' frameBorder="0" src="https://maps.google.com/maps?hl=pl&amp;q=Papugarnia%20Carmen%20Jerozolimskie%20200%20Warszawa+(Papugarnia%20Carmen)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        }
                    </div>
                </div>
                <div id='footerLinks'>
                    <a href="/">Strona główna</a>
                    <a href='/papugarnia/warszawa-m44'>Marywilska 44</a>
                    <a href='/regulamin'>Regulamin Papugarni</a>
                </div>
                {/* <br /><a href='/polityka-prywatnosci'>POLITYKA PRYWATNOŚCI</a> */}
                <p className='ftrCont' id='ctrCont'>&copy; {new Date().getFullYear()} Papugarnia Carmen Warszawa. Wszelkie prawa zastrzeżone.<br /><br/>Proudly made by <a href="https://prewcio.dev">Prewcioo</a></p>
            </footer>
        </>
     );
}

export default Footer;