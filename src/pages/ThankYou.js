import React from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="thankyou-page">
                <h1>🎉 Thank You!</h1>
                <p>Your resume has been successfully generated and downloaded!</p>
                <button className="home-btn" onClick={() => navigate("/dashboard")}>
                    Back to Home
                </button>
            </div>
        </div>
    );
}
