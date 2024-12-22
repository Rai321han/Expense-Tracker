/* eslint-disable react/prop-types */
import ProfileDropDown from "./ProfileDropDown";
import SignIn from "./SignIn";
import useUser from "@/hooks/useUser";

export default function NavBar() {
  const { user } = useUser();
  return (
    <nav className="sticky top-0 z-10">
      <div className=" grid grid-cols-[repeat(3,1fr)] grid-rows-1 max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1  border px-4 rounded-md mx-auto">
        <div>
          <img src="/assets/image/logo_expense_tracker.png" className="h-12" />
        </div>

        <div className="block">
          {/* <ul className="flex gap-4 text-gray-500  font-medium justify-center">
            <li className="px-3 py-2 bg-teal-700 rounded-lg text-white cursor-pointer text-sm">
              Export this month
            </li>
          </ul> */}
        </div>

        <div className=" flex flex-row gap-2 justify-end">
          {/* <div className="p-2 text-zinc-500">December 2024</div> */}
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
