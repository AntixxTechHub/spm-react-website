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
      <PageTitle page="SAP Analytics" />
      <Navbar />
      <PageTopTitle
        subTitle="Analytics"
        title="SAP Analytics" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3 className="nunito-font">
                  SAP Analytics Cloud
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>SAP Analytics Cloud or SAC is a simple cloud-based solution that connects people, information, and ideas in business organizations. Built on the HANA platform, it is powered by artificial intelligence. The solution retrieves data from on-premises databases, spreadsheets, and cloud databases and enables data analysts and business decision-makers to analyze and visualize this data for achieving key insights for making fast and confident decisions that lead to enhanced efficiency and improving other aspects of their business.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>To leverage benefits from the use of the SAP Analytics Cloud solution, your organization firstly needs to have a successful installation of the solution. As installing SAP Analytics Cloud is a technically demanding affair, you need to utilize the services of a proficient and reliable SAP Analytics Cloud Third-Party Vendor like SPM Global.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>SPM Global, one of the leading SAP Analytics Cloud Service Providers, has the technological expertise, trained and knowledgeable IT personnel, and resources for achieving a perfect, smooth, and blemishless SAP Analytics Cloud installation in your cloud-based and on-premises systems and devices.
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
          <div className="section-title">
            <h2 className="nunito-font">Features of SAP SAC Analytics Solution</h2>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Augmented Analytics
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Augmented analytics capabilities in the SAP Analytics Cloud enable businesses to maximize the gains from the use of Artificial Intelligence-powered analytics. Its Search to Insight feature enables those users to access the platform who lack any prior knowledge or training in data science.</p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Data-On-The-Go
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>SAP Cloud Analytics can be easily integrated with SAP S/4HANA and deployed on to Android and iOS devices. As a result, business teams can easily carry their operations over to the smaller screen and achieve flexibility of control over a secured cloud network.
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
              <div className="single-services-item style-two" style={{ height: '600px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Enterprise Planning
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>Working as an all-in-one financial planning and analysis solution, SAP Analytics enables businesses to create strategic alignment across all departments. Its advanced built-in smart features like allocations, financial modeling, automated reporting, and intelligent insights let businesses make better end-to-end planning decisions. Its zero-based budgeting feature enables business organizations to allocate resources more effectively by utilizing embedded collaboration tools.
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
                  Live Data Connection
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>As SAP Analytics Cloud is integrated with SAP S/4HANA, organizations need not make similar changes across multiple files in the cloud. They are able to make all necessary changes in one location in the cloud, without undertaking manual intervention in the source system.
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
              <div className="single-services-item style-two" style={{ height: '460px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Customized Dashboard
                </h5>
                <ul className="skill-list">
                  <li>
                    <p className="w-100" style={{ marginBottom: '5px' }}>This platform enables users to customize their dashboards as per their specific requirements. Also, they are able to access all the relevant data over a launchpad which gets displayed intuitively and attractively.
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
                <Image src={dummyimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <p className="w-100" style={{ textAlign: "justify" }}>Our IT specialists will provide you help, guidance, and support during each and every step of SAP Analytics cloud installation, right from providing SAP Analytics Cloud Consultant advice, communication, and sharing knowledge with you over various aspects of SAP Analytics Cloud, including SAP Business Objects Cloud, SAP analytics cloud machine learning technology and suite of various SAP analytics tools and SAP Analytics products They will also enlighten you about various SAP analytics cloud capabilities, SAP BI Cloud and SAC Business Intelligence functionality, SAP analytics cloud features and benefits of SAC analytics solution
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Our professionals will provide you useful knowledge on SAP analytics cloud AWS platform, SAP analytics cloud Augmented Analytics approach and share with you useful SAP Analytics Cloud tutorials for learning SAP Analytics Cloud use and issue resolution. Our specialists will impart you guidance on how to download SAP Analytics Cloud PPT for report creation, steps for performing SAP analytics cloud on azure integration, the way to effectively perform SAP Analytics cloud analysis for office use and give you knowledge on SAP analytics cloud Gartner rating and SAP Analytics Cloud pricing.
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
                <p className="w-100" style={{ textAlign: "justify" }}>Our experts will assist and guide you in SAP Analytics installation planning and strategy making, configuring, installation, integration with various systems and devices, and providing SAP Analytics Cloud Trainings to your employees and team members for proper, safe, and effective use of the solution.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>They will also monitor the analytics solution for any glitches and security risks and take requisite measures for remedying them fast. Also, they will take care of its maintenance, security, upgrading, and performing software patches.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Outstanding SAP Analytics Cloud Support Services provided by SPM Global will enable you to achieve perfect SAP Analytics Cloud installation and implementation and register various benefits associated with it in terms of reduced costs, streamlined operations, enhanced efficiency, and achievement of your specific business goals.
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
                <p className="w-100" style={{ textAlign: "justify" }}>With experts of SPM Global, one of the most renowned and most sought after SAP Analytics Cloud Managed Services Providers, taking charge of your SAP Analytics Cloud installation and implementation project, your own IT staff will get saved from the hassles of performing the installation themselves. Thus, they will become free to solely focus on more important IT tasks that are crucial to your business growth and success.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>So whenever your organization needs to conduct the SAP Analytics Cloud installation, you can confidently rely on the expertise and proficiency of SPM Global Technologies, one of the most prominent and trustworthy SAP Analytics Cloud vendors, for the same. They will surely perform the installation like no other.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Now, it is not at all difficult for you to find the reasons that have made SPM Global the first choice of businesses worldwide for installation of one of the prominent analytics solutions like QlikView, Qlik Sense, Power BI, Tableau, and SAP Analytics Cloud at their organization. If SPM Global has become their preferred choice, why it can’t be yours?
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

export default Services;