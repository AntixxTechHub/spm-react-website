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
      <PageTitle page="Mobile Apps" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Mobile Apps" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>One of the Best Mobile App Development Companies in the World!</h3>
                <p style={{ textAlign: "justify" }}>We build world-class mobile apps for different audiences, devices, and digital platforms. We have a successful track record of building custom mobile apps considering clients’ business-specific preferences and requirements.</p>
                <h3>We Are the Top Mobile Application Development Company</h3>
                <p style={{ textAlign: "justify" }}>The ever-growing number of smartphone users is increasing the significance of user-friendly mobile apps.  Through our incredible and well-designed mobile apps, we help you establish a strong connection with your target audience. We are a custom mobile application development company delivering the best mobile apps that serve as an alternative to web solutions and go well with them.</p>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies develop mobile apps for Android and iOS platforms with excellent user interfaces and user experience design. We provide robust backends and use the most secure coding to help you win consistent business. Your customers will love these mobile apps and will prefer using them again and again!</p>
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
            <h2 className="nunito-font">Wide-Ranging Types of Mobile Apps We Develop</h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Mobile Wallets</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Billing Apps</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Mobile Banking Apps</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>VoIP Apps</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Messaging Apps</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Subscription Video on Demand Apps</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Internet Protocol Television (Live TV) Apps</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Apps for Hospitals (Patient Data and Appointment Scheduling App)</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Telehealth Apps
                    (For Medical Consulting)
                  </a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Online Shopping Apps (mCommerce)</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Business Intelligence Mobile Apps</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Field Service Management Apps</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Travel Booking and Ticketing Apps
                    (Hotel, Flights, Trains, Buses, Taxi, and Private Tour Bookings)
                  </a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Augmented Reality Apps
                    (For Furniture & Fashion Shopping & More)
                  </a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '340px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Custom Mobile Apps as per Your Requirements</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">We Offer Mobile Apps for Various Platforms, Audience, and Devices, Such As</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '375px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Platforms</a>
                </h5>
                <p>We deliver mobile apps for Android, All versions of iOS, WatchOS (For Apple Smartwatches), and Wear OS (For Google’s smartwatches and wearables)</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '375px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Technologies</a>
                </h5>
                <p>We develop mobile apps based on various technologies, including Native Apps, Web Apps, and Hybrid Apps. </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '375px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Purpose</a>
                </h5>
                <p>We develop excellent mobile apps for internal usage through enterprise apps, and also for in-app purchases and more.</p>
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
              <div className="single-services-item style-two" style={{ height: '475px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Audience & Device</a>
                </h5>
                <p>We deliver mobile-app only or mobile app + web app solutions according to your strategic needs.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '475px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Achieve Well-Organised Financial Management for IT Services</a>
                </h5>
                <p>We integrate Financial Management functionality into your ITSM platform. This integration helps you effectively use your available resources, get an overview of the cost of your IT processes, and ensure your IT Service Operations are executed within your budgetary constraints.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '475px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Overcome IT Service Issues Due to Mergers and Acquisitions</a>
                </h5>
                <p>Managing mergers and acquisitions may be challenging, as you need to add more users, locations, and departments to your current instance. We perform the desired digital workload migrations and integrations to unite additional business units to your IT infrastructure.</p>
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
                <p style={{ textAlign: "justify" }}>We make the most effective use of the best technologies for mobile app development. We develop apps based on flutter, Xamarin, React Native, Swift, Java, Python, and more.</p>
                <p style={{ textAlign: "justify" }}>We also deliver Progressive Web Apps (PWA). Your customers can access PWAs through a shortcut. These modern apps help you achieve better engagement, less load time and improved conversions.</p>
                <h4 className="nunito-font">
                  Do You Need Expert Advice for Your Mobile App Development Projects?
                </h4>
                <p style={{ textAlign: "justify" }}>SPM Global Technologies offer Mobile App Consulting Services to help you choose the right tech stack, architectural design alternatives, product roadmap and planning, and estimation of your budget. Get your queries resolved by the industry leaders!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75 bg-fff4f8">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">
              The Complete Range of Mobile App Development Services
            </h2>
            <p>We provide full-cycle mobile app development services and also assist you with any specific development stage. We adopt a flexible approach to building world-class mobile apps for you by leveraging the best mobile app development software. Here is our service portfolio:</p>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyimg} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Consulting Services</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We provide expert advice and support to conceptualise your mobile apps, decide suitable platform, assess compatibility with various devices, budgeting of your project and create a product roadmap and plan.</p>
              </div>
              <div className="services-box" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyimg} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Backend Development</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We aim at swift and secure synchronization and transfer of data while designing a mobile app back-end.</p>
              </div>
              <div className="services-box" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyimg} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Complementing Web App</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We can develop web apps and mobile apps complementing your web apps. Attract users with various devices to grow your business.</p>
              </div>
              <div className="services-box" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyimg} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Full-Cycle Mobile App Development</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We are well-versed in designing, developing, and deploying world-class mobile apps with a splendid performance. </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyimg} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>UI & UX Design</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our talented designers create easy-to-use interfaces and fabulous user experiences. Our UI & UX design capabilities enhance adaptability, user engagement, and conversion rates for your mobile apps.</p>
              </div>
              <div className="services-box" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyimg} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>QA & Testing of Mobile Apps</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We have certified testers that perform testing and quality assurance activities across various stages, such as functioning, accessibility, security, UX, and performance.</p>
              </div>
              <div className="services-box" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyimg} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Mobile App Modernization</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our talented developers can build your code for a mobile app with new technology, convert your website into a mobile app, or redesign the architecture of your mobile apps.</p>
              </div>
              <div className="services-box" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyimg} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Mobile App Integration</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Our team leverages the best technology for mobile app development and seamlessly integrates your mobile apps with back-end, other third-party software solutions, and business apps.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '250px' }}>
                <div className="icon">
                  <Image src={dummyimg} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Maintenance & Technical Support</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We offer post-launch support, performance management, app security, compliance, and app advancement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1200">
            <h3>Select Your Mobile App Service Options</h3>
            <p>We are flexible to undertake a complete mobile app development project for you, or just a part of the process or stages as per your operational requirements:</p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="single-pricing-box red-light-color" style={{ height: '725px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                  <h3>Consulting</h3>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Market Research
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    App Feasibility Assessment
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Compatibility Assessment for Platform & Devices
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Consulting for Tech Stack
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Budgeting for Mobile App Projects
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Blueprints for App Architecture
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-pricing-box red-light-color" style={{ height: '725px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                  <h3>Design & Development</h3>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Designing the App Architecture
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    UX Research
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    UI Design
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    App Back-end Development
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Mobile (+Web) App Development
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    QA
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Integration
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Release or Launch
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Further Continual Advancement of the Mobile Apps.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-pricing-box red-light-color" style={{ height: '725px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <ul className="features-list">
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Mobile app code review and redesign
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    UI/UX Audit and Revamp
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Redesign of App Architecture
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Re-engineering of Mobile and Web Apps
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Database Revamp
                  </li>
                  <li>
                    <i className="flaticon-draw-check-mark"></i>
                    Custom API Development & Testing
                  </li>
                </ul>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75 bg-fff4f8">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">
              Mobile App Technologies We Leverage
            </h2>
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
                <h3 className="nunito-font">
                  <a>Mobile App Development Programming Languages and Toolkits</a>
                </h3>
                <h6>Programming Languages</h6>
                <p className="w-100" style={{ textAlign: "justify" }}>Java, JavaScript, C#, HTML, Swift, Kotlin, Objective C, and more.</p>
                <h6>Framework and Environments</h6>
                <p className="w-100" style={{ textAlign: "justify" }}>Android Studio, NetBeans, Xamarin, Eclipse, Flutter, Ionic, iOS SDK, iOS Cocoa Touch, IJ, XCode, and more.</p>
              </div>
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Programming Languages for Back-end Development</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Java, Python, Node, PHP, Go, .Net, and more.</p>
              </div>
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Databases and Data Storages</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Amazon DynamoDB, Amazon DocumentDB, AWS Elasticache, Amazon RedShift, Amazon RDS, Amazon S3, Google Cloud Datastore, Google Cloud SQL, Azure SQL Database, Azure Data Lake, Azure Blob Storage, Azure Cosmos DB, Realm, Firebase, SQLite.</p>
              </div>
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Platforms</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Salesforce, SAP, Power BI, ServiceNow, SharePoint, Adobe Commerce, Microsoft Dynamics 365</p>
              </div>
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Architectures</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>MVC, MVVM, MVP, VIPER, Reactive, Event-Driven</p>
              </div>
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>DevOps</a>
                </h3>
                <h6>CI/CD Tools</h6>
                <p className="w-100" style={{ textAlign: "justify" }}>AWS Developer Tools, Azure DevOps, Google Organizer Tools, CISCO, Jenkins, TC.</p>
                <h6>Automation</h6>
                <p className="w-100" style={{ textAlign: "justify" }}>Puppet, Saltstack, CHEF, Ansible, HashiCorp Terraform, HashiCorp Packer</p>
                <h6>Containerization</h6>
                <p className="w-100" style={{ textAlign: "justify" }}>Kubernetes, OpenShift, Docker, Apache Mesos.</p>
              </div>
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>APIs</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Apple Maps, Apple Pay, Keychain API, Rest API, GraphQL, Apiary, G Pay, Google Maps, Bluetooth Low Energy API, Fingerprint API.</p>
              </div>
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Monitoring Tools</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Elastic Stack, ZABBIX, Nagios, Grafana, DATADOG, Prometheus.</p>
              </div>
              <div className="services-box">
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>QA Tools</a>
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>AppTester, Appium, Detox, XC Test, .Net Foundation, TestFlight, JUnit5, Mockito, Jest, Enzyme.</p>
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
                <h3>Let Our Mobile App Experts Help You Build A Fantastic App</h3>
                <ul>
                  <li>•	We have a team of talented mobile app developers certified in various technologies and domains.</li>
                  <li>•	Our clients consider us among the best mobile app development companies in the world.</li>
                  <li>•	Hundreds of successful mobile app projects with satisfied clients.</li>
                  <li>•	We provide the best UI/UX design for better customer experience and high conversion rates.</li>
                  <li>•	Well-thought ad placements to prioritize app features and boost user engagement.</li>
                  <li>•	We possess the technical expertise required to build world-renowned brands.</li>
                  <li>•	We are experienced in different technologies, like IoT, AI & ML, VR & AR, mCommerce, Image Recognition, Wearables, Smart TVs, and blockchain.</li>
                  <li>•	We assure the best ratings on Google Play Store and other app platforms through proper compliance and by resolving technical problems.</li>
                </ul>
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
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default Services;