import React, { useState } from "react";
const Donate = ({ active, setActive }) => {
  return (
    <div
      className={active ? "donate active" : "donate"}
      onClick={() => setActive(false)}
    >
      <div className="donate-content" onClick={(e) => e.stopPropagation()}>
        <div className="hide-butt">
          <a href="" className="hide" onClick={(e) => e.stopPropagation()}>
            X
          </a>
        </div>
        <span className="span-title">Send donate</span>
        <div className="donate-description">
          If you want to support the progress of TVShows with a donation, select
          an amount or enter your own:
        </div>
        <div className="donate-buttons">
          <button className="donate-button1">100 $</button>
          <button className="donate-button1">500 $</button>
          <button className="donate-button1">1000 $</button>
          <input type={"number"} min={"100"} max={"1000"}></input>
        </div>
        <button className="donate-send">Send</button>
      </div>
    </div>
  );
};

export default Donate;
