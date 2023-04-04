import React, { useEffect, useState } from "react";
import "../css/signup.css";
import musicNoteBeamed from "../assets/musicNoteBeamed.svg";
import Button from "react-bootstrap/Button";


export default function Signup({ }) {
    // const [tax_rate, setTaxRate] = useState(0.0);
    const propsData = {
        btnContinueWithEmail: {
            disabled: false,
            // variant: "outline-warning",
            backgroundColor: 'purple',
            children: "Add your Spotify account",
        },
    };

    useEffect(() => {
    }, []);

    return (
        <div className="sign-up-1">
            <img className="music-note-beamed" src={musicNoteBeamed} />
            <span className="sign-up-using-spotify">Sign up using Spotify</span>
            <Button
                className="btn-continue-with-email-instance"
                {...propsData.btnContinueWithEmail}
            />
            <div className="flex-container">
                <span className="terms-of-use">Terms of use</span>
                <span className="privacy-policy">Privacy Policy</span>
            </div>
        </div>
    );
}