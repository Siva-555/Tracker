import { configureStore } from "@reduxjs/toolkit";

import sliceReducer from "./slice_reducers/reducer";

export const store = configureStore({ reducer: { sliceReducer } });
