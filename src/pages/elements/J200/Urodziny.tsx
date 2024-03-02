import React, { useEffect, useState } from 'react'
import TxtDiv from '../TextDiv';
import uroImg from '../../../assets/urodziny.webp';
import kolka from '../../../assets/kolka.webp';
function Urodziny() {
    const [uPrice, setuPrice] = useState(777);
    const [uddPrice, setuddPrice] = useState(55);

    useEffect(() => {
        const promise = fetch(process.env.REACT_APP_API_URL+'/api/getPrices');
        promise.then((res) => {
            res.json().then(data => {
                if(data) {
                    setuPrice(data[10].ticketPrice);
                    setuddPrice(data[11].ticketPrice);
                }
            });
        })
        .catch((err) => {
            console.log(err);
        })
    })


    useEffect(() => {
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
                        <p>Szukasz pomysłu na niezwykłe i niezapomniane przyjęcie urodzinowe dla swojego dziecka? Zabierz je wraz z przyjaciółmi do Papugarni Carmen!</p><br />
                        <p><strong>Co zapeniamy Tobie</strong>, Twojemu dziecki i zaproszonym gościom?</p><br />
                        <ul>
                            <li>udekorowana salka urodzinowa na wyłączność na 2 godz. (ze stolikami, krzesełkami oraz oddzielną szatnią),</li>
                            <li>zastawa (talerzyki, kubeczki, sztućce),</li>
                            <li>wejście na halę wolnych lotów + karma dla papug,</li>
                            <li>zaproszenia urodzinowe do rozdania,</li>
                            <li>podczas trwania urodzin dzieciaki mają do dyspozycji jednego z naszych opiekunów, który chętnie opowiada o papugach,</li>
                            <li>prezent dla solenizanta oraz małe upominki dla gości,</li>
                            <li>kawa i herbata dla rodziców,</li>
                            <li>poczęstunek jest po stronie osoby organizującej urodziny, tj. napoje, tort, przekąski, miseczki na przekąski.</li>
                        </ul>
                        <p>Koszt organizacji dla maksymalnie <strong>10 dzieci</strong> wynosi <strong>{uPrice} złotych</strong>.<br />Każdy kolejny gość to dodatkowe <strong>{uddPrice} zł</strong>.</p><br />
                        <p>Aby dokonać rezerwacji wystarczy zadzwonić pod numer tel. <a href="tel:+48506059999">506 059 999</a> lub napisać wiadomość e-mail: <a href='mailto:warszawa.j200@papugarniacarmen.pl'>warszawa.j200@papugarniacarmen.pl</a></p>
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