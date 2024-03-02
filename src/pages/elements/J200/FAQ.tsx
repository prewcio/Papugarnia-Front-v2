import React, { useRef, useEffect, useState } from 'react'
import TxtDiv from '../TextDiv';
import faq_img_1 from '../../../assets/gdzie-mozna-nas-dotykac-1.webp';
import faq_img_2 from '../../../assets/gdzie-mozna-nas-dotykac-2.webp';
import Bus from './Bus';

function FAQ() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const observedDiv = useRef<HTMLDivElement>(null);


    const handleClick = (e: any) => {
        if (e.target.className !== 'Question' && e.target.parentNode.className !== 'Question') return;
        const questionHeight = e.currentTarget.querySelector('.Question').clientHeight;
        const answerHeight = e.currentTarget.querySelector('.Answer').clientHeight;
        if(e.currentTarget.classList.contains('shown')) {
            e.currentTarget.style.height = `${questionHeight+15}px`;
            e.currentTarget.classList.remove('shown');
        } else {
            e.currentTarget.style.height = `${questionHeight + answerHeight + 15}px`;
            e.currentTarget.classList.add('shown');
        }
    }

    const adjustHeight = (element: HTMLElement) => {
        const questionElement = element.querySelector('.Question') as HTMLElement;
        if(!questionElement) return; // Guard clause to prevent undefined elements
        const parentNode = questionElement.parentNode as HTMLElement;
        if(parentNode && parentNode.classList.contains('shown')){
            const questionHeight = questionElement.clientHeight;
            const answerElement = parentNode.querySelector('.Answer') as HTMLElement;
            const answerHeight = answerElement ? answerElement.clientHeight : 0;
            parentNode.style.height = `${questionHeight + answerHeight + 15}px`; // Fixed to correctly reference parentNode for style
        } else {
            const questionHeight = questionElement.clientHeight;
            let hneed = questionHeight+15;
            element.style.height = `${hneed}px`;
            
        }
    };

    useEffect(() => {
        if (!observedDiv.current) {
          return;
        }
        const resizeObserver = new ResizeObserver(() => {
            const current = observedDiv.current;
            if (current && (current.offsetWidth !== width || current.offsetHeight !== height)) {
                const faqElements = document.querySelectorAll('.FAQElement');
                faqElements.forEach((element) => {
                    adjustHeight(element as HTMLElement);
                });
                setWidth(current.offsetWidth);
                setHeight(current.offsetHeight);
            }
        });
        resizeObserver.observe(observedDiv.current);

        return () => resizeObserver.disconnect();
    }, [width, height]);

    useEffect(() => {
        
        
        const faqimg1 = document.getElementById('glaskanie1');
        const faqimg2 = document.getElementById('glaskanie2');
        if(faqimg1) faqimg1.setAttribute('draggable', 'false');
        if(faqimg2) faqimg2.setAttribute('draggable', 'false');
        // Adjust the height of each FAQElement on initial render
        const faqElements = document.querySelectorAll('.FAQElement');
        faqElements.forEach((element) => {
            adjustHeight(element as HTMLElement);
        });
    }, []);

    return ( 
        <div id='FAQ'>
            <h1>NAJCZĘSCIEJ ZADAWANE PYTANIA</h1>
            <TxtDiv />
            <div id='FAQContainer'>
                <div className='FAQElement' onClick={handleClick} ref={observedDiv}>
                    <p className='Question'>Jak można dojechać do papugarni?</p>
                    <p className='Answer'>Do papugarni można dojechać autobusami: <strong><Bus linia='187'/>, <Bus linia='189'/>, <Bus linia='401'/>, <Bus linia='517'/>, <Bus linia='717'/>, <Bus linia='817'/></strong> - przystanek "<strong>Łopuszańska</strong>", a także samochodem - parking znajduje się <strong>za szlabanem</strong>, gdzie można pobrać bilet - <strong>darmowe parkowanie jest do 3 godzin</strong>.</p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Kiedy papugarnia jest otwarta?</p>
                    <p className='Answer'>Papugarnia jest czynna 365 dni w roku nawet w <strong>święta</strong>, lecz godziny otwarta w te dni <strong>mogą się różnić.</strong><br />
Godziny otwarcia papugarni:<br />
<b>Poniedziałek - Piątek: 10:00-19:00<br />
Sobota - Niedziela: 10:00-20:00</b></p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Ile jest u was papug?</p>
                    <p className='Answer'>U nas jest <strong>około 70 papug</strong> m.in. Ara Zwyczajna (Ararauna), Ara Harlequin, Amazonki, Rudosterki i wiele więcej.</p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Jak się przygotować przed przyjściem do papugarni?</p>
                    <p className='Answer'>Przed przyjściem należy:<br />
                    • <strong>Zdjąć wszelką biżuterię</strong> (kolczyki, naszyjniki, bransoletki, zegarki, itp.)<br />
                    • <strong>Założyć ubranie którego nam nie będzie szkoda</strong> - trzeba liczyć się, że papugi mogą uszkodzić ubranie - oraz takie, które <strong>nie zawiera guzików, cekinów, ćwieków ani nic podobnego</strong></p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Czy można karmić swoją karmą?</p>
                    <p className='Answer'>Papugi można karmić <strong>tylko karmą dostępną przy kasie</strong>. Karma przyniesiona przez siebie nie może zostać użyta do karmienia papug w Papugarni.</p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Ile czasu można spędzić w Papugarni?</p>
                    <p className='Answer'>W papugarni można spędzić do <strong>1.5 godziny</strong>, jednakże <strong>średni czas</strong> przeznaczony przez gości wynosi od <strong>30 minut do godziny</strong>.</p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Kiedy papugi są najaktywniejsze?</p>
                    <p className='Answer'>Jeżeli chcemy przyjść w porze kiedy papugi są najaktywniejsze to zalecamy przyjść na otwarcie, czyli godzinę <strong>10:00</strong>. Jednak należy pamiętać, że w święta godzina otwarcia może ulec zmianie.</p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Czy wizyta w papugarni wymaga rezerwacji?</p>
                    <p className='Answer'>Dla osób prywatnych rezerwacja <strong>nie obowiązuje</strong>. <br />Jedynie <strong>grupy zorganizowane liczące ponad 15 osób wymagają wcześniejszej rezerwacji</strong>. Można dokonać tego drogą mailową lub najlepiej drogą telefoniczną.</p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Czy można głaskać papugi?</p>
                    <p className='Answer'>Jeżeli chodzi o głaskanie papug to na wstępie trzeba zacząć od tego, że nie każda papuga lubi być głaskana. A jeżeli już nam da się pogłaskać to prosimy o zapoznanie się z grafiką gdzie można głaskać papugi, a gdzie nie.<br /><br />
                    <img className="faqimg" id='glaskanie1' src={faq_img_1} alt="Gdzie można głaskać papugi I"/><br />
                    <img className="faqimg" id='glaskanie2' src={faq_img_2} alt="Gdzie można głaskać papugi II"/>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default FAQ;