/* eslint-disable react/prop-types */
import useUser from "@/hooks/useUser";
// import { Button } from "./ui/button";
import { googleLogout } from "@react-oauth/google";

export default function LogOut() {
  const { setUser } = useUser();
  return (
    <div
      className="w-full text-red-700 font-semibold"
      onClick={() => {
        googleLogout();
        setUser(null);
        localStorage.removeItem("user");
      }}
    >
      Logout
    </div>
  );
}
