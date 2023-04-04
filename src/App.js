// import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      {/* <Header setUser={setUser} cart={cart} user={user} /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
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
