// ✅ Import all 20 layout components
import Layout1 from "../pages/templates/Layouts/Layout1";
import Layout2 from "../pages/templates/Layouts/Layout2";
import Layout3 from "../pages/templates/Layouts/Layout3";
import Layout4 from "../pages/templates/Layouts/Layout4";
import Layout5 from "../pages/templates/Layouts/Layout5";
import Layout6 from "../pages/templates/Layouts/Layout6";
import Layout7 from "../pages/templates/Layouts/Layout7";
import Layout8 from "../pages/templates/Layouts/Layout8";
import Layout9 from "../pages/templates/Layouts/Layout9";
import Layout10 from "../pages/templates/Layouts/Layout10";
import Layout11 from "../pages/templates/Layouts/Layout11";
import Layout12 from "../pages/templates/Layouts/Layout12";
import Layout13 from "../pages/templates/Layouts/Layout13";
import Layout14 from "../pages/templates/Layouts/Layout14";
import Layout15 from "../pages/templates/Layouts/Layout15";
import Layout16 from "../pages/templates/Layouts/Layout16";
import Layout17 from "../pages/templates/Layouts/Layout17";
import Layout18 from "../pages/templates/Layouts/Layout18";
import Layout19 from "../pages/templates/Layouts/Layout19";
import Layout20 from "../pages/templates/Layouts/Layout20";

// 🧾 Common sample data (for previews or default templates)
export const sampleData = {
    name: "Your Name",
    jobTitle: "Full Stack Developer",
    email: "email@example.com",
    phone: "+91 XXXXX XXXXX",
    address: "City, State, Country",
    linkedin: "linkedin.com/in/username",
    github: "github.com/username",
    portfolio: "yourportfolio.com",
    summary: "A passionate developer eager to learn and grow.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    experience: [
        {
            position: "Web Developer Intern",
            company: "ABC Tech",
            duration: "Jan 2024 – Dec 2024",
            description:
                "Developed modern UI with React and optimized backend API integration.",
        },
    ],
    education: [
        { degree: "B.Tech CSE", institute: "Darshan University", year: "2025" },
    ],
    projects: [
        {
            title: "Resume Builder App",
            description: "Built an ATS-optimized resume builder using React.js.",
        },
    ],
    certificates: [
        { title: "Frontend Developer Certificate", issuer: "Udemy", year: "2024" },
    ],
    languages: ["English", "Hindi", "Gujarati"],
    interests: ["UI Design", "Traveling", "Photography"],
    achievements: ["Top 10 finalist in Hackathon 2024"],
};

// 🎨 All templates with professional names and optional thumbnails
const templates = [
    { id: 1, name: "Modern Elegance", component: Layout1, thumbnail: "/thumbs/layout1.png" },
    { id: 2, name: "Classic Professional", component: Layout2, thumbnail: "/thumbs/layout2.png" },
    { id: 3, name: "Creative Spark", component: Layout3, thumbnail: "/thumbs/layout3.png" },
    { id: 4, name: "Minimal Focus", component: Layout4, thumbnail: "/thumbs/layout4.png" },
    { id: 5, name: "Gradient Glow", component: Layout5, thumbnail: "/thumbs/layout5.png" },
    { id: 6, name: "Soft Pastel", component: Layout6, thumbnail: "/thumbs/layout6.png" },
    { id: 7, name: "Corporate Edge", component: Layout7, thumbnail: "/thumbs/layout7.png" },
    { id: 8, name: "Fresh Horizon", component: Layout8, thumbnail: "/thumbs/layout8.png" },
    { id: 9, name: "Dynamic Duo", component: Layout9, thumbnail: "/thumbs/layout9.png" },
    { id: 10, name: "Royal Resume", component: Layout10, thumbnail: "/thumbs/layout10.png" },
    { id: 11, name: "Vibrant Vision", component: Layout11, thumbnail: "/thumbs/layout11.png" },
    { id: 12, name: "Elegant Simplicity", component: Layout12, thumbnail: "/thumbs/layout12.png" },
    { id: 13, name: "Tech Innovator", component: Layout13, thumbnail: "/thumbs/layout13.png" },
    { id: 14, name: "Dream Builder", component: Layout14, thumbnail: "/thumbs/layout14.png" },
    { id: 15, name: "Focus Resume", component: Layout15, thumbnail: "/thumbs/layout15.png" },
    { id: 16, name: "Soft Shadow", component: Layout16, thumbnail: "/thumbs/layout16.png" },
    { id: 17, name: "Bold Impression", component: Layout17, thumbnail: "/thumbs/layout17.png" },
    { id: 18, name: "Pastel Harmony", component: Layout18, thumbnail: "/thumbs/layout18.png" },
    { id: 19, name: "Creative Wave", component: Layout19, thumbnail: "/thumbs/layout19.png" },
    { id: 20, name: "Elegant Vision", component: Layout20, thumbnail: "/thumbs/layout20.png" },
];

export default templates;
