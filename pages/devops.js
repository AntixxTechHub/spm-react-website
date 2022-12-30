import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";



import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";


const Services = ({ seo }) => {
  
  return (
    <>
      <PageSeo seo={seo} pageName = "Devops" />
      <Navbar />
      <PageTopTitle
        title="Devops" 
        subTitle="
        "
        />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font"></h2>
            <span className="sub-title purple-color">Helping You Adopt Agility Through DevOps For Faster Software Delivery</span>
            <p>SPM Global Technologies partners with leading tech brands globally. We help you embrace agile methodology for your software development operations. We deliver custom cloud-native solutions and modernize your applications for better performance and productivity.</p>
            <span className="sub-title purple-color">SPM Global Technologies DevOps Consulting and Solutions Partner</span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                <MediaImage name="Workflow orchestration for product release.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Workflow Orchestration for Product Release</a>
                </h5>
                <p>
                  Streamline development operations for faster product release and orchestrate apps and microservices across various environments.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                <MediaImage name="Automate Implementation.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Automate Implementation</a>
                </h5>
                <p>Automate configurations and manage infrastructure through DevOps best practices across the multi-cloud environment for accelerated operations, timely delivery, and the highest customer experiences.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                <MediaImage name="Real time performance overview.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Real-Time Performance Overview</a>
                </h5>
                <p>Implement Value Stream Mapping for complete visibility of workflow and DevOps Metrics. Enhance product delivery performance and organizational performance.</p>
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
                <h5>DevOps Integration and Implementation</h5>
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
              <MediaImage name="Guiding Your Business to Adopt DevOp.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '200px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>DevOps Strategy and Consulting</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Consult our DevOps and Cloud experts to draw a strategy customized to your business needs. We offer DevOps consulting, assess your IT infrastructure, build a DevOps Roadmap for your business, and help you with agile transformation.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '200px' }}

                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Continuous DevOps Delivery</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      We help you build and monitor continuous delivery pipelines for microservices and serverless computing across various platforms.</p>
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
                    style={{ height: '200px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>DevOps Monitoring</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      We provide solutions to help you monitor your microservices applications and delivery pipeline. You can track the progress of every software development project with ease.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '200px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Ensuring DevOps Success</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      We guide you through performance metrics and key performance indicators (KPIs) to measure DevOps success at various stages.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">DevOps Solutions on Various Cloud Platforms</h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                <MediaImage name="AWS Devops Services.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>AWS DevOps Services</a>
                </h5>
                <p>We help you adopt DevOps Solutions on AWS Cloud by leveraging integration services for development on AWS Cloud.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                <MediaImage name="Google Cloud Devops Services.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Google Cloud DevOps Services</a>
                </h5>
                <p>We help you utilize solutions built on Google Cloud by leveraging Google’s Infrastructure as a Service and other facilitations for development.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                <MediaImage name="Azure Devops Services.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Azure DevOps Services</a>
                </h5>
                <p>We enable DevOps Solutions on Azure through workflow orchestration, package management solutions, and other features of the cloud.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Talk to Our DevOps and Cloud Experts Today!</h2>
            <span className="sub-title purple-color"></span>
          </div>
        </div>
      </div>

      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=devops&populate=*`
  );
  const seo = await res.json();

  // By returning { props: { blog } }, the Blog component
  // will receive `blog` as a prop at build time
  return {
    props: {
      seo,
    },
  };
}


export default Services;