import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReceptionistAuth.css";

export default function ReceptionistAuth() {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const accessCode = e.target.accessCode.value;

    if (accessCode !== "RCP-2026-MEDI") {
      alert("Invalid Access Code");
      return;
    }

    alert("Login Successful");

    navigate("/receptionist/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-overlay"></div>

      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-badge">
            Authorized Staff Access
          </div>

          <h1>MediFlow</h1>

          <p>Receptionist Portal</p>
        </div>

        <div className="auth-tabs">
          <button
            type="button"
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            type="button"
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <form
            className="auth-form"
            onSubmit={handleLogin}
          >
            <input
              type="email"
              placeholder="Receptionist Email"
              required
            />

            <input
              type="password"
              placeholder="Password"
              required
            />

            <input
              name="accessCode"
              type="text"
              placeholder="Receptionist Access Code"
              required
            />

            <button
              type="submit"
              className="submit-btn"
            >
              Login to Dashboard
            </button>
          </form>
        ) : (
          <form className="auth-form">
            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Receptionist Email"
              required
            />

            <input
              type="password"
              placeholder="Create Password"
              required
            />

            <input
              type="text"
              placeholder="Clinic Name"
              required
            />

            <input
              type="text"
              placeholder="Receptionist Access Code"
              required
            />

            <button
              type="submit"
              className="submit-btn"
            >
              Create Receptionist Account
            </button>
          </form>
        )}

        <div className="portal-note">
          <strong>Note:</strong> Only authorized reception
          staff with a valid clinic-issued access code can
          create or access receptionist accounts.
        </div>
      </div>
    </div>
  );
}