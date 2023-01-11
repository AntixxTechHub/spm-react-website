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
import Service1 from "@/components/Contact/Service1";


import dummyicon from "@/public/images/dummy-icon.png";
import bmc from "@/public/images/icon/bmc.svg";
import implementationmbc from "@/public/images/implementationmbc.png";
import discovery from "@/public/images/discovery.png";
import costtransparecny from "@/public/images/cost-transparecny.png";
import EnhancedSecurity from "@/public/images/Enhanced-Security.png";
import serviceawareness from "@/public/images/Service-Awareness.png";
import integratingbmchelixdiscovery from "@/public/images/icon/integrating-bmc-helix-discovery.png";
import maintenanceofbmchelixdiscovery from "@/public/images/icon/maintenance-of-bmc-helix-discovery.png";
import planningforbmchelixdiscoveryimplementation from "@/public/images/icon/planning-for-bmc-helix-discovery-implementation.png";
import securityauditforbmchelixdiscoveryimplementation from "@/public/images/icon/security-audit-for-bmc-helix-discovery-implementation.png";
import useofbmchelixdiscovery from "@/public/images/icon/use-of-bmc-helix-discovery.png";

const questionsAnswers = [
  {
    question: "Q1: Will I experience any impact on the existing performance while implementing BMC Helix Discovery?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Our experts implement BMC Helix Discovery ensuring minimal impact on the existing environment. The BMC Helix Discovery features and capabilities are lightweight, agent-free, and non-intrusive.</p>

  },
  {
    question: "Q2: What discovery techniques are used in BMC Helix Discovery?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix Discovery uses three major discovery techniques:
        <li><strong>1.</strong> Network scanning</li>
        <li><strong>2.</strong> SNMP</li>
        <li><strong>3.</strong> Remote command execution</li>
      </p>
  },
  {
    question: "Q3: Can BMC Helix Discovery integration drive any risk to existing network and application infrastructure?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>No. The standard techniques of BMC Helix Discovery don’t destabilize any element of existing infrastructure. Instead, the BMC Helix Discovery security audit informs you to remove rogue elements not aligned with corporate policy.</p>
  },
  {
    question: "Q4: Can I reset the BMC Helix Discovery user password?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Yes. You can reset your log password in BMC Helix Discovery through the command line after login into your account.</p>
  },
  {
    question: "Q5: What is the latest development in BMC Helix Discovery?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>In March 2021, BMC introduced Service modeling enhancements for 21.02 BMC Helix AIOps. The new features will empower IT service operation professionals to predict better and resolve issues faster.</p>
  },
  {
    question: "Q6: If I hire and implement BMC Helix Discovery, what will be the process?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>First of all, our BMC Helix Discovery experts will analyze the requirements. The 2nd step will be to audit the existing infrastructure, application model, service processes, etc. Our experts will structure a detailed plan sharing with you data-driven insights about the identified gaps, benefits, requirements, process, initial stage challenges, completion period etc. </p>
  },
];


