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
import Accordion from "@/components/Accordion";




import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";



{/* ------------------------------Faq Q/A--------------------------------- */ }
const questionsAnswers = [
  {
    question: "Q1: What is Salesforce Integration Cloud?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: Salesforce Integration Cloud is a process to integrate your CRM with numerous other platforms and business apps.

        <li>We offer Salesforce Integration Cloud customization and implementation services to help you apply business logic, integrate data, and have a robust user interface. </li>
      </p>

  },
  {
    question: "Q2: What Should You Consider While Choosing Salesforce Integration Cloud Service Provider?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Consider the following factors while choosing Salesforce Integration Cloud Service.
        <li> •Has the Salesforce Integration Cloud Third-Party Vendor acquired authentication from Salesforce? </li>
        <li> •Does your Salesforce Integration Cloud Service Provider have adequate experience implementing the solution for businesses of all sizes and natures?  </li>
        <li> •Has your Salesforce Integration Cloud Vendor worked before with clients from various industries to customize and implement the solution?  </li>
        <li> •Does your Salesforce Integration Cloud Consultant have a Salesforce-Certified team to offer technical support?  </li>
        <li> •Does your vendor offer Salesforce Integration Cloud Trainings?   </li>

      </p>
  },
  {
    question: "Q3: What Are the Benefits of Working with Reputed Integration Cloud Third-Party Vendor?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Here following are the benefits of working with a recognized third-party vendor for Salesforce Integration Cloud implementation:
        <li> •The vendor would have a team of experts to customize and deploy the solution considering your business-specific needs.</li>
        <li> •The third-party vendor would have extensive experience in implementing the solution. </li>
        <li> •The service provider would possess a team of Salesforce-Certified experts to train your IT team. </li>
        <li> •The consultant would offer technical support to address your technical difficulties in Salesforce Integration Cloud in time.</li>


      </p>
  },
  {
    question: "Q4: Is it Essential to Get Salesforce Integration Cloud Trainings from the Experts?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Salesforce Integration Cloud Trainings help your workforce upgrade their skillsets to cope with the modern demands of expertise in the solutions you use for business activities. Adopting the new technology and technology-driven solutions becomes a fun-filled journey for the individuals acquiring Salesforce Trainings from industry experts.
      </p>
  },
  {
    question: "Q5: What Positive Influences Salesforce Integration Cloud Brings to Your Businesses? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Here are the benefits of implementing Salesforce Integration Cloud for your business: 
        <li>• Understand your customers better through a complete view. </li>
        <li>• Improve customer experience by deploying the solution for your activities. </li>
        <li>• Improved productivity due to effective integration. </li>
        <li>• Upgrade your data infrastructure. </li>
        <li>• Better decision-making</li>
      </p>
  },
  
];
{/* ------------------------------End Faq Q/A--------------------------------- */ }



