import { useEffect, lazy, Suspense } from 'react';
import Loader from './elements/Loader';

const Mieszkancy = lazy(() => import('./elements/J200/Mieszkancy'));
const Cennik = lazy(() => import('./elements/J200/Cennik'));
const FAQ = lazy(() => import('./elements/J200/FAQ'));

function Welcome() {
    useEffect(() => {
        document.title = "Papugarnia Carmen Warszawa";
    }, []);

    return ( 
        <div className="content">
            <Suspense fallback={<Loader />}>
                <Mieszkancy />
                <Cennik />
                <FAQ />
            </Suspense>
        </div> 
    );
}

export default Welcome;