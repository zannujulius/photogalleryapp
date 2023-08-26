import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Navigate, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  const [user, setuser] = useState(null);
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log(data, "user data");
      setuser(data.user._json);
    } catch (error) {
      console.log(error, "got error");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Home user={user} /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
      <Route
        path="/signup"
        element={user ? <Navigate to={"/"} /> : <Signup />}
      />
    </Routes>
  );
}

export default App;
