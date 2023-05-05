import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import "../css/matches.css";
import Button from "react-bootstrap/Button";

// import homeIndicator from "../assets/homeIndicator-matches.svg";
import like2 from "../assets/like2-matches.svg";
import btnFilter from "../assets/btnFilter-matches.svg";
import MatchCardAsset from '../components/MatchCardAsset';

export default function Matches({ }) {
    const navigate = useNavigate();

    let matched_users = [
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed",
            "image_url": "https://i.scdn.co/image/ab6775700000ee85e879a682a440357fe599190c",
            'dob': '24'
        },
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed1",
            "image_url": "https://i.scdn.co/image/ab6775700000ee85e879a682a440357fe599190c",
            'dob': '24'
        },
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed2",
            "image_url": "https://i.scdn.co/image/ab6775700000ee85e879a682a440357fe599190c",
            'dob': '24'
        },
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed3",
            "image_url": "https://i.scdn.co/image/ab6775700000ee85e879a682a440357fe599190c",
            'dob': '24'
        },
        {
            "first_name": "Aryan",
            "last_name": "Jalali",
            "user_id": "8vdbh1l832bir71plxiziiyed4",
            "image_url": "https://i.scdn.co/image/ab6775700000ee85e879a682a440357fe599190c",
            'dob': '24'
        },
    ]


    useEffect(() => {
    }, []);

    return (
        <div className="matches-matches">
            <div className="flex-container-matches">
                <span className="matches-1">Matches</span>
                <img className="btn-filter-matches" src={btnFilter} />
            </div>
            <span className="this-is-a-list-of-people-who-hav">
                This is a list of people who have liked you and your matches.
            </span>
            {/* MatchCardAsset */}
            <div className="matched_user_container">
                <MatchCardAsset
                    matched_users={matched_users}
                />
            </div>
        </div>
    );
}