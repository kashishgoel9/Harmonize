/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
// import { useLocation } from 'react-router-dom';
import "../css/signup.css";
import musicNoteBeamed from "../assets/musicNoteBeamed.svg";
import Button from "react-bootstrap/Button";
import 'react-spotify-auth/dist/index.css'

export default function Signup() {
    // const [tax_rate, setTaxRate] = useState(0.0);
    const propsData = {
        btnContinueWithEmail: {
            disabled: false,
            // variant: "outline-warning",
            children: "Add your Spotify account",
        },
    };

    let scopes = ['user-read-email', 'user-read-private', 'user-library-read', 'user-follow-read', 'user-read-recently-played', 'user-top-read', ''];

// Profile details, I am, Passions, Match, Filters, Matches, Profile, Profile-ex

    useEffect(() => {
        // console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID)
        // console.log(process.env.REACT_APP_SPOTIFY_CLIENT_SECRET)
    }, []);

    return (
        <div className="sign-up-1">
            <img className="music-note-beamed" src={musicNoteBeamed} />
            <span className="sign-up-using-spotify">Sign up using Spotify</span>
            <Button
                className="btn-continue-with-email-instance"
                onClick={() => {
                    window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT}&scope=${scopes}`;
                    // https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=REDIRECT_URI&scope=SCOPE
                }}
                {...propsData.btnContinueWithEmail}
            />
            <div className="flex-container-signup">
                <span className="terms-of-use">Terms of use</span>
                <span className="privacy-policy">Privacy Policy</span>
            </div>
            {/* <SpotifyAuth
                clientID={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
                redirectUri={process.env.REACT_APP_SPOTIFY_REDIRECT}
                scopes={['user-read-email', 'user-read-private', 'user-library-read', 'offline_access']}
                title="Log in with Spotify"
                onAccessToken={onAccessToken}
                onRefreshToken={onRefreshToken}
            /> */}
        </div>
    );
}