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


import bmc from "@/public/images/icon/bmc.png";
import CompresehensivePerformance from "@/public/images/Compresehensive-Performance.png";
import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";
import actionableintelligence from "@/public/images/icon/actionable-intelligence.png";
import proactiveanalytics from "@/public/images/icon/proactive-analytics.png";
import reporting from "@/public/images/icon/reporting.png";
import rootcauseinvestigation from "@/public/images/icon/root-cause-investigation.png";
import usercentricperformance from "@/public/images/icon/user-centric-performance.png";


const questionsAnswers = [
  {
    question: "Q1: What is BMC TrueSight Operations Management?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC TrueSight Operations Management comprises an analytic-driven performance management service that detects and resolves accessibility and performance problems through hybrid IT environments.</p>

  },
  {
    question: "Q2: What is the cost of BMC TrueSight?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Normally, the standard package stands at about $8/month through annual subscriptions and $12/month on a month-to-month basis. Further, the advanced package comes at about $12 or $15. This is just an approximation. The cost may vary as per the business needs.</p>
  },
  {
    question: "Q3: What is TrueSight capacity optimization?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>TrueSight Capacity Optimization comprises a capacity management solution that provides you with the insight to optimize existing IT resources and plan for new ones. This facilitates collecting and analyzing the capacity data and key metrics for CPU and storage and offering endorsement to optimize them.</p>
  },
  {
    question: "Q4: What is TrueSight server automation?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>TrueSight Server automation manages security susceptibilities, organizes patches, and secures cloud servers. The solution helps to secure automated server lifecycle management.</p>
  },
  {
    question: "Q5: What are the key benefits of seeking TrueSight automation?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>TrueSight Automation helps to manage security, vulnerability, and provisions. Some of the key benefits include:
        <li>•	Improved operational efficacy</li>
        <li>• User protection from the intricacy</li>
        <li>•	Easy scalability without limit</li>
        <li>•	New on-demand technologies</li>
        <li>•	Open data access</li>
        <li>•	Simplified license management</li>
        <li>•	Virtual network management support</li>
      </p>
  },
  {
    question: "Q6: What is the key feature of BMC TrueSight Operations Management?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC TrueSight Operations Management facilitates Information Technology business in delivering quality digital services. Some of the key features include:
        <li>•	Actionable intelligence</li>
        <li>•	Practical analytics</li>
        <li>•	User-centric presentation</li>
        <li>•	Mobile-ready</li>
        <li>•	Capacity insight</li>
        <li>•	Reporting</li>
        <li>•	Root-cause study</li>
      </p>
  },
  {
    question: "Q7: What are the Activities undertaken through BMC TrueSight Operations Management?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        <li>•	Checking performance applications, infrastructure & middleware</li>
        <li>•	Dynamic visualization of applications</li>
        <li>•	Reducing event noise through IT analytics</li>
        <li>•	Becoming proactive with log analytics</li>
        <li>•	Making root cause analysis</li>
        <li>•	Understanding service impact of events</li>
        <li>•	Automatic prioritization of incidence</li>
        <li>•	Systematize event remediation & self-healing</li>
      </p>
  },
  {
    question: "Q8: What are the Integrations with BMC Solution Suite?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        <li>•	BMC BladeLogic Network Automation</li>
        <li>•	BMC TrueSight Capacity Optimization: </li>
        <li>•	BMC Remedy IT Service Management Suite:</li>
        <li>•	BMC Atrium Orchestrator</li>
      </p>
  },
];

