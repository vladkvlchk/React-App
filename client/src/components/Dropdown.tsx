import { IDropdownProps } from "types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Dropdown: React.FC<IDropdownProps> = ({ trigger, children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 translate-x-16">
        <DropdownMenuGroup className="list-none">
          {children.map((child) => (
            <DropdownMenuItem className="cursor-pointer">
              {child}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
