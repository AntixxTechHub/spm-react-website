import React from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";



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


{/* ------------------------------Faq Q/A--------------------------------- */ }
const questionsAnswers = [
  {
    question: "Q1: Is ServiceNow ITSM cloud-based? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: ServiceNow's ITSM platform is an enterprise-grade cloud platform delivering the scalability, security, and availability needed for mission-critical applications.</p>
  },
  {
    question: "Q2: Are ServiceNow ITSM solutions available On-Premises? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: ServiceNow IT services are primarily available as SaaS solutions, and On-Premises is also functional.</p>
  },
  {
    question: "Q3: What are the main benefits of ServiceNow IT integration?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: ServiceNow IT integration helps in operations.
      <ul>
        <li> Visibility  </li>
        <li> Health    </li>
        <li> Optimization  </li>

      </ul>
      
      </p>
  },
  {
    question: "Q4: Does ServiceNow ITSM provide a common platform? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: Yes, it provides a common platform across ITOM, ITSM, ITBM, ITAM, and Security Operations.</p>
  },
  
];
{/* ------------------------------End Faq Q/A--------------------------------- */ }

const Services = () => {
  return (
    <>
      <PageTitle page="IT Service Management" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="IT Service Management" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                ServiceNow ITSM – A cloud-based platform to manage your IT services with ease
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>
                ITSM (IT service management) emphasizes customer needs and IT services. ServiceNow ITSM solution is a cloud-based forum helping organizations drive and improve digital workflows. Most activities like effectual designing, planning, processes, maintenance, and control of IT services get under the ITSM medium.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>With emerge of digitization, every organization is transforming into a digital enterprise. Therefore, IT service delivery is a necessary part of any company. It increases the need for flexible and economical ServiceNow ITSM solutions to fix IT customer service challenges. </p>
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
                With ServiceNow ITSM, redefine IT processes 
                </h4>
                <span className="sub-title"></span>
                <p className="w-100" style={{ textAlign: "justify" }}>One of the best benefits of the ServiceNow IT implementation is that modules are on the Infrastructure Library, helping control your IT. With the more promising operating standard from ServiceNow IT process automation, you enjoy an ideal user experience at a reasonable cost.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Since most ITSM strategies and methods are manual, inaccurate, and slow, productivity decreases, and operational costs increase. Here arises the need for professional vendors to help organizations in digital transformation through ITSM cloud platforms. The implementation & upgradation of ITSM is processed within less time and at economical costs. The disruptions with the current IT service management are - 
                <br></br>
                <ul>
                  <br></br>
                  <li> • Artificial Intelligence (AI)  </li>
                  <li> • Machine Learning (ML) (AI)  </li>
                  <li> • Virtual Agents  (AI)  </li>
                  <li> • Chatbots  (AI)  </li>
                  <li> • Internet of Things (IoT)   </li>

                </ul>
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Since most ITSM strategies and methods are manual, inaccurate, and slow, productivity decreases, and operational costs increase. Here arises the need for professional vendors to help organizations in digital transformation through ITSM cloud platforms. The implementation & upgradation of ITSM is processed within less time and at economical costs. The disruptions with the current IT service management are - </p>

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
                <h4 className="nunito-font">
                Reach us for consultation and implementation of ServiceNow Knowledge Management services
                </h4>
                
                <p className="w-100" style={{ textAlign: "justify" }}>Additionally, you can book a free trial service and get to know us more! 

We are ServiceNow ITSM third-party vendors with exceptional years of experience in providing IT services and solutions. Our services are worldwide and trusted by esteemed organizations.  

We shall be glad to collaborate with you!  </p><p className="w-100" style={{ textAlign: "justify" }}>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Certified professional support to implement, integrate and upgrade ITSM services 
                  </li>
                  </ul>
                </p>

                
                <p className="w-100" style={{ textAlign: "justify" }}>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Staff Training 
                  </li>
                  </ul>
                </p>

                <p className="w-100" style={{ textAlign: "justify" }}>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Cost-effective 
                  </li>
                  </ul>
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Support services 24/7 
                  </li>
                  </ul>
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
      <div className="goal-area with-top-border ptb-100" >
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
                Knowledge Management 
                </h4>
                <span className="sub-title"></span>
                <p className="w-100" style={{ textAlign: "justify" }}>ServiceNow ITSM automation process service vendor helps find the limitations of knowledge in your organization and makes the resource available as Knowledge articles. It delivers self-improvement practices and quick case resolutions by automation using machine learning. 
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Knowledge management services help to benefit as below -  
                <br></br>
                <ul>
                  <br></br>
                  <li> • Empower staff to use relevant knowledge articles while working on a case or incident.    </li>
                  <li> • Helps in structured conversations  </li>
                  <li> • The feedback cycle will help act on customers and internal users to improve organizational knowledge constantly.   </li>
                  

                </ul>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Features of ServiceNow ITSM  </h2>
            <span className="sub-title purple-color">ServiceNow ITSM has had a few upgrades recently. One update includes New RPA capabilities. With this new update, Automation Engine combines the existing Integration Hub with all-new RPA capabilities with a brand-new RPA Hub.Let's dive into the features of ServiceNow ITSM solutions - </span>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up-right"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Service Level Management </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>ServiceNow Service Level Management service providers facilitate the complete forum to document and track all service responsibilities between IT, service providers, and customers. The Service Level Management (SLM) services help with the details to visualize and understand active SLAs and automate alarms and escalations. Additionally, it provides access to essential metrics to understand business performance against service deliveries. This service benefits the organization in  </p>
                <p className="w-100" style={{ textAlign: "justify" }}> 
                <ul>
                  <li> • Employee productivity and efficiency  </li>
                  <li>  • Analyze problems and prevent potentials issues   </li>
                  <li> • Drive customer satisfaction   </li>


                </ul>


                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up-right"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Event Management </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>ServiceNow Event Management vendor will facilitate you in the deployment of ServiceNow platforms. Further, Anomaly Detection in the ServiceNow ITSM service provider's event management has levels of process against specific CIs and metrics.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>It helps provide Anomaly Map Identification. The alert indicates deviation from projected metric values for monitored CIs. With expert guidance, ServiceNow ITSM event management services help reduce alert noise through alert aggregation, correlation, and adaptive thresholding.  
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up-right"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Incident and Problem Management </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>ServiceNow ITSM Incident & Problem Management support services help manage IT services using a single platform. User experience is increased by easy access to IT via the web, mobile self-service, and virtual agents powered by NLU (Natural Language Understanding). </p>
                <p className="w-100" style={{ textAlign: "justify" }}>With ServiceNow ITSM Problem Management, service providers help restore the issues quickly, thereby preventing issues from occurring. The structured process to analyze the root cause and fix issues, ServiceNow ITSM problem management helps eliminate repeated problems. </p>
              </div>
            </div>
            
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up-right"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Change and Release Management </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>ServiceNow ITSM allows you to improve the process to be more efficient and productive by maximizing service delivery and quality. Agile DevOps enables automated change approvals and management. Gradually, it makes the change-release process simpler.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>It helps fewer failed changes and lowers the expense per change through its auto-conflict detection and risk assessment. You can use single storage to manage all change processes across IT. </p>
              </div>
            </div>

            <p className="w-100" style={{ textAlign: "justify" }}>Most CIOs, Change Managers, IT Operation Managers, and Service Desk Managers look forward to optimizing their IT operations for fast, accurate, and wise delivery at an economical cost. And, as per the industry research, the organizations adopting the ITSM automation process procured significant savings through the ServiceNow ITSM vendors and have maximized ROI (return on investment). </p>
            <p className="w-100" style={{ textAlign: "justify" }}>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    IT support function  
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Integration and Implementation   
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Spontaneous change management capabilities  
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Smart reporting 
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Out-of-the-box ITIL processes   
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Comprehensive Knowledge Management  
                  </li>



                  </ul>
                </p>
                
                <p className="w-100" style ={{ textalign: "justify"}}> Call us or email us! Our team will reach you with the technical solutions at the earliest and help resolve the issues in a minimal duration. Our focus lies in the usage of ITSM services uninterrupted.   </p> 
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
      <FooterOne />
    </>
  );
};

export default Services;