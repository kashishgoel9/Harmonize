/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useReducer, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/profile.css";
import Top5Chip from '../components/Top5Chip'

import { getProfile } from "../helpers/api_gateway_helper";
import { truncate } from "../helpers/app_helper";
import { UNASSIGNED_PROFILE_PICTURE } from '../constants/app_constants'

import doneAll from "../assets/doneAll-profile.svg";
import btnBack from "../assets/btnBack-profile.svg";
import doneAll1 from "../assets/doneAll1-profile.svg";
import doneAll2 from "../assets/doneAll2-profile.svg";
import btnSend from "../assets/btnSend-profile.svg";
import photoMain from "../assets/photoMain-profile.svg";
import localTwo from "../assets/localTwo-profile.svg";
import Button from "@mui/material/Button";
import { refreshAccessToken } from '../helpers/auth_helper'
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export default function ProfileEx({ }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(null)
    const [spotifyUser, setSpotifyUser] = useState(null)

    async function getProfilesHandler() {

        // take above out.
        console.log(location.state)
        const response = await getProfile(location.state);
        if (!response || response.error) {
            console.log("Error during fetching profile")
        }
        else {
            console.log(response['user'])
            refreshAccessToken(localStorage.getItem('refresh_token')).then((data) => {
                spotifyApi.getUser(location.state)
                    .then((response) => {
                        console.log(response);
                        setSpotifyUser(response)
                    })
                    .catch((error) => {
                        console.error(error);
                    });

            }).catch((e) => {
                console.log(e)
                console.log("failed during refresh :(")
            })
            setCurrentUser(response['user'])
        }
    }

    useEffect(() => {
        getProfilesHandler()
    }, []);

    return (
        currentUser != null ? (<div className="profile">
            <img className="btn-back-profile" src={btnBack} onClick={()=>{
                navigate(-1)
            }}/>


            <img className="photo-main-profile" src={currentUser.image_url !== "" ? currentUser.image_url : UNASSIGNED_PROFILE_PICTURE} />
            <div className="container-profile">
                <div className="flex-container-profile1">
                    <div className="flex-container-1-profile">
                        <span className="jessica-parker-23-profile">{currentUser.first_name} {currentUser.last_name}</span>
                        <span className="top-artist-taylor-swift">
                            Top Artist: {currentUser.top_artists[0]['name']}
                        </span>
                    </div>
                    <img className="btn-send-profile" src={btnSend} onClick={() => {
                        if (spotifyUser != null)
                            window.location.href = spotifyUser.external_urls.spotify
                    }} />
                </div>
                <div className="flex-container-2-profile">
                    <span className="location-profile">Location</span>
                    <div className="container-10-profile">
                        <img className="local-two" src={localTwo} />
                        <span className="num-1-mi">1 mi</span>
                    </div>
                </div>
                <span className="new-york-ny-united-states">
                    New York, NY, United States
                </span>
                <span className="spotify"><a className="href-color" href={spotifyUser != null ? spotifyUser.external_urls.spotify : ""}>@Spotify</a></span>
                {/* <span className="jess-park">@jess_park</span> */}
                <span className="top-5-artists">Top 5 Artists</span>
                <div className="flex-container-3-profile">
                    {currentUser.top_artists.map((artist, index) => {
                        if (index < 5)
                            return (
                                <Top5Chip
                                    key={artist.id}
                                    alt={true}
                                    name={artist['name']}
                                />
                            );
                        {/* return <div></div>; */}
                    })}
                </div>

                <span className="top-5-songs">Top 5 Songs</span>
                <div className="flex-container-3-profile">
                    {currentUser.top_tracks.map((track, index) => {
                        if (index < 5)
                            return (
                                <Top5Chip
                                    key={track.id}
                                    alt={true}
                                    name={truncate(track['name'], 30)}
                                />
                            );
                        {/* return <div></div>; */}
                    })}
                </div>
                <div className="end_container"></div>

            </div>
        </div>) : <div className="row loading_row" style={{ width: '100% ' }}>
            <Spinner className="loading_css" />
        </div>
    );

}