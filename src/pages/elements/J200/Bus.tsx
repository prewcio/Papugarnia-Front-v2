import React from 'react'
function Bus(props: any) {
    let data = new Date();
    let today = data.getFullYear()+"-"+(data.getMonth()+1)+'-'+data.getDate();
    let link = "https://wtp.waw.pl/rozklady-jazdy/?wtp_dt="+today+"&wtp_md=3&wtp_ln="+props.linia;
    return ( 
        <a href={link} target='_blank' rel='noopener noreferrer' className='FaqHiddenLink'>{props.linia}</a>
     );
}

export default Bus;