const Services = ({ seo }) => {
  
  return (
    <>
      <PageSeo seo={seo} pageName = "BMC TrueSight" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="BMC TrueSight" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                  Comprehensive Performance Monitoring with BMC Truesight Operations Management
                </h4>
                <p style={{ textAlign: "justify" }}>
                  Want to deliver comprehensive performance monitoring and event management? Seek BMC TrueSight Operations Management solution. The technology makes use of  AIOps (Artificial Intelligence for IT operations) to dynamically learn the behavior and correlate. TrueSight automation is meant for servers especially accomplishes security vulnerabilities and other provisions, including configuration, patches, etc., and safeguards physical, virtual, and cloud servers.
                </p>
                <h4 className="nunito-font">What do enterprises think about BMC Truesight Operations Management?</h4>
                <p style={{ textAlign: "justify" }}>Enterprises are obtaining great value using BMC TrueSight Third Party Vendor and can deliver 99.99% uptime on the application services. They can decrease event noise at about 90% and MTTR (Mean Time to Repair) by around 50% or even more with TrueSight Consultant. Vulnerabilities are easily remediated in hours, instead of weeks, taking the help of BMC TSOM Service Providers.  Moreover, entrepreneurs can save over 1000 hours per month on compliance activities with competent TSOM Managed Services. Besides, server density can be augmented to 5X, boosting resource utilization and reducing IT infrastructure costs. TrueSight Managed Services helps you make effective use of available IT infrastructure.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={CompresehensivePerformance} alt="BMC TrueSight Service Providers
" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>What is BMC TrueSight operations management?</h3>
                    <p>TrueSight Operations Management is an integrated dais for service accessibility and performance management of an IT infrastructure. It combines event management, impact management, performance monitoring, and application modeling in a seamless solution for physical, virtual, and cloud environments.
                    </p>
                    <p>BMC TrueSight service providers empower IT to deliver quality digital services and that too in an efficient way. One can gain actionable intelligence or insight with cause analysis, performance learning, easy navigated workflows, and visualizations. Further, you can ensure reliable digital services for consistently delivering exceptional customer experience with the top TSOM Consultants.
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>What is BMC TrueSight capacity optimization?</h3>
                    <p>
                      <p style={{ textAlign: "justify" }}>This constitutes to be a capacity management service, offering the acumen for IT resource optimization to plan the new. The technique facilitates BMC TSOM Service Providers in collecting and analyzing the capacity data and core metrics for Central Processing Units, memory, as well as storage, and offers recommendations for optimizing them. Through BMC TrueSight Capacity Optimization, IT professionals can model future resource requirements and analyze what IT resources you would require. The IT infrastructure comprises physical, virtual, private cloud, as well as public clouds.</p>
                        <p style={{ marginBottom: '5px' }}><strong>capabilities of BMC TrueSight Capacity Optimization include:</strong></p>
                        <p style={{ marginBottom: '5px' }}><strong>•</strong> Capacity visibility</p>
                        <p style={{ marginBottom: '5px' }}><strong>•</strong> Risk  management</p>
                        <p style={{ marginBottom: '5px' }}><strong>•</strong>Resource optimization</p>
                        <p style={{ marginBottom: '5px' }}> <strong>•</strong>Capacity planning</p>
                      </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Why BMC TrueSight Operations Management is regarded as a turnkey solution?
                    </h3>
                    <p style={{ textAlign: "justify" }}>
                      BMC TrueSight Operations Management is often regarded as a turnkey solution provider by IT entrepreneurs, as it offers a detailed visualization of service performance. Operations Management assists IT teams, to merge operational silos and streamline efforts across various technology domains. As a result of which, the focus gets shifted from managing individual service components to the delivery of an excellent customer experience.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>What are the Business Challenges behind BMC TrueSight Adoption?
                    </h3>
                    <p style={{ textAlign: "justify" }}>
                      The customer demand for easy access to quality digital solutions has created operational challenges for Information Technology. In order to provide speed with simplicity, IT experts need to deal with interconnected enterprise applications as well as their dynamic infrastructure. Moreover, meeting customers’ expectations signifies continuing with behind-the-scenes Information Technology complexity, which is integral to the delivery of ideal end-user experiences, or losing clients to companies.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>What is the solution offered by BMC TrueSight Service Providers?
                    </h3>
                    <p style={{ textAlign: "justify" }}>
                      BMC TrueSight Operations Management bestows an integrated visualization of application and infrastructure performance throughout physical, virtual, and cloud environments. Considering the visibility into the mobile, web, and on-premise applications, BMC TSOM Service Providers offer the insight into IT operations for delivering high-quality digital services, effective enough to keep pace with business needs. BMC TrueSight Third-Party Vendors enable Information Technology professionals to ensure applications and services. TrueSight Consultants drive the business to perform optimally through examining operational standards, automatically revealing anomalies, gauging service impacts, and identifying risks. BMC TrueSight Trainings will make the IT teams self-sufficient in utilizing the features of the solution for your businesses.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">What are the Key Facets of TSOM Managed Services?</h2>
            <span className="sub-title purple-color">BMC TrueSight Operations Management supports the Information Technology business to deliver quality digital services in the most competent way.
            </span>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={actionableintelligence} alt="TrueSight Consultant" />
                </div>
                <h5 className="nunito-font">
                  Actionable intelligence
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>This facet facilitates TrueSight Consultants in gaining a deep insight with cause-analysis, learning of behavior, easy navigation workflows, and visualizations. BMC Atrium Orchestration helps you obtain actionable insights to implement in your business operations.</p>
              </div>
            </div>
            <div
              className="row justify-content-center justify-content-cente"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="PRO-ACTIVE-ANALYTICS.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Proactive analytics
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>TSOM Consultants find out behavioral and performance trends with the mechanized event and log analytics. This facilitates in preventing future impact with practical notifications.
                </p>
              </div>

            </div>
            <div
              className="row justify-content-center justify-content-cente"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="USER-CENTRICS-PERFORMANCE.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  User-centric performance
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>TSOM Managed Services help TSOM Consultants to comprehend application performances from the perspective of an end-user perspective, finding out the root cause and knowing the depth of the impact with contextual views and service models. BMC Orchestration helps you assess and optimize app performances.</p>

              </div>

            </div>
            <div
              className="row justify-content-center justify-content-cente"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Mobile-ready.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Mobile-ready
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Created on HTML5 and coded, BMC TrueSight Third Party Vendor can get the solution available on any mobile device.</p>

              </div>

            </div>
            <div
              className="row justify-content-center justify-content-cente"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Capacity-Insight.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Capacity insight
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC TrueSight Operations Management makes use of out-of-the-box capacity views for gaining visibility into infrastructure resources. This helps to visualize the use and availability of all infrastructure resources that are on-premises as well as in the public cloud. In addition, you can describe customized views as per requirements.</p>

              </div>

            </div>
            <div
              className="row justify-content-center justify-content-cente"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="REPORTING.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Reporting
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Using the out-of-the-box reporting feature, the project stakeholders can be informed about the capacity. Consequently, they can generate on-demand schedules and exceptional reports in varied formats of PDF, HTML, XLS, RTF and PPT.  This feature helps to automatically publish as well as send various reports through emails and improve cost visibility through Chargeback reports.</p>

              </div>
              <div className="services-box">
                <div className="icon">
                <MediaImage name="ROOT-CAUSE-INVESTIGATION.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Root-cause investigation
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Through proper BMC TrueSight Training, IT professionals can undertake investigation studies for viewing capacity and performance data systems in almost real-time. Moreover, BMC TrueSight Operations Management helps to perform troubleshooting and root-cause study for resolving problems on specific systems.</p>

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
                  Key Benefits of TrueSight Operations Management</h2>
                <span className="sub-title"></span>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Enhanced operational efficiency:</h3>
                  <p>
                    All essential network management functionality is fully amalgamated inside one product with a distinct user interface.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>User protection from complexity</h3>
                  <p>
                    TrueSight Operations Management creates an abstract layer between users and architecture. As a result, there is no need to touch essential architecture or handle manual integrations.</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Easy scalability without limit</h3>
                  <p>Federated architecture can easily scale, as servers automatically know the process of communicating with each other. Henceforth, IT professionals don’t have to be involved manually.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>New technologies on demand</h3>
                  <p>The technology supports several devices out of the box. However, if some of the devices are not included, IT professionals can add them on demand within a few hours or days.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Open access to data</h3>
                  <p>It is only the network management solution that enables the users to extract data into any application of their choice.

                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Simplified license management</h3>
                  <p>Central license server facilitates dynamic and scalable license allocation for simplified management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area bg-fff7f8 pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"></span>
            <h2>Activities are undertaken through BMC TrueSight Operations Management</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="single-services-box" style={{ height: '425px' }}>
                <div className="icon">
                <MediaImage name="Virtual-network-management-support.png" data={seo} />

                </div>
                <h3>
                  <a>Virtual network management support</a>

                </h3>
                <p>
                  Virtualized network management support enables the operational staff to take the full benefits of virtual environments, encompassing the addition of network management servers, load balancing, and failover.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="single-services-box" style={{ height: '425px' }}>
                <div className="icon">
                <MediaImage name="Monitoring-performance-of-application-infrastructure-middleware.png" data={seo} />

                </div>
                <h3>
                  <a>Monitoring performance of applications, infrastructure & middleware</a>

                </h3>
                <p>
                  You can take an application-centric view of infrastructure by integrating end-user expertise and application diagnostics with server monitoring, storage, and other infrastructural technologies.

                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="single-services-box" style={{ height: '425px' }}>
                <div className="icon">
                <MediaImage name="Dynamic-application-Visualization.png" data={seo} />

                </div>
                <h3>
                  <a>Dynamic application visualization</a>
                </h3>
                <p>
                  Opting for BMC TrueSight Training, you can automatically find out all tiers of an application. Further, you can visualize an application topology through graphical representation. Moreover, you can monitor comprehensive performance from User Interface code execution to back-end systems.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="single-services-box" style={{ height: '425px' }}>
                <div className="icon">
                <MediaImage name="Decreasing-event-noise-with-IT-analytics.jpg" data={seo} />

                </div>
                <h3>
                  <a>Decreasing event noise with IT analytics</a>
                </h3>
                <p>
                  A competent BMC TrueSight Training also helps you learn normal behavior and alert abnormalities for decreasing event noise.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="single-services-box" style={{ height: '425px' }}>
                <div className="icon">
                <MediaImage name="Getting-proactive-with-log-analytics-making-root-cause-analysis.png" data={seo} />

                </div>
                <h3>
                  <a>Getting proactive with log analytics & making root cause analysis</a>
                </h3>
                <p>
                  You can undertake probable root cause analysis and integrate log analytics for quickly identifying the root cause of problems.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="single-services-box" style={{ height: '425px' }}>
                <div className="icon">
                <MediaImage name="Comprehending service impact of events.png" data={seo} />

                </div>
                <h3>
                  <a>Comprehending service impact of events</a>
                </h3>
                <p>
                  Collect event details and form service impact models to visualize the health of the business services for prioritizing problem resolution.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="single-services-box" style={{ height: '425px' }}>
                <div className="icon">
                <MediaImage name="Automatic-incidence-prioritization.png" data={seo} />

                </div>
                <h3>
                  <a>Automatic incidence prioritization</a>
                </h3>
                <p>
                  As an IT manager, you can automatically connect the service desk and IT operations by adding configuration items to the incident and steering to the right resource.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="single-services-box" style={{ height: '425px' }}>
                <div className="icon">
                <MediaImage name="Mechanize-event-remediation-self-healing.png" data={seo} />

                </div>
                <h3>
                  <a>Mechanize event remediation & self-healing</a>
                </h3>
                <p>
                  You can also automate real-time resolution for recurring events throughout the box workflows or customizable run books.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h3 className="nunito-font">Are you integrating BMC TrueSight Operations Management with Performance Management?</h3>
            <p style={{ textAlign: "justify" }}>TrueSight Operations Management integrates seamlessly with BMC Proactive Performance Management (BPPM) for adding real-time network monitoring and complete visualization of service delivery across the IT environment. Together, TrueSight Operations Management and BPPM facilitate:
            </p>
            <p style={{ textAlign: "justify" }}>Eliminating expensive duplication of effort in managing data silos, “all-hands-on-deck “, finger-pointing, etc.</p>
            <p style={{ textAlign: "justify" }}>Enhancing automation, enabling IT enterprises to focus on projects, significant for the businesses.</p>
            <p style={{ textAlign: "justify" }}>Allowing improved MTTR (Mean Time to Repair) and a longer MTBF (Mean Time Between Failures) through practical problem resolution and deep network visibility.
            </p>
            <h3 className="nunito-font">A glance at the Integrations with BMC Solution Suite</h3>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                <MediaImage name="BMC Bladelogic network automation.jpg" data={seo} />

                </div>
                <h5 className="nunito-font">
                  <a>BMC BladeLogic Network Automation</a>
                </h5>
                <p style={{ textAlign: "justify" }}>BMC BladeLogic Vendors provide BMC BladeLogic Network Automation, which offers the configuration functionality of network management for completing the FCAPS model (fault, configuration, accounting, performance, security). Through the direct cross-menu launch, users could visualize configuration changes and compliance with the policy. BMC BladeLogic Network Automation facilitates automated management, control, and execution of server configuration in the data center and cloud.
                </p></div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                <MediaImage name="BMC TrueSight Capacity Optimization.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  <a>BMC TrueSight Capacity Optimization</a>
                </h5>
                <p style={{ textAlign: "justify" }}>This integrates network performance as well as configures data for TrueSight Operations Management for performance and capacity reporting, modeling, and planning capabilities for network devices and links. TrueSight Capacity Optimization helps you to optimize existing IT resources and make effective planning for the new ones. BMC TrueSight Capacity Optimization facilitates in analysis of capacity data and core metrics for Central Processing Unit and provides recommendations for enhancing them.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '1100px' }}>
                <div className="icon">
                <MediaImage name="BMC remedy IT services management suit.jpg" data={seo} />

                </div>
                <h5 className="nunito-font">
                  <a>BMC Remedy IT Service Management Suite</a>
                </h5>
                <p style={{ textAlign: "justify" }}>This mechanically starts the creation and population of required data details in BMC application processes for infrastructural devices under management. The BMC Remedy IT Service Management Suite is actually a powerful solution that exploits developing technologies like Artificial Intelligence and machine learning. Implementing BMC Remedy IT Service Management Suite helps you get predictive service management through assignment, classification, and routing of incidents. The integrated multi-cloud capabilities of the BMC Remedy IT Service Management Suite can be modified and released across cloud providers.
                </p></div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two"  style={{ height: '1100px' }}>
                <div className="icon">
                <MediaImage name="BMC Atrium Orchestrator.jpg" data={seo} />

                </div>
                <h5 className="nunito-font">
                  <a>BMC Atrium Orchestrator</a>
                </h5>
                <p style={{ textAlign: "justify" }}>BMC Atrium Orchestrator support services contribute to the depth of network inventory, and operational and forensic detailing for providing added visualization into an IT environment, enhancing the accuracy of network configuration management in BMC BladeLogic Network Automation. BMC Atrium Orchestrator support services facilitate an IT process automation. </p>
                <p style={{ textAlign: "justify" }}>BMC BladeLogic Vendors enable IT professionals to make the right workflows across various applications, and platforms. Moreover, BMC BladeLogic Vendors orchestrate crucial actions for the sake of compliance, security, and for providing a competitive advantage to clients. You can implement run book automation in your IT arena with BMC Atrium Orchestrator support services or BMC BladeLogic Vendors.
                </p>
                <p style={{ textAlign: "justify" }}>To configure the BMC TrueSight Operations Management Event server connection, consult one of the best service providers. The configuration would help you to forward events and incidents to specific slots. You can add collectors, cancellation, deduplication rules, and cross-context launch. Seek one of the best BMC TrueSight service providers and support your IT workflow in a competent way.
                </p>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=bmc-truesight&populate=*`
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