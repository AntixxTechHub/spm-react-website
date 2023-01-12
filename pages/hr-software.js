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
    <PageSeo seo={seo} pageName = "HR Software" />
      <PageTitle page="HR Software" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="HR Software" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>Your Preferred HR Software Development & Software Solution Partner </h3>
                <p style={{ textAlign: "justify" }}>Reduce your product development costs and have a competitive edge in HR SaaS Solutions Market by assigning your HR Software projects to us. We are the one-stop solution for all your HR Software requirements!.</p>
                <p style={{ textAlign: "justify" }}>We design, develop, and deploy the best Human Resource management system software. Our well-designed Human Resource Software helps you bring all your HR operations on a robust and user-friendly platform. You can sync recruitment, training, development initiatives, payroll and benefits management and more and orchestrate HR operations.  .</p>
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
                HR System Architecture We Design 

                </h3>
 <p style={{ textAlign: "justify" }}>We partner with well-known Cloud platforms like AWS, Google Cloud, IBM Cloud, and Microsoft Azure. We can develop Human Resource Management System Software on your desired cloud to help you sync them with your current business apps. We also provide on-premise and hybrid HR Solutions and mobile applications per your needs. </p>

                <p style={{ textAlign: "justify" }}>•	We work on information security and access control. Also, we deploy the most effective tools for digital workloads migration. </p>
                <p style={{ textAlign: "justify" }}>•	We work on the best user interface and user experience design to make your HR software convenient, intuitive and conversion-driven.   </p>
                <p style={{ textAlign: "justify" }}>•The best quality API for smoother integration and OOTB security policies for secure API traffic are other aspects that make our HR System Architecture breach-free. </p>
                <p style={{ textAlign: "justify" }}>•	We also deploy user behaviour monitoring and application monitoring mechanism for better insights. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Why Choose Us for HR Software Services </h2>
            <br></br>
            <p style={{ textAlign: "justify" }}>
            <li> We have extensive experience in<b> HRIS & HRMS Software Development and Integration.</b>   </li>
            <br></br>
            <li> We recruit the most talented and experienced teams of IT experts to handle your projects.  </li>
            <br></br>
            <li> We have developed HR software solutions for many clients from across various industries.  </li>
            <br></br>
            <li> We deliver your HR solutions well within the mutually agreed project schedule.  </li>
            <br></br>
            <li> We ensure our HR software will add productivity to your business with splendid customer satisfaction.  </li>
            <br></br>
           </p>

            
            {/* <p>We partner with your business throughout the journey of implementing the best IT service management system administrator. Our ITSM experts work closely with you to understand your requirements, current IT infrastructure, and required upgrades and plan a roadmap for implementation and beyond.
              We address difficulties and challenges at different levels to resolve them and make your IT operations smoother.
            </p> */}

          </div>
          <h3><center> Our Principles for Effective Collaborations</center> </h3>
          <br></br>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
            
              <div className="single-services-item style-two" style={{ height: '550px' }}>
                <div className="icon">
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Unified Solution </a>
                </h5>
                <p>We cover every aspect of your HR software, from ideation to delivery and support. </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '550px' }}>
                <div className="icon">
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Complete Clarity </a>
                </h5>
                <p>We provide you with complete visibility of project execution. We keep you updated about the KPIs, such as the addition of features, project progress, time spent on various tasks, and more. We let you track the progress of your project through a project management platform</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-item style-two" style={{ height: '550px' }}>
                <div className="icon">
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Minimised Risk </a>
                </h5>
                <p style={{ textAlign: "justify" }}>
            <li>We help you improve KPIs by assessing your development process and suggesting the best ways. </li>
            <br></br>
            <li> We undertake a feasibility study before beginning an HR software development project to reduce financial risk.    </li>
            <br></br>
            <li> We offer technical project management consulting to monitor your project.   </li>
            <br></br>
            
           </p>
              </div>

            </div>
          </div>
        </div>
        <h3><center> The Range of Our HR Software Services </center> </h3>
        <br></br>
       <p><center> We offer various service options to execute your HR software development. You can choose a service option that suits your needs. </center></p>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two"  style={{ height: '550px' }}>
                <div className="icon">
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>HR Software Development Consultancy </a>
                </h5>
                <p style={{ textAlign: "justify" }}>We help you prepare a product plan, reduce development costs, minimise risks in HR software development, and improve your HR System Metrics, such as: 
                <li>Performance </li>
                <li>Service Availability </li>
                <li>Code Quality </li>
                <li>Response Time </li>
                <li>Security  </li>
                </p>
                
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two"  style={{ height: '550px' }}>
                <div className="icon">
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Development of HR Software from Scratch </a>
                </h5>
                <p style={{ textAlign: "justify" }}>We deploy our talented developers and product managers to develop HR software as per your needs: 
                <li>Product plan and task allocation </li>
                <li>Software architecture design </li>
                <li>UI & UX design  </li>
                <li>Product development  </li>
                <li>Software testing and QA   </li>
                <li>Hr software maintenance and support   </li>
                <li>Customisation, integration, and deployment support   </li>
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two"  style={{ height: '550px' }}>
                <div className="icon">
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SaaS-Based HR Solution </a>
                </h5>
                <p style={{ textAlign: "justify" }}>We design and deploy a SaaS-based HR system: 
                <li>Multi-tenancy architecture design </li>
                <li>Customisation strategy and OOTB functionality for your SaaS product. </li>
                <li>Categorisation for microservices architecture and cloud-native development.</li>
                
                </p>
              </div>
            </div>
            <h3><center> HR Software Service Pricing Options  </center> </h3>
            <br></br>
            <p><center> We are flexible with the project execution process. You can choose a suitable HR software service pricing model that goes well with your requirements: </center></p>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two"  style={{ height: '550px' }}>
                <div className="icon">
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Fixed Price Model  </a>
                </h5>
                <p>If your project scope is well-defined, we can divide your project into phases and estimate the price for these phases separately.</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two"  style={{ height: '550px' }}>
                <div className="icon">
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Productive Time Capping Model   </a>
                </h5>
                <p>We bill as per hours spent for agile, iterative development, reacting to your user feedback, adding features, and changing requirements. .</p>
              </div>
            </div>

            
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '550px' }}>
                <div className="icon">
                <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Fixed Monthly Fee Model   </a>
                </h5>
                <p>This pricing model suits full-fledged SaaS HR software solutions for deployment and support in the long run .</p>
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
                Technologies We are Competent in 
                </h2>
                <p style={{ textAlign: "justify" }}>Our HR Software Development experts are well-versed in the following technologies: .</p>
                <br></br>
                <h4>Frontend Programming Languages</h4>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    HTML 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    JavaScript 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    CBS 

                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Javascript Framework
                  </li>

                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    	Angular 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    METEOR 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
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
                    NEXT 
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
                    ReactJS 
                  </li>
