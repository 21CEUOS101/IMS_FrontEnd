import * as React from "react"
import { useState } from "react"
import { cn } from "../lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"

export function MainNav() {


  return (
    < >
    <h1 style={{margin:0}}> Welcome&nbsp;Back,&nbsp;&nbsp;Manager</h1>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/Manager/Dashboard" style={{marginLeft:"30px"}}>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Dashboard 
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/Manager/approvedBDF" style={{marginLeft:"30px"}}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Approved Orders(DF)
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/Manager/approvedBDT" style={{marginLeft:"30px"}}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Approved Orders(DT)
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem></NavigationMenuItem>
        <NavigationMenuItem>

          <Link to="/Manager/delivered" style={{marginLeft:"30px"}}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Completed Orders
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/Manager/cancelled" style={{marginLeft:"30px"}}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cancelled Orders
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </>
  )
}
