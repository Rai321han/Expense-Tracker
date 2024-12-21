import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomeCategories: [],
  expenseCategories: [],
};

export const filteringSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    insertCategory: (state, action) => {
      const { type, category } = action.payload;
      if (type === "expense") {
        const categorySet = new Set(state.expenseCategories);
        categorySet.has(category)
          ? categorySet.delete(category)
          : categorySet.add(category);
        state.expenseCategories = Array.from(categorySet);
      } else {
        const categorySet = new Set(state.incomeCategories);
        categorySet.has(category)
          ? categorySet.delete(category)
          : categorySet.add(category);
        state.incomeCategories = Array.from(categorySet);
      }
    },
  },
});

export const { insertCategory } = filteringSlice.actions;
export default filteringSlice.reducer;
