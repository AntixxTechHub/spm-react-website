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



import shapeImg8 from "@/public/images/shape/shape8.png";
import event from "@/public/images/event.jpg";
import itsm from "@/public/images/itsm.jpg";
import bmcheliximplementation from "@/public/images/bmcheliximplementation.jpg";
import dealing from "@/public/images/dealing.jpg";
import service from "@/public/images/service.jpg";
import change from "@/public/images/change.jpg";
import multicloud from "@/public/images/multi-cloud.jpg";
import insights from "@/public/images/insights.jpg";
import Knowledge from "@/public/images/Knowledge.jpg";
import helixdigitalworkplace from "@/public/images/helix-digital-workplace.jpg";
import Assets from "@/public/images/Assets.jpg"
import Configuration from "@/public/images/Configuration.jpg";

import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";





const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "Testing And QA" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Testing And QA" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                Empowering You to Meet Quality Parameters & Standards 
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>
                SPM Global Technologies Reliable Software Testing & QA Services Partner! We set the most credible QA process to control your product lifecycle for agile, waterfall, or hybrid. Our QA experts strive to enable you to get accurate product quality information by adopting the latest practices and technology in Software Testing & QA. 

                </p>
                
                <p className="w-100" style={{ textAlign: "justify" }}>
                  Leverage our  Software Quality Assurance & Testing expertise to draw, monitor, and meet your quality standards for your software solutions and apps. Our QA experts adopt a modern approach for Analytics in Testing Drive Priorities for QA. 
                </p>

                <p className="w-100" style={{ textAlign: "justify" }}> We accelerate your software testing processes by implementing automated testing methods. Our QA services aim to help you craft excellent software products that your customers will love within the stipulated project schedules.</p>
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

      <div className="goal-area with-top-border ptb-100">
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
                <h4 className="nunito-font">
                Importance of Automated Testing to Ensure Consistent Quality 
                </h4>
                
                <p className="w-100" style={{ textAlign: "justify" }}>Software testing and quality assurance play a critical role in the delivery of software products, applications, e-commerce portals, SaaS solutions, and IoT set-up involving software interacting with hardware components. 

It is crucial to work with Software Quality Assurance & Testing company like ours to have a team of experts on your side. We use the best technology and methods to test your product performance.  

 

We plan and execute a holistic software testing lifecycle without shortcuts for deliverables, including software, apps, IoT devices, and more. We perform our job within the timeframe through automated testing methods. 
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We understand the importance of complying with the industry standards and your clients’ guidelines. Our software testing & QA experts test every software component and module within your product to verify its performance and compliance with the functional requirements.  

 

Automated testing methodology accelerates the overall software testing process and helps you ensure excellent quality of software products adhering to the project schedule and deadlines. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area ptb-100 br-bottom-100">
        <div className="container">
          <div className="row align-items-center">
          <p><h2><b><center> How Our Testing & QA Service Lifecycle Works</center></b></h2> 

We ensure your software solutions meet your requirements by performing testing and quality assurance activities from the early stage of product development.  

 

Our software testing and QA experts don’t let any aspect of your software product be overlooked. Thus, you can rest assured that the software you deliver is of excellent quality and complies with its functional requirements.  </p>
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Strategizing </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Initially, our software testing & QA experts review your project documentation and discuss the scope of work, schedule, and proposed product roadmap with you. Accordingly, we create a testing plan to conduct necessary tests at different stages of your product lifecycle.
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Designing </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We design test cases based on the software components, modules, integrations, and the performance of the resulting system. If you need, we will suggest and deploy the necessary automated testing stack to accelerate the testing process. 
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Deployment </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We conduct the required tests, suggest quality assurance measures, and report the outcomes to you. We amend the test cases and scripts as and when required. We coordinate with your product management team to rectify flaws we find during the testing activities
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Regulation </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We verify if all the errors and flaws in your products are rectified. We check if the components and integrated system work per the functional requirements. We conduct regression testing to ensure the software product you develop complies with the agreed-upon standards
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Delivery </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We verify your scope of work, test your deliverables, and conduct user acceptance tests coordinating with your clients or end users. We perform a final test and report the outcomes to you.  
                    </p>
                  </li>
                  <br></br>
                  <br></br>

                  <h3><b><i><center>  Share Your Software Testing & QA Requirements with Our Experts Today! </center></i></b></h3>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="shape8">
          <Image src={shapeImg8} alt="shape" />
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Our Range of Software Testing & QA Services </h2>
            <span className="sub-title purple-color">We offer a wide range of QA Testing and Software Quality services to cover all stages of your product lifecycle, functionality, performance, and much more.
             Specify Your Testing & QA Needs Right Away! </span>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Functional Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>We configure software components and modules to derive test cases and adopt best testing and QA practices to conduct automated tests. We validate software components for their functional requirements and specifications. We adopt a well-designed testing process to verify if every software component meets the functionality needs. .</p>
                
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Sanity Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Our QA experts quickly test if any claim, calculation result, or produced outcome is rational and correct. The ultimate aim of our sanity testing is to ensure that the altered code works effectively.  .</p>
               
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Regression Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>After any change to the code, integration, or other mechanisms within your product, we conduct regression testing to ensure the software runs correctly and serves the functional requirements. .</p>
                
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Integration Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Our Software testing & QA experts conduct appropriate tests on the software components and modules as a group. We follow the best practices to evaluate the compliance of each software component and module with their functional necessities.  </p>
                
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>System Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>We conduct appropriate QA Testing and Software Quality attempts to ensure your complete integrated system works according to the set requirements. The validation of the entire system to comply with the specifications ensure effective interactions between different components for accurate functioning.</p>
                
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>User Acceptance Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>We provide QA & Technical Review Services to conduct user acceptance tests through your end users before the product moves into the production stage. UAT is usually the stage after internal testing before taking the software product to the production environment. 

</p>
                
              </div>
            </div>
           
            <p className="w-100" style={{ textAlign: "justify" }}><h2><center>Share Your Software Testing Needs with Us .</center></h2></p>
            <p className="w-100" style={{ textAlign: "justify" }}>If you are looking for a software testing and QA partner to help you craft and deliver the best software solutions, look no further and fill up the following form. Our experts will initiate a discussion with you to understand your requirements in detail. We will let you know what best we can do..</p>
          </div>
        </div>
      </div>

      
          <div className="section-title">
            <span className="sub-title dark-green-color">

            </span>
            <h2 className="nunito-font">
            Consult our Software Testing & QA Experts for Your Queries 
            </h2>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=testing-&-qa&populate=*`
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