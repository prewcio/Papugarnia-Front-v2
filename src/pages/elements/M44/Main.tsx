import React, { Component, useEffect } from 'react'
import Mieszkancy from './Mieszkancy';
import Cennik from './Cennik';
import Urodziny from './Urodziny';
import FAQ from './FAQ';
import Honorowane from './Honorowane';

function M44() {
    useEffect(() => {
        document.title = "Papugarnia Carmen | Marywilska 44"
    })
    return ( 
        <div className="content">
            <Mieszkancy />
            <Cennik />
            <Urodziny />
            <FAQ />
            <Honorowane />
        </div> 
    );
}
export default M44;