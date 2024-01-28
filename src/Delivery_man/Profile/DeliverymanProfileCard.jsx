

import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../../components/ui/hover-card";
import { EditProfile } from "./EditProfile";
import { useState } from "react";
import { useEffect } from "react";
import { getDeliveryManProfile } from '../../Services/DeliveryManService';
import { UserProfile } from "./MoreDetails";


export function DUserProfile() {

    const id = 'd800453';
    const [profile, setprofile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profile = await getDeliveryManProfile(id);
                setprofile(profile);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);




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
            <HoverCardContent className=" w-70">
                <div className="flex justify-between space-x-4">

                    <div className="space-y-2">
                        <h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            {profile && profile.user.name}
                        </h4>
                        <small className="text-sm font-medium leading-none">Email address : </small>
                        <p className="text-muted-foreground text-sm shadcn-light" style={{ fontStyle: "italic", color: "black", fontFamily: "unset" }}>{profile && profile.user.email}</p>
                        <small className="text-sm font-medium leading-none">Phone no. : </small>
                        <p className="text-muted-foreground text-sm shadcn-light" style={{ fontStyle: "italic", color: "black", fontFamily: "unset" }}>{profile && profile.user.phone}</p>
                        <small className="text-sm font-medium leading-none">Address :</small>
                        <p className="text-muted-foreground text-sm shadcn-light" style={{ fontStyle: "italic", color: "black", fontFamily: "unset" }}>{profile && profile.warehouse.pincode}</p>
                        <small className="text-sm font-medium leading-none">status :</small>
                        <p className="text-muted-foreground text-sm shadcn-light" style={{ fontStyle: "italic", color: "black", fontFamily: "unset" }}>{profile && profile.deliveryman.status === 'unavailable' ? <span style={{ color: "red" }}>Unavailable</span> : <span style={{ color: "green" }}>Available</span>}</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                {profile && <EditProfile data={profile}/>}
                            </div>
                            {profile && <UserProfile data={profile}/>}
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
