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

import goalImg from "@/public/images/goal.png";
import manWithSon from "@/public/images/man-with-son.png";
import bmc from "@/public/images/icon/bmc.png";
import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";

const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "CRM" />
      <PageTitle page="CRM" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="CRM" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>Enhance Customer Experience and Optimize Customer Relationship Management Outcomes 

Get CRM Services from SPM Global Technologies </h3>
                <p style={{ textAlign: "justify" }}>14.6% increase in productivity . $8.71 average ROI for every dollar spent on CRM.Our CRM Solutions aim at automating your sales, marketing, and service activities while reducing their overall cost. We offer a customer relationship management system for small businesses and any other size and nature of business. Get the most effective communication channel to serve your customers better and increase your profitability. 

  Request CRM Services Today!     </p>
                <p style={{ textAlign: "justify" }}>
                
                <h4>Why Choose Us for CRM Services? </h4> 
                <p style={{ textAlign: "justify" }}> •Over a decade’s successful track record in IT & ITSM services.   </p>
                <p style={{ textAlign: "justify" }}>•Extensive experience in business client management software consulting and deployment.</p>
                <p style={{ textAlign: "justify" }}>•	Hundreds of IT experts in multiple domains to execute your CRM projects.</p>
                <p style={{ textAlign: "justify" }}>•	Service Alliance with globally acclaimed tech giants, like Salesforce, Microsoft, and more. .</p>
                <p style={{ textAlign: "justify" }}>•	Expertise in building and implementing CRM solutions for various industries and different sizes of businesses.</p>





                
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
                <h3 className="nunito-font">
                Benefits of Customer Relationship Management Solutions for Your Business 
                </h3>
                <p style={{ textAlign: "justify" }}>•	A well-designed customer relationship management system for e-commerce businesses minimizes a large number of manual efforts across various departments, including sales, marketing, and customer service. </p>
                <p style={{ textAlign: "justify" }}>•	CRM solution boosts the overall productivity of your workforce as you get a robust, centralized communication platform for internal and customer interactions..</p>
                <p style={{ textAlign: "justify" }}>•	CRM tools improve sales productivity through excellent conversion rates through various digital marketing activities.</p>
                <p style={{ textAlign: "justify" }}>•	Reduced manual efforts, better synchronization, and prompt responses to customers improve your Return on Investment (ROI).</p>
                <p style={{ textAlign: "justify" }}>•	CRM tools for customer service drastically reduce customer service tickets. </p>

                <h3 className="nunito-font">
                Your Business Gets Excellent ROI 
                </h3>
                <p style={{ textAlign: "justify" }}>•The usual payback period for your investment in a CRM solution is tentatively 10 months! We help you achieve this through:  </p>
                <p style={{ textAlign: "justify" }}>•	Effective integration and alignment of the CRM solution designed for you with your business operations. </p>
                <p style={{ textAlign: "justify" }}>•	Workflow automation and better monitoring reduce manual efforts substantially.</p>
                <p style={{ textAlign: "justify" }}>•	You get trouble-free, unified access to customer data for further processing and business decisions. </p>
                <p style={{ textAlign: "justify" }}>•	CRM solutions bring a great deal of ease in comprehensive customer analysis for improving sales graphs. </p>



              </div>
            </div>
          </div>
        </div>
      </div>

      



      <div className="services-area pt-100 bg-fff4f8  pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">
            Wide Range of CRM Services We Offer 
            </h2>
          </div>
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
                <h3 className="nunito-font">
                  <a>CRM Consulting </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We provide consulting from digital process adoption for your sales, marketing, and service activities. We remain with you as CRM Consulting Partner till your project success. </p>
                
                <p className="w-100" style={{ textAlign: "justify" }}> 
          We also provide consulting services for drawing a strategy for your CRM deployment, revamp, and migration. 
           </p>
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
                <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>CRM Testing </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We conduct comprehensive testing of your CRM solution for integration, performance, security, and usability.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Through our CRM testing services, we provide expert insights into your CRM functioning, and suggest feasible ways to improve your existing CRM solution .</p>

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
                <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>CRM Implementation </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We leverage the globally acclaimed platforms, like Microsoft Dynamics 365 and Salesforce to deploy the CRM solution for your business. </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We are one-stop solution for your CRM deployment needs, as we cover consulting, customization, configuration, migration, and implementation of the CRM solution. </p>

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
                <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>CRM Audit, Evaluation & Support </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We provide complete support, including daily administration, 24/7 CRM system monitoring, data management, periodical system health checks, user help desk. </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We evaluate your CRM system and troubleshoot when required. </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Our CRM Support Services ensure uninterrupted functioning of your CRM as per your changing needs.  </p>


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
                  <a>Custom CRM Development </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our Custom CRM Development Services include:  </p>
                <ul className="overview-list">
                  <li>•	A thorough business analysis,  </li>
                  <li>•	Develop a custom CRM solution from scratch.  </li>
                  <li>•	Conduct testing and quality assurance activities.  </li>
                  <li>•	Execute change management, risk management.</li>
                  <li>•	Migration of your legacy CRM or spreadsheets to the cloud, and  </li>
                  <li>•	Train your staff for the new CRM solution you adopt. </li>

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
                Technologies We Use for Developing CRM Solutions 
                </h2>
                <p style={{ textAlign: "justify" }}>Still, wondering about the ROI for your CRM Solution? We assess CRM feasibility and provide a precise estimate of your return on Investment for a CRM Solution designed by us.</p>
                <h6>Platforms: </h6>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Microsoft Dynamics 365 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce 
                  </li>
                  <br></br>
                  <br></br>
                  <h6>Custom CRM Development Backend</h6>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Microsoft .Net 

                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Java 

                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Php 

                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Python 

                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Golang 

                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Node.JS 

                  </li>

                  <h6>Custom CRM Development Frontend</h6>
                  <br></br>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    HTML 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    	CBS 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    JavaScript 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    ReactJS 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    AngularJS 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                  Vue.js 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Ember  
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    METEOR 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    ReactJS 
                  </li>
                  <br></br>
                  <br></br>

                  <h4>Industries for which We Develop and Implement Custom CRM Solutions </h4>
                  <br></br>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Banking CRM  
                  </li>


                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Accounting CRM 
                  </li>



                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Financial Services CRM  
                  </li>



                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Insurance CRM 
                  </li>



                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Retail CRM 
                  </li>


                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Hospitality CRM  
                  </li>



                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Consulting CRM  
                  </li>



                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    E-commerce CRM 
                  </li>


                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Manufacturing CRM  
                  </li>



                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Healthcare CRM  
                  </li>



                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Service Industry CRM  
                  </li>



                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Trading CRM  
                  </li>
                  <br></br>
                  <br></br>
                  <br></br>



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

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=crm&populate=*`
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