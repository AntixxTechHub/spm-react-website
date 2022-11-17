import React from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";



import shapeImg8 from "@/public/images/shape/shape8.png";
import event from "@/public/images/event.jpg";
import itsm from "@/public/images/itsm.jpg";
import bmcheliximplementation from "@/public/images/bmcheliximplementation.jpg";
import dealing from "@/public/images/dealing.jpg";
import service from "@/public/images/service.jpg";
import change from "@/public/images/change.jpg";
import multicloud from "@/public/images/multi-cloud.jpg";
import insights from "@/public/images/insights.jpg";
import Knowledge from "@/public/images/Knowledge.jpg";
import helixdigitalworkplace from "@/public/images/helix-digital-workplace.jpg";
import Assets from "@/public/images/Assets.jpg"
import Configuration from "@/public/images/Configuration.jpg";


{/* ------------------------------Faq Q/A--------------------------------- */ }
const questionsAnswers = [
  {
    question: "Q1: What is the benefit of adopting BMC Smart IT?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Smart IT allows you to create tickets faster. You can create multiple ticket types, such as incidents, work orders, service requests, or change requests with minimal values to fill in. You can use the Smart Record feature to take notes while interacting with your clients. Again, you can collaborate with co-workers effectively through easy and faster integration with various business apps.</p>
  },
  {
    question: "Q2: Does BMC MyIT allow your team members to tackle service requests independently?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: Yes, BMC MyIT allows you to decentralize your work for small instances. Any team member can tackle a particular service request individually with his or her own device. Thus, multiple service requests can be addressed through various team members at the same time, remotely. This feature improves the reaction time to provide services to your clients and helps you achieve better customer satisfaction.</p>
  },
  {
    question: "Q3: Is BMC DWP 'people-centric?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: Yes, the solution is people-centric as it is designed to provide consumer-like experiences to the managerial members of your teams. Thus, your workforce can enjoy the flexibility to work on the scheduled task, while your managers can seamlessly govern the working process, the technology being leveraged, and the team members. Work with certified vendors to deploy BMC DWP in a customized manner for seamless coordination.</p>
  },
  {
    question: "Q4: How is BMC DWPA better than BMC DWP?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: Being the latest version of BMC DWP, the BMC DWPA has some advanced features. BMC DWPA provides better access to your clients so that they can raise service requests to the concerned departments of your organizations such as HR, Support, and so on. This feature adds flexibility to the overall work culture of your organization.</p>
  },
  {
    question: "Q5: Can I get a single dashboard to accommodate the complete service catalog?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: By implementing BMC Digital Workplace Catalog, you can bring all service requests together to a centralized dashboard. This feature helps you manage various service requests, assign service and support tasks to the concerned team members, and monitor the progress of every service request effectively.</p>
  },
  {
    question: "Q6: How do BMC Solutions add flexibility to your service operations?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Solutions are gaining popularity in the ITSM landscape due to the flexibility they offer. Firstly, most BMC Solutions are accessible through various browser-enabled devices. Thus, it is easy to keep control of your team’s activities and monitor the progress of every project from wherever you are. Then comes the intuitive dashboard that helps you effectively communicate, make correct decisions, and create reports.</p>
  },
  {
    question: "Q7: How can the advanced accessibility of BMC Solutions set you free?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Solutions are accessible through various browser-enabled devices and are compatible with different operating systems, such as Android, iOS, Windows, and Mac. Thus, you can stay connected with your work through your desktops, laptops, tablet phones, and smartphones from your offices, homes, or wherever you are.</p>
  },
  {
    question: "Q8: How can you achieve better productivity by switching to BMC Solutions?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>The entire team would be clear about what they are supposed to do. The team also gets real-time insights and can prepare reports in easy-to-understand formats, like graphs, bar charts, and pie charts. As all the crucial matters are brought to a single dashboard, you can strategize your work accordingly. Assigning implementation to BMC Solutions Managed Services experts is crucial here. That improves the individual performance of every team member, and the organization achieves better productivity.</p>
  },
  {
    question: "Q9: Is it a lengthy and laborious process to implement BMC Solutions for your business?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: No. If you partner with the best asset customization service providers, it takes only a few days to switch to BMC Solutions. Thus, you can get going with the most appreciated ITSM and workflow orchestration tools very soon. Collaborate with an experienced BMC Solutions Consultant to adopt the solutions in a customized manner.</p>
  },
  {
    question: "Q10: Why choosing the best implementation partner is crucial when switching to BMC Solutions?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Solutions implementation requires thorough product expertise and extensive experience developing, customizing, deploying, and servicing the ITSM tools. If you assign this crucial task to any inexperienced firm, your business may be at risk, as you may not be able to track workflow, projects, and customer service requests in time. So, it is always better to join hands with reputed implementation BMC Solutions Service Providers with adequate experience in BMC Solutions implementation.</p>
  },
];
{/* ------------------------------End Faq Q/A--------------------------------- */ }

