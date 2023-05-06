/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import "../css/matches.css";
import bottomContainer from "../assets/bottomContainer.svg";

function MatchCardAsset({ matched_users }) {
    return (
        <div className="matched_user_container">
            {
                matched_users.map((matched_user, index) => {
                    const {
                        user_id,
                        first_name,
                        last_name,
                        dob,
                        image_url
                    } = matched_user;
                    return (
                        <div key={user_id} className="photo-matches" onClick={() => {
                            console.log(user_id)
                        }} style={{ backgroundImage: `url(${image_url})` }}>
                            <span className="leilani-19">{first_name} {last_name}, {dob}</span>
                            <img className="bottom-container-matches" src={bottomContainer} />
                        </div>
                    );
                })
            }
            
        </div>
    );
};
export default MatchCardAsset;

