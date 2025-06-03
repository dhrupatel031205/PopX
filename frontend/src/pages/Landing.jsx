import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css"; // import the CSS file

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        <div className="landing-text-block">
          <p className="landing-heading">Welcome to PopX</p>
          <p className="landing-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <button
          className="landing-btn-primary"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="landing-btn-secondary"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
