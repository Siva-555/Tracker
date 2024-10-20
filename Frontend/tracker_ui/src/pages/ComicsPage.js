import React, { useEffect, useState } from "react";

import Header from "../components/header/Header";
import { getAllComicsApi } from "../api/Api";
import ComicsList from "../components/ComicsList";

import { useSelector, useDispatch } from "react-redux";
import { setComicDataReducer } from "../redux/slice_reducers/reducer";
const ComicsPage = () => {
  // const [comicList, setComicList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllComicsApi().then((res) => {
      dispatch(setComicDataReducer(res));
    });
  }, []);

  return (
    <div className="overflow-auto">
      <Header />
      <ComicsList />
    </div>
  );
};
export default ComicsPage;
