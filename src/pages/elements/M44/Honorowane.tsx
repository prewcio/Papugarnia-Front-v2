import React, { useEffect } from 'react';
import KW from '../../../assets/KW.webp';
import KDR from '../../../assets/KDR.webp';
import TxtDiv from '../TextDiv';
function Honorowane() {
    useEffect(() => {
        const kdrel = document.getElementById('kdr');
        const kwel = document.getElementById('kw');
        if(kdrel) kdrel.setAttribute('draggable', 'false');
        if(kwel) kwel.setAttribute('draggable', 'false');
    }, [])
        
    return ( 
        <div id='HonorowaneKarty'>
            <h1>Honorowane karty</h1>
            <TxtDiv />
            <div id='karty'>
                <a href="https://rodzina.gov.pl"><img id='kdr' src={KDR} alt='Karta Dużej Rodziny' /></a>
                <a href="https://karta.um.warszawa.pl"><img id='kw' src={KW} alt='Karta Warszawiaka' /></a>
            </div>
        </div>
     );
}

export default Honorowane;