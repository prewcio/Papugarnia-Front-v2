import React, { useEffect } from 'react'
import TxtDiv from './elements/TextDiv';

function Regulamin() {
    useEffect(() => {
        document.title = "Papugarnia Carmen | Regulamin"
    })
    return ( 
        <div className='content'>
            <h1>REGULAMIN W PAPUGARNI CARMEN</h1>
            <TxtDiv />
            <div id='regulaminContent'>
                <div id='regulaminRules'>
                    <strong>1.</strong>	Warunkiem przebywania na terenie Papugarni jest wykupienie biletu wstępu.<br />
                    <strong>2.</strong>	Papugarnia otwarta jest w godzinach 10-19/10-20 (Aleje Jerozolimskie 200), 11-18/10-18 (Marywilska 44). <br />
                    <strong>3.</strong>	Dzieci do lat 12 mogą przebywać na terenie Papugarni wyłącznie pod opieką osób dorosłych. <br />
                    <strong>4.</strong>	Z uwagi na bezpieczeństwo papug (głównie papugi chodzące po ziemi) należy zachować szczególną ostrożność i poruszać się w taki sposób, aby nie wyrządzić papugom krzywdy. Szczególnie zabrania się biegania i skakania po sali. <br />
                    <strong>5.</strong>	Przed wejściem na teren papugarni bezwzględnie należy ściągnąć i schować: zegarki, biżuterię (pierścionki,bransoletki, łańcuszki,okulary przeciwsłoneczne itp) oraz szczgólnie uważać na kolorowe paznokcie i tipsy. <br />
                    <strong>6.</strong>	Bezwzględny zakaz wchodzenia w każdego rodzaju kolczykach. <br />
                    <strong>7.</strong>	Na terenie papugarni obowiązuje bezwzględny zakaz:<br />
                        &emsp;&emsp;a) Karmienia i brania na ręce dużych papug (czerwonych i niebieskich).<br />
                        &emsp;&emsp;b) Biegania, hałasowania i używania hałaśliwych urządzeń.<br />
                        &emsp;&emsp;<span className='important'>c) Karmienia pozostałych papug pokarmem innym niż specjalny, zakupiony w naszej papugarni.</span> <br />
                        &emsp;&emsp;d) Drażnienia, przeszkadzania i niepokojenia papug. <br />
                        &emsp;&emsp;e) Straszenia, męczenia, sprawiania bólu ptakom (ściskanie, szarpanie, ciągnięcie za pióra) <br />
                        &emsp;&emsp;f) Fotografowania, filmowania z użyciem lampy błyskowej.<br />
                        &emsp;&emsp;g) Zaśmiecania terenu <br />
                        &emsp;&emsp;h) Palenia tytoniu <br />
                        &emsp;&emsp;i) Wnoszenia alkoholu oraz przebywania na terenie Papugarni w stanie nietrzeźwym lub pod wpływem innych środków odurzających. <br />
                        &emsp;&emsp;j) Wprowadzania jakichkolwiek zwierząt. <br />
                        &emsp;&emsp;k) Jedzenia i picia na sali, wnoszenia torebek foliowych, podawania ptakom do zabawy rzeczy do tego nie przeznaczonych takich jak smyczki, breloczki itp.<br />
                    <strong>8.</strong>	Zwiedzający są zobowiązani do przestrzegania przepisów niniejszego regulaminu . Wejście na teren Papugarni z ważnym biletem wstępu jest jednoznaczne z akceptacją regulaminu.<br />
                    <strong>9.</strong>	Wszelką odpowiedzialność za jakiekolwiek szkody szkody na zdrowiu, życiu lub mieniu osób zwiedzających, wynikających z winy Zwiedzających lub naruszenia postanowień niniejszego Regulaminu i nieprzestrzegania jego postanowień, ponoszą osoby Zwiedzające.<br />
                    <strong>10.</strong>	Zwiedzający odpowiada za wszelkie szkody i straty wynikłe z jego winy oraz z nieprzestrzegania niniejszych przepisów.<br />
                    <strong>11.</strong>	Po wejściu na Halę Lotów nie ma możliwości zwrotu pieniędzy. <br />
                </div>
                <div id='regulaminInfo'>
                    Należy bezwzględnie przestrzegać uwag i zaleceń pracowników Papugarni.
                    Nie zastosowanie się grozi wyproszeniem z Papugarni bez możliwości odzyskania pieniędzy!
                    Niespelnienie powyższych warunków (t.j. odmowa zdjęcia biżuterii) wiąże się z możliwością nie wpuszczenia na Halę Lotów.
                </div>
                <div id='regulaminPhoto'>
                Fotografownie i filmowanie na terenic Papugami dozwolone jest tylko do celów prywatnych. 
                W przypadku publikowania. wykonanych na terenie Papugami zdjęć nalezy umieścić infomacje iż zdjęcia zostały wykonane w Papugarni Carmen.
                </div>
            </div>
        </div>
     );
}

export default Regulamin;