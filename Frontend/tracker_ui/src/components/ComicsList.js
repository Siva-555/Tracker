import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
// import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Tabs, Tab, Button } from "@mui/material";
import { Plus } from "lucide-react";

import Comic from "./Comic";
import {
  setComicDataReducer,
  filterDataReducer,
} from "../redux/slice_reducers/reducer";
import AddComicSlider from "./AddComicSlider";

const ComicsList = () => {
  const [openSlider, setOpenSlider] = useState(false);
  const [tabValue, setTabValue] = useState("1");

  const dispatch = useDispatch();

  const comicList = useSelector((state) => {
    return state.sliceReducer.data;
  });
  let originalData = useSelector((state) => state.sliceReducer.originalData);
  // console.log("test1 - ", comicList, originalData);

  const tabHandler = (e, val) => {
    let filterData = [];
    console.log("tes -", originalData);
    if (val === "1") {
      filterData = originalData;
    } else if (val === "2") {
      filterData = originalData.filter((ele) => ele.status === "reading");
    } else if (val === "3") {
      filterData = originalData.filter((ele) => ele.status === "want-to-read");
    } else if (val === "4") {
      filterData = originalData.filter((ele) => ele.status === "dropped");
    } else if (val === "5") {
      filterData = originalData.filter((ele) => ele.status === "stalled");
    }
    setTabValue(val);
    dispatch(filterDataReducer(filterData));
  };

  const onCloseSlider = () => {
    setOpenSlider(false);
  };
  return (
    <div
      className="container text-center mt-3"
      style={{
        width: "100%",
      }}
    >
      <div
        className="row w-100 "
        style={{
          color: "#fff",
          borderBottom: "1px solid #ffffff14",
          padding: "10px",
        }}
      >
        <div className="col-8">
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={tabValue}
            onChange={tabHandler}
          >
            <Tab value="1" label="All" style={{ color: "#fff" }} />
            <Tab value="2" label="Reading" style={{ color: "#fff" }} />
            <Tab value="3" label="Want to read" style={{ color: "#fff" }} />
            <Tab value="4" label="Dropped" style={{ color: "#fff " }} />
            <Tab value="5" label="Stalled" style={{ color: "#fff" }} />
          </Tabs>
        </div>
        <div className="col-4 ">
          <Button
            variant="contained"
            startIcon={<Plus size={"18px"} />}
            style={{ float: "right", marginTop: "7px" }}
            onClick={() => setOpenSlider(true)}
          >
            Add
          </Button>
          <AddComicSlider open={openSlider} onCloseSlider={onCloseSlider} />
        </div>
      </div>
      <div className="row justify-content-center justify-content-sm-start my-3 ms-2">
        {comicList.map((data, ind) => {
          return <Comic key={ind} data={data} />;
        })}
      </div>
    </div>
  );
};

export default ComicsList;
