import React from "react";
import { UserProfile } from "./UserProfile";
import { MainNav } from "./MainNav";

const Navbar = () => {
  return (
    <div className="container-fluid d-none d-lg-block" style={{ background: "#FFC0CB", width: "100%" }}>
      <div className="row align-items-center top-bar" style={{ height: "60px", marginLeft: 20, marginRight: 20 }}>
        <div className="col-lg-3 col-md-12 text-center text-lg-start ">
          {/* <div className="border-b"> */}
            <div className="flex h-16 items-center px-4">
              <MainNav />
              <div  style={{ alignContent: "end", justifyContent: "end",marginLeft:"30px" }}>
                <UserProfile />
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
