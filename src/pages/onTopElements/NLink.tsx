import React from 'react';
import { WavyLink } from 'react-wavy-transitions';


function NLink(props: any) {
    return ( 
        <WavyLink id={props.id} className={props.className} color={props.clr} to={props.to.pathname}>
                {props.children}
        </WavyLink>
    );
}

export default NLink;