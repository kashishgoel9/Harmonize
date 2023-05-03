import React, { useEffect, useReducer, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import photo from "../assets/photo.svg";
import onboardingDots from "../assets/onboardingDots.svg";
import homeIndicator from "../assets/homeIndicator.svg";
import Button from "react-bootstrap/Button";

export default function LandingPage({ }) {
    const navigate = useNavigate();
    // const [tax_rate, setTaxRate] = useState(0.0);
    const propsData = {
        btnCreateAccount: {
            size: "lg",
            disabled: false,
            active: true,
            // variant: "outline-dark",
            children: "Create an account",
        },
    };

    useEffect(() => {
    }, []);

    return (
        <div className="onboarding">
            <img className="photo" src={photo} />
            <span className="algorithm">Algorithm</span>
            <span className="finding-love-through-music-one-s">
                Finding love through music, one Spotify playlist at a time.
            </span>
            <img className="onboarding-dots" src={onboardingDots} />
            <Button
                className="btn-create-account-instance"
                {...propsData.btnCreateAccount}
                onClick={() => {
                    navigate('/signup')
                }}
            />
            <span className="privacy-and-agreemen-" onClick={() => { navigate('/signin') }}>
                Already have an account? Sign In
            </span>
        </div>
    );
}