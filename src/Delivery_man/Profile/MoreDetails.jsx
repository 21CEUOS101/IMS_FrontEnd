import { Button } from "../../components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card2";


export function UserProfile({data}) {
    const{warehouse,user,deliveryman} = data
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="destructive">
         More details
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className=" w-80">
        <div className="flex justify-between space-x-4">
          
          <div className="space-y-2">
          <h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
           WareHouse details
          </h4>
          <small className="text-sm font-medium leading-none">Warehouse Name: </small>
          <p className="text-muted-foreground text-sm shadcn-light"style={{ fontStyle: "italic", color: "black", fontFamily: "unset" }}>{warehouse.name}</p>
          <small className="text-sm font-medium leading-none">Warehouse Address : </small>
          <p className="text-muted-foreground text-sm shadcn-light"style={{ fontStyle: "italic", color: "black", fontFamily: "unset" }}>{warehouse.address} - {warehouse.pincode}</p>      
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
