import React, { useState } from 'react'
import TxtDiv from '../../../TextDiv';
function DaneTab({rola}: {rola: any}) {

    const [tab, setTab] = useState("enter");

    const chkRl = ((req: any) => {
        return rola === req;
    });

    const renderMenu = () => {
        switch (rola) {
          case 'admin':
            return <div id='menuTabs'>
                <div onClick={() => {setTab('generate')}} id='generateTab' className='menuTab'>WYGENERUJ</div>
                <div onClick={() => {setTab('check')}}  id='checkTab' className='menuTab'>SPRAWDŹ</div>
                <div onClick={() => {setTab('use')}}  id='useTab' className='menuTab'>WYKORZYSTAJ</div>
            </div>
            
          default:
            setTab('bilety')
            return null;
        }
      };

      const renderLook = () => {
        switch (tab) {
            case 'enter':

            case 'lookup':

            
        }
      }

    return ( 
        <>
        <h1>Zarządzanie Voucherami</h1>
        <div id='voucherPanel'>
            
        </div>
        </> 
     );
}

export default DaneTab;