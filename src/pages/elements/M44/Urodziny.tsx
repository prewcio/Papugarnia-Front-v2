import React, { useEffect, useState } from 'react'
import TxtDiv from '../TextDiv';
import uroImg from '../../../assets/urodziny.webp';
import kolka from '../../../assets/kolka.webp';
function Urodziny() {
    
    const [price, setPrice] = useState(590);
    const [additionalPrice, setAdditionalPrice] = useState(48);

    const apiRequest = () => {
        
    }

    useEffect(() => {
        apiRequest();
        let uroImage = document.getElementById('uroImg');
        let uroKolka = document.getElementById('uroKolka');
        if(uroImage) uroImage.setAttribute('draggable', 'false');
        if(uroKolka) uroKolka.setAttribute('draggable', 'false');
    }, [])
    return ( 
        <div id='urodziny'>
            <h1>URODZINY</h1>
            <TxtDiv />
            <div id='toUroGrad' />
            <div id='urodziny-offer'>
                {/* POCZĄTEK BALONÓW */}
                <div id='urodziny-balloons'>
                    <h3 className='show768'>Urodziny w Papugarni</h3>
                    <div className='balloon hide768'>
                        <div><span>U</span></div>
                        <div><span>R</span></div>
                        <div><span>O</span></div>
                        <div><span>D</span></div>
                        <div><span>Z</span></div>
                        <div><span>I</span></div>
                        <div><span>N</span></div>
                        <div><span>Y</span></div>
                    </div>
                </div>
                {/* KONIEC BALONÓW */}
                <div id='uroOffer'>
                    <span id='uroContent'>
                        <h3>&nbsp;PRZYJĘCIE URODZINOWE W PAPUGARNI!</h3><br/>
                        <p>Szukasz pomysłu na niezwykłe i niezapomniane przyjęcie urodzinowe dla swojego dziecka? Zabierz je wraz z przyjaciółmi do Papugarni Carmen!</p><br />
                        <p><strong>Co zapeniamy Tobie</strong>, Twojemu dziecki i zaproszonym gościom?</p><br />
                        <ul>
                            <li>eleganckie zaproszenia,</li>
                            <li>sala z widokiem na Papugarnię na wyłączność 1:45 godz.,</li>
                            <li>wejście do Papugarni</li>
                            <li>karma do karmienia papug,</li>
                            <li>malowanie drewnianej papugi,</li>
                            <li>naklejki pamiątkowe, </li>
                            <li>przypinki pamiątkowe,</li>
                            <li>poczęstunek dla rodziców (kawa, herbata).</li>
                        </ul>
                        <p>Koszt organizacji dla maksymalnie <strong>10 dzieci</strong> wynosi <strong>{price} złotych</strong>.<br />Każdy kolejny gość to dodatkowe <strong>{additionalPrice} zł</strong>.</p><br />
                        <p>Aby dokonać rezerwacji wystarczy zadzwonić pod numer tel. <a href="tel:+48799090080">799 090 080</a> lub napisać wiadomość e-mail: <a href='mailto:warszawa.m44@papugarniacarmen.com'>warszawa.m44@papugarniacarmen.com</a></p>
                    </span>
                    <img src={uroImg} id='uroImg' alt='Urodziny w papugarni' />
                </div>
                <img src={kolka} id='uroKolka' alt='Pomaluj swoją papugę' />
            </div>
            <div id='fromUroGrad' />
        </div>
     );
}

export default Urodziny;