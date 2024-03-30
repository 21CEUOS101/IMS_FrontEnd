import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Custom_Components/Dashboard";
import Navbar from "./Custom_Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./styles/globals.css";
import { url } from "./Services";
import { useEffect, useState, createContext } from "react";
import Axios from "axios";
import Dashboard from "./Delivery_man/Dashboard/Dashboard";
import Sidebar from "./Delivery_man/Sidebar";
import { Completed } from "./Delivery_man/Completed/Completed";
import Return from "./Delivery_man/Return/Return";
import Logout from "./Delivery_man/Logout";
import Pending from "./Delivery_man/Pending/Pending";
import Examples from "./Delivery_man/Loader/Spokes";

// import Dashboard from "./Delivery_man/Dashboard/Dashboard";
// import Sample from './Delivery_man/Loader/Spokes'
// import SDashboard from './Supplier/Dashboard'
// import ManagerDashboard from './WManager/Dashboard'

import Home from "./Supplier/Home/Home";
import SABDF from './Supplier/SABDF/SABDF';
import SABDT from './Supplier/SABDT/SABDT';
import SDelivered from './Supplier/CompletedOrders/CompletedOrders';
import SCancelled from './Supplier/CancelledOrders/Cancelled';

import MHome from './WManager/Dashboard/Home'
import MABDF from './WManager/MABDF/MABDF';
import MABDT from './WManager/MABDT/MABDT';
import MDelivered from './WManager/Completed/CompletedOrders';
import MCancelled from './WManager/Cancelled/Cancelled';
import MPending from './WManager/PendingOrders/Pending'
import NotFound from "./Pages/NotFound";
export const AppContext = createContext();
const USER_TYPES = {
  DELIVERY_MAN: 'deliveryman',
  SUPPLIER: 'supplier',
  MANAGER: 'manager'
}
const CURRENT_USER_TYPE = USER_TYPES.DELIVERY_MAN;
const role = localStorage.getItem('role');
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = localStorage.getItem('id');
  const password = localStorage.getItem('password');

  const token = localStorage.getItem('jwt');



  useEffect(() => {
    if (username && password && token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>

      {isLoggedIn ? (
        <div className="App">

          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/Delivery_man/Sidebar" element={<PublicElement><Sidebar /></PublicElement>} />
            <Route path="/Delivery_man/Dashboard" element={<PublicElement><Dashboard /></PublicElement>} />
            <Route path="/Delivery_man/Completed" element={<PublicElement><Completed /></PublicElement>} />
            <Route path="/Delivery_man/Pending" element={<PublicElement><Pending /></PublicElement>} />
            <Route path="/Delivery_man/Return" element={<PublicElement><Return /></PublicElement>} />
            <Route path="/Delivery_man/Logout" element={<PublicElement><Logout /></PublicElement>} />
            <Route path="/Delivery_man/Sample" element={<PublicElement><Examples /></PublicElement>} />


            <Route path="/Manager/Home" element={<UserElement><MHome /></UserElement>} />
            <Route path="/Manager/pending" element={<UserElement><MPending /></UserElement>} />
            <Route path="/Manager/approvedBDF" element={<UserElement><MABDF /></UserElement>} />
            <Route path="/Manager/approvedBDT" element={<UserElement><MABDT /></UserElement>} />
            <Route path="/Manager/Delivered" element={<UserElement><MDelivered /></UserElement>} />
            <Route path="/Manager/Cancelled" element={<UserElement><MCancelled /></UserElement>} />

            <Route path="/Supplier/Home" element={<SupplierElement><Home /></SupplierElement>} />
            <Route path="/Supplier/approvedBDF" element={<SupplierElement><SABDF /></SupplierElement>} />
            <Route path="/Supplier/approvedBDT" element={<SupplierElement><SABDT /></SupplierElement>} />
            <Route path="/Supplier/Delivered" element={<SupplierElement><SDelivered /></SupplierElement>} />
            <Route path="/Supplier/Cancelled" element={<SupplierElement><SCancelled /></SupplierElement>} />

            <Route path="*" element={<NotFound></NotFound>}></Route>




          </Routes>
        </div>
      ) :
        (<Login />)
      }

    </AppContext.Provider>

  );
}
function PublicElement({ children }) {
  if (role === 'deliveryman') {

    return <>
      {children}
    </>
  }
  else {
    return <NotFound />
  }
}
function UserElement({ children }) {
  if (role === 'wmanager') {

    return <>
      {children}
    </>
  }
  else {
    return <NotFound />
  }
}
function SupplierElement({ children }) {
  if (role === 'supplier') {

    return <>
      {children}
    </>
  }
  else {
    return <NotFound />
  }
}
export default App;
