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
      <PageTitle page="Web & Cloud-based Applications" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Web & Cloud-based Applications" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>Your One-Stop Destination for Web & Cloud-based Applications</h3>
                <p style={{ textAlign: "justify" }}>We design, develop, test, and deliver incredible web & cloud-based applications customised to your requirements. With technical expertise and extensive experience in app development, we offer a wide-ranging portfolio of apps as per your needs.</p>
                <h4>How Our Web & Cloud-based Application Service Works</h4>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies has been a preferred global brand in the enterprise application solutions services market for many years. We leverage the latest technology to build your cloud as a web-based application. Here is a summary of our execution process of your app development, modernisation, management, and other projects:</p>
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
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>We Add Value to Your Business</a>
                </h5>
                <p>We analyse your needs and build proven architectures by choosing the best and the latest technology to add value to your business through the applications we deliver. We build apps considering the future context and provide additional features as you need.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>We Adopt Agile Culture to Release Your Apps</a>
                </h5>
                <p>We execute app development projects at various levels by dividing the overall project into sprints. We adopt agile work culture to ensure the autonomy of developers and alignment with the project goals. Our product managers are well-versed in all stages of building world-class AWS-based applications and other types of apps.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>The Fastest Time to Market</a>
                </h5>
                <p>We make the best use of our technological resources, workforce, and expertise to deliver the best web-based and cloud-based apps at the earliest. We understand the importance of releasing your products in time and do our best to help you launch apps that your customers would love.</p>
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
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Technical Expertise Matters</a>
                </h5>
                <p>SPM Global Technologies have been a globally recognised cloud computing service provider for over a decade. We assign projects to the best app developers and technologists to ensure the smooth execution of your projects. Our technical expertise in various IT domains helps us achieve excellence in our web & cloud-based apps.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75 bg-fff4f8">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">
              Why Choose Us as Your Web & Cloud-based App Partner?
            </h2>
            <p>The following are the strengths your business should consider to select us as your application development partner:</p>
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
                <h3 className="nunito-font">
                  <a>We Adopt the Latest Technology</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We continuously upgrade the skillset of our app developers and encourage them to adopt the latest technology, including Artificial Intelligence, Machine Learning, Big Data, Augmented Reality, Image Analysis, Continuous Delivery, the Internet of Things, and more. We ensure that every web & cloud-based app we deliver has the best features and functionality.</p>
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
                  <a>Best Apps Customised to Your Needs</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We have extensive experience dealing with different types of IT architectures and systems. We provide enterprise application solutions that work effectively with your system. We develop the best cloud as a web-based application to help you improve your reach among your target audience and grow your business.</p>
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
                  <a>We Deliver SaaS-based Web Applications with the Best ROI</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We specialise in developing a web-based application in cloud computing with excellent features. Additionally, we optimise the cost of the solution during operation, maintenance, and other phases of its lifecycle. You can rest assured of the best ‘Return on Investment.’</p>
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
                  <a>We Execute Projects at Your Convenience</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our app development experts are flexible, versatile, and cooperative with project management standards. We can sit together and decide how you want us to develop your web & cloud-based apps. We can work out a project execution model at your convenience.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Apart from developing the best applications, we also offer cloud security managed services and the best cloud web hosting services. Thus, we work with you for:</p>
                <ul>
                  <li>•	Developing</li>
                  <li>•	Managing</li>
                  <li>•	Integrating</li>
                  <li>•	Modernising, and</li>
                  <li>•	The Security of your web & cloud-based applications.</li>
                </ul>
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
              <div className="goal-image style-two">
                <Image src={dummyimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>Difference Between Web-based & Cloud-based Apps </h3>
                <p style={{ textAlign: "justify" }}>Let’s take a look at the differences between web-based and cloud-based apps:</p>
                <p style={{ textAlign: "justify" }}>Web-based applications run through a web browser. Its functionality relies on an internet connection. Similarly, the elements in the webserver installed in the device help the web-based app to function. These web-based apps are generally built by integrating calligraphy and script through popular technologies.</p>
                <p style={{ textAlign: "justify" }}>Cloud-based apps are more advanced and offer extensive access to app development solutions, cloud storage, and a few on-demand computing cycles.</p>
                <p style={{ textAlign: "justify" }}>All cloud-based apps are ‘evolved web-based apps. However, every web-based app is not necessary to operate through the cloud.
                </p>
                <h3>Advantages of Cloud-based Apps:</h3>
                <li>Users don’t need to physically download the software on their devices. The software operates through the cloud memory.</li>
                <li>Cloud-based apps are highly scalable.</li>
                <li>Users get higher storage space and can store data offline also.</li>
                <li>Cloud-based apps are multi-tenancy solutions.</li>
                <li>Users can operate cloud-based apps through their system or service provider’s web servers.</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <span className="sub-title"></span>
            <h2>Technologies We Implement </h2>
            <p>SPM Global Technologies are leading web-based and cloud-based application development company. We design, develop, customise, implement, provide training, and support various globally recognised technology brands.</p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="single-pricing-box red-light-color" style={{ height: '325px' }}>
                <div>
                  <h3>We provide Cloud Strategy Consulting and Implementation:</h3>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    AWS
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Microsoft Azure
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    IBM
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Google Cloud
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-pricing-box red-light-color" style={{ height: '325px' }}>
                <div>
                  <h3>We are Technology Partners with leading tech brands, such as:</h3>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    ServiceNow
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    BMC Suite of Products
                  </li>
                </ul>
              </div>
            </div>
            <div>
            </div>

            <div>
              <h4>Get World-Class Web & Cloud-based Apps</h4>
              <p>Get in touch with our app development and management experts today to explain your business-specific requirements. We would be happy to resolve your queries and let you know what best we can offer to develop excellent web & cloud-based apps for you.</p>
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