import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Marshall's new website",
      body: "lorem ipsum.....",
      author: "marshal",
      id: 1,
    },
    {
      title: "Skye's flying blog",
      body: "lorem ipsum.....",
      author: "marshal",
      id: 2,
    },
    {
      title: "Zuma's diving equipment",
      body: "lorem ipsum.....",
      author: "marshal",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
