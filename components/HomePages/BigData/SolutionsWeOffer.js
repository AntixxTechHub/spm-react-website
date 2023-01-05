import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Image from "next/image";

import itsm from "@/public/images/icon/itsm.png";
import webcloudbasedapp from "@/public/images/icon/web-cloud-based-app.png";
import enterpriseapp from "@/public/images/icon/enterprise-app.png";
import ecommerce from "@/public/images/icon/e-commerce.png";
import crm from "@/public/images/icon/crm.png";
import erp from "@/public/images/icon/erp.png";
import logistics from "@/public/images/icon/logistics.png";
import elearning from "@/public/images/icon/e-learning.png";
import solutionproductivity from "@/public/images/icon/solution-productivity.png";
import dataanalytics from "@/public/images/icon/data-analytics.png";
import hrsoftware from "@/public/images/icon/hr-software.png";
import mobileapps from "@/public/images/icon/mobile-apps.png";


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
        1000: {
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
        <div className="case-studies-area-pb with-top-border pt-100 bg-color">
            <div className="container">
                <div
                    className="section-title"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    <span className="sub-title"></span>
                    <h2>Technology-Driven Solutions We Offer</h2>
                    <span className="sub-title yellow-color">We pioneer in empowering our Clients IT-enabling them for B2B, B2C, and internal communication</span>
                </div>
            </div>
            <div className="container-fluid">
                {display ? (
                    <OwlCarousel
                        className="case-studies-slides-banner owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-why-choose-us-box ">
                            <div className="icon">
                                <Image src={itsm} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>ITSM</a>
                            </h3>
                            <p>
                                Effectively manage end-to-end IT Services you deliver to delight your customers switching to a wide array of ITSM Solutions we implement.
                            </p>
                            <Link href="/itsm">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box active">
                            <div className="icon">
                                <Image src={webcloudbasedapp} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>Web & Cloud-based Apps</a>
                            </h3>
                            <p>
                                Well-designed web & cloud-based apps to enable your users to do more through some clicks.
                            </p>
                            <Link href="/web-&-cloud-based-apps">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box">
                            <div className="icon">
                                <Image src={enterpriseapp} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>Enterprise Apps</a>
                            </h3>
                            <p>
                                Custom-designed enterprise apps for business-specific operational needs and more.
                            </p>
                            <Link href="/enterprise-apps">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box active">
                            <div className="icon">
                                <Image src={ecommerce} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>e-Commerce</a>
                            </h3>
                            <p>
                                Take your product range to buyers on a global scale using our custom eCommerce portals and apps.
                            </p>
                            <Link href="/ecommerce">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box">
                            <div className="icon">
                                <Image src={crm} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>CRM</a>
                            </h3>
                            <p>
                                Retain your customer base through seamless communication using our custom-built CRM Solutions.
                            </p>
                            <Link href="/crm">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box active">
                            <div className="icon">
                                <Image src={erp} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>ERP</a>
                            </h3>
                            <p>
                                Experience incredible resource management, procurement, and inventory management adopting our tailor-made ERP Solutions.
                            </p>
                            <Link href="/erp">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box">
                            <div className="icon">
                                <Image src={hrsoftware} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>HR Software</a>
                            </h3>
                            <p>
                                Automate and modernize your talent scrutiny, hiring, onboarding, training, and payroll management processes using our HR software made for you.
                            </p>
                            <Link href="/hr-software">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box active">
                            <div className="icon">
                                <Image src={logistics} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>Logistics Software</a>
                            </h3>
                            <p>
                                Bring all stages of fleet management to one user-friendly dashboard by adopting our Logistics Software
                            </p>
                            <Link href="/logistics-software">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box">
                            <div className="icon">
                                <Image src={elearning} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>eLearning Software</a>

                            </h3>
                            <p>
                                Revolutionizing education at different levels and domains through well-thought eLearning platforms as per your requirements.
                            </p>
                            <Link href="/elearning-software">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box active">
                            <div className="icon">
                                <Image src={solutionproductivity} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>Solutions for Productivity and Collaborations</a>

                            </h3>
                            <p>
                                Get globally-acclaimed solutions from us to enhance your productivity and strengthen cross-level collaborations for delivering the best you can.
                            </p>
                            <Link href="/solutions-for-productivity-and-collaborations">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box">
                            <div className="icon">
                                <Image src={dataanalytics} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>Data Analytics</a>
                            </h3>
                            <p>
                                Make perfect decisions by analyzing a huge amount of data flowing through various directions by adopting our Data Analytics Solutions.
                            </p>
                            <Link href="/analytics">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="single-why-choose-us-box active">
                            <div className="icon">
                                <Image src={mobileapps} alt="icon" />
                            </div>
                            <h3 className="nunito-font">
                                <a>Mobile Apps</a>
                            </h3>
                            <p>
                                Engage millions of users through our user-friendly mobile apps for different platforms.
                            </p>
                            <Link href="/mobile-apps">
                                <a className="link-btn">
                                    Learn More <i className="bx bx-chevron-right"></i>
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
