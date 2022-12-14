import React from "react";
import "./work-card.css";
export function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.CompanyLogo} className="work-logo" alt="" />
      <div className="work-info">
        <label className="company-name">
          {item.company} <br />
          {item.designation}
        </label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}
