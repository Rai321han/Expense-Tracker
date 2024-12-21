import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseSortType: "",
  expenseSortField: "",
  incomeSortField: "",
  incomeSortType: "",
};
export const sortingSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    onSorting: (state, action) => {
      const { sortType, type, sortField } = action.payload;
      // if the sorting is on expense
      if (type === "expense") {
        state.expenseSortType =
          state.expenseSortType === sortType ? "" : sortType;
        state.expenseSortField =
          state.expenseSortField === sortField ? "" : sortField;
      }
      // if the sorting is on income
      else {
        state.incomeSortType =
          state.incomeSortType === sortType ? "" : sortType;
        state.incomeSortField =
          state.incomeSortField === sortField ? "" : sortField;
      }
    },
  },
});

export const { onSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
