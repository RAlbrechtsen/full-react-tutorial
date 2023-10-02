import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Marshall's new website",
      body: "lorem ipsum.....",
      author: "marshall",
      id: 1,
    },
    {
      title: "Skye's flying blog",
      body: "lorem ipsum.....",
      author: "skye",
      id: 2,
    },
    {
      title: "Zuma's diving equipment",
      body: "lorem ipsum.....",
      author: "marshall",
      id: 3,
    },
  ]);

  return (
    <div className="home">
        <BlogList blogs={blogs} title="All Blogs"/>
        <BlogList blogs={blogs.filter((blog) => blog.author === 'marshall')} title="Marshall's blogs"/>
    </div>
  );
};

export default Home;