const Services = ({ seo }) => {
  return (
    <>
      <PageSeo seo={seo} pageName = "Salesforce Integration Cloud" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Salesforce Integration Cloud" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
              <h3 className="nunito-font">
              Introduction 
                </h3>
              <p style={{ textAlign: "justify" }}>In the modern digital era, information is wealth. Integrating databases from across various cloud-based systems to utilize them for your numerous business operations is challenging. Salesforce Integration Cloud allows you to integrate multiple app systems in real-time. Thus, it would be practically possible to apply business logic across app systems.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Most importantly, Salesforce Integration Cloud allows you to make the most effective use of programmatic and declarative integration tools to simplify data integration across apps. Thus, the enablement of Integration Field Service allows for handling B2B and B2C operations effectively.</p>
                <p style={{ textAlign: "justify" }}>Collaborating with the Salesforce Certified Third-Party Vendors to customize, deploy, and get training and technical support for the fantastic solution is a must. We serve as the most preferred Salesforce Integration Cloud Implementation Partners for our clients from across the globe.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Salesforce integration cloud.jpg" data={seo} />
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
              <MediaImage name="Data Integration.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  About the Solution
                </h3>
                <p style={{ textAlign: "justify" }}>Salesforce has been enabling users to automate their workflow and increase productivity for over two decades now. If you desire to extend the functionalities and capabilities of your CRM and merge it with another suitable platform, Salesforce Integration Cloud helps you achieve that.</p>

                <p style={{ textAlign: "justify" }}>To merge the functionalities of Salesforce CRM with the other required business apps, Salesforce Integration Cloud is the process you need to adopt. As a Certified Integration Cloud Consultant, we assist you with the integration process and deployment of the solution as per your business-specific needs.</p>

                <p style={{ textAlign: "justify" }}>We are Salesforce Integration Cloud Service Providers helping you reconcile data between two platforms and switch between them swiftly. Thus, we get you a centralized platform to conduct various activities. While implementing Integration Cloud Managed Services, our team of cloud computing experts analyze your current infrastructure and needs and implement</p>

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Business Logic Integration
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    UI integration
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Data integration
                  </li>
                  <p style={{ textAlign: "justify" }}>We perform the Salesforce Integration Cloud deployment after analyzing both the platforms to be merged, the processes involved to achieve smooth integration, extensive planning and technical expertise to execution.</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Benefits of Salesforce Integration Cloud</h2>
            <p>You may be any size of business- a small to medium business, a commercial establishment, or a corporate enterprise; your focus point is always your customers. Understanding customer needs and swiftly meeting them would improve the overall customer experience.
              Your productivity to address customer queries always counts. As Salesforce Integration Vendors, we implement Salesforce Integration Cloud to help you achieve these effects. Let us go through some of the critical benefits Salesforce Integration Cloud offers to enhance customer experience:
            </p>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  Improved Customer Experience
                </h5>
                <p style={{ textAlign: "justify" }}>Your customers will be more than happy, as you can attend to their service queries and product requirements well in time. Salesforce Integration Cloud allows you to integrate business apps and access data on varied platforms.</p>
                <p style={{ textAlign: "justify" }}>As you respond to your customers in time and resolve their difficulties, you experience an improved customer experience. Ultimately, this improved customer satisfaction leads to consistent growth through referrals and repeat orders.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Enhanced Productivity.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Enhanced Productivity
                </h5>
                <p style={{ textAlign: "justify" }}>Through AppExchange, your core team members can bring the required set of business apps to a single dashboard. It allows them to create and publish an extension to various business apps. Salesforce Admins can select and install the desired apps swiftly.</p>
                <p style={{ textAlign: "justify" }}>Integrating data and creating an easy-to-use user interface helps to boost your overall productivity in delivering the best possible customer support and service.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Effective enablement of work automation.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Effective Enablement of Work Automation
                </h5>
                <p style={{ textAlign: "justify" }}>By integrating Salesforce CRM with other apps and platforms, you can allocate tasks, communicate effectively, and assess the progress of all your projects on a user-friendly dashboard on the go. This feature brings effective work automation as a part of your work culture.</p>
                <p style={{ textAlign: "justify" }}>Achieve more in less time and make perfect decisions at the right time by getting Salesforce Integration Cloud implemented from us.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Effective enablement of work automation.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Modernized Data Infrastructure
                </h5>
                <p style={{ textAlign: "justify" }}>Salesforce solutions come with the Lightning platform allowing you to connect with unified APIs and services. Thus, you can integrate back-office operations swiftly. Along with that, our well-designed Salesforce Integration Cloud Implementation helps you modernize your data infrastructure.</p>
                <p style={{ textAlign: "justify" }}>You can access data across various platforms and integrate that for your business activities. This advanced enablement brings a great deal of ease in analyzing customer and business data to make the right decisions at the right time.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Excellent Decision Making Through 360-Degree Customer View</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Salesforce Integration Cloud allows you to connect deeply with your customers. This deep connection helps you understand changing customer behavior. You can engage your customers effectively to impress, influence, and retain them in the long run.</p>
                <p style={{ textAlign: "justify" }}>You get a 360-degree view of what customers expect from you. Thus, you can make better decisions to delight your customers and grow your customer base consistently.</p>
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
                <h3>Significance of Salesforce Integration Cloud Service Providers</h3>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies Salesforce Integration Cloud Services to our global clientele as Certified Salesforce Integration Cloud Third-Party Vendors for many years. We have implemented this globally appreciated integration solution for hundreds of businesses of different sizes and working in various industries, such as</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Automotive
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Communications
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    CPG/Retail
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Financial Services
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Healthcare
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Higher Education
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Life Sciences
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Manufacturing
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Non-Profit
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Media & Public Sector
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Significance of Salesforce Integration Cloud Service Providers.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75 bg-fff4f8">
        <div className="container">
          <div className="section-title">
            <h5>Collaborating with us for Salesforce Integration Cloud Implementation brings many benefits to your organization. We ensure that our clients are never left alone throughout the implementation process and beyond. Let us discuss why we are the best Salesforce Integration Cloud Service Providers:</h5>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Technical Expertise.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>Technical Expertise</a>
                </h3>
                <p style={{ textAlign: "justify" }}>We deploy the most talented Salesforce-Certified workforce on the job. Our team of Salesforce experts understands your business-specific requirements and customizes the solution to complement your business objectives. This technical expertise helps you get the integration solution in an ideal way for your routine business operations.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Extensive Domain Experience.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>Extensive Domain Experience</a>
                </h3>
                <p style={{ textAlign: "justify" }}>We create custom apps to incorporate Einstein features using the Einstein service platform during the Salesforce Integration Cloud development process. As Salesforce Integration Cloud Service Providers, we have worked with hundreds of clients for over a decade. Thus, we possess rich experience in developing integration cloud computing solutions adhering to your requirements.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="In-Time Implementation.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>In-Time Implementation</a>
                </h3>
                <p style={{ textAlign: "justify" }}>We always respect the mutually agreed project schedule and execute Salesforce Integration Cloud Implementation well in time. Thus, we let you enjoy the features and benefits of this world-class integration solution faster, considering all technicalities involved.
                </p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Prompt Technical Support.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>Prompt Technical Support</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Our Salesforce Integration Cloud Service Support Team attends your service calls proactively to resolve your technical difficulties regarding the solution as quickly as possible. Rely on us for a prompt and technically sound support team to let you use the solution uninterruptedly.</p>
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
                <h3>Upgrade Your Workforce Through Salesforce Trainings</h3>
                <p style={{ textAlign: "justify" }}>Integration Cloud Trainings is our specialty. We offer Salesforce Trainings to your key personnel and to the professionals willing to upgrade their Salesforce skills in the following modules:</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Integration Cloud Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Field Services Lightning Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Platform Developer I
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified System Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Application Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Pardot Consultant Pardot Specialist
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Certified Technical Architect
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Mobile Solutions Architecture Designer
                  </li>
                </ul>
                <p style={{ marginTop: '15px' }}>In this way, SPM Global technologies serve as the one-stop solution providers for your Salesforce Integration Cloud Implementation, Technical Support, and Training needs.</p>
                <p style={{ textAlign: "justify" }}>Contact us today to discuss your Salesforce Integration Cloud requirements and let us come up with proven integration solutions, training programs, and Integration Cloud Support Services as per your requirements.</p>
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
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=salesforce-integration-cloud&populate=*`
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