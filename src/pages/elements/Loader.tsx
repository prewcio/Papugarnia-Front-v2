import React, { useEffect } from 'react';
import anim from '../../assets/parrotloader.gif';

function Loader() {
    function loader_hide() {
        let loaderek = document.getElementById('loader');
        setTimeout(() => {
            if(loaderek) loaderek.classList.add('hide');
            setTimeout(() => {
                if(loaderek) loaderek.remove();
            }, 200);
        }, 400);
    }

    useEffect(() => {
        document.addEventListener('readystatechange', () => loader_hide());
        if(document.readyState === 'complete') loader_hide();
    });

    return (
        <div id='loader'>
            <img src={anim} alt='Lecąca papuga - Ładowanie strony' />
            <h3>Trwa ładowanie strony...</h3>
        </div>
    );
}

export default Loader;