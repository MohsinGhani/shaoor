import React from "react";
import Blogs from "./blogs";
import Chapters from "./chapters";
import LatestNews from "./latestNews";

const BlogSide = () => {
  return (
    <div className="overflow-auto">
      <LatestNews />
      <Blogs />
      <Chapters />
    </div>
  );
};

export default BlogSide;
