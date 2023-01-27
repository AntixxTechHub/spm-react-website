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


import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";


{/* ------------------------------Faq Q/A--------------------------------- */ }
const questionsAnswers = [
  {
    question: "Q1:Is SAP BusinessObjects a reporting tool?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: SAP BusinessObjects is a BI suite of tools that helps for data reporting, sharing, and visualization. On-premise BI excellence SAP BO Platform transforms the available data into valuable insights accessible anytime from anywhere.  

        
      </p>

  },
  {
    question: "Q2: Do you have expertise in the integration of the latest version of SAP BO?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>SAP BI 4.3 – version 14.3.0.3532 was released on June 13, 2020. It is the biggest evolution of SAP BI 4.3 for enhanced user experience. We have all the capabilities to leverage the new features of the latest SAP BI 4.3 – version like Fiori Launchpad, SAP HANA Online Mode, UI Customization etc.  
    
      </p>
  },
  {
    question: "Q3:What is the use of Web Intelligence feature of SAP BusinessObjects?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Web Intelligence (Webi) is a web browser. It allows performing produce customized reports, analyze, and share the reports on SAP Webi or export these reports to Excel/PDF. 
      </p>
  },
  {
    question: "Q4:What is SAP BusinessObjects Explorer in SAP BusinessObjects BI",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>The latest version of SAP BusinessObjects contains SAP BusinessObjects Explorer. It is a data-exploring tool designed. It facilitates the users to explore volumetric data available at various sources and to create data visualization reports that could be shared with intended users to help them make well-informed decisions.        </p>
  },
  
  
  {
    question: "Q5: Can I view Lumira documents on Launchpad in SAP BusinessObjects",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>  Yes, you can view Lumira documents in the BI Launchpad provided you have installed Lumira Add On to SAP BusinessObjects BI platform.   </p>
  },
  
];
{/* ------------------------------End Faq Q/A--------------------------------- */ }





