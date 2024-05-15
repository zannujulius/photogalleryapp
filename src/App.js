import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Navigate, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { postLoginGoogle } from "./redux/action/auth.action";
import { useDispatch, useSelector } from "react-redux";
function App() {
  return (
    <Routes>
      <Route element={<UnprotectedRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<div>Game</div>} />
      </Route>
    </Routes>
  );
}

export default App;

const ProtectedRoute = () => {
  const [token, settoken] = useState(true);
  const { authState, authLoading } = useSelector((state) => state.auth);
  console.log(authState, "authState prop");
  return authState ? <Outlet /> : <Navigate to="/login" />;
};

const UnprotectedRoute = () => {
  const [token, settoken] = useState(true);
  const { authState, authLoading } = useSelector((state) => state.auth);
  console.log(authState, "authState unprop");
  return !authState ? <Outlet /> : <Navigate to="/" />;
};
