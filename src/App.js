// import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import Auth from "./pages/Auth";
import Iam from "./pages/Iam";
import ProfileDetails from "./pages/ProfileDetails";
import Passions from "./pages/Passions";

const App = () => {
  return (
    <Router>
      {/* <Header setUser={setUser} cart={cart} user={user} /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/callback" element={<Auth />} />
        <Route path="/profiledetails" element={<ProfileDetails />} />
        <Route path="/iam" element={<Iam />} />
        <Route path="/passions" element={<Passions />} />
        {/* <Route
          path="/:establishmentUniqueName/check"
          element={
            <Check
              cart={cart}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
            />
          }></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
