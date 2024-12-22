import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PropTypes from "prop-types";
import LogOut from "./LogOut";
import useUser from "@/hooks/useUser";
import { GoRepo, GoSignOut } from "react-icons/go";

export default function ProfileDropDown({ children }) {
  const { user } = useUser();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="-translate-x-5">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <GoRepo />
          History
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <GoSignOut />
          <LogOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

ProfileDropDown.propTypes = {
  children: PropTypes.node.isRequired,
};
