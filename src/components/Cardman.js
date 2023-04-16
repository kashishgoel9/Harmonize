/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import "../css/cardman.css";
import checkSmall from "../assets/checkSmall.svg";
import checkSmall1 from "../assets/checkSmall1.svg";
import right from "../assets/right.svg";
function Cardman({ className, props, isSelected, onClick }) {
  return (
    <div onClick={onClick} className={`cardman ${className || ""}`}>
      <div className={isSelected ? "container-iam selected" : "container-iam not_selected"}>
        <span className="man">{props.man || "Man"}</span>
        <img className={isSelected ? "check-small" : "check-small"} src={props.man === "Choose another" ? right : (isSelected ? checkSmall : checkSmall1)} />
      </div>
    </div>
  );
};
export default Cardman;