import React, { useEffect, useReducer, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useLocation } from "react-router-dom";
import photos from "../assets/photos.svg";
import "../css/matched.css";
import Button from "react-bootstrap/Button";

export default function Matched({ }) {
    const navigate = useNavigate();
    const location = useLocation();
    // const [tax_rate, setTaxRate] = useState(0.0);
    const propsData = {
        btnContinue: {
            size: "lg",
            disabled: false,
            active: true,
            variant: "outline-dark",
            children: "Say hello",
        },
        btnContinue1: {
            variant: "outline-light",
            disabled: false,
            active: true,
            children: "Keep swiping",
        },
    };

    useEffect(() => {
        console.log(location.state)
    }, [location]);

    return (
        <div className="match">
            <img className="photos" src={photos} />
            <span className="its-a-match-alfredo">It's a match, {location.state.user.state.first_name}!</span>
            <span className="start-a-conversation-now-with-ea">
                Start a conversation now with each other
            </span>
            <Button className="btn-continue-instance " onClick={()=>{alert("Not supported yet.")}} {...propsData.btnContinue} />
            <Button className="btn-continue-1-instance" onClick={()=>{navigate('/home')}} {...propsData.btnContinue1} />
        </div>
    );
}