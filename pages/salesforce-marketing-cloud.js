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
      <PageTitle page="Salesforce Marketing Cloud" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Salesforce Marketing Cloud" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4>Welcome to SPM Global Technologies- The Leading Salesforce Marketing Cloud Service Providers!</h4>
                <p style={{ textAlign: "justify" }}>Salesforce Marketing Cloud (SFMC) is features an enriched marketing automation platform that helps you improve customer engagement with fostered personalized experience. SPM Global Technologies as the top-performing Marketing Cloud Third Party Vendor and dependable Marketing Cloud consultant offer objective-oriented Marketing Cloud Support services.</p>
                <h4 className="nunito-font">
                  Qlik Sense Consultant
                </h4>
                <h6>Salesforce Marketing Cloud – A Game Changer SaaS Platform
                </h6>
                <p style={{ textAlign: "justify" }}>Outsourcing Marketing Cloud managed services have become an increasing trend for businesses poised to grow by improving customer relationships and engagement. As being a prominent Marketing Cloud vendor, SPM Global Technologies adds more value to features & functionalities of SFMC that become a game-changer for the performance and growth rate of private and public sector businesses in automotive, communications, CPG/retail, financial services, healthcare, higher education, life sciences, manufacturing, media, non-profit</p>
                <p style={{ textAlign: "justify" }}>In the capacity of Marketing Cloud consultant or Salesforce marketing Cloud Service providers, we offer a purpose-oriented comprehensive range of on-site and virtual Salesforce trainings facilitating you to enrol for the best suitable and required Salesforce Marketing Cloud trainings that have become a must-have competitive advantage for-</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Small to Medium Business (under 200 employees)
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Commercial (200 to 999 employees)
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Enterprise (1000+ employees)
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
                <h4>Features and Capabilities of Salesforce Marketing Cloud that We Customize:</h4>
                <h6>Salesforce Marketing Cloud, the world’s leading marketing platform has excellent capabilities to support a range of marketing facets including-</h6>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Customer Journeys
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Audience Segmentation
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Multi-Channel Campaign Execution
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Social Media Engagement
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Pre-Campaign Analytics
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Social Media Advertising
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Post-Campaign Analytics
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Data Management
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Audience Building
                  </li>
                </ul>
                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a className="btn-style-one dark-green-color" style={{ textAlign: "justify" }}>
                    Our Salesforce Marketing cloud experts optimize each functionality to give an edge to marketing campaigns and individuals’ performances. We analyze your concerns and data to explore the possibilities and chart out the best strategy for Marketing Cloud implementation. Our tailor-made Marketing Cloud Managed Services help you embrace particular features and capabilities: </a>
                </div>
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
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Salesforce Marketing Social Studio
                </h5>
                <p style={{ textAlign: "justify" }}>It is a comprehensive solution to schedule, create, monitor, and manage collaborative social media marketing efforts. The unified interface facilitates to organizing the social media posts by region, multiple teams, individuals, and brand.</p>
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
                <h5 className="nunito-font">
                  Salesforce Marketing Email Studio
                </h5>
                <p style={{ textAlign: "justify" }}>It helps to use data and relevant information from different departments to create and design effective emails managed with an automated process like a Marketing Cloud Email specialist. It simplifies to target the intended and segmented audience that improves customer engagement. It helps to use intelligence to identify the right target audience and to send the relevant content.</p>
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
                <h5 className="nunito-font">
                  Salesforce Marketing Advertising Studio
                </h5>
                <p style={{ textAlign: "justify" }}>It is a great help to build effective advertising campaigns by using data available in Sales Cloud, Service Cloud, and Marketing Cloud. It empowers you to target audiences at their preferred social media platforms as well as to find new potential customers that behave like your existing customers.</p>
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
                <h5 className="nunito-font">
                  Salesforce MuleSoft Integration
                </h5>
                <p style={{ textAlign: "justify" }}>It provides an integrated platform for connecting data, devices, and applications in on-premises and cloud environments. MuleSoft's Salesforce Connector allows you to access all Salesforce entities for automation of business processes to support the sales teams in increasing revenue and the customers better.</p>
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
                  <a>Salesforce Einstein AI</a>
                </h3>
                <p style={{ textAlign: "justify" }}>This artificial intelligence technology powered by Einstein Vision gives Sales Cloud and Marketing Cloud a comprehensive up-to-date view of sales prospects and potential customers. It also provides insights into the stage of a potential customer in buying cycle and the most preferred way to communicate.</p>
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
                  <a>Salesforce Marketing Pardot for B2B Marketing</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Install Salesforce Pardot to increase leads and revenue. Salesforce Pardot unifies sales and marketing to generate better quality leads and to close the leads with a higher success rate. Automation with data-driven insights helps you capture B2B business opportunities.</p>
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
                  <a>Salesforce Lightning Enablement Pack</a>
                </h3>
                <p style={{ textAlign: "justify" }}>It is a bundle of customizable templates and rollout resources that make the Lightning Experience transition successful. Great power for admin and user group leaders, it guides to train team members for Salesforce usage. Lightning Enablement Pack is a must-have capability to leverage the benefits of online Salesforce Marketing Cloud training.</p>
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
                  <a>Salesforce Chatter for Enterprise Social Network</a>
                </h3>
                <p style={{ textAlign: "justify" }}>The world’s # 1 enterprise social collaboration software solution facilitates the employees to connect, share files, update, and collaborate for increased productivity and accelerated innovation. Working across organizational boundaries from any location becomes easier.</p>
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
                  <a>Salesforce Marketing DMP Audience Studio</a>
                </h3>
                <p style={{ textAlign: "justify" }}>It facilitates to the creation of data profiles, identifying new insights, and accessing different data sources. Audience Studio, a data management platform, helps to foster customer relationships through personalized marketing tactics.</p>
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
                  <a>Salesforce Productivity Tools to Improve Sales</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Marketing Cloud implementation comes with the power of Conga Composer, SUMO, Dooly, and Quip-like sales productivity improvement tools. Improvement in collaborative efforts, improved sales team productivity, and better customer experiences, faster closing of leads, better conversion rate, etc are the key outcomes of the integration of Salesforce productivity tools.</p>
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
                  <a>Salesforce Marketing Cloud Connect</a>
                </h3>
                <p style={{ textAlign: "justify" }}>It connects digital marketing capabilities and efficiencies with segmentation, campaign management, and data management tools. It streamlines personalized data-driven conversations faster and automates customer journeys. The consistent messaging and branding experience through improved customer engagement in relevant conversation drive more leads.</p>
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
                  Why Do You Need Marketing Cloud? What is Salesforce Marketing Cloud Benefits?
                </h3>
                <p style={{ textAlign: "justify" }}>Salesforce Marketing Cloud covers all the aspects of marketing whether it is B2B or B2C. Our Marketing Cloud managed services help you leverage the benefits of targeted personalized marketing for increased sales, revenue, and profits. Our industry best Marketing Cloud support Services help you have:
                </p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Knowledge of existing and potential customers
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Objective-oriented customized artificial intelligence franchise effective communication
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Improved experience in creating interest across the buying journey
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Data-driven insights of the customer journey across different devices and channels
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Pre-Campaign Analytics
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
                  What Do We Do as Marketing Cloud Third Party Vendor and Marketing Cloud Consultant?
                </h3>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies, named among the top Salesforce Marketing Cloud vendors, provides a range of support and services for Salesforce integration, implementation, usage, support, etc. Our strategic Salesforce Marketing Cloud support services help you adapt, evolve, and scale the customer journey rapidly in a fast-changing digital market space.</p>
                <p style={{ textAlign: "justify" }}>As being the leading Salesforce Marketing Cloud service providers with proven credibility, we help you send the right message at right time throughout the customers’ journey; this strategy generates more leads and converts more leads into sales.</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce Marketing Cloud Consulting
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce Marketing Cloud Implementation
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Marketing Cloud Product Customization
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce Marketing Cloud Integrations
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Marketing Cloud Support & Maintenance
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Pardot Customization & Automation
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce Marketing Cloud Consulting
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Campaign Designing & Management
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce Community Cloud Services
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
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p style={{ textAlign: "justify" }}>In addition to providing Salesforce managed services for the businesses, we offer customized instructor-led online Marketing Cloud training also that enable the marketing professionals to become-</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Field Services Lightning Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Salesforce Technical Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Salesforce Platform Developer
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Mobile Solutions Architecture Designer
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Marketing Cloud Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Marketing Cloud Social Specialist
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified System Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Pardot Specialist
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Application Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Pardot Consultant
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
                <Image src={dummyimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-tb" />
      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default Services;