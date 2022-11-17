import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Accordion from "@/components/Accordion";


import installing from "@/public/images/installing.jpg";
import DWPAThirdPartyVendor from "@/public/images/DWPA-Third-Party-Vendor.png";
import smartit from "@/public/images/smart-it.png";
import DWPC from "@/public/images/DWPC.png";
import DWP from "@/public/images/DWP.png";
import DWPA from "@/public/images/DWPA.png";
import MYIT from "@/public/images/MY-IT.png";


const questionsAnswers = [
  {
    question: "Q1: What is the benefit of adopting BMC Smart IT?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC Smart IT allows you to create tickets faster. You can create multiple ticket types, such as incidents, work orders, service requests, or change requests with minimal values to fill in. You can use the Smart Record feature to take notes while interacting with your clients. Again, you can collaborate with co-workers effectively through easy and faster integration with various business apps.</p>

  },
  {
    question: "Q2: Does BMC MyIT allow your team members to tackle service requests independently?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Yes, BMC MyIT allows you to decentralize your work for small instances. Any team member can tackle a particular service request individually with his or her own device. Thus, multiple service requests can be addressed through various team members at the same time, remotely. This feature improves the reaction time to provide services to your clients and helps you achieve better customer satisfaction.</p>
  },
  {
    question: "Q3: Is BMC DWP 'people-centric?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Yes, the solution is people-centric as it is designed to provide consumer-like experiences to the managerial members of your teams. Thus, your workforce can enjoy the flexibility to work on the scheduled task, while your managers can seamlessly govern the working process, the technology being leveraged, and the team members. Work with certified vendors to deploy BMC DWP in a customized manner for seamless coordination.</p>
  },
  {
    question: "Q4: How is BMC DWPA better than BMC DWP?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Being the latest version of BMC DWP, the BMC DWPA has some advanced features. BMC DWPA provides better access to your clients so that they can raise service requests to the concerned departments of your organizations such as HR, Support, and so on. This feature adds flexibility to the overall work culture of your organization.</p>
  },
  {
    question: "Q5: Can I get a single dashboard to accommodate the complete service catalog?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>By implementing BMC Digital Workplace Catalog, you can bring all service requests together to a centralized dashboard. This feature helps you manage various service requests, assign service and support tasks to the concerned team members, and monitor the progress of every service request effectively.</p>
  },
  {
    question: "Q6: How do BMC Solutions add flexibility to your service operations?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC Solutions are gaining popularity in the ITSM landscape due to the flexibility they offer. Firstly, most BMC Solutions are accessible through various browser-enabled devices. Thus, it is easy to keep control of your team’s activities and monitor the progress of every project from wherever you are. Then comes the intuitive dashboard that helps you effectively communicate, make correct decisions, and create reports.</p>
  },
  {
    question: "Q7: How can the advanced accessibility of BMC Solutions set you free?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        BMC Solutions are accessible through various browser-enabled devices and are compatible with different operating systems, such as Android, iOS, Windows, and Mac. Thus, you can stay connected with your work through your desktops, laptops, tablet phones, and smartphones from your offices, homes, or wherever you are.
      </p>
  },
  {
    question: "Q8: How can you achieve better productivity by switching to BMC Solutions?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        The entire team would be clear about what they are supposed to do. The team also gets real-time insights and can prepare reports in easy-to-understand formats, like graphs, bar charts, and pie charts. As all the crucial matters are brought to a single dashboard, you can strategize your work accordingly. Assigning implementation to BMC Solutions Managed Services experts is crucial here. That improves the individual performance of every team member, and the organization achieves better productivity.
      </p>
  },
  {
    question: "Q9: Is it a lengthy and laborious process to implement BMC Solutions for your business?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        No. If you partner with the best asset customization service providers, it takes only a few days to switch to BMC Solutions. Thus, you can get going with the most appreciated ITSM and workflow orchestration tools very soon. Collaborate with an experienced BMC Solutions Consultant to adopt the solutions in a customized manner.</p>
  },
  {
    question: "Q10: Why choosing the best implementation partner is crucial when switching to BMC Solutions?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        BMC Solutions implementation requires thorough product expertise and extensive experience developing, customizing, deploying, and servicing the ITSM tools. If you assign this crucial task to any inexperienced firm, your business may be at risk, as you may not be able to track workflow, projects, and customer service requests in time. So, it is always better to join hands with reputed implementation BMC Solutions Service Providers with adequate experience in BMC Solutions implementation.</p>
  },
];

