import { createSlice } from "@reduxjs/toolkit";

export const comicSlice = createSlice({
  name: "comicData",
  initialState: { data: [], originalData: [] },
  reducers: {
    setComicDataReducer: (state, action) => {
      // console.log("test - ", state.data, action);
      state.data = action.payload;
      state.originalData = action.payload;
    },
    filterDataReducer: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
    addComicReducer: (state, action) => {
      state.data.push(action.payload);
    },
    updateComicReducer: (state, action) => {
      let arr = [];
      for (let ele of state.data) {
        if (ele._id === action.payload._id) {
          arr.push(action.payload);
        } else {
          arr.push(ele);
        }
      }
      state.data = arr;
    },
    deleteComicReducer: (state, action) => {
      state.data = state.data.filter((ele) => ele._id !== action.payload._id);
    },
  },
});

export const {
  setComicDataReducer,
  addComicReducer,
  updateComicReducer,
  deleteComicReducer,
  filterDataReducer,
} = comicSlice.actions;
export default comicSlice.reducer;
