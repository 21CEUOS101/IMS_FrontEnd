import React from 'react';
// import { useState } from 'react';
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
import 'semantic-ui-css/semantic.min.css';


const Sidebar = () => {
  // const [showProfile, setShowProfile] = useState(false);
 
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


          <CDBSidebarContent className="sidebar-content" style={{textColor:"#fff" ,backgroundColor:"#000"}}>
            <CDBSidebarMenu>
              <NavLink exact to="/Delivery_man/Dashboard" activeClassName="activeClicked" style={{color:"white"}}>
                <CDBSidebarMenuItem icon="columns" className="sidebar-item">
                  Dashboard 
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Delivery_man/Pending" activeClassName="activeClicked" style={{color:"white"}}>
                <CDBSidebarMenuItem icon="table" className="sidebar-item">
                  Pending Order
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Delivery_man/Completed" activeClassName="activeClicked" style={{color:"white"}}>
                <CDBSidebarMenuItem icon="user" className="sidebar-item">
                  Completed Order
                </CDBSidebarMenuItem>
              </NavLink>
            



            </CDBSidebarMenu>
          </CDBSidebarContent>

          
        </CDBSidebar>
      </div>

    </div>
  );
};

export default Sidebar;
