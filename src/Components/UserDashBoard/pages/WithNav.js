import React from "react";
import Navbar from "../Navbar";
import { Navigate, Outlet } from "react-router";

const WithNav = () => {
  const isAuthenticated = localStorage.getItem("auth");

  return isAuthenticated ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/log-in-username" />
  );
};

export default WithNav;
