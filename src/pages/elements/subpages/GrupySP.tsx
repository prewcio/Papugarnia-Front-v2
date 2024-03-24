import TxtDiv from "../TextDiv";

export default function GrupySP() {
    return (
        <div className="content">
            <h1>Oferta Grupowa</h1>
            <TxtDiv />
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
                <p>Cena: <strong>30 zł za osobę</strong>, <strong>jeden opiekun bezpłatnie na każde 10 osób</strong>.</p>
            </div>

        </div>
    )
}