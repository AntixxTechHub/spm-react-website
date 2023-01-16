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

import goalImg from "@/public/images/goal.png";
import manWithSon from "@/public/images/man-with-son.png";
import bmc from "@/public/images/icon/bmc.png";
import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";

const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "Logistics Software" />
      <PageTitle page="Logistics Software" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Logistics Software" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>SPM Global Technologies 

Trusted Partner for the Best Logistics Software Solutions in India </h3>
                <p style={{ textAlign: "justify" }}>We deliver the most reliable logistics software solutions to help you track the vehicles’ locations’, fuel consumption, condition, driver’s behaviour, travel time, and other crucial parameters that are significant for your business. </p>
                <p style={{ textAlign: "justify" }}>Our exclusive logistics applications aim to reduce your operational costs, optimise the upkeep of your vehicles, and maximise your driver’s safety. We provide a single dashboard to provide a holistic, centralised view of your logistics operations. </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
               

              <MediaImage name="Logistics  Software.png" data={seo} />
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
                
              <MediaImage name="Logistics  Application Development.png" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                Consulting for Logistics Software 
                </h3>
                <p style={{ textAlign: "justify" }}>• We help you develop a vigorous and scalable logistics software by.Need analysis and elaborating on ideation. Assessment of app architecture and design.Suggesting the best-suited tech stack. Design or assess user experience.    	.</p>
                <h3 className="nunito-font">
                Logistics Application Development 
                </h3>
                <p style={{ textAlign: "justify" }}>•We take up app development to ensure better ROI. <li>Business Analysis  </li>
                            <li>Design user experience and user interface (UX & UI)    </li>
                            <li>Design app architecture and tracking algorithm   </li>
                            <li>App development   </li>
                             <li>Testing & QA  </li>
                             <li> Technical support and assessment </li>

 </p>
                <p style={{ textAlign: "justify" }}>•	We implement an IT service management platform to help you orchestrate your workflow, and organize your development, testing, and release processes. You can effectively standardize your IT procedures by using the features of this platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          

          <h3 className="nunito-font">
                  <a><center>Logistics Software Solutions We Offer </center></a>
                </h3>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Vehicle Tracking.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Vehicle Tracking </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
        <li>Dashboard to display vehicle availability</li>
        <li>Real-time vehicle tracking </li>
        <li>	Fuel consumption tracking</li>
        <li>	Driver’s behaviour tracking – including driving speed, unwanted stoppage, and travel time. </li>
        
      </p>

              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Route Optimisation.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Route Optimisation </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
        <li>Route schedule based on priorities, deadlines, and distances. </li>
        <li>Route planning and adjustment based on optimum distance and obstacles due to accidents.  </li>
        <li>	Alerts to logistics managers on entry or exit of a vehicle from a set geographical area. </li>
        
        
      </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Vehicle Maintenance.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Vehicle Maintenance </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
        <li>Maintenance scheduling and alerts  </li>
        <li>Break-down alerts   </li>
        <li>Repair orders tracking  </li>
        <li>Information management for vehicle warranty and insurance   </li>
        <li>Inventory management for vehicle spares   </li>
        
        
      </p>


              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two"style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Dispatch Management.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Dispatch Management </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
        <li>Delivery schedule and task allocation  </li>
        <li>Route optimisation    </li>
        <li>Tracking vehicle service history   </li>
        <li>Automated assignment of vehicles   </li>
        <li>Effective internal communication between the call centre and drivers</li>
        <li>Real-time trip tracking  </li>
        <li>Documents management    </li>
      </p>
              </div>
            </div>


            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Logistics Expense Management.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Logistics Expense Management </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
                 <li>Budgeting for vehicle maintenance and expenses  </li>
                 <li>Fuel consumption optimisation    </li>
                 <li>Notifications for vehicle warranty and insurance expiry    </li>
        
                </p>
              </div>
            </div>


            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two"style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Accident Detection & Claims.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Accident Detection & Claims </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
                  <li>Automated vehicle collision notification </li>
                  <li>Accident alerts to logistics managers   </li>
                  <li>Vehicle toeing service management    </li>
                  <li>Vehicle repair management  </li>
        
                </p>


              </div>


              
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Third-Party Logistics.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Third-Party Logistics  </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
                 <li>Visual planning and simulation   </li>
                 <li>Alerts and Notifications    </li>
                 <li>Schedule management     </li>
                 <li>Ecosystem Integrations to manage dataflow     </li>
                 <li>Planning for better efficiency      </li>
        
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '500px' }}>
                <div className="icon">
                <MediaImage name="Courier, eCommerce Delivery Service.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                  <a>Courier, eCommerce Delivery Service  </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
                 
                 <li>Rider Management     </li>
                 <li>Franchise Management    </li>
                 <li>Returns Management     </li>
                 <li>Liability Management    </li>
                 <li>Cash on Delivery Management     </li>
        
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="services-area pt-100 bg-fff4f8  pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">
            Service Options We Offer 
            </h2>
            <p>Along with these solutions, we also design, develop, and implement custom logistics software solutions exclusively as per your business-specific needs.  </p>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Logistics Application Assessment.png" data={seo} />
                </div>
              
                <h5>Logistics Application Assessment   </h5>
                <ul className="overview-list">
                  <li>•	We assess your current logistics software or app .</li>
                  <li>•	We suggest functional changes and design new modules to add value.</li>
                  <li>•	We suggest and add features to the app for better outcomes.</li>
                  

                </ul>



                
              </div>
            </div>


            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="For Fleet Owners.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>For Fleet Owners </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>
                 
                 <li>Achieving higher efficiency amid low margin and increasing fuel expenses.      </li>
                 <li>Poor visibility on logistics operations.     </li>
                 <li>Stringent compliance norms to meet government and industry-specific regulations.      </li>
                 <li>Proper planning for vehicle procurement and maintenance.    </li>
                 <li>Accidents and improper driver safety causing financial losses.    </li>
        
                </p>
                
              </div>
            </div>

            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="For Logistics Service Providers.png" data={seo} />
                
                 
                </div>
                <h3 className="nunito-font">
                  <a>For Logistics Service Providers </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>
                 
                 <li>A custom functionality in your existing product causing functional difficulties.      </li>
                 <li>Cost on your product goes with your customer base.      </li>
                 <li>Complex user interface and code-level technical issues hampering customer satisfaction.      </li>
                 
        
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
                <MediaImage name="Our Logistics Software Solutions Suit Various Vehicles.png" data={seo} />
                  
                </div>
                <h3 className="nunito-font">
                  <a>Our Logistics Software Solutions Suit Various Vehicles </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>If your company is clear about implementing a particular ITSM platform; however, lacks the technical expertise to make the most of the features, we customise the ITSM platform as per your needs.</p>
                <ul className="overview-list">
                  <li>•	Automobiles (Commercial and Private Vehicles) .</li>
                  <li>•	Aviation Machinery (Cargo and Passenger Planes) .</li>
                  <li>•	Cargo Ships.</li>
                  <li>•	Rail Goods Wagons.</li>
                  <li>•	Non-powered Components  

