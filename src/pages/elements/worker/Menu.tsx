import React, { useEffect, useState } from 'react'
import TicketPanel from './j200/Tabs/TicketsTab';
import VoucherPanel from './j200/Tabs/VoucherTab';
import EditAcc from './j200/Tabs/AccountTab';
import useAuthContext from './context/AuthContext';
function MenuJ200({rola}: {rola: any}) {
    const [tab, setTab] = useState("");
    useEffect(() => {
        let tabsen = document.getElementsByClassName('menuTab');
        if(tabsen) Array.from(tabsen).forEach(element => {
            element.classList.remove('active');
        });
        let tabName = tab + 'Tab';
        document.getElementById(tabName)?.classList.add('active');
   }, [tab])

   const authContext = useAuthContext();

    if (!authContext) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }

   const { user, getUser, logout, role } = authContext;

    const chkRl = ((req: any) => {
        return rola === req;
    });

    const renderAdminPanel = () => {
        switch (tab) {
          case 'bilety':
            return <TicketPanel />;
          case 'vouchery':
            return <VoucherPanel />;
          case 'ai':
            return <h1>AI</h1>;
          case 'dane':
            return <h1>Dane</h1>;
          case 'konto':
            return <EditAcc />;
          default:
            setTab('bilety')
            return null;
        }
      };

      const renderManagerPanel = () => {
        switch (tab) {
          case 'bilety':
            return <TicketPanel />;
          case 'vouchery':
            return <VoucherPanel />;
          case 'ai':
            return <h1>AI</h1>;
          case 'dane':
            return <h1>Dane</h1>;
          case 'konto':
            return <h1>Konto</h1>;
          default:
            setTab('bilety')
            return null;
        }
      };

      const renderWorkerPanel = () => {
        switch (tab) {
          case 'vouchery':
            return <VoucherPanel />;
          case 'ai':
            return <h1>AI</h1>;
          case 'dane':
            return <h1>Dane</h1>;
          case 'konto':
            return <h1>Konto</h1>;
          default:
            setTab('vouchery')
            return null;
        }
      };
    
    return (
        <>
            {
            (chkRl("admin") && <h1>Menu Administracyjne</h1>) ||
            (chkRl("manager") && <h1>Menu Kierownika</h1>) ||
            (chkRl("worker") && <h1>Menu Pracownika</h1>)
            }
            {(chkRl("admin") && 
                <div id='menuTabs'>
                    <div onClick={() => {setTab('bilety')}} id='biletyTab' className='menuTab'>BILETY</div>
                    <div onClick={() => {setTab('vouchery')}}  id='voucheryTab' className='menuTab'>VOUCHERY</div>
                    {/* <div onClick={() => {setTab('dane')}}  id='daneTab' className='menuTab'>DANE</div> */}
                    <div onClick={() => {setTab('konto')}}  id='kontoTab' className='menuTab'>KONTO</div>
                    <div onClick={() => {logout()}} id='logoutTab' className='menuTab'>WYLOGUJ</div>
                </div>)
                ||
            (chkRl("manager") && 
                <div id='menuTabs'>
                    <div onClick={() => {setTab('bilety')}} id='biletyTab' className='menuTab'>BILETY</div>
                    <div onClick={() => {setTab('vouchery')}}  id='voucheryTab' className='menuTab'>VOUCHERY</div>
                    {/* <div onClick={() => {setTab('dane')}}  id='daneTab' className='menuTab'>DANE</div> */}
                    <div onClick={() => {setTab('konto')}}  id='kontoTab' className='menuTab'>KONTO</div>
                    <div onClick={() => {logout()}} id='logoutTab' className='menuTab'>WYLOGUJ</div>
                </div>)
                ||
            (chkRl("worker") &&
                <div id='menuTabs'>
                    <div onClick={() => {setTab('vouchery')}}  id='voucheryTab' className='menuTab'>VOUCHERY</div>
                    {/* <div onClick={() => {setTab('dane')}}  id='daneTab' className='menuTab'>DANE</div> */}
                    <div onClick={() => {setTab('konto')}}  id='kontoTab' className='menuTab'>KONTO</div>
                    <div onClick={() => {logout()}} id='logoutTab' className='menuTab'>WYLOGUJ</div>
                </div>)
            }
            <div id='menu'>
                {(chkRl('admin') && renderAdminPanel())
                || (chkRl('manager') && renderManagerPanel())
                || (chkRl('worker') && renderWorkerPanel())}
            </div>
        </>
     );
}

export default MenuJ200;