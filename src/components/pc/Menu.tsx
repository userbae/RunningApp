import { LogOut, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logout from "components/Logout";
import { auth } from "fbase";

const user = auth.currentUser;

console.log(user);
export function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="rounded-md">
        <Button>
          <Avatar>
            <AvatarImage src={`${user?.photoURL}`} />
            <AvatarFallback>{user?.displayName}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white rounded-md">
        <DropdownMenuLabel>{user?.displayName} 님</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Logout>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Logout>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
