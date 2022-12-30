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
    <PageSeo seo={seo} pageName = "Cloud Strategy" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Cloud Strategy" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Work with the most trusted Cloud Strategy Partner!</h2>
            <Image src={dummyimg} alt="icon" />
          </div>
        </div>
        <div className="container">

          <div className="section-title">
            <h2 className="nunito-font">Assess & Upgrade Your Cloud Applications and Infrastructure</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>$864 Billion</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Global Data predicts the global cloud market to reach the $864 Billion mark in 2025, from $543 Billion in 2021.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>12.8%</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      The global cloud market is growing at a Compound Annual Growth Rate of 12.8%!</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>61.6%</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      The public cloud will attract a massive 61.6% of cloud investment, while 16.7% will go to the private cloud, and 9.4% will go to the hybrid cloud.</p>
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
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>End-To-End Cloud Strategy</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      Strategize infrastructure migration choosing from multi-crowd hybrid, public, or private cloud.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Smooth Switching to Cloud</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      We help you switch to the cloud from legacy infrastructure through optimization and a proper strategy.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Strategic Advisory</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      We offer technology consulting to define cloud infrastructure design, draw strategic decisions, and analyze the Total Cost of Ownership. </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Ensuring Secured Cloud Infrastructure</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      We develop cloud security solutions for different business sizes. Our solutions ensure the elimination of security threats to your cloud architecture.</p>
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
            <h2 className="nunito-font">Obstacles in the Cloud Transformation Journey</h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '460px' }}>
                <div className="icon">
                <MediaImage name="Prioritize cloud security.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Prioritize Cloud Security</a>
                </h5>
                <p>Businesses should comply with cloud security standards and follow best practices to avoid cloud security issues.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                <MediaImage name="Define suitable cloud services model.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Define Suitable Cloud Service Model</a>
                </h5>
                <p>Businesses need to determine a suitable cloud service model. A cloud strategy helps attain authority over your infrastructure and effectively use cloud capabilities.</p>
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
                  <a>Strategize Effectively</a>
                </h5>
                <p>Businesses must rely on a well-thought cloud strategy to execute a smooth migration from legacy systems. Your business can attain better compatibility and implement cloud migration at the lowest possible cost.</p>
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
                <h4>How are SPM Global Technologies Better Than Others</h4>
                <p className="w-100" style={{ textAlign: "justify" }}></p>
                <p className="w-100" style={{ textAlign: "justify" }}> SPM Global Technologies is a globally recognized AWS Partner. With our technical capabilities, we develop cloud-based solutions as per our client's operational needs. </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We develop, customize, and deploy Big Data Solutions for our clients for swift data discovery, reliable storage capabilities, and scalable cloud storage per changing needs.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We specialize in cloud strategy, enable the most reliable cloud security, and provide excellent solutions to ensure data management and governance.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We deploy our fleet of cloud computing experts for effective data management and cost-optimized data processing for our clients.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={dummyimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">SPM Global Technologies Partner with Globally Recognized Tech Brands</h2>
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
                <MediaImage name="AWS.jpg" data={seo} />
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
                <MediaImage name="Google cloud.jpg" data={seo} />
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
                <MediaImage name="Azure.jpg" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Microsoft Azure</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font"></h2>
            <span className="sub-title purple-color">Initiate a Conversation with Our Cloud Expert Today!</span>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=cloud-strategy&populate=*`
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