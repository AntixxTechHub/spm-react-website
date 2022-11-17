import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import TestimonialThree from "@/components/Testimonials/TestimonialThree";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Testimonials = () => {
  return (
    <>
      <PageTitle page="Testimonials" />
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title red-light-color">Feedback</span>
            <h1>Our Latest Testimonials</h1>
          </div>
        </div>
      </div>
      <TestimonialThree />
      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default Testimonials;
