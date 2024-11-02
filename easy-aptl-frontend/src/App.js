// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AccountSetupPage from "./components/AccountSetupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/account-setup" element={<AccountSetupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
