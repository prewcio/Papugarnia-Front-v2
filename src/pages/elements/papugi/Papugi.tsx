import React, { useEffect, useState } from 'react'
import Parrot from './Element/Parrot';
import Ararauna from '../../../assets/parrots/ara_ararauna.webp';
import TxtDiv from '../TextDiv';
import NLink from '../../onTopElements/NLink';
function Papugi() {
    const [parrots, setParrots] = useState([{
        'id': 0,
        'codename': "",
        'name': "",
        'spiece': "",
        'imgLink': ""
    }]);
    const [contentOpacity, setContentOpacity] = useState(0);
    useEffect(() => {
        setContentOpacity(0);
        const promise = fetch(process.env.REACT_APP_API_URL+'/api/getAllParrots');
        promise.then((res) => {
            res.json().then(data => {
                if(data) {
                    setParrots(data);
                    setContentOpacity(1);
                }
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return ( 
        <div className='content' style={{ opacity: contentOpacity, transition: "opacity 0.3s", marginTop: '50px' }}>
            <h1>POZNAJ NASZE PAPUGI</h1>
            <TxtDiv />
            <div className='carmen_residents'>
                {parrots.map((parrot) => (
                    <>
                        <NLink to={{pathname: `/papugi/${parrot.codename}`}} clr={`#${Math.floor(Math.random()*16777215).toString(16)}`}>
                            <Parrot className='parrots_list_img' key={parrot.id} parrotCodename={parrot.codename} parrotName={parrot.name} parrotSpiece={parrot.spiece} img={parrot.imgLink} />
                        </NLink>
                    </>
                ))}
            </div>
        </div>
     );
}

export default Papugi;