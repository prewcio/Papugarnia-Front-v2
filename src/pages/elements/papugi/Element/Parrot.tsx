import React from 'react'
function Parrot(props: any) {
    const link = '/papugi/'+props.parrotCodename;
    return ( 
        <a href={link.toLowerCase()} className='parrotLink'>
            <div className='resident_main parrot_main'>
                <div className='resident_img'>
                    <img alt={props.parrotName} src={props.img} />
                </div>
                <p className="parrotName"><strong>{props.parrotName}</strong></p>
                <p className='parrotSpiece'>{props.parrotSpiece}</p>
            </div>
        </a>
     );
}

export default Parrot;