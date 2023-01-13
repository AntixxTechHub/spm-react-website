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
import baseApiUrl from "@/utils/baseApiUrl";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";




const Services = ({ seo }) => {
  return (
    <>
     <PageSeo seo={seo} pageName = "System & Software" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="System & Software" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                Our Wide-Ranging System & Software Service Portfolio 
                </h4>
                
                <h5><center>DevOps</center></h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
                Our well-designed integrated solutions and DevOps managed services help your businesses reduce manual intervention, and manual errors, and automate workflow, release cycles, and service virtualisation to achieve greater scalability. 

We make deploying your workloads easy with DevOps agility. Our DevOps experts perform coding in hours to accelerate your business processes, development workflow, and IT frameworks. We help you deliver your excellent software solutions faster. 
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We help you make effective DevOps use in application development to align with the evolving IT and software delivery arena. We help you adopt the DevOps culture for a faster time to market. Please work with us to adopt DevOps solutions to enhance DevOps use in the Infrastructure process, and accelerate ideation to delivery of software solutions and apps to stay competitive. </p>
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
                <center>Embedded Services</center>
                </h4>
                {/* <span className="sub-title">BMC Helix Implementation</span> */}
                <p className="w-100" style={{ textAlign: "justify" }}>We offer the latest technology in embedded platform development, including FPGA, ASIC, and DSPs. We are the one-stop solution for all your mechanical, PCB, software, and hardware requirements. 
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Our embedded software and integration meet hardware and help you harness the latest embedded technology in any smart device</p>
                
                  <li>We help you adopt rapid changes in technology. We provide embedded engineering services to suit your needs and business goals. </li>
                  <br></br>
                  <li>We define the architecture or firmware, design, and implement embedded solutions for Linux-based devices and other platforms. </li>
                  <br></br>
                <li>We design automatic parameter monitoring systems for various vehicles by developing middleware and integrating 3rd party applications. </li>
                <br></br>
                <li>We ensure that Linux distributions are effectively embedded with the IoT software irrespective of the hardware you use. </li>
                <br></br>
                <li>We ensure the best Return on Investment through extensive embedding and testing of solutions developed for you. </li>
                <br></br>
                <li>Our designers create high-performing, efficient, and reliable IoT devices by adopting the System-on-Model approach. </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="goal-area ptb-100 br-bottom-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">
              <h2><center>Data Engineering </center></h2>
              <p>We leverage the latest Data Engineering Technology for data mining, reconditioning, and more to help you establish your new businesses, draw winning strategies, and expand your business in new territories.  </p>
              <p>We enable data-driven decisions and approach to scale your business. Our data engineering service starts with drawing data engineering roadmaps to resolve your unique business problems. We help you obtain data-driven insights for business establishment, planning, and entering into new market territories for expansion. </p>
              <li>We monitor your operations to debug issues by adopting real-time preventive measures. We provide actionable, data-driven insights to grow your business by leveraging the latest technology, like machine learning algorithms and R programming language. </li>
              <br></br>
              <li>We help you collect data, and inspect it by combining it with complementary information to get actionable insights. </li>
              <br></br>
              <li>We enhance the supply chain of your asset management by streamlining data flow to various connected devices. </li>
              <br></br>
              <li>We leverage the latest networks like GoogleNET and ResNET to enable AI-driven machine vision services, such as image classification, super-resolution, and segmentation. </li>
              <br></br>
              <br></br>
              <h3><center>Our Approach to System & Software Services</center> </h3>

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    
                    <h4>Analyse </h4>
                    <p className="w-100" style={{ textAlign: "justify" }}>We examine the trends, patterns, and criteria through a micro-view of your enterprise objectives, processes, and more. 
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Build </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We adopt agility to develop excellent solutions. We work per a well-thought product roadmap and assess the progress at every stage to ensure the best quality and timely release.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Implement </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We play our role in helping clients achieve their business goals by implementing software solutions across various domains and technologies.  

                    </p>
                  </li>
                </ul>
                <br></br>
                <br></br>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="goal-text">
                <h5>Why Choose SPM Global Technologies </h5>
                <p>We create excellent engineering experiences by applying rich code.</p>
                

                <ul className="overview-list">
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Fabulous Tech Workforce </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We engage the most talented and experienced software professionals to execute every project to make your business idea or requirement a reality. We cover every stage of micro-management from ideation to release and support for the high-performing solutions being a top core system & software company. 
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Excellent Journey Assured </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We provide capability-enhancing engineering services to ensure a reliable and seamless journey. We provide system and software solutions to help you meet your business objectives by keeping engineering at the core of functioning. 
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Great Value Addition </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>We ensure service efficiency by adding value to the entire project execution, from ideation, architecture set-up, development, and development of the system and software solutions for you. Our most competitive pricing keeps us ahead of others. </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Faster and Integrated Delivery</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Our coding experts work together to adopt agile culture to deliver your code well in time and free from errors. We follow best practices at every stage, including strategizing, structuring, design, coding, development, to implementation. Our impeccable processes result in the best solutions as per your needs. </p>
                  </li>
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
            <h2 className="nunito-font">Technology We Use </h2>
            {/* <span className="sub-title purple-color">Several IT organizations are depending on ITSM services. BMC Helix ITSM has the following features:</span> */}

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '1000px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Framework </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix Service Providers facilitate building and resolving events quickly through smart, contextual, and practical event matching. BMC Helix Support Services allow natural language, unshaped data access of tickets, and recommended techniques of solving issues in an accurate manner. BMC Helix Vendors make use of improved service analytics to drive efficiency.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}><li>Protractor  </li>
                  
                  <li>Robot  </li>
                  
                <li>Django  </li>
                
                <li>Selenium </li>
               
                <li>TestNG  </li>
               
                <li>Pytest </li>
                
                <li>AngularJS  </li>
                
                <li>Warrior  </li>
                
                <li>MySQL  </li>
                
                <li>Cassandra</li>
                
                <li>mongoDB</li>
                
                <li>NodeJS </li>
                
                <li>Databases   </li>
                
                
                
                </p>
                

                
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '1000px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Container Technologies</a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM integrates Artificial Intelligence for identifying clusters of recurring events. This helps spontaneous analysis, and reorganizing problem management. Further, this enables agents to emphasize challenge areas and decrease load of the management team.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                  <li>Docker</li>
                <br></br>
                <li>Docker Plugins </li>
                <br></br>
                <li>Docker Extensions </li>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Serverless Technologies </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM allows agile DevOps enterprises to maximize their process of delivery and quality of service. This feature enables a simplified change request process with a Drag-and-drop change calendar, automated contextual clash detection as well as making an impact analysis.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>Power BI  </li>
                <br></br>
                <li>Jupyter  </li>
                <br></br>
                <li>Instrumentations  </li>
                <br></br>
                <li>Addons </li>
                <br></br>
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Orchestrators </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>This feature helps to deliver a flawless service through multi-cloud environments. IT managers work in a flexible and configurable cloud-based multi-service. Using this facet, the IT project team members have effective collaboration with various BMC Helix ITSM Third-Party Vendors for resolving issues.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>Kubernetes  </li>
                <br></br>
                <li>MESOS  </li>
                <br></br>
                <li>Red Hat Openshift  </li>
                <br></br>
                <li>Swarm  </li>
                <br></br>
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Metric Generation and Collection </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>This feature helps to deliver a flawless service through multi-cloud environments. IT managers work in a flexible and configurable cloud-based multi-service. Using this facet, the IT project team members have effective collaboration with various BMC Helix ITSM Third-Party Vendors for resolving issues.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>DATADOG  </li>
                <br></br>
                <li>Dynatrace</li>
                <br></br>
                <li>OPENTRACING </li>
                <br></br>
                  

               </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Tracing </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>This feature helps to deliver a flawless service through multi-cloud environments. IT managers work in a flexible and configurable cloud-based multi-service. Using this facet, the IT project team members have effective collaboration with various BMC Helix ITSM Third-Party Vendors for resolving issues.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>JAEGER </li>
                <br></br>
                <li>OPENTRACING </li>
                <br></br>

                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Graph Tools & Databases </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>This feature helps to deliver a flawless service through multi-cloud environments. IT managers work in a flexible and configurable cloud-based multi-service. Using this facet, the IT project team members have effective collaboration with various BMC Helix ITSM Third-Party Vendors for resolving issues.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>Gremlin </li>
                <br></br>
                <li>JanusGraph </li>
                <br></br>
                <li>Neo4j </li>
                <br></br>
               
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>NoSQL & Indexing Tools  </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM provides the insights to visualize cross-functional services as well as operational management. Powerful analytics and the automatic formation of natural language narratives enable users to get a quick insight into substantial data. In addition, IT professionals visualize data about Changes, Incidents, Metrics, Chatbot Conversations, Service Requests, Events, Capacity, etc. There are several exclusive visualizations in BMC Helix ITSM.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>Cassandra  </li>
                <br></br>
                <li>Elastic </li>
                <br></br>
                <li>Mongo DB  </li>
                <br></br>
                <li>Solr </li>
                <br></br>
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Programming Languages </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>This feature helps to deliver a flawless service through multi-cloud environments. IT managers work in a flexible and configurable cloud-based multi-service. Using this facet, the IT project team members have effective collaboration with various BMC Helix ITSM Third-Party Vendors for resolving issues.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>Java </li>
                <br></br>
                <li>JavaScript  </li>
                <br></br>
                <li>Python</li>
                <br></br>
                <li>R-Programming</li>
                <br></br>
                <li>Scala</li>
                <br></br>
                
                

                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Messaging Tools </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM Third Party Vendor helps you get cohesive, industry-leading knowledge management competencies with smart recommendations. This facilitates bringing the correct information to the end-users and agents for resolving issues in a fast and accurate manner. Integrated knowledge-centered Service enables fast and accurate delivery.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>Akka </li>
                <br></br>
                <li>kafka </li>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                </p>
              </div>
            </div>
            
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Big Data Tools </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>Contemporary self-service offers spontaneous and intelligent customer experience to enable organizations to step into future work. Intellectual self-service enables employees to fast resolve problems before submitting a request. A cohesive service catalog removes misperception, by presenting services from manifold business units in a single set.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>Flink  </li>
                <br></br>
                <li>Hadoop </li>
                <br></br>
                <li>Spark  </li>
                <br></br>
                <li>Hadoop YARN </li>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>AI/ML Techniques </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM also delivers comprehensive lifecycle management of IT assets, from the stage of procurement to the end of the product lifecycle. This helps to track asset devaluation in the due course of time. Moreover, with BMC Helix Trainings, you can ensure compliance, evading audit costs along with software license management.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>Statistical Analysis  </li>
                <br></br>
                <li>Classification </li>
                <br></br>
                <li>Deep Learning  </li>
                <br></br>
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Cloud Services</a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>This feature of BMC Helix ITSM supports the ITSM process through a single-source reference for all IT infrastructure and services. Moreover, it helps to enhance the user experience with a contemporary, persona-based User Interface. You can boost efficiency and stability with a single source of reference for all IT infrastructure and services.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>AWS </li>
                <br></br>
                <li>Azure </li>
                <br></br>
                <li>Google Cloud </li>
                <br></br>
                <li>IBM Cloud   </li>
                <br></br>
                <li>Networking </li>
                <br></br>
                <li>ML Tools  </li>
                <br></br>
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                <Image src={dummyimg} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>High-Performance User Interfaces Authentication & Authorization </a>
                </h5>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>The service request management feature of BMC Helix Implementation helps you to describe a catalog of service requests. This reflects the services provided to internal and external clients. You can quickly obtain efficiency in the delivery and IT services support. Self-service solutions of BMC Helix ITSM implementation include incidents, modifications, assets, and work orders.</p> */}
                <p className="w-100" style={{ textAlign: "justify" }}>
                <li>Angular</li>
                <br></br>
                <li>DB</li>
                <br></br>
                <li>Vue.js</li>
                <br></br>
                <li>KEYLOAK</li>
                <br></br>
                <li>Okta</li>
                <br></br>

                </p>
                <br></br>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=system-software&populate=*`
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