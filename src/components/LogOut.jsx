/* eslint-disable react/prop-types */
import useUser from "@/hooks/useUser";
// import { Button } from "./ui/button";
import { googleLogout } from "@react-oauth/google";

export default function LogOut() {
  const { setUser } = useUser();
  return (
    <div
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
