import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar1 from "@/components/Layout/Navigations/Navbar1";
import GridContent from "@/components/Blog/GridContent";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import Image from "next/image";
import Link from "next/link";

const BlogGrid = () => {
  return (
    <>
      <PageTitle page="Blogs" />
      <Navbar1 />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title">Latest News</span>
            <h1>Our latest articles & resources</h1>
          </div>
        </div>
      </div>
      <GridContent />
      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default BlogGrid;
