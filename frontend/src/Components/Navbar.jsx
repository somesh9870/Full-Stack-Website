import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box display={"flex"} justifyContent="space-around" padding={5}>
      <Text>
        <Link to={"/"}>Home</Link>
      </Text>
      <Text>
        <Link to={"/blogs"}>Blogs</Link>
      </Text>
      <Text>
        <Link to={"/myblogs"}>My Blogs</Link>
      </Text>
      <Text>
        <Link to={"/login"}>Login</Link>
      </Text>
      <Text>
        <Link to={"/signup"}>SignUp</Link>
      </Text>
    </Box>
  );
};

export default Navbar;
