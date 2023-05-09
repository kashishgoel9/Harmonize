/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/homepage.css";
import Spinner from "react-bootstrap/Spinner";
import btnFilter from "../assets/btnFilter.svg";
import btnBack from "../assets/btnBack.svg";
import navBar from "../assets/navBar.svg";
import Button from "react-bootstrap/Button";
import { UNASSIGNED_PROFILE_PICTURE } from "../constants/app_constants";

import { getCandidates, getProfile, decideMatch } from '../helpers/api_gateway_helper'



export default function Homepage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentCandidate, setCurrentCandidate] = useState(null);

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
            if (response.candidate_found === true) {
                // setCurrentCandidate(response)
                getProfilesHandler(response.candidate_id)
            }
            else if (response.candidate_found === false) {
                setCurrentCandidate(0)
            }
        }
    }

    async function getProfilesHandler(user_id) {

        // take above out.
        const response = await getProfile(user_id);
        if (!response || response.error) {
            console.log("Error during fetching profile")
        }
        else {
            console.log(response['user'])
            setCurrentCandidate(response['user'])
        }
    }

    async function decideMatchHandler(user, candidate_id, liked) {

        // take above out.
        const response = await decideMatch(user.user_id, candidate_id, liked);
        if (!response || response.error) {
            console.log("Error during deciding match: homepage")
            setCurrentCandidate(null)
            getCandidatesHandler()
        }
        else {
            console.log(response)
            if (!response.isMatch) {
                setCurrentCandidate(null)
                getCandidatesHandler()
            }
            else if (response.isMatch) {
                setCurrentCandidate(null)
                getCandidatesHandler()
                navigate('/matched', {
                    state: {
                        user: user,
                        candidate_id: candidate_id
                    }
                })
            }
            // setCurrentCandidate(response['user'])
        }
    }

    useEffect(() => {
        getCandidatesHandler()
    }, [])

    return (
        <div className="main">
            <div className="flex-container-home">
                <img className="btn-back" src={btnBack} onClick={() => {
                    const url = 'https://accounts.spotify.com/en/logout'
                    // const url = 'https://www.spotify.com/logout/'
                    const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')
                    setTimeout(() => spotifyLogoutWindow.close(), 200)
                    console.log("Done")
                    navigate('/signup',)
                }} />
                <div className="flex-container-1-home"
                    onClick={() => {
                        console.log(currentCandidate)
                        console.log(currentCandidate.image_url)
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
            {currentCandidate != null ? <div className="flex-container-2-home">
                {/* <div className="trick"></div> */}
                <img className="photo-main" src={currentCandidate.image_url !== "" ? currentCandidate.image_url : UNASSIGNED_PROFILE_PICTURE} />
                <div className="cat-absolute-container-1">

                    {currentCandidate === 0 ?
                        <span className="no_candidates">
                            <span className="jessica-parker-23">
                                No candidates found.
                            </span>
                            <span className="top-artist-taylor-swift">
                                Please check back later.
                            </span>
                        </span>
                        : <span className="no_candidates">
                            <span className="jessica-parker-23">{currentCandidate != null ? currentCandidate.first_name + " " + currentCandidate.last_name : "Loading..."}</span>
                            <span className="top-artist-taylor-swift">
                                Top Artist: {currentCandidate.top_artists ? currentCandidate.top_artists[0]['name'] : ""}
                            </span>
                        </span>}
                </div>
                {/* <div className="cat-absolute-container">
                    <div className="bottom-container">
                        <div className="cat-absolute-container-1">
                            <span className="jessica-parker-23">{currentCandidate ? currentCandidate.candidate_id : "Loading..."}</span>
                            <span className="top-artist-taylor-swift">
                                Top Artist: Taylor Swift
                            </span>
                        </div>
                    </div>
                </div> */}
            </div> : <div className="col spinner_col">
                <div className="row"><Spinner /></div>
                <div className="row">Loading your candidates!</div>

            </div>}
            {currentCandidate != null && <div className="flex-container-3-home">
                <Button className="privacy-and-agreemen-home" onClick={() => {
                    decideMatchHandler(JSON.parse(localStorage.getItem('state')), currentCandidate.id, false)
                }}>Swipe Left</Button>
                <Button className="privacy-and-agreemen-1-home" onClick={() => {
                    decideMatchHandler(JSON.parse(localStorage.getItem('state')), currentCandidate.id, true)
                }}>Swipe Right</Button>
            </div>}
            <span className="your-perfect-potential-matches-h">
                Your perfect potential matches, hand-picked from your music history.
            </span>
            <img className="nav-bar" src={navBar} />
        </div>
    );
}

