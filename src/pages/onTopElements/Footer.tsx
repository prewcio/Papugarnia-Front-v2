import React, { useEffect } from 'react'
import { BsPinMapFill, BsPhoneFill } from "react-icons/bs"
import { GrMail } from "react-icons/gr";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import KW from '../../assets/KW.webp';
import KDR from '../../assets/KDR.webp';
import FooterContact from './FooterContact';

function Footer() {
    const addURL = "https://goo.gl/maps/5Hyc4iSe29Zqwi1RA";
    const phone = "+48 506 059 999";
    const phoneURL = "tel:+48506059999";
    const mail = "warszawa.j200@papugarniacarmen.pl";
    const mailURL = "mailto:warszawa.j200@papugarniacarmen.pl";
    const fbURL = "https://www.facebook.com/papugarniawarszawacarmen";
    const igURL = "https://www.instagram.com/papugarniawarszawacarmen";
 
    useEffect(() => {
        const kdrel = document.getElementById('kdr');
        const kwel = document.getElementById('kw');
        if(kdrel) kdrel.setAttribute('draggable', 'false');
        if(kwel) kwel.setAttribute('draggable', 'false');
    }, []);


    useEffect(() => {        

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
                <div id='footerContactHeader'>
                    <h1>Papuzi Kontakt</h1>
                    <p>Jeśli szukasz kontaktu z nami to tutaj masz kilka sposobów, aby się skontaktować!</p>
                    <FooterContact />
                </div>
                <div id='footerContact'>
                    
                    <div id='contactInfo' itemScope itemType='https://schema.org/Zoo https://schema.org/TouristAttraction'>
                        
                        <h2 className='contactInfoElement'><BsPinMapFill id="mapPin" className='icon' />&emsp;Nasza papugarnia</h2>
                        <h3><a href={addURL} target='_blank' rel="noreferrer" itemProp='address'>Warszawa, Al. Jerozolimskie 200<br />(Wejście od strony ul. Łopuszańskiej)<br />
                        </a>
                        <span id='workHours'><p itemProp="openingHours" content="Mo-Fr, 10:00-19:00">Poniedziałek - Piątek: 10-19</p>
                        <p itemProp='Sa,Su 10:00-20:00'>Sobota - Niedziela: 10-20</p></span>

                        </h3>
                        <h2 className='contactInfoElement'><BsPhoneFill id="phone" className='icon' />&emsp;Zadzwoń do nas</h2>
                        <h3><a href={phoneURL} target='_blank' rel="noreferrer" itemProp='telephone'>{phone}</a></h3>
                        <h2 className='contactInfoElement'><GrMail id="mail" className='icon' />&emsp;Napisz do nas</h2>
                        <h3><a href={mailURL} target='_blank' rel="noreferrer" itemProp='email'>{mail}</a></h3>
                        <h3 className='contactInfoElement social'><a href={fbURL} target='_blank' rel='noreferrer' aria-label='Facebook Papugarnia Carmen'><FaFacebook id='fb'/></a><a href={igURL} target='_blank' rel='noreferrer' aria-label='Instagram Papugarnia Carmen'><FaInstagram id='ig'/></a></h3>
                    </div>
                    
                    <div id='map'>
                        <iframe title="papugarniaCarmenMap" loading='lazy' id='mapa' frameBorder="0" src="https://maps.google.com/maps?hl=pl&amp;q=Papugarnia%20Carmen%20Jerozolimskie%20200%20Warszawa+(Papugarnia%20Carmen)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
                <div id='HonorowaneKarty'>
                    <div id='karty'>
                        <a href="https://rodzina.gov.pl"><img loading='lazy' id='kdr' src={KDR} alt='Karta Dużej Rodziny' /></a>
                        <a href="https://karta.um.warszawa.pl"><img loading='lazy' id='kw' src={KW} alt='Karta Warszawiaka' /></a>
                    </div>
                </div>
                <div id='footerLinks'>
                    <a href="/">Strona główna</a>
                    <a href='/regulamin'>Regulamin Papugarni</a>
                    <a href='/papugi'>Nasze Papugi</a>
                    <a href='/urodziny'>Oferta Urodzinowa</a>
                    <a href='/grupy'>Oferta Grupowa</a>
                    <a href='/indywidualna'>Oferta Indywidualna</a>
                </div>
                {/* <br /><a href='/polityka-prywatnosci'>POLITYKA PRYWATNOŚCI</a> */}
                <p className='ftrCont' id='ctrCont'>&copy; {new Date().getFullYear()} Papugarnia Carmen Warszawa. Wszelkie prawa zastrzeżone.<br /><br/>Proudly made by <a href="https://prewcio.dev">Prewcioo</a></p>
            </footer>
        </>
     );
}

export default Footer;