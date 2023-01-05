import React, { useState } from "react";
import Link from "@/utils/ActiveLink";
import Image from "next/image";
import logo from "@/public/images/spmgt_logo.svg";
import blog from "@/public/images/icon/blog.svg";
import insights from "@/public/images/icon/insights.svg";
import video from "@/public/images/icon/video.svg";
import solutions from "@/public/images/icon/solutions.svg";
import technologyconsulting from "@/public/images/icon/technology-consulting.svg";
import solusoftwaresolutionstions from "@/public/images/icon/software-solutions.svg";
import Script from "next/script";
const Navbar5 = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };
//Gtag Fuction
 const eventGtag = (action, category, label, value) => {
    if (typeof window !== "undefined") {
        if (typeof window.gtag !== 'undefined') {
            window.gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value,
            })
        }
    }
}

  return (
    <>

      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link href="/">
                <a className="navbar-brand">
                  <Image src={logo} alt="site logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <ul className="navbar-nav " style={{ color: '#326ebd' }}>

                    {/* --------------------What We Do--------------------------- */}
                    <li className="nav-item megamenu" >
                      <Link href="#" activeClassName="active">
                        <a className="nav-link dropdown-toggle nav-link">What We Do</a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">

                              <div className="col-12 col-sm-6 col-md-3 mtb-5">
                                <ul className="megamenu-submenu">
                                  <li className="nav-item">
                                    <Link href="/bmc" activeClassName="active">
                                      <a className="nav-link">
                                        <h6>BMC</h6>
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                                <ul className="megamenu-submenu">
                                  <li className="nav-item">
                                    <Link
                                      href="/bmc-helix-itsm"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">BMC Helix ITSM</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link href="/bmc-helix-remedyforce" activeClassName="active">
                                      <a className="nav-link">BMC Helix Remedyforce</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/bmc-helix-discovery"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">BMC Helix Discovery</a>
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link
                                      href="/bmc-truesight"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">BMC TrueSight</a>
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link href="/bmc-control-m" activeClassName="active">
                                      <a className="nav-link">BMC Control-M</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/bmc-smart-reporting"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">BMC Smart Reporting</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/bmc-client-management"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">BMC Client Management</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/bmc-helix-digital-work-place"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link"> BMC Helix Digital Work Place</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">BMC BladeLogic</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-12 col-sm-6 col-md-3 mtb-5">
                                <ul className="megamenu-submenu">
                                  <li className="nav-item">
                                    <Link href="/salesforce" activeClassName="active">
                                      <a className="nav-link">
                                        <h6>Salesforce</h6>
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                                <ul className="megamenu-submenu">
                                  <li className="nav-item">
                                    <Link
                                      href="/salesforce-sales-cloud"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">Salesforce Sales Cloud</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link href="/salesforce-service-cloud" activeClassName="active">
                                      <a className="nav-link">Salesforce Service Cloud</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/salesforce-commerce-cloud"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">Salesforce Commerce Cloud</a>
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link
                                      href="/salesforce-marketing-cloud"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">Salesforce Marketing Cloud</a>
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link href="/salesforce-community-cloud" activeClassName="active">
                                      <a className="nav-link">Salesforce Community Cloud</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/salesforce-integration-cloud"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">Salesforce Integration Cloud</a>
                                    </Link>
                                  </li>

                                </ul>
                              </div>

                              <div className="col-12 col-sm-6 col-md-3 mtb-5">
                                <ul className="megamenu-submenu">
                                  <li className="nav-item">
                                    <Link href="/servicenow" activeClassName="active">
                                      <a className="nav-link">
                                        <h6>ServiceNow</h6>
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                                <ul className="megamenu-submenu">
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon"
                                    >
                                      <a className="nav-link">IT Service Management</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">
                                        IT Workflows
                                      </a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">
                                        Knowledge Management
                                      </a>
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">
                                        Audit Management
                                      </a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">
                                        Configuration Compliance
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-12 col-sm-6 col-md-3 mtb-5">
                                <ul className="megamenu-submenu">
                                  <li className="nav-item">
                                    <Link href="/aws" activeClassName="active">
                                      <a className="nav-link"><h6>AWS</h6></a>
                                    </Link>
                                  </li>
                                </ul>
                                <ul className="megamenu-submenu">
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">AWS Consulting</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/aws-cloud-migration"
                                      activeClassName="active"
                                    >
                                      <a className="nav-link">
                                        AWS Cloud Migration
                                      </a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">
                                        AWS Cloud Security
                                      </a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">Managed Cloud Services</a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">
                                        Serverless Computing
                                      </a>
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      href="/coming-soon">
                                      <a className="nav-link">
                                        AWS Market Enablement
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                                {/* <Link href="/courses" activeClassName="active">
                                <a className="d-block p-0">
                                  <Image src={courseImg} alt="image" />
                                </a>
                              </Link> */}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    {/* ------------------------------Solutions--------------------------------- */}
                    <li className="nav-item megamenu">
                      <Link href="#" activeClassName="active">
                        <a className="dropdown-toggle nav-link">
                          {/* Contact */}Solutions
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="row justify-content-center">

                                <div
                                  className="col-lg-4 col-md-1 col-sm-1"
                                >
                                  <div className="purple-color">
                                    <div className="icon">
                                      <Image src={solutions} alt="" />
                                    </div>
                                    <h6>
                                      <a>SOLUTIONS</a>
                                    </h6>
                                    <ul className="megamenu-submenu">
                                      <li className="nav-item">
                                        <Link href="/implementation-services" activeClassName="active" >
                                          <a className="nav-link">Implementation Services</a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/coming-soon">
                                          <a className="nav-link">Staff Augmentation</a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/coming-soon">
                                          <a className="nav-link">Applications Managed Services & Support</a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/coming-soon">
                                          <a className="nav-link">
                                            Integration Services
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/coming-soon">
                                          <a className="nav-link">
                                            Consulting & Advisory Services
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/coming-soon">
                                          <a className="nav-link">Infrastructure Outsourcing</a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link href="/coming-soon">
                                          <a className="nav-link">AWS Cloud Services</a>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div
                                  className="col-lg-4 col-md-4 col-sm-4"
                                >
                                  <div className="purple-color">
                                    <div className="icon">
                                      <Image src={solusoftwaresolutionstions} alt="icon" />
                                    </div>
                                    <h6>
                                      <a>SOFTWARE SERVICES</a>
                                    </h6>
                                    <ul className="megamenu-submenu">
                                      <li className="nav-item">
                                        <Link
                                          href="/design"
                                          activeClassName="active"
                                        >
                                          <a className="nav-link">
                                            Design
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/app-development"
                                          activeClassName="active"
                                        >
                                          <a className="nav-link">
                                            App Development
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/coming-soon">
                                          <a className="nav-link">
                                            IT Services
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/coming-soon">
                                          <a className="nav-link">
                                            Custom Solutions Development
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/coming-soon">
                                          <a className="nav-link">
                                            System & Software
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/coming-soon">
                                          <a className="nav-link">
                                            Testing & QA
                                          </a>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div
                                  className="col-lg-4 col-md-4 col-sm-4"
                                >
                                  <div className="purple-color">
                                    <div className="icon">
                                      <Image src={technologyconsulting} alt="icon" />
                                    </div>
                                    <h6>
                                      <a>TECHNOLOGY CONSULTING</a>
                                    </h6>
                                    <ul className="megamenu-submenu">
                                      <li className="nav-item">
                                        <Link
                                          href="/cloud-strategy"
                                          activeClassName="active"
                                        >
                                          <a className="nav-link">
                                            Cloud Strategy
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/big-data-strategy"
                                          activeClassName="active"
                                        >
                                          <a className="nav-link">
                                            Big Data Strategy
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/devops"
                                          activeClassName="active"
                                        >
                                          <a className="nav-link">
                                            Devops
                                          </a>
                                        </Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link
                                          href="/ai-ml"
                                          activeClassName="active"
                                        >
                                          <a className="nav-link">
                                            AI & ML
                                          </a>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                              </div>

                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    {/* ------------------------------Resources--------------------------------- */}

                    <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a className="dropdown-toggle nav-link">
                          {/* Pages */}Resources
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/blogs" activeClassName="active">
                            <a className="nav-link">Blogs</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/coming-soon">
                            <a className="nav-link">Resources</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/coming-soon">
                            <a className="nav-link">Media</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* ------------------------------Company--------------------------------- */}
                    <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a className="dropdown-toggle nav-link">
                          {/* Pages */}Company
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/about-us" activeClassName="active">
                            <a className="nav-link">About Us</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/testimonials" activeClassName="active">
                            <a className="nav-link">Testimonials</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/get-a-trial-service" activeClassName="active">
                            <a className="nav-link">Get A Trial Service</a>
                          </Link>
                          <li className="nav-item">
                            <Link href="/coming-soon" activeClassName="active">
                              <a className="nav-link">Job Openings</a>
                            </Link>
                          </li>
                        </li>
                        <li className="nav-item">
                          <Link href="/contact-us" activeClassName="active">
                            <a className="nav-link">Contact Us</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="others-option d-flex align-items-center">
                <div className="contact-info">
                  <div>
                    <i className="flaticon-call"></i>
                    {/* <button type="button" onClick={dataa}>
                      sss
                    </button> */}
                    <a href="tel:+91 9739380513" onClick={eventGtag('click', 'headercall', 'eventLabel', 'Header Phone Number')}> +91 9739380513 </a>
                  </div>
                  <div>
                    <i className="flaticon-email"></i>
                    <a href="mailto:info@spmglobaltech.com">info@spmglobaltech.com</a>
                  </div>
                </div>
                <div className="info d-flex align-items-center">
                  <div
                    className="search-icon"
                    onClick={handleToggleSearchModal}
                  >
                    <i className="flaticon-search-interface-symbol"></i>
                  </div>
                  <div>
                    <button type="button" onClick={handleToggleSidebarModal}>
                      <i className="flaticon-menu"></i>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div >
      {/* Search Form */}
      < div
        className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"
          }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Enter your keywords..."
                />
                <button type="submit">
                  <i className="flaticon-search-interface-symbol"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div >

      {/* Sidebar Modal */}
      < div
        className={`sidebarModal modal right ${isActiveSidebarModal ? "" : "show"
          }`}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="flaticon-cancel"></i>
            </button>

            <div className="modal-body">
              <div className="logo">
                <Link href="/">
                  <a className="d-inline-block">
                    <Image src={logo} alt="image" />
                  </a>
                </Link>
              </div>

              <ul className="sidebar-contact-info">
                <li>
                  <i className="bx bx-phone-call"></i>
                  <span>Mon to Fri : 10:00AM - 07:00PM</span>
                  <a href="tel:+91 97393 80513">+91 97393 80513</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <span>Do You Have a Question?</span>
                  <a href="mailto:info@spmglobaltech.com">info@spmglobaltech.com</a>
                </li>
                <li>
                  <i className="bx bx-map"></i>
                  <span>#63/3, Arham Towers, 3rd Floor, Krishna Rajendra Road, 7th Block, Jayanagar, Bengaluru - 560070, India.</span>
                  <a href="https://www.google.com/maps/place/SPM+Global+Technologies/@12.9462681,77.5959474,15z/data=!4m5!3m4!1s0x0:0xad95b2477702b703!8m2!3d12.9462681!4d77.5959474" target="_blank" rel="noreferrer">
                    Find Us on Map
                  </a>
                </li>
              </ul>

              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/SPMGlobalTech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-facebook-app-symbol"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/SPMGlobalTech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/spm-global-tech/about/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/spmglobaltechnologies/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-instagram"></i>
                  </a>
                </li>
              </ul>

              <div className="box">
                <p>Latest resources, sent to your inbox weekly</p>
                <form className="newsletter-form">
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Enter your email address"
                  />
                  <a href="mailto:info@spmglobaltech.com">
                    <button type="submit" className="btn-style-one green-color">
                      Subscribe Now <i className="bx bx-chevron-right"></i>
                    </button>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Navbar5;
