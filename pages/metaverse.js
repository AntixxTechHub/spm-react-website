import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";


import dummyimg from "@/public/images/dummy-img.png";


const Services = () => {
  return (
    <>
      <PageTitle page="Metaverse" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Metaverse" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p className="w-100" style={{ textAlign: "justify" }}>We help our clients have an impressive presence in an unusual virtual world online. We adopt the latest content generation systems and digital twin generation methodology. We put our extensive experience into creating portals to digital spaces for you.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>While providing Metaverse Services, our ultimate aim is to help you reinvent your business verticals by creatively manifesting all-new virtual spaces. We emphasise a splendid user experience for your prospects, enhancing your brand presence and helping you strike solid engagement with your clientele and teams.</p>
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
            <h2 className="nunito-font">Metaverse Services We Offer</h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
                <Image src={dummyimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">Digital Twins and Virtual Worlds Development</h3>
                <p className="w-100" style={{ textAlign: "justify" }}>System and gateway providers can leverage our industry expertise to make their dream projects happen. SPM Global Technologies supports art, QA, infrastructure, product, and engineering needs by deploying a highly trained and experienced workforce.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We contribute to the clients’ visions and executions of the Metaverse. We collaborate with their teams to create artificial environments, simulations, and 4.0 software solutions. We deliver Metaverse projects tailored to their requirements.</p>
                <h3 className="nunito-font">Fantastic Virtual Productions</h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our Metaverse experts work closely with you to design and implement real-time productions using leading game engines and exciting art productions. We deliver virtual venues and breath-taking product displays, and we also offer technical support for your spectacular virtual events.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We are committed to creating the most intent-driven and thought-provoking content production assets to take the success of your metaverse-driven campaigns to new heights. We are open to working with start-ups and established brands across various industries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">Strategic Consulting in the Metaverse</h3>
                <p className="w-100" style={{ textAlign: "justify" }}>SPM Global Technologies offers consulting and advisory services to gauge your current metaverses, their drawbacks, analyse your business-specific requirements, and work on a customised metaverse creation programme with a detailed analysis of operating costs.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Our experts deliver extensive support to help you explore different possibilities to digitise your culture and services through storytelling methods. We extend expert support for art style and visualisation for your Metaverse implementation.</p>
                <h3 className="nunito-font">Let’s Create Something Bigger and Better Together!</h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Fill in the form or talk to our Metaverse experts today to discuss your requirements and get your queries resolved. We would be happy to let you know what we can do together to strategize and execute your next Metaverse project.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
                <Image src={dummyimg} alt="" />
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

export default Services;