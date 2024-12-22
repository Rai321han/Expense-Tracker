export default function Footer() {
  return (
    <footer className=" bg-teal-900 flex flex-row justify-center items-center">
      {/* Logo and Description */}
      <div className="grid grid-rows-3 sm:grid-cols-[repeat(3,1fr)] sm:grid-rows-1 text-white p-10 gap-0 sm:gap-4 grid-flow-col w-full max-w-[1200px]">
        <div className="flex flex-col items-center sm:items-start row-span-1 sm:col-span-1 ">
          <div className="flex flex-row gap-3 items-center">
            <img
              src="/assets/image/logo_expense_tracker.png"
              className="w-10 h-10"
              alt="logo"
            />
            <p className="text-lg font-semibold">Expense Tracker</p>
          </div>
          <p className="text-xs font-extralight max-w-[200px] text-center sm:text-left mt-2">
            Expense Tracker is a simple app that helps you track your expenses
            and income.
          </p>
        </div>

        {/* Copyright Information */}
        <div className="flex flex-col justify-center items-center row-span-1 sm:col-span-1">
          <p className="text-xs">© 2024 Expense Tracker.</p>
          <p className="text-xs">All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-end items-center  row-span-1 sm:col-span-1 gap-4">
          <a href="https://facebook.com">
            <svg width="30" height="30" viewBox="0 0 48 48">
              <path
                fill="#0f766e"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </a>
          <a href="https://facebook.com">
            <svg width="30" height="30" viewBox="0 0 48 48">
              <path
                fill="#0f766e"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
          </a>
          <a href="https://facebook.com">
            <svg width="30" height="30" viewBox="0 0 48 48">
              <path
                fill="#0f766e"
                fillRule="evenodd"
                d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
              ></path>
              <polygon
                fill="#fff"
                points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
              ></polygon>
              <polygon
                fill="#fff"
                points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
              ></polygon>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
