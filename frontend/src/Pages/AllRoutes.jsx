import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import SiginUpForm from "../Components/SignUPForm";
import Blog from "./Blog";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route to="/" element={<h1>WELCOME TO HOME PAGE</h1>} />
        <Route to="/signup" element={<SiginUpForm></SiginUpForm>} />
        <Route to="/login" element={<LoginForm></LoginForm>} />
        <Route to="/blog" element={<Blog></Blog>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
