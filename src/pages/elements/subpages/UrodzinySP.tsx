import { useEffect } from "react";
import Urodziny from "../J200/Urodziny";

export default function UrodzinySP() {
    useEffect(() => {
        document.title = "Oferta Urodzinowa - Papugarnia Carmen Warszawa"
    })
    return(
        <div className="content">
            <Urodziny />
        </div>
    )
}