const Services = () => {
  return (
    <>
      <PageTitle page="Google Cloud" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Google Cloud" />

      {/* <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                  BMC Helix ITSM – A Robust Service Management Platforms, Revolutionizing IT
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>
                  ITSM (IT Service Management) embraces all activities (like policies, processes, etc.) that an enterprise performs for effective designing, planning, delivery, operation, maintenance, and control of IT service.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM constitutes to be a robust, service management platform, empowering the IT revolution. The intelligent automation and people-centric capability of this software solution, facilitate smart working in the modern agile business. BMC Helix Managed Services are delivered in the cloud along with hybrid or on-premise opportunities.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={itsm} alt="man-with-son-image" />
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
                <Image src={bmcheliximplementation} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h4 className="nunito-font">
                  BMC Helix ITSM Scenario supporting the development of BMC Helix ITSM
                </h4>
                <span className="sub-title">BMC Helix Implementation</span>
                <p className="w-100" style={{ textAlign: "justify" }}>Currently, BMC Helix Managed Services are driven by human and is extremely resource-intensive. Many of the ITSM processes and systems are manual, incorrect, and slow, leading to greater costs and lower productivity. Several BMC Helix Vendors are helping companies to migrate their workloads to the cloud platform for spending less time on upgrades. Helix ITSM Consultants also obtain the flexibility to add power on demand.
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Entrepreneurs expect easy and successful migration in reduced time. They want to curtail costs but need the power to scale elastically. Service Management is getting disrupted by technologies like artificial intelligence (AI), Machine learning (ML), virtual agents, chatbots, and the Internet of Things (IoT).  These techniques are driving changes in the way, enterprises are providing services in the future. Veteran business leaders are seeking BMC Helix Support Services to resolve real-time business challenges and get an edge over their competitors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area ptb-100 br-bottom-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Is BMC Helix ITSM cloud-based?</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Built for the cloud, the reimagined BMC Helix Support Services and operation experience remains unparalleled. This provides you with an omnichannel experience through Slack, Skype, Chatbot, and more. Automation is possible with the help of conversational bots and RPA (Robotic Process Automation) bots, that help to automate digital tasks.
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>BMC Helix ITSM or NextGen Remedy:</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      BMC Helix cloud technology has mobile accessibility. As a result of which, everything remains in the BMC family. Previously called “BMC Remedy”, it facilitated service management in IT companies. IT professionals could easily manage internal issues, with BMC Remedy. It is now updated to work within the Helix technology and it can be hosted on the cloud.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>How to use Helix BMC?</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      BMC Helix Managed Services enable non-coders to co-create. You can seek BMC Helix Trainings for using Helix BMC in the following way:
                      Configuring enterprise applications through visual drag-and-drop design tools.
                      Using drag-and-drop connectors, with integration service for communicating with top third-party services as well as core systems.

                    </p>
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
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>What is the Helix tool?</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      Helix comprises an incident response and computer forensics toolkit, based on standard Knoppix Live bootable CD. It contains several tools for an incident response on Linux systems and Windows
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>What is BMC Helix Discovery?</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                      BMC Helix Discovery constitutes a data center discovery solution. This helps to automatically determine data center inventory, configuration, and relationship data, by mapping applications to IT infrastructure. You can manage IT and leverage data for enhancing IT process and productivity, by eliminating guesswork with data-driven decision-making.
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>What is Helix Change Management</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix Service Providers allow agile DevOps organizations to maximize their delivery and improve the overall quality of their services. Helix ITSM Consultants ensure governance and compliance to pursue their journey to become an Autonomous Digital Enterprise. BMC Helix is a simplified change request technique through a guided process.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="shape8">
          <Image src={shapeImg8} alt="shape" />
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">What are the Features of BMC Helix ITSM?</h2>
            <span className="sub-title purple-color">Several IT organizations are depending on ITSM services. BMC Helix ITSM has the following features:</span>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={event} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Event & Problem Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix Service Providers facilitate building and resolving events quickly through smart, contextual, and practical event matching. BMC Helix Support Services allow natural language, unshaped data access of tickets, and recommended techniques of solving issues in an accurate manner. BMC Helix Vendors make use of improved service analytics to drive efficiency.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>It helps to get lower call volumes with Omni-channel self-service, through BMC Helix Digital Workplace. Further, it makes the best use of agent productivity with modern User Interfaces. BMC Helix works with the best practices of ITIL (IT Infrastructure Library) with complete training and innovative ITIL procedures.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={dealing} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Dealing with Practical Problems</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM integrates Artificial Intelligence for identifying clusters of recurring events. This helps spontaneous analysis, and reorganizing problem management. Further, this enables agents to emphasize challenge areas and decrease load of the management team.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Moreover, this facilitates automating tedious and manual problem management practices. Analysis through Advanced AI k algorithms helps to accurately identify clusters of recurring incidents. Hence, there is a seamless transfer from problem recommendation, and investigation to closure. Further, real-time incident correlation allows for resolving issues from the analyzed trends.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={change} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Change Release Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM allows agile DevOps enterprises to maximize their process of delivery and quality of service. This feature enables a simplified change request process with a Drag-and-drop change calendar, automated contextual clash detection as well as making an impact analysis.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Added to that, there is improved risk analytics, programming routine changes without interaction along with the delivery of crucial information for the decision-making of the agents.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={multicloud} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>BMC Helix Multi-Cloud Broker</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>This feature helps to deliver a flawless service through multi-cloud environments. IT managers work in a flexible and configurable cloud-based multi-service. Using this facet, the IT project team members have effective collaboration with various BMC Helix ITSM Third-Party Vendors for resolving issues.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Helix ITSM Consultants integrate events, problems, and change management through significant agile development and audit performance competencies for evaluating service integrity. Moreover, Integrated Security Information & Event Management capabilities boost service and operational efficacies.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={insights} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Insights</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM provides the insights to visualize cross-functional services as well as operational management. Powerful analytics and the automatic formation of natural language narratives enable users to get a quick insight into substantial data. In addition, IT professionals visualize data about Changes, Incidents, Metrics, Chatbot Conversations, Service Requests, Events, Capacity, etc. There are several exclusive visualizations in BMC Helix ITSM.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Further, you can get customized reports and dashboards and make use of the storyboard feature for producing slide shows with practical data through competent BMC Helix Training. You can also obtain automated insights based on the significance of data and collaborate in a flawless manner.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={Knowledge} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Knowledge Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM Third Party Vendor helps you get cohesive, industry-leading knowledge management competencies with smart recommendations. This facilitates bringing the correct information to the end-users and agents for resolving issues in a fast and accurate manner. Integrated knowledge-centered Service enables fast and accurate delivery.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>In addition, you can get lifecycle management of knowledge articles for getting up-to-date information and curation. Besides, there is the availability of robust multi-media content for enhanced support. BMC Helix Knowledge Management solutions also facilitate real-time conversions and circumstantial responses, improving out-of-the-box capabilities.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={helixdigitalworkplace} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>BMC Helix Digital Workplace</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Contemporary self-service offers spontaneous and intelligent customer experience to enable organizations to step into future work. Intellectual self-service enables employees to fast resolve problems before submitting a request. A cohesive service catalog removes misperception, by presenting services from manifold business units in a single set.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>A customer interface helps employees obtain what they want with a one-stop-shop solution for services. Omni-channel and knowledge management facilitates employees to get the best information, as per their requirements. In addition, easy administration with drag-and-drop allows workflow customization. Furthermore, configuration enhancement enables faster resolution and improved user experience.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={Assets} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Management of Assets</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM also delivers comprehensive lifecycle management of IT assets, from the stage of procurement to the end of the product lifecycle. This helps to track asset devaluation in the due course of time. Moreover, with BMC Helix Trainings, you can ensure compliance, evading audit costs along with software license management.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Further, it identifies contract violations and buying opportunities. You can know exactly about the number of assets, asset locations, and the people using them. Consequently, you can make informed decisions about IT changes. Moreover, you can make use of remote support and automated configuration functionalities for client systems.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={Configuration} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Configuration Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>This feature of BMC Helix ITSM supports the ITSM process through a single-source reference for all IT infrastructure and services. Moreover, it helps to enhance the user experience with a contemporary, persona-based User Interface. You can boost efficiency and stability with a single source of reference for all IT infrastructure and services.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Further, it decreases costs through automating tasks that earlier required manual interference. IT managers can reduce risk, through an improved understanding of change dependencies and operate services with strong insights into parameters. This allows smooth integration between support and operational processes.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={service} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Service Request Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>The service request management feature of BMC Helix Implementation helps you to describe a catalog of service requests. This reflects the services provided to internal and external clients. You can quickly obtain efficiency in the delivery and IT services support. Self-service solutions of BMC Helix ITSM implementation include incidents, modifications, assets, and work orders.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Further, it offers a centralized catalog of requests like price, service targets, and approval guidelines to mechanize and monitor standard requests. This allows self-help through knowledge access for decreasing the number of calls to the service desk.</p>
              </div>
            </div>
            <p className="w-100" style={{ textAlign: "justify" }}>CIOs, Change Managers, IT Operations Managers, as well as Service Desk Managers prefer this predictive, innovative, and intelligent service management for better, faster, accurate, and smarter delivery in a cost-effective way. As per industry research, it is found that organizations obtained significant savings with BMC Helix Vendors, maximizing return on investment.</p>
            <p className="w-100" style={{ textAlign: "justify" }}>So, why are you waiting for me? Choose BMC Helix ITSM Third-Party Vendor to obtain modern persona-based UX optimized across devices and cognitive automation capabilities. You would be benefitted from IT service support function, integration, and spontaneous change management capabilities. Seek one of the best BMC Helix service providers to get smart reporting, out-of-the-box ITIL processes, and comprehensive knowledge management.</p>
          </div>
        </div>
      </div>

      <div className="faq-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title dark-green-color">

            </span>
            <h2 className="nunito-font">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg- col-md-12">
              <div className="faq-accordion">
                <div className="accordion" id="faqAccordion">
                  <Accordion questionsAnswers={questionsAnswers} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export default Services;