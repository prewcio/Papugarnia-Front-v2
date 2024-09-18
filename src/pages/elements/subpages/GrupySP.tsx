import { useEffect } from "react";
import CennikGroup from "./CennikGroup";

export default function GrupySP() {
    useEffect(() => {
        document.title = "Oferta Grupowa - Papugarnia Carmen Warszawa"
    })
    return (
        <div className="content">
            <h1 style={{paddingTop: '20px'}}>OFERTA GRUPOWA</h1>
            <div className="offer">
                <p>Nasza oferta grupowa skierowana jest do <strong>zorganizowanych grup</strong> liczących <strong>co najmniej 15 osób</strong>.</p>
                <p>Aby skorzystać z oferty grupowej, niezbędna jest <strong>wcześniejsza rezerwacja</strong>, którą można dokonać drogą mailową lub telefoniczną.</p>
                <p>W ramach naszej oferty grupowej zapewniamy:</p>
                <ul>
                    <li><span className="listDot">•</span> Godzinną wizytę w Papugarni</li>
                    <li><span className="listDot">•</span> Krótką prelekcję na temat podstawowych informacji o papugach</li>
                    <li><span className="listDot">•</span> Przedstawienie zasad obowiązujących w Papugarni</li>
                    <li><span className="listDot">•</span> Mozliwość wejścia na halę wolnych lotów pod opieką naszego personelu</li>
                    <li><span className="listDot">•</span> Obcowanie z papugami bez klatek i krat, możliwość karmienia ich z ręki</li>
                    <li><span className="listDot">•</span> Po zwiedzaniu, uczestnicy mogą nabyć pamiątki związane z papugami w naszym sklepiku!</li>
                </ul>
            </div>
            <CennikGroup />
        </div>
    )
}