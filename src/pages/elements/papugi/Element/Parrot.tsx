import React from 'react'
function Parrot(props: any) {
    const link = '/papugi/'+props.parrotCodename;
    const klasa = 'resident_main parrot_main parrotLink ' + props.className;
    return ( 
            <div className={klasa}>
                <div className='resident_img'>
                    <img alt={props.parrotName} src={props.img} />
                </div>
                <p className="parrotName"><strong>{props.parrotName}</strong></p>
                <p className='parrotSpiece'>{props.parrotSpiece}</p>
            </div>
     );
}

export default Parrot;