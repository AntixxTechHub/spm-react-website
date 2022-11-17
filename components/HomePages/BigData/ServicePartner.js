import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Image from "next/image";


import bmc from "@/public/images/icon/bmc.svg";
import salesforce from "@/public/images/icon/salesforce.svg";
import aws from "@/public/images/icon/aws.svg";
import analytics from "@/public/images/icon/analytics.svg";
import servicenow from "@/public/images/icon/servicenow.svg";
import sap from "@/public/images/icon/sap.svg";


const options = {
  nav: true,
  margin: 30,
  stagePadding: 30,
  loop: false,
  dots: false,
  autoplay: true,
  autoplayHoverPause: false,
  navText: [
    "<i className='bx bx-chevron-left'></i>",
    "<i className='bx bx-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const CaseStudies = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="case-studies-area with-top-border pt-100 bg-color">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="sub-title"></span>
          <h2>Customization, Integration and Implementation</h2>
        </div>
      </div>
      <div>
        {display ? (
          <OwlCarousel
            className="case-studies-slides-banner owl-carousel owl-theme"
            {...options}
          >
            <div className="single-pricing-box" style={{ height: '500px' }}>
              <div className="icon">
                <Image src={bmc} alt="case-studies-image" />
              </div>
              <h3>
                  <a className="link-btn">BMC</a>
              </h3>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  BMC Helix ITSM
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  BMC Helix Remedyforce
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  BMC Helix Discovery
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  BMC TrueSight
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  BMC Control-M
                </li>
                {/* <li>
                  <i className="flaticon-draw-check-mark"></i>
                  BMC Smart Reporting
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  BMC Client Management
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  BMC Helix Digital Work Place
                </li> */}
                <Link href="/bmc">
                  <a className="btn-style-one light-green-color">
                    View more...
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box" style={{ height: '500px' }}>
              <div className="icon">
                <Image src={salesforce} alt="case-studies-image" />
              </div>
              <h3>
                  <a className="link-btn">Salesforce</a>
              </h3>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Salesforce Sales Cloud
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Salesforce Service Cloud
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Salesforce Commerce Cloud
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Salesforce Marketing Cloud
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Salesforce Community Cloud
                </li>
                {/* <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Salesforce Integration Cloud
                </li> */}
                <Link href="/salesforce">
                  <a className="btn-style-one light-green-color">
                    View more...
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box" style={{ height: '500px' }}>
              <div className="icon">
                <Image src={aws} alt="case-studies-image" />
              </div>
              <h3>
                  <a className="link-btn">AWS</a>
              </h3>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  AWS Consulting
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  AWS Cloud Migration
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  AWS Cloud Security
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  AWS Managed Cloud Services
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  AWS Serverless Computing
                </li>
                {/* <li>
                  <i className="flaticon-draw-check-mark"></i>
                  AWS Market Enablement...
                </li> */}
                <Link href="/aws">
                  <a className="btn-style-one light-green-color">
                    View more...
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box" style={{ height: '500px' }}>
              <div className="icon">
                <Image src={analytics} alt="case-studies-image" />
              </div>
              <h3>
                  <a className="link-btn">Analytics</a>
              </h3>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Power BI
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  QlikView
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  QlikSense
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Tableau
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  SAP Analytics
                </li>
                <Link href="/analytics">
                  <a className="btn-style-one light-green-color">
                    View more...
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box" style={{ height: '500px' }}>
              <div className="icon">
                <Image src={servicenow} alt="case-studies-image" />
              </div>
              <h3>
                  <a className="link-btn">SERVICE-NOW</a>
              </h3>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  IT Service Management
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  IT Workflows
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Knowledge Management
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Audit Management
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Configuration Compliance
                </li>
                <Link href="/servicenow">
                  <a className="btn-style-one light-green-color">
                    View more...
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box" style={{ height: '500px' }}>
              <div className="icon">
                <Image src={sap} alt="case-studies-image" />
              </div>
              <h3>
                  <a className="link-btn">SAP</a>
              </h3>
              
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  SAP HANA
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  SAP CRM
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  SAP ERP
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  SAP HR
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  SAP PLM
                </li>
                {/* <li>
                  <i className="flaticon-draw-check-mark"></i>
                  SAP Business Objects
                </li> */}
                <Link href="/sap">
                  <a className="btn-style-one light-green-color">
                    View more...
                  </a>
                </Link>
              </ul>
            </div>

          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
