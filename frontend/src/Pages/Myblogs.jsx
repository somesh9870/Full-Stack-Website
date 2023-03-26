import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Myblogs = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const addBlog = async () => {
    const payload = {
      title,
      content,
      author,
    };
    try {
      let res = await axios.post(
        `https://shy-gold-beaver-tie.cyclic.app/blogs/add`,
        payload,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res.data);
      setData(res.data);
      fetchData();
      setTitle("");
      setAuthor("");
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      let res = await axios.get(
        `https://shy-gold-beaver-tie.cyclic.app/blogs`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    const payload = {
      content: text,
    };
    try {
      let res = await axios.patch(
        `https://shy-gold-beaver-tie.cyclic.app/blogs/update/${id}`,
        payload,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      setText("");
      setShow(false);
    } catch (err) {
      console.log("oops error", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `https://shy-gold-beaver-tie.cyclic.app/blogs/delete/${id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Text fontSize={"22px"} color={"Teal"}>
        Write Something
      </Text>

      <Stack spacing={4} w="50%" m={"auto"} mb="30px">
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Content</FormLabel>
          {/* <Input type="text" onChange={(e) => setContent(e.target.value)} /> */}
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input
            value={author}
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </FormControl>
        <Stack spacing={10}>
          <Button
            bg={"green.400"}
            color={"white"}
            _hover={{
              bg: "green.500",
            }}
            onClick={addBlog}
          >
            Add Blog
          </Button>
        </Stack>
      </Stack>

      <Heading color={"Blue"} mb="20px">
        Blogs by {localStorage.getItem("name")}
      </Heading>

      {data.length > 0 ? (
        data?.map((blog) => {
          return (
            <Box
              key={blog._id}
              border="1px solid teal"
              width="40%"
              margin="auto"
              padding="10px"
              marginBottom="10px"
            >
              <Text>Title: {blog.title}</Text>
              <Text> {blog.content}</Text>
              <Text> {blog.author}</Text>
              <Box
                style={{
                  display: show ? "block" : "none",
                  marginBottom: "20px",
                }}
              >
                Update blogs:{" "}
                <Textarea
                  padding="10px"
                  marginRight="20px"
                  type="text"
                  placeholder="Write something..."
                  onChange={(e) => setText(e.target.value)}
                />
                <Button onClick={() => handleUpdate(blog._id)}>Add</Button>
              </Box>
              <Button marginRight="20px" onClick={() => setShow(true)}>
                Update
              </Button>
              <Button onClick={() => handleDelete(blog._id)}>Delete</Button>
            </Box>
          );
        })
      ) : (
        <h1>No blogs are found</h1>
      )}
    </>
  );
};

export default Myblogs;
