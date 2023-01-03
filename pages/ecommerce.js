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
    <PageSeo seo={seo} pageName = "E-Commerce" />
      <PageTitle page="E-Commerce" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="E-Commerce" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                  SPM Global Technologies Your Most Trusted E-commerce Consulting & Development Partner
                </h4>
                <p style={{ textAlign: "justify" }}>
                  E-commerce helps you sell your products and services through the power of the internet. If you are an aspiring entrepreneur or an established business thinking of how to have a successful E-commerce business, here are some considerations where we help you:</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Developing a user-friendly E-commerce website or mobile app
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Secure, fast, and reliable digital payment gateway
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Incredible user interface (UI) and user experience (UX) design
                  </li>
                </ul>
              </div>
              <p style={{ textAlign: "justify" }}>We provide E-commerce website development solutions for beginners emphasizing your revenue growth through positive changes to your business. We help you beat the deadly competition by making your portals and apps resilient, high-performing, and easy to access and navigate.</p>
              <p style={{ textAlign: "justify" }}> We leverage the latest technology in IT to add value to your businesses. Our E-commerce website development expertise accelerates your online business. We deliver E-commerce websites and custom mobile apps to help you attract customers on a global scale.</p>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Developing a user-friendly E-commerce website or mobile app.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Global Presence.png" data={seo} />
                </div>
                <h6 className="nunito-font">
                  <a>Global Presence</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Over 10 Years of Experience in E-commerce.png" data={seo} />
                </div>
                <h6 className="nunito-font">
                  <a>Over 10 Years of Experience in
                    E-commerce
                  </a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Highly Trained and Certified Workforce.png" data={seo} />
                </div>
                <h6 className="nunito-font">
                  <a>Highly Trained and Certified Workforce</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Our Range of E-commerce Services</h2>
            <p>We offer full-cycle web or app development services, consulting services, and design user interfaces and user experiences for you. You can choose from these service options at your convenience:</p>
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="E-commerce Consulting Service.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3 className="nunito-font">
                  1. E-commerce Consulting
                </h3>
                <p style={{ textAlign: "justify" }}>We pour our extensive experience and expertise into guiding you through your E-commerce portal development projects. We help you build economic, scalable, and effectively functioning platforms. Our digital E-commerce consulting services help you provide a splendid user experience and win business consistently across your service territory.</p>
                <li>We serve Asia-Pacific, Europe, North America, and the Middle East regions.</li>
                <li>We have a talented workforce with technical expertise in E-commerce Consulting.</li>
                <li>We have been consulting hundreds of clients from across the globe to build the best E-commerce portals.</li>
                <h4 className="nunito-font">
                  Types of E-commerce Platforms We Help You Build
                </h4>
                <p>Our E-commerce experts guide you throughout your projects for:</p>
                <li>Platform-based E-commerce Solutions</li>
                <li>Headless E-commerce Solutions</li>
                <li>Micro-services-based Modular E-commerce Solutions</li>
                <li>Progressive Web Apps (PWA)</li>
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
                <h3 className="nunito-font">
                  E-Commerce Consulting at Various Stages
                </h3>
                <h5>Consulting for Market-Entry</h5>
                <p style={{ textAlign: "justify" }}>Our E-commerce experts conduct thorough market research, feasibility study, and difficulties in market-entry, and accordingly build your market-entry strategy.</p>
                <h5>Consulting for Technology Adoption</h5>
                <p style={{ textAlign: "justify" }}>We study your business requirements and align your tech stack with them. We suggest the most appropriate technology solutions as per your scalability and estimate the budget for technology adoption.</p>
                <h5>Consulting for Business Growth</h5>
                <p style={{ textAlign: "justify" }}>We help you enhance your digital presence, optimise your portal for various platforms and devices; design excellent user experiences to help you attract your target audience.</p>
                <h5>Consulting for Business Processes</h5>
                <p style={{ textAlign: "justify" }}>We help you personalise your user experiences, and provide expert insights into production, inventory, and distribution management to help you keep customers delighted.</p>

              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="E-Commerce Consulting at Various Stages.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">2. E-commerce Development</h2>
            <span className="sub-title purple-color">We offer online E-commerce store development services to help you have an E-commerce portal your customers will love. The following are the range of services we offer:</span>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-6">
              <div className="goal-text">
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>E-commerce Website Development Solutions</h3>
                    <p>We are the top E-commerce website development company in Bangalore delivering the most user-friendly, scalable, and cost-effective websites to sell your products and services. We build architectures to adapt to the latest technologies. </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Custom E-commerce App Development</h3>
                    <p>We help you attract mobile users through your branded mobile E-commerce apps. Win business by helping your customers shop on the go. We develop E-commerce mobile apps that help you increase your revenue through fantastic product display and secure and faster online payment solutions.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>E-commerce Front-end and Back-end Development</h3>
                    <p>We use the latest programming languages and frameworks to build attractive storefronts for your E-commerce portals. Similarly, we empower the back-end by using the latest languages.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>E-commerce Integration</h3>
                    <p>We help you connect your E-commerce portals with various apps and attain trouble-free data transfer through API-based integrations. We help you enhance your user base through proper accessibility.</p>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="goal-text">
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>E-commerce Audit, Evaluation, and Technical Support</h3>
                    <p>We assess E-commerce portals for security, code issues, UX design, and performance. We monitor your E-commerce websites and apps and ensure excellent performance through timely troubleshooting.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>E-commerce Portals for Various Business Models</h3>
                    <p><strong>•</strong> Web Portals</p>
                    <p><strong>•</strong> Online Marketplaces</p>
                    <p><strong>•</strong> Online Multistore</p>
                    <p><strong>•</strong> Headless Commerce</p>
                    <p><strong>•</strong> Micro-services-based Commerce</p>
                    <p><strong>•</strong> B2B or B2C Ecommerce</p>
                    <p><strong>•</strong> Progressive Web Apps (PWA)</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>E-commerce Migration</h3>
                    <p>We help you transfer your digital workload to more reliable, flexible, and scalable platforms for faster business growth.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Software Solutions for Business Operations</h2>
            <p>We help you make your E-commerce operations agile and robust through our custom software solutions:</p>
            <div className="goal-text">
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Product Information Management</h3>
                  <p>We design and implement a product information management system to help you automate product promotion and other activities like importing and enriching product data, creating product catalogues and integrating with the distribution system.</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Inventory Management</h3>
                  <p>We develop inventory management software to enable IoT-powered product tracking, effective returns management, inventory planning, purchase order management, and more.</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Order Management</h3>
                  <p>We provide a centralised order aggregation system and integrate it with your management and other business apps. Our solution helps you route, process, and fulfil orders effectively.</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Logistics Management</h3>
                  <p>We design software solutions for AI-powered order routing, tracking, and product monitoring.</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Business Intelligence</h3>
                  <p>We deliver well-designed retail BI solutions for gathering data from various sources, multidimensional data analysis, effective reporting and forecasting.</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Digital Marketing Automation</h3>
                  <p>We offer software to help you automate your digital marketing activities. You can execute response-based marketing campaigns using email marketing and other methods. We help you effectively communicate with your customers through live chat or chatbot, and much more.</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>The Latest Technologies We Enable to Make Winning E-commerce Portals</h3>
                  <p>• Voice-assisted Shopping</p>
                  <p>• 3D Modeling</p>
                  <p>• Virtual Try-on</p>
                  <p>• Virtual Try-outs</p>
                  <p>• Live Video Consultations</p>
                  <p>• Interactive User Manuals</p>
                  <p>• IoT-powered E-commerce Business Processes</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h3 className="nunito-font">3. UI & UX Design for E-commerce Apps and Websites</h3>
            <p>We help you create excellent user experiences and easy-to-understand interfaces through APIs. Our UI & UX design empowers your E-commerce websites and apps to attract more customers and enhance your conversion rates.</p>
            <h4>E-commerce Portals for Various Product Ranges</h4>
            <span className="sub-title purple-color">We design, develop, and implement E-commerce portals for a wide range of products, such as:</span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Food, Beverages, and Grocery.png" data={seo} />
                </div>
                <h6 className="nunito-font">
                  <a>Food, Beverages, and Grocery</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Food delivery Services.jpg" data={seo} />

                </div>
                <h6 className="nunito-font">
                  <a>Food delivery Services</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Fashion.jpg" data={seo} />

                </div>
                <h6 className="nunito-font">
                  <a>Fashion</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Beauty Products & Personal Care.png" data={seo} />


                </div>
                <h6 className="nunito-font">
                  <a>Beauty Products & Personal Care</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Furniture & Durables.jpg" data={seo} />

                </div>
                <h6 className="nunito-font">
                  <a>Furniture & Durables</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Auto Spares & Accessories.jpg" data={seo} />

                </div>
                <h6 className="nunito-font">
                  <a>Auto Spares & Accessories</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Jewellery & Other Accessories.jpg" data={seo} />

                </div>
                <h6 className="nunito-font">
                  <a>Jewellery & Other Accessories</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '275px' }}>
                <div className="icon">
                <MediaImage name="Healthcare Products & Pharmacy.jpg" data={seo} />

                </div>
                <h6 className="nunito-font">
                  <a>Healthcare Products & Pharmacy</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75 bg-fff4f8">
        <div className="container">
          <h3>Get in Touch with Our E-commerce Experts Today!</h3>
          <p>We are a full-service E-commerce team happy to resolve your queries and help you have excellent E-commerce platforms. Specify your E-commerce-related requirements and we will get back to you with the best possible solutions we offer:</p>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=ecommerce&populate=*`
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