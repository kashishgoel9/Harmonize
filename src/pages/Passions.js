import React, { useState, useEffect } from "react";
import "../css/passions.css";
import btnBack from "../assets/btnBack.svg";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { createUser } from '../helpers/api_gateway_helper'

const Passions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectStraight, setSelectStraight] = useState(false);
  const [selectGay, setSelectGay] = useState(false);
  const [selectLesbian, setSelectLesbian] = useState(false);
  const [selectBisexual, setSelectBisexual] = useState(false);
  const [selectAsexual, setSelectAsexual] = useState(false);
  const [selectDemisexual, setSelectDemisexual] = useState(false);
  const [selectPansexual, setSelectPansexual] = useState(false);
  const [selectQueer, setSelectQueer] = useState(false);

  const propsData = {
    btnPassion: {
      size: "lg",
      disabled: false,
      active: true,
      children: "Continue",
    },
  };

  let currentState = location.state;
  let sexual_orientations = [];


  useEffect(() => {
    console.log(location.state)
  })

  return (
    <div className="passions">
      <img className="btn-back-passions" src={btnBack} />
      <span className="your-sexual-orientations">
        Your sexual orientations?
      </span>
      <div className="orientations">
        <button onClick={() => {
          setSelectStraight(!selectStraight)
        }} className={selectStraight ? "orientation_chip chip_selected" : "orientation_chip chip_not_selected"}>
          <div className="">
            <span className="straight">Straight</span>
          </div>
        </button>
        <button onClick={() => {
          setSelectGay(!selectGay)
        }} className={selectGay ? "orientation_chip chip_selected" : "orientation_chip chip_not_selected"}>
          <div className="">
            <span className="gay">Gay</span>
          </div>
        </button>
        <br />
        <button onClick={() => {
          setSelectLesbian(!selectLesbian)
        }} className={selectLesbian ? "orientation_chip chip_selected" : "orientation_chip chip_not_selected"}>
          <div className="">
            <span className="lesbian">Lesbian</span>
          </div>
        </button>
        <button onClick={() => {
          setSelectBisexual(!selectBisexual)
        }} className={selectBisexual ? "orientation_chip chip_selected" : "orientation_chip chip_not_selected"}>
          <div className="">
            <span className="bisexual">Bisexual</span>
          </div>
        </button>
        <br />
        <button onClick={() => {
          setSelectAsexual(!selectAsexual)
        }} className={selectAsexual ? "orientation_chip chip_selected" : "orientation_chip chip_not_selected"}>
          <div className="">
            <span className="asexual">Asexual</span>
          </div>
        </button>
        <button onClick={() => {
          setSelectDemisexual(!selectDemisexual)
        }} className={selectDemisexual ? "orientation_chip chip_selected" : "orientation_chip chip_not_selected"}>
          <div className="">
            <span className="demisexual">Demisexual</span>
          </div>
        </button>
        <br />
        <button onClick={() => {
          setSelectPansexual(!selectPansexual)
        }} className={selectPansexual ? "orientation_chip chip_selected" : "orientation_chip chip_not_selected"}>
          <div className="">
            <span className="pansexual">Pansexual</span>
          </div>
        </button>
        <button onClick={() => {
          setSelectQueer(!selectQueer)
        }} className={selectQueer ? "orientation_chip chip_selected" : "orientation_chip chip_not_selected"}>
          <div className="">
            <span className="queer">Queer</span>
          </div>
        </button>
      </div>
      <Button
        className="btn-continue"
        {...propsData.btnPassion}
        onClick={async () => {
          if (selectStraight)
            sexual_orientations.push('straight')
          if (selectGay)
            sexual_orientations.push('gay')
          if (selectLesbian)
            sexual_orientations.push('straight')
          if (selectBisexual)
            sexual_orientations.push('bisexual')
          if (selectAsexual)
            sexual_orientations.push('asexual')
          if (selectDemisexual)
            sexual_orientations.push('demisexual')
          if (selectPansexual)
            sexual_orientations.push('pansexual')
          if (selectQueer)
            sexual_orientations.push('queer')

          // console.log(sexual_orientations)

          if (sexual_orientations.length > 0) {
            currentState.state.orientation = sexual_orientations;
            // console.log(currentState)
            await createUser(currentState.user_id, JSON.stringify(currentState.state)).then((res) => {
              navigate('/home', { state: currentState, replace: true })

            })
            // navigate('/home', { state: currentState, replace: true })
          }

        }}
      />
    </div>
  );
};
export default Passions;