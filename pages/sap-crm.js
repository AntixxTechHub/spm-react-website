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


{/* ------------------------------Faq Q/A--------------------------------- */ }
const questionsAnswers = [
  {
    question: "Q1:What is SAP CRM System? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: SAP Customer Relationship Management is an integrated customer relationship management module developed by SAP. It helps any organization to accomplish their business goals and empowers them to perform all Customer Relationship tasks efficiently. CRM is a fundamental component for building business strategy for medium and large scale organizations. It also aids in recognising the customers, their needs and service efficiently. 

        
      </p>

  },
  {
    question: "Q2: Can I create my CRM?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Establishing a CRM from scratch can act as beneficial for the business. Most noteworthy, If you are seeking out-of-the-box CRM features, they are typically designed for a particular department like sales or marketing. In case one wants to create their CRM from scratch, it gives the liberty to choose what departments to focus on. 
    
      </p>
  },
  {
    question: "Q3:What is the difference between ERP and CRM?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>While the whole organization may rely on both ERP and CRM systems, the significant difference between ERP and CRM is that ERP is required for financial data and the finance department, whereas CRM is customer data utilised by the sales and customer service departments.
        {/* <li>earns up to $150,000/year. Almost 3.3 million new jobs for certified Salesforce are estimated to come on the surface by 2022.  .</li> */}
      </p>
  },
  {
    question: "Q4: What are the 5 benefits of CRM? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Various companies adopt SAP HANA to supervise the manufacture and distribution of diverse products across several countries. Fascinatingly, some well-known firms that practice SAP HANA include Citrix, ConAgra, Audi AG, BASF North America, Burger King etc.
        <li> 1. Increased Revenue and Decreased Overhead.  </li>
        <li> 2.Improved Customer Satisfaction.  </li>
        <li> 3.Marketing Optimization.   </li>
        <li> 4. Increased Collaboration and Coordination.  </li>
        <li> 5.Improved Data Insight and Analytics.   </li>
      </p>
  },
  
  {
    question: "Q5: Is SAP a good CRM?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>  SAP CRM is a pleasure to use, due to its reliability and the ease it offers to integrate with other SAP modules, such as the ERP, business warehouse etc. The ease of usage, as well as the ability to help track customer relationships across multiple channels are quite likeable.  </p>
  },
  
];
{/* ------------------------------End Faq Q/A--------------------------------- */ }





