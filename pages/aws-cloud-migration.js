import React from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";


import itsm from "@/public/images/itsm.jpg";
import bmcheliximplementation from "@/public/images/bmcheliximplementation.jpg";

import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";



const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "AWS Cloud Migration" />
      <PageTitle page="AWS Cloud Migration" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="AWS Cloud Migration" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p className="w-100" style={{ textAlign: "justify" }}>Start-ups and established enterprises realize the significance of switching to AWS Cloud Migration today. In this era of digital transformation, enterprises of all sizes need to adopt Amazon Web Services.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Migrations to AWS include moving any digital workload—application, website, database, storage, physical or virtual server, or an entire data center—from an on-premises environment, hosting facility, or other public clouds to AWS.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="AWS Cloud Migration.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area with-top-border ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
              <MediaImage name="AWS Third-Party Vendor.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h4 className="nunito-font">
                  Why Choose Us as Your AWS Third-Party Vendor?
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}> Migrating the digital workload, including software development solutions, apps, robotics solutions, and databases, to a cloud-based solution involves substantial organizational changes and investment. Your organization needs AWS experts like SPM Global Technologies to smoothly execute the AWS implementation.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We have worked with hundreds of clients worldwide as AWS vendors to deliver AWS Managed Services according to their requirements. Our team of cloud computing experts knows the technicalities of application integration.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We implement various stages of migrating your entire digital workload to the robust, reliable, and most preferred platform – AWS. Our AWS Support Services keep you covered all the time. We resolve your technical issues quickly.</p>
                <span className="sub-title">Our experts can help your company’s tech assets migrate smoothly to the cloud. We help you employ one or more of the following solutions and services:</span>
                <ul>
                  <li>•	Application migration strategy</li>
                  <li>•	Monitoring service for the cloud</li>
                  <li>•	On-premise workload migration</li>
                  <li>•	Database migration</li>
                  <li>•	Inventory control of resources</li>
                  <li>•	Configuration tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area ptb-100 br-bottom-100">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">The Advantages of AWS Cloud Migration for Your Business</h2>
            <span className="sub-title purple-color">Let’s drill down to the crucial reasons, briefing you the reasons you should go for AWS Cloud Migration by collaborating with us:</span>

          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Cost Reduction</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Your business will experience a drastic reduction in the cost of IT by adopting AWS Cloud Migration. AWS Cost Management gives you control over your migration project's costs.
                      You can estimate the cost of cloud migration, set a threshold, and receive alerts if your cost exceeds the set limits. You can assess your resources and simplify your accounting if you are using multiple AWS accounts.
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Ease in Agile Transformation</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      Your company can achieve better agility with a task-to-task approach to software development solutions, robotics solutions, and other development activities. By migrating your digital workload to AWS, your agile team can perform more effectively and efficiently.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Improved Security and Reduced Downtime</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      Your teams can take on streamlined testing and be enabled with better governance by migrating your workload, apps, and databases to AWS. Your development, testing, and other teams will have a secure and robust platform with the least amount of downtime. You save on downtime costs, and the core activities continue uninterruptedly.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Effective Integration and Scalability</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      If your organization plans to launch IoT networks or AI & ML in your operations, AWS cloud migration will provide you with much-needed flexibility, scalability, and data access. You can expand your cloud space by adding resources at the right time—AWS Cloud Migration helps you scale at your pace.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=aws-cloud-migration&populate=*`
  );
  const seo = await res.json();

  // By returning { props: { blog } }, the Blog component
  // will receive `blog` as a prop at build time
  return {
    props: {
      seo,
    },
  };
}

export default Services;