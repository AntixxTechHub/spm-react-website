import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";


import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";


const Services = () => {
  return (
    <>
      <PageTitle page="Big Data Strategy" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Big Data Strategy" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Enhance Your Big Data Capabilities Through Assessment and Strategy</h2>
            <Image src={dummyimg} alt="" />
            <h3 className="nunito-font">Revolutionizing Your Data and Analytics Governance</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-text">
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '150px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>95%</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>According to Webinarcare, 95% of businesses consider managing unstructured data challenging.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '150px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>97.2%</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      More than 97% of businesses invest in big data and AI for better data storage, management, and governance.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '150px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>US$274.3 Billion</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      As per Statista, the Big Data market will reach the mark of US$274.3 Billion by 2022.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '150px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>US$9.7 Million to US$14.7 Million</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      Poor Data Quality costs businesses from around the world US$9.7 to US$14.7 Million every year!</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '150px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>We Help You Strategize</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      SPM Global Technologies draws a big data strategy for your business by considering your business objectives and the upgrades you require.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '150px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Analytics for Better Outcomes</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      We help you build well-designed data pipelines to streamline your data collection process, enabling effective transformation and leading to better data-driven analytics.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '150px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Migrate Your Big Data Smoothly</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      We modernize your big data capabilities and help you implement data effectively through our Managed Big Data Services.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '150px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Effective Data Management</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      We develop Enterprise Data Warehouse as per your needs and provide Integrated Solutions to enable end-to-end Data Flow Automation.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="funfacts-area bg-fff4f8">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 className="nunito-font"></h2>
              <h3 className="nunito-font" style={{ marginTop: '50px' }}>We Deploy the Best Teams for Your Big Data Projects</h3>
            </div>
            <div
              className="col-lg-4 col-md-3 col-sm-3 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-funfacts-box">
                <div className="icon">
                  <i className="flaticon-employee"></i>
                </div>
                <h3>40+</h3>
                <p>Big Data Experts</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-3 col-sm-3 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-funfacts-box">
                <div className="icon">
                  <i className="flaticon-projects"></i>
                </div>
                <h3>12+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-3 col-sm-3 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-funfacts-box">
                <div className="icon">
                  <i className="flaticon-rating"></i>
                </div>
                <h3>30+</h3>
                <p>Certified Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4>Guiding Your Business to Adopt DevOps</h4>
                <p className="w-100" style={{ textAlign: "justify" }}>
                  Workflow automation to increase the pace of operations, adopting monitoring practices to assess work periodically, and a well-thought DevOps Roadmap for a streamlined adoption across various levels of your organization.</p>
                <h4>Our DevOps Technology Consulting Services and Solutions at A Glance</h4>
                <h6>DevOps Integration and Implementation</h6>
                <p className="w-100" style={{ textAlign: "justify" }}>SPM Global technologies provide technology consulting services to clients from across the world. We help our clients adopt best practices to combine software development (Dev) and their IT operations (Ops).</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We partner with clients throughout their transformation journey by providing DevOps assessment, integration, implementation, testing, and DevOps pipeline. </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={dummyimg} alt="man-with-son-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Obstacles in Creating a Data-Driven Business</h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Ensuring Compliance & Governance</a>
                </h5>
                <p>Businesses need a well-thought strategy to ensure privacy for maintaining data integrity and following regulations enforced by the concerned authority.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Scalability of Data Solutions</a>
                </h5>
                <p>To create a data-driven organization, you need to ensure the highest data performance and reliability as your users keep growing with time.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Determining the Best Tech Solutions</a>
                </h5>
                <p>If your business targets to achieve objectives through data insights, you must adopt modern technology in big data analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Why Your Business Must Be Data-Driven</h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Drawing Data Strategy for Growth</a>
                </h5>
                <p>It is the burning need to strategize big data and relevant solutions to effectively manage crucial, mission-centric information.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Work Together Throughout the Data Lifecycle</a>
                </h5>
                <p>It is essential to collaborate to manage data and adopt DataOps best practices for consistency and automation of data management.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Effective Decision-Making</a>
                </h5>
                <p>Real-time data insights will help your business make perfect decisions at various stages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Why Choose SPM Global Technologies as Your Big Data Strategy Partner</h2>
            <p style={{textAlign: "justify"}}>SPM Global technologies are globally recognized service providers for many technology-driven solutions, including AWS, Microsoft Azure, IBM, and Google Cloud. We build Big Data Solutions for our clients by leveraging our technical capabilities and expertise.</p>
            <p style={{textAlign: "justify"}}>We offer a wide range of Big Data Managed Services and customized solutions for Effective Big Data Implementation at competitive prices and minimal time.</p>
            <p style={{textAlign: "justify"}}>We develop, customize, and deploy Big Data Solutions for our clients for swift data discovery, reliable storage capabilities, and scalable cloud storage per changing needs.</p>
            <p style={{textAlign: "justify"}}>We deploy our fleet of big data analytics experts for effective data management and cost-optimized data processing.</p>
            <span className="sub-title purple-color">SPM Global Technologies Partner with Globally Recognized Tech Brands</span>
          </div>
        </div>
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Why Your Business Must Be Data-Driven</h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>AWS</a>
                </h5>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Google Cloud </a>
                </h5>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Microsoft Azure</a>
                </h5>
              </div>
            </div>
            <div className="section-title">
              <span className="sub-title purple-color">Initiate a Conversation with Our Big Data Expert Today!</span>
              <p>Fill up the form and let us know about your requirements in Big Data Strategy. Our Big Data Analytics experts will discuss your requirements in detail and specify what best we can offer to revolutionize your business by implementing or upgrading the Big Data capabilities.</p>
            </div>
          </div>
        </div>
      </div>

      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export default Services;