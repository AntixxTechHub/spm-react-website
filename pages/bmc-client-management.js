import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Accordion from "@/components/Accordion";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";
import baseApiUrl from "@/utils/baseApiUrl";


import bmc from "@/public/images/icon/bmc.svg";
import integrate from "@/public/images/integrate.png";
import business from "@/public/images/business.png";
import support from "@/public/images/support.png";
import features from "@/public/images/features.png";
import devicemanagement from "@/public/images/icon/device-management.png";
import devicesafety from "@/public/images/icon/device-safety.png";
import mobiledevicemanagement from "@/public/images/icon/mobile-device-management.png";
import myapps from "@/public/images/icon/my-apps.png";
import operatingsystems from "@/public/images/icon/operating-systems.png";
import patchmanagement from "@/public/images/icon/patch-management.png";
import policycompliance from "@/public/images/icon/policy-compliance.png";
import view from "@/public/images/icon/view.png";


const questionsAnswers = [
  {
    question: "Q1: What is BMC client management?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC Client Management comprises an advanced system management software application that provides a consistent way of monitoring all systems on a network. BMC Client Management facilitates automating the client management process, allowing organizations to control costs, maintain compliance, and reduce financial risks.</p>

  },
  {
    question: "Q2: How to install the BMC client management console?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Check out the following steps for downloading and installing the BMC Helix Client Management Console:
        <li>•	Click on Web Start Package, which constitutes to be a recommended methodology for the installation and the access of the console. The web start installer .exe file gets downloaded to the PC.</li>
        <li>•	Process the web start installer on the PC.</li>
        <li>•	Enter log in details and click on Login.</li>
      </p>
  },
  {
    question: "Q3: How to uninstall the BMC client management agent?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>•	Choose the Start menu and the Control Panel.
        <li>•	Open Add or Remove Programs window of the Control Panel.</li>
        <li>•	Find the constituent to uninstall BMC Client Management Client in the program list.</li>
        <li>•	Select it.</li>
        <li>•	Click on Remove</li>
      </p>
  },
  {
    question: "Q4: How BMC Client Management facilitates IT Professionals?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC Client Management as an advanced system management software application provides consistent monitoring of all systems on a set-up through:
        <li>• Consistent monitoring</li>
        <li>• Automated client management</li>
        <li>• IT client management</li>
      </p>
  },
  {
    question: "Q5: What are the Modules of BMC Client Management?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC Client Management modules could be purchased individually or as a whole suite, on-site or on the cloud platform. The key modules include:
        <li>•	Inventory</li>
        <li>•	Patch</li>
        <li>•	Deployment</li>
        <li>•	Compliance</li>
        <li>•	Remote Control</li>
      </p>
  },
  {
    question: "Q6: What are the Key Benefits of BMC Client Management?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>•	Reducing 27% patch time by establishing automation
        <li>•	Decreasing 78% deployment times for various operating systems and applications</li>
        <li>•	Lessening post-PC migration service desk calls by 77% through cohesive profile migrations</li>
        <li>•	Realizing 100% Return on Investment within 2 years of Client Management endeavor</li>
      </p>
  },
  {
    question: "Q7: What are the Features of BMC Client Management Solution?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        BMC Client Management features in your IT workflow include:
        <li>•	Discovery & Inventory:</li>
        <li>•	Operation Systems & Application Deployment</li>
        <li>•	Software License Management</li>
        <li>•	Patch & Event Management</li>
        <li>•	Policy Compliance</li>
        <li>•	Device Safety</li>
        <li>•	Remote Control</li>
        <li>•	Mobile Device</li>
        <li>•	Power Management</li>
        <li>•	Device Management</li>
        <li>•	My Apps</li>
      </p>
  },
  {
    question: "Q8: How to Establish Server cluster for BMC Client Management?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        To set up the cluster, check out the following steps:
        <li>• Install the client database on each node.</li>
        <li>• Establish the BMC Client Management master server on the currently active node.</li>
        <li>• Create BMC Client Management agent service on other cluster nodes.</li>
        <li>• Provide the IP address of the cluster to BMC Technical Support for producing an apt license file.</li>
        <li>• Set up TrustedAddress parameter in FileStore module configuration to include IP address of the member nodes of the cluster and the cluster itself.
        </li>
      </p>
  },
];

