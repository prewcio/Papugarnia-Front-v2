import React, {useState, useEffect} from 'react'
import { InputNumber } from 'primereact/inputnumber';
import axios from '../../../../../functionsModules/axios';
import { Button } from 'primereact/button';
import useAuthContext from '../../context/AuthContext';
import TxtDiv from '../../../TextDiv';
import Loader from '../../../Loader';

function TicketPanel() {
    const [nPrice, setnPrice] = useState(39);
    const [uPrice, setuPrice] = useState(33);
    const [br1Price, setbr1Price] = useState(69);
    const [br1dPrice, setbr1dPrice] = useState(28);
    const [br2Price, setbr2Price] = useState(106);
    const [br2dPrice, setbr2dPrice] = useState(28);
    const [bgnPrice, setbgnPrice] = useState(35);
    const [bguPrice, setbguPrice] = useState(30);
    const [fPrice, setfPrice] = useState(3);
    const [tPrice, settPrice] = useState(7);
    const [ubPrice, setUbPrice] = useState(850);
    const [udPrice, setUdPrice] = useState(60);
    const authContext = useAuthContext();

    if (!authContext) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }
    const { loader, setLoader } = authContext;
    const [submit, setSubmit] = useState("");

    const getPrices = () => {
        // setLoader(true);
        fetch(process.env.REACT_APP_API_URL+'/api/getPrices').then((res) => {
            res.json().then(data => {
                setnPrice(data[0].ticketPrice);
                setuPrice(data[1].ticketPrice);
                setbr1Price(data[2].ticketPrice);
                setbr2Price(data[3].ticketPrice);
                setbr1dPrice(data[4].ticketPrice);
                setbr2dPrice(data[5].ticketPrice);
                setbgnPrice(data[6].ticketPrice);
                setbguPrice(data[7].ticketPrice);
                setfPrice(data[8].ticketPrice);
                settPrice(data[9].ticketPrice);
                setUbPrice(data[10].ticketPrice);
                setUdPrice(data[11].ticketPrice);
            });
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            // setLoader(false);
        })
    }

    useEffect(() => {
        getPrices();
    }, []);


    const handleSubmit = (e: any) => {
        setSubmit("");
        e.preventDefault();
        setLoader(true);
        axios.post('/api/setPrices', {
            biletNormalny: nPrice,
            biletUlgowy: uPrice,
            biletRodzinny1: br1Price,
            biletRodzinny1dd: br1dPrice,
            biletRodzinny2: br2Price,
            biletRodzinny2dd: br2dPrice,
            biletGrupowyN: bgnPrice,
            biletGrupowyU: bguPrice,
            karma: fPrice,
            przysmak: tPrice,
            urobaza: ubPrice,
            urodod: udPrice
        }).then((res) => {
            getPrices();
            setSubmit(res.data.status);
        }).catch((err) => {
        })
        setLoader(false);
    }

    return ( 
        <>
        <h1>Zarządzanie cenami</h1>
        <div id='pricePanel'>
            {loader &&
                <Loader />
            }
            <form onSubmit={handleSubmit} className='ticketContainer'>
                <div className='ticketForm'>
                    <div className='ticketElement'><h4>Bilet Normalny</h4><InputNumber min={0} value={Number(nPrice)} onValueChange={(e: any) => setnPrice(e.value)} /></div>
                    <div className='ticketElement'><h4>Bilet Ulgowy</h4><InputNumber min={0} value={uPrice} onValueChange={(e: any) => setuPrice(e.value)} /></div>
                    <div className='ticketElement'><h4>Bilet Rodzinny 1+1</h4><InputNumber min={0} value={br1Price} onValueChange={(e: any) => setbr1Price(e.value)} /></div>
                    <div className='ticketElement'><h4>Bilet Rodzinny 2+1</h4><InputNumber min={0} value={br2Price} onValueChange={(e: any) => setbr2Price(e.value)} /></div>
                    <div className='ticketElement'><h4>Bilet Rodzinny 1+1 Dodatkowe</h4><InputNumber min={0} value={br1dPrice} onValueChange={(e: any) => setbr1dPrice(e.value)} /></div>
                    <div className='ticketElement'><h4>Bilet Rodzinny 2+1 Dodatkowe</h4><InputNumber min={0} value={br2dPrice} onValueChange={(e: any) => setbr2dPrice(e.value)} /></div>
                    <div className='ticketElement'><h4>Bilet Grupowy Normalny</h4><InputNumber min={0} value={bgnPrice} onValueChange={(e: any) => setbgnPrice(e.value)} /></div>
                    <div className='ticketElement'><h4>Bilet Grupowy Ulgowy</h4><InputNumber min={0} value={bguPrice} onValueChange={(e: any) => setbguPrice(e.value)} /></div>
                    <div className='ticketElement'><h4>Karma</h4><InputNumber min={0} value={fPrice} onValueChange={(e: any) => setfPrice(e.value)} /></div>
                    <div className='ticketElement'><h4>Przysmak</h4><InputNumber min={0} value={tPrice} onValueChange={(e: any) => settPrice(e.value)} /></div>

                    <div className='ticketElement'><h4>Urodziny Bazowe</h4><InputNumber min={0} value={ubPrice} onValueChange={(e: any) => setUbPrice(e.value)} /></div>
                    <div className='ticketElement'><h4>Urodziny Dodatkowe Dziecko</h4><InputNumber min={0} value={udPrice} onValueChange={(e: any) => setUdPrice(e.value)} /></div>
                </div>
                <Button className="p-button-success panelSubmitButton" type='submit'>Zapisz</Button>
                {submit.length > 0 &&
                    <><br /><span className='successText'>Ceny zostały zmienione pomyślnie.</span><br /></>
                }
            </form>
        </div>
        </>
     );
}

export default TicketPanel;