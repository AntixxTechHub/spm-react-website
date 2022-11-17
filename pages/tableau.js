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
      <PageTitle page="Tableau" />
      <Navbar />
      <PageTopTitle
        subTitle="Analytics"
        title="Tableau" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p className="w-100" style={{ textAlign: "justify" }}>Tableau is a leading analytics platform that enables people to see and understand data and transforms the way people use data to solve problems. It enables business organizations of diverse sizes to become more data-driven and see measurable business outcomes. Built-in visual best practices in this platform help to provide unlimited data exploration without interrupting the user’s flow of analysis.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>Analytical capabilities in Tableau enable all kinds of users, whether they are analysts, executives, or IT professionals to analyze any kind of data from anywhere.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>Installing Tableau analytics solutions in your business’s on-premises and cloud-based devices and systems is a complex and technically intricate affair, requiring dedicated IT experts of SPM Global, one of the leading Tableau Service Providers, who have deep knowledge of the latest and associated IT technologies, tools, processes and practices and access to requisite resources. Only they can perform a smooth and glitch-free Tableau installation for your business organization.</p>
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
                  Here are some striking features of the Tableau analytics platform
                </h4>
                <span className="sub-title">1. Sharing and Collaboration</span>
                <p className="w-100" style={{ textAlign: "justify" }}>Tableau offers convenient options that enable users to collaborate with other users and share data instantly in the form of sheets, dashboards, visualizations, etc. in real-time. With Tableau, users can securely share data from various data sources in terms of on-cloud, on-premise, hybrid, etc. Due to fast and easy collaboration and data sharing, they are able to get quick reviews or feedback on the data, which thus leads to a better overall analysis of the data.
                </p>
                <span className="sub-title">2. Tableau Dashboards</span>
                <p className="w-100" style={{ textAlign: "justify" }}>Tableau Dashboards enable users to obtain a wholesome view of their data through visual objects, visualizations, text, etc. These dashboards are very informative as they can present data in the form of stories, facilitate the addition of multiple views and objects, provide various layouts and formats, and let the users deploy suitable filters.
                </p>
                <span className="sub-title">3. Advanced Visualizations (Chart Types)</span>
                <p className="w-100" style={{ textAlign: "justify" }}>Tableau provides a wide range of visualizations. Not only does it provide basic visualization options like Bar Charts and Pie Charts, but also offers advanced visualization options like Gantt chart, Histogram, Bullet chart, Motion Chart, Treemap, Boxplot, etc.
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
              <div className="single-services-item style-two" style={{ height: '575px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Maps
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Tableau provides a lot of pre-installed information on maps like postal codes, administrative boundaries, cities, etc. As a result, very detailed and informative maps can be created on Tableau. Various kinds of maps are available in Tableau. Some of these are Flow maps, Cloropleth maps, Heat maps, and Point distribution maps.</p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '575px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Strong Security
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>For ensuring data and user security, Tableau has a fool-proof security system in place. This system is based on authentication and permission systems for managing data connections and user access. Tableau can also be integrated with other security protocols like Kerberos, Active Directory, etc. This powerful analytics platform practices row-level filtering which helps to keep the data secure.
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
              <div className="single-services-item style-two" style={{ height: '575px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Mobile View
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Tableau is equipped with a Mobile view capability that provides users with a lot of flexibility and convenience for handling their data on the go. The Mobile version of the Tableau app enables users to create mobile-compatible dashboards and reports. Its customization option lets them add new phone layouts, and interactive offline previews besides other things.
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
              <div className="single-services-item style-two" style={{ height: '460px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Ask Data
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>The ask data feature of Tableau allows users to conduct simple searches on the data as they do on Google. Once they type a query about their data in natural language, it provides them with the most relevant answers in textual as well as visual form.</p>
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
                <p className="w-100" style={{ textAlign: "justify" }}>Our specialists will take charge of your entire Tableau analytics solution installation process and extend your support and assistance at every step of the process, right from providing valuable Tableau Consultant advice, and communication besides sharing with you knowledge on various aspects of Tableau Software, including what is Tableau and define Tableau.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Also, they will enhance your awareness of various Tableau versions like Tableau Public, Tableau Desktop Public, Tableau Online, Tableau Reader, etc. They will assist and guide you on how to download Tableau and perform Tableau login and utilize Tableau dashboard capabilities. They will share with you knowledge about various Tableau products like Tableau Prep Builder, and outstanding features of the Tableau server. Also, they will impart you training and Tableau tutorial to learn Tableau and how to use Tableau  properly and safely bes as well as inform you about Tableau costs.
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
                <p className="w-100" style={{ textAlign: "justify" }}>Our specialist will provide you guidance, assistance, and support in every step of the Tableau analytics solution installation process, including strategy and planning, performing installation, configuration, integrating it with your various devices and systems, and providing guided Tableau trainings to your staff about the proper and safe use of the solution. Also, they will monitor the solution round the clock against any security threats and issues and remedy them at the earliest to prevent/minimize their impact on your services and operations, look after the security and maintenance aspects as well as perform updates.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Innumerable businesses of varying sizes and industries around the world trust the superior Tableau support services of SPM Global for their custom Tableau installation and management needs and your business too can rely on us for the same.</p>
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
                <p className="w-100" style={{ textAlign: "justify" }}>Exemplary Tableau managed services from SPM Global deliver various advantages to businesses in terms of saving costs, time, and resources besides saving them from the hassles of performing Tableau installation themselves. As our veteran IT professionals take care of the more complex and demanding Tableau installation tasks at your end, your own IT staff becomes free to focus on performing more business-critical IT tasks like software and product development, etc. on which the profitability, growth, and success of your business depend.</p>

                <p className="w-100" style={{ textAlign: "justify" }}>The utmost dedication and proficiency of our IT professionals in the Tableau installation and integration domain, has earned SPM Global a coveted place among top Tableau vendors.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>So when you choose this most renowned and sought-after Tableau Third Party vendor for managing your custom Tableau installation project, you can rest assured that the project is going to be a success and it will help you achieve your desired business goals in terms of better and streamlined operations, increased efficiency and ability to deliver even better services and products to your customers.</p>

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