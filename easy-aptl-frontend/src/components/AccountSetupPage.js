// src/components/AccountSetupPage.js
import React from "react";
import "./AccountSetupPage.css";

const AccountSetupPage = () => {
  return (
    <div className="account-setup-container">
      <header className="header">
        <h1>Account</h1>
        <button className="sign-out-button">Sign Out</button>
      </header>

      <div className="account-banner">
        <div className="license-dropdown">
          <label>LICENSE</label>
          <select>
            <option>ATPL(A)</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="authority-dropdown">
          <label>EXAMINING AUTHORITY</label>
          <select>
            <option>All examining authorities</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>

      <div className="profile-info">
        <h2>PROFILE INFORMATION</h2>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" value="Chanuka" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" value="Abeysinghe" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value="chawwa31@gmail.com" readOnly />
            <small>Authorised via Google</small>
          </div>
        </form>
      </div>

      <p className="agreement-text">
        By proceeding to Airhead I agree to receive informational emails. I can
        unsubscribe anytime on the Account page.
      </p>

      <button className="save-continue-button">Save and Continue</button>
    </div>
  );
};

export default AccountSetupPage;
