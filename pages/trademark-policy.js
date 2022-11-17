import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import PrivacyPolicyContent from "@/components/privacyPolicy/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <>
      <PageTitle page="Trademark Policy" />
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Trademark Policy</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Privacy Policy for SPM Global Technologies</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <PrivacyPolicyContent /> */}
      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default PrivacyPolicy;
