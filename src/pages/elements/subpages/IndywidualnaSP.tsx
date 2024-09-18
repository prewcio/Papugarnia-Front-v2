import { useEffect } from "react";
import Cennik from "../J200/Cennik";
import TxtDiv from "../TextDiv";

export default function IndywidualnaSP() {
    useEffect(() => {
        document.title = "Oferta Indywidualna - Papugarnia Carmen Warszawa"
    })
    return(
        <div className="content">
            <h1>OFERTA INDYWIDUALNA</h1>
            <div className="offer">
                <p>Planujesz odwiedzić naszą papugarnię <strong>samodzielnie, z przyjaciółmi czy z rodziną</strong>? Mamy dla Ciebie świetną wiadomość!</p>
                <p>W godzinach otwarcia możesz przyjść <strong>w dowolnym momencie, bez wcześniejszej rezerwacji</strong>. <br />Czas pobytu u nas to maksymalnie <strong>1,5 godziny</strong>, aby każdy mógł w pełni cieszyć się wizytą.</p>
                <p>Podczas wizyty <strong>możesz</strong>:</p>
                <ul>
                    <li><span className="listDot">•</span> Obcować z papugami w przestrzeni bez klatek i krat</li>
                    <li><span className="listDot">•</span> Karmić papugi oraz brać je na ręce</li>
                    <li><span className="listDot">•</span> Robić z nimi niesamowite zdjęcia</li>
                    <li><span className="listDot">•</span> Za pozwoleniem papugi można ją pogłaskać</li>
                    <li><span className="listDot">•</span> Poznać naszych kolorowe latające przyjaciółki</li>
                    <li><span className="listDot">•</span> Zakupić pamiątki w naszym sklepiku po zwiedzaniu</li>
                </ul>
            </div>
            <Cennik />
        </div>
    )
}