const Services = ({ seo }) => {
  
  return (
    <>
      <PageSeo seo={seo} pageName = " BMC Helix Discovery" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="BMC Helix Discovery" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                  BMC Helix Discovery Implementation & Consulting by SPM Global Technologies
                </h4>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies, reputed BMC Helix Discovery Service Providers, are a global leader in providing objective-oriented BMC Helix Discovery services. We help businesses to get a competitive advantage by implementing BMC Helix Discovery. Our strategic approach for BMC Helix Discovery implementation empowers businesses to improve operational efficiencies, cost-effectiveness, and competencies in different domains.</p>
                <h4 className="nunito-font">
                  What is BMC Helix Discovery?
                </h4>
                <p style={{ textAlign: "justify" }}>The SaaS-based cloud-native BMC Helix Discovery is a globally trusted system that provides data-driven insights into software, hardware, and service dependencies across hybrid, on-premises, and multi-cloud environments. BMC Helix Discovery, a data discovery system, automatically maps different applications to IT infrastructure.
                </p></div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={implementationmbc} alt="man-with-son-image" />
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
                <Image src={discovery} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h4 className="nunito-font">
                  How Does BMC Helix Discovery Work?
                </h4>
                <p style={{ textAlign: "justify" }}>Helix Discovery analyzes data inventory, configuration sets, and objective-relevant relationship data to help the businesses take quick and right decisions. Its discovery capabilities smoothly manage the complexity of a range of configurations including container management, mainframe, legacy & hyper-converged infrastructure, cloud services etc. BMC Discovery informs about how the elements are connected and what their relational dependencies are. The information facilitates the IT teams to have a context-based inventory at any stage in infrastructure. Working with the best BMC Helix Discovery Third-Party Vendor will keep your data elements in sync.</p>
                <p style={{ textAlign: "justify" }}>All the credentials and firewall rules used in BMC Helix Discovery implementation are local and under the users’ control. It generates customized datasets and topologies to facilitate IT service teams to leverage machine learning and AIOps for root cause analysis, anomaly detection, service management, and cost optimization. BMC Helix Discovery Vendors implement the features as per your operation-specific needs. </p>
                <p style={{ textAlign: "justify" }}>As of today, BMC Helix Discovery is the most used scalable service and operation management system for improving innovation, efficiency, and productivity. Our dedicated Helix Discovery Support Services specialists leverage the benefits of BMC Helix Discovery to help you stay ahead of competitors. Working with certified BMC Helix Discovery Service Providers helps you make the most effective use of the solution for your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Why Do Businesses Rely On BMC Helix Discovery? Ten Benefits of BMC Helix Discovery:</h2>
            <p className="w-100" style={{ textAlign: "justify" }}>
              BMC Helix Discovery derives insights for IT processes improvement. It improves productivity and performance by providing actionable insights to make data-oriented decisions for the qualitative and quantitative improvement in IT asset management, IT service management, and IT infrastructure, IT operations management. An experienced Helix Discovery Consultant helps your business improve productivity by establishing an excellent incident management mechanism. The data-driven insights benefit the businesses to:</p>
            <span className="sub-title purple-color">Here are a few practical benefits that your business enjoys as you adopt this ITSM tool:</span>
            <div className="overview-item">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 overview-content">
                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <i className="flaticon-draw-check-mark"></i>
                      Reduce the incidents caused by changes
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Reduce time for isolating the root cause
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Reduce time for preparing audits
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Prevent audit penalties
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Prioritize incidents
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 overview-content">
                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <i className="flaticon-draw-check-mark"></i>
                      Optimize data center software and hardware
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Optimize cost and service management
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Identify vulnerabilities and blind spots
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Integrate REST API into CI and CD
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Improve consistency in improving service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="">
                  <div className="icon">
                    <Image src={EnhancedSecurity} alt="" />
                  </div>
                  <h3 className="nunito-font">Enhanced Security</h3>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="">
                  <div className="icon">
                    <Image src={serviceawareness} alt="" />
                  </div>
                  <h3 className="nunito-font">Service Awareness</h3>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="">
                  <div className="icon">
                    <Image src={costtransparecny} alt="" />
                  </div>
                  <h3 className="nunito-font">Cost Transparency</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="section-title">
            <h2 className="nunito-font">Top Ten BMC Helix Discovery Capabilities Your Business Needs Essentially:</h2>
            <p className="w-100" style={{ textAlign: "justify" }}>Most of the top-ranking businesses face a common challenge: be more agile or be left behind. BMC Helix Discovery is empowered with next-generation features that are a must-have for any business pertinacious to continuously improve service standards. Helix Discovery Managed Services empower your organizations by helping you embrace the solution with its optimum utilization across operations. The leading organizations rely on BMC Discovery to have a single-pane holistic view across the multi-cloud environment. BMC Discovery provides the following key capabilities for the digital transformation of services:</p>
            <span className="sub-title purple-color"> BMC Discovery provides the following key capabilities for the digital transformation of services:
            </span>
            <div className="overview-item">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 overview-content">
                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <i className="flaticon-draw-check-mark"></i>
                      Automated, agentless discovery
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Dependable mapping
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Seamless configuration
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Optimized asset and change management
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Infrastructure and operational support
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 overview-content">
                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <i className="flaticon-draw-check-mark"></i>
                      Cost modeling
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Applications implementation
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Advanced security, audit and compliance
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Risk management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="services-area with-top-border pt-100 pb-75 bg-13965f">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">10 BMC Helix Discovery Features That Businesses Need To Stay Competitive</h2>
            <p style={{ textAlign: "justify" }}>The proper selection of BMC Helix Discovery features according to the business model maximizes the ROI. Our in-house BMC Helix specialists optimize the selection of BMC Helix Discovery features to maximize the advantage of addressing the particular issue. The ten featured components of BMC Helix Discovery that make it the most dependable multi-could system to accelerate growth by improving service and operational standards include:</p>

          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="BMC-Discovery-Outpost.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  BMC Discovery Outpost:
                </h5>
                <p style={{ textAlign: "justify" }}>BMC Discovery Outpost obtains information about the integrated software and hardware. BMC Helix Discovery sends a request to scan an IP address to Discovery Outpost; and, BMC Discovery Outpost audits the target IP address based on credentials.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="BMC-Helix-Discovery-Services.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  BMC Helix Discovery Service:
                </h5>
                <p style={{ textAlign: "justify" }}>BMC Helix Support Services enable businesses for cognitive service management. It responds to requests made by the registered Outpost and creates “inferred” data.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Security-Communication.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Security of Communication
                </h5>
                <p style={{ textAlign: "justify" }}>It reinforces the communication security between different BCM agents. BMC Helix Discovery Third-Party Vendors help you establish a seamless communication channel.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="CMDB-Synchronization.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  CMDB Synchronization
                </h5>
                <p style={{ textAlign: "justify" }}>It is a configurable mechanism to store data synchronized with the information provided by BMC Discovery.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Data-Provenance.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>Data Provenance:</a>
                </h3>
                <p style={{ textAlign: "justify" }}>It allows to assess inferred data in UI with access to origin of the information. It informs about the command, origin, and time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="funfacts-area bg-#ffaa29 pt-100">
        <div className="container">
          <div className="section-title" style={{ marginBottom: '15px' }}>
            <span className="sub-title yellow-color"></span>
            <h2 className="nunito-font">BMC Helix Discovery Consulting & Integrating Services by SPM Global Technologies:
            </h2>
          </div>
          <p style={{ textAlign: "justify" }}>For being a BMC cloud partner for over the years, we have helped a number of businesses to implement BMC Helix Discovery. Our highly trained BMC Helix Discovery experts leverage the practical benefits of each featured component by optimizing the implementation practice. SPM Global Technologies, as being the top-performing BMC Helix Discovery service provider, simplifies getting started with BMC Helix Discovery by providing tailor-made Helix Discovery Trainings, consulting, and implementation services.</p>
          <p style={{ textAlign: "justify" }}>As one of the best BMC Helix Discovery managed services providers, we offer a range of services to help you improve your competencies by integrating BMC Helix products to address particular concerns. Our customized BMC Helix services simplify the entire process because our years’ experience in integrating BMC products helps us to understand the requirements by the depth. Because of being the prominent BMC Helix Discovery Vendors, what we offer for BMC Helix Discovery integration is not limited to:</p>
          <div className="services-area with-top-border pt-100 pb-75">
            <div className="container">
              <div className="section-title">
                <h2 className="nunito-font"></h2>
              </div>
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="single-services-item style-two" style={{ height: '450px' }}>
                    <div className="icon">
                      <Image src={planningforbmchelixdiscoveryimplementation} alt="" />
                    </div>
                    <h5 className="nunito-font">
                      Planning For BMC Helix Discovery Implementation
                    </h5>
                    <ul className="skill-list">
                      <li>
                        <p className="w-100" style={{textAlign: 'left'}}>• System requirements</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Licensing entitlement</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Audit of overlapping IP addresses</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Network usage audit</p>
                      </li>
                    </ul>
                  </div>

                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="single-services-item style-two" style={{ height: '450px' }}>
                    <div className="icon">
                      <Image src={maintenanceofbmchelixdiscovery} alt="" />
                    </div>
                    <h5 className="nunito-font">
                      Maintenance of BMC Helix Discovery
                    </h5>
                    <ul className="skill-list">
                      <li>
                        <p className="w-100" style={{textAlign: 'left'}}>• Managing standard data</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Licenses</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Users, security, and data privacy</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Administration interface…</p>
                      </li>
                    </ul>
                  </div>

                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="single-services-item style-two" style={{ height: '450px' }}>
                    <div className="icon">
                    <MediaImage name="bmc helix discovery troubleshooting 1.png" data={seo} />
                    </div>
                    <h5 className="nunito-font">
                      BMC Helix Discovery Troubleshooting
                    </h5>
                    <ul className="skill-list">
                     
                        <p className="w-100" style={{textAlign: 'left'}}>• Performance improvement</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Managing Outpost logs</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Cloud service discovery problem solving</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Troubleshooting AWS System Manager…</p>
                      
                    </ul>
                  </div>

                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="single-services-item style-two" style={{ height: '475px' }}>
                    <div className="icon">
                      <Image src={securityauditforbmchelixdiscoveryimplementation} alt="" />
                    </div>
                    <h5 className="nunito-font">
                      Security Audit for BMC Helix Discovery Implementation
                    </h5>
                    <ul className="skill-list">
                      <li>
                        <p className="w-100" style={{textAlign: 'left'}}>• Discovery communications</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Information security</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Available Network ports</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Dark space scans</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• FIPS compliance</p>
                      </li>
                    </ul>
                  </div>

                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="single-services-item style-two" style={{ height: '475px' }}>
                    <div className="icon">
                      <Image src={integratingbmchelixdiscovery} alt="" />
                    </div>
                    <h5 className="nunito-font">
                      Integrating BMC Helix Discovery
                    </h5>
                    <ul className="skill-list">
                      <li>
                        <p className="w-100" style={{textAlign: 'left'}}>• Use of REST API</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Export of discovered data</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• CMDB synchronization</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Integrating credential brokers</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Setting BMC-Helix Single Sign-On</p>
                      </li>
                    </ul>
                  </div>

                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="single-services-item style-two" style={{ height: '475px' }}>
                    <div className="icon">
                      <Image src={useofbmchelixdiscovery} alt="icon" />
                    </div>
                    <h5 className="nunito-font">
                      Use of BMC Helix Discovery
                    </h5>
                    <ul className="skill-list">
                      <li>
                        <p className="w-100" style={{textAlign: 'left'}}>• Configuring credentials</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Running discovery</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Configuring discovery</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Improving discovery</p>
                        <p className="w-100" style={{textAlign: 'left'}}>• Discovering cloud services</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Why Hire SPM Global Technologies For BMC Helix Discovery Implementation</h2>
            <p className="w-100" style={{ textAlign: "justify" }}>Our in-house world-class BMC experts help you reinvent your business and improve digital operations. We have helped a number of businesses to improve their operational efficiencies by providing comprehensive support for integrating BMC products including BMC Helix Remedyforce, BMC TrueSight, BMC Control-M, BMC Helix Discovery and others. The tailor-made BMC Helix Discovery solutions are highly effective to improve the business values of cloud IT automation. Besides the proven credibility for designing and integrating cloud-based business automation solution, SPM Global Technologies has many reasons to become your dependable BMC Helix Discovery consultant:</p>
            <div className="overview-item">
              <div className="row align-items-center">
                <div className="col-lg-12 col-md-6 overview-content">
                  <ul className="overview-list">
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <i className="flaticon-draw-check-mark"></i>
                      BMC Helix Discovery experts – Dedicated, trained, and experienced
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Holistic approach for BMC Helix Discovery products integration
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Comprehensive roadmap from licensing to successful usage
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Focus on smooth transition during BMC Helix Discovery integration
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      On the site and online support and training
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <i className="flaticon-draw-check-mark"></i>
                      BMC Helix Discovery maintenance support post-implementation
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-draw-check-mark"></i>
                      Competitive-pricing; hassle-free process
                    </li>
                  </ul>
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
      <Service1 />
      <FooterOne />
    </>
  );
};


export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=bmc-helix-discovery&populate=*`
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