import React from "react";
import "./web.css";

export function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#educations">
          <i class="fi fi-rr-graduation-cap"></i>Education
        </a>
      </div>
      <div className="web-option">
        <a href="#certificates">
          <i class="fi fi-rr-badge"></i>Certificates
        </a>
      </div>
      <div className="web-option">
        <a href="#memberships">
          <i class="fi fi-rr-users"></i>Memberships
        </a>
      </div>
      <div className="web-option">
        <a href="#activities">
          <i class="fi fi-rr-bowling"></i>activities
        </a>
      </div>

      <div className="web-option">
        <a href="#work">
          <i class="fi fi-rr-briefcase option-icon"></i> Work
        </a>
      </div>
      <div className="web-option">
        <a href="#internships">
          <i class="fi fi-rr-building"></i>Internships
        </a>
      </div>

      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>

      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-headset option-icon"></i> Contact
        </a>
      </div>
    </div>
  );
}
export default Web;
