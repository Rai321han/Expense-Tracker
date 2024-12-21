import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  direction: "forward",
  updatedPaginateData: {
    incomeFirstDoc: [],
    incomeLastDoc: [],
    expenseFirstDoc: [],
    expenseLastDoc: [],
  },
  incomePageNo: 1,
  expensePageNo: 1,
  skip: false,
  incomePaginateData: {
    firstDoc: [],
    lastDoc: [],
  },
  expensePaginateData: {
    firstDoc: [],
    lastDoc: [],
  },
};

export const paginateSlice = createSlice({
  name: "paginate",
  initialState,
  reducers: {
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setUpdatedPaginateData: (state, action) => {
      state.updatedPaginateData = {
        ...state.updatedPaginateData,
        ...action.payload,
      };
    },
    setIncomePageNo: (state, action) => {
      state.incomePageNo = action.payload;
    },
    setExpensePageNo: (state, action) => {
      state.expensePageNo = action.payload;
    },
    setSkip: (state, action) => {
      state.skip = action.payload;
    },
    setIncomePaginateData: (state, action) => {
      state.incomePaginateData = action.payload;
    },
    setExpensePaginateData: (state, action) => {
      state.expensePaginateData = action.payload;
    },
  },
});

export default paginateSlice.reducer;
export const {
  setDirection,
  setUpdatedPaginateData,
  setIncomePageNo,
  setExpensePageNo,
  setSkip,
  setIncomePaginateData,
  setExpensePaginateData,
} = paginateSlice.actions;
