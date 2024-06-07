import React from "react";

import { ImageUp, X } from "lucide-react";
import NoImage from "../utils/NoImage";
// import { useSelector, useDispatch } from "react-redux";

const ImageUpload = ({ imageUpload, imageUploadHandler }) => {
  const changeHandler = (e) => {
    // console.log(e);

    if (e.target.files.length > 0) {
      imageUploadHandler(e.target.files[0]);
    }
  };
  return (
    <div className="d-flex flex-row justify-content-center align-items-center w-100">
      <div style={{ width: "9rem", height: "12rem", position: "relative" }}>
        {imageUpload ? (
          <img
            src={
              typeof imageUpload == "object"
                ? URL.createObjectURL(imageUpload)
                : imageUpload
            }
            // onError={() => imageUploadHandler(null)}
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

        <label htmlFor="uploadImg" className="up-img-label">
          <ImageUp color="#fff" />
        </label>
      </div>
      <div className="d-flex flex-column ">
        <input
          type="file"
          accept="image/*"
          onChange={changeHandler}
          id="uploadImg"
          style={{ display: "none" }}
        />

        <button
          className="btn-img-rm "
          title="remove image"
          onClick={() => imageUploadHandler(null)}
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
