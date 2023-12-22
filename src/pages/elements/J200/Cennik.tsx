import React, { useEffect, useState } from 'react'
import TxtDiv from '../TextDiv';
import { Panel } from 'primereact/panel';


function Cennik() {
    const [nPrice, setnPrice] = useState(33);
    const [uPrice, setuPrice] = useState(28);
    const [br1Price, setbr1Price] = useState(56);
    const [br1dPrice, setbr1dPrice] = useState(20);
    const [br2Price, setbr2Price] = useState(87);
    const [br2dPrice, setbr2dPrice] = useState(20);
    const [bgnPrice, setbgnPrice] = useState(28);
    const [fPrice, setfPrice] = useState(3);
    const [tPrice, settPrice] = useState(7);

    useEffect(() => {
        // const promise = fetch(process.env.REACT_APP_API_URL+'/api/getPrices');
        // promise.then((res) => {
        //     res.json().then(data => {
        //         setnPrice(data[0].ticketPrice);
        //         setuPrice(data[1].ticketPrice);
        //         setbr1Price(data[2].ticketPrice);
        //         setbr2Price(data[3].ticketPrice);
        //         setbr1dPrice(data[4].ticketPrice);
        //         setbr2dPrice(data[5].ticketPrice);
        //         setbgnPrice(data[6].ticketPrice);
        //         setfPrice(data[7].ticketPrice);
        //         settPrice(data[8].ticketPrice);
        //     });
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    })

    return ( 
        <div id='cennik'>
            <h1>CENNIK</h1>
            <TxtDiv />
            <div id='cennik-table'>
                <div className='ticket group'>
                    <h2 className='name'>Grupa cen</h2>
                    <h2 className='price'>Cena</h2>
                </div>
                <div className='ticket'>
                    <h2 className='name'>Bilet Normalny</h2>
                    <h2 className='price'>{nPrice} zł</h2>
                </div>
                <div className='ticket'>
                    <h2 className='name'>Bilet Ulgowy
                        <p>Dzieci, uczniowie, studenci (do 26 r.ż.), emeryci, renciści, KDR, Karta Warszawiaka</p>
                    </h2>
                    <h2 className='price'>{uPrice} zł</h2>
                </div>
                <div className='ticket info'>
                    <h2>Zniżki obowiązujące od poniedziałku do piątku z wyłączeniem świąt</h2>
                </div>
                <div className='ticket'>
                    <h2 className='name'>Bilet Rodzinny
                    <p>1 dorosły + 1 dziecko<br />Dodatkowe dziecko (max. 3 dodatkowych dzieci) - {br1dPrice} zł</p></h2>
                    <h2 className='price'>{br1Price} zł</h2>
                </div>
                <div className='ticket'>
                    <h2 className='name'>Bilet Rodzinny
                    <p>2 dorosłych + 1 dziecko<br />Dodatkowe dziecko (max. 3 dodatkowych dzieci) - {br2dPrice} zł</p></h2>
                    <h2 className='price'>{br2Price} zł</h2>
                </div>
                <div className='ticket'>
                    <h2 className='name'>Bilet Grupowy
                    <p>Grupa od 15 osób + Karma<br />Wymagana wcześniejsza rezerwacja</p></h2>
                    <h2 className='price'>{bgnPrice} zł/os.</h2>
                </div>
                <p id='cennik-footer'>Karma dla papug {fPrice} zł<br />
                Przysmak dla papug {tPrice} zł<br />
                <span style={{
                    fontSize: '16px'
                }}>Dzieci do lat 3 - wejście za darmo</span></p>
            </div>         
        </div>
     );
}

export default Cennik;