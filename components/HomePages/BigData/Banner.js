import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Image from "next/image";



import banner1 from "@/public/images/banner/banner1.png";
import banner2 from "@/public/images/banner/banner2.png";
import banner3 from "@/public/images/banner/banner3.png";
import banner4 from "@/public/images/banner/banner4.png";
import banner5 from "@/public/images/banner/banner5.png";
import banner6 from "@/public/images/banner/banner6.png";


const options = {
  nav: true,
  margin: 20,
  stagePadding: 20,
  loop: true,
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
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
};

const CaseStudies = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="big-data-banner-area">
      <div className="container-fluid">
        {display ? (
          <OwlCarousel
            className="case-studies-slides-banner owl-carousel owl-theme"
            {...options}
          >
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="big-data-banner-content">
                  <h2
                    className="nunito-font"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    IT Services
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    We Provide Wide-Ranging IT Services to Help Your Businesses Excel Through Increased Profitability in Your IT Applications.
                  </p>
                  <div
                    className="btn-box"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <Link href="/get-a-trial-service">
                      <a className="btn-style-one orange-color">
                        Get A Free Trial Service
                      </a>
                    </Link>

                    <Link href="/it-services">
                      <a className="btn-style-one white-color">
                        Know More...
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="big-data-banner-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image src={banner1} alt="" />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="big-data-banner-content">
                  <h1
                    className="nunito-font"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    Custom Solutions Development
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    We Build Excellent Custom Solutions Exactly as Per Your Needs. We Empower Your Business Through a Robust, Secure, and Cost-Effective Platform.
                  </p>
                  <div
                    className="btn-box"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <Link href="/get-a-trial-service">
                      <a className="btn-style-one orange-color">
                        Get A Free Trial Service
                      </a>
                    </Link>

                    <Link href="/custom-solutions-development">
                      <a className="btn-style-one white-color">
                        Know More...
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="big-data-banner-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image src={banner2} alt="banner-image" />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="big-data-banner-content">
                  <h2
                    className="nunito-font"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    App Development
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    We Build World-Class Applications for Various Platforms, Devices, and Audiences. Our Apps Help You Become the Most Preferred Brand Globally.
                  </p>
                  <div
                    className="btn-box"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <Link href="/get-a-trial-service">
                      <a className="btn-style-one orange-color">
                        Get A Free Trial Service
                      </a>
                    </Link>

                    <Link href="/app-development">
                      <a className="btn-style-one white-color">
                        Know More...
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="big-data-banner-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image src={banner3} alt="banner-image" />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="big-data-banner-content">
                  <h2
                    className="nunito-font"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    Artificial Intelligence & Machine Learning
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    We Skilfully Integrate Artificial Intelligence & Machine Learning to Boost Your Operational Efficiency Through Improved Customer Engagement and Employee Performance.
                  </p>
                  <div
                    className="btn-box"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <Link href="/get-a-trial-service">
                      <a className="btn-style-one orange-color">
                        Get A Free Trial Service
                      </a>
                    </Link>

                    <Link href="/ai-ml">
                      <a className="btn-style-one white-color">
                        Know More...
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="big-data-banner-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image src={banner4} alt="" />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="big-data-banner-content">
                  <h2
                    className="nunito-font"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    Design
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    We Take Pride in Translating Your Business Ideas into Excellent Solutions. Our Designs Provide You with the Freedom to Express!
                  </p>
                  <div
                    className="btn-box"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <Link href="/get-a-trial-service">
                      <a className="btn-style-one orange-color">
                        Get A Free Trial Service
                      </a>
                    </Link>

                    <Link href="/design">
                      <a className="btn-style-one white-color">
                        Know More...
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="big-data-banner-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image src={banner5} alt="banner-image" />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="big-data-banner-content">
                  <h2
                    className="nunito-font"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    Accredited ISO 9001:2015
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    SPM Global Technologies is Proud to Be Recognised as An ISO 9001:2015 Accredited IT Service and Software Company.
                  </p>
                  <div
                    className="btn-box"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <Link href="/get-a-trial-service">
                      <a className="btn-style-one orange-color">
                        Get A Free Trial Service
                      </a>
                    </Link>

                    <Link href="/about-us">
                      <a className="btn-style-one white-color">
                        About Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="big-data-banner-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image src={banner6} alt="banner-image" />
                </div>
              </div>
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
