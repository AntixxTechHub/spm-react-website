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
      <PageTitle page="Salesforce Commerce Cloud" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Salesforce Commerce Cloud" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p style={{ textAlign: "justify" }}>Online shopping has been an emerging trend in the modern digital era due to the enhanced user experience. E-commerce has seen tremendous growth in the last decade, and the transition may reach new heights soon. Salesforce commerce cloud (previously known as ‘Demandware’) helps your business synchronize all your operations to achieve better productivity and ultimately better profitability.</p>
                <p style={{ textAlign: "justify" }}>We offer Commerce cloud in Salesforce customization, deployment, training, and support services to the future leaders of the e-commerce world. The solution helps you scale your e-commerce business, as you can widen your product range, and service area and handle complicated logistics and after-sales issues in a streamlined manner. You have the Salesforce advantage! This is based on a world-renowned cloud-based platform that most people know about. We are among the most sought-after Commerce Cloud Vendors, offering a one-stop solution for your Salesforce Commerce Cloud implementation needs.
                </p>
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
                <h3 className="nunito-font">
                  About the Solution
                </h3>
                <h6>Running an e-commerce store is a tedious task, as your organization must concentrate on various fronts simultaneously, such as:</h6>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Creating and adding the product base on your online platform
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Optimizing the content on your website to rank higher on the search engines
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Managing inventories at the stock locations
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Smooth procurement to maintain stocks, and
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Uninterrupted delivery network to reach the products to the doorstep of the buyers
                  </li>
                  <p style={{ textAlign: "justify" }}>If you are still managing all these operations conventionally, you are missing various business development opportunities. Joining hands with Commerce Cloud Third-Party Vendor at the right time can accelerate your business. </p>
                  <p style={{ textAlign: "justify" }}>We offer Commerce Cloud Managed Services to the B2C and B2B clientele across the globe. We take pride in serving our clients globally, from various sectors, including manufacturing, CPG/Retail, communication, higher education, automotive, financial services, life sciences, media, public sector organizations, and non-profits.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font"></h2>
            <span className="sub-title purple-color">Let us take a glance at the positive influences the Salesforce eCommerce solution can bring to your businesses:</span>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Benefits of Salesforce Commerce Cloud
                </h5>
                <p style={{ textAlign: "justify" }}>We are one of the globally appreciated Commerce Cloud Consultants helping you digitalize your businesses. It is vital to know what your business gets by adopting Salesforce Commerce Cloud before deciding to embrace it. The following are some significant benefits of the SaaS e-commerce solution:</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Significance of Salesforce Commerce Cloud Service Providers
                </h5>
                <p style={{ textAlign: "justify" }}>Working with the most experienced and reputed Commerce Cloud Third Party Vendor is a crucial strategic decision. This collaboration drives the success of your business in many ways:</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Customization
                </h5>
                <p style={{ textAlign: "justify" }}>We work as Commerce Cloud Third Party Vendor, and our Salesforce experts specialize in customizing the SaaS solution adhering to your business and operations-specific requirements. Customization helps you make the most effective use of the features and bring all your operations on the same page. You can have Salesforce Chatter as an additional feature. This is a social platform for effective communication for Salesforce customers. We deploy it for you on demand.</p>
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
                <h3 className="nunito-font">Training</h3>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies takes pride in offering Salesforce Training to our clients from across the globe and individuals willing to make a career in Salesforce Cloud. We provide many certification programs, including</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Commerce Cloud Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Field Services Lightning Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Platform Developer I
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified System Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Technical Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Application Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Pardot Specialist
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce Commerce Cloud Lightning
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Mobile Solutions Architecture Designer
                  </li>
                </ul>
                <p style={{ marginTop: '25px' }}> you industry-ready and help you achieve new heights in your career. Apart from that, we train the select workforce of our clients during the implementation of the Salesforce commerce cloud.</p>
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
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>What is Salesforce Commerce Cloud?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Salesforce Commerce Cloud is a cloud-based e-commerce SaaS solution designed for various sizes of businesses. The cloud-based solution is ideal for e-commerce businesses. It keeps on evolving and thus offers the best-in-the-class features to the users.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>How to choose the right Salesforce Commerce Cloud Service Providers?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>When choosing Commerce Cloud Third Party Vendor, consider the following factors:</p>
                
                    <li>Implementation experience</li>
                    <li>Product expertise of the firm</li>
                    <li>Customization capabilities</li>
                    <li>Training programs for clients and individuals</li>
                    <li>Prompt technical support services from certified professionals.</li>
                
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>What are the benefits of working with Commerce Cloud Third-Party Vendor?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>It would be a wise strategic decision to work with a third-party vendor for Salesforce commerce cloud implementation. It can bring many benefits such as:</p>
                    <li>Third-party vendors offer Commerce Cloud Managed Services considering the client’s business-specific requirements.</li>
                    <li>They possess a highly trained and Salesforce-certified workforce.</li>
                    <li>They offer Salesforce trainings to your staff to make the most effective use of the SaaS solution.</li>
                    <li>Their Commerce Cloud Support Services help you get your technical issues resolved quickly to avoid downtime.</li>
                    <li>They implement the latest features like Commerce cloud Einstein and commerce cloud lightning to enable you to take complete advantage of the cloud-based solution.</li>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Why are Salesforce Trainings essential?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>For individuals who wish to boost their career growth by being well-versed in Salesforce commerce cloud and businesses that want to take their e-commerce sales to the next level, Salesforce training is essential. The commerce could trainings offered by reputed commerce cloud consultants enhance your technical know-how about the SaaS solution and help your company achieve more.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>How do Commerce Cloud Support Services help your businesses?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Though the Salesforce Commerce Cloud Service Providers customize and implement the solution as per your business’s needs, there may be some technical difficulties during the operations. Commerce Cloud Support Services ensure faster turnarounds after a service query. You can get your service issues resolved at the earliest. Thus, you can save on your valuable time and continue with your core business activities.
                </p>

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
                <h3 className="nunito-font">Summary</h3>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies are leading Salesforce Commerce Cloud Service Providers, offering Commerce Cloud Managed Services to the global clientele across various sectors. With extensive experience in Salesforce solutions and a successful track record of developing, customizing, deploying, and offering training and support services for Salesforce Cloud solutions, we are a trusted partner for organizations of different sizes.</p>
                <p style={{ textAlign: "justify" }}>Our team specializes in customizing the SaaS solution as per your e-commerce business needs and deploys the well-developed cloud-based solution to help you improve your operational productivity. Being a globally recognized Commerce Could Consultant, we have worked with hundreds of clients from across various industries so far. </p>
                <p style={{ textAlign: "justify" }}>Our Salesforce Trainings for our clients help them adopt the best e-commerce cloud solution effortlessly. Apart from that, our Commerce Cloud Trainings for professionals help them master this solution and shoulder responsibilities at different levels.</p>
                <p style={{ textAlign: "justify" }}>We are Salesforce Commerce Cloud Service Providers and also serve as Commerce Cloud Consultants proudly. Choose us as your Salesforce Commerce Cloud implementation partner and take your e-commerce platform to the new heights of success.</p>
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
      <SubscribeStyle1 />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default Services;