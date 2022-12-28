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
    <PageSeo seo={seo} pageName = "ServiceNow" />
      <PageTitle page="ServiceNow" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="ServiceNow" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3 className="nunito-font">
                  We Are the Leading Implementation Partner for ServiceNow Products
                </h3>
                <p style={{ textAlign: "justify" }}>Futuristic Products from ServiceNow digitalize IT workflows including, Employee Workflow, Customer Workflows, Creator Workflows, and promote faster customizable app development. This consequently enables businesses to work better and smarter.</p>
                <p style={{ textAlign: "justify" }}>Its Now Platform, a single cloud-based platform, lays a solid foundation for all digital workflows by connecting people, functions and systems across an organization, thus resulting in great experiences for everyone involved.</p>
                <p style={{ textAlign: "justify" }}>ServiceNow’s connected digital workflows enable businesses to automate work across departments for scaling their operations and enhancing their efficiency. They enable businesses to better anticipate customer needs and, empower customers with personalized self-service, leading to seamless and modern customer experiences. So, businesses can retain customers and drive customer loyalty that goes beyond the traditional CRM and field service.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Implementation Partner for ServiceNow Products.jpg" data={seo} />
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
              <MediaImage name="ServiceNow Creater workflow.jpg" data={seo} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <p style={{ textAlign: "justify" }}>Similarly, ServiceNow’s Creator Workflows provide citizen developers with low-code tools and pre-built templates, which allow them to build and deliver quickly cross-enterprise, connected, modular, reusable and scalable digital workflow apps that provide users powerful, intuitive and lovable experiences.</p>
                <p style={{ textAlign: "justify" }}>A comprehensive suite of products from ServiceNow, which happen to be more than 80, take a good care of varied aspects of a business, including IT Service Management, IT Operations Management, IT Business Management, IT Asset Management, DevOps, Security Operations, Governance Risk and Compliance, Telecommunications Network Performance Management.
                </p>
                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a className="btn-style-one dark-green-color" style={{ textAlign: "justify" }}>
                    ServiceNow also has to its credit some latest and ground-breaking innovations like machine learning intelligent chatbots, performance analytics, AI-power search, process optimization and UI builder which transform your business like never before.
                  </a>
                </div>
                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a className="btn-style-one dark-green-color" style={{ textAlign: "justify" }}>
                    ServiceNow enables business organizations to unleash the true power of IT. It provides cloud-based platform for digitizing their IT workflows, which in turn helps them gamer benefits like modernizing their operations, and optimizing their costs.</a>
                </div>
                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a className="btn-style-one dark-green-color" style={{ textAlign: "justify" }}>
                    But to gain real value and associated benefits from use of ServiceNow your business needs to get it implemented from a reliable and technologically proficient partner like SPM global technologies, a frontrunner ITSM and software development service and solution provider.
                  </a>
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
                  SPM Global Technologies | Well-trained ServiceNow Experts
                </h3>
                <p style={{ textAlign: "justify" }}>Installing ServiceNow products and integrating them with your existing devices, systems and processes is a complex, technologically intensive affair, which can be done only by trained IT experts of SPM Global Technologies
                </p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    ServiceNow Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    ServiceNow service providers
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    ServiceNow support services
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="ServiceNow Consultant.jpg" data={seo} />
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
              <MediaImage name="ServiceNow Managed Services.jpg" data={seo} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  ServiceNow Managed Services
                </h3>
                <p style={{ textAlign: "justify" }}>When you allow our specialists of this major ServiceNow third-party vendor to take charge of your ServiceNow products implementation, you can rest assured that they will do it in a perfect and hassle-free manner.</p>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies, one of the frontrunners ServiceNow vendors, has the know-how, expertise and resources to manage each and every step involved in your ServiceNow products implementation, including providing anticipation, ServiceNow consultant advice, planning, configuration, training your employees in using the products, maintaining security, compliance, monitoring, risk analysis and upgrades. So whether you are looking for integrating, installing, testing, monitoring and ServiceNow support services for your ServiceNow products, all your needs are well covered with SPM Global Technologies, a prominent ServiceNow third party vendor, for implementation of ServiceNow’s suite of solutions.
                </p>
                <p style={{ textAlign: "justify" }}>Many businesses around the world, including Fortune 500 corporations, government agencies and small sized organizations rely on SPM Global Technologies, one of the premier ServiceNow Service Providers, for their ServiceNow products implementation needs and their trust on us is not without a reason. We are one of the major ServiceNow vendors for a wide range of ServiceNow products installation, courtesy our unmatched proficiency and expertise in the ServiceNow Managed Services realm and strict implementation of high standards. In view of this, you can confidently put your faith on this most sought after ServiceNow solution provider, for your custom ServiceNow Implementation project.
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
                <p style={{ textAlign: "justify" }}>ServiceNow is the preferred product when companies realize the burden of legacy software platforms, leading to high amounts of wasted time and effort. We are certified ServiceNow Consultants, extending our expert ServiceNow Managed Services as ServiceNow Service Providers. Our team of ServiceNow experts starts with consulting clients on the best route toward implementing an efficient service management platform. As a reputed ServiceNow Third-Party Vendor, our bouquet of services includes</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Enterprise Service Management
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Security Operations
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    IT Operation Management
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    IT Asset Management
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Project Portfolio Management
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Human Resources
                  </li>
                </ul>
                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a className="btn-style-one dark-green-color" style={{ textAlign: "justify" }}>
                    Whether you need an as-is implementation or specific value-adds to the platform, as ServiceNow Vendors, our team is ready to handle your unique requirements for application integrations. With an extensive experience and proven track record, our experts have worked on several projects involving the migration of service management tools to ServiceNow, delivering client delight through reduced maintenance costs and improved efficiency of resources and assets. We also offer ServiceNow Training to our clients’ select workforce. That way, we empower our clients to make the most of this incredible solution. Our ServiceNow Support Services ensure faster turnaround and rectification of your technical issues at the earliest. </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
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
      <FooterOne />
    </>
  );
};

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=servicenow&populate=*`
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