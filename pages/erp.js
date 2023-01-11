import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";
import Service1 from "@/components/Contact/Service1";

import goalImg from "@/public/images/goal.png";
import manWithSon from "@/public/images/man-with-son.png";
import bmc from "@/public/images/icon/bmc.png";
import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";

const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "ERP" />
      <PageTitle page="ERP" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="ERP" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>SPM Global Technologies 

Most Reliable Custom ERP Solution Company 

 </h3>
                <p style={{ textAlign: "justify" }}>We develop and deploy custom Enterprise Resource Planning (ERP) Solutions for all sizes of businesses. Our ERP development aims at bringing all your business operations into a single platform to enable data-driven decision-making. .</p>
                <p style={{ textAlign: "justify" }}>We are  <b>ERP Service Providers </b>offering custom ERP solutions to your business-specific needs and making them scalable to cater to your changing needs. Choose us as your <b> ERP Consultant  </b>to obtain deep visibility into all your business operations, orchestrate and streamline workflows and information sharing, and reduce the overall business costs. </p>
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
                   

Why Choose SPM Global Technologies for Custom ERP Development 
                </h3>
                <p style={{ textAlign: "justify" }}>•	SPM Global Technologies has been the most trusted brand in IT Solutions Development and ITSM for over a decade. </p>
                <p style={{ textAlign: "justify" }}>•	We recruit IT experts in ERP Solution development, customisation, and implementation to handle your projects.</p>
                <p style={{ textAlign: "justify" }}>•	Our ERP Managed Services keep you covered for all your functional necessities to help you manage your business operations seamlessly and effectively.</p>
                <p style={{ textAlign: "justify" }}>•	We have developed and deployed Custom ERP Solutions for many clients across various industries. </p>
                <p style={{ textAlign: "justify" }}>•	We offer excellent ERP Support Services to resolve your technical queries and troubleshoot deployment, integration, or other technical difficulties. .</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">We Develop Custom ERP Modules for Various Functions </h2>
            <p>We help you automate workflows and increase the productivity of your business by providing custom ERP solutions per your operational requirements. As a well-known <b>ERP Third Party Vendor, </b>we help you get the desired features to manage your operations. 
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
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Project Management </a>
                </h5>
                <p>Project planning, work allocation, progress monitoring, and collaboration tools, like file-sharing, and instant chat, for effective project management. </p>
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
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Production Management</a>
                </h5>
                <p>We design ERP software for production planning, job scheduling, asset management, and control. We also provide quality assurance and product lifecycle management sub-modules per your needs.</p>
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
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Supply-Chain Management </a>
                </h5>
                <p>Automation for sourcing and procurement; 

