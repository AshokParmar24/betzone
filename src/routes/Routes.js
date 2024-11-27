import React from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom-v6";
import Login from "../page/Login";
import Dashboard from "../page/Dashboard";
import betzone_full_logo from "../assets/betzon_full_logo.png";
import Cheltenham from "../components/Cheltenham";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cheltenham" element={<Cheltenham />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
