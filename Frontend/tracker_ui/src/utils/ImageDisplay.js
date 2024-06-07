import React from "react";
import NoImage from "./NoImage";

const ImageDisplay = ({ imageSrc }) => {
  return (
    <>
      {imageSrc ? (
        <img
          src={imageSrc}
          // onError={(e) => {
          //   console.log("onerror", e);
          //   setImage(null);
          // }}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
          alt="comic"
        />
      ) : (
        <NoImage />
      )}
    </>
  );
};

export default ImageDisplay;
