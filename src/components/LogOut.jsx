/* eslint-disable react/prop-types */
import useUser from "@/hooks/useUser";
// import { Button } from "./ui/button";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  return (
    <div
      className="w-full text-red-700 font-semibold"
      onClick={() => {
        googleLogout();
        setUser(null);
        localStorage.removeItem("user");
        navigate("/");
      }}
    >
      Logout
    </div>
  );
}
