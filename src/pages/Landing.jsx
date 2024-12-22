import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <section className="bg-gray-100 -mt-10">
        <div className="relative flex gap-4 flex-col px-10 pt-32 pb-20 justify-center items-center ">
          <div
            className="text-center font-extrabold text-6xl md:text-8xl text-teal-800
          "
          >
            Expense Tracker
          </div>
          <div className=" text-teal-800 max-w-[300px] flex flex-col items-center text-center">
            <p>Keep track of your expenses.</p>
            <p>Don&apos;t let your expenses get out of hand.</p>
          </div>

          <Link to={"/dashboard"}>
            <Button className="hover:bg-teal-600 absolute bottom-0 translate-y-1/2 -translate-x-1/2 bg-teal-800 px-10 py-3 tracking-wider">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-20 md:px-32 flex flex-col gap-5 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 grid-rows-2  md:gap-5 md:grid-cols-2 md:grid-rows-1">
          <div className="rounded-lg row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 flex justify-center items-center">
            <img
              src="/assets/gifs/categories.gif"
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]"
            />
          </div>

          <div className="p-2 md:p-5 flex flex-col gap-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 justify-center items-start">
            <h2 className="text-3xl font-semibold text-teal-800">
              <span className="font-extrabold">Categorize</span>
              <br /> <span className="font-light">your expenses</span>
            </h2>
            <p className="text-gray-600 max-w-[400px]">
              Categorize your expenses to keep track of your spending habits.
              This will help you to understand where your money is going.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-2  md:gap-5 md:grid-cols-2 md:grid-rows-1">
          <div className="rounded-lg row-start-1 row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex justify-center items-center">
            <img
              src="/assets/gifs/balance.gif"
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]"
            />
          </div>

          <div className="p-2 md:p-5 flex flex-col gap-2 row-start-2 row-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 justify-center items-start">
            <h2 className="text-3xl  text-teal-800">
              Check
              <span className="font-extrabold"> Balance</span>
              <br /> <span className="font-light"> and maintain it</span>
            </h2>
            <p className="text-gray-600 max-w-[400px]">
              Keep track of your expenses and income to maintain a balance.
              Easily monitor your financial balance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 gap-2 md:gap-5 md:grid-cols-2 md:grid-rows-1">
          <div className="rounded-lg row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 flex justify-center items-center">
            <img
              src="/assets/gifs/history.gif"
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]"
            />
          </div>

          <div className="p-2 md:p-5 flex flex-col gap-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 justify-center items-start">
            <h2 className="text-3xl  text-teal-800">
              Monthly
              <span className="font-extrabold"> History</span>
              <br /> <span className="font-light">of your spendings</span>
            </h2>
            <p className="text-gray-600">
              Keep track of your monthly spendings and earnings. Monitor your
              financial history.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