const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "BMC Client Management" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="BMC Client Management" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3 className="nunito-font">
                  Integrate IT Workflow with BMC Client Management for Risk Mitigation
                </h3>
                <p style={{ textAlign: "justify" }}>Do you want to reduce your service desk call through integrated endpoint management? Choose BMC Helix Client Management service providers to automate your endpoint management. IT professionals are using these Client Management support services for controlling costs, maintaining compliance, and mitigating risks. Starting from procurement of the device to disposals, BMC Helix Client Management Third-Party Vendors offer an accurate assessment of hardware installations, ensuring adherence of the device to organizational policies, and supporting IT systems. Now, let’s take a look at the business challenges that have led to the development of BMC Client managed services.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={integrate} alt=" BMC Helix Client Management Service Providers
 " />
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
                <Image src={business} alt=" Helix Client Management" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  Business Challenges at the backdrop of BMC Client Management:
                </h3>
                <p>As businesses continue to grow, Information Technology firms also face the difficult task of accurately managing technology assets. Some of the common challenges of the BMC BCM Managed Services encompass:</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Finding out and tracking the hardware and software support services
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Maximizing software licenses
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Upholding existing patches and decreasing possible vulnerabilities
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Supporting service desk with troubleshooting issues & integrating to reduce escalations
                  </li>
                </ul>
                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a className="btn-style-one dark-green-color">
                    Helix BCM Consultant adds transparency and synchronization to various IT-related operations. You can obtain BMC Helix Client Management Trainings to make the most effective use of the solution. <i className="bx bx-chevron-right"></i>
                  </a>
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
                  BMC Client Management – A Solution to Support IT Problems
                </h3>
                <p style={{ textAlign: "justify" }}>BMC Helix Client Management service providers deliver desktop, mobile as well as laptop management. The solution facilitates IT professionals in controlling costs, avoiding audit failures, and decreasing the possibility of data loss. From the time of acquiring a device, Helix BMC Consultants use the proper Operating System and software pertaining to the device, complying with organizational and industry policy and keeping patches up-to-date till the device is discharged.</p>
                <h3>What are the Key Features of BMC Client Management?</h3>
                <span className="sub-title">The key facets of Client Management include:</span>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Integrated, simple, and complete inventory management, through which IT professionals come to know about the assets and how they are being used.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Ensures that your devices are secure and compliant with IT policies.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Providing remote access to devices, even not connected on VPN.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Offers pre-approved self-service for software download and common activities.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Integrates endpoint management with the service desk or CMDB (Client Management Database).
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
                <Image src={support} alt=" Helix Client Management Service Providers" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">How do BMC Helix Client Management Service Providers support IT Professionals?</h2>
            <p style={{ textAlign: "justify" }}>
              BMC Client Management Vendors use an advanced system management software application that offers a consistent method of monitoring all systems on a set-up. IT professionals automating client management support services facilitate IT organizations in controlling costs and reducing financial risks.
            </p>
            <div className="goal-text">
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Consistent monitoring</h3>
                  <p style={{ textAlign: "justify" }}>BMC Client Management vendors using advanced system management software offer a consistent method of monitoring all systems on a network. The software detects the exact point of failure and helps to quickly resolve the network issues. As a client-server system, BMC Client Management consists of several computer programs. It has a database integrated with the master server. The graphical user interface helps to access data in the database.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Automated client management</h3>
                  <p style={{ textAlign: "justify" }}>The process of client management gets automated through BMC Client Management consultants, enabling IT professionals to control costs, maintain compliance and minimize financial risks. Using BMC BCM service providers, you can get an accurate view of software installation, adhering to industrial rules and supporting systems. You can streamline and mechanize client management with a detailed set of capabilities, including discovering, configuring, managing, and securing all IT endpoints. These capabilities help you to pass software audits in an easy way, decrease data susceptibilities and avoid financial risk through software patching. Seeking BMC Client Management trainings for implementing the software solution helps you discover all clients and edge devices.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>IT client management
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    Helix BMC consultants enable you to manage clients from the very beginning. You can easily mechanize processes and can successfully manage IT assets with BMC Client Management trainings, while delivering and communicating business value.</p>
                </li>
                <div className="container">
                  <div className="section-title">
                    <h2 className="nunito-font">5 Modules of BMC Client Management Support Services</h2>
                    <p style={{ textAlign: "justify" }}>
                      BMC Client Management modules can be purchased individually or as the whole suite, either on-site or on the cloud platform
                    </p></div></div>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Inventory
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    Through this module, you can automate the process of inventory tracking for guiding investment decision-making, decrease manual processes, as well as maintain compliance. Expensive audit failures can be prevented by comprehending software license use along with related financial responsibilities.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Patch
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    Another component of BMC BCM service provider is Patch, which helps to centrally evaluate, manage, implement, and report on patches for ensuring that the systems are protected and business integrity remains intact.
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Deployment
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    One can easily deploy and migrate the BMC BCM managed services for ensuring that all systems remain protected and up-to-date.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Compliance
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    You can eliminate the stress of monitoring IT assets, defining policies, and providing auditors with the records of compliance levels from a centralized console. Moreover, IT professionals are able to decrease the energy consumption of PC and track the Return of Investment and Total Cost of Ownership through the BMC BCM Managed Services. Further, Helix BMC consultants can outline and implement usage policies, including content availability for uploading, downloading, and keeping track of activities across all assets.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Remote Control
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    You can detect and resolve issues on your PCs, without leaving your desk.</p>
                </li>
              </ul>
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
                <Image src={features} alt="Client Management Service Providers" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  What are the Key Benefits provided by BMC Client Management Vendors?
                </h3>
                <p style={{ textAlign: "justify" }}>BMC Client Management Consultants help you to get centrally manage client assets, optimize software license management, mitigate the risk of audit failure and help to make informed and sound decisions. Further, you can deliver data through reporting and get self-service for software downloads. Consequently, this facilitates in maximizing your return on investment with a granular power management setup.
                </p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Decreasing patch time by 27% by setting and forgetting automation
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Reducing deployment time by 78% for several operating systems and applications
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Diminish post-PC migration service desk calls by 77% through integrated profile migrations
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Realize 100% ROI within 2 years of Client Management venture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="funfacts-area bg-f9f9f9 pt-100">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Top 12 Facets BMC Client Management Solution at a Glance
            </h2>
            <span className="sub-title purple-color">Here are the top 12 facets of BMC Client Management, for which you should definitely use BMC solution in your IT workflow:</span>

          </div>
          <div className="row justify-content-center">
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Discovery-&-Inventory.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Discovery & Inventory
                </h5>

                <p style={{ textAlign: "justify" }}>Automated inventory tracking facilitates in guiding your investment decisions, decreasing manual processes, and maintaining
                  compliance for virtual devices.
                </p>
              </div>

            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={operatingsystems} alt=" Client Management Support Services" />
                </div>
                <h5 className="nunito-font">
                  Operation Systems & Application Deployment
                </h5>
                <p style={{ textAlign: "justify" }}>Centralized and automated deployment or migration of systems without any configuration for least disturbance.</p>
              </div>

            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="license-management-of-software.png" data={seo} />
 
                </div>
                <h5 className="nunito-font">
                  License Management of Software
                </h5>
                <p style={{ textAlign: "justify" }}>Decreased audit failures through comprehending the use of software licenses.</p>
              </div>

            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={patchmanagement} alt="Helix Client Management Training" />
                </div>
                <h5 className="nunito-font">
                  Patch Management: BMC Client Management
                </h5>
                <p style={{ textAlign: "justify" }}>support services give you the power to evaluate, manage, organize, and report on patches for ensuring safe and secured systems.
                </p>
              </div>

            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Event management.png" data={seo} />
 
                </div>
                <h5 className="nunito-font">
                  Event Management
                </h5>
                <p style={{ textAlign: "justify" }}>This facet of BMC Helix Client Management Third-Party Vendors helps to extend monitoring as well as custom alerting competencies to track, manage, and mechanize remediation at the time of prime infrastructure events.
                </p>
              </div>

            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={policycompliance} alt=" Client Management Trainings"/>
                </div>
                <h5 className="nunito-font">
                  Policy Compliance
                </h5>
                <p style={{ textAlign: "justify" }}>You can easily ensure device compliance to industrial, and corporate standards, and thus obtain reports for satisfying audit requests.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={devicesafety} alt=" Client Management Vendors"/>
                </div>
                <h5 className="nunito-font">
                  Device Safety
                </h5>
                <p style={{ textAlign: "justify" }}>Effective BMC Client Management training enables viewing, controlling, monitoring, and updating of all key antivirus as well as anti-spyware software from one single source.
                </p>
              </div>

            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={mobiledevicemanagement} alt="BMC Managed Services"/>
                </div>
                <h5 className="nunito-font">
                  Mobile Device Management
                </h5>
                <p style={{ textAlign: "justify" }}>BMC also helps you to manage mobile devices through an integrated console. Further, you can check compliance, applications, and remotely lock devices with the Managed Services.</p>
              </div>

            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={view} alt=" BMC Consultant"/>
                </div>
                <h5 className="nunito-font">
                  Views
                </h5>
                <p style={{ textAlign: "justify" }}>It is a metadata layer in-between the data source and report creation. It specifies logic and fields to authorize the users for report creation.</p>
              </div>
            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="power-management.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Power Management
                </h5>
                <p style={{ textAlign: "justify" }}>You can manage power by reducing energy bills and environmental footprints with PC energy consumption.</p>
              </div>
            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={devicemanagement} alt=" BCM Consultant"/>
                </div>
                <h5 className="nunito-font">
                  Device Management
                </h5>
                <p style={{ textAlign: "justify" }}>BMC software application helps to centrally define and enforce device usage policies, control upload, and download activity, record peripheral device events, and audit unwanted activities.</p>
              </div>
            </div>
            <div
              className="row justify-content-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={myapps} alt=" BMC Consultant Client Management " />
                </div>
                <h5 className="nunito-font">
                  MyApps
                </h5>
                <p style={{ textAlign: "justify" }}>Through BMC Client Management, you can get access requests without going to websites or submitting help desk forms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">How to install BMC Client Management Console?</h2>
            <p>
              Now, comes the question of how should you install BMC Client Management Console? Well, for downloading and installing BMC Helix Client Management Console, go through the following steps:
            </p>
            <div className="goal-text">
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Clicking Web Start Package, which is the method of recommendation for installing and accessing the console. You have to download the web start installer .exe file to your PC.</h3>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Next, you have to process the web start installer on your PC.</h3>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Finally, you need to enter your login information and click ‘Login’.
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    Helix BMC consultants enable you to manage clients from the very beginning. You can easily mechanize processes and can successfully manage IT assets with BMC Client Management trainings, while delivering and communicating business value.</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Architecture – It is the fundamental notion of BMC Client Management. This helps you to run the service on individual nodes and using a shared master file directory.</h3>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Prerequisite- Whenever you are deploying the cluster architecture, make sure you have the following stuff:</h3>
                  <p><strong>•</strong> At least 2 servers as member nodes for the cluster with specific IP.</p>
                  <p><strong>•</strong> A master directory on a shared location, accessible to all member nodes in the cluster.</p>
                  <p><strong>•</strong> A cluster management system to make sure that one-member node has the service running at any given point in time.</p>
                  <p><strong>•</strong> All member nodes should have Java installed according to software requirements.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Establishing the cluster
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    In order to set up the cluster, check out the following steps:</p>
                  <p><strong>•</strong> Install client database client on every node.</p>
                  <p><strong>•</strong> Install client database client on every node.</p>
                  <p><strong>•</strong> Provide the IP address of the cluster to BMC Technical Support for producing an apt license fil e. The IP address should be of the cluster and not of a member node.</p>
                  <p><strong>•</strong> While rolling out agents, establish the Trusted Address parameter in the File Store module configuration for including the IP address of the member nodes of the cluster as well as the cluster itself.</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 style={{ textAlign: "left" }}>Choose top BMC Client Management Third Party vendors or BMC BCM Service Providers to make your IT work process effective, reducing financial risk.</h3>
                </li>
              </ul>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=bmc-client-management&populate=*`
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