/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-js';
import "../css/homepage.css";
import { refreshAccessToken } from '../helpers/auth_helper'

import paginationV from "../assets/paginationV.svg";
import btnFilter from "../assets/btnFilter.svg";
import photoBg from "../assets/photoBg.svg";
import photoBlurred24Px from "../assets/photoBlurred24Px.svg";
import photoMain from "../assets/photoMain.svg";
import homeIndicator from "../assets/homeIndicator2.svg";
import btnBack from "../assets/btnBack.svg";
import navBar from "../assets/navBar.svg";
import Button from "react-bootstrap/Button";

import { getCandidates } from '../helpers/api_gateway_helper'


const spotifyApi = new SpotifyWebApi();

export default function Homepage({ }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentCandidate, setCurrentCandidate] = useState(null);

    const propsData = {
        location: {
            variant: "light",
            active: true,
            children: "1 mi",
        },
    };

    useEffect(() => {
        console.log(location.state)
    })

    async function getCandidatesHandler() {
        const response = await getCandidates(JSON.parse(localStorage.getItem('state'))['user_id']);
        if (!response || response.error) {
            console.log("Error during fetching candidates")
        }
        else {
            console.log(response)
            if (response.candidate_found === true)
                setCurrentCandidate(response)
        }

        // console.log(res.json())
        // if (res.candidate_found === 'true')
        //     setCurrentCandidate(res.candidate_id)
    }

    useEffect(() => {
        getCandidatesHandler()
    }, [])

    // useEffect(() => {
    //     // spotifyApi.setAccessToken(localStorage.getItem('access_token'));
    //     console.log(localStorage.getItem('expires_in') * 1000,new Date().getTime())
    //     if (localStorage.getItem('expires_in') * 1000 < new Date().getTime()) {
    //         // logoutAction();
    //         console.log('Time Expired, refreshing it.',localStorage.getItem('refresh_token'));

    //     }
    // }, []);



    // useEffect(() => {
    //     function mean_cal(x_list) {
    //         let summer = 0;
    //         let len = x_list.length;
    //         for (let index in x_list) {
    //             summer += x_list[index]
    //         }

    //         return summer / len;
    //     }

    //     if (trackAudioAnalysis) {
    //         console.log(trackAudioAnalysis.length)
    //         for (let index in trackAudioAnalysis) {
    //             acousticness.push(trackAudioAnalysis[index]['acousticness'])
    //             danceability.push(trackAudioAnalysis[index]['danceability'])
    //             duration_ms.push(trackAudioAnalysis[index]['duration_ms'])
    //             energy.push(trackAudioAnalysis[index]['energy'])
    //             instrumentalness.push(trackAudioAnalysis[index]['instrumentalness'])
    //             key.push(trackAudioAnalysis[index]['key'])
    //             liveness.push(trackAudioAnalysis[index]['liveness'])
    //             loudness.push(trackAudioAnalysis[index]['loudness'])
    //             mode.push(trackAudioAnalysis[index]['mode'])
    //             speechiness.push(trackAudioAnalysis[index]['speechiness'])
    //             tempo.push(trackAudioAnalysis[index]['tempo'])
    //             time_signature.push(trackAudioAnalysis[index]['time_signature'])
    //             valence.push(trackAudioAnalysis[index]['valence'])
    //         }
    //         setAcousticness(mean_cal(acousticness))
    //         setDanceability(mean_cal(danceability))
    //         setDurationMS(mean_cal(duration_ms))
    //         setEnergy(mean_cal(energy))
    //         setInstrumentalness(mean_cal(instrumentalness))
    //         setKey(mean_cal(key))
    //         setLiveness(mean_cal(liveness))
    //         setLoudness(mean_cal(loudness))
    //         setMode(mean_cal(mode))
    //         setSpeechiness(mean_cal(speechiness))
    //         setTempo(mean_cal(tempo))
    //         setTimeSignature(mean_cal(time_signature))
    //         setValence(mean_cal(valence))

    //         console.log(
    //             acousticness_mean,
    //             danceability_mean,
    //             duration_ms_mean,
    //             energy_mean,
    //             instrumentalness_mean,
    //             key_mean,
    //             liveness_mean,
    //             loudness_mean,
    //             mode_mean,
    //             speechiness_mean,
    //             tempo_mean,
    //             time_signature_mean,
    //             valence_mean)
    //             // I'll send their spotify id, first name, last name, email, dob, phoneno, gender, and a list of sexual orientations
    //             // let ob = {
    //             //     // "spotify_user_id": "8vdbh1l832bir71plxiziiyed",
    //             //     "first_name": "Aryan",
    //             //     "last_name": "Jalali",
    //             //     "email": "aryanjalali1234@gmail.com",
    //             //     "dob": "12/28/1998",
    //             //     "phone": "+16466832431",
    //             //     "gender": "Male",
    //             //     "sexual_orientations": ["straight", "gay", "lesbian", "bisexual", "asexual", "demisexual", "pansexual", "queer", "questioning"],
    //             //     "artists": [{
    //             //         "external_urls": {
    //             //             "spotify": "https://open.spotify.com/artist/2wUjUUtkb5lvLKcGKsKqsR"
    //             //         },
    //             //         "followers": {
    //             //             "href": null,
    //             //             "total": 0
    //             //         },
    //             //         "genres": [
    //             //             "canadian contemporary r&b",
    //             //             "canadian pop",
    //             //             "dance pop",
    //             //             "electropop",
    //             //             "pop",
    //             //             "post-teen pop"
    //             //         ],
    //             //         "href": "https://api.spotify.com/v1/artists/2wUjUUtkb5lvLKcGKsKqsR",
    //             //         "id": "2wUjUUtkb5lvLKcGKsKqsR",
    //             //         "images": [
    //             //             {
    //             //                 "height": 640,
    //             //                 "url": "https://i.scdn.co/image/ab6761610000e5ebe74b7398634a741f74858dc7",
    //             //                 "width": 640
    //             //             },
    //             //             {
    //             //                 "height": 320,
    //             //                 "url": "https://i.scdn.co/image/ab67616100005174e74b7398634a741f74858dc7",
    //             //                 "width": 320
    //             //             },
    //             //             {
    //             //                 "height": 160,
    //             //                 "url": "https://i.scdn.co/image/ab6761610000f178e74b7398634a741f74858dc7",
    //             //                 "width": 160
    //             //             }
    //             //         ],
    //             //         "name": "Alessia Cara",
    //             //         "popularity": 75,
    //             //         "type": "artist",
    //             //         "uri": "spotify:artist:2wUjUUtkb5lvLKcGKsKqsR"
    //             //     }],
    //             //     "tracks": [{
    //             //         "album": {
    //             //             "album_type": "SINGLE",
    //             //             "artists": [
    //             //                 {
    //             //                     "external_urls": {
    //             //                         "spotify": "https://open.spotify.com/artist/7i3eGEz3HNFnPOCdc7mqoq"
    //             //                     },
    //             //                     "href": "https://api.spotify.com/v1/artists/7i3eGEz3HNFnPOCdc7mqoq",
    //             //                     "id": "7i3eGEz3HNFnPOCdc7mqoq",
    //             //                     "name": "Akano",
    //             //                     "type": "artist",
    //             //                     "uri": "spotify:artist:7i3eGEz3HNFnPOCdc7mqoq"
    //             //                 }
    //             //             ],
    //             //             "available_markets": [],
    //             //             "external_urls": {
    //             //                 "spotify": "https://open.spotify.com/album/1O5nqluvqOUXZN9DeoHUp7"
    //             //             },
    //             //             "href": "https://api.spotify.com/v1/albums/1O5nqluvqOUXZN9DeoHUp7",
    //             //             "id": "1O5nqluvqOUXZN9DeoHUp7",
    //             //             "images": [
    //             //                 {
    //             //                     "height": 640,
    //             //                     "url": "https://i.scdn.co/image/ab67616d0000b27341a5d85e3faace60bb9e8200",
    //             //                     "width": 640
    //             //                 },
    //             //                 {
    //             //                     "height": 300,
    //             //                     "url": "https://i.scdn.co/image/ab67616d00001e0241a5d85e3faace60bb9e8200",
    //             //                     "width": 300
    //             //                 },
    //             //                 {
    //             //                     "height": 64,
    //             //                     "url": "https://i.scdn.co/image/ab67616d0000485141a5d85e3faace60bb9e8200",
    //             //                     "width": 64
    //             //                 }
    //             //             ],
    //             //             "name": "Gurenge (From \"Demon Slayer: Kimetsu no Yaiba\")",
    //             //             "release_date": "2019-05-10",
    //             //             "release_date_precision": "day",
    //             //             "total_tracks": 1,
    //             //             "type": "album",
    //             //             "uri": "spotify:album:1O5nqluvqOUXZN9DeoHUp7"
    //             //         },
    //             //         "artists": [
    //             //             {
    //             //                 "external_urls": {
    //             //                     "spotify": "https://open.spotify.com/artist/7i3eGEz3HNFnPOCdc7mqoq"
    //             //                 },
    //             //                 "href": "https://api.spotify.com/v1/artists/7i3eGEz3HNFnPOCdc7mqoq",
    //             //                 "id": "7i3eGEz3HNFnPOCdc7mqoq",
    //             //                 "name": "Akano",
    //             //                 "type": "artist",
    //             //                 "uri": "spotify:artist:7i3eGEz3HNFnPOCdc7mqoq"
    //             //             }
    //             //         ],
    //             //         "available_markets": [],
    //             //         "disc_number": 1,
    //             //         "duration_ms": 89783,
    //             //         "explicit": false,
    //             //         "external_ids": {
    //             //             "isrc": "QZGWW1904526"
    //             //         },
    //             //         "external_urls": {
    //             //             "spotify": "https://open.spotify.com/track/19Qu5BOV1Y8nDrzgYavYdB"
    //             //         },
    //             //         "href": "https://api.spotify.com/v1/tracks/19Qu5BOV1Y8nDrzgYavYdB",
    //             //         "id": "19Qu5BOV1Y8nDrzgYavYdB",
    //             //         "is_local": false,
    //             //         "name": "Gurenge (From \"Demon Slayer: Kimetsu no Yaiba\")",
    //             //         "popularity": 0,
    //             //         "preview_url": null,
    //             //         "track_number": 1,
    //             //         "type": "track",
    //             //         "uri": "spotify:track:19Qu5BOV1Y8nDrzgYavYdB"
    //             //     }]
    //             // };

    //         if (acousticness_mean != null) {
    //             refreshAccessToken(localStorage.getItem('refresh_token')).then((data) => {

    //             })
    //         }

    //     }
    // }, [
    //     trackAudioAnalysis, 
    //     danceability_mean,
    //     acousticness_mean,
    //     duration_ms_mean,
    //     energy_mean,
    //     instrumentalness_mean,
    //     key_mean,
    //     liveness_mean,
    //     loudness_mean,
    //     mode_mean,
    //     speechiness_mean,
    //     tempo_mean,
    //     time_signature_mean,
    //     valence_mean,
    //     acousticness,
    //     danceability,
    //     duration_ms,
    //     energy,
    //     instrumentalness,
    //     key,
    //     liveness,
    //     loudness,
    //     mode,
    //     speechiness,
    //     tempo,
    //     time_signature,
    //     valence,
    // ])

    return (
        <div className="main">
            <div className="flex-container-home">
                <img className="btn-back" src={btnBack} onClick={() => {
                    const url = 'https://accounts.spotify.com/en/logout'
                    // const url = 'https://www.spotify.com/logout/'
                    const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')
                    setTimeout(() => spotifyLogoutWindow.close(), 2000)
                    console.log("Done")
                    navigate('/signup',)
                }} />
                <div className="flex-container-1-home"
                    onClick={() => {

                    }}
                >
                    <span className="harmonize">Find Love</span>
                    <span className="new-york-ny">New York, NY</span>
                </div>
                <img onClick={() => {
                    console.log(JSON.parse(localStorage.getItem('state'))['user_id'])
                    // console.log(getCandidates(JSON.parse(localStorage.getItem('state'))['user_id']));
                }} className="btn-filter" src={btnFilter} alt="btn-filter" />
            </div>
            <div className="flex-container-2-home">
                <img className="photo-bg" src={photoBg} />
                <img className="photo-main" src={photoMain} />
                <div className="cat-absolute-container">
                    <Button className="location-instance" {...propsData.location} />
                    <img className="pagination-v" src={paginationV} />
                    <div className="bottom-container">
                        <div className="mask-photo">
                            <div className="cat-absolute-container-1">
                                <span className="jessica-parker-23">{currentCandidate ? currentCandidate.candidate_id : "Jessica Parker"}, 23</span>
                                <span className="top-artist-taylor-swift">
                                    Top Artist: Taylor Swift
                                </span>
                            </div>
                            <img className="photo-blurred-24-px" src={photoBlurred24Px} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-container-3-home">
                <span className="privacy-and-agreemen">Swipe Left</span>
                <span className="privacy-and-agreemen-1">Swipe Right</span>
            </div>
            <span className="your-perfect-potential-matches-h">
                Your perfect potential matches, hand-picked from your music history.
            </span>
            <img className="nav-bar" src={navBar} />
        </div>
    );
}

