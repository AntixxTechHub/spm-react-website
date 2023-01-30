import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import PrivacyPolicyContent from "@/components/privacyPolicy/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <>
      <PageTitle page="Terms of Use" />
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Terms of Use</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              {/* <li>Terms of Use</li> */}
            </ul>
          </div>
        </div>
      </div>
      <PrivacyPolicyContent />
      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default PrivacyPolicy;
