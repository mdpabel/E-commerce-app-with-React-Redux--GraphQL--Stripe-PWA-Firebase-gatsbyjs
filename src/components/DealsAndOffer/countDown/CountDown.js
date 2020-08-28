import React from "react";

import "./CountDown.css";

const CountDown = () => {
  return (
    <div>
      <div className="count__Down">
        <header className="count__down__header">
          <h3 className="count__down__title">Deals and offers</h3>
          <p className="count_-down__subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </header>
        <div className="timer">
          <div>
            <span className="number">04</span>
            <span className="text">Days</span>
          </div>
          <div>
            <span className="number">04</span>
            <span className="text">Hours</span>
          </div>
          <div>
            <span className="number">04</span>
            <span className="text">Minutes</span>
          </div>
          <div>
            <span className="number">04</span>
            <span className="text">Second</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
