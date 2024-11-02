// src/components/LoginPage.js
import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here, then navigate
    navigate("/account-setup");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1 className="logo">EASY APTL</h1>
        <div className="rocket-image">🚀</div>
        <div className="supersonic-banner">
          <p>
            Check out Supersonic — all seen in exam questions filtered by date
            and examining authority
          </p>
        </div>
      </div>

      <div className="login-right">
        <h2>Please Sign In</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="login-input" />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </form>
        <div className="alternate-sign-in">
          <hr /> or <hr />
        </div>
        <div className="social-buttons">
          <button className="social-button facebook">
            Sign In with Facebook
          </button>
          <button className="social-button google">Sign In with Google</button>
          <button className="social-button apple">Sign In with Apple</button>
        </div>
        <p>
          Don't have an account yet?{" "}
          <a href="#" className="sign-up-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
