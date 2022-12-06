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
                    <div className="option-sub1">
                        <h3>Get a 57% discount when paying for the year</h3>
                        <div className="prices-huge">
                            <div className="too-expensive">799 $</div>
                            <button type="submit" className="kinda-discount">
                                499 $ for a year
                            </button>
                        </div>
                    </div>
                    <div className="option-sub2">
                        <h2 className="line">OR</h2>
                        <div className="prices-huge2">
                            <div className="too-expensive">100 $</div>
                            <button type="submit" className="kinda-discount">
                                99 $ for a month
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;