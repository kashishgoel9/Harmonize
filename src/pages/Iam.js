import * as React from "react";
import "../css/iam.css";
import btnBack from "../assets/btnBack.svg";
import checkSmall from "../assets/checkSmall.svg";
import right from "../assets/right.svg";
import checkSmall1 from "../assets/checkSmall1.svg";
import Cardman from "../components/Cardman";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";

const Iam = () => {
  const navigate = useNavigate();
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
      man: "Choose another",
      checkSmall: right,
    },
  };


  return (
    <div className="i-am">
      <img className="btn-back" src={btnBack} />
      <span className="i-am-a">I am a</span>
      <Cardman className="woman-instance" {...propsData.woman} />
      <Cardman className="man-instance-1" {...propsData.man} />
      <Cardman className="woman-1-instance" {...propsData.woman1} />
      <Button
                className="btn-continue"
                {...propsData.btnCreateGender}
                onClick={()=>{
                    navigate('/Passions')
                }}
            />
    </div>
  );
};
export default Iam;