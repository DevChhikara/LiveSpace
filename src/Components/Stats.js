import React from "react";
import "./Stats.css";
const Stats = () => {
  return (
    <div className="stats-main-section">
      <div className="stats-row-one">
        <div className="stats-internal-text">
          <p className="stats-main-text">10+</p>
          <p className="stats-secondary-text">Years of Experience</p>
        </div>
        <div className="stats-internal-text">
          <p className="stats-main-text">86</p>
          <p className="stats-secondary-text">Awards</p>
        </div>
      </div>
      <div className="stats-row-one">
        <div className="stats-internal-text remover-og">
          <p className="stats-main-text">254,267</p>
          <p className="stats-secondary-text">Projects</p>
        </div>
        <div className="stats-internal-text remover-og">
          <p className="stats-main-text">32,802</p>
          <p className="stats-secondary-text">Clients Served</p>
        </div>
        <div className="stats-internal-text">
          <p className="stats-main-text">90%</p>
          <p className="stats-secondary-text">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
