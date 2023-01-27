import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Accordion from "@/components/Accordion";
import baseApiUrl from "@/utils/baseApiUrl";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";

import dummyicon from "@/public/images/dummy-icon.png";

import dummyimg from "@/public/images/dummy-img.png";


const questionsAnswers = [
  
  {
    question: "Q1: What are the top SAP Services? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Top SAP Services include:
      <li><strong>1. </strong> Comprehensive SAP Implementation  </li>
        <li><strong>2. </strong> Global Roll-out  </li>
        <li><strong>3. </strong> Industry Solution Implementation  </li>
        <li><strong>4. </strong> Application Management    </li>
        <li><strong>5. </strong> Functional & Technical Application Support  </li>
        <li><strong>6. </strong> 24*7 Helpdesk Support    </li>
        <li><strong>7. </strong> System Monitoring & Maintenance   </li>
        <li><strong>8. </strong> Upgrade & Migration to SAP  </li>
        <li><strong>9. </strong> System Performance Optimization    </li>
        <li><strong>10. </strong> New Product Consultation    </li>

        <li><strong>11. </strong> Security & Compliance      </li>


        </p>



  },
  {
    question: "Q2: What are the Stages of SAP ERP Implementation? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>SAP ERP comprises various modules like Asset Accounting, Material Management, Production Planning, Quality Management, Maintenance, Human Resources, Warehouse Management, etc.  The main stages of SAP ERP implementation include: 
      <li><strong>1. </strong> Project Preparation  </li>
        <li><strong>2. </strong> Business Plan  </li>
        <li><strong>3. </strong> Realization  </li>
        <li><strong>4. </strong> Final Preparation  </li>
        <li><strong>5. </strong> Live Support  </li>
        

      </p>

  },
  {
    question: "Q3: What are the top 10 Considerations for ERP Implementation?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}> <strong> The top 10 considerations for ERP implementation include: </strong>
        <li><strong>1. </strong> Business requirement </li>
        <li><strong>2. </strong> Management support </li>
        <li><strong>3. </strong> User support </li>
        <li><strong>4. </strong> Functional needs </li>
        <li><strong>5. </strong> Existing system integration </li>
        <li><strong>6. </strong> Budget & resource .</li>
        <li><strong>7. </strong> Technology & future scalability </li>
        <li><strong>8. </strong> Cost of ownership & ROI  </li>
        <li><strong>9. </strong> Options for evaluation & selection  </li>
        <li><strong>10. </strong> Necessary customization </li>

      </p>
  },
  {
    question: "Q4: What are the Key Features of SAP ERP Managed Services? ",
    answer:
       <p className="w-100" style={{ textAlign: "justify" }}> <strong> Key features of SAP ERP Managed Services include:  </strong>
        <li><strong>1. </strong> Asset Management  </li>
        <li><strong>2. </strong> Improved finance  </li>
        <li><strong>3. </strong> Seamless Manufacturing   </li>
        <li><strong>4. </strong>Research & Development & Engineering </li>
        <li><strong>5. </strong> Enhanced Sales  </li>
        <li><strong>6. </strong> Integrated Service  Management  </li>
        <li><strong>7. </strong> Sourcing & Procurement  </li>
        <li><strong>8. </strong> Supply Chain Management  </li>
       

      </p>


      
  },
  {
    question: "Q5: What are the Businesses Benefits of SAP ERP Modules? ",
    answer:
      
        <p className="w-100" style={{ textAlign: "justify" }}> <strong> Top SAP ERP Consultants provide ERP services, across industry verticals. Business entrepreneurs getting  benefited through various modules including:</strong>
        <li><strong>1. </strong> Financial Control  </li>
        <li><strong>2. </strong> Human Capital Management  </li>
        <li><strong>3. </strong> Material Management   </li>
        <li><strong>4. </strong>Sales & Distribution  </li>
        <li><strong>5. </strong> Production Planning  </li>
        <li><strong>6. </strong> Quality Management  </li>
        <li><strong>7. </strong> Project System  </li>
        <li><strong>8. </strong> Plant Maintenance   </li>
        <li><strong>9. </strong> Warehouse Management   </li>
        <li><strong>10. </strong> Environment, Health & Safety   </li>



      </p>
     
  },
  {
    question: "Q6: What are the Value Additions from SAP ERP Trainings? ",
    answer:
      
        <p className="w-100" style={{ textAlign: "justify" }}> <strong> Seeking SAP ERP Trainings would help to boost your business through: </strong>
        <li><strong>1. </strong> Proven Expertise on SAP applications  </li>
        <li><strong>2. </strong> Domain Knowledge & Application Expertise   </li>
        <li><strong>3. </strong> Flexible yet lucrative delivery    </li>
        <li><strong>4. </strong>Verified onsite/offshore practice  </li>
        <li><strong>5. </strong> Knowledge base & reusable component repository  </li>
        <li><strong>6. </strong> Compliance with CMMI & ISO standards   </li>
        <li><strong>7. </strong> Reduced cost of ownership (30-40%)   </li>
        


      </p>
     
  },
];


