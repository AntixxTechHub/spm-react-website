import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Head from 'next/head'

import Collage from "@/public/images/Collage.png";
import bmc from "@/public/images/icon/bmc.svg";
import salesforce from "@/public/images/icon/salesforce.svg";
import servicenow from "@/public/images/icon/servicenow.svg";
import aws from "@/public/images/icon/aws.svg";
import aboutachive from "@/public/images/about-us.png";

const Services = () => {
  return (
    <>
      <PageTitle page="About Us" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="About Us" />

<Head>
        <meta charSet="utf-8"/>
        <meta name="viewport"content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"/>
        <meta property="og:title" content="Add a Shopping Cart to Any Website in Minutes - Snipcart"/>
        <meta property="og:url" content="https://snipcart.com/"/>
        
        <link rel="canonical" href="https://example.com/products/phone" />
        </Head>

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3 className="nunito-font">
                  About SPM Global Technologies
                </h3>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies helps business leaders simplify IT solutions so client employees can concentrate on what’s most important – delivery. We build custom software and enable companies to transform and digitalize their businesses. Our range of services spans from custom software solutions and services to support and training for architecture, implementation, integration, and dev-ops. We are located in Bengaluru, (India) and serve clients across the globe.</p>
                <h5 className="nunito-font">
                  Our ability to develop effective, efficient, and scalable code is only the beginning of our capabilities.
                </h5>
                <p style={{ textAlign: "justify" }}>Quite simply, we help organizations identify the right approach for ITIL implementation and use it for continuous improvement in Information Technology services for sustainable business growth. These services facilitate customers in delivering quality IT services by managing ‘information’, the key strategic resource for an organization. We leverage the experience, expertise, and knowledge gained through the successful implementation of ITIL v2, ITIL v3, ITIL v4 industry-recognized best practices for our customers across the globe.</p>
                <h6 style={{ textAlign: "justify" }}>Being a “custom software services” firm, SPM Global Technologies can provide its customers with a variety of services.
                </h6>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={Collage} alt="man-with-son-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area with-top-border ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <h3 className="nunito-font">
              Timeline and Key Milestones
            </h3>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
                <Image src={aboutachive} alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  Areas of Expertise IT | ITSM
                </h3>
                <p style={{ textAlign: "justify" }}>Someone wise quoted beautifully, “Sky is the limit” – for Team SPM, it really is. Being a custom firm has its advantages – we have no boundaries, no limits to what we can do. A team that’s dedicatedly working on learning as we deliver, we breathe, eat and sleep upskilling. No software is tough enough for our coders to crack; no applications complex enough. We undertake projects of different genres and capabilities – if it’s IT, it’s possible. That’s our attitude. That’s our motto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-tb" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h2>Services</h2>
            <span className="sub-title">To summarize our bouquet of offerings, we specialize in three areas</span>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12">
              <div className="single-pricing-box-aboutus red-light-color">
                <div className="icon">
                  <Image src={bmc} alt="icon" />
                </div>
                <ul className="features-list">
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITSM Offerings
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Staff Augmentation Consulting
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    BMC Helix Migration
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITSM Health Check
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Service Desk Implementation
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITSM Infrastructure Monitoring
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Implementation
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Server Automation
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Smart Reporting
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Remedyforce Service Desk
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Consulting & Advisory
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Applications Managed Service & Support
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITIL Process
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="single-pricing-box-aboutus red-light-color">
                <div className="icon">
                  <Image src={servicenow} alt="icon" />
                </div>
                <ul className="features-list">
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITSM Offerings
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Staff Augmentation Consulting
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITSM Health Check
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Service Desk Implementation
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITSM Infrastructure Monitoring
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Implementation
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Server Automation
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Smart Reporting
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Consulting & Advisory
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Applications Managed Service & Support
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITIL Process
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="single-pricing-box-aboutus red-light-color">
                <div className="icon">
                  <Image src={salesforce} alt="icon" />
                </div>
                <ul className="features-list">
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Consulting & Advisory
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Applications Managed Service & Support
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITIL Process
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="single-pricing-box-aboutus red-light-color">
                <h3>Other</h3>
                <ul className="features-list">
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    AWS Cloud Migration
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Consulting & Advisory
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Applications Managed Service & Support
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ITIL Process
                  </li>
                </ul>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Product Expertise</h2>
            <span className="sub-title purple-color">Our team is an expert in the custom installation, integration, service, and support of the following products:</span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-about-us">
                <div className="icon">
                  <Image src={bmc} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>BMC</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-about-us">
                <div className="icon">
                  <Image src={servicenow} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>ServiceNow</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-about-us">
                <div className="icon">
                  <Image src={salesforce} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Salesforce</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-about-us">
                <div className="icon">
                  <Image src={aws} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>AWS</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="section-title">
            <h3 className="nunito-font">Training</h3>
            <span className="sub-title purple-color">We also specialize in providing all kinds of training in planning, implementing, and maintaining all the products available in the IT and ITSM market.</span>
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