import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import queryString from 'query-string';
import { decode as base64_decode, encode as base64_encode } from 'base-64';

const spotifyApi = new SpotifyWebApi();


const Auth = () => {
    const { code } = queryString.parse(window.location.search)

    useEffect(() => {
        // const { code } = queryString.parse(window.location.search);
        // console.log(code)

        if (code) {
            // const { access_token, refresh_token, expires_in } = code;
            // console.log(access_token)
            // console.log(refresh_token)
            // console.log(expires_in)
            // spotifyApi.setAccessToken(access_token);
            const base64_encoded_auth_token = base64_encode(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)

            fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${base64_encoded_auth_token}`
                },
                body: `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT}`
            })
                .then((response) => response.json())
                .then((data) => {
                    const { access_token, refresh_token, expires_in } = data;
                    // console.log(data)
                    if (data.access_token) {
                        // console.log(access_token," ", refresh_token," ", expires_in)
                        localStorage.setItem('access_token', access_token);
                        localStorage.setItem('refresh_token', refresh_token);
                        localStorage.setItem('expires_in', expires_in);
                        spotifyApi.setAccessToken(access_token);
    
                        window.location.href = '/home';
                    }

                    // spotifyApi.getMySavedTracks()
                    //     .then((response) => {
                    //         console.log(response);
                    //         window.location.href = '/home';
                    //     })
                    //     .catch((error) => {
                    //         console.error(error);
                    //     });
                    // Store access_token and refresh_token in local storage
                    return access_token;
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            // window.location = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT}`;
            // window.location = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT}&scope=${YOUR_SCOPES}`;
        }
    }, [code]);

    return (
        <div>
            <h1>Spotify Authentication</h1>
            <p>Please wait while we redirect you to the Spotify login page...</p>
        </div>
    );
};

export default Auth;


// import React, { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
// import "../css/signup.css";
// import Button from "react-bootstrap/Button";
// import { SpotifyAuth, Scopes } from 'react-spotify-auth'
// import 'react-spotify-auth/dist/index.css'

// export default function Callback({ }) {
//     const location = useLocation();
//     const code = new URLSearchParams(location.search).get('code');

//     useEffect(() => {
//         console.log(code)
//     }, [code]);


//     // Use the code to authenticate with the Spotify API
//     return (<div>
//         Spotify
//     </div>
//     );
// }