const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "SAP ERP" />
      <PageTitle page="SAP ERP" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="SAP ERP" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                Maximize Return on Investment with SAP ERP Service Providers 
                </h4>
                <p style={{ textAlign: "justify" }}>
                SAP ERP constitutes to be an enterprise resource planning system for the future with integrated technologies like Artificial Intelligence, analytics and machine learning. Many of the SAP ERP service providers deliver an integrated platform to support various business functions like Manufacturing, Financial, Supply Chain Management, Human Resources, Customer Relationship Management, Relationship Management, Projects and Product Lifecycle Management.</p>
                <h4 className="nunito-font">What is SAP? </h4>
                <p style={{ textAlign: "justify" }}>The short form of SAP is System Application and Product in Data Processing. It helps the developers manage their business processes and client relationship. SAP software solutions help businesses automate their process of distribution and logistics. These practices are integrated to form a module, interacting with diverse business facets.</p>
                <h4 className="nunito-font">What is ERP? </h4>
                <p style={{ textAlign: "justify" }}>ERP is the short form of Enterprise Resource Planning - Software designed to simplify the day to day functions of an organization from logistics to managerial. The technique maintains a balance with key business functions, encompassing human resources, accounting, order management, etc. This software solution is regarded as a centralized system of the business, streamlining processes and information flow in an organization.</p>


                <h4 className="nunito-font"> 

