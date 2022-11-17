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
      <PageTitle page="Enterprise Apps" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Enterprise Apps" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4>Revolutionary Enterprise App Solutions for Excellent Experiences</h4>
                <p style={{ textAlign: "justify" }}>Your business needs digital solutions to simplify and centralise your operations and establish consistent connections with your valued customers. We build revolutionary enterprise apps to help your business go digital! We keep Customer Experience (CX) at the centre when developing enterprise application solutions for your business-specific needs.</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    We deliver a modern end-to-end enterprise app platform and empower your business.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We develop enterprise apps for various purposes and integrate them with your existing business applications and software solutions.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We build custom enterprise apps to boost your productivity and for workflow orchestration.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We also develop enterprise communication apps for internal communication and Customer Relationship Management (CRM).
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We develop effective Enterprise Search Solutions to help you store, manage, and access business-related critical data instantly and securely.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We modernise your enterprise applications by leveraging our app development and cloud computing expertise.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Our enterprise app development experts always deliver the best enterprise apps. We design enterprise apps that boost customer experience and help you retain your customers in the long run.
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
                <h3>SPM Global Technologies
                  Your Most Trusted Enterprise App Services & Consulting Partner!
                </h3>
                <Image src={dummyimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">
              Contact Our Enterprise App Experts Today!
            </h2>
            <h4> How Our Enterprise App Services Work</h4>
            <p>We adopt a multidimensional approach to cater to your enterprise app-related needs. We analyse the nature and size of your business and suggest the most appropriate technologies you can adopt.</p>
          </div>
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
                <h4 className="nunito-font">
                  Enterprise App Consulting
                </h4>
                <p style={{ textAlign: "justify" }}>Our enterprise app experts study your requirements and closely work with you to help you select the best technologies. We remain with you throughout the process of planning, designing, developing, and deploying enterprise apps for your business.</p>
                <h4 className="nunito-font">
                  Thorough Analysis of Your Requirements
                </h4>
                <p style={{ textAlign: "justify" }}>We understand that there cannot be one standard app to resolve your business-specific needs and issues. We analyse your requirements and present various alternatives. We suggest the most appropriate enterprise application solutions for your IT infrastructure.</p>
                <h4 className="nunito-font">
                  App Development & Testing Roadmap
                </h4>
                <p style={{ textAlign: "justify" }}>Our talented product management team draws a roadmap for the enterprise app-building process. We plan various stages of development by leveraging resources and assigning tasks to the best team.</p>
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
                <h4 className="nunito-font">
                  Agile Execution of App Development Process
                </h4>
                <p style={{ textAlign: "justify" }}>We execute enterprise app development by adopting agile work culture. Developers, testers, user experience designers, user interface designers, coders, and programmers work autonomously by aligning with the project goals.</p>
                <h4 className="nunito-font">
                  App Security Testing
                </h4>
                <p style={{ textAlign: "justify" }}>We conduct security testing of enterprise apps to ensure error-free, secure operation. We encrypt customer data and business-specific sensitive information by deploying modern app data security measures.</p>
                <p style={{ textAlign: "justify" }}>We empower your business with our enterprise application management services. Your business can effectively optimise time and manage employee performance, and resources.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
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
          <div className="section-title">
            <h2 className="nunito-font">Why Choose Us as Your Enterprise App Partner?</h2>
            <span className="sub-title purple-color">Consider the following strengths and select us as your Enterprise App Consulting, Development, Support, and Management Partner:</span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{height: '500px'}}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>We Know the Technicalities</a>
                </h5>
                <p>We understand various complex technical aspects of enterprise apps, their development, and the value they add to businesses. We have an adequate workforce certified in different cloud computing technologies and other IT and app development domains. You can rest assured that your enterprise apps will be built by the most talented teams.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{height: '500px'}}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>We Are Highly Experienced</a>
                </h5>
                <p>We have been a globally recognised brand in enterprise application management services for over a decade. We pour our extensive experience into every enterprise app development project and consulting service. We build the best enterprise apps and ensure your business makes the most out of them.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{height: '500px'}}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>We Are Flexible</a>
                </h5>
                <p>We provide enterprise app consulting, development, and management services at your convenience. We can discuss and work out a mode of alliance that suits your budget, urgency, standards, and expectations.</p>
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
              <div className="single-services-item style-two" style={{height: '550px'}}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Round the Clock Technical Support</a>
                </h5>
                <p>Our technical support team will be happy to resolve any technical issues with the enterprise apps with minimal downtime. We ensure that your business enjoys the features and benefits of enterprise apps uninterruptedly.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{height: '550px'}}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Sophisticated Access Control</a>
                </h5>
                <p>You can make your enterprise apps accessible to the desired new departments, business units across locations, and users through a single dashboard.
                  We deploy the most intelligent enterprise app platform to help you get real-time notifications about the users, devices, and control access.
                  We deliver cost-effective, risk-free, simplistic, and futuristic enterprise apps. You don’t need to worry about the IT infrastructure, maintenance, and operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75 bg-fff4f8">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">
              Enterprise Application Management
            </h2>
            <p>We develop and deploy an enterprise application management system to ensure:</p>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{height: '200px'}}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>The enterprise apps perform to their best.</a>
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{height: '200px'}}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Applications work most efficiently.</a>
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{height: '200px'}}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>The user experience delivered by the apps is excellent.</a>
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{height: '200px'}}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>The integrations with business back-office functions, such as database, ERP, CRM, SaaS-based solutions, work effectively.</a>
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
                <p style={{ textAlign: "justify" }}>You don’t need to employ a technical workforce for application management, as we perform this crucial task through our end. We leverage modern enterprise application management tools. We help you augment your enterprise app management capabilities.</p>
                <p style={{ textAlign: "justify" }}>We maintain, monitor, and enhance your enterprise apps by resolving bugs from time to time. We remain with you throughout your digital transformation journey. We also ensure that your app usage is trouble-free, and the enterprise app serves as a centralised platform to govern your business.</p>
                <h3>Discuss Your Enterprise App Requirements</h3>
                <p style={{ textAlign: "justify" }}>Please feel free to contact us by specifying your requirements for consulting, adoption, development, and management of world-class enterprise apps. Our enterprise app experts will be happy to resolve your queries and let you know what best we offer.</p>
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

      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default Services;