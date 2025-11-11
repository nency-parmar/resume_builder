// src/components/ColorSelector.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/template.css";

export default function ColorSelector() {
    const { templateId } = useParams();
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState("#2c3e50");

    const colors = [
        "#2c3e50", "#0a9396", "#e63946", "#1d3557",
        "#6a1b9a", "#f4a261", "#2a9d8f", "#3d405b",
    ];

    const handleContinue = () => {
        navigate(`/form`, { state: { selectedColor, templateId } });
    };

    return (
        <div className="color-selector-container">
            <h1 className="color-title">🎨 Choose Your Color Theme</h1>

            <div className="color-grid">
                {colors.map((color) => (
                    <div
                        key={color}
                        className={`color-box ${selectedColor === color ? "selected" : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                    ></div>
                ))}
            </div>

            <button onClick={handleContinue} className="color-continue-btn">
                Continue
            </button>
        </div>
    );
}
