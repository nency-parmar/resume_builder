import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function ThankYou() {
    const navigate = useNavigate();

    return (
        <div className="thankyou">
            <div className="thankyou-card">
                <h1>🎉 Thank You!</h1>
                <p>Your resume has been successfully generated and downloaded!</p>
                <button
                    className="home-btn"
                    onClick={() => navigate("/dashboard")}
                    aria-label="Back to Home"
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}
