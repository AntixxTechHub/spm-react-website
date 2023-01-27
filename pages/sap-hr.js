import React from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";


import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";


{/* ------------------------------Faq Q/A--------------------------------- */ }
const questionsAnswers = [
  {
    question: "Q1:What are the key benefits of investing in cloud HRMS? ",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: We as a SAP HR consultant, we recommend the businesses to go head for cloud HRMS integration because of following advantages

        <li>Ever-increasing range of available HR/ HCM options  .</li>
        <li>Costs-less upfront  .</li>

        <li>No need to invest in hardware.</li>

        <li>Cloud service vendor maintains and upgrades the system .</li>

      </p>

  },
  {
    question: "Q2:  What are the key decisive factors to embrace SAP HR integration?",
    answer:
    <p className="w-100" style={{ textAlign: "justify" }}>Answer: As a customer-oriented SAP HR managed services provider, we will recommend analyzing the following factors before deciding to embrace SAP HCM or SAP HR

    <li>Current priorities for growth plans aligned to diversification, consolidation, expansion, etc   .</li>
    <li>Performance bottlenecks in hr operation   .</li>

    <li>Shortcomings of existing paper-based hr processing   </li>

    <li>What your HRMS stakeholders want .</li>
    <li>Desired functionality to facilitate users with simplified and automated hr processes .</li>

    <li>Required HR/ HCM features .</li>


  </p>
  },
  {
    question: "Q3:What is the difference between SAP HR and SAP HCM?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>HCM until the release of Version 4.7 was called SAP HR. Post release of SAP HCM Version 5.0, SAP HR got a new identity as SAP HCM (Human Capital Management). 
      </p>
  },
  {
    question: "Q4: How will you support the operations of SAP HR/SAP HCM/ SAP HXM?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Besides providing SAP HR consultancy, we provide tailored-to-need SAP HR support services also. In addition, we have SAP HR trainers to conduct virtual SAP HR/SAP HCM/ SAP HXM trainings for SAP products orientation.
        
      </p>
  },
  
  {
    question: "Q5:What is SAP SuccessFactors?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}> SAP SuccessFactors in SAP HXM suite are the cloud-based applications that facilitate the organizations for the streamlined management of talent, core HR, payroll, people analytics, and employee experience based on embedded reporting powered by intelligent technologies. </p>
  },
  
];
{/* ------------------------------End Faq Q/A--------------------------------- */ }




