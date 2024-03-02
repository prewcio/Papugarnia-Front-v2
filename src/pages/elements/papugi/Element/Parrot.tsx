import React from 'react'
function Parrot(props: any) {
    const link = '/papugi/'+props.parrotName;
    return ( 
        <a href={link.toLowerCase()}>
            <div className='parrot'>
                <img className='parrotImg' alt={props.parrotName} src={props.img} />
                <p className="parrotName"><strong>{props.parrotName}</strong></p>
                <p className='parrotSpiece'>{props.parrotSpiece}</p>
            </div>
        </a>
     );
}

export default Parrot;