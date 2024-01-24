import { CalendarIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";

export function UserProfile() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">User Name</h4>
                      <p className="text-sm">Emai Id : </p>
                        <p className="italic">{"prajapatiashish40567@gmail.com"}</p>
                      <p className="text-sm">Phone No : </p>
                      <p className="italic">{"1234567890"}</p>

                      <p className="text-sm">Address : </p>
                    <p className="italic">{"India"}</p>
            <p>
              <Button variant="outline" size="small" className="p-2">
                Edit Profile
              </Button>
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
