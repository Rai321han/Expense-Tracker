import { useContext } from "react";
import { ExpenseSVG, IncomeSVG } from "../utils/SVGs";
import FilterComp from "./FilterComp";
import HistoryListItem from "./HistoryListItem";
import Pagination from "./Pagination";
import SortComp from "./SortComp";
import { CgSpinner } from "react-icons/cg";
import { HistoryContext } from "@/context/HistoryContext";

/* eslint-disable react/prop-types */
export default function History({ isLoading, type, data }) {
  const {
    incomePageNo,
    totalIncomeRecord,
    expensePageNo,
    totalExpenseRecord,
    onPopulateForm,
    resetForm,
    onDelete,
    maxItemOnList,
    handleSetPage,
  } = useContext(HistoryContext);

  let totalRecords = type === "income" ? totalIncomeRecord : totalExpenseRecord;
  totalRecords = totalRecords || 0;

  const setPage = handleSetPage(type);

  const noOfPages = Math.ceil(totalRecords / maxItemOnList);
  return (
    <div className="border rounded-md relative h-fit">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div
            className={`h-10 w-10 ${
              type === "income" ? "bg-teal-600" : " bg-pink-600"
            }  text-white rounded-md text-center object-center place-content-center text-base`}
          >
            {type === "income" && <IncomeSVG />}
            {type === "expense" && <ExpenseSVG />}
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              {type}
            </h3>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="relative inline-block text-left">
            <SortComp type={type} />
          </div>

          <div className="relative inline-block text-left">
            <FilterComp type={type} />
          </div>
        </div>
      </div>

      <div className="p-4 divide-y">
        {isLoading ? (
          <div className="w-full">
            <CgSpinner className="animate-spin w-8 h-8 mx-auto" />
          </div>
        ) : data?.length ? (
          data.map((item) => (
            <HistoryListItem
              data={item}
              key={item.id}
              onPopulateForm={onPopulateForm}
              resetForm={resetForm}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="text-center text-gray-500">
            <i>No records.</i>
          </div>
        )}
      </div>
      <div>
        <Pagination
          numberOfPage={noOfPages}
          setPage={setPage}
          activePage={type === "income" ? incomePageNo : expensePageNo}
        />
      </div>
    </div>
  );
}
