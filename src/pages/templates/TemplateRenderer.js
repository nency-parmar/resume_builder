import React from "react";
import Layout1 from "./Layouts/Layout1";
import Layout2 from "./Layouts/Layout2";
import Layout3 from "./Layouts/Layout3";
import Layout4 from "./Layouts/Layout4";
import Layout5 from "./Layouts/Layout5";
import Layout6 from "./Layouts/Layout6";
import Layout7 from "./Layouts/Layout7";
import Layout8 from "./Layouts/Layout8";
import Layout9 from "./Layouts/Layout9";
import Layout10 from "./Layouts/Layout10";
import Layout11 from "./Layouts/Layout11";
import Layout12 from "./Layouts/Layout12";
import Layout13 from "./Layouts/Layout13";
import Layout14 from "./Layouts/Layout14";
import Layout15 from "./Layouts/Layout15";
import Layout16 from "./Layouts/Layout16";
import Layout17 from "./Layouts/Layout17";
import Layout18 from "./Layouts/Layout18";
import Layout19 from "./Layouts/Layout19";
import Layout20 from "./Layouts/Layout20";

// 🧩 Map all layouts
const layouts = {
    1: Layout1,
    2: Layout2,
    3: Layout3,
    4: Layout4,
    5: Layout5,
    6: Layout6,
    7: Layout7,
    8: Layout8,
    9: Layout9,
    10: Layout10,
    11: Layout11,
    12: Layout12,
    13: Layout13,
    14: Layout14,
    15: Layout15,
    16: Layout16,
    17: Layout17,
    18: Layout18,
    19: Layout19,
    20: Layout20,
};

// 🌟 Preview image for all templates
const previewImage = "https://marketplace.canva.com/EAGmJ13p8zE/1/0/1131w/canva-black-and-white-minimalist-professional-resume-a4-X9UHTVTOsqQ.jpg";

export default function TemplateRenderer({
    selectedTemplate,
    data = {},
    selectedColor = "#7b2ff7",
}) {
    const SelectedTemplate = layouts[selectedTemplate] || Layout1;

    if (!SelectedTemplate) {
        return (
            <p style={{ textAlign: "center", marginTop: "40px", color: selectedColor }}>
                ⚠️ Template not found. Please try again.
            </p>
        );
    }

    // Determine the prop name for color
    const templateProps = { data };
    if ([12, 14, 15].includes(selectedTemplate)) templateProps.color = selectedColor;
    else if ([16, 17, 18, 19, 20].includes(selectedTemplate)) templateProps.selectedColor = selectedColor;
    else templateProps.color = selectedColor;

    // Pass preview image to template
    templateProps.previewImage = previewImage;

    return (
        <div
            className="template-renderer"
            style={{
                border: `2px solid ${selectedColor}`,
                background: "#fff",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: `0 0 25px ${selectedColor}30`,
            }}
        >
            {/* 🔹 Display preview image above template */}
            {previewImage && (
                <img
                    src={previewImage}
                    alt="Template Preview"
                    style={{
                        width: "100%",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        objectFit: "cover",
                    }}
                />
            )}

            <SelectedTemplate {...templateProps} />
        </div>
    );
}
