import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";

import { StarFilled } from "@ant-design/icons";
import { BookMarked, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import ImageDisplay from "../utils/ImageDisplay";

import { getStatusColor } from "../utils/getStatusColor";
import ComicSlider from "./ComicSlider";

const Comic = ({ data }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [comicData, setComicData] = useState({
    title: "",
    rating: 0,
    chapters: 0,
    status: "",
    description: "",
    imageUrl: data.imageUrl || null,
  });
  const [statusDetails, setStatusDetails] = useState({
    label: "Unread",
    color: "#808080",
  });
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    setComicData((prev) => {
      return { ...prev, ...data };
    });
    setImageSrc(process.env.REACT_APP_API_IMAGE_BASE_URL + `/${data.imageUrl}`);
    if (data.status) {
      let val = getStatusColor(data.status);
      setStatusDetails(val);
    }
  }, [data]);

  const drawerCloseHandler = (e) => {
    setDrawerOpen(false);
  };

  return (
    <div
      className=" m-2 ps-0"
      style={{
        flexGrow: 1,
        borderRadius: "4px",
        width: "9rem",
        height: "12rem",
        maxWidth: "300px",
      }}
    >
      {/* Comic Card */}
      <div
        id="card-elevation"
        style={{ borderRadius: "4px", width: "100%", height: "100%" }}
      >
        <div
          className="comic-card"
          style={{
            position: "relative",
            borderRadius: "4px",
            width: "100%",
            height: "100%",
          }}
          onClick={(e) => {
            setDrawerOpen(true);
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <ImageDisplay imageSrc={imageSrc} />
          </div>
          <div className="text-overlay">
            <div
              className="card-info"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <span className="card-title fs-6 fw-bold text-capitalize">
                {data.title}
              </span>
              <div className="card-body">
                <div className="d-flex align-items-baseline mb-2">
                  <BookMarked style={{ color: "#00B4D8" }} />
                  <span
                    className="align-self-end"
                    style={{ marginLeft: "3px" }}
                  >
                    {data.chapters}
                  </span>
                </div>
                <div className="d-flex align-self-baseline mb-2">
                  <StarFilled style={{ color: "#FFFF00", fontSize: "20px" }} />
                  <span
                    className="align-self-end"
                    style={{ marginLeft: "3px" }}
                  >
                    {data.rating}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <FaCircle
                    style={{
                      color: statusDetails.color,
                      fontSize: "1rem",
                    }}
                  />
                  <span
                    className=" text-capitalize"
                    style={{
                      marginLeft: "3px",
                      // fontSize: "0.7rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {statusDetails.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComicSlider
        data={data}
        drawerOpen={drawerOpen}
        drawerCloseHandler={drawerCloseHandler}
      />
    </div>
  );
};

export default Comic;
