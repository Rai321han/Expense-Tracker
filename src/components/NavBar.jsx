/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProfileDropDown from "./ProfileDropDown";
import SignIn from "./SignIn";
import useUser from "@/hooks/useUser";

export default function NavBar() {
  const { user } = useUser();

  return (
    <nav className="sticky top-0 z-10 p-3">
      <div className="shadow-lg grid grid-cols-[repeat(3,1fr)] grid-rows-1 max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1  border px-4 rounded-md mx-auto">
        <Link to={"/"}>
          <div>
            <img
              src="/assets/image/logo_expense_tracker.png"
              className="h-12"
            />
          </div>
        </Link>
        <div></div>

        <div className=" flex flex-row gap-2 justify-end">
          {!user && <SignIn />}
          {user && (
            <ProfileDropDown>
              <div className="rounded-full  bg-teal-600 text-white w-10">
                <div>
                  <img
                    src={user.picture}
                    alt="profile picture"
                    className="rounded-full"
                  />
                </div>
              </div>
            </ProfileDropDown>
          )}
        </div>
      </div>
    </nav>
  );
}
