import { setDirection, setSkip } from "@/features/pagination/paginationSlice";
import {
  MdNavigateNext,
  MdSkipNext,
  MdNavigateBefore,
  MdSkipPrevious,
} from "react-icons/md";
import { useDispatch } from "react-redux";
/* eslint-disable react/prop-types */
export default function Pagination({
  numberOfPage = 0,
  activePage = 1,
  setPage,
}) {
  const dispatch = useDispatch();
  if (numberOfPage < 2) return;

  function handleDirection(direction) {
    dispatch(setDirection(direction));
  }

  function handleSkip(skip) {
    dispatch(setSkip(skip));
  }
  return (
    <div className="flex flex-row gap-2 w-full justify-center p-2 items-center">
      <button
        disabled={activePage === 1}
        onClick={() => {
          setPage(1);
          handleDirection("backward");
          handleSkip(true);
        }}
        className="p-1 md:px-2 md:py-1 bg-gray-100 hover:bg-gray-200 rounded-md"
      >
        <MdSkipPrevious
          className={`${activePage !== 1 ? " fill-black" : "fill-gray-400"} `}
        />
      </button>
      <button
        className="p-1 md:px-2 md:py-1 bg-gray-100 hover:bg-gray-200 rounded-md"
        disabled={activePage === 1}
        onClick={() => {
          setPage(activePage - 1);
          // setDirection("backward");
          // setSkip(false);
          handleDirection("backward");
          handleSkip(false);
        }}
      >
        <MdNavigateBefore
          className={`${activePage > 1 ? " fill-black" : "fill-gray-400"}`}
        />
      </button>
      <div className="px-2 py-1 bg-gray-50 text-gray-500 rounded-sm text-sm">
        Page {activePage} of {numberOfPage}
      </div>
      <button
        className="p-1 md:px-2 md:py-1 bg-gray-100 hover:bg-gray-200 rounded-md"
        disabled={activePage === numberOfPage}
        onClick={() => {
          setPage(activePage + 1);

          // setDirection("forward");
          // setSkip(false);
          handleDirection("forward");
          handleSkip(false);
        }}
      >
        <MdNavigateNext
          className={`${
            activePage < numberOfPage ? " fill-black" : "fill-gray-400"
          } `}
        />
      </button>
      <button
        className="p-1 md:px-2 md:py-1 bg-gray-100 hover:bg-gray-200 rounded-md"
        disabled={activePage === numberOfPage}
        onClick={() => {
          setPage(numberOfPage);
          // setDirection("forward");
          // setSkip(true);
          handleDirection("forward");
          handleSkip(true);
        }}
      >
        <MdSkipNext
          className={`${
            activePage !== numberOfPage ? "fill-black" : "fill-gray-400"
          }`}
        />
      </button>
    </div>
  );
}
