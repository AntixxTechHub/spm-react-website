import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Image from "next/image";


import bmc from "@/public/images/icon/bmc.png";
import implementationservices from "@/public/images/icon/implementation-services.png";
import integrationservices from "@/public/images/icon/integration-services.png";
import awscloudmigration from "@/public/images/icon/aws-cloud-migration.png";
import consultingadvisoryservices from "@/public/images/icon/consulting-advisory-services.png";
import applicationsmanagedservicessupport from "@/public/images/icon/applications-managed-services-support.png";
import staffaugmentation from "@/public/images/icon/staff-augmentation.png";
import infrastructureoutsourcing from "@/public/images/icon/infrastructure-outsourcing.png";

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
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
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
          <span className="sub-title yellow-color">What We Do?</span>
          <h2>Our Services that help you connect to</h2>
          <h4 className="nunito-font">
            Enabling Digital Transformation
          </h4>
        </div>
      </div>
      <div className="container-fluid">
        {display ? (
          <OwlCarousel
            className="case-studies-slides-banner owl-carousel owl-theme"
            {...options}
          >

            <div className="features-box style-two">
              <div className="icon">
                <Image src={implementationservices} alt="" />
              </div>
              <h3 className="nunito-font">Implementation Services</h3>
              <p>
                We offer end-to-end implementation of various ITSM products and services.
              </p>
              <Link href="/implementation-services">
                <a className="btn-style-one light-green-color">
                  View more...
                </a>
              </Link>
            </div>

            <div className="features-box style-two">
              <div className="icon">
                <Image src={integrationservices} alt="" />
              </div>
              <h3 className="nunito-font">Integration Services</h3>
              <p>
                We deploy simple to complex integrations to help our clients enjoy a consistent integrated experience.
              </p>
              <Link href="/coming-soon">
                <a className="btn-style-one light-green-color">
                  View more...
                </a>
              </Link>
              {/* <Link href="/integration-services">
                    <a className="btn-style-one light-green-color">
                      View more...<i className="bx bx-chevron-right"></i>
                    </a>
                  </Link> */}
            </div>

            <div className="features-box style-two">
              <div className="icon">
                <Image src={awscloudmigration} alt="" />
              </div>
              <h3 className="nunito-font">AWS Cloud Migration</h3>
              <p>
                We facilitate seamless communication and data transfer across applications.
              </p>
              <Link href="/coming-soon">
                <a className="btn-style-one light-green-color">
                  View more...
                </a>
              </Link>
              {/* <Link href="/aws-cloud-migration">
                    <a className="btn-style-one light-green-color">
                      View more...<i className="bx bx-chevron-right"></i>
                    </a>
                  </Link> */}
            </div>

            <div className="features-box style-two">
              <div className="icon">
                <Image src={consultingadvisoryservices} alt="" />
              </div>
              <h3 className="nunito-font">Consulting & Advisory Services</h3>
              <p>
                We help our clients embrace cutting-edge technology by guiding them through the path.
              </p>
              {/* <Link href="/consulting-advisory-services">
                    <a className="btn-style-one light-green-color">
                      View more...<i className="bx bx-chevron-right"></i>
                    </a>
                  </Link> */}
              <Link href="/coming-soon">
                <a className="btn-style-one light-green-color">
                  View more...
                </a>
              </Link>
            </div>

            <div className="features-box style-two">
              <div className="icon">
                <Image src={applicationsmanagedservicessupport} alt="" />
              </div>
              <h3 className="nunito-font">Applications Managed Services & Support</h3>
              <p>
                We serve as the boutique company for applications management with a holistic approach. Our team offers 24/7 support to
              </p>
              {/* <Link href="/applications-managed-services-support">
                    <a className="btn-style-one light-green-color">
                      View more...<i className="bx bx-chevron-right"></i>
                    </a>
                  </Link> */}
              <Link href="/coming-soon">
                <a className="btn-style-one light-green-color">
                  View more...
                </a>
              </Link>
            </div>

            <div className="features-box style-two">
              <div className="icon">
                <Image src={staffaugmentation} alt="" />
              </div>
              <h3 className="nunito-font">Staff Augmentation</h3>
              <p>
                We provide talented IT resources to take your product development goals further. Experience growth synchronized with your objectives.
              </p>
              {/* <Link href="/staff-augmentation">
                    <a className="btn-style-one light-green-color">
                      View more...<i className="bx bx-chevron-right"></i>
                    </a>
                  </Link> */}
              <Link href="/coming-soon">
                <a className="btn-style-one light-green-color">
                  View more...
                </a>
              </Link>
            </div>

            <div className="features-box style-two">
              <div className="icon">
                <Image src={infrastructureoutsourcing} alt="" />
              </div>
              <h3 className="nunito-font">Infrastructure Outsourcing</h3>
              <p>
                We have a proven track record of outsourcing IT infrastructure to let you concentrate on your core competencies - accelerate your growth by relying on us!
              </p>
              {/* <Link href="/infrastructure-outsourcing">
                    <a className="btn-style-one light-green-color">
                      View more...<i className="bx bx-chevron-right"></i>
                    </a>
                  </Link> */}
              <Link href="/coming-soon">
                <a className="btn-style-one light-green-color">
                  View more...
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
