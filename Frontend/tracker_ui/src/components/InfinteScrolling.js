import React from "react";

const InfinteScrolling = ({ images }) => {
  return (
    <div className="loop-section w-100 ">
      <div className="loop-container d-inline-flex flex-row " style={{}}>
        {[...images].map((ele, ind) => (
          <div key={ind} className="loop-card">
            <img
              src={ele.imageSrc}
              alt="animate loop pic"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
      <div className="loop-container d-inline-flex flex-row " style={{}}>
        {[...images].map((ele, ind) => (
          <div key={ind} className="loop-card" style={{}}>
            <img
              src={ele.imageSrc}
              alt="animate loop pic"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinteScrolling;
