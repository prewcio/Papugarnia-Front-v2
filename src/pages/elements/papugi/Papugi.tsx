import React from 'react'
import Parrot from './Element/Parrot';
import Ararauna from '../../../assets/parrots/ara_ararauna.webp';
import TxtDiv from '../TextDiv';
function Papugi() {
    const parrots = [
        {
            'id': 1,
            'codename': 'kakadu-zoltoczube',
            'name': 'White',
            'spiece': 'Kakadu Żółtoczube',
            'size': 'ok. 50 cm',
            'lifespan': 'do 80 lat',
            'residency': 'Wschodnią i północną Austalię, Tasmanię, Melanezję i Nową Gwineę',
            'description': 'Nasza White to typowe kakadu - uwielbia zabawę i ma swoje zdanie. Jeżeli ma ochotę ukraść karmę - sorry, to już jej karma. Ma ochotę na drapanko po karku? Sorry, nie masz wyjścia - albo drapiesz albo dostaniesz z dzioba :)',
            'img': Ararauna
        },
        {
            'id': 2,
            'codename': 'zako-kongijskie',
            'name': 'Rosołek',
            'spiece': 'Żako Kongijskie',
            'size': '30-40 cm',
            'lifespan': 'ok. 50 lat',
            'residency': 'Środkową Afrykę oraz Wyspy Świętego Tmasza i Książęcą',
            'description': 'Żako są głównie znane ze swoich świetnych umiejętności naśladowczych. Nasze Rosołki również mają szeroki zasób słów             Może udało Ci się usłyszeć ich słynne „Halo” i „Nie wolno”?',
            'img': Ararauna
        },
        {
            'id': 3,
            'codename': 'szkarlatka-krolewska',
            'name': 'Książe',
            'spiece': 'Szkarłatka Królewska',
            'size': 'ok. 45 cm',
            'lifespan': 'nawet 30 lat',
            'residency': 'Australię',
            'description': 'U Szkarłatek jest widoczny dymorfizm płciowy – samica ma zieloną głowę i piersi oraz czarny dziób. Samiec zaś posiada czerwone upierzenie głowy, piersi oraz spodu ciała i zielone skrzydła wraz z ogonem. Dziób jest koloru pomarańczowo – czarnego. Zgadnij, jakiej płci jest nasz Książę?',
            'img': Ararauna
        },
        {
            'id': 4,
            'codename': 'rudosterka',
            'name': 'Ziutek i Dziobek',
            'spiece': 'Rudosterki',
            'size': 'ok. 25 cm',
            'lifespan': '35-40 lat',
            'residency': 'Centralną część Ameryki Południowej',
            'description': 'U Szkarłatek jest widoczny dymorfizm płciowy – samica ma zieloną głowę i piersi oraz czarny dziób. Samiec zaś posiada czerwone upierzenie głowy, piersi oraz spodu ciała i zielone skrzydła wraz z ogonem. Dziób jest koloru pomarańczowo – czarnego. Zgadnij, jakiej płci jest nasz Książę?',
            'img': Ararauna
        },

    ]
    return ( 
        <div className='content'>
            <h1>POZNAJ NASZE PAPUGI</h1>
            <TxtDiv />
            <div className='carmen_residents'>
                {parrots.map((parrot) => (
                    <Parrot key={parrot.id} parrotCodename={parrot.codename} parrotName={parrot.name} parrotSpiece={parrot.spiece} img={parrot.img} />
                ))}
            </div>
        </div>
     );
}

export default Papugi;