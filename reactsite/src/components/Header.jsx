import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-card">
        <h1>Frontend Mentor</h1>
        <p className="header-paraghraph">Feedback Board</p>
      </div>
      <div className="header-second-card">
          <button className="header-btn">All</button>
          <button className="header-btn">UI</button>
          <button className="header-btn">UX</button>
          <button className="header-big-btn">Enhancement</button>
          <button className="header-btn">Bug</button>
          <button className="header-btn">Future</button>
      </div>
      <div className="header-third-card">
           <p className="header-second-paragraph">Roadmap</p>
           <a className="header-link" href="./">View</a>
           <ul>
            <li className="li">Planned</li>
            <li className="li-sec">In Progress</li>
            <li className="li-sec">Live</li>
           </ul>
      </div>
    </div>
  );
};

export default Header;