const Services = () => {
  return (
    <>
      <PageTitle page="BMC Helix Digital WorkPlace" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Helix Digital WorkPlace" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>BMC Helix DWP</h3>
                <p style={{ textAlign: "justify" }}>In the modern digital era, your leadership should couple with digital innovation to run your businesses smoothly. Adopting the most trusted and proven workflow automation solutions is the need of the hour to take your business goals ahead.</p>

                <p style={{ textAlign: "justify" }}>We collaborate with our clients as BMC Solutions service providers for an array of ITSM solutions developed by BMC. BMC Software has been the most globally acclaimed brand in ITSM. Choose us as a BMC Solutions consultant to customize and deploy BMC Solutions for your businesses. Here are some of our significant BMC implementation services that help you grow your businesses:</p>

                <p style={{ textAlign: "justify" }}>BMC DWP is the short form for BMC Digital Workplace. It was previously known as BMC MyIT and BMC MyIT Service Broker.</p>

                <p style={{ textAlign: "justify" }}>The most important feature of this workflow automation tool for ITSM is its ‘people-centric approach to empowering the users. However, there would never be any compromise with the process enforcement mechanism and effective governance.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={installing} alt="" />
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
                <Image src={DWPAThirdPartyVendor} alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  Benefits of this solution to your IT service business
                </h3>
                <p style={{ textAlign: "justify" }}>The management can seamlessly govern the people, the process, and the technology, enjoying the best consumer-like experiences. The tool is developed on an enterprise-grade infrastructure that prioritizes people and enables them to get hold of various domains and operations in their IT service enterprise effortlessly and swiftly.</p>
                <p style={{ textAlign: "justify" }}><span>BMC Helix Digital WorkPlace</span> has a one-click user interface, and it is accessible on various browser-enabled devices based on Windows, Mac, Android, and iOS. It comes with a built-in starter catalog to get the predefined service request definitions. It is practically possible to integrate this tool with enormous popular platforms, including Microsoft Azure, AWS, Atlassian JIRA, MS Office 365, and more</p>
                <h5 className="nunito-font">
                  Contact us for deployment services
                </h5>
                <p style={{ textAlign: "justify" }}>Get the best ITSM solution developed, customized, and deployed for your business environment by contacting us today. We work with many enterprises as a certified BMC DWP vendor for BMC Solutions, including BMC Helix Digital Work Place for many years. Give us an opportunity to help you excel by leveraging the latest ITSM Solutions.</p>
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
                  BMC Smart IT
                </h3>
                <p style={{ textAlign: "justify" }}>Would you like to enable your workforce with the next-generation ITSM experience? Remedy coupled with Smart IT could be the perfect solution to enhance IT capabilities across various roles in your organization.</p>
                <span className="sub-title">Positive changes brought to your businesses</span>
                <p style={{ textAlign: "justify" }}>Working on various projects and deliverables would be swift as this solution helps your team across different domains collaborate effectively, get access to a knowledge database to adopt best ITSM practices, and use an intuitive, social, mobile-friendly platform.</p>
                <p style={{ textAlign: "justify" }}>By adopting BMC Remedy with Smart IT, your teams can create and view tickets, refer to knowledge-enhancing articles, and update profile-related data in a simplified and faster manner. Switching to the latest version of BMC Smart IT gives your business wings to grow faster, improved productivity, and improved IT capabilities.
                </p>
                <span className="sub-title">Choose us as your BMC Smart IT implementation partners</span>
                <p style={{ textAlign: "justify" }}>Start a conversation with us today to deploy this solution for your business. Our team of cloud computing and BMC Solutions experts would leverage its expertise in BMC Smart IT Managed Services to customize them as per your business-specific needs. We deploy BMC Solutions for you within just a few days.</p>

              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={smartit} alt="" />
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
                <Image src={DWPC} alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  BMC DWPC
                </h3>
                <p style={{ textAlign: "justify" }}>BMC DWPC stands for BMC Digital Workplace Catalog. This is an app store solution designed for various sizes of IT service enterprises. The app store solution is developed to be the focal point of your digital workplace.</p>

                <p style={{ textAlign: "justify" }}>BMC DWPC serves as the single admin dashboard. Interestingly, your IT team would be able to track, manage, and monitor wide-ranging hardware, software, and other services. The services would be accessible through any cloud-based or on-premise source.</p>

                <p style={{ textAlign: "justify" }}>The beauty of this multi-dimensional service catalog is its capability to integrate with various fulfillment systems and business apps. The centralized service catalog uses service connectors to integrate with a variety of fulfillment systems.
                </p>
                <h5 className="nunito-font">
                  Collaborate with us today to get BMC DWPC developed
                </h5>
                <p style={{ textAlign: "justify" }}>Our team of ITSM experts is well-versed with the development and customization process of wide-ranging BMC Solutions. We also offer BMC DWPC Support Services to keep you on track all the time. Trust us for the development, customizing, and deploying of BMC DWPC for your organization.</p>
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
                  BMC DWP
                </h3>
                <p style={{ textAlign: "justify" }}>BMC DWP is the short form for BMC Digital Workplace. It was previously known as BMC MyIT and BMC MyIT Service Broker.
                  The most important feature of this workflow automation tool for ITSM is its ‘people-centric approach to empowering the users. However, there would never be any compromise with the process enforcement mechanism and effective governance.
                </p>
                <span className="sub-title">Benefits of this solution to your IT service business</span>
                <p style={{ textAlign: "justify" }}>The management can seamlessly govern the people, the process, and the technology, enjoying the best consumer-like experiences. The tool is developed on an enterprise-grade infrastructure that prioritizes people and enables them to get hold of various domains and operations in their IT service enterprise effortlessly and swiftly.
                </p>
                <p style={{ textAlign: "justify" }}>The solution has a one-click user interface, and it is accessible on various browser-enabled devices based on Windows, Mac, Android, and iOS. It comes with a built-in starter catalog to get the predefined service request definitions. It is practically possible to integrate this tool with enormous popular platforms, including Microsoft Azure, AWS, Atlassian JIRA, MS Office 365, and more.
                </p>
                <h5>Contact us for deployment services</h5>
                <p style={{ textAlign: "justify" }}>Get the best ITSM solution developed, customized, and deployed for your business environment by contacting us today. We work with many enterprises as a certified BMC DWP vendor for BMC Solutions for many years. Give us an opportunity to help you excel by leveraging the latest ITSM Solutions.</p>

              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={DWP} alt="" />
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
                <Image src={DWPA} alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  BMC DWPA
                </h3>
                <p style={{ textAlign: "justify" }}>BMC DWPA stands for BMC Digital Workplace advanced. This solution has some enhanced and improved features compared to its earlier versions. In this solution, your organization gets better flexibility and makes your business operations more open to your users. By collaborating with an experienced BMC DWPA Third-Party Vendor, you can get the solution implemented faster.</p>
                <h5 className="nunito-font">
                  How this solution brings flexibility to your service operations?
                </h5>
                <p style={{ textAlign: "justify" }}>This solution offers an interface similar to social media channels. The users can raise service requests for your IT, HR, and other services using this fantastic ITSM tool. The administrators can create self-service features and design a customized service catalog to enable interactions for the users.</p>
                <p style={{ textAlign: "justify" }}>So, you can rebrand this solution and make it available to your clients as a communication platform. This exercise improves trust. It also adds to the level of flexibility as your clients can raise service requests with ease.</p>
                <p style={{ textAlign: "justify" }}>Then again, the administrators can create and configure self-service options within the organization. Your workforce can access valuable information on ITSM, and set locations, and appointments.</p>
                <h5 className="nunito-font">
                  Call us today to implement BMC DWPA for your business
                </h5>
                <p style={{ textAlign: "justify" }}>Our customer BMC DWPA Support Services team would be happy to help you with your queries about this solution. We are just a call away and would love to partner with you to implement BMC DWPA for your business.
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
                <h3 className="nunito-font">
                  BMC MyIT
                </h3>
                <p style={{ textAlign: "justify" }}>Remedy has been a trusted brand for delivering Action Request Systems, and now it is a part of the BMC Software. BMC MyIT is a well-designed ITSM solution. It has been developed to take the self-sufficiency of your IT service workforce to the next level. By adopting this solution, your team can resolve IT service issues individually, with their own devices.</p>
                <span className="sub-title">How does the solution help to simplify your service operations?</span>
                <p style={{ textAlign: "justify" }}>Thus, BMC MyIT is the best way to create and manage a digital workforce across various departments of your IT Service enterprises. The solution adds flexibility to the process of attending to service requests. It allows your talented IT team members to perform tasks independently and still be strong team players.</p>
                <p style={{ textAlign: "justify" }}>BMC MyIT thus serves as the latest technology-driven self-service application. The most crucial benefit of this solution is the considerable decrease in IT friction within your IT service organization. The team members can resolve service requests independently.</p>
                <p style={{ textAlign: "justify" }}>So, the solution reduces your support cost up to a greater extent too. Our BMC MyIT Support Services would ensure that you do not face any difficulties. Again, we will resolve any technical issues promptly to avoid downtime.</p>
                <span className="sub-title">Ask us for consultation and implementation partnerships</span>
                <p style={{ textAlign: "justify" }}>Get in touch with us today to adopt BMC MyIT for your business and enjoy the flexibility and added efficiency. We work with hundreds of enterprises from across the world as a BMC MyIT Third-Party Vendor. We help you attain better efficiency and growth by developing a digital workstation to achieve better customer experiences.</p>

              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={MYIT} alt="man-with-son-image" />
              </div>
            </div>
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
      </div>

      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export default Services;