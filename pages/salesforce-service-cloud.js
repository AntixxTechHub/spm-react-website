import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";


import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";


const Services = () => {
  return (
    <>
      <PageTitle page="Salesforce Service Cloud" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Salesforce Service Cloud" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p style={{ textAlign: "justify" }}>Welcome to SPM Global Technologies – Salesforce Service Cloud Service Providers & Service Cloud Vendors!
                  SPM Global Technologies is supporting the collective performance and growth rate of businesses in diverse sectors by providing customized Salesforce Service Cloud managed services and Service Cloud trainings over the years.
                </p>
                <h3 className="nunito-font">What is Lightning Salesforce Service Cloud?
                </h3>
                <p style={{ textAlign: "justify" }}>Service Cloud is the world’s leading customer relationship management (CRM) platform designed for sales professionals to help them streamline and automate service processes and workflows. The customizable features and capabilities help the businesses improve foster one-to-one marketing relationships with customers across multiple channels and devices. Salesforce Service Cloud Lightning listens and responds to customers concerns across all the key social platforms and route the case automatically to the available appropriate agent.</p>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies helps you with proven expertise as a Service Cloud consultant, Service Cloud support services provider and Service Cloud third party vendor to integrate, configure, and implement Salesforce Lightning Service Cloud with existing system in addition to providing Service Cloud trainings. Over the years, we have served numbers of commercial establishments, small to medium organizations, enterprise businesses, and others by integrating, implementing, configuring Salesforce Service Cloud technology. As a top-performing Service Cloud third-party vendor, we manage and support Service Cloud services to help you improve service quality and CRM effortlessly.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={dummyimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
                <Image src={dummyimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  Features & Functionalities of Salesforce Service
                </h3>
                <p style={{ textAlign: "justify" }}>Why Do You Need To Adapt Service Cloud? The long list of unmatched advanced features and functionalities makes Salesforce Service Cloud a must-have power to foster service management that enables the organizations to work with channel partners and customers with much improved efficiencies.
                </p>
                <p style={{ textAlign: "justify" }}>Functionally, when you think of Salesforce Service Cloud Vs Sales Cloud - Service Cloud meets the needs of customer service executives and their leaders, while Sales Cloud is designed for Sales Managers and Sales Executives.</p>
                <h6>The most benefited business sectors by adapting Service Cloud include:</h6>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    CPG/Retail
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Healthcare
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Public Sector
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Manufacturing
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Life Sciences
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Non-Profit
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Media
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Higher Ed
                </h5>
                <p style={{ textAlign: "justify" }}>Our highly experienced certified Salesforce Service Cloud experts optimize each feature and functionality in line with concerned objectives as well as to maximum ROI. The top ten key features and capabilities that make Service Cloud a must-have to increase retention, loyalty, sales, and satisfaction include:</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Case Management
                </h5>
                <p style={{ textAlign: "justify" }}>The feature facilitates the agents to use Service Console to manage multiple cases in parallel across multiple channels. Case management can be accessed through mobile apps; therefore, it frees the agents from geographical boundaries.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Service Process Automation
                </h5>
                <p style={{ textAlign: "justify" }}>Unique artificial intelligence (AI) automates the entire service and support process.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Omni Channel Routing
                </h5>
                <p style={{ textAlign: "justify" }}>It drives in a facility to automatically directing the cases and leads to a particular agent based on availability, capability, and required skill set. Service managers have complete view of routing and agents’ response to the routed cases and leads.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Computer Telephony Integration</a>
                </h3>
                <p style={{ textAlign: "justify" }}>CTI empowered with Service Cloud Einstein bots helps the organizations to manage service calls to and from customers more effectively in an effortless manner because the service professionals have complete data-enriched information about the customers readily available.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Asset & Order Management</a>
                </h3>
                <p style={{ textAlign: "justify" }}>The customer-first order management system is designed on #1 CRM –Salesforce. It automates order fulfillment, invoicing, shipment, supply chain workflow, payment capture, scaling etc.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Agent Workspace</a>
                </h3>
                <p style={{ textAlign: "justify" }}>The customizable comprehensive user interface (UI) supports the customer service agents by providing a range of data-driven analytics, customer views and productivity tools.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Knowledge Management</a>
                </h3>
                <p style={{ textAlign: "justify" }}>It helps the agents to access and create required resources with the help of the Salesforce Service Cloud knowledge base; the compiled information supports the agents to find the answer quickly and to render the services faster.
                </p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Seven Benefits of Salesforce Service Cloud- Why You Should Embrace Service Cloud:</a>
                </h3>
                <p style={{ textAlign: "justify" }}><strong>1.</strong> 26% customer retention increase</p>
                <p style={{ textAlign: "justify" }}><strong>2.</strong> 22% less support cost</p>
                <p style={{ textAlign: "justify" }}><strong>3.</strong> 28% agent productivity increase</p>
                <p style={{ textAlign: "justify" }}><strong>4.</strong> 31% faster resolution of cases</p>
                <p style={{ textAlign: "justify" }}><strong>5.</strong> 35% improvement in customer satisfaction</p>
                <p style={{ textAlign: "justify" }}><strong>6.</strong> A step-by-step process for faster service</p>
                <p style={{ textAlign: "justify" }}><strong>7.</strong> Service Cloud 360 helps to tap potential customers on their favorite channels</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Service Enablement with Service Analytics</a>
                </h3>
                <p style={{ textAlign: "justify" }}>A unified dashboard, empowered with Salesforce Chatter and Salesforce Einstein, facilitates the service managers to access the reports, backlog analysis, case history, case volume, chatbot performance, and agents’ activities / performances. Service Enablement lets the managers assess the gaps in process, supports, and resources that harm the productivity and performance of service professionals.
                </p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Automation with Macros</a>
                </h3>
                <p style={{ textAlign: "justify" }}>The feature saves considerable time that organizations waste on repetitive tasks for CRM. Our Salesforce Service Cloud support professionals automate your customer service tasks by configuring MuleSoft solutions to integrate ERP, CRM, and other applications.
                </p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Field Service</a>
                </h3>
                <p style={{ textAlign: "justify" }}>It allows the sales and service professionals to cooperate better with field executives. Field service integration allows appointing the field service workers as well as to manage their workload and track the progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h3 className="nunito-font">
              Salesforce Service Cloud Support Services-We Offer with a Difference
            </h3>
            <p style={{ textAlign: "justify" }}>SPM Global Technologies is a prominent entity in Salesforce support & maintenance services delivered across a range of business sectors following B2C and/or B2B model/s. Our years of experience in providing tailor-made Service Cloud managed services to global clients as a service provider and Service Cloud consultant helps us understand your concerns in-depth. The range of Service Cloud support services, we offer assures you of the best experience of advancing and improving strategic customer services at least investment, including but not limited to:</p>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '200px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Salesforce Service Cloud Integration</a>
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '200px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Service Cloud Implementation</a>
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '200px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Salesforce Service Cloud Consulting</a>
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '200px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Service Cloud Customization Services</a>
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '200px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Service Cloud Support Services</a>
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '200px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>On the Site Service Cloud Salesforce Trainings</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>Salesforce Service Cloud Certification Trainings- We Conduct the Best:</h3>
                <p style={{ textAlign: "justify" }}>As being one of the top Service Cloud vendors, SPM Global Technologies conducts robust Service Cloud certification trainings allowing you to choose instructor-led training or self-paced learning module. Our experienced Service Cloud trainers follow the robust curriculum to help you pass the relevant Salesforce Service Cloud certification exam in the first go and to get globally acknowledged Salesforce credentials for high in-demand job roles like:
                </p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Service Cloud Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Field Services Lightning Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Platform Developer I
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified System Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Application Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Pardot Consultant/Pardot Specialist
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Technical Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Mobile Solutions Architecture Designer
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={dummyimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
                <Image src={dummyimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  Why Choose SPM Global Technologies as Service Cloud Managed Services Provider
                </h3>
                <p style={{ textAlign: "justify" }}>We have experience and global exposure in creating blueprints for our customer’s optimized CRM improvement needs so that their services are prompt, scalable, streamlined, automated, and efficient. We have proven capabilities for task-oriented roles like Salesforce Service Cloud service providers, Service Cloud Consultants, Service Cloud third-party vendors, etc. We have many reasons to be your preferred partner for embracing Salesforce Service Cloud:</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    In-house certified Salesforce Service Cloud experts for quick resolution of issues
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Experienced Service Cloud specialists to understand your improvement plans
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Dedicated Service Cloud professional consultants for optimizing the Service Cloud integration
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Industry best security of sensitive information
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Fixed-price model
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Service Cloud monitoring managers to ensure best-in-class quality customer service
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Authorized Service Cloud third-party vendor for cost-effective trainings and remote support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default Services;