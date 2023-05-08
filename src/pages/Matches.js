import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import "../css/matches.css";
import Button from "react-bootstrap/Button";

// import homeIndicator from "../assets/homeIndicator-matches.svg";
import like2 from "../assets/like2-matches.svg";
import btnFilter from "../assets/btnFilter-matches.svg";
import MatchCardAsset from '../components/MatchCardAsset';

import { getMatches } from "../helpers/api_gateway_helper";

export default function Matches({ }) {
    const navigate = useNavigate();
    const [user_matches, setUserMatches] = useState(null)

    let matched_users = [
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed",
            "image_url": "https://images.unsplash.com/photo-1623741519006-a9b6f27ae909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            'dob': '24'
        },
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed1",
            "image_url": "https://images.unsplash.com/photo-1623741519006-a9b6f27ae909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            'dob': '24'
        },
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed2",
            "image_url": "https://images.unsplash.com/photo-1623741519006-a9b6f27ae909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            'dob': '24'
        },
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed3",
            "image_url": "https://images.unsplash.com/photo-1623741519006-a9b6f27ae909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            'dob': '24'
        },
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed4",
            "image_url": "https://images.unsplash.com/photo-1623741519006-a9b6f27ae909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            'dob': '24'
        },
    ]

    async function getMatchesHandler() {

        // take above out.
        const response = await getMatches(JSON.parse(localStorage.getItem('state'))['user_id']);
        if (!response || response.error) {
            console.log("Error during fetching matches")
        }
        else {
            console.log(response['matches'])
            setUserMatches(response['matches'])
        }


        // console.log(res.json())
        // if (res.candidate_found === 'true')
        //     setCurrentCandidate(res.candidate_id)
    }


    useEffect(() => {
        getMatchesHandler()
    }, []);

    return (
        <div className="matches-matches" style={{ marginBottom: '400px' }}>
            <div className="flex-container-matches">
                <span className="matches-1">Matches</span>
                <img className="btn-filter-matches" src={btnFilter} />
            </div>
            <span className="this-is-a-list-of-people-who-hav">
                This is a list of people who have liked you and your matches.
            </span>
            {/* MatchCardAsset */}
            {user_matches == null && <div className="matched_user_container" style={{ 'alignContent': 'center' }}>
                <Spinner style={{ color: 'black' }} />
            </div>}
            {user_matches != null && <div className="matched_user_container">
                <MatchCardAsset
                    matched_users={user_matches}
                />
            </div>}

            <div style={{ paddingBottom: '20px', color: 'white', display: 'block' }}>dnod</div>

        </div>
    );
}