Value Additions from SAP ERP Trainings:  </h4>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Proven Expertise in SAP applications 
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Sturdy resources with Domain Knowledge & Application Expertise 
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Capability to speedily ramp-up resource base as per client requirements 
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Flexible yet lucrative delivery 
                  </li>


                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Verified on-site/offshore practice 
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Knowledge base and reusable component repository
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Compliance with CMMI as well as ISO standards
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Reduced cost of possession of 30-40%
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
              <MediaImage name="SAP ERP Service Providers.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
        <h4><center>Industries Benefited through SAP ERP Managed Services </center>  </h4>
        <p><h5>SAP ERP Managed Services focus on competent methodologies for driving software processes.  As per industry research, SAP provides industry-specific functionalities to specific industries such as: </h5></p>


          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="goal-text">
              

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '100px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Oil & Gas </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Utilities </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Retail </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>High Tech </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Defense & Security </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Consumer Goods  </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Telecommunications </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Financial Services </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Wholesale Distribution  </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Professional Services  </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Telecommunications </h3>
                  </li>


                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '100px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Mill Products </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Healthcare </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Pharma </h3>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Higher Education & Research </h3>
                   
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Automobiles </h3>
                   
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Media, Banking </h3>
                   
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Public Sector </h3>
                   
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Mining </h3>
                   
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Engineering </h3>
                   
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Construction & Operations </h3>
                   
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '100px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Consumer Products </h3>
                   
                  </li>





                </ul>
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
              <div className="goal-image style-two">
              <MediaImage name="History of SAP ERP Support Services.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                History of SAP ERP Support Services 
                </h4>
                <p style={{ textAlign: "justify" }}>
                ERP is developed as per SAP R/3 software, which was formally launched on 6 July 1992. It comprises various applications, established on top of the SAP Web Application Server. The set of extensions helps to deliver innovative features.  

                A comprehensive architecture change occurred with the introduction of SAP ERP in 2004. R/3 Enterprise was substituted with the ERP Central Component (SAP ECC).</p>

                <p style={{ textAlign: "justify" }}>
                SAP Business Warehouse, Internet Transaction Server and Enterprise Management also integrated into SAP ECC.  

                    SAP Web Application Server was wrapped into SAP NetWeaver in 2003. Architectural modifications facilitated in supporting an enterprise architecture for transitioning clients to a Service-oriented architecture. 

                    In 2006, came the latest version of SAP ERP 6.0. Since then, it has been updated through SAP enhancement packages till SAP Enhancement Pack16 for SAP ERP 6.0 released on 29th March 2021.</p>
                    <h4 className="nunito-font">
                      Why choose SAP ERP Service Providers? 
                </h4>

                    <p style={{ textAlign: "justify" }}>
                    Irrespective of whether you are having 3 employees or 30,000 employees, SAP ERP Vendors provide a comprehensive portfolio of ERP cloud systems to match your requirements. SAP ERP Third-Party Vendors also have a dedicated support team at your disposal 24/7.  

                    Here are the key reasons why should you opt for SAP ERP Consultants.</p>  

                    <p style={{ textAlign: "justify" }}>
                    <strong>Latest Technology - </strong>SAP has more than 40 years of ERP experience across industries and businesses. SAP ERP Vendors use the up-to-date technologies for building future-proof cloud ERP tools, delivered through automatic updates.</p> 

                    <p style={{ textAlign: "justify" }}>
                    <strong>Flexibility - </strong>SAP ERP Managed Services facilitate in creating easy-to-use and flexible cloud ERP applications. Whether you want to customize your work process, use a public or private cloud, or want, flexibility for your business, SAP ERP is always the best solution in this regard.</p> 

                    <p style={{ textAlign: "justify" }}>
                    <strong>Cloud security management -</strong> The business technology platform of SAP is created on progressive technology infrastructure. A team of experts providing SAP ERP Support Services work on data protection as well as security threats. </p> 

                    <h4 className="nunito-font"> 

                    Top SAP Services include </h4>
                           <ul className="overview-list">
                            <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              Comprehensive SAP Implementation  
                             </li>

                             
                            <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              Global rollouts 
                             </li>

                             
                            <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              Industry Solution Implementations  
                             </li>

                            <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              Application Management  
                             </li>


                            <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              Functional & Technical Application Support  
                             </li>

                            
                            <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              Helpdesk Support for 24*7  
                             </li>


                            
                            <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              System Monitoring & Maintenance 
                             </li>


                             
                            <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              Upgrade Migration related to SAP 
                             </li>

                            <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              System Performance Optimization 
                             </li>

                             <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              New Product Consulting 
                             </li>

                             <li data-aos="fade-up" data-aos-duration="1200">
                              <i className="flaticon-draw-check-mark"></i>
                              Security & Compliance  
                             </li>









                  </ul>

                   
                   
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
              <div className="goal-image style-two">
              <MediaImage name="Considerations for ERP Implementation.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                How ERP caters to small and midsize companies? 
                </h4>
                <p style={{ textAlign: "justify" }}>
                SAP Business - A customized ERP solution is much preferred by small firms and subsidiaries of large enterprises. Available in the cloud, the small business ERP software provides an affordable way to manage the business. </p>

                <p style={{ textAlign: "justify" }}>
                SAP Business ByDesign - A complete cloud-based ERP suite helps to foster fast-growing midsize business, connecting every function from finance to sales. The technique conditioned time-tested practices and in-depth analytics in a dynamic environment. .</p>
                    <h4 className="nunito-font">
                    Considerations for ERP Implementation 
                </h4>

                    <p style={{ textAlign: "justify" }}>
                    ERP is the software tool used at the heart of businesses, enabling professionals to achieve business objectives. Choosing the right solution for business is the most significant decision.  