(Gearboxes, Generators, Containers, Trailers, Tanks, etc.) .</li>
                  
                </ul>
                
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Logistics Software Development & Consulting Partner.png" data={seo} />

                </div>
                <h3>
                  <a>•	Why Choose Us as Your Logistics Software Development & Consulting Partner? </a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our ITSM experts examine your IT infrastructure for security, productivity, cost-effectiveness, and many other parameters. They find out the flaws in your IT Service Management process and eliminate the root causes of such irregularities through the best solutions. We execute a multi-dimensional approach to improve your ITSM:</p>
                <ul className="overview-list">
                  <li>•SPM Global Technologies have extensive experience and technical expertise in building and deploying the best logistics software solutions. </li>
                  <li>•	Our logistics software targets a reduction in operational and fuel costs.</li>
                  <li>•We provide an excellent digital solution to visualise tracking, fleet, and expenses .</li>
                  <li>•	Adopting our logistics software helps increase revenue and customer satisfaction. </li>
                  <li>•Our logistics software reduces accident rates and increases driver retention.  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              

              <br></br>
              <br></br>
              <h4>Talk to Us Today to Start Working on Your Logistics Solution! </h4>
              <p>Please fill up the form below or contact us through any available mode of communication to specify your logistics software requirements. Our experts will be happy to initiate a discussion to understand your business goals and technological aspects and let you know our best solutions.</p>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Start Working on Your Logistics Solution.png" data={seo} />

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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=logistics-software&populate=*`
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