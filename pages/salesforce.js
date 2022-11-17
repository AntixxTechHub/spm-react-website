import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

import Partner from "@/public/images/Partner.png";
import Implementing from "@/public/images/Implementing.png";
import salesforce from "@/public/images/icon/salesforce.svg";


const Services = () => {
  return (
    <>
      <PageTitle page="Salesforce" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Salesforce" />
      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p style={{ textAlign: "justify" }}>Salesforce is one of the most customizable and robust solutions available to companies to help achieve their business objectives. Finding one’s way around the myriad of modular features available within the various products under the Salesforce platform in itself can be quite a challenging task. Mapping these to specific requirements needs high knowledge of the ins and outs of the platform and its products. As a reputed Salesforce Consultant, we partner with our clients in implementing the solution in a customized way to meet their needs.</p>
                <p style={{ textAlign: "justify" }}>We work as Salesforce Service Providers and consult clients on a well-planned approach toward Salesforce implementation purely for the reason that an unplanned and unstructured implementation process could end up in loss of precious time, money and effort. SPM Global Technologies are certified Salesforce Vendors, helping companies with effective and intricately planned Salesforce implementation by using a set and defined process for predictable and expected results. We offer Salesforce Managed Services with a holistic approach. Our Salesforce implementation journey encompasses an array of Salesforce Service initiatives:</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={Partner} alt="" />
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
                <Image src={Implementing} alt="" />
              </div>
              <div
                className="btn-box"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <a className="btn-style-one dark-green-color" style={{ textAlign: "justify" }}>
                  We also provide training and support to our clients.
                  Our aim is to make Salesforce adoption as easy and smooth as possible for our clients.
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Requirements Analysis
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Process Mapping
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Gap Analysis
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Setup and Configuration
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Implementation
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Customisation
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Deployment
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Post-implementation support
                  </li>
                </ul>
                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a className="btn-style-one dark-green-color" style={{ textAlign: "justify" }}>
                    Our journey with our clients, as Salesforce Third-Party Vendor, starts with understanding exactly which business processes and objectives need review, what are the pain points, which products under the Salesforce umbrella offer specific solutions addressing those pain points, what are the current platforms already being used in the company, what sort of reverse integration would be required with Salesforce and finally, a step by step approach to deploying a customized solution for Salesforce implementation. We upgrade our clients’ IT teams’ skills through our well-designed Salesforce Trainings.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font"></h2>
            <span className="sub-title purple-color">Let us now uncover benefits of various Salesforce products and solutions one by one:</span>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={salesforce} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/sales-cloud">
                    <a>Salesforce Sales Cloud</a>
                  </Link>
                </h5>
                <p>
                  It allows sales teams to operate from any place and grow their sales. It grants them advantages…</p>
                <Link href="/sales-cloud">
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
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={salesforce} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/service-cloud">
                    <a>Salesforce Service Cloud</a>
                  </Link>
                </h5>
                <p>
                  It helps to connect customer service, digital service and field service. It gives them a shared...</p>
                <Link href="/service-cloud">
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
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={salesforce} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/marketing-cloud">
                    <a>Salesforce Marketing Cloud</a>
                  </Link>
                </h5>
                <p>
                  This solution lets businesses do smarter and impactful marketing across email, social media...</p>
                <Link href="/marketing-cloud">
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
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={salesforce} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/community-cloud">
                    <a>Salesforce Community Cloud</a>
                  </Link>
                </h5>
                <p>
                  Community Cloud helps to connect businesses, employees, customers, partners, communities...</p>
                <Link href="/community-cloud">
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
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={salesforce} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/commerce-cloud">
                    <a>Salesforce Commerce Cloud</a>
                  </Link>
                </h5>
                <p>
                  Commerce Cloud enables businesses to provide customers convenient commerce. It...</p>
                <Link href="/commerce-cloud">
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
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={salesforce} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <Link href="/integration-cloud">
                    <a>Salesforce Integration Cloud</a>
                  </Link>
                </h5>
                <p>
                  It enables businesses to integrate their data from any system whether cloud-based, on-premises...</p>
                <Link href="/integration-cloud">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
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