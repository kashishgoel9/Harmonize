import * as React from "react";
import "./App.css";
import photo from "./assets/photo.svg";
import onboardingDots from "./assets/onboardingDots.svg";
import homeIndicator from "./assets/homeIndicator.svg";
import Button from "react-bootstrap/Button";
const App = () => {
  const propsData = {
    btnCreateAccount: {
      size: "lg",
      disabled: false,
      active: true,
      variant: "outline-dark",
      children: "Create an account",
    },
  };
  return (
    <div className="onboarding">
      <img className="photo" src={photo} />
      <span className="algorithm">Algorithm</span>
      <span className="finding-love-through-music-one-s">
        Finding love through music, one Spotify playlist at a time.
      </span>
      <img className="onboarding-dots" src={onboardingDots} />
      <Button
        className="btn-create-account-instance"
        {...propsData.btnCreateAccount}
      />
      <span className="privacy-and-agreemen">
        Already have an account? Sign In
      </span>
      <img className="home-indicator" src={homeIndicator} />
    </div>
  );
};
export default App;
