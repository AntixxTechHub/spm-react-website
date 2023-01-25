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
      <PageSeo seo={seo} pageName = "AWS" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="AWS" />
<head>
<meta name="description" content=" SPM Global Technologies is the world’s leading provider of software development solutions and installation services of cloud-based products, including AWS."/>
          <meta name="keywords" content=" " />
          <link rel="canonical" href=" https://www.spmglobaltech.com/aws" />
          
          
        </head>
       



      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                  We Are Your Trustworthy Partner for AWS Migration and Implementation
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>
                  Amazon Web Services (AWS) is a revolutionary and extensively adopted cloud-based platform. It is enabling businesses to become the best versions of themselves with its comprehensive range of solutions and products based on futuristic and ground-breaking infrastructure and emerging technologies. Offering over 200 fully featured and functional solutions delivered from its data centres based in various parts of the world, its solutions cover different aspects of businesses and industry verticals. They help businesses become more agile and highly performing, innovate faster and achieve lower costs. The solutions empower them
                  to build a variety of solutions and applications in a fast and easier way.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Trustworthy Partner for AWS Migration and Implementation.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
              <MediaImage name="AWS Service Providers and prominent.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <p className="w-100" style={{ textAlign: "justify" }}>Experienced and knowledgeable AWS experts of SPM Global Technologies, one of the most reputed AWS Service Providers and prominent AWS vendors, will help you throughout your AWS migration and implementation process. They will assist you right from providing AWS consultant advice, communicating, roadmap development, strategy making, cloud-native deployment, implementation, migration, testing, enforcing best practices, on-boarding your employees, training, monitoring, updating, risk assessment, security, backup of data and compliance and providing AWS support services.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>SPM Global Technologies is the world’s leading provider of software development solutions and installation services of cloud-based products, including AWS. This major AWS third party vendor and provider of exceptional AWS Managed Services, has the technological proficiency, resources and trained manpower to advise, assist and lead you during the entire process for achieving a smooth and seamless AWS implementation for your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Services and products offered by AWS</h2>
            <span className="sub-title purple-color">Let’s now uncover various solutions, services and products being offered by AWS, which will help you in choosing the best fit for your business.</span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                <MediaImage name="VR & AR.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>VR & AR</a>
                </h5>
                <p>
                  It allows businesses across different industry segments to create engaging and immersive 3D front-end experiences.</p>
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
                <MediaImage name="VR & AR.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Blockchain</a>
                </h5>
                <p>
                  It allows businesses to develop blockchain and ledger applications in a faster, simpler and efficient manner.</p>
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
                <MediaImage name="Block Chain.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Developer Tools</a>
                </h5>
                <p>
                  Various developer tools allow businesses to host code and build, test and deploy their applications to AWS.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                <MediaImage name="Internet of Things.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Internet of Things</a>
                </h5>
                <p>
                  IoT services from AWS enable homeowners, industrial and commercial enterprises to build highly secure and scalable IoT applications for various uses.</p>
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
                <MediaImage name="Networking and content delivery.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Networking & Content Delivery</a>
                </h5>
                <p>It grants businesses highly reliable, secure and high performing networking services, which let them run any kind of workload in the cloud.</p>
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
                <MediaImage name="Robotics.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Robotics</a>
                </h5>
                <p>Its cloud based Robotics solutions help robotic developers simulate, test and deploy robotics based applications in a secure and scalable manner.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Migration & Transfer</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Its comprehensive range of migration tools and solutions allow businesses to migrate easily to AWS and get business results faster.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Media Services</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Its purpose-built media services allow businesses to develop, transform and deliver digital content in a fast and easy manner.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Mobile</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>AWS provides a set of tools and services that let businesses build mobile and web applications in the fastest way.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Storage</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>It provides businesses a secure, reliable and scalable place for storing their data on the cloud.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Game Tech</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>It allows gaming companies to build high quality and engaging games productively and in less budget.</p>
                  </li>
                </ul>
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
                <h4 className="nunito-font">
                  Analytics
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>It entails scalable data lakes, purpose built analytical services, seamless data movement and unified governance. While data lakes provide a centralized repository for storing all the structured and unstructured data at any scale, analytics services are optimized for your business’s unique analytics use cases. Seamless data movement allows combining, moving and replicating data across multiple data stores and data lakes. Governance is associated with authorizing, managing and auditing access to your business data. </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Analytics.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-text">
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '200px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Database</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>It provides businesses 15+ purpose-built, secure and reliable database engines to choose from for building use case driven, highly scalable and distributed applications.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '200px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>End User Computing</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Its end user computing services enable business personnel to securely access various applications and desktops for getting their job done. They offer businesses advantages like increased agility, enhanced reliability and optimization of costs.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '200px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Management & Governance</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>AWS management and governance services allow businesses to carry on innovation and control cost, compliance and security side by side. They are able to maintain both business agility and governance control.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '200px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Satellite</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>This fully managed service from AWS lets users control satellite communications, process data and scale their operations without the need to build or manage their own ground station infrastructure. It delivers them benefits like faster data downloads, immediate data processing and self-service scheduling.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-text">
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '200px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Security Identity & Compliance</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>These solutions from AWS enable businesses to protect their data, networks and applications and let them better manage their identities and permissions. Also, they can detect threats, practice continuous monitoring and maintain compliance and data privacy.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{ height: '200px' }}
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Quantum Technologies</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Fully managed quantum computing service enables researchers and developers to get started quickly with various Quantum Technologies for carrying out research and discovery.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '200px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Machine Learning</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Its machine learning services facilitate machine learning among developers, data scientists and expert practitioners, so they can employ them for improving customer experience, optimizing business operations and accelerating innovation.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '200px' }}>
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>AWS Cost Management</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>This solution provides real-time cost data to engineering, application and business teams, leading to improved cost visibility, accountability and controlling, billing management, planning and flexible forecasting and budgeting.</p>
                  </li>
                </ul>
              </div>
            </div>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=aws&populate=*`
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