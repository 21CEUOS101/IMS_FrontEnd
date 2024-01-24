import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Link } from "react-router-dom";
import { UserProfile } from "./UserProfile";


const Navbar = () => {
  return (
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link to={"/"}>Dashboard</Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <UserProfile />
          </div>
        </div>
      </div>
  );
};

export default Navbar;
