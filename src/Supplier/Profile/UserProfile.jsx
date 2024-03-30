

import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import Swal from 'sweetalert2';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../../components/ui/hover-card";
import { EditProfile } from "./EditProfile";
import { useState } from "react";
import { useEffect } from "react";
import { getEmployeeById } from '../../Services/EmployeeProfile';


export function DUserProfile() {

    // const id = 'd800453';
    const [profile, setprofile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profile = await getEmployeeById(localStorage.getItem('id'));
                setprofile(profile);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const handleLogout = () => {
      // Clear localStorage
      localStorage.clear();
      Swal.fire({
            title: "Logout successfully",
            // text: "That thing is still around?",
            icon: "success" 
          }).then(()=>[
          
            window.location.href="/"
          ]);
  };



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
            <HoverCardContent className=" w-200">
                <div className="flex justify-between space-x-6">

                    <div className="space-y-2">
                        <h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            {profile && profile?.name}
                        </h4>
                        <small className="text-sm font-medium leading-none">Email address : </small>
                        <p className="text-muted-foreground text-sm shadcn-light" style={{ fontStyle: "italic", color: "green", fontFamily: "unset" }}>{profile && profile?.email}</p>
                        <small className="text-sm font-medium leading-none">Phone no. : </small>
                        <p className="text-muted-foreground text-sm shadcn-light" style={{ fontStyle: "italic", color: "green", fontFamily: "unset" }}>{profile && profile?.phone}</p>
                        <small className="text-sm font-medium leading-none">Warehouse Id :</small>
                        <p className="text-muted-foreground text-sm shadcn-light" style={{ fontStyle: "italic", color: "green", fontFamily: "unset" }}>{profile && profile?.id}</p>
                       
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                {profile && <EditProfile employee={profile}/>}
                            </div>
                            <Button variant="destructive" onClick={handleLogout}>
         Logout
        </Button>
                        </div>
                    </div>
                </div>  
            </HoverCardContent>
        </HoverCard>
    );
}
