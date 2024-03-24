import React, {useEffect, useState} from 'react';
import NLink from './NLink';
import logo from '../../assets/papugarnia-logo.webp';
import harchr from '../../assets/banner-harlequin-christ.webp'
import logochr from '../../assets/papugarnia-logo-chr.webp';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import HeaderList from './HeaderList';


function Header() {
    const [loc, setLoc]: any = useState();
    const [load, setLoad] = useState(0);
    const fbURL = "https://www.facebook.com/papugarniawarszawacarmen";
    const igURL = "https://www.instagram.com/papugarniawarszawacarmen";
    
    const dzis = new Date();
    const snieg = ((dzis.getDate()>10 && dzis.getMonth() === 11) || (dzis.getDate()<25 && dzis.getMonth()===0));
    const mobileMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation(); // Stop the event propagation

        const spans = document.querySelectorAll('#hmLinksMenu span');
        const hmLinks = document.querySelector('#hmLinks');
        if(hmLinks) {
            spans.forEach(span => {
            span.classList.toggle('active');
            });

            hmLinks.classList.toggle('active');
        }
    }

    useEffect(() => {
        setLoc("Aleje Jerozolimskie 200");
        const myElement = document.getElementById('headBann');
        const logo = document.getElementById('logo') as HTMLImageElement;
        const bannerLogo = document.getElementById('bnrLogo') as HTMLImageElement;
        const bannerImg = document.getElementById('bannerImg');
        // const hmLinksMenu = document.getElementById('hmLinksMenu');
        if(myElement && snieg){
            myElement.style.setProperty('--banner-after', 'URL(' + harchr + ')');
            if(logo) logo.src = logochr;
            if(bannerLogo) bannerLogo.src = logochr;
        }
        if(logo) logo.setAttribute('draggable', 'false');
        if(bannerImg) bannerImg.setAttribute('draggable', 'false');
        if(bannerLogo) bannerLogo.setAttribute('draggable', 'false');
        setLoad(1);

        if (window.location.pathname === "/") {
            const section = window.location.hash.substr(1); // Pobieranie id sekcji z hasha
            if (section) {
                const el = document.getElementById(section);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }, [load, snieg])
    const scrollToEl = (el: string) => {
        document.getElementById(el)?.scrollIntoView({behavior: 'smooth'});
    }

    const handleLinkClick = (path: string, sectionId: string) => {
        if (window.location.pathname !== path) {
            window.location.href = path; // Przekierowanie na inną stronę
            scrollToEl(sectionId)
        } else {
            scrollToEl(sectionId); // Scroll do odpowiedniej sekcji
        }
    };

    return ( 
        <>
            <div className='header'>
                <div className='leftNav'>
                    <NLink clr="#03a60b" to={{pathname: "/"}}><img src={logo} alt='logo' id='logo' /></NLink>
                    <figure id='lNDiv' />
                    <div id='tag'>
                        <h1>Papugarnia Carmen</h1>
                        <h2 id='header-loc'>
                            {loc && <span id='header-loc-address'>{loc}<br /></span>}
                            <span id='header-loc-city'>Warszawa</span>
                        </h2>
                    </div>
                </div>
                <div className='headerLinks' id='hLinks'>
                    <NLink clr="#03a60b" to={{pathname: "/"}}>STRONA GŁÓWNA</NLink>
                    <NLink clr="#2202d4" to={{pathname: "/regulamin"}}>REGULAMIN</NLink>
                    <HeaderList label='OFERTA'>
                        <NLink clr="#4E9F3D" to={{pathname: "/urodziny"}}>URODZINY</NLink>
                        <NLink clr="#D81159" to={{pathname: "/grupy"}}>GRUPY</NLink>
                        <NLink clr="#FFBC42" to={{pathname: "/indywidualna"}}>INDYWIDUALNE</NLink>
                    </HeaderList>
                </div>
                <div id='hmLinksMenu' onClick={mobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id='hmLinks'>
                <div id='hmLinksBcg'>
                    <NLink clr="#03a60b" to={{pathname: "/"}}>STRONA GŁÓWNA</NLink>
                    <NLink clr="#2202d4" to={{pathname: "/regulamin"}}>REGULAMIN</NLink>
                    <button className='react-wavy-transitions__wavy-link' onClick={() => handleLinkClick("/#cennik", "cennik")}>CENNIK</button>
                    <button className='react-wavy-transitions__wavy-link' onClick={() => handleLinkClick("/#urodziny", "urodziny")}>URODZINY</button>
                    <div className='flexend'>
                        <a href={fbURL} target='_blank' rel='noreferrer' aria-label='Facebook Papugarnia Carmen'><FaFacebook id='fb'/></a>
                        <a href={igURL} target='_blank' rel='noreferrer' aria-label='Instagram Papugarnia Carmen'><FaInstagram id='ig'/></a>
                    </div>
                </div>
            </div>
            
                <div className='banner' id='headBann'>
                    {/* <img src='/assets/images/banner.webp' alt="Banner Papugarni" id='bannerImg'/> */}
                    
                    <img {...{ fetchpriority: "high" }} id='bannerImg'
                        sizes="(max-width: 1400px) 100vw, 1400px"
                        srcSet="/assets/images/bannery/banner2_pjtcgd_c_scale,w_200.webp 200w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_455.webp 455w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_752.webp 752w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_747.webp 747w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_890.webp 890w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_1044.webp 1044w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_1205.webp 1205w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_1258.webp 1258w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_1306.webp 1306w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_1383.webp 1383w,
                        /assets/images/bannery/banner2_pjtcgd_c_scale,w_1400.webp 1400w"
                        src="/assets/images/bannery/banner2_pjtcgd_c_scale,w_1400.webp"
                        alt="" />
                    <figure className='divider' id='headerDivider'/>
                    <span id='bannerLogo'>
                        <img id='bnrLogo' loading='lazy' src={logo} alt="Logo Papugarni" />
                        <h1 id="bannerText">Papugarnia Carmen</h1>
                    </span>
                </div> 
            </>
            
     );
}

export default Header;