import * as React from "react";
import "../css/cardman.css";
import checkSmall from "../assets/checkSmall.svg";
const Cardman = (props) => {
  return (
    <div className={`cardman ${props.className || ""}`}>
      <div className="container">
        <span className="man">{props.man || "Man"}</span>
        <img className="check-small" src={props.checkSmall || checkSmall} />
      </div>
    </div>
  );
};
export default Cardman;