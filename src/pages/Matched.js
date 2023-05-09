import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/matched.css";
import Button from "react-bootstrap/Button";
import { UNASSIGNED_PROFILE_PICTURE } from "../constants/app_constants";
import { getProfile } from "../helpers/api_gateway_helper";

export default function Matched() {
    const navigate = useNavigate();
    const location = useLocation();
    const [candidateUser, setCandidateUser] = useState(null);
    const propsData = {
        btnContinue: {
            size: "lg",
            disabled: false,
            active: true,
            variant: "outline-dark",
            children: "Say hello",
        },
        btnContinue1: {
            variant: "outline-light",
            disabled: false,
            active: true,
            children: "Keep swiping",
        },
    };

    async function getProfilesHandler(candidate_id) {

        // take above out.
        const response = await getProfile(candidate_id);
        if (!response || response.error) {
            console.log("Error during fetching profile")
        }
        else {
            console.log(response['user'])
            setCandidateUser(response['user'])
        }
    }

    useEffect(() => {
        console.log(location.state)
        getProfilesHandler(location.state.candidate_id)
    }, []);

    return (
        candidateUser != null ? (<div className="match">
            <div className="photo-matched1" style={{ backgroundImage: `url(${location.state.user.state.image_url !== "" ? location.state.user.state.image_url : UNASSIGNED_PROFILE_PICTURE})` }}></div>
            <div className="photo-matched2" style={{ backgroundImage: `url(${candidateUser.image_url !== "" ? candidateUser.image_url : UNASSIGNED_PROFILE_PICTURE})` }}></div>

            {/* <span className="its-a-match-alfredo">It's a match, Aryan!</span> */}
            <span className="its-a-match-alfredo">It's a match, {location.state.user.state.first_name}!</span>
            <span className="start-a-conversation-now-with-ea">
                Start a conversation now with each other
            </span>
            <Button className="btn-continue-instance " onClick={() => { alert("Not supported yet.") }} {...propsData.btnContinue} />
            <Button className="btn-continue-1-instance" onClick={() => { navigate('/home') }} {...propsData.btnContinue1} />
        </div>) : (
            <div className="col" style={{
                height: '100vh',
                display: 'flex',
                placeContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                flexDirection: 'column'
            }}>
                <Spinner style={{ color: 'black' }} />
                <div>Loading your match!</div>
            </div >)
    );
}