Take a look at the few criteria of the Enterprise Resource Planning system: </p>  

                    <p style={{ textAlign: "justify" }}>
                    <ul>
                    <li> • Business requirements </li>
                    <li>•  Upper management support  </li>
                    <li> • User support  </li>
                    <li>•  Functional requirements  </li>
                    <li> • Integration with existing systems  </li>
                    <li>•  Budget and resources  </li>
                    <li> • Technology and future scalability </li>
                    <li> • Ownership Cost and Return on Investment  </li>
                    <li>• Evaluate and select options  </li>
                    <li> • Necessary customization  </li>

                    </ul>





                    </p> 
                    <h4> Seek the best SAP ERP Training for your business  </h4>

                    <p style={{ textAlign: "justify" }}>
                    Nowadays various SAP ERP Trainings are available in the market. You have to choose the right one for effectively customizing your business. You may be perturbed by the question – “How will Enterprise Resource Planning deal with your customization?”, “ How can your business goals as well as validation techniques ensure capability with other ERP components? Would you be able to introduce your customization without any adverse effects on other ERP machinery? Many of the Enterprise Resource Planning solutions are available. Opt for the one that would help you to serve your business for the current day as well as for the future. </p> 

                    <p style={{ textAlign: "justify" }}>
                    To know more about the process, get in touch with the best SAP ERP company and give a boost to your business return on investment. Seeking the right SAP ERP implementation will help your business to speed up the information and management system. So, hire one of the best SAP ERP Consultants and maximize your business profits.  </p> 
              </div>
            </div>
          </div>
        </div>
      </div>

     


      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">What is the purpose of hiring SAP ERP Third Party Vendor? </h2>
            <p style={{ textAlign: "justify" }}>SAP (Systems Applications and Products) is a great enterprise resource planning (ERP) software. SAP ERP Third-Party Vendors facilitate in creating a centralized business system to enable every department to access and share information for building a great work environment. 

               Many of the third party SAP ERP vendors have deep expertise in adopting and supporting SAP Business Intelligence analytics for international clients and enhance Business Intelligence and Analytics with the Business Object offerings.</p>

          </div>
          
        </div>
      </div>

      <div className="working-process-area ptb-100 bg-13965f">
        <div className="container">
          <div className="section-title">
            <div className="col-lg-12 col-md-12">
              <div className="working-process-text">
                <h2 className="nunito-font">
                Difference between SAP & ERP  </h2>
                
                <div className="row align-items-center">
              <div className="col-lg-12 col-md-1">
                <div className="goal-text">

                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>ERP software solution facilitates companies manage their business processes, whereas SAP sells an ERP software solution to the companies. </h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>ERP involves a centralized system streamlining processes, whereas SAP integrates the process into modules, interacting with business facets.</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Enterprise Resource Planning is considered to be a superset of SAP, and SAP is the leading provider of ERP software applications.</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>ERP constitutes a web-based application, whereas SAP provides various options as per requirements</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Enterprise Resource Planning focuses more on organizational growth. On the other hand, SAP takes into consideration both the clients and organization, while developing software applications.</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Some of the examples of Enterprise Resource Planning include NetSuite ERP, AcTouch, Scoro, etc. On the other hand, some of the instances of SAP encompass Business Intelligence, Enterprise Buyer Professional, Internet Transaction Server, etc. </h3>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>


      <div className="working-process-area ptb-100 bg-13965f">
        <div className="container">
          <div className="section-title">
            <div className="col-lg-12 col-md-12">
              <div className="working-process-text">
                <h2 className="nunito-font">
                What are the Key features & competencies of SAP ERP?  </h2>
                
                <div className="row align-items-center">
              <div className="col-lg-12 col-md-1">
                <div className="goal-text">

                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3><b>Asset Management</b> – Implementing SAP ERP solution, business entrepreneurs could get operational excellence. They could maximize their return on investment by making the right plan, schedule and successfully executing asset management and maintenance activities in an integrated way. </h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                    <h3><b>Improved Finance</b> – Finance is also improved through SAP ERP, by simplifying accounting, process and enhancing treasury as well as financial risk management.  </h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                    <h3><b>Seamless Manufacturing </b> –  ERP helps in seamless manufacturing, improving production planning, supporting intricate assembly processes and facilitating seamless manufacturing.   </h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                    <h3><b>Research & Development & Engineering  </b> –  EBetter project control and development help to manage enterprise projects and streamline the process of product lifecycle management.   </h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                    <h3><b>Enhanced Sales  </b> –  here are enhanced sales and revenue with order and contract management.    </h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                    <h3><b>Integrated Service  Management </b> –  Moreover, entrepreneurs can deliver exceptional and reliable service with holistic analytics and service management.    </h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                    <h3><b>Sourcing & Procurement  </b> –  IT professionals could modernize operational purchasing, as well as mechanize source, and manage contracts, by centralizing the process of the procurement process.    </h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                    <h3><b>Supply Chain Management </b> –  The entire supply chain offers accurate and integrated transportation management, streamlining warehouse management.     </h3>
                    </li>
                    
                    
                  </ul>
                </div>
              </div>
            </div>
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
      <FooterOne />
    </>
  );
};

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=sap-erp&populate=*`
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