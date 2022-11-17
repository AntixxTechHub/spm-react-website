import React from "react";
import Link from "next/link";
import Image from "next/image";
import GridContent from "@/components/Blog/GridContent";

import blogImg5 from "@/public/images/blog/blog5.jpg";
import blogImg6 from "@/public/images/blog/blog6.jpg";
import blogImg7 from "@/public/images/blog/blog7.jpg";

const Blog = () => {
  return (
    <div className="blog-area pb-75 pt-100">
      <div className="container"> 
        <div className="section-title">
        <span className="sub-title">Latest News</span>
          <h2  className="w-100" style={{marginBottom: "-100px"}}
>Our latest articles & resources</h2>
        </div>
        <div className="row justify-content-center">
        <GridContent />
        </div>
      </div>
      <p className="w-100" style={{marginBottom: '-150px'}}></p>
    </div>
  );
};
export default Blog;