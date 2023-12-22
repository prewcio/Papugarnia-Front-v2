import React, {useEffect, useState} from 'react';
import NLink from './NLink';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/papugarnia-logo.webp';
import banner from '../../assets/banner.webp';
import harchr from '../../assets/banner-harlequin-christ.webp'
import logochr from '../../assets/papugarnia-logo-chr.webp';


function Header() {
    const [loc, setLoc]: any = useState();
    
    const dzis = new Date();
    const snieg = ((dzis.getDate()>10 && dzis.getMonth() === 11) || (dzis.getDate()<25 && dzis.getMonth()===0));
    const mobileMenu = (event: Event) => {
        event.stopPropagation(); // Stop the event propagation

        const span1 = document.querySelector('#hmLinksMenu span:nth-child(1)');
        const span2 = document.querySelector('#hmLinksMenu span:nth-child(2)');
        const span3 = document.querySelector('#hmLinksMenu span:nth-child(3)');
        const hmLinks = document.querySelector('#hmLinks');
      
        if (
          span1?.classList.contains('active') ||
          span2?.classList.contains('active') ||
          span3?.classList.contains('active') ||
          hmLinks?.classList.contains('active')
        ) {
          span1?.classList.remove('active');
          span2?.classList.remove('active');
          span3?.classList.remove('active');
          hmLinks?.classList.remove('active');
        } else {
          span1?.classList.add('active');
          span2?.classList.add('active');
          span3?.classList.add('active');
          hmLinks?.classList.add('active');
        }
    }
    
    const locator = useLocation();
    useEffect(() => {
        setLoc("Aleje Jerozolimskie 200");
        if(locator.pathname.includes('warszawa-m44')) setLoc("Marywilska 44");
        const myElement = document.getElementById('headBann');
        const logo = document.getElementById('logo') as HTMLImageElement;
        const bannerLogo = document.getElementById('bannerLogo') as HTMLImageElement;
        const bannerImg = document.getElementById('bannerImg');
        const hmLinksMenu = document.getElementById('hmLinksMenu');
        if(myElement && snieg){
            myElement.style.setProperty('--banner-after', 'URL(' + harchr + ')');
            if(logo) logo.src = logochr;
            if(bannerLogo) bannerLogo.src = logochr;
        }
        if(logo) logo.setAttribute('draggable', 'false');
        if(bannerImg) bannerImg.setAttribute('draggable', 'false');
        if(bannerLogo) bannerLogo.setAttribute('draggable', 'false');
        if(hmLinksMenu) hmLinksMenu.addEventListener('click', mobileMenu);
    }, [])
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
                    <NLink clr="#ff0000" to={{pathname: "/papugarnia/warszawa-m44"}}>MARYWILSKA 44</NLink>
                    <NLink clr="#2202d4" to={{pathname: "/regulamin"}}>REGULAMIN</NLink>
                </div>
                <div id='hmLinksMenu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id='hmLinks'>
                <div id='hmLinksBcg'>
                    <NLink clr="#03a60b" to={{pathname: "/"}}>STRONA GŁÓWNA</NLink>
                    <NLink clr="#ff0000" to={{pathname: "/papugarnia/warszawa-m44"}}>MARYWILSKA 44</NLink>
                    <NLink clr="#2202d4" to={{pathname: "/regulamin"}}>REGULAMIN</NLink>
                </div>
            </div>
                <div className='banner' id='headBann'>
                    <img src={banner} alt="Banner Papugarni" id='bannerImg'/>
                    <figure className='divider' id='headerDivider'/>
                    <span id='bannerLogo'>
                        <img src={logo} alt="Logo Papugarni" />
                        <h1 id="bannerText">Papugarnia Carmen</h1>
                    </span>
                </div> 
            </>
            
     );
}

export default Header;