import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Custom_Components/Dashboard";
import Navbar from "./Custom_Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./styles/globals.css";
import { url } from "./Services";
import { useEffect, useState } from "react";
import Axios from "axios";
// import Dashboard from "./Delivery_man/Dashboard/Dashboard";
import Dashboard from "./Delivery_man/Dashboard/Dashboard";
import Sidebar from "./Delivery_man/Sidebar";
import { Completed } from "./Delivery_man/Completed/Completed";
import Return from "./Delivery_man/Return/Return";
import Logout from "./Delivery_man/Logout";
import Pending from "./Delivery_man/Pending/Pending";
import Sample from './Delivery_man/Loader/Spokes'
import Examples from "./Delivery_man/Loader/Spokes";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = localStorage.getItem('userId');
  const password = localStorage.getItem('password');
  const token = localStorage.getItem('jwt');

  const checkLogin = () => {
    Axios.post(`${url}/auth/login`, { username: username, password: password })
      .then((response) => {
        console.log(response);
        if (response.data == "Credentials Invalid !!")
        {
          setIsLoggedIn(false);
        }
        else {  
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  }

  useEffect(() => {
    if (username && password) {
      checkLogin();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* {isLoggedIn && <Navbar/>} */}
        <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* {Deliverey_man} */}
                   
                     <Route path="/Delivery_man/Sidebar" element={<Sidebar></Sidebar>}></Route>
                    <Route path="/Delivery_man/Dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/Delivery_man/Completed" element={<Completed></Completed>}></Route>
                    <Route path="/Delivery_man/Pending" element={<Pending></Pending>}></Route>
                    <Route path="/Delivery_man/Return" element={<Return></Return>}></Route>
           
                    <Route path="/Delivery_man/Logout" element={<Logout></Logout>}></Route> 
                    <Route path="/Delivery_man/Sample" element={<Examples></Examples>}></Route> 


        </Routes>
      </div>
    </Router>
  );
}

export default App;
