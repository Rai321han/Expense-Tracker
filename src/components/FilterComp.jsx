/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { incomeCategories, expenseCategories } from "../utils/data";
import { FilterSVG } from "../utils/SVGs";
import { HistoryContext } from "@/context/HistoryContext";
import { insertCategory } from "@/features/filtering/filteringSlice";
import { useDispatch } from "react-redux";

export default function FilterComp({ type }) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);
  const filterBtn = useRef(null);
  const dispatch = useDispatch();
  const { resetPagination, setIncomePageNo, setExpensePageNo } =
    useContext(HistoryContext);

  useEffect(() => {
    isOpen && filterRef.current.focus();
  }, [isOpen]);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  function handleBlur(event) {
    // Close dropdown only if focus moves outside the dropdown and button
    if (!filterRef.current?.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  }

  function handleChange(value) {
    dispatch(insertCategory({ category: value, type: type }));
    resetPagination(type);
    if (type === "income") setIncomePageNo(1);
    else setExpensePageNo(1);
  }

  let options;

  if (type === "expense") options = expenseCategories;
  else options = incomeCategories;

  const renderOptions = options.map((option) => (
    <label
      key={option}
      className="cursor-pointer inline-flex items-center px-4 py-2 gap-2 text-sm text-gray-700"
    >
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
        id="filter-option-1"
        value={option}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <div className="ml-2">{option}</div>
    </label>
  ));

  return (
    <>
      <div
        ref={filterBtn}
        onClick={handleToggle}
        onMouseDown={(e) => e.preventDefault()}
      >
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <FilterSVG />
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
          ${!isOpen && "hidden"}
          `}
        role="menu"
        ref={filterRef}
        onBlur={handleBlur}
        aria-orientation="vertical"
        aria-labelledby="filter-button"
        tabIndex="-1"
        id="filter-dropdown"
      >
        <div className="py-1" role="none">
          {renderOptions}
        </div>
      </div>
    </>
  );
}
