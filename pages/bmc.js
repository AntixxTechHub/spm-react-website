
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTopTitle from "@/components/Common/PageTopTitle";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";


import bmc from "@/public/images/icon/bmc.svg";
import bmcitsm from "@/public/images/ITSM-Solutions-for-better-productivity.jpg";


const Services = () => {
  return (
    <>
      <PageTitle page="BMC Suite of Products" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="BMC" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3 className="nunito-font">BMC Suite of Products</h3>
                <p className="w-100" style={{ textAlign: "Justify" }}>
                  We work with global clientele as BMC third-party vendors to transform them from their traditional IT setup to a digital organization. BMC has been a globally acclaimed brand delivering cutting-edge technology for many operational purposes – including workflow automation, improved service delivery, and much more.
                </p>
                <p className="w-100" style={{ textAlign: "Justify" }}>As BMC Consultants, we accompany and guide our clients throughout the journey of this digital transformation. We have been among the most appreciated BMC Solution Managed Service Providers for many years. We discuss our clients’ operational requirements, suggest, optimize, and customize appropriate BMC Solutions accordingly.
                </p>
                <p className="w-100" style={{ textAlign: "Justify" }}>Additionally, we offer BMC Trainings to key members of our client's IT teams. Our trainings are designed to upgrade the IT professionals’ skills and thus to help our clients get the most out of any BMC Solution by upskilling the same workforce. We have a team of BMC-Certified IT professionals well-versed in customizing the solution. We specialize in BMC Implementation to help our clients get the best-suited BMC Solutions to:
                </p>
                <p className="w-100" style={{ textAlign: "Justify" }}>We have a team of BMC-Certified IT professionals well-versed in customizing the solution. We specialize in BMC Implementation to help our clients get the best-suited BMC Solutions to:
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={bmcitsm} alt="man-with-son-image" />
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
                <Image src={bmcitsm} alt="goal-image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <ul className="about-list">
                  <li>
                    <div className="icon">
                      <i className="bx bx-check-double"></i>
                    </div>
                    Manage, coordinate, and automate their workflow
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bx-check-double"></i>
                    </div>
                    Improve efficiency
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bx-check-double"></i>
                    </div>
                    Better IT Management
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bx-check-double"></i>
                    </div>
                    Execute better IT operations management
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bx-check-double"></i>
                    </div>
                    Achieve excellence in cloud management
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bx-check-double"></i>
                    </div>
                    Improve service delivery, and much more...
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
            <h2 className="nunito-font"></h2>
            <span className="sub-title purple-color">As the most preferred BMC Vendors, we undertake the following BMC Software Implementation projects:</span>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/bmc-helix-itsm">
                    <a>BMC Helix ITSM</a>
                  </Link>
                </h5>
                <p>
                  We provide BMC Helix Implementation Services to help our clients achieve excellent IT Service Management capabilities, enabling them to attain improved alignment of people, process, and technology
                </p>
                <Link href="/bmc-helix-itsm">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/bmc-helix-remedyforce">
                    <a>BMC Helix Remedyforce</a>
                  </Link>
                </h5>
                <p>
                  This BMC Solution helps mid-sized companies make their businesses efficient, compliant, and secure through excellent IT Operations Management.
                </p>
                <Link href="/bmc-helix-remedyforce">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/bmc-helix-discovery">
                    <a>BMC Helix Discovery</a>
                  </Link>
                </h5>
                <p>
                  This BMC Solution helps our clients dynamically model their assets and subsequent dependencies – This SaaS-based discovery and dependency modeling system brings instant visibility into different environments.


                </p>
                <Link href="/bmc-helix-discovery">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/bmc-truesight">
                    <a>BMC TrueSight</a>
                  </Link>
                </h5>
                <p>
                  We deploy this analytics-driven performance management solution to help our clients proactively rectify availability and performance management issues.


                </p>
                <Link href="/bmc-truesight">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/bmc-control-m">
                    <a>BMC Control-M</a>
                  </Link>
                </h5>
                <p>
                  This is an excellent workflow automation solution empowering our clients with comprehensive batch scheduling and monitoring capabilities.
                </p>
                <Link href="/bmc-control-m">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/bmc-smart-reporting">
                    <a>BMC Smart Reporting</a>
                  </Link>
                </h5>
                <p>
                  This BMC Solution is a report writer on the Yellowfin platform, allowing even non-technical users to create reports through user-friendly drag-and-drop features.
                </p>
                <Link href="/bmc-smart-reporting">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/bmc-client-management">
                    <a>BMC Client Management</a>
                  </Link>
                </h5>
                <p>
                  BMC Client Management allows you to monitor all systems on a network. This is an advanced systems management software designed for modern digital enterprises.
                </p>
                <Link href="/bmc-client-management">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/bmc-helix-digital-work-place">
                    <a>BMC Helix Digital WorkPlace</a>
                  </Link>
                </h5>
                <p>
                  This solution aims at self-service to resolve issues. Your organization will step into the future of work through intuitive and intelligent, consumer-like experiences.
                </p>
                <Link href="/bmc-helix-digital-work-place">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/bmc-bladelogic">
                    <a>BMC BladeLogic</a>
                  </Link>
                </h5>
                <p>
                  We deploy BMC BladeLogic to enable our clients to configure and maintain end-user systems. This is an advanced, fully integrated, and automated solution.
                </p>
                <Link href="/bmc-bladelogic">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <p>Contact us today to discuss your BMC Solution implementation requirements. Someone from our Customer Support team will get back to you to discuss your exact requirements. We will select a suitable BMC Solution, customize it, deploy it, provide training, and provide prompt technical support in case of any technical difficulties.</p>
          </div>
        </div>
      </div>
      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export default Services;