import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/spmgt_logo.svg";


const FooterTwo = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="template-footer-eight pt-100">
      {/*--------------------------------Start Footer Section One-----------------------------------*/}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-1">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Solutions</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/implementation-services">
                    <a>Implementation Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Staff Augmentation</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Applications Managed Services & Support
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Integration Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Consulting & Advisory Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Infrastructure Outsourcing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>AWS Cloud Services</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-1">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Product Expertise</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/bmc">
                    <a>BMC</a>
                  </Link>
                </li>
                <li>
                  <Link href="/salesforce">
                    <a>Salesforce</a>
                  </Link>
                </li>
                <li>
                  <Link href="/aws">
                    <a>AWS</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sap">
                    <a>SAP</a>
                  </Link>
                </li>
                <li>
                  <Link href="/servicenow">
                    <a>ServiceNow</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Google Cloud</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Microsoft Power Apps</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>IBM</a>
                  </Link>
                </li>
                <li>
                  <Link href="/analytics">
                    <a>Analytics</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Custom Software Applications</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-1">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Industries</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/coming-soon">
                    <a>On-Demand Solutions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Retail, Ecommerce</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Education & e-Learning</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Healthcare & Fitness</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Logistics & Inventory Management</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Travel & Hospitality</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Real Estate</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Food & Restaurants</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Social Networking</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Gaming</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-1">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Technology Consulting</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/cloud-strategy">
                    <a>Cloud Strategy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/big-data-strategy">
                    <a>Big Data Strategy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/devops">
                    <a>Devops</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ai-ml">
                    <a>AI & ML</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="copyright-area">
        </div>
      </div>

      {/*--------------------------------Start Footer Section Two-----------------------------------*/}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Contact Info</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-phone-call"></i>
                  {/* <span>Mon to Fri : 10:00AM - 06:00PM</span> */}
                  <a href onClick="gtag('event', 'click', {'event_category': 'footer call', eventLabel: 'Footer Phone number'});"> 91 9739380513 </a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  {/* <span>Do You Have a Question?</span> */}
                  <a href="mailto:info@spmglobaltech.com">info@spmglobaltech.com</a>
                </li>
                <li>
                  <i className="bx bx-map"></i>
                  <span>#63/3, Arham Towers,  Krishna Rajendra Road, 7th Block, Jayanagar, Bengaluru - 560070, India.</span>
                  <a href="https://www.google.com/maps/place/SPM+Global+Technologies/@12.9462681,77.5959474,15z/data=!4m5!3m4!1s0x0:0xad95b2477702b703!8m2!3d12.9462681!4d77.5959474" target="_blank" rel="noreferrer">
                    Find Us on Map
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Why SPM</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/about-us">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/get-a-trial-service">
                    <a>Get A Trial Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="job-openings">
                    <a>Job Openings</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs">
                    <a>Blogs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Quick Links</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/testimonials">
                    <a>Testimonials</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use">
                    <a>Terms of Use</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Security</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Privacy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Trademark Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Newsletter</h3>
              <div className="box">
                <p>Latest resources, sent to your inbox weekly</p>
                <form className="newsletter-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                  <input name="oid" type="hidden" defaultValue="00D2v000003PByK" />
                  <input name="retURL" type="hidden" defaultValue="https://www.spmglobaltech.com" />
                  <input id="email" maxLength={80} name="email" size={20} type="text" required autoComplete="off" className="input-newsletter" placeholder="Enter your email address" />
                  <div style={{ "display": "none" }}>
                    <label htmlFor="lead_source">lead Source</label>
                    <input id="lead_source" maxLength={40} name="lead_source" size={20} type="text" defaultValue="Website" />
                    <label htmlFor="Subscribed__c">Subscribe</label>
                    <input id="Subscribed__c" maxLength={40} name="Subscribed__c" size={20} type="text" defaultValue="True" />
                  </div>
                  <button type="submit" className="btn-style-one green-color">
                    Subscribe Now <i className="bx bx-chevron-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-2 col-md-6">
              <div className="logo">
                <Link href="/">
                  <a style={{ textAlign: "left" }}>
                    <Image src={logo} alt="logo" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-10 col-md-6">
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
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-6">
              <p style={{ textAlign: "center" }}>
                &copy; {currentYear} Copyright SPM GlobalTech. All Rights Reserved.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FooterTwo;
