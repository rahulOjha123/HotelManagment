import React, { useState } from "react";
import "../PostHotel/Hotel.css";

function Hotel() {
  const [chilData, setChilData] = useState(1);

  const formsubmit = (e) => {
    e.preventDefault();
    
  };
  const increment = () => {
    setChilData(chilData - 1);
  };
  const decrement = () => {
    setChilData(chilData + 1);
  };
  return (
    <div className="hotel">
      <div className="select_room">
        <form className="form" onSubmit={formsubmit}>
          <input type="text" placeholder="city name" name="city" />
          <input type="date" placeholder="check in" name="date" />
          <input type="date" placeholder="check out" name="dates" />
          <button className="btnnn">
            <span className="span1">1</span>
            <span>Guest</span>
            <span className="span1">1</span>
            <span>Room</span>
            <div className="child_select">
              <form className="child_main">
                <div className="child">
                  <span className="adult_span">Adults</span>
                  <div className="inner_span">
                    <span className="min" onClick={increment}>
                      -
                    </span>
                    <span className="store">{chilData}</span>
                    <span className="plus" onClick={decrement}>
                      +
                    </span>
                  </div>
                </div>
                <div className="child">
                  <span className="adult_span">Children</span>
                  <div className="inner_span">
                    <span className="min">-</span>
                    <span className="store">H</span>
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="child">
                  <span className="adult_span">Rooms</span>
                  <div className="inner_span">
                    <span className="min">-</span>
                    <span className="store">H</span>
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="button">
                  <button type="reset" className="btn btn-primary">
                    Reset
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Applay
                  </button>
                </div>
              </form>
            </div>
          </button>
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hotel;
