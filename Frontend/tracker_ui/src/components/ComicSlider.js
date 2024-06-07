import React, { useState, useEffect } from "react";

import { FaCircle } from "react-icons/fa";
import {
  Divider,
  Drawer,
  Input,
  InputNumber,
  Rate,
  Button,
  Select,
  Modal,
  ConfigProvider,
} from "antd";
import {
  StarFilled,
  EditOutlined,
  CloseOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { BookMarked, Trash2 } from "lucide-react";

import ImageUpload from "./ImageUpload";
import ImageDisplay from "../utils/ImageDisplay";
import { getTypeBasedIcon } from "../utils/getTypeBasedIcon";
import { getTypeBasedColor } from "../utils/getTypeBasedColor";
import { getStatusColor } from "../utils/getStatusColor";
import { updateComicApi, deleteComicApi, getAllComicsApi } from "../api/Api";

import { useSelector, useDispatch } from "react-redux";
import {
  setComicDataReducer,
  deleteComicReducer,
  updateComicReducer,
} from "../redux/slice_reducers/reducer";

const ComicSlider = ({ data, drawerOpen, drawerCloseHandler }) => {
  const [comicData, setComicData] = useState({
    title: "",
    rating: 0,
    chapters: 0,
    status: "",
    description: "",
    imageUrl: data.imageUrl || null,
  });
  const [edit, setEdit] = useState(false);
  const [statusDetails, setStatusDetails] = useState({
    label: "Unread",
    color: "#808080",
  });
  const [confirmModal, setConfirmModal] = useState({
    open: false,
    title: "",
    loading: false,
    type: "",
  });
  const [imageUpload, setImageUpload] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    setComicData((prev) => {
      return { ...prev, ...data };
    });
    setImageUpload(
      process.env.REACT_APP_API_IMAGE_BASE_URL + `/${data.imageUrl}`
    );
    if (data.status) {
      let val = getStatusColor(data.status);
      setStatusDetails(val);
    }
  }, []);
  /**
   *
   * Delete comic Functions
   */
  const deleteHandler = (e) => {
    setConfirmModal((prev) => {
      return { ...prev, open: true, title: "Are you sure?", type: "Delete" };
    });
  };

  const deleteModalHandler = (e) => {
    setConfirmModal((prev) => {
      return { ...prev, loading: true };
    });
    deleteComicApi(data._id)
      .then((res) => {
        if (res.status === 200) {
          setConfirmModal((prev) => {
            return { ...prev, open: false, loading: false };
          });
          dispatch(deleteComicReducer(res.data));
          drawerCloseHandler();
        }
        console.log("delete promise - ", res);
      })
      .catch((err) => {
        console.log("error - ", err);
      });
  };

  /**
   *
   * Update Comic Functions
   */
  const updateHandler = (e) => {
    setConfirmModal((prev) => {
      return { ...prev, open: true, title: "Are you sure?", type: "Update" };
    });
  };
  const updateModalHandler = () => {
    setConfirmModal((prev) => {
      return { ...prev, loading: true };
    });

    let formData = new FormData();
    formData.append("title", comicData.title);
    formData.append("rating", comicData.rating);
    formData.append("chapters", comicData.chapters);
    formData.append("status", comicData.status);
    formData.append("description", comicData.description);
    formData.append("image", imageUpload);

    updateComicApi(data._id, formData)
      .then((res) => {
        if (res.status === 200) {
          setConfirmModal((prev) => {
            return { ...prev, open: false, loading: false };
          });
          setComicData(res.data);
          dispatch(updateComicReducer(res.data));
          setEdit(false);
          drawerCloseHandler();
        }
        console.log("onUpdate - ", res);
      })
      .catch((err) => {
        console.log("error - ", err);
      });
  };

  /**
   *
   * Modal Submit Function
   */
  const submitModalHandler = (type) => {
    if (type === "Delete") {
      deleteModalHandler();
    } else if (type === "Update") {
      updateModalHandler();
    }
  };
  const imageUploadHandler = (raw) => {
    // console.log("raw ", raw);
    setImageUpload(raw);
  };
  const onCancelModelHandler = () => {
    setComicData((prev) => {
      return { ...prev, ...data };
    });
    setStatusDetails(getStatusColor(data.status));
    setImageUpload(
      process.env.REACT_APP_API_IMAGE_BASE_URL + `/${data.imageUrl}`
    );
    setEdit(false);
  };

  return (
    <div>
      <Drawer
        open={drawerOpen}
        onClose={drawerCloseHandler}
        title={<span style={{ color: "#fff" }}>Comic</span>}
        placement="right"
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
          <div>
            {!edit ? (
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => setEdit(true)}
              >
                Edit
              </Button>
            ) : (
              <div style={{}}>
                <ConfigProvider
                  theme={{
                    token: { colorPrimary: "green" },
                  }}
                >
                  <Button
                    type="default"
                    icon={<CloseOutlined />}
                    onClick={onCancelModelHandler}
                    style={{ marginRight: "10px" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    onClick={updateHandler}
                    icon={<UploadOutlined />}
                  >
                    Update
                  </Button>
                </ConfigProvider>
              </div>
            )}
          </div>
        }
      >
        <div className="row">
          <div
            className=""
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {edit ? (
              <>
                <ImageUpload
                  imageUpload={imageUpload}
                  imageUploadHandler={imageUploadHandler}
                />
                <button
                  className="del-icon-con"
                  onClick={deleteHandler}
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "-15px",
                    border: "0px",
                  }}
                >
                  <Trash2 className="del-icon" strokeWidth={1.5} />
                </button>
              </>
            ) : (
              <div style={{ width: "9rem", height: "12rem" }}>
                <ImageDisplay
                  imageSrc={
                    process.env.REACT_APP_API_IMAGE_BASE_URL +
                    `/${data.imageUrl}`
                  }
                />
              </div>
            )}
          </div>
          <div
            className="mt-3"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {edit ? (
              <div
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
                    value={
                      comicData.status === "" ? "unread" : comicData.status
                    }
                    onChange={(value) => {
                      setComicData((prev) => {
                        return { ...prev, status: value };
                      });
                      setStatusDetails(getStatusColor(value));
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
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  className="text-capitalize"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    color: "#0077B6",
                    textShadow: "2px 2px 20px #0077b6",
                  }}
                >
                  {comicData.title}
                </div>
                <div
                  className="mt-3"
                  style={{
                    alignSelf: "flex-start",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div className="align-items-baseline">
                    <BookMarked />
                    <span
                      className="align-self-end"
                      style={{ marginLeft: "3px" }}
                    >
                      {comicData.chapters}
                    </span>
                  </div>
                  <Divider
                    style={{
                      borderInlineStart: "1px solid rgba(5, 5, 5, 0.4)",
                      marginTop: "4px",
                    }}
                    className="align-self-center"
                    type="vertical"
                  />
                  <div className="align-self-baseline">
                    <StarFilled
                      style={{ color: "#FFFF00", fontSize: "20px" }}
                    />
                    <span
                      className="align-self-end"
                      style={{ marginLeft: "3px" }}
                    >
                      {comicData.rating}
                    </span>
                  </div>
                  <Divider
                    style={{
                      borderInlineStart: "1px solid rgba(5, 5, 5, 0.4)",
                      marginTop: "4px",
                    }}
                    className="align-self-center"
                    type="vertical"
                  />
                  <div className="align-self-baseline">
                    <FaCircle
                      style={{
                        color: statusDetails.color,
                        fontSize: "20px",
                      }}
                    />
                    <span
                      className="align-self-end text-capitalize"
                      style={{ marginLeft: "3px" }}
                    >
                      {statusDetails.label}
                    </span>
                  </div>
                </div>
                <div
                  className="mt-3 ms-2"
                  style={{ width: "100%", textAlign: "left" }}
                >
                  {comicData.description}
                </div>
              </div>
            )}
          </div>
        </div>
      </Drawer>
      <Modal
        open={confirmModal.open}
        width="370px"
        centered={true}
        onCancel={() => {
          setConfirmModal((prev) => {
            return { ...prev, open: false };
          });
        }}
        footer={[
          <ConfigProvider
            key="cancel_config"
            theme={{
              token: { colorPrimary: getTypeBasedColor(confirmModal.type) },
            }}
          >
            <Button
              key="cancel"
              icon={<CloseOutlined />}
              onClick={() => {
                setConfirmModal((prev) => {
                  return { ...prev, open: false };
                });
              }}
            >
              Cancel
            </Button>
          </ConfigProvider>,
          <ConfigProvider
            key="submit_config"
            theme={{
              token: { colorPrimary: getTypeBasedColor(confirmModal.type) },
            }}
          >
            <Button
              key="submit"
              type="primary"
              icon={getTypeBasedIcon(confirmModal.type)}
              loading={confirmModal.loading}
              onClick={() => submitModalHandler(confirmModal.type)}
            >
              {confirmModal.type}
            </Button>
          </ConfigProvider>,
        ]}
        title="Confirmation"
      >
        {confirmModal.title}
      </Modal>
    </div>
  );
};

export default ComicSlider;
