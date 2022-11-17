import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import TeamOne from "@/components/Team/TeamOne";
import TeamTwo from "@/components/Team/TeamTwo";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Team = () => {
  return (
    <>
      <PageTitle page="Team" />
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title">Our Creative Team</span>
            <h1>Our team believes you deserve only the best</h1>
          </div>
        </div>
      </div>
      <TeamOne />
      <TeamTwo />
      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default Team;
