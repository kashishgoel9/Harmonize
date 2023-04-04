import React, { useEffect, useState } from "react";
import "../css/signup.css";
import musicNoteBeamed from "../assets/musicNoteBeamed.svg";
import Button from "react-bootstrap/Button";
import SpotifyAuth from 'react-spotify-auth';


export default function Signup({ }) {
    // const [tax_rate, setTaxRate] = useState(0.0);
    const propsData = {
        btnContinueWithEmail: {
            disabled: false,
            // variant: "outline-warning",
            children: "Add your Spotify account",
        },
    };



    useEffect(() => {
        console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID)
        console.log(process.env.REACT_APP_SPOTIFY_CLIENT_SECRET)
    }, []);

    return (
        <div className="sign-up-1">
            <img className="music-note-beamed" src={musicNoteBeamed} />
            <span className="sign-up-using-spotify">Sign up using Spotify</span>
            <Button
                className="btn-continue-with-email-instance"
                onClick={()=>{}}
                {...propsData.btnContinueWithEmail}
            />
            <div className="flex-container">
                <span className="terms-of-use">Terms of use</span>
                <span className="privacy-policy">Privacy Policy</span>
            </div>
        </div>
    );
}