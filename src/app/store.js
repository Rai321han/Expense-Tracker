import filterReducer from "@/features/filtering/filteringSlice";
import paginateReducer from "@/features/pagination/paginationSlice";
import sortingReducer from "@/features/sorting/sortingSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortingReducer,
    paginate: paginateReducer,
  },
});
