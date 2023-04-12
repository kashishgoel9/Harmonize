import * as React from "react";
import "../css/passions.css";
import btnBack from "./assets/btnBack.svg";
const Passions = () => {
  return (
    <div className="passions">
      <img className="btn-back" src={btnBack} />
      <span className="your-sexual-orientations">
        Your sexual orientations?
      </span>
      <div className="flex-container">
        <button className="num-4">
          <div className="container-5">
            <span className="straight">Straight</span>
          </div>
        </button>
        <button className="num">
          <div className="container-1">
            <span className="gay">Gay</span>
          </div>
        </button>
      </div>
      <div className="flex-container-1">
        <button className="num-5">
          <div className="container-6">
            <span className="lesbian">Lesbian</span>
          </div>
        </button>
        <button className="num-1">
          <div className="container-2">
            <span className="bisexual">Bisexual</span>
          </div>
        </button>
      </div>
      <div className="flex-container-2">
        <button className="num-6">
          <div className="container-7">
            <span className="asexual">Asexual</span>
          </div>
        </button>
        <button className="num-2">
          <div className="container-3">
            <span className="demisexual">Demisexual</span>
          </div>
        </button>
      </div>
      <div className="flex-container-3">
        <button className="num-7">
          <div className="container-8">
            <span className="pansexual">Pansexual</span>
          </div>
        </button>
        <button className="num-3">
          <div className="container-4">
            <span className="queer">Queer</span>
          </div>
        </button>
      </div>
      <button className="num-8">
        <div className="container-9">
          <span className="questioning">Questioning</span>
        </div>
      </button>
      <button className="btn-continue">
        <div className="container">
          <span className="continue">Continue</span>
        </div>
      </button>
    </div>
  );
};
export default Passions;