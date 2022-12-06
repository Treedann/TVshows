import React, { useState } from "react";
import Donate from "../Donate";
import Pro from "../Pro";

const Subscription = () => {
  const [donateActive, setdonateActive] = useState(false);
  const [proActive, setproActive] = useState(false);
  return (
    <div className="subscription">
      <Donate active={donateActive} setActive={setdonateActive} />
      <Pro active={proActive} setActive={setproActive} />
      <div className="sub-block">
        <div className="pro">
          <span className="span1" onClick={() => setproActive(true)}>
            Buy <div className="pro_label">PRO</div> Now!
          </span>
        </div>
      </div>
      <div className="sub-block2">
        <span className="span2" onClick={() => setdonateActive(true)}>
          Send Donate
        </span>
      </div>
    </div>
  );
};

export default Subscription;