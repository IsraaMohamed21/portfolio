import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";

export default function AboutNav() {
  const [activeSection, setActiveSection] = useState("skills"); // default section

  return (
    <div className="about-nav">
      <ul className="about-nav-links">
        <li>
          <button onClick={() => setActiveSection("skills")}>Skills</button>
        </li>
        <li>
          <button onClick={() => setActiveSection("education")}>Education</button>
        </li>
      </ul>

      <div className="about-content">
        {activeSection === "skills" && <Skills />}
        {activeSection === "education" && <Education />}
      </div>
    </div>
  );
}
