import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Image from "next/image";


import design from "@/public/images/icon/design.svg";
import appdevelopment from "@/public/images/icon/app_development.svg";
import itservices from "@/public/images/icon/it-services.svg";
import systemsoftware from "@/public/images/icon/system-software.svg";
import testtingqa from "@/public/images/icon/testting-qa.svg";
import aiml from "@/public/images/icon/ai-ml.svg";

const options = {
  nav: true,
  margin: 10,
  stagePadding: 10,
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
      <div className="container-fluid">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="sub-title"></span>
          <h2>One-Stop Destination for Custom Software Solutions!</h2>
        </div>
      </div>
      <div className="container-fluid">
        {display ? (
          <OwlCarousel
            className="case-studies-slides-banner owl-carousel owl-theme"
            {...options}
          >
            <div className="single-pricing-box-software red-light-color" style={{ height: '460px' }}>
              <div className="icon">
                <Image src={design} alt="icon" />
              </div>
              <h3>Design</h3>
              <p>One-stop solution for all your design needs:</p>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Design Audit
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  UX Research
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  UX Design
                </li>
                {/* <li>
                  <i className="flaticon-draw-check-mark"></i>
                  UI Design
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  A/B Testing
                </li> */}
                <Link href="/design">
                  <a className="btn-style-one red-light-color">
                    Know More
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box-software red-light-color" style={{ height: '460px' }}>
              <div className="icon">
                <Image src={appdevelopment} alt="icon" />
              </div>
              <h3>App Development</h3>
              <p>Every kind of app you need in one place:</p>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Mobile App
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Web App
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Enterprise App
                </li>
                {/* <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Custom App
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  eCommerce
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Cloud Implementation
                </li> */}
                <Link href="/app-development">
                  <a className="btn-style-one red-light-color">
                    Know More
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box-software red-light-color" style={{ height: '460px' }}>
              <div className="icon">
                <Image src={itservices} alt="icon" />
              </div>
              <h3>IT Services</h3>
              <p>Cutting-edge IT Solutions:</p>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  IT Consultancy
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Managed Services
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Infrastructure Outsourcing
                </li>
                {/* <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Prompt Tech Support Round-the-clock
                </li> */}
                <Link href="/it-services">
                  <a className="btn-style-one red-light-color">
                    Know More
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box-software red-light-color" style={{ height: '460px' }}>
              <div className="icon">
                <Image src={systemsoftware} alt="icon" />
              </div>
              <h3>System & Software</h3>
              <p>Wide-ranging software solutions:</p>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Data Engineering
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Embedded Services
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  DevOps, and more.
                </li>
                <Link href="/system-software">
                  <a className="btn-style-one red-light-color">
                    Know More
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box-software red-light-color" style={{ height: '460px' }}>
              <div className="icon">
                <Image src={testtingqa} alt="icon" />
              </div>
              <h3>Testing & QA</h3>
              <p>Top-notch Quality Solutions:</p>
              <ul className="features-list">
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Quality Engineering
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Testing
                </li>
                <li>
                  <i className="flaticon-draw-check-mark"></i>
                  Compliance Checks
                </li>
                <Link href="/testing-&-qa">
                  <a className="btn-style-one red-light-color">
                    Know More
                  </a>
                </Link>
              </ul>
            </div>
            <div className="single-pricing-box-software red-light-color" style={{ height: '460px' }}>
              <div className="icon">
                <Image src={aiml} alt="icon" />
              </div>
              <h3>AI & ML</h3>
              <p>Custom-designed AI & ML-based solutions for enormous applications</p>
              <Link href="/ai-ml">
                <a className="btn-style-one red-light-color">
                  Know More
                </a>
              </Link>
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
