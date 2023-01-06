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





const questionsAnswers = [
  {
    question: "Q1: What is Salesforce Commerce Cloud? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}> Salesforce Commerce Cloud is a cloud-based e-commerce SaaS solution designed for various sizes of businesses. The cloud-based solution is ideal for e-commerce businesses. It keeps on evolving and thus offers the best-in-the-class features to the users.</p>

  },
  {
    question: "Q2: How to choose the right Salesforce Commerce Cloud Service Providers? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>While choosing Commerce Cloud Third Party Vendor, consider the following factors: 
        <li><strong>1.</strong> Implementation experience </li>
        <li><strong>2.</strong> Product expertise of the firm </li>
        <li><strong>3.</strong> Customization capabilities </li>
        <li><strong>4.</strong> Training programs for clients and individuals  </li>
        <li><strong>5.</strong>Prompt technical support services from certified professionals.  </li>
      </p>
  },
  {
    question: "Q3: What are the benefits of working with Commerce Cloud Third-Party Vendor? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}> It would be a wise strategic decision to work with a third-party vendor for Salesforce commerce cloud implementation. It can bring many benefits such as: 
      <li><strong>1.</strong> Third-party vendors offer Commerce Cloud Managed Services considering the client’s business-specific requirements.  </li>
      <li><strong>2.</strong> They possess a highly trained and Salesforce-certified workforce.  </li>
      <li><strong>3.</strong> They offer Salesforce trainings to your staff to make the most effective use of the SaaS solution.  </li>
      <li><strong>4.</strong> Their Commerce Cloud Support Services help you get your technical issues resolved quickly to avoid downtime.   </li>
      <li><strong>5.</strong> They implement the latest features like Commerce cloud Einstein and commerce cloud lightning to enable you to take complete advantage of the cloud-based solution.   </li>
      </p>
      

  },
  {
    question: "Q4: Why are Salesforce Trainings essential? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>For individuals who wish to boost their career growth by being well-versed in Salesforce commerce cloud and businesses that want to take their e-commerce sales to the next level, Salesforce training is essential. The commerce could trainings offered by reputed commerce cloud consultant enhance your technical know-how about the SaaS solution and help your company achieve more.</p>
  },
  {
    question: "Q5: How does Commerce Cloud Support Services help your businesses? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Though the Salesforce Commerce Cloud Service Providers customize and implement the solution as per your business’s needs, there may be some technical difficulties during the operations. Commerce Cloud Support Services ensure faster turnarounds after a service query. You can get your service issues resolved at the earliest. Thus, you can save on your valuable time and continue with your core business activities. </p>
  },
  
];




