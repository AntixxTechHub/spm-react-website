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
    question: "Q1: What is Salesforce Community Cloud?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: Salesforce Community Cloud is a social network designed by Salesforce. It enables users to form their communities online. The users can bring together their employees, partners, and customers on a dashboard. This ease of access helps communicate integrating various business apps. Users can conduct meetings and share content in different forms. 

        
      </p>

  },
  {
    question: "Q2: Why is working with Community Cloud Third-Party Vendor essential?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Consider the following factors while choosing Salesforce Integration Cloud Service.
         <li>• Understand the communication needs of clients, </li>
        <li>• Customize the community cloud accordingly, </li>
        <li>• Deploy the solution, </li>
        <li>• Offer Salesforce Trainings to the staff, and   </li>
        <li>• Render Community Cloud Support Services.     </li>


      </p>
  },
  {
    question: "Q3:  How to choose the right Salesforce Community Cloud Service Providers?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Consider the following factors while choosing your Salesforce Community Cloud Implementation Partner: 
        <li>1. Experience in developing, customizing, and deploying Salesforce Community Cloud, </li>
        <li>2. Product expertise,  </li>
        <li>3. Technical capabilities to offer Community Cloud Trainings,  </li>
        <li>4. Prompt Community Cloud Support Services, </li>
        <li>5. Competitive charges for implementation in time and further service support.  </li>


      </p>
  },
  {
    question: "Q4: How can Salesforce Community Cloud help in managing workflow?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Organizations can make effective use of Salesforce Commerce Cloud. They can set up their online communities. Enterprises can bring their workforce, partners, associates, and customers on one social network. The managers can assign tasks, discuss a project, make and rectify decisions<b> This tool is useful to: </b>. 
       <li>•Chat, </li>
        <li>• Share files on cloud memory. </li>
        <li>• Share files on cloud memory. </li>
        <li>• Conduct online calls and conferences. </li>
      </p>
  },
  {
    question: "Q5: How can Community Cloud enhance customer experience? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Community Cloud in Salesforce brings your customers to a well-designed social platform. The customers can give their feedback and reviews. They can express themselves about the products and services they buy.  
       <p className="w-100" style={{ textAlign: "justify" }}>Along with this, customers can also use this platform to raise their service queries. The organizations can use this platform for:   </p>
        <li>• Branding,   </li>
        <li>• Marketing,   </li>
        <li>• Getting referrals from existing customers,   </li>
        <li>• Using customer feedback for product development, and   </li>
        <li>• Offering service backup as a response to the service queries. </li>
        <br></br>
        <li> Thus, Salesforce Community Cloud enhances the customer experience.  </li>
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
        title="Salesforce Community Cloud" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
              <h3 className="nunito-font">
                  Introduction
                </h3>
                <p style={{ textAlign: "justify" }}>Modern-day businesses need to equip themselves with technology-driven tools for effective internal communication. Better customer relationship management is another challenge. Community Cloud Managed Services would be the best solution. The solution helps your business bring all crucial stakeholders on a single platform.</p>
                <p style={{ textAlign: "justify" }}> Building an online community opens up many growth possibilities today. Investing in the enablement of communication tools is a must. It boosts the productivity of your business. Your key personnel can keep track of progress and assign tasks to the right teams. They can also attend to customer service queries right away.</p>
                <p style={{ textAlign: "justify" }}>We work with hundreds of clients worldwide as a Community Cloud Third-Party Vendor. We put in place the world-class Salesforce Cloud-based communication tool. The tool helps our clients build their branded online communities. As globally acclaimed Community Cloud Service Providers, we provide Salesforce community cloud implementation services, community cloud support services, and Salesforce community cloud trainings to our clients.</p>
                <p style={{ textAlign: "justify" }}>We take you through the entire journey of transformation promptly as your preferred community cloud consultant. Our Salesforce community cloud trainings upgrade the skills of your IT team, and community cloud support services ensure that any technical issues during the operation will be resolved at the earliest.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="salesforce-community-cloud.jpg" data={seo} />
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
              <MediaImage name="About the solution Managing inventories at the stock locations.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                  About the Solution
                </h3>
                <p style={{ textAlign: "justify" }}>Salesforce Community Cloud is a well-developed social network offered by Salesforce. We are a Certified Community Cloud Consultant. We deploy this flexible communication platform for their businesses.</p>
                <p style={{ textAlign: "justify" }}>Community Cloud in Salesforce generates a communication platform for our clients’ organizations. Organizations can connect with their employees, associates, and customers also. Salesforce community cloud serves as your effective mode of communication with your community and improves customer experience and service efficiency. Choosing us as your Salesforce community cloud third-party vendor will help you enjoy the benefits of this solution in the long run.</p>
                <p style={{ textAlign: "justify" }}>The solution deploys Chatter, a social platform CRM. The users can chat, screen share, share images, videos, and much more. You can start the conversations on B2B or B2C levels. The tool helps organizations make decisions faster. Companies can serve their customers better.</p>
                <p style={{ textAlign: "justify" }}>SPM Global serves as your trusted Salesforce community cloud service provider. During Salesforce community cloud implementation, we understand your business-specific needs and customize the solution accordingly. We also provide Salesforce community cloud training to the key personnel of your IT team. That ensures effective use of the solution for your business. Along with that, we remain with you through our Salesforce community cloud-managed services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Features and Benefits of Salesforce Community Cloud</h2>
            <p style={{ textAlign: "justify" }}>Salesforce Community Cloud is a futuristic social platform for companies. It lets organizations develop their online branded communities. Our community cloud-managed services keep your business equipped with the cutting-edge technology of the Salesforce community cloud.</p>
            <p style={{ textAlign: "justify" }}>The Community Cloud Einstein blends community cloud computing and Artificial Intelligence (AI). The solution offers enormous features and benefits. As your preferred community cloud third-party vendor, we ensure that your business will utilize the features and get the benefits of community cloud in Salesforce to the fullest. Let us find out some significant aspects:</p>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Accelerated-development-of-enterprise-solutions.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Accelerated Development of Enterprise Solutions
                </h5>
                <p style={{ textAlign: "justify" }}>We serve as the Community Cloud Vendors. We help our small to medium business clients leverage technology-driven features like AppExchange. This is a marketplace designed for entrepreneurs and Independent Software Vendors (ISVs). AppExchange helps bring marketing, enablement, and product teams to work collectively. Thus, our clients can deliver world-class enterprise solutions to their customers across the globe.</p>
                <p style={{ textAlign: "justify" }}>Being an experienced community cloud third-party vendor, we know the technicalities in Salesforce community cloud implementation. We ensure a cost-effective, customized, and timely implementation of community cloud in Salesforce.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Enhanced Productivity (1).png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Enhanced Customer Experience
                </h5>
                <p style={{ textAlign: "justify" }}>We are among the most reliable Community Cloud Vendors. We deploy a platform to let you build your branded online community. As you can bring your customers on this platform, you can get their feedback instantly. Apart from that, your customers can send their service queries to your service team.</p>
                <p style={{ textAlign: "justify" }}>It helps you resolve your customers’ queries and service issues quickly. Thus, Salesforce Community Cloud helps enhance the customer experience. As community cloud service providers, our community cloud managed services and community cloud support services ensure that your business effectively communicates with your customers uninterruptedly. Our Salesforce community cloud training is designed to enhance the proficiency of your sales, marketing, and IT teams to use the features of this communication platform tactfully to improve the overall customer experience.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Effortless-Data-synchronization.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Effortless Data Synchronization
                </h5>
                <p style={{ textAlign: "justify" }}>Mulesoft’s Anypoint Platform helps organizations synchronize data swiftly. They can gather information between Salesforce Cloud, SAP, and various other systems. This synchronization enhances the user experience. This feature helps improve the productivity of organizations of almost any size.</p>
                <p style={{ textAlign: "justify" }}><strong>Data Synchronization helps in many ways, such as:</strong></p>
                <li>Delivering integrations faster</li>
                <li>Boosts sales productivity</li>
                <li>Effective Communication for Powerful App Development</li>
                <li>Makes the order provisioning mechanism surprisingly fast</li>
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
                <p style={{ textAlign: "justify" }}>Salesforce developed Platform – Lightning. The platform enables companies to build world-class apps on the top of Salesforce. Similarly, Platform – IoT allows gathering data through various sources. The data from internet-connected machines and devices gets on Salesforce Cloud.</p>
                <p style={{ textAlign: "justify" }}> As a preferred Salesforce community cloud consultant, we prioritize features that enhance your operational efficiency, during Salesforce community cloud implementation. Then again, we make your It team and other key personnel well-versed in utilizing these features during Salesforce community cloud training.</p>
                <p style={{ textAlign: "justify" }}> We have earned the reputation of being the pioneer in this industry as Salesforce community cloud service providers. We appoint the best talents and assign the task of Salesforce community cloud implementation to our Salesforce-Certified IT professionals. Our team of Salesforce community cloud experts conduct Salesforce community cloud managed services and community cloud support services for our global clientele. You can rest assured that your digital transformation journey would be guided by the industry experts.</p>
                <p style={{ textAlign: "justify" }}>We are a Certified Community Cloud Vendor. We deploy the customized solution coupled with the best of its features. Thus, your business communicates effectively. Ultimately, your app development process and customer satisfaction speed up. This added productivity takes your success to new levels.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Salesforce developed platform lightning.jpg" data={seo} />
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
              <MediaImage name="Salesforce community cloud implementationmakes internal communication.png" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h5>Salesforce Community Cloud Implementation makes internal communication easy for your business. You may be:</h5>
                <p style={{ textAlign: "justify" }}>Salesforce Community Cloud Implementation makes internal communication easy for your business. You may be:</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    A small to medium business with less than 200 employees,
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    A commercial establishment with up to 999 employees, or
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    A corporate enterprise having a workforce of over 1000.
                  </li>
                  <h6>Workflow monitoring is a challenging task for your managers.</h6>
                  <p style={{ textAlign: "justify" }}>We are a globally recognized Salesforce Community Cloud Consultant. We help your employees communicate by integrating various business apps. Your managers can track the progress of every project and task. Moreover, they can analyze the pain points. Thus, managers can make quick strategic decisions to keep the operations on track.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border bg-fff4f8 pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h3>Why Choose Us as Your Implementation Partner?</h3>
            <span>Choosing the best implementation, training, and support service partner brings many benefits. SPM Global Technologies takes pride in offering Community Cloud Managed Services. Here are some of the factors that make us better than others:</span>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="The Best-in-Class Implementation.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>The Best-in-Class Implementation</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Our global clientele includes organizations of various sizes and natures. We offer the most advanced Salesforce Community Cloud Implementation Services. We work with any size and nature of businesses, such as:
                </p>
                <li>
                  Small to medium size companies
                </li>
                <li>
                  Commercial establishments, and
                </li>
                <li>
                  Corporate enterprises
                </li>
                <h6 style={{ marginTop: '10px' }}>Our clients belong to different sectors, including but not limited to:</h6>
                <li>
                  Non-Profit-Profit
                </li>
                <li>
                  Automotive
                </li>
                <li>
                  Life Sciences
                </li>
                <li>
                  Communications
                </li>
                <li>
                  Manufacturing
                </li>
                <li>
                  CPG/Retail
                </li>
                <li>
                  Media
                </li>
                <li>
                  Healthcare
                </li>
                <li>
                  Public Sector
                </li>
                <li>
                  Higher Education
                </li>
                <p style={{ marginTop: '15px' }}>We offer implementation services to IT companies, Enterprise Solutions, and App Developers.</p>

              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Prompt Support Services.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>Prompt Support Services</a>
                </h3>
                <p style={{ textAlign: "justify" }}>We offer Salesforce Training at different levels. We intend to leverage our product expertise to our clients and professionals. that wish to master Salesforce solutions to shoulder crucial responsibilities across various industries.
                  Our training modules include
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
                <MediaImage name="Comprehensive training programs.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>Comprehensive Training Programs</a>
                </h3>
                <p style={{ textAlign: "justify" }}>We offer Community Cloud Support Services through our team of Salesforce-Certified IT experts. Our experts are well-versed with technical support attributes. Thus, we never leave our clients alone. Our experts resolve their technical difficulties related to the solution.</p>
                <p style={{ textAlign: "justify" }}> Our Community Cloud Support Services team would always be happy to help you. We answer your queries and address your technical obstacles every time. Thus, we ensure that the solution works for you with the least possible downtime.
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
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Community Cloud Consultant
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
                    Pardot Consultant
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Pardot Specialist
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
                  <p style={{ textAlign: "justify" }}>Our Community Cloud Training upgrades the skill sets of the trainees. Salesforce has been a popular platform across various domains. We help organizations have an industry-ready workforce. Trained professionals bring out the technological benefits of this solution.</p>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Field services lightening consultant.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Get in Touch with Us</h2>
            <p style={{ textAlign: "justify" }}>Schedule a call back or a detailed discussion with our experts. You can contact us through the details given below or by filling up our inquiry form. Our Customer Support Team would get back to you to resolve your queries soon.</p>
            <p style={{ textAlign: "justify" }}>Choose us as your Community Cloud Consultant to get Salesforce Community Cloud. We deploy the solution as per your business-specific needs.</p>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=salesforce-community-cloud&populate=*`
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