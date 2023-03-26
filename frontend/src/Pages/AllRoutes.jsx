import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Login from "./Login";
import Myblogs from "./Myblogs";
import Signup from "./Signup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>WELCOME TO HOME PAGE</h1>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/myblogs" element={<Myblogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
