import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

import goalImg from "@/public/images/goal.png";
import manWithSon from "@/public/images/man-with-son.png";
import bmc from "@/public/images/icon/bmc.png";


const Services = () => {
  return (
    <>
      <PageTitle page="Logistics Software" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Logistics Software" />

      {/* <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>Your Most Trusted IT Service Management Consulting Partner!</h3>
                <p style={{ textAlign: "justify" }}>You must effectively manage software solutions, hardware, overall IT infrastructure, and your computing resources during the digital transformation. SPM Global Technologies takes care of these aspects through ITSM (IT Service Management) by leveraging extensive experience and expertise in ITSM for all sizes of companies.</p>
                <p style={{ textAlign: "justify" }}>We offer Enterprise IT Service Management to help you deliver your services faster and with the best service quality.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={manWithSon} alt="" />
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
                <Image src={goalImg} alt="goal-image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  We Empower Your Business Through IT Service Management System
                </h3>
                <p style={{ textAlign: "justify" }}>•	We develop an IT system management and enterprise architecture. We customise the solution to your business-specific needs and consider your IT infrastructure and environment.</p>
                <p style={{ textAlign: "justify" }}>•	We deploy the most effective IT service management system tools to help you improve the management of IT assets, incidents, and changes. We help you make the most of your knowledge base for your routine business operations.</p>
                <p style={{ textAlign: "justify" }}>•	We implement an IT service management platform to help you orchestrate your workflow, and organize your development, testing, and release processes. You can effectively standardize your IT procedures by using the features of this platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Why Choose Us As your ITSM Partner?</h2>
            <p>We partner with your business throughout the journey of implementing the best IT service management system administrator. Our ITSM experts work closely with you to understand your requirements, current IT infrastructure, and required upgrades and plan a roadmap for implementation and beyond.
              We address difficulties and challenges at different levels to resolve them and make your IT operations smoother.
            </p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>We Create a Centralised IT Support System</a>
                </h5>
                <p>If your IT processes are spread across distributed business units, we help you get a centralised overview. We deploy IT service management with a system centre service manager to accelerate your support processes across business locations.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Proper Service Level Agreement Configuration</a>
                </h5>
                <p>When you involve multiple vendors in your IT processes, it is essential to configure their Service Level Agreement, if their responsibilities and work areas overlap. We help you develop a proper configuration system to handle these aspects effectively, according to your expectations and standards.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Effective Vendor Performance Management</a>
                </h5>
                <p>We are among the best IT managed services companies. When you rely on vendors for various deliverables, we help you assess their performance by implementing an evaluation functionality. You can verify if the vendors’ performance and offerings comply with your standards and workflows.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Effective Employee Performance Management</a>
                </h5>
                <p>We help you assess your IT employees’ performance through workflow orchestration and a real-time overview of the progress of every project your company executes. Similarly, our effective IT service request management system helps you split service requests at the employee level. With these features, you set employee accountability, manage, and assess employees’ performance.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Achieve Well-Organised Financial Management for IT Services</a>
                </h5>
                <p>We integrate Financial Management functionality into your ITSM platform. This integration helps you effectively use your available resources, get an overview of the cost of your IT processes, and ensure your IT Service Operations are executed within your budgetary constraints.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Overcome IT Service Issues Due to Mergers and Acquisitions</a>
                </h5>
                <p>Managing mergers and acquisitions may be challenging, as you need to add more users, locations, and departments to your current instance. We perform the desired digital workload migrations and integrations to unite additional business units to your IT infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area pt-100 bg-fff4f8  pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">
              How Do We Execute ITSM Consulting for Your Business?
            </h2>
            <p>We understand that your business may be in different stages of digital transformation. We execute our ITSM Consulting through some well-designed modules to choose from. You can consult us at the beginning stage, decide an ITSM platform, design an ITSM platform for you, or opt for ongoing improvements. Let’s discover our ITSM Consulting Modules:</p>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <i className="flaticon-assets"></i>
                </div>
                <h3 className="nunito-font">
                  <a>Problem-Centric ITSM Consulting</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>You come up with a problem related to your IT Service Management, and our ITSM experts resolve it effectively.</p>
                <h6>Problems Occurred Due to Outsourcing or Related to Employee Performance</h6>
                <p className="w-100" style={{ textAlign: "justify" }}>We help you bring together different IT departments, business units, vendors, and employees at different business units and locations through powerful integrations. We configure your Service Level Agreements and help you synchronise workflow for different operations or departments.</p>
                <h6>Improvement in User Experience</h6>
                <p className="w-100" style={{ textAlign: "justify" }}>Our ITSM experts help you enhance the user experience by setting up surveys and helping you make the most effective use of available service portals and knowledge base at your organisation.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="services-box">
                <div className="icon">
                  <i className="flaticon-mortgage"></i>
                </div>
                <h3 className="nunito-font">
                  <a>Selecting an Appropriate ITSM Platform</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our ITSM experts discuss your requirements and goals and suggest the best-suited ITSM platform for your business. We assess and present various ITSM solutions and collaboratively choose the most appropriate platform as per your business-specific needs.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <i className="flaticon-challenges"></i>
                </div>
                <h3 className="nunito-font">
                  <a>Implementation of the Desired ITSM Platform</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>If your company is clear about implementing a particular ITSM platform; however, lacks the technical expertise to make the most of the features, we customise the ITSM platform as per your needs.</p>
                <ul className="overview-list">
                  <li>•	We work closely with you to study your IT infrastructure, nature and size of business, requirements from an ITSM platform, and your aims.</li>
                  <li>•	We coordinate with your teams to determine business-specific requirements.</li>
                  <li>•	Deploy the functionality through the desired ITSM platform.</li>
                  <li>•	Provide prompt technical support to your system and train your workforce to use the ITSM platform effectively.</li>
                </ul>
                <p>We design, develop, customise, deploy, and support your desired ITSM platform.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="services-box">
                <div className="icon">
                  <i className="flaticon-gold-bar"></i>
                </div>
                <h3 className="nunito-font">
                  <a>•	Improving Your ITSM as a Continuous Process</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our ITSM experts examine your IT infrastructure for security, productivity, cost-effectiveness, and many other parameters. They find out the flaws in your IT Service Management process and eliminate the root causes of such irregularities through the best solutions. We execute a multi-dimensional approach to improve your ITSM:</p>
                <ul className="overview-list">
                  <li>•	Determining the problem or weak point in your system, workflow, and process.</li>
                  <li>•	Design and implement a long-term, effective solution to eliminate these issues.</li>
                  <li>•	Assessing the actual results of implementation and rectifying any shortfalls.</li>
                  <li>•	Rendering continuous, prompt technical support to resolve any technical difficulties.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h2 className="nunito-font">
                  Technologies We Implement
                </h2>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies are leading enterprise IT service management partners globally. We are certified vendors for various world-renowned ITSM solutions. We help you choose the best-suited ITSM platform, design, customise, develop, and implement them as per your business needs.</p>
                <h6>We are Technology Partners with leading tech brands, such as:</h6>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    ServiceNow
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    BMC Suite of Products

                  </li>

                  <h6>We also provide Cloud Strategy Consulting and Implementation:</h6>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    •	AWS
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    •	Microsoft Azure
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    •	IBM
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    •	Google Cloud
                  </li>
                </ul>
              </div>
              <h4>Discuss Your ITSM Requirements</h4>
              <p>Get in touch with our ITSM experts today to discuss your business-specific needs related to ITSM. We will get back to you to discuss your pain points, resolve your queries, and discuss what best we offer.</p>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={manWithSon} alt="man-with-son-image" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default Services;