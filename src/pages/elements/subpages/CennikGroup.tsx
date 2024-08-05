import React, { useEffect, useState } from 'react'
import TxtDiv from '../TextDiv';
import { Panel } from 'primereact/panel';


function CennikGroup() {
    const [bgnPrice, setbgnPrice] = useState(35);
    const [bguPrice, setbguPrice] = useState(30);

    useEffect(() => {
        const promise = fetch(process.env.REACT_APP_API_URL+'/api/getPrices');
        promise.then((res) => {
            res.json().then(data => {
                if(data) {
                    setbgnPrice(data[6].ticketPrice);
                    setbguPrice(data[7].ticketPrice);
                }
            });
        })
        .catch((err) => {
            console.log(err);
        })
    })

    return ( 
        <div id='cennik'>
            <h1>CENNIK DLA GRUP</h1>
            <TxtDiv />
            <div id='cennik-table'>
                <div className='ticket group'>
                    <h2 className='name'>Grupa cen</h2>
                    <h2 className='price'>Cena</h2>
                </div>
                <div className='ticket'>
                    <h2 className='name' itemProp='name'>Bilet Grupowy
                    <p>Grupa od 15 osób + Karma<br /><strong>Wymagana wcześniejsza rezerwacja</strong></p></h2>
                    <h2 className='price'itemProp='price'>{bgnPrice} zł/os.</h2>
                </div>
                <div className='ticket'>
                    <h2 className='name' itemProp='name'>Bilet Grupowy
                    <p>Grupa od 15 osób: dzieci, emeryci, studenci + Karma<br /><strong>Wymagana wcześniejsza rezerwacja</strong></p></h2>
                    <h2 className='price'itemProp='price'>{bguPrice} zł/os.</h2>
                </div>
                <p id='cennik-footer'>1 Opiekun bezpłatnie na każde 10 osób.</p>
            </div>         
        </div>
     );
}

export default CennikGroup;