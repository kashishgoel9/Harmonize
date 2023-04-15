import * as React from "react";
import "../css/profiledetails.css";
import usUnitedStates from "../assets/usUnitedStates.svg";
import iconbackwhite from "../assets/iconbackwhite.svg";
import rectangle from "../assets/rectangle.svg";
import face from "../assets/face.svg";
import iconCalendar from "../assets/iconCalendar.svg";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";

const ProfileDetails = () => {
  const navigate = useNavigate();
    const propsData = {
        btnCreateProfile: {
            size: "lg",
            disabled: false,
            active: true,
            children: "Confirm",
        },
    };

  return (
    <div className="profile-details">
      <span className="profile-details-1">Profile details</span>
      <img className="face" src={face} />
      <input className="input-first-name-1" placeholder="Alfredo" type="text" />
      <input className="input-first-name" placeholder="Ghost" type="text" />
      <div className="flex-container">
        <span className="text-here-2">Phone number</span>
        <div className="container-4">
          <img className="us-united-states" src={usUnitedStates} />
          <span className="united-states-1">(+1)</span>
          <img className="iconbackwhite" src={iconbackwhite} />
          <img className="rectangle" src={rectangle} />
          <span className="united-states-1-1">123 123 1234</span>
        </div>
      </div>
      <button className="input-calendar">
        <div className="container-1">
          <img className="icon-calendar" src={iconCalendar} />
          <span className="num-22091997">Choose birthday date</span>
        </div>
      </button>
      <Button
                className="btn-confirm"
                {...propsData.btnCreateProfile}
                onClick={()=>{
                    navigate('/iam')
                }}
            />
    </div>
  );
};
export default ProfileDetails;