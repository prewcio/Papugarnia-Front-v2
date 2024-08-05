import TxtDiv from "../TextDiv";
import CennikGroup from "./CennikGroup";

export default function GrupySP() {
    return (
        <div className="content">
            <CennikGroup />
            <h1 style={{paddingTop: '20px'}}>Oferta Grupowa</h1>
            <div className="offer">
                <p>Nasza oferta grupowa skierowana jest do <strong>zorganizowanych grup</strong> liczących <strong>co najmniej 15 osób</strong>.</p>
                <p>Aby skorzystać z oferty grupowej, niezbędna jest <strong>wcześniejsza rezerwacja</strong>, którą można dokonać drogą mailową lub telefoniczną.</p>
                <p>W ramach naszej oferty grupowej zapewniamy:</p>
                <ul>
                    <li>Godzinną wizytę w Papugarni</li>
                    <li>Krótką prelekcję na temat podstawowych informacji o papugach</li>
                    <li>Przedstawienie zasad obowiązujących w Papugarni</li>
                    <li>Mozliwość wejścia na halę wolnych lotów pod opieką naszego personelu</li>
                    <li>Obcowanie z papugami bez klatek i krat, możliwość karmienia ich z ręki</li>
                    <li>Po zwiedzaniu, uczestnicy mogą nabyć pamiątki związane z papugami w naszym sklepiku!</li>
                </ul>
            </div>

        </div>
    )
}