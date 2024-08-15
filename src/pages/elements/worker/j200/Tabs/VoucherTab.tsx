import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import axios from '../../../../../functionsModules/axios';
import axiosFile from '../../../../../functionsModules/axiosFile';
import TxtDiv from '../../../TextDiv';

function VoucherPanel() {
    const [voucherCount, setVoucherCount] = useState(1);
    const [voucherType, setVoucherType] = useState("");

    const [voucherGeneratedCount, setVoucherGeneratedCount] = useState(1);
    const [voucherGeneratedType, setVoucherGeneratedType] = useState("");

    const [voucherCheckCode, setVoucherCheckCode] = useState("");
    const [voucherCheckState, setVoucherCheckState] = useState("");
    const [voucherCheckType, setVoucherCheckType] = useState("");
    const [voucherCheckExpire, setVoucherCheckExpire] = useState("");
    const [voucherCheckTicket, setVoucherCheckTicket] = useState("");

    const [voucherUseCode, setVoucherUseCode] = useState("");
    const [voucherUseState, setVoucherUseState] = useState("");
    const [voucherUseType, setVoucherUseType] = useState("");
    const [voucherUseTicket, setVoucherUseTicket] = useState("");

    const [voucherCode, setVoucherCode] = useState("");
    const [voucherExpireDate, setVoucherExpireDate] = useState("");

    const handleCheckSubmit = (e: any) => {
        e.preventDefault();
        axios.post('/api/checkVoucher', {
            voucherCode: voucherCheckCode
        }).then((res) => {
            setVoucherCheckExpire(res.data.expire);
            setVoucherCheckType(res.data.type);
            setVoucherCheckState(res.data.state);
            setVoucherCheckTicket(res.data.voucherType)
        })
    }

    const handleUseSubmit = (e: any) => {
        e.preventDefault();
        axios.post('/api/useVoucher', {
            voucherCode: voucherUseCode,
        }).then((res) => {
            setVoucherUseType(res.data.type);
            setVoucherUseState(res.data.state);
            setVoucherUseTicket(res.data.voucherType);
        })
    }

    const handleGenerateSubmitImg = (ilosc: any, typ: any, kod: any, expire: any) => {
        axiosFile.post('/api/generateVoucherIMG', {
            count: ilosc,
            type: typ,
            invite_code: kod,
            when_expires: expire
        }).then((res) => {
            console.log(res.data);
            const url = window.URL.createObjectURL(
                new Blob([res.data], {type: 'application/pdf'}),
            )
            const link = document.createElement("a");
            link.href = url;
            link.download = "Voucher.pdf";
            link.click();
        })
    };

    const handleGenerateSubmit = (e: any) => {
        e.preventDefault();
        axios.post('/api/generateVoucher', {
            ilosc: voucherCount,
            type: voucherType
        }).then((res) => {
            setVoucherCode(res.data.invite_code);
            const date = new Date(res.data.when_expires);
            date.setDate(date.getDate()-1)
            const formattedDate = date.toLocaleDateString('pl-PL', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              });
              console.log(formattedDate); 
            setVoucherExpireDate(formattedDate);
            setVoucherGeneratedCount(res.data.count);
            setVoucherGeneratedType(res.data.type);
            handleGenerateSubmitImg(res.data.count, res.data.type, res.data.invite_code, res.data.when_expires);
        })
    };
    const [tab, setTab] = useState("generate");

    const renderPanel = () => {
        switch(tab){
            case 'generate':
                return <form className='voucherContainer' onSubmit={handleGenerateSubmit}>
                    <h2>Wygeneruj voucher</h2>
                    <div id='voucherGenerate'>
                        <h3>Ilość osób</h3>
                        <InputNumber min={1} value={voucherCount} onValueChange={(e: any) => setVoucherCount(e.value)} required/><br />
                        <Dropdown value={voucherType} onChange={(e) => setVoucherType(e.target.value)} options={['Normalny','Ulgowy']} placeholder="Wybierz typ vouchera" />
                    </div>
                    {voucherCode && (voucherCode.length >= 10 || voucherCode.length <=16) &&
                    <><span className='successText'>Voucher <strong>{voucherGeneratedType}</strong> dla <strong>{voucherGeneratedCount} os.</strong> został wygenerowany. <br/>Kod Vouchera: <strong>{voucherCode}</strong><br />Ważny do: <strong>{voucherExpireDate}</strong></span><br /></>
                    }
                    <Button className="p-button-success panelSubmitButton" type='submit' onClick={() => {
                        setVoucherCode("");
                    }}>Generuj Voucher</Button>
                </form>
                
            case 'check':
                return <form className='voucherContainer' onSubmit={handleCheckSubmit}>
                    <h2>Sprawdź voucher</h2>
                    <div id='voucherCheck'><h3>Kod Vouchera</h3><InputText value={voucherCheckCode} onChange={(e) => {
                        setVoucherCheckCode(e.target.value);
                        setVoucherCheckType("");
                        setVoucherCheckState("");
                    }} maxLength={16} required/></div>
                    {voucherCheckType === "error" && 
                    <><span className='errorText'>{voucherCheckState}</span><br /></>
                    }
                    {voucherCheckType === "success" && 
                    <><span className='successText'>Voucher jest aktywny. Voucher dla: <strong>{voucherCheckState}</strong><br />Ważny do: <strong>{voucherCheckExpire}</strong><br/>Typ: <strong>{voucherCheckTicket}</strong></span><br /></>
                    }
                    <Button className="p-button-success panelSubmitButton" type='submit'>Sprawdź Voucher</Button>
                </form>
            case 'use': 
                return <form className='voucherContainer' onSubmit={handleUseSubmit}>
                    <h2>Wykorzystaj voucher</h2>
                    <div id='voucherCheck'><h3>Kod Vouchera</h3><InputText value={voucherUseCode} onChange={(e) => {
                        setVoucherUseCode(e.target.value);
                        setVoucherUseType("");
                        setVoucherUseState("");
                    }} maxLength={16} required/></div>
                    {voucherUseType === "error" && 
                    <><span className='errorText'>{voucherUseState}</span><br /></>
                    }
                    {voucherUseType === "success" && 
                    <><span className='successText'>Voucher <strong>{voucherUseTicket}</strong> dla <strong>{voucherUseState}</strong> pomyślnie wykorzystano.</span><br /></>
                    }
                    <div id='voucherButtonPanel'>
                        <Button className="p-button-success panelSubmitButton" type='submit'>Wykorzystaj</Button>
                    </div>
                </form>
            default:
                setTab('generate');
                return null;
        }

    }
    
    return (
        <>
        <h1>Zarządzanie Voucherami</h1>
        <div id='voucherPanel'>
            <div id='menuTabs'>
                <div onClick={() => {setTab('generate')}} id='generateTab' className='menuTab'>WYGENERUJ</div>
                <div onClick={() => {setTab('check')}}  id='checkTab' className='menuTab'>SPRAWDŹ</div>
                <div onClick={() => {setTab('use')}}  id='useTab' className='menuTab'>WYKORZYSTAJ</div>
            </div>
            {renderPanel()}
        </div>
        </> 
     );
}

export default VoucherPanel;