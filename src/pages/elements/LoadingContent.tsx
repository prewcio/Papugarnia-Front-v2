import React from 'react'
import loadContent from '../../assets/loadContent.svg';
function Loading() {
    return ( 
        <div id='loadContent'>
            <img src={loadContent} alt='Content Loader' />
        </div>
     );
}

export default Loading;