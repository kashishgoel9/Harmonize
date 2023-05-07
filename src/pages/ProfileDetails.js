/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "../css/profiledetails.css";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import usUnitedStates from "../assets/usUnitedStates.svg";
import iconbackwhite from "../assets/iconbackwhite.svg";
import rectangle from "../assets/rectangle.svg";
import face from "../assets/face.svg";
import iconCalendar from "../assets/iconCalendar.svg";
import Button from "react-bootstrap/Button";
import DatePicker from 'react-date-picker'
import { useNavigate, useParams } from "react-router-dom";
import { refreshAccessToken } from '../helpers/auth_helper'
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const ProfileDetails = () => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


  useEffect(() => {
    refreshAccessToken(localStorage.getItem('refresh_token')).then((data) => {
      spotifyApi.getMe()
        .then((response) => {
          if (response.images) {
            try {
              setImageUrl(response.images[0]['url'])
            }
            catch (e) {
              setImageUrl("")
            }
          }
          setUserId(response.id)
          setEmail(response.email)
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });

      spotifyApi.getMyTopArtists(
        {
          "time_range": "long_term",
          "limit": 50,
          "offset": 0
        }
      )
        .then((response) => {
          setTopArtists(response.items)
        })
        .catch((error) => {
          console.error(error);
        });
      spotifyApi.getMyTopTracks(
        {
          "time_range": "long_term",
          "limit": 50,
          "offset": 0
        }
      )
        .then((response) => {
          setTopTracks(response.items)
        })
        .catch((error) => {
          console.error(error);
        });
    }).catch((e) => {
      console.log(e)
      console.log("failed during refresh :(")
    })
  }, []);

  function onChangeFirstNameText(value) {
    setFirstName(value.target.value)
  }

  function onChangeLastNameText(value) {
    setLastName(value.target.value)
  }

  function onChangePhoneText(value) {
    setPhoneNumber("+1" + value.target.value)
  }

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
      <img className="face" src={imageUrl ? imageUrl : face} />
      <input className="input-first-name-1" placeholder="First name" type="text" onChange={onChangeFirstNameText} />
      <input className="input-first-name" placeholder="Last name" type="text" onChange={onChangeLastNameText} />
      <div className="flex-container-profile">
        {/* <span className="text-here-2">Phone number</span> */}
        <div className="container-4">
          <img className="us-united-states" src={usUnitedStates} />
          <span className="united-states-1">(+1)</span>
          <img className="iconbackwhite" src={iconbackwhite} />
          <img className="rectangle" src={rectangle} />
          <input className="united-states-1-1" type="number" name="phone-input" id="phone-input" placeholder="123 123 1234" onChange={onChangePhoneText} />
        </div>
      </div>
      <div className="input-calendar" onClick={() => {
        setIsOpen(true)
      }}>
        <div className="container-1-profile">
          <img className="icon-calendar" src={iconCalendar} />
          <div><span className="num-22091997" style={{ display: isOpen ? 'none' : 'block' }}>Choose birthday date</span>
            <label style={{ display: !isOpen ? 'none' : 'block' }}>
              <DatePicker onChange={onChange} value={value} isOpen={isOpen} />
            </label>
          </div>
        </div>
      </div>
      <Button
        className="btn-confirm"
        {...propsData.btnCreateProfile}
        onClick={() => {
          if (firstName && lastName && phoneNumber) {
            navigate('/iam', { state: { user_id: userId, state: { email: email, top_tracks: topTracks, top_artists: topArtists, image_url: imageUrl, first_name: firstName, last_name: lastName, phone: phoneNumber, dob: value.getMonth() + 1 + "/" + value.getDate() + "/" + value.getFullYear() } } })
            // console.log(firstName, lastName, phoneNumber, value.getMonth()+"/"+value.getDate()+"/"+value.getFullYear())
          }
        }}
      />
    </div>
  );
};
export default ProfileDetails;
// 8vdbh1l832bir71plxiziiyed