const Services = ({ seo }) => {
  
  return (
    <>
      <PageSeo seo={seo} pageName = "Salesforce Commerce Cloud" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Salesforce Commerce Cloud" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
              <h3 className="nunito-font">
              Introduction
                </h3>
                <p style={{ textAlign: "justify" }}>Online shopping has been an emerging trend in the modern digital era due to the enhanced user experience. E-commerce has seen tremendous growth in the last decade, and the transition may reach new heights soon. Salesforce commerce cloud (previously known as ‘Demandware’) helps your business synchronize all your operations to achieve better productivity and ultimately better profitability.</p>
                <p style={{ textAlign: "justify" }}>We offer Commerce cloud in Salesforce customization, deployment, training, and support services to the future leaders of the e-commerce world. The solution helps you scale your e-commerce business, as you can widen your product range, and service area and handle complicated logistics and after-sales issues in a streamlined manner. You have the Salesforce advantage! This is based on a world-renowned cloud-based platform that most people know about. We are among the most sought-after Commerce Cloud Vendors, offering a one-stop solution for your Salesforce Commerce Cloud implementation needs.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="online shopping.jpg" data={seo} />
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
                <h6>Running an e-commerce store is a tedious task, as your organization must concentrate on various fronts simultaneously, such as:</h6>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Creating and adding the product base on your online platform
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Optimizing the content on your website to rank higher on the search engines
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Managing inventories at the stock locations
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Smooth procurement to maintain stocks, and
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Uninterrupted delivery network to reach the products to the doorstep of the buyers
                  </li>
                  <p style={{ textAlign: "justify" }}>If you are still managing all these operations conventionally, you are missing various business development opportunities. Joining hands with Commerce Cloud Third-Party Vendor at the right time can accelerate your business. </p>
                  <p style={{ textAlign: "justify" }}>We offer Commerce Cloud Managed Services to the B2C and B2B clientele across the globe. We take pride in serving our clients globally, from various sectors, including manufacturing, CPG/Retail, communication, higher education, automotive, financial services, life sciences, media, public sector organizations, and non-profits.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font"></h2>
            <span className="sub-title purple-color">Let us take a glance at the positive influences the Salesforce eCommerce solution can bring to your businesses:</span>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="benefits of salesforce commerce cloud1.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Benefits of Salesforce Commerce Cloud
                </h5>
                <p style={{ textAlign: "justify" }}>We are one of the globally appreciated Commerce Cloud Consultants helping you digitalize your businesses. It is vital to know what your business gets by adopting Salesforce Commerce Cloud before deciding to embrace it. The following are some significant benefits of the SaaS e-commerce solution:</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Significance of salesforce commerce cloud services providers.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Significance of Salesforce Commerce Cloud Service Providers
                </h5>
                <p style={{ textAlign: "justify" }}>Working with the most experienced and reputed Commerce Cloud Third Party Vendor is a crucial strategic decision. This collaboration drives the success of your business in many ways:</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="customization1.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  Customization
                </h5>
                <p style={{ textAlign: "justify" }}>We work as Commerce Cloud Third Party Vendor, and our Salesforce experts specialize in customizing the SaaS solution adhering to your business and operations-specific requirements. Customization helps you make the most effective use of the features and bring all your operations on the same page. You can have Salesforce Chatter as an additional feature. This is a social platform for effective communication for Salesforce customers. We deploy it for you on demand.</p>
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
                <h3 className="nunito-font">Training</h3>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies takes pride in offering Salesforce Training to our clients from across the globe and individuals willing to make a career in Salesforce Cloud. We provide many certification programs, including</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Commerce Cloud Consultant
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
                    Certified Technical Architect
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
                    Pardot Specialist
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Salesforce Commerce Cloud Lightning
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Mobile Solutions Architecture Designer
                  </li>
                </ul>
                <p style={{ marginTop: '25px' }}> you industry-ready and help you achieve new heights in your career. Apart from that, we train the select workforce of our clients during the implementation of the Salesforce commerce cloud.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Training.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="What is salesforce commerce cloud.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>What is Salesforce Commerce Cloud?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Salesforce Commerce Cloud is a cloud-based e-commerce SaaS solution designed for various sizes of businesses. The cloud-based solution is ideal for e-commerce businesses. It keeps on evolving and thus offers the best-in-the-class features to the users.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Salaesforce commerce cloud services providers.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>How to choose the right Salesforce Commerce Cloud Service Providers?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>When choosing Commerce Cloud Third Party Vendor, consider the following factors:</p>
                
                    <li>Implementation experience</li>
                    <li>Product expertise of the firm</li>
                    <li>Customization capabilities</li>
                    <li>Training programs for clients and individuals</li>
                    <li>Prompt technical support services from certified professionals.</li>
                
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="benefits of working with Commerce Cloud Third-Party Vendor.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>What are the benefits of working with Commerce Cloud Third-Party Vendor?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>It would be a wise strategic decision to work with a third-party vendor for Salesforce commerce cloud implementation. It can bring many benefits such as:</p>
                    <li>Third-party vendors offer Commerce Cloud Managed Services considering the client’s business-specific requirements.</li>
                    <li>They possess a highly trained and Salesforce-certified workforce.</li>
                    <li>They offer Salesforce trainings to your staff to make the most effective use of the SaaS solution.</li>
                    <li>Their Commerce Cloud Support Services help you get your technical issues resolved quickly to avoid downtime.</li>
                    <li>They implement the latest features like Commerce cloud Einstein and commerce cloud lightning to enable you to take complete advantage of the cloud-based solution.</li>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Why are salesforce training essential.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>Why are Salesforce Trainings essential?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>For individuals who wish to boost their career growth by being well-versed in Salesforce commerce cloud and businesses that want to take their e-commerce sales to the next level, Salesforce training is essential. The commerce could trainings offered by reputed commerce cloud consultants enhance your technical know-how about the SaaS solution and help your company achieve more.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Commerce Cloud Support Services help your businesses.jpg" data={seo} />

                </div>
                <h3 className="nunito-font">
                  <a>How do Commerce Cloud Support Services help your businesses?</a>
                </h3>
                <p style={{ textAlign: "justify" }}>Though the Salesforce Commerce Cloud Service Providers customize and implement the solution as per your business’s needs, there may be some technical difficulties during the operations. Commerce Cloud Support Services ensure faster turnarounds after a service query. You can get your service issues resolved at the earliest. Thus, you can save on your valuable time and continue with your core business activities.
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
                <h3 className="nunito-font">Summary</h3>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies are leading Salesforce Commerce Cloud Service Providers, offering Commerce Cloud Managed Services to the global clientele across various sectors. With extensive experience in Salesforce solutions and a successful track record of developing, customizing, deploying, and offering training and support services for Salesforce Cloud solutions, we are a trusted partner for organizations of different sizes.</p>
                <p style={{ textAlign: "justify" }}>Our team specializes in customizing the SaaS solution as per your e-commerce business needs and deploys the well-developed cloud-based solution to help you improve your operational productivity. Being a globally recognized Commerce Could Consultant, we have worked with hundreds of clients from across various industries so far. </p>
                <p style={{ textAlign: "justify" }}>Our Salesforce Trainings for our clients help them adopt the best e-commerce cloud solution effortlessly. Apart from that, our Commerce Cloud Trainings for professionals help them master this solution and shoulder responsibilities at different levels.</p>
                <p style={{ textAlign: "justify" }}>We are Salesforce Commerce Cloud Service Providers and also serve as Commerce Cloud Consultants proudly. Choose us as your Salesforce Commerce Cloud implementation partner and take your e-commerce platform to the new heights of success.</p>
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

      {/* New Content  */}
      <div className="services-area with-top-border pt-100 pb-75">
      <div className="services-area with-top-border pt-100 pb-75 bg-13965f">
        <div className="container">
        <div className="section-title">
            <h2 className="nunito-font">Benefits of Salesforce Commerce Cloud </h2>
            <p style={{ textAlign: "justify" }}>We are one of the globally appreciated Commerce Cloud Consultants helping you digitalizing your businesses. It is vital to know what your business gets by adopting Salesforce Commerce Cloud before deciding to embrace it. The following are some significant benefits of the SaaS e-commerce solution:</p>

          </div>
          <div className="row justify-content-center justify-content-center">

      <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <Image src={dummyimg} alt="" />
                

                </div>
                <h3 className="nunito-font">
                  <a>Makes the technical learning curve manageable </a>
                </h3>
                <p style={{ textAlign: "justify" }}>Commerce cloud in salesforce offers e-commerce as a SaaS solution. Thus, your organization can focus on scaling your business by boosting your sales. Your workforce would not require learning highly technical concepts and operations. We offer Commerce Cloud Trainings to educate your workforce regarding the functions. 
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
                <Image src={dummyimg} alt="" />
                

                </div>
                <h3 className="nunito-font">
                  <a>Adaptable to any size of organization</a>
                </h3>
                <p style={{ textAlign: "justify" }}>For a small or medium-sized business with less than 200 employees, a commercial establishment with up to 999 employees, or an enterprise with a much larger workforce, Salesforce Commerce Cloud Service Providers customize the solution according to your business-specific needs. If your organization procures in large amounts online, the Salesforce Commerce B2B allows you to create user-friendly e-commerce storefronts. 
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
                <Image src={dummyimg} alt="" />
                

                </div>
                <h3 className="nunito-font">
                
                  <a>Always the best features. </a>
                </h3>
                <p style={{ textAlign: "justify" }}>Salesforce e-commerce constantly evolves to refine its features to suit the operational needs of the clientele. Thus, you would always have the best of its features once you adopt the solution by collaborating with Commerce Cloud Managed Services. 
                </p>

                <p style={{ textAlign: "justify" }}>The Salesforce Customer Success Platform offers incredible solutions for Commerce B2C customers. Being an Independent Software Vendor (ISV) we specialize in developing application-specific software to function on Salesforce Cloud platform. 
                </p>

                <p style={{ textAlign: "justify" }}>With ISVforce partnership, we bring you the best of business applications through AppExchange, which is the leading enterprise cloud marketplace offering the best apps ready-to-install.  
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
                <Image src={dummyimg} alt="" />

                </div>
                <h3 className="nunito-font">
                  <a>Highly scalable </a>
                </h3>
                <p style={{ textAlign: "justify" }}>With AI-powered merchandising tools like Commerce Cloud Einstein, you get a status dashboard to schedule and run the site catalog and order feeds. Thus, introducing a new range of products and handling plenty of orders through your e-commerce portal with ease is practically possible
                </p>

                <p style={{ textAlign: "justify" }}>We make effective use of MuleSoft for integration of unified commerce data from various systems. That makes your launch the market surprisingly faster. These features allow you to scale your business conveniently. 
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
                <Image src={dummyimg} alt="" />

                </div>
                <h3 className="nunito-font">
                  <a>Seamless integration and upgrades  </a>
                </h3>
                <p style={{ textAlign: "justify" }}>The B2B features, like Salesforce Commerce cloud lightning, allow the storefront managers to get to the market swiftly. Your storefront managers can manage products, catalogs, pricing, product categories, promotions, and the search effectively. We serve as Commerce Cloud Consultant to let you integrate various business apps and tools and upgrade your platform effortlessly. 

 
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
                <Image src={dummyimg} alt="" />
                

                </div>
                <h3 className="nunito-font">
                  <a>Growth-oriented </a>
                </h3>
                <p style={{ textAlign: "justify" }}>As Salesforce commerce cloud is now a part of the Salesforce family, you can easily integrate the SaaS solution with various CRM and marketing SaaS solutions. The platform allows you to grow your sales and keeps evolving to offer you the best user experience by accommodating the latest developments in the e-commerce arena. 

  
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
                <Image src={dummyimg} alt="" />
                

                </div>
                <h3 className="nunito-font">
                  <a>Unique Licensing model </a>
                </h3>
                <p style={{ textAlign: "justify" }}>The Commerce cloud in the salesforce does not attract any significant upfront licensing costs. Salesforce works on a ‘shared profit’ model. Thus, the business owners can adhere to this model, where the financial growth of the platform directly relies on the clients’ success.
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
                <Image src={dummyimg} alt="" />
                

                </div>
                <h3 className="nunito-font">
                  <a>Service Support  </a>
                </h3>
                <p style={{ textAlign: "justify" }}>We never leave you alone and offer Commerce Cloud Support Services to tackle the technical difficulties you face at any point in time. Our prompt support team would be happy to help you and resolve your challenges at the earliest.
                </p>

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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=salesforce-commerce-cloud&populate=*`
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