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
    question: "Q1:What is SAP HANA?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: SAP HANA (High-Speed Analytical Appliance) is an in-memory database platform developed that can be deployed on-premises or in the cloud. It utilises in-memory computing to store summarised data in random access memory rather than storing it in relational databases on disk drives. In comparison to locating data on standard disks, SAP HANA can access in-memory data 10,000 times faster. Therefore, it empowers companies to quickly analyze large amounts of data and process transactions in seconds rather than hours. 

        
      </p>

  },
  {
    question: "Q2: What is the difference between SAP and SAP Hana?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>SAP application encompasses the systems, its applications and products implementation. It is designed to run an SAP HANA database. Whereas, SAP HANA is said to be an in-memory database. It is a column-based relational database management system that is designed to store, retrieve and process all business activities and data. SAP HANA is not enabled to operate or manage any activity. It can directly store all the data. Most noteworthy, it is the job of SAP to run all the activities and sustain stable management of all business activities .
    
      </p>
  },
  {
    question: "Q3:What is SAP Hana a database?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>SAP HANA is an in-memory, column-oriented database, which encompasses advanced analytics besides high-speed transactions under a single system. This database system also operates as an application server and benefits companies build smart, insight-driven applications. Most of which are based on real-time data, in-memory computing, and machine learning technology. 
        {/* <li>earns up to $150,000/year. Almost 3.3 million new jobs for certified Salesforce are estimated to come on the surface by 2022.  .</li> */}
      </p>
  },
  {
    question: "Q4: Who uses SAP Hana?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Various companies adopt SAP HANA to supervise the manufacture and distribution of diverse products across several countries. Fascinatingly, some well-known firms that practice SAP HANA include Citrix, ConAgra, Audi AG, BASF North America, Burger King etc.
        
      </p>
  },
  
  {
    question: "Q5:Does SAP Hana require coding?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}> As being one of the top Sales Cloud consultants and Sales Cloud managed services providers, we offer comprehensive support to advance existing Sales Cloud by integrating, configuring, customizing task-oriented products/tools like - Partner Communities, Einstein Sales Analytics, Salesforce Inbox, AppExchange, Salesforce Sustainability Cloud etc.</p>
  },
  
];
{/* ------------------------------End Faq Q/A--------------------------------- */ }





const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "SAP" />
      <PageTitle page="SAP" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="SAP HANA " />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
              <h3 className="nunito-font">
              SAP HANA Cloud   
                </h3>
                <p style={{ textAlign: "justify" }}>SAP HANA stands for a high-performance analytic appliance. It is an in-memory, column-oriented, relational database management system produced and marketed by SAP. SAP HANA is built on the next-generation data processing design model for faster information processing. 
                </p>

                <p style={{ textAlign: "justify" }}>As the software running a database server, the primary function of SAP HANA is to store and reclaim data as demanded by the applications. In addition to the same, it accomplishes advanced analytics and includes extract, transforms, load capabilities as well as an application server. 

                </p>


                <p style={{ textAlign: "justify" }}>SAP HANA is a techno-functional module that presents a real-time platform that focalises database and application capabilities in memory to modify transactions and analytics.   

                </p>

                <p style={{ textAlign: "justify" }}>SAP Hana allows you to build specific data solutions amidst cloud-native scalability, speed, and performance. With the SAP HANA Cloud database, one can accumulate esteemed, business-ready information from a single solution. This can be processed while enabling security, privacy, and anonymization with proven enterprise reliability.    

                </p>

                <p style={{ textAlign: "justify" }}>This is considered to be a breakthrough technology, which can take business performance to another level. Some features of SAP HANA to look out for are, The benefits of SAP HANA cloud are:   

                </p>

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    On-premise, multi-cloud, and seamless hybrid deployments. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    With more than 32,000 customers, this is a secure, enterprise-ready database. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Its machine learning capabilities embed intelligence into applications and analytics. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    For transactional and analytical workloads with any data type, it offers an in-memory database. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Along with a seamless hybrid deployment, you can get a fully managed multi-cloud environment. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    It is connected, hence distributes data without the necessity to collect it. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    To instantly maintain performance, cost, and storage during volatility you get advanced data tiering. 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Get a cloud database as a service solution, which fulfils scalability, speed, and versatility. 
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
              <MediaImage name="SAP Cloud HAnA.png" data={seo} />
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
              <MediaImage name="SAP HANA Managed Services.png" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                
                <h3 className="nunito-font">
                SAP HANA Managed Services    
                </h3>
                <p style={{ textAlign: "justify" }}>SAP HANA managed services range in extent. Some service providers will simply run, maintain and observe your SAP HANA cloud instance. One can get managed service plans for SAP HANA by going up the scale of service depth. This includes security monitoring and performance service level agreements, as well as advisory and professional services. Certainly, most companies are administering SAP HANA in the cloud, as a portion of a more extensive portfolio of SAP system needs.
                </p>

                <p style={{ textAlign: "justify" }}>The rationale for SAP managed services is striking. Industry research reveals that about 60% of end-users prefer cloud services over on-premise. In case of factoring in the need for SAP support, security, compliance, cloud integration, DR and other services, it is not difficult to comprehend why customers end up with varied vendors to run SAP in the cloud. However, this is far from optimal. This type of set-up increments overhead and complexity, threatening SAP system reliability and opening up to various security risks. 
                </p>

                <p style={{ textAlign: "justify" }}>In case you require industry leadership and professional guidance for understanding and executing SAP HANA most efficiently, SAP HANA support services provide the same. 
                </p>


                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a className="btn-style-one dark-green-color" style={{ textAlign: "justify" }}>
                  <h3 className="nunito-font">
                SAP HANA Cloud Solutions   
                </h3>
                  SAP HANA can operate either on-premises or in a cloud environment. Cloud deployments of SAP HANA can befall anyplace along a spectrum of management complexity. At one point, you can run SAP HANA on public cloud infrastructure. This choice is very inexpensive, but you are liable for your cloud-based instance of SAP HANA. The public cloud providers only provide the infrastructure..</a>
                </div>
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
                SAP HANA Consultant 
                </h3>
                <p style={{ textAlign: "justify" }}>Planning, designing, implementing as well as maintaining the SAP-based solutions comes under the umbrella of SAP HANA Consultant. </p>
                <p style={{ textAlign: "justify" }}>SAP HANA Consultant is responsible for the following activities.
                </p>
                <span>The integrated automated support and scalable performance metrics help the sales teams and organizations both.</span>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    They are required to understand the business from a management reporting perspective. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Later map the customer needs in SAP HANA. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    And train users for using the SAP system. 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Lastly, design or enhance the system for the best data processing performance
                  </li>
                  
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
              <MediaImage name="SAP HANA Consultant.jpg" data={seo} />
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
                  {/* <Image src={dummyicon} alt="" /> */}
                  <MediaImage name="SAP HANA third-party vendors.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                SAP HANA third-party vendors 
                </h5>
                <p style={{ textAlign: "justify" }}>A third-party tool vendor expedites backing for SAP HANA to directly connect their backup agents to the SAP HANA database. SAP-certified third-party backup tools provide an alternate destination for data and log backups. SAP HANA dynamic tiering supports all third-party backup tools certified for backing with SAP HANA.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <MediaImage name="SAP HANA training.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                SAP HANA training 
                </h5>
                <p style={{ textAlign: "justify" }}>The certification exam verifies that the candidate has the fundamental knowledge required in the area of High-Performance Analytic appliances. This certificate proves that the candidate not only has the pre-requisite understanding of HANA but is also able to apply these skills practically under the supervision of a project lead. </p>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=sap-hana&populate=*`
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
