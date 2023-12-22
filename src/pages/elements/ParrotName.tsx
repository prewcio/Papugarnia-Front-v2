import React, { useState } from 'react'
import NLink from '../onTopElements/NLink';

function NameP(props: any) {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = () => {
        setIsHovered(true);
    };
    const onMouseLeave = () => {
        setIsHovered(false);
    };

    const dynamicStyles = {
        color: isHovered ? props.clrH : props.clr,
        transition: '0.2s color',
        cursor: 'pointer'
    };

    return ( 
        // <NLink id={props.id} to={{pathname: '/parrots/'+props.link}} clr={props.clr}><span className='name' style={dynamicStyles} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >{props.parrot}<br />({props.imie})</span></NLink>
        <span className='name' id={props.id}>{props.parrot}<br />({props.imie})</span>
     );
     
}

export default NameP;