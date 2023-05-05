/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useReducer, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import "../css/profile.css";
import Top5Chip from '../components/Top5Chip'

import doneAll from "../assets/doneAll-profile.svg";
import btnBack from "../assets/btnBack-profile.svg";
import doneAll1 from "../assets/doneAll1-profile.svg";
import doneAll2 from "../assets/doneAll2-profile.svg";
import btnSend from "../assets/btnSend-profile.svg";
import photoMain from "../assets/photoMain-profile.svg";
import localTwo from "../assets/localTwo-profile.svg";
import Button from "@mui/material/Button";

export default function Profile({ }) {
    const navigate = useNavigate();
    const propsData = {
        num9: {
            color: "success",
            variant: "outlined",
            disableElevation: true,
            size: "large",
            children: "Taylor Swift",
            endIcon: <img src={doneAll1} />,
        },
        num7: {
            color: "inherit",
            variant: "outlined",
            disableElevation: true,
            size: "large",
            children: "Eminem",
        },
        num8: {
            variant: "outlined",
            color: "warning",
            disableElevation: true,
            size: "large",
            children: "Selena Gomez",
            endIcon: <img src={doneAll2} />,
        },
        num6: {
            color: "warning",
            variant: "outlined",
            children: "Maisie Peters",
            endIcon: <img src={doneAll} />,
        },
        num4: {
            size: "large",
            color: "success",
            variant: "outlined",
            disableElevation: true,
            children: "Body Better",
            endIcon: <img src={doneAll1} />,
        },
        container3: {
            color: "error",
            children: "Button",
            size: "small",
        },
        num1: {
            disableElevation: true,
            color: "warning",
            size: "large",
            variant: "outlined",
            children: "champagne problems",
            endIcon: <img src={doneAll1} />,
        },
        num: {
            size: "large",
            color: "error",
            variant: "outlined",
            disableElevation: true,
            children: "Burned",
            endIcon: <img src={doneAll} />,
        },
        num3: {
            variant: "outlined",
            color: "warning",
            disableElevation: true,
            size: "large",
            children: "Back to you",
            endIcon: <img src={doneAll2} />,
        },
    };

    useEffect(() => {
    }, []);

    return (
        <div className="profile">
            <img className="btn-back-profile" src={btnBack} />
            <img className="photo-main-profile" src={photoMain} />
            <div className="container-profile">
                <div className="flex-container-profile1">
                    <div className="flex-container-1-profile">
                        <span className="jessica-parker-23-profile">Jessica Parker, 23</span>
                        <span className="top-artist-taylor-swift">
                            Top Artist: Taylor Swift
                        </span>
                    </div>
                    <img className="btn-send-profile" src={btnSend} />
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
                <span className="spotify">Spotify</span>
                <span className="jess-park">@jess_park</span>
                <span className="top-5-artists">Top 5 Artists</span>
                <div className="flex-container-3-profile">
                    <Top5Chip
                        name={"Taylor Swift"}
                    />
                    <Top5Chip
                        alt={true}
                        name={"Grace Vanderwall"}
                    />
                    <Top5Chip
                        name={"Eminem"}
                    />
                    <Top5Chip
                        alt={true}
                        name={"Selena Gomez"}
                    />
                    <Top5Chip
                        name={"Maisie Peters"}
                    />
                </div>

                <span className="top-5-songs">Top 5 Songs</span>
                <div className="flex-container-3-profile">
                    <Top5Chip
                        name={"Body Better"}
                    />
                    <Top5Chip
                        alt={true}
                        name={"On my Mind"}
                    />
                    <Top5Chip
                        name={"champagne problems"}
                    />
                    <Top5Chip
                        alt={true}
                        name={"Burned"}
                    />
                    <Top5Chip
                        name={"Back to You"}
                    />
                </div>

            </div>
        </div>
    );

}