const Services = () => {
  return (
    <>
      <PageTitle page="SAP CRM" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="SAP CRM " />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
              <h3 className="nunito-font">
              SAP CRM   
                </h3>
                <p style={{ textAlign: "justify" }}>SAP CRM is one of the fundamental modules in an organization that ventures with managing customers adequately and efficiently. In the current competitive market environment, companies are obliged to make changes in a dynamic environment and consider the key activities related to customer service. 
                </p>

                <p style={{ textAlign: "justify" }}>The SAP CRM application was originally an integrated on-premises customer relationship management (CRM) software manufactured by SAP SE which targeted business software requirements for marketing, sales and service of midsize and big organizations in every industry and sector. 

                </p>


                <p style={{ textAlign: "justify" }}>SAP CRM is a part of the SAP ERP (Enterprise Resource Planning) business suite and is applied to implement customize business processes related to Customer Relationship Management CRM and to integrate with SAP and non–SAP systems. SAP CRM helps an organization to accomplish customer satisfaction by adhering to the service expectation and rendering products expected by customers.   

                </p>

                <p style={{ textAlign: "justify" }}>SAP CRM incorporates the following sub-modules that support key functions of Customer Relationship Management:      

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
                What do SAP CRM services have to offer?     
                </h3>
                <p style={{ textAlign: "justify" }}>SAP CRM offers a comprehensive end-to-end solution for business. It helps to increase customer loyalty and boost profitability. Once you choose this service, it allows the service professional to execute basic tasks such as a service agreement, contracts, service order management, etc. 
                </p>

                <p style={{ textAlign: "justify" }}>SPM Global Technologies is one of the best SAP CRM service providers, which has expertise in executing SAP CRM for any business model and transforms them. It has been a game-changer when it comes to software and related applications. We understand SAP technologies in and out and CRM is one of the core suites that we have extensively worked upon.   
                </p>

                <p style={{ textAlign: "justify" }}>CRM can be a complex software suite to be understood and implemented. Most noteworthy, the usability is quite high, the skilled software professionals can transform the present models and assist with SAP CRM applications and understanding. With our flexible approach and technical knowledge of the subject matter, the complete transformation process can be a smooth one for any business.  
                </p>


                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a className="btn-style-one dark-green-color" style={{ textAlign: "justify" }}>
                  <h3 className="nunito-font">
                  What does SAP consultants do?   
                </h3>
                SAP Consultant is a person who examines and produces new computer software. They present customized SAP solutions and integrate them with the existing IT program to facilitate the work in various domains of finance, human capital, operations, risk and compliance, customer, etc. using the SAP technologies.</a>
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
                What are the key features of CRM? 
                </h3>
                <p style={{ textAlign: "justify" }}>Currently, the customer relationship management systems include basic CRM functions, along with advanced CRM capabilities that go far beyond the contact sorting and filing functions of the past. Presently businesses can streamline all their customer-facing processes and establish relationships by locating the customer at the centre of the sales, marketing, commerce, and service activities.   </p>
                
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
              <Image src={dummyimg} alt="" />
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
              data-aos="flip-down"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                Lead management
                </h5>
                <p style={{ textAlign: "justify" }}>Identity, score, and track lead through the pipeline to transform more prospective customers into buyers. With CRM, one can integrate lead generation, pipeline management, and lead nurturing activities.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="flip-down"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <Image src={dummyicon} alt="" />

                </div>
                <h5 className="nunito-font">
                Interaction management
                </h5>
                <p style={{ textAlign: "justify" }}>Track all of the customer interactions, including emails, phone conversations, social media posts, and chat sessions to gain a 360° view of each customer and produce a constant cross-channel exposure.</p>
              </div>
            </div>

            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="flip-down"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <Image src={dummyicon} alt="" />

                </div>
                <h5 className="nunito-font">
                Contact management
                </h5>
                <p style={{ textAlign: "justify" }}>Securely save the customer information, including names, contact details, social media accounts, and communications preferences in a focal database that the entire team can obtain in real-time.</p>
              </div>
            </div>


            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="flip-down"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <Image src={dummyicon} alt="" />

                </div>
                <h5 className="nunito-font">
                Customer analytics
                </h5>
                <p style={{ textAlign: "justify" }}>Surface the accurate insights at the correct time with on-demand CRM reporting and interactive dashboards. One can predict what the customers want, personalize the experiences, and practice the right action at the moment. </p>
              </div>
            </div>


            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="flip-down"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <Image src={dummyicon} alt="" />

                </div>
                <h5 className="nunito-font">
                Secure, mobile CRM
                </h5>
                <p style={{ textAlign: "justify" }}>All the CRM features ought to be available anytime, anywhere, from any device. In addition to this, the cloud CRM should assist in streamlining the security, data privacy, and GDPR compliance requirements. </p>
              </div>
            </div>


            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="flip-down"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <Image src={dummyicon} alt="" />

                </div>
                <h5 className="nunito-font">
                Workflow automation
                </h5>
                <p style={{ textAlign: "justify" }}>Automate repetitious, hand-operated tasks such as contact record data entry and harness the power of embedded AI and machine learning to implement chatbot-based interactions on social media and in messaging apps.  </p>
              </div>
            </div>
            
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="flip-down"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <Image src={dummyicon} alt="" />

                </div>
                <h5 className="nunito-font">
                CRM integrations:
                </h5>
                <p style={{ textAlign: "justify" }}> Blend the CRM system with the website, email and calendar platforms, accounting and billing software, customer surveys, document management, and e-signatures, to do everything in one place.  </p>
              </div>
            </div>
            
            
            
           
            
            
            
          </div>
        </div>
      </div>

<div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">What are the five biggest benefits of CRM?  </h2>
            <span className="sub-title purple-color">There are countless ways a CRM system can help to capture the most out of customer interactions. The minutest refinement can boost customer retention and give profits through the roof. Imagine what the five biggest CRM benefits can do: </span>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Improved customer experience</h3>
                    <p style={{ textAlign: "justify" }}>Give contact centre reps and field service technicians a 360° view of customers, so they can produce personalized customer adventures and determine issues immediately</p>
                  </li>
                  <li
                    data-aos="zoom-in-right"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Work smarter with better collaboration</h3>
                    <p style={{ textAlign: "justify" }}>Share information across teams, departments, and internal and external stakeholders with collaborative CRM to better serve customers at every touchpoint. </p>
                    
                  </li>
                  <li data-aos="zoom-in-right" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Higher sales revenue</h3>
                    <p style={{ marginBottom: '15px' }}>Boost pipeline visibility and market more with integrated tools for sales force automation, lead management, forecasting, cross-selling, e-commerce etc.</p>
                    


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
                    <h3>Greater process efficiency</h3>
                    <p style={{ textAlign: "justify" }}>Help the sales, marketing, and service teams achieve more with less effort, by taking advantage of automated processes and scheduled follow-up prompts. </p>
                    
                  </li>
                  <li
                    data-aos="zoom-in-right"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Increased customer retention</h3>
                    <p style={{ textAlign: "justify" }}>Attract the customers with personalized service that acquires loyalty. Run real-time analytics to recognise the best offers, the right timing, and the optimal channel.</p>
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







export default Services;
