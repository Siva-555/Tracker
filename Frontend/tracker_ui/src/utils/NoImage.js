import React from "react";
import { ImageOff } from "lucide-react";

const NoImage = () => {
  return (
    <div className="no-image" style={{ width: "100%", height: "100%" }}>
      <span
        className="pos-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ImageOff color="#fff" />
      </span>
    </div>
  );
};

export default NoImage;
