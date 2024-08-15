import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TxtDiv from "../TextDiv";
import NLink from "../../onTopElements/NLink";
import Parrot from "./Element/Parrot";

export default function ParrotPage() {
    const params = useParams();
    const codename = params.codename;
    const navigate = useNavigate();
    const [randomParrots, setRandomParrots] = useState([{
        id: 0,
        codename: "",
        name: "",
        spiece: "",
        size: "",
        lifespan: "",
        residency: "",
        imgLink: "",
        imgBcgLessLink: "",
        description: ""
    }])
    const [parrot, setParrot] = useState({
        id: 0,
        codename: "",
        name: "",
        spiece: "",
        size: "",
        lifespan: "",
        residency: "",
        imgLink: "",
        imgBcgLessLink: "",
        description: ""
    });
    const [contentOpacity, setContentOpacity] = useState(0);

    useEffect(() => {
        setContentOpacity(0);
        const promRand = fetch(process.env.REACT_APP_API_URL + `/api/getRandomParrots?randomCount=6&skip=${codename}`);
        promRand.then((res) => {
            res.json().then(data => {
                if(data) {
                    setRandomParrots(data);
                }
            });
        })
        .catch((err) => {
            console.log(err);
        })
        const promise = fetch(process.env.REACT_APP_API_URL + `/api/getParrot?codename=${codename}`);
        promise.then((res) => {
            res.json().then(data => {
                if(data) {
                    if(data.codename) {
                        setParrot(data);
                        setContentOpacity(1); // Set content opacity to 1
                    } else {
                        navigate('/papugi');
                    }
                }
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }, [codename])

    return (
        <div className="content" style={{ opacity: contentOpacity, transition: "opacity 0.3s", marginTop: '50px' }}>
            <h1>{parrot.spiece}</h1>
            <div className="parrot-overview">
                <img src={parrot.imgLink} alt={parrot.name} />
                <div className="parrot-info">
                    <p className="info"><strong>Imię (Imiona):</strong> {parrot.name}</p>
                    <p className="info"><strong>Gatunek:</strong> {parrot.spiece}</p>
                    <p className="info"><strong>Wielkość:</strong> {parrot.size}</p>
                    <p className="info"><strong>Długość życia:</strong> {parrot.lifespan}</p>
                    <p className="info"><strong>Zamieszkuje:</strong> {parrot.residency}</p>
                    <h4>{parrot.description}</h4>
                </div>
            </div>
            <div className="parrots-other-div">
                <h2>Zobacz też inne papugi!</h2>
                <div className="parrots-other">
                {randomParrots.map((randomParrot) => (                    
                    <NLink id={randomParrot.id} to={{pathname: '/papugi/'+randomParrot.codename}} clr={`#${Math.floor(Math.random()*16777215).toString(16)}`} key={randomParrot.id}>
                        <Parrot className="parrots-other-element" key={randomParrot.id} parrotCodename={randomParrot.codename} parrotName={randomParrot.name} parrotSpiece={randomParrot.spiece} img={randomParrot.imgLink} />
                    </NLink>
                ))}
                <NLink to={{pathname: '/papugi'}} clr={`#${Math.floor(Math.random()*16777215).toString(16)}`}><h2 id="parrotRandomLook">Zobacz więcej</h2></NLink>
                </div>
            </div>
        </div>
    )
}
