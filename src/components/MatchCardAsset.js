/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import "../css/matches.css";
import bottomContainer from "../assets/bottomContainer.svg";
import { getProfiles } from "../helpers/api_gateway_helper";
import Spinner from "react-bootstrap/Spinner";
import { UNASSIGNED_PROFILE_PICTURE } from "../constants/app_constants";
import { useNavigate } from "react-router-dom";

function MatchCardAsset({ matched_users }) {
    let navigate = useNavigate();
    const [matched_users_data, setMatchedUsersData] = React.useState(null);


    async function getProfilesHandler(user_ids) {

        // take above out.
        const response = await getProfiles(user_ids);
        if (!response || response.error) {
            console.log("Error during fetching profile MatchCardAsset")
        }
        else {
            console.log(response['users'])
            setMatchedUsersData(response['users'])
        }
    }

    React.useEffect(() => {
        getProfilesHandler(matched_users)
    }, []);

    return (
        <div className="matched_user_container">
            {matched_users_data != null ? (
                matched_users_data.map((matched_user, index) => {
                    return (
                        <div key={index} className="photo-matches" onClick={() => {
                            navigate('/profile_ex', { 'state': matched_user.id })
                        }} style={{ backgroundImage: `url(${matched_user.image_url !== '' ? matched_user.image_url : UNASSIGNED_PROFILE_PICTURE})` }}>
                            <div className="bottom_container_matches">
                                <span className="leilani-19">{matched_user.first_name} {matched_user.last_name}</span>
                            </div>
                        </div>
                    );
                })
            ) : <div style={{
                alignContent: 'center',
                display: 'flex',
                justifyContent: 'center',
                height: '400px',
                alignItems: 'center',
            }}><Spinner style={{ color: 'black' }} /></div>}

        </div>
    );
};
export default MatchCardAsset;