vendor management, inventory management, logistics management and control.</p>
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
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Knowledge Management </a>
                </h5>
                <p>Our ERP solution offers easy knowledge sharing, collaboration tools, automated knowledge segmentation, and an effective search engine connected to central knowledge storage</p>
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
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Document Management</a>
                </h5>
                <p>We offer unified storage for documents of various formats, easy document sharing, retrieval, and document templates for faster document creation. .</p>
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
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Data Analytics & Business Intelligence</a>
                </h5>
                <p>Measure, monitor and improve the performance of your business operations through powerful data analytics and capabilities to envision .</p>
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
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Sales & Marketing </a>
                </h5>
                <p>Plan info-driven marketing campaigns, get visibility into the sales process, effective communication with the customers, and automation of order management.  .</p>
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
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Finance Management & Accounting</a>
                </h5>
                <p>We develop ERP for planning and assessing finances, visibility into liabilities and receivable amounts, billing automation, and digital ledger management. .</p>
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
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Human Resource Management  </a>
                </h5>
                <p>Manage your human resource policy and personnel management activities like recruitment, onboarding, attendance, training, payroll, and employee requests.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="services-area pt-100 bg-fff4f8  pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">
            Benefits of Our ERP Solutions 
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
                  <a>Increased Effective Communication</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our ERP software integrates data from various divisions of your business to track significant business events and helps you make data-driven decisions. ERP Solution serves as a single source of truth to help employees and stakeholders report progress, notify inventory statuses, and notify success. .</p>
                <h6>All-in-one Solution </h6>
                <p className="w-100" style={{ textAlign: "justify" }}>Your business doesn’t need to subscribe to different tools for different functionalities. Our ERP Solution serves as a centralised platform to conveniently monitor various departments of your company. </p>
                <h6>Keeps Your Teams on One Page</h6>
                <p className="w-100" style={{ textAlign: "justify" }}>ERP Solution helps you convey your business goals to all teams and track their progress. Thus, your teams can work with creative freedom while aligning with the objectives and budgetary aspects..</p>
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
                  <a>Helps Standardise Your Manufacturing Process </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our ERP Solution makes it easy to share manufacturing processes and best practices per changing needs. ERP software allows your teams to store mission-critical information, like manuals, statistics, and blueprints for every manufacturing process, in a single, secure storage. </p>
                <h6>Effective Inventory Management </h6>
                <p className="w-100" style={{ textAlign: "justify" }}>Your business can hold inventories practically essential for your business processes and save on unnecessary investments through our ERP software. Track your assets, and implement biometric verification to manage your inventory.</p>
                <h6>Trouble-free Human Resource Management  </h6>
                <p className="w-100" style={{ textAlign: "justify" }}>Our ERP Solution simplifies HR Management for your organisation, as you can implement a time clock and other tools for easy attendance, payroll, and benefits management. You can standardise and simplify various HR processes .</p>
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
                  <a>Workflow Visibility and Business Intelligence </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Your managers and leaders can easily track allocation, progress of work, and performance of various business functions. Similarly, leaders can get real-time insights to make better, data-driven decisions for amending strategies at the right time.</p>
                
                <h6>Flexibility and Scalability   </h6>
                <p className="w-100" style={{ textAlign: "justify" }}>Our ERP Solutions allow you to support unique processes and objectives and create business-specific workflows and automated reporting systems. Our ERP Solution enhances your company’s innovation and creativity. At the same time, it caters to your present and future needs by adapting to operational changes.  .</p>
                  
                
                
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              
              data-aos-duration="1200"
              data-aos-delay="200"
            >
            <h3><center>Our ERP Service Options </center> </h3>
              <div className="services-box">
                <div className="icon">
                  <i className="flaticon-gold-bar"></i>
                </div>
               
                <h3 className="nunito-font">
                
                  <a>	Developing an ERP Module </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}></p>
                <ul className="overview-list">
                  <li>•We work on the architecture, UI & UX Design of an ERP Module. .</li>
                  <li>•	We develop the desired ERP Module by adopting the latest technology. .</li>
                  <li>•	We conduct manual and automated testing and quality assurance activities.</li>
                  <li>•	We troubleshoot and service the ERP module we deliver. </li>
                </ul>
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
                
                  <a>	Developing a Complete ERP System    </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}></p>
                <ul className="overview-list">
                  <li>•We thoroughly analyse your business  .</li>
                  <li>•	Develop end-to-end ERP Software  .</li>
                  <li>•	Migrate your digital workload – based on the implementation method you choose: Cloud-based, On-premise, or Hybrid. </li>
                  <li>•	Integrate the ERP Solution with your business apps.  </li>
                  <li>•	In-depth QA and testing   </li>
                  <li>•	Technical support and service.   </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              
              data-aos-duration="1200"
              data-aos-delay="200"
            >
           <h3><center>ERP Development Service Pricing Models </center> </h3>
              <div className="services-box">
                <div className="icon">
                  <i className="flaticon-gold-bar"></i>
                </div>
               
                <h3 className="nunito-font">
                
                  <a>	Fixed Price Model    </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>If your project scope is well-defined, we can divide your project into phases and estimate the price for these phases separately.</p>
                <h3 className="nunito-font">
                
                  <a>	Productive Time Capping Model     </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>If your project scope is well-defined, we can divide your project into phases and estimate the price for these phases separately.</p>

                {/* <ul className="overview-list">
                  <li>•We thoroughly analyse your business  .</li>
                  <li>•	Develop end-to-end ERP Software  .</li>
                  <li>•	Migrate your digital workload – based on the implementation method you choose: Cloud-based, On-premise, or Hybrid. </li>
                  <li>•	Integrate the ERP Solution with your business apps.  </li>
                </ul> */}
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
                    	Microsoft Azure
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
              <br></br>
              <h4>Seamless and Effective Integrations </h4>
              {/* <p>Get in touch with our ITSM experts today to discuss your business-specific needs related to ITSM. We will get back to you to discuss your pain points, resolve your queries, and discuss what best we offer.</p> */}
              <ul className="overview-list">
                  <li>•Popular platforms like Salesforce, MS Office 365, and Magento.  .</li>
                  <li>•	Secured API traffic and implementation of policies with ease through well-thought security policies. </li>
                  <li>•	Effective integration with ERP modules through APIs. </li>
                  <li>•	Smooth Blockchain and IoT integrations as per your needs.   </li>
                </ul>

                <br></br>
              <h4>Manage Your Business from Almost Anywhere!  </h4>
              {/* <p>Get in touch with our ITSM experts today to discuss your business-specific needs related to ITSM. We will get back to you to discuss your pain points, resolve your queries, and discuss what best we offer.</p> */}
              <ul className="overview-list">
                  <li>•Easily accessible ERP solutions through different devices and modes.  .</li>
                  <li>•	Full-function Web Application.  </li>
                  <li>•	Desktop App for some software modules with a complicated user interface.  </li>
                  <li>•	Workflow automation notifications, operations monitoring dashboards, and more on Mobile Apps.    </li>

                  <br></br>
                  <p><center><h6><center>For improved user experience, we focus on the intuitive user interface (UI) and splendid user experience (UX) design for various ERP App versions.</center> </h6></center> </p>
                </ul>


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
      </div>


      

      <SubscribeStyle1 />
      <div className="border-tb" />
      <Service1 />

      <FooterOne />
    </>
  );
};

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=erp&populate=*`
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