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
    <PageSeo seo={seo} pageName = "Power BI" />
      <PageTitle page="Power BI" />
      <Navbar />
      <PageTopTitle
        subTitle="Analytics"
        title="Power BI" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                  Microsoft Power BI
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>MS Power BI is a powerful business intelligence platform that provides non-technical business users tools for aggregating, sharing, analyzing, and visualizing data. It offers a fairly intuitive user interface for users who are familiar with the use of Excel. Also, Power BI is deeply integrated with other Microsoft products. It requires little upfront training. All these reasons, make it an extremely versatile self-service tool.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Power BI is available in different versions like a free version, a professional version called Power BI Plus, Power BI Desktop meant for Windows 10, native mobile apps for Android, iOS, and Windows devices, and Power BI Report Server for businesses maintaining their data and reports on-premises.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Microsoft Power BI empowers your team members to discover insights that remain hidden in your data. It enables everyone at every level of your organization to make confident decisions by using up-to-the-minute analytics.
                  As this single analytics platform scales from individuals to the organization as a whole, it helps to reduce added cost, complexity, and security risks associated with multiple solutions.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Microsoft Power BI.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Features of MS Power BI</h2>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '650px' }}>
                <div className="icon">
                <MediaImage name="Artificial Intelligence.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Artificial Intelligence
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>It allows users to access image recognition and text analytics. Also, they are able to create machine learning models by utilizing automated machine learning capabilities. Also, it enables users to integrate Microsoft Power BI with Azure Machine Learning.</p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '650px' }}>
                <div className="icon">
                <MediaImage name="Hybrid Deployment support.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Hybrid Deployment support
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Built-in connectors in Power BI allow its tools to connect with a number of different data sources from Salesforce, Microsoft and other vendors.</p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '650px' }}>
                <div className="icon">
                <MediaImage name="Fast Insights.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Fast Insights
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>This feature lets users create subsets of data and apply analytics automatically to that information.</p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '650px' }}>
                <div className="icon">
                <MediaImage name="Analytics Data Protection.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Analytics Data Protection
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Power BI imparts industry-leading data security capabilities like end-to-end encryption, sensitivity labeling and real-time access monitoring which enables business organizations to keep their data secure.
                    </p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '650px' }}>
                <div className="icon">
                <MediaImage name="Cortana Integration.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                  Cortana Integration
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Particularly popular on mobile devices, this feature enables users to verbally query data by using natural language and access results with the help of Cortana, which happens to be Microsoft's digital assistant.
                    </p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '650px' }}>
                <div className="icon">
                <MediaImage name="Customization.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Customization
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>It imparts developers the capability to change the appearance of default visualization and reporting tools in Power BI. Also, they are able to import new tools into it.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '650px' }}>
                <div className="icon">
                <MediaImage name="APIs for Integration.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  APIs for Integration
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>It provides developers the sample code and application performance interfaces to embed the Power BI dashboard in other software products.</p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '650px' }}>
                <div className="icon">
                <MediaImage name="Self-service Data Prep.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Self-service Data Prep
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>With the help of Power Query, business analysts are able to ingest, integrate, transform and enrich big data into the Power BI web service. Ingested data can be shared across multiple Power BI models, dashboards and reports.
                    </p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '650px' }}>
                <div className="icon">
                <MediaImage name="Modeling View.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Modeling View
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>This feature grants users the capability to divide complex data models by subject area into different diagrams. Also, they can multi-select objects, set common properties, view and modify properties in the properties pane, and set display folders. All this enables users to achieve simpler consumption of complex data models.
                    </p>
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
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
              <MediaImage name="Features of Power BI.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h2 className="nunito-font">
                  Features of Power BI
                </h2>
                <p className="w-100" style={{ textAlign: "justify" }}>In order to secure gains from the various features and capabilities of Microsoft Power BI, you need to get this analytics solution installed in devices and systems at your premises and in the cloud in a proper, smooth, secure, and efficient manner. As its installation is a complex and technically demanding affair that requires extensive IT know-how and resources, this requires you to seek the expertise of SPM Global, one of the established and most reputable Power BI Service Providers.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>To make your Power BI installation a success, IT experts of SPM Global, one of the leading Power BI Managed Services Providers, will provide you professional assistance and support along every step of the installation process, right from providing Power BI consultant advice and sharing with you knowledge on various aspects of Power BI, including what is Power BI, how to download Power BI and how to do Power BI login.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>They will also inform you about Microsoft Power BI Desktop, Power BI online, Power BI premium, and other versions as well as guide you on how to perform power queries in excel, key constituents of Power BI training, capabilities of Power BI Dashboard, and Power BI Reporting, the way to use power BI tutorial for addressing routine problems, how to use Power BI for Mac devices, Dax Power BI language, steps for utilizing Power BI Pro for performing self-service analytics and how to export Power BI to Excel.
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
                <p className="w-100" style={{ textAlign: "justify" }}>They will also inform you about Microsoft Power BI Desktop, Power BI online, Power BI premium, and other versions as well as guide you on how to perform power queries in excel, key constituents of Power BI training, capabilities of Power BI Dashboard, and Power BI Reporting, the way to use power BI tutorial for addressing routine problems, how to use Power BI for Mac devices, Dax Power BI language, steps for utilizing Power BI Pro for performing self-service analytics and how to export Power BI to Excel.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>Also, our specialists will assist you in the strategy and planning of Power BI deployment at your business, procuring required resources, performing configuration, installation, and integrating it with your systems and devices. Apart from this, they will be providing methodical Power BI Trainings to your team members and employees in the proper and safe use of the Power BI analytics solution. They will monitor the solution round the clock for any glitches and security threats and resolve them timely to prevent/minimize their impact on your operations and services. Also, they will take care of its maintenance, security and upgradation aspects.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>Top of the class, effective and reliable Power BI support services rendered by SPM Global, ensure that your Power BI analytics solution continues to run in a smooth and unhindered way. So you are able to utilize its power and capabilities to make smart and timely data-driven strategic decisions that give you an edge over your competitors and help you achieve your unique business goals.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Power BI Premium.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area with-top-border ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
              <MediaImage name="Power BI Installation.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <p className="w-100" style={{ textAlign: "justify" }}>When you choose SPM Global, the most reputable Power BI third-party vendor for your Power BI installation, integration, and implementation needs, you can rest assured that your installation will be taken care of well and guided to its successful culmination. </p>

                <p className="w-100" style={{ textAlign: "justify" }}>By allowing IT professionals of SPM Global, one of the most accomplished Power BI vendors, to perform your Power BI installation, you are going to register various gains in terms of saved costs, time, and resources. Also, your own IT staff becomes free to focus on more important IT tasks like product development, etc.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>When you let SPM Global take charge of your Power BI installation, you need not worry about anything, but just can solely focus on what matters the most, growing your business.
                </p>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=power-bi&populate=*`
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