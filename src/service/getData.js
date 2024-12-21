import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  getAggregateFromServer,
  sum,
  getCountFromServer,
  startAfter,
  limit,
  limitToLast,
  endBefore,
} from "firebase/firestore";
import { db } from "./firebase";
import toast from "react-hot-toast";

export async function getFinanceData(
  sortType = "desc",
  sortField = "date",
  email,
  categories = [],
  type,
  firstDoc,
  lastDoc,
  direction,
  skip
) {
  const limitValue = 5;
  if (!email) throw new Error("Not authenticated!");
  let baseQuery = [where("email", "==", email), where("type", "==", type)];

  if (categories.length > 0) {
    baseQuery.push(where("category", "in", categories));
  }

  let totalRecords;
  try {
    const totalQ = query(collection(db, "expenseTracker"), ...baseQuery);
    const snapshot = await getCountFromServer(totalQ);
    totalRecords = snapshot.data().count;
  } catch (error) {
    toast.error("We cannot fetch data!");
    console.log(error);
  }

  /***
   * BUILDING THE QUERY
   ***/

  let Query;
  // if skip mode is true
  if (skip) {
    // if direction is forward
    if (direction === "forward") {
      const reminder = totalRecords % limitValue;
      const adjustedLimitValue = reminder === 0 ? limitValue : reminder;
      Query = query(
        collection(db, "expenseTracker"),
        ...baseQuery,
        orderBy(sortField || "date", sortType || "desc"),
        limitToLast(adjustedLimitValue) // Get the last two records
      );
    }
    // if direction is backward
    else
      Query = query(
        collection(db, "expenseTracker"),
        ...baseQuery,
        orderBy(sortField || "date", sortType || "desc"),
        limit(limitValue) // Get the first two records
      );
  }

  // if skip mode is false
  else {
    // if direction is forward
    if (direction === "forward") {
      Query = lastDoc
        ? query(
            collection(db, "expenseTracker"),
            ...baseQuery,
            orderBy(sortField || "date", sortType || "desc"),
            startAfter(lastDoc),
            limit(limitValue)
          )
        : query(
            collection(db, "expenseTracker"),
            ...baseQuery,
            orderBy(sortField || "date", sortType || "desc"),
            limit(limitValue)
          );
    }
    // if direction is backward
    else {
      Query = firstDoc
        ? query(
            collection(db, "expenseTracker"),
            ...baseQuery,
            orderBy(sortField || "date", sortType || "desc"),
            endBefore(firstDoc),
            limitToLast(limitValue)
          )
        : query(
            collection(db, "expenseTracker"),
            ...baseQuery,
            orderBy(sortField || "date", sortType || "desc"),
            // endBefore(firstDoc),
            limitToLast(limitValue)
          );
    }
  }

  try {
    const querySnapshot = await getDocs(Query);
    const data = querySnapshot.docs.map(
      (doc) => doc.data() // Document data
    );

    return {
      data,
      totalRecords,
      firstDoc: querySnapshot.docs[0],
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1], // Last snapshot
    };
  } catch (error) {
    toast.error("Cannot load data!", {
      duration: 2000,
    });
    console.log(error);
  }
}

export async function getOverViewData(email) {
  if (!email) {
    toast.error("User not found!");
    return;
  }
  const coll = collection(db, "expenseTracker");

  // Queries for expense and income
  const expenseQuery = query(
    coll,
    where("email", "==", email),
    where("type", "==", "Expense")
  );
  const incomeQuery = query(
    coll,
    where("email", "==", email),
    where("type", "==", "Income")
  );

  try {
    // Fetch aggregated data for expenses
    const expenseSnapshot = await getAggregateFromServer(expenseQuery, {
      totalExpense: sum("amount"),
    });

    // Fetch aggregated data for income
    const incomeSnapshot = await getAggregateFromServer(incomeQuery, {
      totalIncome: sum("amount"),
    });

    // Extract values from snapshots
    const totalExpenseAmount = expenseSnapshot.data().totalExpense || 0;
    const totalIncomeAmount = incomeSnapshot.data().totalIncome || 0;

    return [totalExpenseAmount, totalIncomeAmount];
  } catch (error) {
    toast.error("Error fetching data!");
    console.error("Error in fetching aggregate data:", error);
  }
}
