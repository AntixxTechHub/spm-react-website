import React from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";
import baseApiUrl from "@/utils/baseApiUrl";



import bmcheliximplementation from "@/public/images/bmcheliximplementation.jpg";
import analytics from "@/public/images/icon/analytics.svg";
import dummyimg from "@/public/images/dummy-img.png";



const Services = ({ seo }) => {
  
  return (
    <>
      <PageSeo seo={seo} pageName = "Analytics" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Analytics" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font"></h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Qlik View.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <Link href="/qlikview">
                    <a>QlikView</a>
                  </Link>
                </h5>
                <p>
                  QlikView is a business intelligence tool for data integration, conversational analytics, and converting raw data into a knowledge base. QlikView contributes to features for ad hoc queries and.</p>
                <Link href="/qlikview">
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
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Tabuleau 1.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <Link href="/tableau">
                    <a>Tableau</a>
                  </Link>
                </h5>
                <p>
                  Tableau is a visual analytics engine that makes it simpler to create interactive visual analytics in the form of dashboards. These dashboards make it easier for non-technical analysts and end-users to convert data into...</p>
                <Link href="/tableau">
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
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Powerbi.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <Link href="/power-bi">
                    <a>PowerBi</a>
                  </Link>
                </h5>
                <p>
                  Power BI is a group of software services, apps, and connectors that operate together to turn independent sources of data into coherent, visually immersive, and interactive insights. The data may be an excel spreadsheet...</p>
                <Link href="/power-bi">
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
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Qlik Sense.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <Link href="/qliksense">
                    <a>Qlik Sense</a>
                  </Link>
                </h5>
                <p>Qlik Sense is a comprehensive data analytics platform that introduces a benchmark for the new generation of analytics. Qlik Sense Desktop is a Windows application that allows users to create visualizations...</p>
                <Link href="/qliksense">
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
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="SAP Analytics.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <Link href="/sap-analytics">
                    <a>SAP Analytics</a>
                  </Link>
                </h5>
                <p>Cloud empowers analytics support services to create dynamic visual stories based on the key business areas with trusted data that is managed by IT. Hence, make better decisions by interacting...</p>
                <Link href="/sap-analytics">
                  <a className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
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
                  Cloud empowers analytics support services to create dynamic visual stories based on the key business areas with trusted data that is managed by IT. Hence, make better decisions by interacting...
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>A real business value can only be achieved through realizing valuable business outcomes. Outcomes are underpinned by sound data, appropriate information and executing the right decisions. Analytics provides an integrated platform to equate, connect and reconstruct data sources with the visual analytics you require to reduce guesswork, monitor key metrics and gain valuable insight. Analytics managed services can also stimulate digital transformation and support gain quick and accurate insights across the organization.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>Over the past few years, IT service management (ITSM) has grown increasingly important to an organization’s IT strategy, and companies are investigating new ways to improve IT service delivery and efficiency via better ITSM processes.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>However, due to overwhelmingly large amounts of data, users find it challenging to manually access, track and analyze critical help desk information quickly. Utilizing advanced IT analytics, managers can recognize blind spots and hidden gaps in their ITSM process as well as make certain decisions by monitoring key metrics.</p>
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
                <h4 className="nunito-font">
                  Objectives of IT Analytics solution
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>Insightful key performance indicators (KPIs), role-based dashboards, and flexible analysis are required to facilitate optimum management of IT services. Though every ITSM tool extends its evaluation options, it does not provide you with a full overview or complete transparency of cross-system processes and correlating data from different source systems. An effective IT analytic solution is required to evaluate the huge amount of IT data.</p>
                <span className="sub-title">Reliable Decisions:</span>
                <p className="w-100" style={{ textAlign: "justify" }}>The solution implements predefined KPIs to aggregate the organization’s IT data. These KPI’s are based on best practices from ITIL and ISO hence producing it more secure and process compliant</p>
                <span className="sub-title">Central View of IT Services</span>
                <p className="w-100" style={{ textAlign: "justify" }}>IT analytic solution encourages an organization to retain an eye on performance-critical KPIs for IT service by implementing central of all its relevant data on IT services, such as service availability, number of incidents, service costs, data on customer satisfaction, SLA violations, etc.</p>
                <span className="sub-title">Acts as Business Intelligence (BI) for IT</span>
                <p className="w-100" style={{ textAlign: "justify" }}>Because of the excessive cost and lack of BI experts rolling out BI and data warehouse usually fails. An IT analytic solution extracts, modify and loads the data and ETL functionality of the BI solution.</p>
                <span className="sub-title">Role-based dashboards</span>
                <p className="w-100" style={{ textAlign: "justify" }}>The solution provides the information in an aggregated form by the use of dashboards and reports. This empowers better decision-making and so more efficient controlling of IT operations. With insightful evaluations, it grasps you acquainted with the current status and enable you to detect emerging trends and weak points.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>With the analytic solution, organizations can observe and analyze the performance of the KPI’s, distinguish potential improvements and determine and control a set of measures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2>Benefits of Analytics</h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>1. Minimize the impact of business downtime</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Forecast service outages by watching metrics like frequency of downtime and mean time to repair (MTTR). Utilizing these metrics, formulate intuitive reports to identify crucial failure points and to understand the impact of an infrastructure change.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>2. Optimize resource management</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      Using real-time dashboards, monitor periods of peak business activity and maintain technician workload by measuring critical metrics, including the number of incoming requests, ticket turnaround time and technician performance.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>3. Improve service quality</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      Although ticket resolution rate and technician performance based on closure rate are good parameters to judge the overall performance of your service desk, they aren't always enough.</p>
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
                    <h3>4. Maximize ROI on software purchases</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      A software asset management report can track software licenses, predict service request trends and measure software utilization rates to calculate unnecessary software expenditures.</p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>5. Ensure high levels of end-user satisfaction</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      Maintaining SLA levels is one of the most daunting tasks for service desk teams. Any SLA breach leads to frustrated and outraged customers, which generates a loss of credibility and revenue for the organization.</p>
                  </li>
                  <p className="w-100" style={{ textAlign: "justify" }}>
                    The importance of analytics is quite clear when it comes to enhancing IT service delivery. Empowering users is the first step toward accomplishing any form of process efficiency.</p>
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
                <h3 className="nunito-font">
                  SPM Global Technologies is a trusted service provider for Analytics.
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>• Reach the analytics needs of all types of people and decisions with an end-to-end analytics solution.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>• Search data across the organization and deliver insights at the point of decision with habitual self-service analytics with business intelligence features.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>• Bond and build financial and operational plans seamlessly in one solution to encourage better decisions with integrated plans.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>• Go the last mile of data-driven decision-making with machine-generated analytics and insights with our augmented analytics capabilities.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>• Maximize your value sources with faster-time-to-value offers.</p>
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
                <h4 className="nunito-font">
                  Why do you need Analytics?
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>In a complex, heterogeneous environment of tools, infrastructure and organizations, there is no single window to access and analyze IT Service Management data (ITSM). This lack of visibility is a barrier to sufficient governance, driving inefficiencies and increasing the cost of delivering services.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>Platforms like Tableau or Power BI allow companies to bridge the gap between information silos and to analyze all IT service-related data in one single place. This integrated approach empowers you to create detailed domain-specific dashboards for the various roles including subject matter experts, service managers and executives to provide insights into the performance, costs, health and availability of IT services.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>These dashboards need to be easily customizable and be able to provide drill-down and drill-across functionality. This will allow businesses to understand how well IT services are meeting business objectives and agreed service levels.</p>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=analytics&populate=*`
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