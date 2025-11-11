import React from "react";
import Layout1 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout1.js";
import Layout2 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout2.js";
import Layout3 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout3.js";
import Layout4 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout4.js";
import Layout5 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout5.js";
import Layout6 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout6.js";
import Layout7 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout7.js";
import Layout8 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout8.js";
import Layout9 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout9.js";
import Layout10 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout10.js";
import Layout11 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout11.js";
import Layout12 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout12.js";
import Layout13 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout13.js";
import Layout14 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout14.js";
import Layout15 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout15.js";
import Layout16 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout16.js";
import Layout17 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout17.js";
import Layout18 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout18.js";
import Layout19 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout19.js";
import Layout20 from "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/pages/templates/Layouts/Layout20.js";

const layouts = {
    layout1: Layout1,
    layout2: Layout2,
    layout3: Layout3,
    layout4: Layout4,
    layout5: Layout5,
    layout6: Layout6,
    layout7: Layout7,
    layout8: Layout8,
    layout9: Layout9,
    layout10: Layout10,
    layout11: Layout11,
    layout12: Layout12,
    layout13: Layout13,
    layout14: Layout14,
    layout15: Layout15,
    layout16: Layout16,
    layout17: Layout17,
    layout18: Layout18,
    layout19: Layout19,
    layout20: Layout20,
};

export default function TemplateRenderer({
    selectedTemplate = "template1",
    data = {},
    selectedColor = "#7b2ff7",
}) {
    const SelectedTemplate = layouts[selectedTemplate] || layouts.template1;

    return (
        <div className="template-renderer">
            <div className="template-preview-box">
                <SelectedTemplate data={data} color={selectedColor} />
            </div>
        </div>
    );
}