const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "SAP Business Objects" />
      <PageTitle page="SAP Business Objects " />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="SAP Business Objects " />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
              <h3 className="nunito-font">
              SPM Global Technologies- A SAP Business Objects Consultant & Managed Services Provider     
                </h3>
                <p style={{ textAlign: "justify" }}>SAP BusinessObjects BI is a comprehensive business intelligence suite that facilitates data visualization, sharing, and reporting to make data-driven decisions. SPM Global Technologies, as being the pioneer SAP BusinessObjects service providers with years’ experience, provides objective-oriented solutions to integrate SAP Business objects.  
                </p>

                <h3 className="nunito-font">
                What is SAP BusinessObjects Used?     
                </h3>

                <p style={{ textAlign: "justify" }}> Also known as SAP BO, the world-class enterprise software platform empowers enterprises for simplified real-time reporting and metric-based analytical business intelligence (BI). Built-in several reporting applications help the users to access and explore data, conduct analytics, information sharing and creating reports.

                </p>


                <p style={{ textAlign: "justify" }}>Better decisions, driven by the SAP BusinessObjects, help the businesses to perform better through optimized operations. As an SAP Business Objects consultant, we help you implement SAP business intelligence solutions to improve competencies through improved operations.       

                </p>

                

                

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP CRM Sales  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAM CRM Marketing 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP CRM Analytics Analytics. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP CRM Service  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP CRM Web Channel  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP CRM Interaction Center IC  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP Hybris 
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
              <MediaImage name="SAP Business Objects Consultant.jpg" data={seo} />
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
              <MediaImage name="SAP BO 3rd- Party Vendor.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                
                <h3 className="nunito-font">
                What We Offer As SAP BusinessObjects Consultant & SAP BO 3rd- Party Vendor:     
                </h3>
                <p style={{ textAlign: "justify" }}>Since its introduction, SAP BusinessObjects is beefing up its globally acknowledged technical excellence in data analytics roster with time-tested effectiveness and user-friendliness of HANA, Lumira, and Cloud for Analytics etc. As the leading SAP Business Objects service providers and SAP BO consultant, we offer a range of tailor-made services to address your particular concerns for BI. 
                </p>

                <p style={{ textAlign: "justify" }}>The SAP BusinessObjects BI experts at SPM Global Technologies maximize the software investment with maximum cost savings and custom-to applications service offerings. You can trust the capabilities of SPM Global to deliver the industry-best SAP BusinessObjects BI services for-     
                </p>

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Migration and conversion  
                  </li>


                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP data warehouse modeling                   </li>
                  

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP BO modeling                   </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP ERP integration 
                  </li>
                  

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Platform deployment                   </li>
                  

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Data quality management & data governance  </li>
                  

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Custom to application reporting & analysis  </li>
                  

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Maintenance & distribution    </li>

                    
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Gap analysis and health check   </li>
                  </ul>
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
                <h3 className="nunito-font">
                Nine Benefits of SAP Business Objects Managed Services:  
                </h3>
                <p style={{ textAlign: "justify" }}>Formally known as BOBJ, SAP BusinessObjects BI deploys business intelligence to projects to help the businesses get predictive analytics without depending on data analysts. Instead of storing data at an application level, the front-end BI platform SAP BO integrates data available at different back-end sources. Is it good for me to integrate SAP BusinessObjects solution? How will SAP Business Objects support services help my organization to perform better?    </p>
                
                <span>The following nine key benefits of SAP BusinessObjects help you decide to outsource SAP Business Objects managed services with the confidence of getting justified ROI: .</span>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Easy to use for end-users because of drag and drop facility  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Information insights with clarity through objective-oriented reports creations  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Better Streamlined BI operations driven by metrics- oriented decisions
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Integrated robust security 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Uniformed information for everyone accessible from multiple devices                    </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Strengthens collaboration in team members                    </li>


                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Insights to continually improve business resiliency                   </li>


                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Continually improves competitiveness with power of data                   </li>


                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Prediction to minimize risk                     </li>
                  
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              {/* <MediaImage name="goal2.jpg" data={seo} /> */}
              <MediaImage name="Nine Benefits of SAP Business Objects Managed Services.jpg" data={seo} />
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
              <MediaImage name="Career-Oriented SAP BusinessObjects Training.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                
                <h3 className="nunito-font">Career-Oriented SAP BusinessObjects Training      
                </h3>
                <p style={{ textAlign: "justify" }}>We have in-house highly trained skills to maximize the benefits of SAP BusinessObjects tools to help you achieve sustainable growth at the least cost. Get in touch with our SAP BusinessObjects experts for customized integration of BusinessObjects Dashboard, Lumira, BusinessObjects Design Studio, BusinessObjects Analysis MS Office, Crystal Reports, BusinessObjects BI Platform, BO Mobile, BusinessObjects Explorer etc.  
                </p>

                <p style={{ textAlign: "justify" }}>As being the best performing SAP Business objects third party vendor, we conduct comprehensive product-oriented SAP BusinessObjects trainings also. You can choose the best from a range of SAP BusinessObjects training for your team to start a journey towards becoming an SAP empowered organization. SAP BusinessObjects Business Intelligence training helps your team to interpret collected data and to make data-driven business decisions. Five top SAP BusinessObjects trainings, we conduct to help you secure a globally recognized SAP BusinessObjects BI certification, are     
                </p>

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP for Beginners  
                  </li>


                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP Business Analytics Essential                 </li>
                  

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP Basis Essential                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP Project Essentials- SAP S/4HANA & SAP ERP                   </li>
                  

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP Analytics Cloud                   </li>
                
                  
                  </ul>
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
              <h3 className="nunito-font">
              Why Choose SPM Global Technologies As SAP Businessobjects Services Provider & Consultant:                  </h3>
                <p style={{ textAlign: "justify" }}>We are providing quality-best SAP BusinessObjects services professionally planned as per the client’s requirements for over the years. Our experts analyze the requirements, scope for change, and constraints before charting out the best roadmap for SAP BusinessObjects integration.    
                </p>

                <p style={{ textAlign: "justify" }}> As a prominent ITSM company in India, we have the best-experienced SAP BusinessObjects specialists with insights to – what is required, why it is required, what should be delivered, how should be delivered, how much it will be beneficial. Over the years, SPM Global Technologies has become a preferred choice of businesses looking for a dependable SAP BusinessObjects service provider because we offer-

                </p>

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Low-cost SAP BusinessObjects consultancy </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Turnkey SAP BusinessObjects solutions </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Comprehensive support services </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Wide range of objective-oriented/tool oriented SAP BI solution  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Virtual SAP BusinessObjects trainings  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Competitively-priced support and services   </li>
                 

                 
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Turnkey SAP Business Object Solution.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div> 
<div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">SAP BusinessObjects 4.3 Sp1 Features Leveraged by SAP BusinessObjects Vendors:     </h2>
            <span className="sub-title purple-color">SAP BusinessObjects BI 4.3 was released with perspectives of users and Admin. SAP BusinessObjects is being embraced across the world to transform a business into an Intelligent Enterprise. The best in class SAP BO BI features, leveraged by the hired SAP Business Objects third-party vendor, integrate required changes in productivity, improve customer experience through better-guided end-to-end processes, and inspire workforce engagement. Twelve SAP BusinessObjects BI features that make it #1 choice of more than 200 M cloud users in 180 countries are:  </span>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>The Best Analytics Reporting Tool: Web Intelligence application automates routine tasks and strengthens customer relationship.</h3>
                  </li>
                  <li
                    data-aos="zoom-in-right"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Scalable Architecture: Server clustering and cloning helps the SAP BO experts to manage users easily.  </h3>
                    
                  </li>

                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>SAP HANA Integration: It allows use of big data for quick predictions based on real-time insights.    </h3>
                  </li>

                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Launchpad with Enterprise BI: BI Launchpad allows the users to access reports, storyboards, analytics documents, dashboards, etc.     </h3>
                  </li>

                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Mobile BI: Users can access reports and insights on mobiles and tablets.   </h3>
                  </li>


                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>System Administration with Robust Security: SAP BO helps to keep Central Management Console the best secured.     </h3>
                  </li>

                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3> QaaWS (Query as a Web Service): It simplifies creating Universe queries and deployment of these  as a Web service.     </h3>
                  </li>

                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>  Design Studio: SAP BO Design Studio allows the users to develop interactive dashboards and applications using multiple data sources.    </h3>
                  </li>

                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3> SAP Lumira: It adds new dimension to self-service allowing the users to analyze data collection and to get relevant content.     </h3>
                  </li>

                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>  Crystal Reports: Designed primarily to help individual users, small/medium sized companies for creating dynamic reports using data collected from different sources.  It offers a range of options for report formatting and presentation.    </h3>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li
                    data-aos="zoom-in-right"
                    data-aos-duration="1100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>BO Universe: The metadata layer provides access to a range of data sources. </h3>
                    
                  </li>
                  <li
                    data-aos="zoom-in-right"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Tools for Each Case: A range of tools and applications with HTML-5 UI and iPad support.</h3>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      

      <div className="faq-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title dark-green-color">

            </span>
            <h2 className="nunito-font">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg- col-md-12">
              <div className="faq-accordion">
                <div className="accordion" id="faqAccordion">
                  <Accordion questionsAnswers={questionsAnswers} />
                </div>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=sap-business-objects&populate=*`
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
