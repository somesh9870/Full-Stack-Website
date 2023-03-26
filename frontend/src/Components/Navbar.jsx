import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h4>
        <Link to={"/"}>Home</Link>
      </h4>
      <h4>
        <Link to={"/blogs"}>Blogs</Link>
      </h4>
      <h4>
        <Link to={"/login"}>Login</Link>
      </h4>
      <h4>
        <Link to={"/signup"}>SignUp</Link>
      </h4>
    </div>
  );
};

export default Navbar;
