import { useEffect } from 'react'
import Mieszkancy from './elements/J200/Mieszkancy';
import Cennik from './elements/J200/Cennik';
import FAQ from './elements/J200/FAQ';

function Welcome() {
    useEffect(() => {
        document.title = "Papugarnia Carmen | Strona Główna"
    })
    return ( 
        <div className="content">
            <Mieszkancy />
            <Cennik />
            <FAQ />
        </div> 
    );
}
export default Welcome;