<br></br>
<h4>  

Backend Programming Languages </h4>
<br></br>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Microsoft .Net 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Java 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Python 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Node 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Php  

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Golang 

 
                  </li>
                  <br></br>
                  
                  <h4> Clouds</h4>
                  <br></br>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Microsoft Azure  

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    AWS 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    IBM Cloud 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Google Cloud 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    DigitalOcean 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Rockspace  

 
                  </li>
                  <br></br>

                  <h4> Mobile</h4>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Android 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    iOS 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    CORDOVA 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Xamarin 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    React Native 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    PWA 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Flutter  

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Ionic  

 
                  </li>
                  <br>
                  
                  </br>
                  <h4> PHP Frameworks </h4>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Symphony  

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Laravel 
 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    ZENO FRAMEWORK  

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    CAKEPHP  

 
                  </li>
                  <br></br>
                  <h4> Java Frameworks & Extensions </h4>
                  <p className="w-100" style={{ textAlign: "justify" }}>We primarily use Spring Framework (Spring Boot, Spring Data, Spring Framework, Spring Cloud and more), Java Persistence API (JPI) and Hibernate. :</p>
                  <p className="w-100" style={{ textAlign: "justify" }}>We optionally use Java Enterprise Platform Application Servers (Java EE / Jakarta EE/ J2 EE) like JBoss WildFly. :</p>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Spring   

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    HIBERNATE  

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    WildFly   

 
                  </li>
                  <br></br>
                  <h4>Real-time Data Processing  </h4>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    RabbitMQ    

 
                  </li>
                 

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Flink   

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Spark Streaming   

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Apache Storm   

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Kafka Streams   

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Amazon Kinesis   

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Azure Event Hub    

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Azure System Analytics 
 
                  </li>
                  <br></br>

                  <h4> Databases</h4><br></br>
                  <a > SQL</a>
                  <br></br>


                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SQL Server   

 
                  </li>
                  


                  
                 
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    MySQL 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Oracle   

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    PostgreSQL   

 
                  </li>
                  <br></br>

                  {/* <h4></h4> */}
                  <a>NOSQL</a>
                
                  

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Cassandra 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    KIVE 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Apache HBase 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    nifi 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    MongoDB 

 
                  </li>
                  <br></br>
                  
                  <h4>Cloud Databases, Storage, and Warehouses </h4>
                  <br></br>
                  <a>AWS</a>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Amazon S3 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Amazon Redshift 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Amazon DynamoDB 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Amazon DocumentDb  

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Amazon RDS 

 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    AWS Elasticache 

 
                  </li>
                  
                  <a> Microsoft Azure </a>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Azure Data Lake 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Azure Blob Storage 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Azure Cosmos DB 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Azure SQL Database  
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Azure Kinect DK 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Azure RTOS 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Azure Synapse Analytics 
                  </li>

                  <a> Google Cloud Platform  </a>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Google Cloud SQL 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Google Cloud Datastore 
                  </li>

                  <h4>DevOps  </h4>
                  
                  <a>Containerisation </a>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Docker 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Kubernetes 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    OPENSHIFT 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    MESOS  
                  </li>
                  <a>Automation</a>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Ansible 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Puppet 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    CHEF 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SALTSTACK 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Terraform 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Packer 
                  </li>

                  <a>Monitoring </a>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    ZABBIX 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Nagios 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Elasticsearch 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Prometheus  
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Grafana  
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    DATADOG   
                  </li>

                  <h4>  Payment Gateways</h4>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    PayPal   
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Square   
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Stripe    
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Alipay   
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Braintree    
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Adyen   
                  </li>

                  <h4> CRM </h4>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce  
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Microsoft Dynamics 365    
                  </li>


                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Zendesk    
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    HubSpot    
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    ORO   
                  </li>


                </ul>
                <br></br>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=hr-software&populate=*`
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