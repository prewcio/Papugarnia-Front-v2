import React, { useEffect, useState, Suspense } from 'react';
import NLink from './NLink';
import logo from '../../assets/papugarnia-logo.webp';
import harchr from '../../assets/banner-harlequin-christ.webp';
import logochr from '../../assets/papugarnia-logo-chr.webp';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import HeaderList from './HeaderList';
import HeaderListMobile from './HeaderListMobile';

function Header() {
    const [loc, setLoc] = useState("Aleje Jerozolimskie 200");
    const [notify, setNotify] = useState(null);
    const [load, setLoad] = useState(0);
    const fbURL = "https://www.facebook.com/papugarniawarszawacarmen";
    const igURL = "https://www.instagram.com/papugarniawarszawacarmen";

    const dzis = new Date();
    const snieg = ((dzis.getDate() > 10 && dzis.getMonth() === 11) || (dzis.getDate() < 25 && dzis.getMonth() === 0));

    const [bannerSrc, setBannerSrc] = useState("/assets/images/bannery/banner2_pjtcgd_c_scale,w_1400_lq.webp");

    const mobileMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const spans = document.querySelectorAll('#hmLinksMenu span');
        const hmLinks = document.querySelector('#hmLinks');
        if (hmLinks) {
            spans.forEach(span => span.classList.toggle('active'));
            hmLinks.classList.toggle('active');
        }
        handleNotify();
    }

    useEffect(() => {
        // Preload the banner image
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = '/assets/images/bannery/banner2_pjtcgd_c_scale,w_1400.webp';
        document.head.appendChild(link);

        // fetch(process.env.REACT_APP_API_URL + '/api/getNotification')
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data && new Date(data[0].startDate) < new Date()) {
        //             setNotify(data[0]);
        //         }
        //     })
        //     .catch(err => console.log(err));

        // handleNotify();
        const myElement = document.getElementById('headBann');
        const logo = document.getElementById('logo') as HTMLImageElement;
        const bannerLogo = document.getElementById('bnrLogo') as HTMLImageElement;
        const bannerImg = document.getElementById('bannerImg');

        if (myElement && snieg) {
            myElement.style.setProperty('--banner-after', `URL(${harchr})`);
            if (logo) logo.src = logochr;
            if (bannerLogo) bannerLogo.src = logochr;
        }
        if (logo) logo.setAttribute('draggable', 'false');
        if (bannerImg) bannerImg.setAttribute('draggable', 'false');
        if (bannerLogo) bannerLogo.setAttribute('draggable', 'false');

        if (window.location.pathname === "/") {
            const section = window.location.hash.substr(1);
            if (section) {
                const el = document.getElementById(section);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        const handleResize = () => handleNotify();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [snieg]);

    useEffect(() => {
        // Switch to full resolution image after a few seconds
        const timer = setTimeout(() => {
            setBannerSrc("/assets/images/bannery/banner2_pjtcgd_c_scale,w_1400.webp");
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, [snieg]);

    const handleNotify = () => {
        const notification = document.querySelector('.notification');
        const notificationContent = notification?.querySelector('p');
        if (notificationContent && notification) {
            const shouldScroll = (notificationContent as HTMLElement).offsetWidth > (notification as HTMLElement).offsetWidth;
            notificationContent.classList.toggle('scroll-animation', shouldScroll);
        }
    }

    return (
        <>
            <div className='header'>
                <div className='leftNav'>
                    <NLink clr="#03a60b" to={{ pathname: "/" }}><img src={logo} alt='logo' id='logo' width="100" height="100" /></NLink>
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
                    <NLink clr="#03a60b" to={{ pathname: "/" }}>STRONA GŁÓWNA</NLink>
                    <NLink clr="#2202d4" to={{ pathname: "/regulamin" }}>REGULAMIN</NLink>
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeaderList label='OFERTA'>
                            <NLink clr="#4E9F3D" to={{ pathname: "/urodziny" }}>URODZINY</NLink>
                            <NLink clr="#D81159" to={{ pathname: "/grupy" }}>GRUPY</NLink>
                            <NLink clr="#FFBC42" to={{ pathname: "/indywidualna" }}>INDYWIDUALNE</NLink>
                        </HeaderList>
                    </Suspense>
                    <NLink clr="#4A90E2" to={{ pathname: "/kontakt" }}>KONTAKT</NLink>
                </div>
                <div id='hmLinksMenu' onClick={mobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id='hmLinks'>
                <div id='hmLinksBcg'>
                    <NLink clr="#03a60b" to={{ pathname: "/" }}>STRONA GŁÓWNA</NLink>
                    <NLink clr="#2202d4" to={{ pathname: "/regulamin" }}>REGULAMIN</NLink>
                    <NLink clr="#4A90E2" to={{ pathname: "/kontakt" }}>KONTAKT</NLink>
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeaderListMobile label='OFERTA'>
                            <NLink clr="#4E9F3D" to={{ pathname: "/urodziny" }}>URODZINY</NLink>
                            <NLink clr="#D81159" to={{ pathname: "/grupy" }}>GRUPY</NLink>
                            <NLink clr="#FFBC42" to={{ pathname: "/indywidualna" }}>INDYWIDUALNE</NLink>
                        </HeaderListMobile>
                    </Suspense>
                    <div className='flexend'>
                        <a href={fbURL} target='_blank' rel='noreferrer' aria-label='Facebook Papugarnia Carmen'><FaFacebook id='fb' /></a>
                        <a href={igURL} target='_blank' rel='noreferrer' aria-label='Instagram Papugarnia Carmen'><FaInstagram id='ig' /></a>
                    </div>
                </div>
            </div>
            <div className='banner' id='headBann'>
                <img
                    data-fetchpriority="high"
                    id='bannerImg'
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    srcSet="/assets/images/bannery/banner2_pjtcgd_c_scale,w_200.webp 200w,
                            /assets/images/bannery/banner2_pjtcgd_c_scale,w_455.webp 455w,
                            /assets/images/bannery/banner2_pjtcgd_c_scale,w_752.webp 752w,
                            /assets/images/bannery/banner2_pjtcgd_c_scale,w_890.webp 890w,
                            /assets/images/bannery/banner2_pjtcgd_c_scale,w_1044.webp 1044w,
                            /assets/images/bannery/banner2_pjtcgd_c_scale,w_1205.webp 1205w,
                            /assets/images/bannery/banner2_pjtcgd_c_scale,w_1258.webp 1258w,
                            /assets/images/bannery/banner2_pjtcgd_c_scale,w_1306.webp 1306w,
                            /assets/images/bannery/banner2_pjtcgd_c_scale,w_1383.webp 1383w,
                            /assets/images/bannery/banner2_pjtcgd_c_scale,w_1400.webp 1400w"
                    src='/assets/images/bannery/banner2_pjtcgd_c_scale,w_752.webp 1400w'
                    alt="Banner Papugarni"
                    width="1400"
                    height="400"
                    draggable="false"
                    onLoad={(e) => {
                        const imgElement = e.currentTarget as HTMLImageElement;
                        imgElement.classList.add('loaded');
                    }}
                    onError={(e) => {
                        const imgElement = e.currentTarget as HTMLImageElement;
                        imgElement.src = "/assets/images/bannery/banner2_pjtcgd_c_scale,w_1400.webp";
                    }}
                />
                <figure className='divider' id='headerDivider' />
                <span id='bannerLogo'>
                    <img id='bnrLogo' loading='lazy' src={logo} alt="Logo Papugarni" />
                    <h1 id="bannerText">Papugarnia Carmen</h1>
                </span>
            </div>
            {notify &&
                <div className='notification'>
                    {notify}
                </div>
            }
        </>
    );
}

export default Header;