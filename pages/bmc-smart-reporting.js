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

import SupportServices from "@/public/images/Support-Services.jpg";
import Reportinfprocesses from "@/public/images/Reportinf-processes.png";
import dummyicon from "@/public/images/dummy-icon.png";
import administeringbmcsmartreporting from "@/public/images/icon/administering-bmc-smart-reporting.png";
import installingremedysmartreporting from "@/public/images/icon/installing-remedy-smart-reporting.png";
import integratingbmcremedysmartreporting from "@/public/images/icon/integrating-bmc-remedy-smart-reporting.png";
import planningforbmcremedysmartreporting from "@/public/images/icon/planning-for-bmc-remedy-smart-reporting.png";
import troubleshooting from "@/public/images/icon/troubleshooting.png";
import upgradingbmcitsmartreporting from "@/public/images/icon/upgrading-bmc-it-smart-reporting.png";
import usingbmcremedysmartreportingcomponents from "@/public/images/icon/using-bmc-remedy-smart-reporting-components.png";


const questionsAnswers = [
  {
    question: "Q1: Can I see reports in Report Console to schedule them?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>You can see the Reports Remedy Smart Reporting interface. The reports can be scheduled by using broadcast options.</p>

  },
  {
    question: "Q2: Can I use a specific time period for report scheduling?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>You can’t have a particular time period for report scheduling.</p>
  },
  {
    question: "Q3: Will I need a license for the ‘Remedy Smart Reporting’ application?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>No, you don’t need to have a separate license for using ‘Remedy Smart Reporting’. Remedy ITSM license allows you to get access to Remedy Smart Reporting.</p>
  },
  {
    question: "Q4: Do you provide training for BMC Remedy Smart Reporting?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Yes. SPM Global Technologies, as one of the best Smart Reporting Vendors, conducts on-the-site and instructor-led online training for integrating BMC Remedy Smart Reporting.</p>
  },
  {
    question: "Q5: How can I access BMC smart reporting?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>It is simple.
        <li>1. Log in to BMC Remedy Mid-Tier.</li>
        <li>2. Access to Applications menu</li>
        <li>3. Select Smart Reporting to access Smart Reporting Console.</li>

      </p>
  },
  {
    question: "Q6: What is the role of the Consumer & Collaborator?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Users, assigned to Consumer & Collaborator role in BMC Smart Reporting, can access dashboards and reports. These users are allowed to broadcast, distribute, & email the reports.
      </p>
  },
  {
    question: "Q7: What is the difference between the roles of ‘Public Content Writer & Collaborator’ and ‘Public Content Writer & Collaborator – Advanced’?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        Users, assigned with Public Content Writer & Collaborator – Advanced role, have additional privilege to create & manage report approval, views, and a range of admin items.  These are allowed to update create fresh and delete views.
      </p>
  },
];


