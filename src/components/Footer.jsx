export default function Footer() {
  return (
    <footer className="grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 bg-teal-900 text-white text-center p-10">
      <div className="flex flex-col gap-3 items-center sm:items-start col-start-1 col-end-2 row-start-1 row-end-2">
        <div className="flex flex-row gap-3 items-center">
          <img
            src="/public/assets/image/logo_expense_tracker.png"
            className="w-10 h-10"
            alt="logo"
          />
          <p>Expense Tracker</p>
        </div>
        <div>
          <p className="text-xs font-extralight max-w-[200px] text-center sm:text-left">
            Expense Tracker is a simple app that helps you track your expenses
            and income.
          </p>
        </div>
      </div>
      <div className="self-center row-start-3 row-end-4 col-start-1 col-end-2 sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3">
        <p className="text-xs">
          © 2024 Expense Tracker. <br /> All rights reserved.
        </p>
      </div>
      <div className="self-center sm:justify-self-end row-start-2 row-end-3 col-start-1 col-end-2 sm:row-start-1 sm:row-end-2 sm:col-start-3 sm:col-end-4">
        <div className="flex flex-row gap-3 items-center justify-center">
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
