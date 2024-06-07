import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import {
  Drawer,
  Input,
  InputNumber,
  Rate,
  Button,
  Select,
  Modal,
  ConfigProvider,
} from "antd";
import { CloseOutlined, CheckOutlined, StarFilled } from "@ant-design/icons";

import { useDispatch } from "react-redux";

import { addComicReducer } from "../redux/slice_reducers/reducer";

import { addComicApi } from "../api/Api";

const StatusFields = [
  { label: "Unread", value: "unread", color: "#808080" },
  { label: "Read", value: "read", color: "#6f99e4" },
  { label: "Reading", value: "reading", color: "#8DEA43" },
  { label: "Want To Read", value: "want-to-read", color: "#FCFC3C" },
  { label: "Stalled", value: "stalled", color: "#FC9F3C" },
  { label: "Dropped", value: "dropped", color: "#d93d48" },
  { label: "Won't Read", value: "wont-read", color: "#9942E9" },
];

const AddComicSlider = ({ open, onCloseSlider }) => {
  const [imageFile, setImageFile] = useState(null);
  const [comicData, setComicData] = useState({
    title: "",
    rating: 0,
    chapters: 0,
    status: "",
    description: "",
    imageUrl: null,
  });
  const [statusDetails, setStatusDetails] = useState({
    label: "Unread",
    color: "#808080",
  });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setImageFile(e.target.files[0]);
  };

  const resetSliderData = () => {
    setComicData({
      title: "",
      rating: 0,
      chapters: 0,
      status: "",
      description: "",
      imageUrl: null,
    });
    setImageFile(null);
    setStatusDetails({ label: "Unread", color: "#808080" });
  };
  const onSubmitHandler = () => {
    let formData = new FormData();
    formData.append("category", "comic");
    formData.append("title", comicData.title);
    formData.append("rating", comicData.rating);
    formData.append("chapters", comicData.chapters);
    formData.append("status", comicData.status);
    formData.append("description", comicData.description);
    formData.append("image", imageFile);
    console.log("test 3 - ", imageFile);

    addComicApi(formData).then((res) => {
      if (res.status === 201) {
        dispatch(addComicReducer(res.data));
        resetSliderData();
        onCloseSlider();
      }
    });
  };

  const statusHandler = (status) => {
    StatusFields.forEach((ele) => {
      if (ele.value === status) {
        setStatusDetails({ label: ele.label, color: ele.color });
        return;
      }
    });
  };
  return (
    <Drawer
      title={<span style={{ color: "#fff" }}>Add Comic</span>}
      placement="right"
      open={open}
      onClose={() => {
        resetSliderData();
        onCloseSlider();
      }}
      styles={{
        header: {
          background: "#333333",
          color: "white",
          borderBottomRightRadius: "24px",
          borderBottomLeftRadius: "24px",
        },
        content: { background: "#000", color: "white" },
      }}
      closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
      extra={
        <ConfigProvider
          theme={{
            token: { colorPrimary: "green" },
          }}
        >
          <Button
            type="primary"
            onClick={onSubmitHandler}
            icon={<CheckOutlined />}
          >
            Submit
          </Button>
        </ConfigProvider>
      }
    >
      <div className="d-flex flex-column">
        {/* Uploading image */}
        <div>
          <input type="file" accept="image/*" onChange={changeHandler} />

          {imageFile && (
            <div className="mt-3" style={{ width: "9rem", height: "12rem" }}>
              <img
                src={URL.createObjectURL(imageFile)}
                alt="comic pic"
                onError={() => setImageFile(null)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </div>
          )}
        </div>
        <div>
          <div
            className="mt-4"
            style={{
              width: "100%",
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div className="m-2">
              <Input
                placeholder="Title"
                value={comicData.title}
                onChange={(e) => {
                  setComicData((prev) => {
                    return { ...prev, title: e.currentTarget.value };
                  });
                }}
              />
            </div>
            <div
              className="m-2"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <InputNumber
                  placeholder="Chapters"
                  min={0}
                  value={comicData.chapters}
                  onChange={(value) => {
                    setComicData((prev) => {
                      return { ...prev, chapters: value };
                    });
                  }}
                />
              </div>
              <div className="ms-3" title="rating">
                <Rate
                  allowHalf
                  style={{
                    borderRadius: "16px",
                    backgroundColor: "#fff",
                    padding: "5px",
                  }}
                  value={comicData.rating}
                  onChange={(value) => {
                    setComicData((prev) => {
                      return { ...prev, rating: value };
                    });
                  }}
                />
              </div>
            </div>
            <div className="m-2">
              <Select
                value={comicData.status === "" ? "unread" : comicData.status}
                onChange={(value) => {
                  statusHandler(value);
                  setComicData((prev) => {
                    return { ...prev, status: value };
                  });
                }}
                style={{ width: "170px" }}
                options={[
                  { label: "Unread", value: "unread" },
                  { label: "Read", value: "read" },
                  { label: "Reading", value: "reading" },
                  { label: "Want To Read", value: "want-to-read" },
                  { label: "Stalled", value: "stalled" },
                  { label: "Dropped", value: "dropped" },
                  { label: "Won't Read", value: "wont-read" },
                ]}
              />
              <FaCircle
                style={{
                  marginLeft: "5px",
                  color: statusDetails.color,
                  fontSize: "20px",
                }}
              />
            </div>
            <div
              className="m-2"
              style={{
                width: "100%",
              }}
            >
              <Input.TextArea
                rows={5}
                value={comicData.description}
                onChange={(e) => {
                  setComicData((prev) => {
                    return { ...prev, description: e.currentTarget.value };
                  });
                }}
                placeholder="Description"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AddComicSlider;