const Services = ({ seo }) => {
  
  return (
    <>
      <PageSeo seo={seo} pageName = "BMC Smart Reporting" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="BMC Smart Reporting" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                  SPM Global Technologies offers BMC Smart Reporting Support Services
                </h4>
                <p style={{ textAlign: "justify" }}>
                  BMC Remedy Smart Reporting is a web-based easy-to-use report writer much needed by non-technical users. Empowered by the Yellowfin platform, one of the BMC Helix ITSM products facilitates data selection and formatting through the conventional drag-and-drop method. SPM Global Technologies, globally known as the most efficient BMC Smart Reporting third-party vendor, provides cost-effective BMC Remedy Smart Reporting services & support to address your particular ITSM concerns.</p>
                <h4 className="nunito-font">Top Ten BMC Remedy Smart Reporting Components</h4>
                <p style={{ textAlign: "justify" }}>BMC Remedy with Smart Reporting sets an advanced workplace environment fostering a social and intuitive experience with mobile services desk; it helps you develop a more collaborative and knowledgeable workforce for particular IT roles. BMC Remedy Smart Reporting is a suite of components that can be customized for particular objectives. We as one of the top BMC Helix ITSM solution providers select and optimize each component to address a range of issues. Here is a list of 10 BMC Smart IT Reporting components:</p>

              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="BMC Smart Reporting Support Services.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '175px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Administration</h3>
                    <p>This Remedy Smart component is customized for automated management of content, users, settings, and security.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '175px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Data Sources</h3>
                    <p>It provides quick access to a database for real-time reporting. Each data source needs a separate connection for the particular report development.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '175px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Storyboards</h3>
                    <p>This component allows combining created reports with images, videos, and text.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '175px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Users</h3>
                    <p>The ‘user’ defines any person authorized to log in to Remedy Smart BMC Reporting with usage boundaries predefined by security administrators.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '175px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Timeline</h3>
                    <p>It is an auto-generated report that helps the users know occurred events and interact.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '175px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Discussion Streams</h3>
                    <p>This BMC Remedy Smart Reporting component facilitates having a collaborative feed containing reports, dashboard tabs, storyboards, images, and screenshots about a particular audience and topic.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '175px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Tasks</h3>
                    <p>It allows the users to interact for completing particular items like content creation, correction, or any other action.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '175px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Views</h3>
                    <p>It is a metadata layer in-between the data source and report creation. It specifies logic and fields to authorize the users for report creation.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '175px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Reports</h3>
                    <p>A report, accessible from multiple storyboards and dashboards tabs, details the combination of formatting, charts, and fields.
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '175px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Dashboard Tabs</h3>
                    <p>Dashboard tab displays the reports to consumers.
                    </p>
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
                <Image src={Reportinfprocesses} alt="man-with-son-image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                  How Remedy Smart Reporting Simplifies Reporting Processes
                </h4>
                <p style={{ textAlign: "justify" }}>
                  The fine-tuned integration of BMC Remedy Smart Reporting automates reporting system to keep the in-loop members informed. The enhanced ability to create interactive charts, rich data visualization, and cross-application reports improve the efficiencies of team members to know about the latest incidents. More in common BMC Remedy Smart IT Reporting applications and managed services that make it a worldwide popular reporting dashboard include:</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Quick commenting on the report
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Adding notes on a report for a particular period
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Broadcasting reports at set intervals
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Starting discussions regarding a report within a users’ group
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">BMC Smart Reporting Features and Functionality</h2>
            <p style={{ textAlign: "justify" }}>ROI of any technology integration depends upon the perfect match of functionality and critical issues to be dissolved. Our BMC Smart Reporting specialists analyze existing technical gaps in reporting processes that secretly harm productivity, performance, and quality. For being the top BMC ITSM specialists with years’ experience and proven expertise fine-tune each feature of Smart IT Reporting for seamless core functionality and managed services as your business model needs:</p>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="goal-text">

                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '300px' }}>
                      <i><Image src={dummyicon} alt="" /></i>
                      <h3>Deployment Functionalities</h3>
                      <p><strong>1.</strong> Available on enterprise</p>
                      <p><strong>2.</strong> Available on SaaS environment</p>
                      <p><strong>3.</strong> Options for multiple deployments</p>
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      style={{ height: '300px' }}
                    >
                      <i><Image src={dummyicon} alt="" /></i>
                      <h3>Self Service Reporting Functionalities</h3>
                      <p><strong>1.</strong> Easy report creation with drag & drop facility</p>
                      <p><strong>2.</strong> Rich data visualization</p>
                      <p><strong>3.</strong> Interactive charting</p>
                      <p><strong>4.</strong> Cross-application reporting</p>
                      <p><strong>5.</strong> Pre-populated views</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="goal-text">

                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '300px' }}>
                      <i><Image src={dummyicon} alt="" /></i>
                      <h3>Improved Collaboration Functionalities</h3>
                      <p><strong>1.</strong> Broadcasting of reports</p>
                      <p><strong>2.</strong> Commenting on reports</p>
                      <p><strong>3.</strong> Discussion initiation on any report</p>
                      <p><strong>4.</strong> Annotating to explain for improvement</p>
                      <p><strong>5.</strong> 90 out-of-the-box reports to start quickly</p>
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      style={{ height: '300px' }}
                    >
                      <i><Image src={dummyicon} alt="" /></i>
                      <h3>Administration Functionalities</h3>
                      <p><strong>1.</strong> Custom reports/dashboards creation</p>
                      <p><strong>2.</strong> Out-of-the-box KPI metrics for quick assessment</p>
                      <p><strong>3.</strong> Analysis of reporting server usage</p>
                      <p><strong>4.</strong> Administer reports generation</p>
                      <p><strong>5.</strong> Creation of new views and forms</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">BMC Remedy Smart Reporting Services by SPM Global Technologies</h2>
            <p style={{ textAlign: "justify" }}>We are providing turnkey services and support for BMC Smart Reporting integration over the years as a certified third-party vendor. We have helped the number of businesses to improve their performance, productivity, and quality by providing a roadmap for BMC Smart Reporting implementation. The industry-best a range of BMC Remedy Smart Reporting services, provided by SPM Global Technologies, address your diverse needs in the following domains:</p>

          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={planningforbmcremedysmartreporting} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  Planning for BMC Remedy Smart Reporting:
                </h5>
                <p style={{ textAlign: "justify" }}>Our experts optimize the planning for BMC Remedy Smart Reporting integration taking concerns of all the critical issues like security, user permissions, deployment architecture, upgrade, system requirements, language, etc.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={installingremedysmartreporting} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  Installing Remedy Smart Reporting
                </h5>
                <p style={{ textAlign: "justify" }}>After fool-proof planning for BMC Remedy Smart Reporting integration, we audit the requirement of different installers for different BMC Remedy Smart components. We help you to download the installation files, get BMC Remedy license keys, create a spreadsheet detailing different parameters, and create the database for installation. In addition, we support you to install different BMC components like BMC Remedy AR System, BMC Remedy Single Sign-On, BMC Remedy Mid-Tier, BMC Atrium CMDB, BMC Atrium Core Web Services, Atrium Integrator, BMC Configuration Drift Management, BMC Remedy ITSM core, BMC Service Request Management, BMC Service Level Management, BMC Remedy ITSM Process Designer, etc.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={integratingbmcremedysmartreporting} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  Integrating BMC Remedy Smart Reporting
                </h5>
                <p style={{ textAlign: "justify" }}>Our highly trained BMC experts help you with the hassle-free integration of BMC Remedy Smart Reporting. The services under this category take care of all your needs for Remedy AR System server installation, configuration problems, Windows authentication, connecting AR System data source with read-only replicated AR database, etc.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={upgradingbmcitsmartreporting} alt="" />
                </div>
                <h5 className="nunito-font">
                  Upgrading BMC IT Smart Reporting
                </h5>
                <p style={{ textAlign: "justify" }}>BMC releases updates the views with every new release. The support and services for BMC Remedy Smart Reporting upgrade help you to upgrade BMC Remedy Smart Reporting with the silent mode option. We audit the upgraded Smart Reporting; if we find any issue we initiate troubleshooting of Remedy Smart Reporting.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={usingbmcremedysmartreportingcomponents} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Using BMC Remedy Smart Reporting Components:</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Using BMC Remedy Smart Reporting Components:</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={administeringbmcsmartreporting} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Administering BMC Smart Reporting</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Our Remedy Smart Reporting specialists help the administrators with configuration settings, user creation, role permissions assigning, fixing access to views/ data sources/content folders, etc. Get BMC Smart Reporting Trainings from us and upgrade the skills of your IT team to make the most effective use of this solution.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={troubleshooting} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Troubleshooting:</a>
                </h3>
                <p style={{ textAlign: "justify" }}>The concern about problem-solving is natural for any new user of Remedy Smart Reporting but when you hire SPM Global Technologies for BMC Smart Reporting consultancy services, be sure of using the Smart Reporting ITSM tool in a trouble-free manner. We help you with troubleshooting in all the critical areas like user synchronization, performance, content synchronization, system information, logging, broadcasting, content import, etc.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="working-process-area ptb-100 bg-13965f">
        <div className="container">
          <div className="section-title">
            <div className="col-lg-12 col-md-12">
              <div className="working-process-text">
                <h2 className="nunito-font">
                  Why Hire SPM Global Technologies as BMC Remedy Smart Reporting Consultant</h2>
                <span className="sub-title">We are providing BMC services and support over the years as a leading ITSM solution expert. During the journey, we have helped many prestigious businesses to improve their growth rate by integrating advanced ITSM technologies; and, BMC Helix is one of them. By hiring SPM Global Technologies as your BMC Helix Smart Reporting service providers, you can be sure of getting:
                </span>
                <div className="row align-items-center">
              <div className="col-lg-12 col-md-1">
                <div className="goal-text">

                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Enhanced visibility into incidents and trends for strategy improvement of issue resolution rate</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Improved efficiencies</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Reduction of task completion time; hence, faster delivery</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Unprecedented ROI</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Competitively-priced BMC Helix Smart Reporting service support</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Online/on the site BMC Smart Reporting training</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Objective-oriented Smart Reporting managed services</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>On the time completion of BMC Remedy Smart Reporting integration</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Industry best service/support for BMC Remedy Smart Reporting</h3>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <h3>Affordable BMC Smart IT Reporting consultancy with a flexible scope</h3>
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

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <span className="sub-title"></span>
          <p>Our end-to-end consulting approach for BMC Smart Reporting integration develops an organizational culture of better organized IT teams, streamlined workflows at increased transparency, minimum silos, the fastest deliveries at peak efficiencies, prompt quality checks at each stage for zero-defect development, etc.</p>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=bmc-smart-reporting&populate=*`
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