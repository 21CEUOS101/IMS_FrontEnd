import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Custom_Components/Dashboard";
import Navbar from "./Custom_Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Button } from "./components/ui/button";
import "./styles/globals.css";
import { url } from "./Services";
import { useEffect, useState } from "react";
import Axios from "axios";

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
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
