import SpotifyWebApi from 'spotify-web-api-js';
import { encode as base64_encode } from 'base-64';

const spotifyApi = new SpotifyWebApi();

export async function refreshAccessToken(refreshToken) {
    const base64_encoded_auth_token = base64_encode(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)
    try {
        await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${base64_encoded_auth_token}`
            },
            body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                if (data.access_token) {
                    // console.log("Inside refresh")
                    // console.log(data)
                    spotifyApi.setAccessToken(data.access_token);
                    localStorage.setItem('access_token', data.access_token);
                    // localStorage.setItem('refresh_token', data.refresh_token);
                    localStorage.setItem('expires_in', data.expires_in);
                    return data.access_token;
                }
            });
        // return localStorage.getItem('access_token')
    }
    catch (e) {
        console.log(e)
    }
}

export const onAccessToken = (token) => {
    // Use the access token to make requests to the Spotify API
    console.log(token);
    localStorage.setItem('access_token', token);

};

export const onRefreshToken = (refreshToken) => {
    // Store the refresh token in a secure location
    console.log(refreshToken);
    localStorage.setItem('refresh_token', refreshToken);
    // localStorage.setItem('expires_in', expires_in);
};