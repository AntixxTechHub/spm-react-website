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
      <PageTitle page="Qlik Sense" />
      <Navbar />
      <PageTopTitle
        subTitle="Analytics"
        title="Qlik Sense" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p className="w-100" style={{ textAlign: "justify" }}>Qlik Sense is a next-generation and complete Business Intelligence and Visual Analytics platform that supports a comprehensive range of users and analytic use cases across the life-cycle from data to insight. It utilizes a patented associative technology that enables people to combine data from many different sources with ease, explore it freely, carry out searching and selections dynamically and visualize the data, without the limitations faced in query-based tools.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>An experienced Qlik Sense Third-Party Vendor guides your IT team, analyses the scope of this solution, and deploys this for your enterprise. Opting for Qlik Sense Support Services from a Qlik Sense Service Provider will allow you to obtain expert technical assistance at any stage. We offer Qlik Sense Trainings to your IT team for their skill upgrade.
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
                <p className="w-100" style={{ textAlign: "justify" }}>Equipped with sophisticated Artificial Intelligence, self-service analytics, conversational analytics, custom and embedded analytics, mobile analytics, high-performance cloud platform, interactive dashboards, and reporting. We provide prompt Qlik Sense Support Services to ensure the solution keeps working for you with minimal downtime. Qlik Sense empowers organizations to make better decisions on a daily basis. Its capabilities help to create a truly data-driven enterprise. Qlik Sense can be deployed in the cloud as well as on-premises.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We closely work with our clients from across the world as Qlik Sense Consultants, to customize and deploy this incredible solution per their operation-specific requirements. Also, our Qlik Sense Trainings empower you for better usage of this analytics platform in your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Key Features of Qlik Sense</h2>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}
              >
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Associative Engine
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Qlik Sense has got a unique Associate Engine that allows users to explore freely data in any direction. They are able to recalculate analytics and highlight data relationships after each click. It reveals insights to users that they are unable to view through SQL and query-based BI tools. Our Qlik Sense Trainings will make your staff familiar with these operations.</p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}
              >
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Smart Visualization and Analytics
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Qlik Sense have got a unique Associate Engine that allows users to explore freely data in any direction. They are able to recalculate analytics and highlight data relationships after each click. It reveals insights to users which they are unable to view through SQL and query-based BI tools. We offer Qlik Sense Support Services to resolve any technical issues related to smart visualization and analytics for an uninterrupted utilization of such features.
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
              <div className="single-services-item style-two" style={{ height: '600px' }}
              >
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  AI-Powered
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Its Insight Advisor adds to human intuition by suggesting insights and analyses, automating tasks, facilitating search and natural language interaction, and enabling real-time advanced analytics. Qlik Sense Trainings from our experts help you implement these AI-Powered analytics.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}
              >
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  App Mobility
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>It enables users to stay productive online or offline with interactive mobile analytics. They are able to make discoveries, collaborate easily, and take action on data from any place and at any time. During Qlik Sense Trainings, your team will have practical exposure to effective practical usage of this feature.
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
              <div className="single-services-item style-two" style={{ height: '600px' }}
              >
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Embedded Analytics
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Qlik Sense allows businesses to build, extend and embed analytics. Users can build any analytics they can imagine with the help of a complete set of open APIs and bring them into any project, process, or app through powerful embedded analytics support. Get Qlik Sense Trainings to help your IT team gain these skills.
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
              <div className="single-services-item style-two" style={{ height: '600px' }}
              >
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Scalability Across the Cloud
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Its multi-cloud architecture allows users to easily combine SaaS, hybrid multi-cloud, and on-premise deployment options. Our Qlik Sense Trainings make your team well-versed in these operations.</p>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Getting this solution deployed from a reputed Qlik Sense Consultant helps you understand and utilize these features and make the most of it in your operations.</p>
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
                <p className="w-100" style={{ textAlign: "justify" }}>As installing and implementing Qlik Sense in your cloud-based and on-premises devices and systems is a complex and technically intricate affair, you better assign this responsibility to SPM Global, which happens to be one of the leading and most sought-after Qlik Sense Service Providers and Qlik Sense Consultant Service givers. Along with that, SPM Global’s Qlik Sense Support Services provide in-time support backup to resolve any technical issues with this analytics platform.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>When you opt for Qlik Sense Managed Services, you can rest assured that our IT experts will properly and satisfactorily perform each and every step of your custom Qlik Sense installation, right from communication and sharing with you knowledge on various aspects of Qlik Sense, including Qlik Technology, Qlik Cloud, Qlik Sense demo, Qlik Visualization, Qlik Sense Dashboard, Qlik Sense Scripting, Qlik Sense Alternate States and choosing default Qlik Sense Themes.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>As a Qlik Sense Consultant, we educate you about Qlik Snowflake connector, Qlik Sense Alerting, Qlik Sense Desktop and Mobile, Qlik Sense Extensions, Qlik Sense Tutorial, Qlik Sense Training, and printing Qlik Sense for reports creation.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Our experts will enlighten you about various Qlik Sense versions including Qlik Sense Business and Qlik Sense Enterprise. They will also cover other related aspects like how to perform Qlik data integration, understanding Qlik Business intelligence, how to seek help from the Qlik Sense community, AWS Qlik collaboration, and using Qlik Sense KPI.</p>

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
                <p className="w-100" style={{ textAlign: "justify" }}>Our specialists will assist and support you during the entire Qlik Sense installation and implementation process, right from doing planning, strategy making, providing you the requisite resources, know-how and processes, performing configuration, installation and integrating Qlik Sense with your existing devices and systems. Qlik Sense Support Services from SPM Global resolve any technical issues quickly.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Also, they will provide meticulous Qlik Sense Trainings to your staff for guiding them in its proper, safe and secure use. They will provide Qlik Sense support services as well as perform continuous monitoring of your Qlik Sense solution to identify any issues and security threats that may disrupt its smooth functioning and impact your business operations and services and resolve them on time, so as to ensure your business processes and services continue to function in an unhindered manner.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Also, being your trusted Qlik Sense Consultant, they will be responsible for the security, maintenance, and upgradation of your Qlik Sense analytics solution. Only a proven and tested Qlik Sense Third-Party Vendor like SPM Global can achieve a perfect, blemish-free, and efficient Qlik Sense installation (as well as installation of other related products like NPrinting) and implementation at your business. While on one hand, having an expert Qlik Sense Consultant enables you to maximize your gains from this next-generation analytics platform, on the other hand, our Qlik Sense Support Services render your own IT staff free to focus on other business-critical IT tasks.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Having successfully performed and managed countless Qlik Sense installation projects for a wide variety of businesses globally over the years makes us one of the most experienced and bankable Qlik Sense Vendors for providing consultation, services and solutions in the Qlik Sense analytics installation and deployment domain. We transform the product expertise through our Qlik Sense Trainings and will be there with you to take care of technical issues through Qlik Sense Support Services.
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