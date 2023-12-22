import React, { useEffect } from 'react'
import NLink from './onTopElements/NLink';
function NotFound() {
    useEffect(() => {
        document.title = "Papugarnia Carmen | 404 Strona nie znaleziona"
    })
    return ( 
        <div className='content error'>
            <h1 id='errorHead'>Błąd 404 - Strona nie istnieje</h1>
            <h5 id='errorDesc'>Strona do której próbujesz przejść niestety przez Blue oraz jego bandę nie została odnaleziona. <br />Mamy przeczucie, że ona nie istnieje.</h5><br />
            <h5 id='errorDesc'>Zalecamy przejścię na <NLink clr="#03a60b" to={{pathname: "/"}} className="link">STRONĘ GŁÓWNĄ</NLink></h5>
        </div>
     );
}

export default NotFound;