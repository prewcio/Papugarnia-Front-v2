import { useEffect } from 'react'
import Mieszkancy from './elements/J200/Mieszkancy';
import Cennik from './elements/J200/Cennik';
import FAQ from './elements/J200/FAQ';
import Urodziny from './elements/J200/Urodziny';

function Welcome() {
    useEffect(() => {
        document.title = "Papugarnia Carmen | Strona Główna"
    })
    return ( 
        <div className="content">
            <Mieszkancy />
            <Cennik />
            <Urodziny />
            <FAQ />
        </div> 
    );
}
export default Welcome;