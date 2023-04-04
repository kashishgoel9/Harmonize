import React, { useEffect, useState } from "react";
import "../css/homepage.css";

import paginationV from "../assets/paginationV.svg";
import btnFilter from "../assets/btnFilter.svg";
import photoBg from "../assets/photoBg.svg";
import photoBlurred24Px from "../assets/photoBlurred24Px.svg";
import photoMain from "../assets/photoMain.svg";
import homeIndicator from "../assets/homeIndicator2.svg";
import btnBack from "../assets/btnBack.svg";
import navBar from "../assets/navBar.svg";
import Button from "react-bootstrap/Button";

export default function Homepage({ }) {
    // const [tax_rate, setTaxRate] = useState(0.0);
    const propsData = {
        location: {
            variant: "light",
            active: true,
            children: "1 mi",
        },
    };

    useEffect(() => {
    }, []);

    return (
        <div className="main">
            <div className="flex-container">
                <img className="btn-back" src={btnBack} />
                <div className="flex-container-1">
                    <span className="harmonize">Harmonize</span>
                    <span className="new-york-ny">New York, NY</span>
                </div>
                <img className="btn-filter" src={btnFilter} />
            </div>
            <div className="flex-container-2">
                <img className="photo-bg" src={photoBg} />
                <img className="photo-main" src={photoMain} />
                <div className="cat-absolute-container">
                    <Button className="location-instance" {...propsData.location} />
                    <img className="pagination-v" src={paginationV} />
                    <div className="bottom-container">
                        <div className="mask-photo">
                            <div className="cat-absolute-container-1">
                                <span className="jessica-parker-23">Jessica Parker, 23</span>
                                <span className="top-artist-taylor-swift">
                                    Top Artist: Taylor Swift
                                </span>
                            </div>
                            <img className="photo-blurred-24-px" src={photoBlurred24Px} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-container-3">
                <span className="privacy-and-agreemen">Swipe Left</span>
                <span className="privacy-and-agreemen-1">Swipe Right</span>
            </div>
            <span className="your-perfect-potential-matches-h">
                Your perfect potential matches, hand-picked from your music history.
            </span>
            <img className="nav-bar" src={navBar} />
            <img className="home-indicator" src={homeIndicator} />
        </div>
    );
}