const Services = ({ seo }) => {
  return (
    <>
    <PageSeo seo={seo} pageName = "SAP HR" />
      <PageTitle page="SAP HR" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="SAP HR" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
            <h4> SPM Global Technologies - #1 SAP HR Consultant & SAP HR Support Services Provider   </h4>
              <div className="goal-content style-two">
                <p style={{ textAlign: "justify" }}>SAP HR, also known as SAP Human Resource Management System (SAP HRMS) or SAP Human Capital Management (SAP HCM), is a key module in SAP. It facilitates the organizations to automate payroll management, HR administration, record-keeping, and other HR processes that otherwise consume lots of effort and time. SPM Global Technologies, as being one of the top SAP HR managed services providing agencies and SAP HR consultants, offers comprehensive SAP HR support services, task-oriented consultancy, and role oriented SAP HR trainings.   -
                </p>
                <h4> SAP HXM- Next Gen Human Capital Management:  </h4>


                <p style={{ textAlign: "justify" }}>SAP Human experience management (HXM), rolled out as the next-gen human capital management (HCM) software, shifts the organization’s focus from supporting conventional HR processes to deliver ultimate experiences considering employees first. The SAP SuccessFactors HXM Suite is developed on the best HCM practices. SPM Global Technologies, as a leading SAP HR consultant and services provider agency, simplifies embracing SAP HXM through innovative customized-to-need solutions.  
                </p>

                
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="SAP HR Consultant & SAP HR Support Services Provider.jpg" data={seo} />
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
              <MediaImage name="Organizational Management.png" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                SAP HR Training by SPM Global Technologies- The Scope 
                </h3>
                <p style={{ textAlign: "justify" }}>We are performing as the SAP HR third party vendor for over the years. We are helping the organizations to integrate futuristic SAP HR solutions and as well as for having the trained skills to leverage the SAP HR benefits. We have the industry-best SAP HR trainers to conduct task-oriented online SAP HR trainings to help your concerned HR professionals use each feature and functionalities of SAP HR up to its full potential. During the instructor-led training, HR professionals learn to use SAP HR for </p>
                
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Time management   </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Executing a personnel action  </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Configuring positions   </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Organizational management   </li>


                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Configuring an organizational structure   </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Personnel administration   </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Executing a personnel action   </li>


                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Developing enterprise structure … other   </li>


                    </ul>

                  
                
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
                Top Eight Features and Functionalities of SAP HR:  
                </h3>
                <p style={{ textAlign: "justify" }}>As one of the top SAP HR service providers, we leverage the benefits of each SAP HR feature by our tailored-to-need SAP HR managed services. SAP HR also called SAP HRMS is a suite of features and functionalities; the top eight SAP HR features and functionalities that will transform your HR functioning experience are:  </p>
                
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    PINCH:  Facilitates to define a default value for an Administrator group                   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SCHKZ: Facilitates to define a default value for a particular work schedule rule for a working time                   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    TMSTA: Facilitates to define a default value for Time management status for a planned working time                   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    DATAR: Facilitates to define a default value in Date Specifications info-type                   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    ABKRS: Facilitates to define a default value for the payroll                   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    IGMOD: Facilitates to differentiate info-type flow per employee                   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    TARIF: Facilitates to define a default value for pay scale type and area                   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    CONTR: Facilitates to define a default value for Additional sick pay, Probationary period, Contract type, Notice period etc.                    </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              {/* <MediaImage name="goal2.jpg" data={seo} /> */}
              <MediaImage name="Top Eight Features and Functionalities of SAP HR.jpg" data={seo} />

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
                {/* <Image src={dummyimg} alt="" /> */}
                <MediaImage name="Benefits of Hiring A SAP HR Third Party Vendor- 7 SAP HR Benefits.jpg" data={seo} />

              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                Benefits of Hiring A SAP HR Third Party Vendor- 7 SAP HR Benefits:  

                </h3>
                <p style={{ textAlign: "justify" }}>The increasing numbers of companies in different business sectors are experiencing the benefits of integrating SAP HR HXM; however, the ultimate satisfaction highly depends upon the success of hiring the best among SAP HR vendors. We have years’ experience in helping businesses to streamline and automate their HR functions through cloud-based SAP HR solutions. Seven top SAP HR benefits that make it a top choice of businesses worldwide are  :</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Delivers insights to understand your employees’ need   </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Continuous improvements in HR decisions to inspire the employees for better performance    </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Development of positive organizational culture  </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Creates a consistent HR process as per the latest norms   </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Automation improves data quality   </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Improves HR service delivery   </li>

                    <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP SuccessFactors and SAP Fieldglass help to manage workforce   </li>

                

                    </ul>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
        <h4><center> Five Sub-Modules of SAP HR:  </center> </h4>
        <a> SAP HR, widely known as SAP Human Capital Management (SAP HCM) also, contains five modules to allowing the organizations to optimize SAP HR functioning for achieving peak performance and cost-effectivenessSAP HR, widely known as SAP Human Capital Management (SAP HCM) also, contains five modules to allowing the organizations to optimize SAP HR functioning for achieving peak performance and cost-effectiveness </a>
          <div className="row justify-content-center justify-content-center">
          
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="zoom-in-right"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <MediaImage name="Personnel Administration.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                Personnel Administration
                </h5>
                <p style={{ textAlign: "justify" }}>It records employee’s information to automate a range of administrative tasks including the hiring of employees, travel expenses, personnel information, payroll accounting, etc. </p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="zoom-in-right"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <MediaImage name="Organizational Management Icon.png" data={seo} />

                </div>
                <h5 className="nunito-font">
                Organizational Management
                </h5>
                <p style={{ textAlign: "justify" }}>it helps the HR professionals to analyze a current organizational plan and to restructure it based on delivered insights by auto-generated graphical reports for different concerns.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="zoom-in-right"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <MediaImage name="Time Management.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                Time Management
                </h5>
                <p style={{ textAlign: "justify" }}>It delivers a holistic view to help the HR people for managing attendance records, shifts regulation, work schedule for a particular month, activity allocation, time evaluation, holiday calendars, etc. </p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="zoom-in-right"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                  {/* <Image src={dummyicon} alt="" /> */}
                  <MediaImage name="Travel Management.png" data={seo} />
                </div>
                <h5 className="nunito-font">
                Travel Management
                </h5>
                <p style={{ textAlign: "justify" }}> It simplifies tracking and report generation for accounting official trips, travel cost management, and travel expenses etc. SAP HR Travel Management module simplifies all the key functions of staff traveling aligned to advance payment, meal allowance calculation, claim management, regulation of norms etc.</p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="zoom-in-right"
              data-aos-duration="1200"
            >
              <div className="services-box">
                <div className="icon">
                <MediaImage name="Payroll Accounting.png" data={seo} />
                </div>
                <h3 className="nunito-font">
                  <a>Payroll Accounting</a>
                </h3>
                <p style={{ textAlign: "justify" }}>It automates several key functioning of payroll management like computation of wages, taxes, insurance, deductions, medical benefits, etc. </p>
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
                <h3>SAP HR Training by SPM Global Technologies- The Scope</h3>
                <p style={{ textAlign: "justify" }}>We are performing as the SAP HR third party vendor for over the years. We are helping the organizations to integrate futuristic SAP HR solutions and as well as for having the trained skills to leverage the SAP HR benefits.</p>
                <p style={{ textAlign: "justify" }}>We have the industry-best SAP HR trainers to conduct task-oriented online SAP HR trainings to help your concerned HR professionals use each feature and functionalities of SAP HR up to its full potential. During the instructor-led training, HR professionals learn to use SAP HR.</p>

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    Time management 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Executing a personnel action   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Configuring positions     </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Organizational management   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Configuring an organizational structure   </li>
                    <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Personnel administration   </li>
                    <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Executing a personnel action      </li>
                    <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Developing enterprise structure … other      </li>





                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                {/* <Image src={dummyimg} alt="" /> */}
                <MediaImage name="The Scope.jpg" data={seo} />
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
                {/* <Image src={dummyimg} alt="" /> */}
                <MediaImage name="Best SAP HR Service Providers.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                What We Offer as the Best SAP HR Service Providers: SAP HR Services:  
                </h3>
                <p style={{ textAlign: "justify" }}>By trusting SPM Global Technologies as the best among the top SAP HR vendors, you can be sure of getting the most cost-effective SAP HR solutions in a range of domains. We have proven expertise in helping you achieve your HR goals by a range of task-specific SAP HR/SAP HCM/ SAP HXM services: </p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP HR/SAP HCM/ SAP HXM consultancy services 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP HR/SAP HCM/ SAP HXM transformation services                    </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP HR/SAP HCM/ SAP HXM application development services                   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP HR/SAP HCM/ SAP HXM implementation services 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP HR/SAP HCM/ SAP HXM self service applications 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP HR/SAP HCM/ SAP HXM analytics 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP HR/SAP HCM/ SAP HXM trainings 
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP HR/SAP HCM/ SAP HXM managed services  
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
            <div className="col-lg-6 col-md-12">
            <h4> SAP HR HXM solutions   </h4>
              <div className="goal-content style-two">
                <p style={{ textAlign: "justify" }}>Our task-specific SAP HR HXM solutions effectively address all your concerns to eliminate the particular performance silos aligned to HR management, processes, and policies:
                </p>
                

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    SAP Work Zone for HR: To provide access to information that employees need  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP SuccessFactors Document Management Core: For centralized document management 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP SuccessFactors Employee Central, Payroll & Service Center: For flexible HRIS
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP Qualtrics Employee Engagement: To improve employee engagement 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Qualtrics EmployeeXM: To improve employee experience with digital support  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP Qualtrics 360 Feedback: To assess performance feedback 
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    SAP Qualtrics Employee Lifecycle: To manage employee lifecycle 
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
              <MediaImage name="SAP HR HXM solutions.png" data={seo} />
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
                {/* <Image src={dummyimg} alt="" /> */}
                <MediaImage name="SAP HR Managed Service.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h3 className="nunito-font">
                Why Choose SPM Global Technologies for SAP HR Support Services  
                </h3>
                <p style={{ textAlign: "justify" }}>By trusting SPM Global Technologies as the best among the top SAP HR vendors, you can be sure of getting the most cost-effective SAP HR solutions in a range of domains. We have proven expertise in helping you achieve your HR goals by a range of task-specific SAP HR/SAP HCM/ SAP HXM services: </p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    We are leader in custom SAP HR solution development  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We believe in doing right for a cause   </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We have courage to innovate SAP HR/SAP HCM/ SAP HXM solutions       </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We have proven excellence to meet deadlines   
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We offer all SAP HR support services at one place  
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We offer managed services for SAP HCM upgrade  
                  </li>

                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We offer the best-priced SAP HR managed services 
                  </li>

              



                </ul>
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
    `${baseApiUrl}/api/pages?filters[slug][$eq]=sap-hr&populate=*`
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
