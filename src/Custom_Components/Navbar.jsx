import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";


const Navbar = () => {
  return (
    <Router>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link to={"/"}>Dashboard</Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
