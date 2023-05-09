/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "../css/iam.css";
import btnBack from "../assets/btnBack.svg";
import checkSmall from "../assets/checkSmall.svg";
import right from "../assets/right.svg";
import checkSmall1 from "../assets/checkSmall1.svg";
import Cardman from "../components/Cardman";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Iam = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // location.state.name
  const propsData = {
    btnCreateGender: {
      size: "lg",
      disabled: false,
      active: true,
      children: "Continue",
    },
    woman: {
      man: "Woman",
      checkSmall: checkSmall1,
    },
    man: {
      checkSmall: checkSmall,
      man: "Man",
    },
    woman1: {
      man: "Other",
      checkSmall: checkSmall1,
    },
  };


  const [currentItem, setCurrentItem] = useState(0);
  let currentState = location.state;

  useEffect(() => {
    console.log(location.state)
    currentState.state.gender = "F";
    if (currentItem === 0)
      currentState.state.gender = "F";
    else if (currentItem === 1)
      currentState.state.gender = "M";
    else
      currentState.state.gender = "O";
  });


  return (
    <div className="i-am">
      <img className="btn-back-iam" src={btnBack} onClick={()=>{navigate(-1)}}/>
      <span className="i-am-a">I am a</span>
      <Cardman className="woman-instance"
        onClick={() => {
          setCurrentItem(0);
          // currentState.state.gender = "F";
        }}
        props={propsData.woman}
        isSelected={currentItem === 0 ? true : false}
      />
      <Cardman className={"man-instance-1"}
        onClick={() => {
          setCurrentItem(1)
          // currentState.state.gender = "M";
        }}
        props={propsData.man}
        isSelected={currentItem === 1 ? true : false} />
      <Cardman
        onClick={() => {
          setCurrentItem(2)
          // currentState.state.gender = "O";
        }}
        className="woman-1-instance"
        props={propsData.woman1}
        isSelected={currentItem === 2 ? true : false} />
      <Button
        className="btn-continue"
        {...propsData.btnCreateGender}
        onClick={() => {
          navigate('/passions', { state: currentState })
        }}
      />
    </div>
  );
};
export default Iam;