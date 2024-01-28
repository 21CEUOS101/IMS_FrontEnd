import React from 'react';
import { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { DUserProfile } from './Profile/DeliverymanProfileCard';



const Sidebar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const handleMouseEnter = () => {
    setShowProfile(true);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setShowProfile(false);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>



      {/* Sidebar Section */}
      <div style={{ display: 'flex', flex: 1, overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#000000">


          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <p className="text-decoration-none" style={{ color: 'inherit' }}>
              <span style={{ fontStyle: "italic", fontFamily: "sans-serif" }}>  <div className="border-b">
                <div className="flex h-16 items-center px-4"> 
                  <div className="ml-auto flex items-center space-x-4">
                    <DUserProfile />
                  </div>
                </div>
              </div>
                </span>
                <span style={{ fontStyle: "italic" }}>Delivery Man</span>
            </p>
          </CDBSidebarHeader>


          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/Delivery_man/Dashboard" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns" className="sidebar-item">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Delivery_man/Pending" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table" className="sidebar-item">
                  Pending
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Delivery_man/Completed" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user" className="sidebar-item">
                  Completed
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/Delivery_man/Return"
                activeClassName="activeClicked"

              >
                <CDBSidebarMenuItem icon="chart-line" className="sidebar-item">
                  Profile
                </CDBSidebarMenuItem>
              </NavLink>



            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div style={{ padding: '2px 2px' }}>
              <CDBSidebarMenu>
                <NavLink exact to="/Logout" activeClassName="activeClicked">

                  <CDBSidebarMenuItem icon="user" className="sidebar-item">
                    Logout
                  </CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>

            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>

    </div>
  );
};

export default Sidebar;
