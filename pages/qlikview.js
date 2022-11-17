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
      <PageTitle page="QlikView" />
      <Navbar />
      <PageTopTitle
        subTitle="Analytics"
        title="QlikView" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p className="w-100" style={{ textAlign: "justify" }}>QlikView is a prominent Business Intelligence and Analytics Platform, that allows users to visually analyze the relationships between data. It performs in-memory data processing and stores the data in the report created by it. QlikView is capable of reading data from numerous sources, including relational databases and files. It enables businesses to achieve deeper insights by performing advanced analytics on their data. QlikView also integrates data by combining data obtained from different sources into one QlikView analysis document.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Working with reputed QlikView service providers will be a wise strategic decision to make the most effective use of this analytics tool for your business. An experienced QlikView consultant works closely with your IT team to understand your requirements and deploy the solution for your business. Along with that, QlikView Trainings upgrade the skills of your staff to use the solution effectively.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>As a preferred QlikView third-party vendor, we assign the tasks of solution deployment, QlikView Trainings, QlikView support services
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
                <p className="w-100" style={{ textAlign: "justify" }}>This analytics tool helps businesses in planning for the future and assists them in modernizing their business and operations. QlikView integrates the development of the back-end underlying analytics solutions with the front-end user interface. Recognized QlikView service providers deploy the tool for you and provide QlikView Support Services to resolve technical issues arising at any stage.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>As a result, developers have one place to create. So, they need not use different Business Intelligence tools for dashboards, analysis, and reports. QlikView consultants like us can explain these features to your team during QlikView Trainings. Powerful associative search and data visualization capabilities in the resulting QlikView application lets businesses view their underlying data.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}> As globally recognized QlikView vendors, we offer QlikView Support Services for resolving technical issues with the least downtime. Our QlikView Trainings enable your IT staff to understand the tool better and use its tremendous features. Choosing SPM Global as your QlikView third-party vendor will bring you the one-stop solution!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Features of QlikView</h2>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '700px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Freedom Associative Exploration
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>QlikView enables businesses to get unexpected business insights by understanding how data is associated and which specific data is not related. It allows users to conduct both indirect and direct searches across all data anywhere in the application - within a single field or globally. Being QlikView service providers, we guide your IT team to use this feature through our QlikView Trainings.</p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '700px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Makes Use of In-Memory Technology
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>QlikView’s next-generation in-memory architecture powers its associative search. The architecture virtually eliminates the problems and complexity encountered in traditional, slow, disk, and query-based Business Intelligence tools that provide little more than static and pre-packaged data. In QlikView, the whole data gets loaded in memory and with just a few clicks, it becomes available for instant associative search and real-time analysis. QlikView Trainings from QlikView Consultants like SPM Global enable your key personnel in the IT team to use these Business Intelligence Tools effectively.
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
              <div className="single-services-item style-two" style={{ height: '700px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Fast Deployment and IT Efficient
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>While in traditional BI tools, users and developers spend months in documenting and coding requirements into dashboards, analysis and reports by using different products for each output, whereas in QlikView, pulling data takes minutes as data need not be staged or stored in intermediary formats like warehouses or cubes. QlikView is also capable of sourcing data from data warehouses and cubes.</p>
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
                <Image src={dummyimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <p className="w-100" style={{ textAlign: "justify" }}>We work with many clients as QlikView service providers to deploy the solution for their business. Our extensive experience as QlikView consultant has empowered many businesses so far. Our expertise as QlikView third-party vendor and professionalism while providing QlikView Support Services make us stand out of the crowd.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>A single QlikView application replaces hundreds of reports and the cubes used for them. This, thus reduces time delays and lessens the need for IT support.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>You can rely on the experts of SPM Technologies, one of the leading QlikView Service Providers and provider of top-notch QlikView Managed Services, for taking care of various aspects of your custom QlikView installation and implementation, including providing valuable QlikView consultant advice for planning and strategy making for the installation, providing reliable QlikView Support Services, and enlightening you on various aspects of QlikView software including Qlik Company, Qlik Business Intelligence, QlikView Dashboard, Qlik Reporting, Qlik Data Integration, QlikView Community, QlikView Tutorial, Qlik Products as well as Qlik competitors.
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
                <p className="w-100" style={{ textAlign: "justify" }}>As QlikView service providers, we deploy the QlikView analytic solution at your on-premises and cloud in a fast and efficient manner and effectively integrate it with your devices and systems. Also, you can trust them for imparting useful QlikView trainings to your staff for using the deployed solution in a safe, secure, and proper manner. Umpteenth businesses around the world trust SPM Global, an established QlikView Third Party Vendor, for their QlikView installation and implementation needs, and you too can trust us for yours. We will help you achieve a smooth, glitch-free, and cost-effective QlikView installation, being globally-acclaimed QlikView third-party vendors.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We have acquired a coveted place among QlikView Vendors, thanks to our unflinching dedication towards fulfilling QlikView deployment and integration needs and expectations of our clients and keeping their interest above all others. That makes us the most preferred QlikView vendors, providing a complete package, including QlikView support services, QlikView trainings, and much more.
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

      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export default Services;