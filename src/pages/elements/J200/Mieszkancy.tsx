import React, { useEffect } from 'react'
import TxtDiv from '../TextDiv'
import NameP from '../ParrotName';
import ararau from '../../../assets/parrots/ara_ararauna.webp'
import kakzol from '../../../assets/parrots/kakadu_zoltoczuba.webp'
import pinki from '../../../assets/parrots/kakadu_rozowa.webp'
import harleq from '../../../assets/parrots/ara_harlequin.webp';

function Mieszkancy() {
    useEffect(() => {
        const harleqImg = document.getElementById('harleq_zdj');
        const pinkiImg = document.getElementById('pinki_zdj');
        const ararauImg = document.getElementById('ararau_zdj');
        const kakzolImg = document.getElementById('kakzol_zdj');

        if(harleqImg) harleqImg.setAttribute('draggable', 'false');
        if(pinkiImg) pinkiImg.setAttribute('draggable', 'false');
        if(ararauImg) ararauImg.setAttribute('draggable', 'false');
        if(kakzolImg) kakzolImg.setAttribute('draggable', 'false');
    })

    return ( 
        <div id='mieszkancy'>
            <h1>POZNAJ MIESZKAŃCÓW PAPUGARNI</h1>
            <TxtDiv />
            <div className='carmen_residents'>
                <div className='resident_main'>
                    <div className='resident_img'>
                        <img src={harleq} id='harleq_zdj' alt='Papuga - Ara Harlequin'/>
                    </div>
                    <NameP id='harleq' parrot="Ara Harlequin" imie="Hanys" link='ara-harlequin' clr="#ff4500" clrH="#ff703b"/>
                    <p>Gatunek ten powstał z połączenia Ary Zielonoskrzydłej wraz z Arą Ararauną (zwyczajną). Są to bardzo duże ptaki, nie występujące naturalnie w naturze. 
                        Po swoich rodzicach uzyskują całą paletę barw - niebieski, zielony, pomarańczowy, żółty - który u każdego osobnika jest inaczej rozłożony.</p>
                </div>
                <div className='resident_main'>
                    <div className='resident_img'>
                        <img src={ararau} id='ararau_zdj' alt='Papuga - Ara Ararauna'/>
                    </div>
                    <NameP id='ararau' parrot="Ara Ararauna" imie="Amigo" link='ara-ararauna' clr="#0066ff" clrH="#5594f2"/>
                    <p>Gatunek ten jest głośny, inteligentny i bardzo towarzyskii! Ary pochodzą z Ameryki Południowej, mogą dożyć nawet 50 lat są wyjątkowo przyjacielskie. 
                        Ary niebieskoskrzydłe wyróżniają się spośród innych papug wielkością - rozpiętość ich skrzydeł sięga niemal 1 metra! - i 
                        charakterystycznym, pięknym ubarwieniem.</p>
                </div>
                <div className='resident_main'>
                    <div className='resident_img'>
                        <img src={kakzol} id='kakzol_zdj' alt='Papuga - Kakadu Żółtoczuba'/>
                    </div>
                    <NameP id='kakzol' parrot="Kakadu Żółtoczuba" imie="Mr. White" link='kakadu-zoltoczuba' clr="#C75000" clrH="#e28800"/>
                    <p>Ten przystojniak należy do pochodzącego z okolic Indonezji endemicznego gatunku papug kakadu białych (cacatua alba). Choć papużki nie są duże - 
                        mierzą zwykle niewiele ponad 40 cm - słychać je i widać z daleka. Choć papuga wydaje się śnieżnobiała, jej piórka są 
                        od spodu żółtawe, żółty pojawia się także na końcówce grzebienia i ogonie, co najlepiej widać, gdy papuga jest locie.</p>
                </div>
                <div className='resident_main'>
                    <div className='resident_img'>
                        <img src={pinki} id='pinki_zdj' alt='Papuga - Kakadu Różowa'/>
                    </div>
                    <NameP id='pinki' parrot="Kakadu Różowa" imie="Pinki" link='kakadu-rozowa' clr="#c010e4" clrH="#d266e8"/>
                    <p>Piękna Pinki należy do najpopularniejszego gatunku papug na świecie - kakadu różowych. 
                        Pochodzi z Australii, może dożyć 40 lat i jest niesłychanie towarzyska - w naturze kakadu różowe żyją w wielkich stadach. 
                        Dochowują również wierności - gdy znajdą partnera, nie porzucają go aż do śmierci.</p>
                </div>
            </div>
        </div>
     );
}

export default Mieszkancy;