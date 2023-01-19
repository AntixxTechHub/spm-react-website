import React from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";


import sap from "@/public/images/icon/sap.svg";
import dummyimg from "@/public/images/dummy-img.png";

const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "SAP" />
      <PageTitle page="SAP" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="SAP" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '430px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP HANA</a>
                </h5>
                <p>
                  High-Performance Analytic Appliance uses in-memory computing, a breakthrough technology that enables analysis of very large, non-aggregated data at unprecedented speed in local memory, enabling complex analyses, plans and simulations in real-time data.
                </p>
                <Link href="/sap-hana">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '430px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP CRM</a>
                </h5>
                <p>
                  The SAP Customer Relationship Management application, not only helps you address your short-term imperatives, but can also help your company achieve differentiated capabilities to compete effectively over the long term.
                </p>
                <Link href="/sap-crm">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '430px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP ERP</a>
                </h5>
                <p>
                  The SAP ERP application supports the essential functions of your business processes and operations efficiently and is tailored to specific needs of your industry.
                </p>
                <Link href="/sap-erp">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
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
              <div className="single-services-item style-two" style={{ height: '430px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP HR</a>
                </h5>
                <p>SAP HR, also known as “Human Capital Management” (HCM) is an important module in ERP SAP systems that supports all the processes of human resource management in the enterprise. SAP HR records the data from hiring an employee to its final termination in the organization.
                </p>
                <Link href="/sap-hr">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '430px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP Business Objects</a>
                </h5>
                <p>SAP Business Objects Business Intelligence is a centralized suite for data reporting, visualization, and sharing. As the on-premise BI layer for SAP's Business Technology Platform, it transforms data into useful insights, available anytime, anywhere.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '430px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP PLM</a>
                </h5>
                <p>SThe SAP Product Lifecycle Management application provides you with a 360-degree-support for all product-related processes, from the first product idea, through manufacturing to product service.</p>
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="goal-text">
                    <ul className="overview-list">
                      <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '175px' }}>
                        <i className="flaticon-draw-check-mark"></i>
                        <p className="w-100" style={{ textAlign: "justify" }}>SAP or Systems, Applications and Products, is a universally accepted enterprise resource planning (ERP) software. It builds a centralized system for businesses that enables every department to access and share common data to create a better work environment for every employee in the company.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="goal-text">

                    <ul className="overview-list">
                      <li data-aos="fade-up" data-aos-duration="1200" style={{ height: '175px' }}>
                        <i className="flaticon-draw-check-mark"></i>
                        <p className="w-100" style={{ textAlign: "justify" }}>SAP is the most-used ERP software on the market and contains hundreds of fully integrated modules that cover nearly every aspect of business management.</p>
                      </li>
                    </ul>
                  </div>
                </div>
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
                  SPM Global Technologies is a trusted SAP Partner.
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>In this day and age, digital transformation is helping various organizations to stay relevant in their industry and drive business growth. SPM Global Technologies is helping such organizations to realize their digital transformation with SAP.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>With its deep association with SAP, we have delivered multiple engagements in the area of implementation, process improvements and delivering new business value.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>As a reliable SAP service provider for over a decade, SPM Global Technologies offers a complete range of tailored, futuristic SAP services that help organizations simplify, transform and grow. Our capabilities and services are focused on business outcomes for our customers.

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
                <p className="w-100" style={{ textAlign: "justify" }}>SPM packaged and uniquely tailored enterprise core services are specially designed to meet the industry-specific requirement for digital transformation with quick value realization. These packages combine licenses, infrastructure and implementation services and are offered as a single-window service.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>We are associated with SAP in a multidimensional way which makes us one of the most trusted partners for organizations to take care of them at every stage of their SAP lifecycle.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>Our SAP consultants analyze, design, and configure new computer software and systems by their employers’ or clients’ specifications, as well as write programs such as forms, specifications, and interfaces.</p>
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
                <p className="w-100" style={{ textAlign: "justify" }}>As an SAP managed services partner, we would help proactively monitor the health of the SAP applications to ensure integrity and availability. We can help develop a strategy to remediate and optimize the SAP systems based on the needs and budget of a company.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Our SAP training will support your growth strategies, create a competitive advantage, and transform your career goals. In addition, take advantage of personalized hands-on workshops and in-depth technical training from our SAP experts who develop cutting-edge SAP technologies.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>If you want to equip yourself with SAP skills and add an extra achievement to your resume, consider SAP training and certification. SAP offers training among all of its modules and provides more than a hundred SAP certifications based on what skills you want to have full competency in.
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
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '375px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP Third-party vendors</a>
                </h5>
                <p>
                  Third-party processing is carried out in the components SD (Sales and Distribution) and MM (Materials Management). By creating third-party vendors in a sales order, purchase requisition, or purchase order, you can request that the vendor sends the goods directly to your customer.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '375px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP ABAP</a>
                </h5>
                <p>
                  SAP ABAP is used by developers to develop the SAP R3 Platform. It is a simple language that is easy to learn when it comes to programming. It allows you to choose from procedural and object-oriented programming.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '375px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP Basis</a>
                </h5>
                <p>
                  SAP Basis is the technical foundation that enables SAP applications to function. It consists of middleware programs and tools that support the interoperability and portability of SAP applications across systems and databases.
                </p>
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
              <div className="single-services-item style-two" style={{ height: '375px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP Convergent Charging</a>
                </h5>
                <p>SAP Convergent Charging provides a rating and charging solution for high-volume processing in service industries. It delivers pricing design capabilities, high-performance rating and convergent balance management.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '375px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP SCM</a>
                </h5>
                <p>SAP Supply Chain Management enables collaboration, planning, execution, and coordination of the entire supply network, empowering you to adapt your supply chain processes to an ever-changing competitive environment.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '375px' }}>
                <div className="icon">
                  <Image src={sap} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>SAP SRM</a>
                </h5>
                <p>With SAP SRM you can examine and forecast purchasing behavior, shorten procurement cycles, and work with your partners in real-time.</p>
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
                <h4 className="nunito-font">
                  SAP Environment, Health, and Safety Management
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>It supports environmental, occupational and product safety processes, regulatory compliance, and corporate responsibility.
                </p>
                <h4 className="nunito-font">
                  Governance, Risk and Compliance
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>With governance, risk, and compliance (GRC), businesses can strategically balance risk and opportunity.
                </p>
                <h4 className="nunito-font">
                  SAP Transportation Management
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>It supports you in all activities connected with the physical transportation of goods from one location to another.
                </p>
                <h4 className="nunito-font">
                  Extended Warehouse Management
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>SAP Extended Warehouse Management offers you the option of mapping your entire warehouse complex in detail in the system, down to the storage bin level.
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
              <div className="goal-content">
                <h4 className="nunito-font">
                  Sales and operations planning
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>SAP Sales and Operations Planning, enables you to optimally and profitably meet long-term future demand. This process typically repeats every month and involves many participants including Sales, Marketing, Finance, Demand Planning, and Supply Chain Planning.
                </p>
                <h4 className="nunito-font">
                  SAP Supplier Life Cycle Management
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>SAP Supplier Lifecycle Management is a holistic approach to managing supplier relationships. It deals with the supply base as a whole to constantly determine the right mix of suppliers.
                </p>
                <h4 className="nunito-font">
                  SAP FICO
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>SAP FICO is the Finance and Cost controlling module in SAP ERP, where FI stands for Financial Accounting, and CO stands for Controlling. SAP FICO module is very robust and covers almost all business processes encountered in various industries
                </p>
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

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=sap&populate=*`
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