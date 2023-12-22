import React, { useRef, useEffect } from 'react'
import TxtDiv from '../TextDiv';
import faq_img_1 from '../../../assets/gdzie-mozna-nas-dotykac-1.webp';
import faq_img_2 from '../../../assets/gdzie-mozna-nas-dotykac-2.webp';

function FAQ() {

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

    const adjustHeight = (element: any) => {
        const questionHeight = element.querySelector('.Question').clientHeight;
        let hneed = questionHeight+15;
        element.style.height = `${hneed}px`;
    };

    useEffect(() => {
        const faqimg1 = document.getElementById('glaskanie1');
        const faqimg2 = document.getElementById('glaskanie2');
        if(faqimg1) faqimg1.setAttribute('draggable', 'false');
        if(faqimg2) faqimg2.setAttribute('draggable', 'false');
        // Adjust the height of each FAQElement on initial render
        const faqElements = document.querySelectorAll('.FAQElement');
        faqElements.forEach((element) => {
            adjustHeight(element);
        });
    }, []);

    return ( 
        <div id='FAQ'>
            <h1>NAJCZĘŚCIEJ ZADAWANE PYTANIA</h1>
            <TxtDiv />
            <div id='FAQContainer'>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Gdzie dokładnie znajduje się papugania?</p>
                    <p className='Answer'>Papugarnia znajduje się na terenie kompleksu handlowego Marywilska 44 w <strong>Wodnym Parku Handlowym.</strong></p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Kiedy papugarnia jest otwarta?</p>
                    <p className='Answer'>Papugarnia jest czynna 365 dni w roku nawet w święta, lecz godziny otwarta w te dni mogą się różnić.<br />
Godziny otwarcia papugarni:<br />
<b>Poniedziałek - Piątek: 11:00-18:00<br />
Sobota - Niedziela: 10:00-18:00</b></p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Ile jest u was papug?</p>
                    <p className='Answer'>U nas jest około 40 papug m.in. Ara Zwyczajna (Ararauna), Ara Żółtoskrzydła, Aleksandretty i wiele więcej.</p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Jak się przygotować przed przyjściem do papugarni?</p>
                    <p className='Answer'>Przed przyjściem należy:<br />
                    • Zdjąć wszelką biżuterię (kolczyki, naszyjniki, bransoletki, zegarki, itp.)<br />
                    • Założyć ubranie którego nam nie będzie szkoda - trzeba liczyć się, że papugi mogą uszkodzić ubranie - oraz takie, które nie zawiera guzików, cekinów, ćwieków ani nic podobnego</p>
                </div>
                <div className='FAQElement' onClick={handleClick}>
                    <p className='Question'>Czy można głaskać papugi?</p>
                    <p className='Answer'>Jeżeli chodzi o głaskanie papug to na wstępie trzeba zacząć od tego, że nie każda papuga lubi być głaskana. A jeżeli już nam da się pogłaskać to prosimy o zapoznanie się z grafiką gdzie można głaskać papugi, a gdzie nie.<br />
                    <img className="faqimg" id='glaskanie1' src={faq_img_1} alt="Gdzie można głaskać papugi I"/><br />
                    <img className="faqimg" id='glaskanie2' src={faq_img_2} alt="Gdzie można głaskać papugi II"/>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default FAQ;