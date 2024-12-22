/* eslint-disable no-unused-vars */
import { useState } from "react";
import useAddExpenseData from "@/hooks/useAddExpenseData";
import useAddIncomeData from "@/hooks/useAddIncomeData";
import useDelete from "@/hooks/useDelete";
import useUpdateData from "@/hooks/useUpdateData";
import { useDispatch, useSelector } from "react-redux";
import { useQueries, useQuery } from "react-query";
import { useGoogleLogin } from "@react-oauth/google";
import useUser from "@/hooks/useUser";
import ExpenseForm from "@/components/ExpenseForm";
import History from "@/components/History";
import Overview from "@/components/Overview";
import { getFinanceData, getOverViewData } from "@/service/getData";
import toast, { Toaster } from "react-hot-toast";
import GoogleSignIn from "@/components/GoogleSignIn";
import getUserInfo from "@/utils/getUserInfo";
import NavBar from "@/components/NavBar";
import { queryClient } from "../main";
import { HistoryContext } from "@/context/HistoryContext";
import {
  setDirection,
  setExpensePageNo,
  setIncomePageNo,
  setSkip,
} from "@/features/pagination/paginationSlice";

//
function Dashboard() {
  const [openDiaglog, setOpenDialog] = useState(false);

  /**
   * Redux Hook
   */
  const dispatch = useDispatch();
  const { expenseSortType, incomeSortType, expenseSortField, incomeSortField } =
    useSelector((state) => state.sort);
  const { incomeCategories, expenseCategories } = useSelector(
    (state) => state.filter
  );

  const { direction, incomePageNo, expensePageNo, skip } = useSelector(
    (state) => state.paginate
  );

  const [formData, setFormData] = useState({
    id: "",
    category: "",
    amount: "",
    date: "",
    type: "",
  });

  const [paginateData, setPaginateData] = useState({
    incomeFirstDoc: null,
    incomeLastDoc: null,
    expenseFirstDoc: null,
    expenseLastDoc: null,
    initialExpenseFirstDoc: null,
    initialExpenseLastDoc: null,
    initialIncomeFirstDoc: null,
    initialIncomeLastDoc: null,
  });

  const { user, setUser } = useUser();
  const { addExpenseData } = useAddExpenseData();
  const { addIncomeData } = useAddIncomeData();
  const { deleteRecord } = useDelete();
  const { updateRecord } = useUpdateData();

  const data = useQueries(
    user
      ? [
          {
            queryKey: [
              "expenses",
              expenseSortField,
              expenseSortType,
              user,
              expenseCategories,
              expensePageNo,
            ],
            queryFn: () =>
              getFinanceData(
                expenseSortType,
                expenseSortField,
                user.email,
                expenseCategories,
                "Expense",
                paginateData.expenseFirstDoc,
                paginateData.expenseLastDoc,
                direction,
                skip
              ),
            onSuccess: ({ lastDoc, firstDoc }) => {
              if (lastDoc && firstDoc) {
                setPaginateData((prev) => ({
                  ...prev,
                  initialExpenseFirstDoc: firstDoc,
                  initialExpenseLastDoc: lastDoc,
                }));
              }
            },
          },
          {
            queryKey: [
              "incomes",
              incomeSortField,
              incomeSortType,
              user,
              incomeCategories,
              incomePageNo,
            ],
            queryFn: () =>
              getFinanceData(
                incomeSortType,
                incomeSortField,
                user.email,
                incomeCategories,
                "Income",
                paginateData.incomeFirstDoc,
                paginateData.incomeLastDoc,
                direction,
                skip
              ),
            onSuccess: ({ lastDoc, firstDoc }) => {
              if (lastDoc && firstDoc) {
                setPaginateData((prev) => ({
                  ...prev,
                  initialIncomeFirstDoc: firstDoc,
                  initialIncomeLastDoc: lastDoc,
                })); // Save the last document snapshot
              }
            },
          },
        ]
      : []
  );
  const overviewData = useQuery({
    queryKey: ["overview", user?.email],
    queryFn: user ? () => getOverViewData(user.email) : async () => [0, 0], // Return a resolved promise with default data
    enabled: !!user, // Only fetch data when the user is logged in
  });

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userData = await getUserInfo(tokenResponse);
        queryClient.invalidateQueries(["expenses"]);
        queryClient.invalidateQueries(["incomes"]);
        setUser(userData);
        setOpenDialog(false);
      } catch (error) {
        toast.error("Error while fetching user info!");
      }
    },
    onError: () => toast.error("Error while login!"),
  });

  const expenseQuery = user ? data[0] : null;
  const incomeQuery = user ? data[1] : null;
  const expenseData = user ? data[0].data?.data : null;
  const incomeData = user ? data[1].data?.data : null;
  const totalExpenseRecord = user ? data[0].data?.totalRecords : 0;
  const totalIncomeRecord = user ? data[1].data?.totalRecords : 0;

  // On chaning form input
  function handleChange(e) {
    let { name, value } = e.target;

    if (name === "amount") value = parseFloat(value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //adding new item
  function handleAddSubmit(data, type) {
    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (data.amount === "") return;

    const categoryDefaultValue = type === "Expense" ? "Education" : "Salary";

    const dataObj = {
      amount: data.amount,
      category: data.category ? data.category : categoryDefaultValue,
      date: new Date(data.date),
      email: user.email,
      type: type,
      id: crypto.randomUUID(),
    };

    if (type === "Expense") addExpenseData(dataObj);
    else addIncomeData(dataObj);

    resetForm();
  }

  function handleDelete(id, type) {
    deleteRecord({ id, type });
  }

  function handlePopulateEditData(data) {
    setFormData(data);
  }

  function handleEditData(data, type) {
    const dataObj = {
      ...data,
      date: new Date(data.date),
    };
    updateRecord({ data: dataObj, type });
    resetForm();
  }

  // form input reset
  function resetForm() {
    setFormData({
      id: "",
      category: "",
      amount: "",
      date: "",
      type: "",
    });
  }

  function handleSetPage(type) {
    if (type === "income") {
      return (pageNo) => {
        setPaginateData((prev) => ({
          ...prev,
          incomeFirstDoc: paginateData.initialIncomeFirstDoc,
          incomeLastDoc: paginateData.initialIncomeLastDoc,
        }));
        dispatch(setIncomePageNo(pageNo));
      };
    } else {
      return (pageNo) => {
        setPaginateData((prev) => ({
          ...prev,
          expenseFirstDoc: paginateData.initialExpenseFirstDoc,
          expenseLastDoc: paginateData.initialExpenseLastDoc,
        }));
        dispatch(setExpensePageNo(pageNo));
      };
    }
  }

  const resetPagination = function (type) {
    if (type === "income") {
      setPaginateData((prev) => ({
        ...prev,
        incomeFirstDoc: null,
        incomeLastDoc: null,
      }));
      dispatch(setIncomePageNo(1));
    } else {
      setPaginateData((prev) => ({
        ...prev,
        expenseFirstDoc: null,
        expenseLastDoc: null,
      }));

      dispatch(setExpensePageNo(1));
    }
    dispatch(setDirection("forward"));
    dispatch(setSkip(false));
  };
  const contextValue = {
    onPopulateForm: handlePopulateEditData,
    resetForm: resetForm,
    onDelete: handleDelete,
    resetPagination,
    maxItemOnList: 5,
    incomePageNo,
    totalIncomeRecord,
    expensePageNo,
    totalExpenseRecord,
    handleSetPage,
  };
  return (
    <>
      {/* <Toaster />
      <NavBar /> */}
      <GoogleSignIn open={openDiaglog} setOpen={setOpenDialog} login={login} />
      <main className="p-3 md:p-3 lg:p-0 relative mx-auto my-5 w-full max-w-7xl min-h-[90vh]">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
            <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
              Expense Tracker
            </h2>

            <ExpenseForm
              onChange={handleChange}
              onAddSubmit={handleAddSubmit}
              formData={formData}
              onEdit={handleEditData}
            />
          </div>

          <div className="lg:col-span-2">
            {overviewData.isLoading ? (
              <Overview overviewData={[0, 0]} />
            ) : (
              <Overview overviewData={overviewData?.data} />
            )}

            <HistoryContext.Provider value={contextValue}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2">
                <History
                  isLoading={incomeQuery?.isLoading || false}
                  type="income"
                  data={incomeData}
                />
                <History
                  isLoading={expenseQuery?.isLoading || false}
                  type="expense"
                  data={expenseData}
                />
              </div>
            </HistoryContext.Provider>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
