import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Accordion from "@/components/Accordion";



import ControlM from "@/public/images/Control-M.jpg";
import bhcmsp from "@/public/images/BMC-Helix-Client-Management-Service-Providers.png";
import Powerfulworkflow from "@/public/images/Powerful-workflow.png";
import BetterProductivity from "@/public/images/Better-Productivity.png";
import Customized from "@/public/images/Customized.png";
import Userfriendly from "@/public/images/User-friendly.png";
import Accurate from "@/public/images/Accurate.png";
import ExperienceMatters1 from "@/public/images/Experience-Matters1.png";
import SolidProductExpertise from "@/public/images/Solid-Product-Expertise.png";
import intime from "@/public/images/intime.png";
import PromptSupport from "@/public/images/Prompt-Support.png";


const questionsAnswers = [
  {
    question: "Q1: What is BMC Control-M?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC Control-M is a well-designed ITSM tool that enables you to monitor your business operations through an interactive dashboard. The tool allows you to manage your workflow by assigning crucial tasks to relevant teams. It also helps you monitor the progress of every project seamlessly.
        <li>BMC Control-M allows you to track your core business activities. Get an overview of all the ongoing activities seamlessly. This tool is a preferred workflow orchestration tool appreciated all over the world.</li>
      </p>

  },
  {
    question: "Q2: Why BMC Control-M is a preferred workflow automation tool?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC Control-M is among the most preferred workflow orchestration tool due to its exciting features. It makes workflow management as simple as 1-2-3. All you need to do is create tasks based on the ongoing projects and assign them to your relevant teams or individuals. Then, you can also keep an eagle’s eye on all the ongoing activities related to various IT projects your organization is executing.</p>
  },
  {
    question: "Q3: How does BMC Control-M help in effective workflow orchestration?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>As you adopt BMC Control-M after customizing the solution for your business, the dashboard provides a quick and real-time overview of various projects. You can add tasks and update their statuses as per every individual batch job and the overall project.
        Assigning the tasks to team members and monitoring the progress through their updates is quite simple in this tool. Thus, all your employees and associates get clarity about what they need to do.
      </p>
  },
  {
    question: "Q4: Why is scheduling crucial to improve efficiency? How BMC Control-M helps?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>As a managerial stakeholder of your organization, you must have various challenges regarding accomplishing and delivering your IT-related projects well in time, ensuring the highest quality and better customer experiences.
        <li>Therefore, scheduling the tasks, and assigning them to the right people with the timeline for completion is crucial.  You also need to keep track of their progress consistently. BMC Control-M allows you to schedule tasks easily and see how the project execution goes on through a user-friendly dashboard.</li>
      </p>
  },
  {
    question: "Q5: Can BMC Control-M be customized as per your needs?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Yes. BMC Control-M can be customized considering your business needs. However, this development and deployment process requires a high level of technical expertise in BMC Solutions. It is advisable to work with reputed implementation partners for customization and implementation of the tool. Reputed service providers can develop and customize BMC Control-M for your business-specific needs.
      </p>
  },
  {
    question: "Q6: Does BMC Control-M offer user-friendly deployment options?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>BMC Control-M offers flexibility while adopting the solution for your particular business. Depending upon the size of your business and the current IT infrastructure, you can choose to deploy BMC Control-M as an on-premise solution or a cloud-based solution.
        <li>This feature saves you adequate updating costs, as you can continue with the current IT infrastructure by choosing the suitable deployment option.</li>
      </p>
  },
  {
    question: "Q7: How does BMC Control-M boost your productivity?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        BMC Control-M is one of the best workflow orchestration tools used across the world. The workflow orchestration allows you to design a schedule for every project your organization has to execute. Break up the project into tasks and tasks into sub-tasks. Then, assign the batch jobs to the concerned teams easily.
        <li>Your teams would know about their roles and responsibilities with the deadlines to complete the tasks. Thus, all the projects would go on smoothly and would be completed and delivered well in time. In this way, BMC Control-M boosts your overall productivity.</li>
      </p>
  },
  {
    question: "Q8: Why should you work with a certified vendor to implement BMC Control-M?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        The certified third-party vendors possess a successful track record of developing, customizing, and deploying BMC Control-M according to their clients’ business-specific needs. To achieve this for every implementation project, they would have a team of ITSM experts highly trained and certified for various BMC Solutions.
        BMC implementation cannot be as simple as a DIY endeavor. Assigning this task to experts would provide you with better peace of mind, as the certified vendors know the technicalities of BMC solutions thoroughly.
      </p>
  },
  {
    question: "Q9: Can BMC Control-M be integrated with various business apps?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        Yes. BMC Control-M allows you to tie workflows and real-time processes as a single-scheduled batch job through various web services like WebSphere, Java, MQ, and similar messaging applications. The integration capabilities of BMC Control-M help you manage and monitor workflows making the most effective use of various business applications effectively.</p>
  },
  {
    question: "Q10: Is BMC Control-M easily accessible from various devices?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>
        Yes. A versatile protocol allows you to access all the capabilities of BMC Control-M through the web. Thus, you can access the tool and interact through various browser-enabled devices, such as desktops, laptops, tablet phones, and smartphones. This feature allows you to manage and monitor workflows from wherever you are. All you need is a device and a strong internet connection to manage your business operations seamlessly.</p>
  },
];


const Services = () => {
  return (
    <>
      <PageTitle page="BMC Control-M" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="BMC Control-M" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <p style={{ textAlign: "justify" }}>The IT Infrastructure plays a vital role today, as you manage your development and service operations using different applications. Your various teams continuously work on projects making effective use of such applications. However, it might be tedious to keep track of the progress on each project and every operation without a well-designed IT Solution. BMC Control-M is the perfect choice to monitor all your business operations in a centralized manner.
                  BMC Software Inc., USA is a global brand SaaS company offering wide-ranging IT Solutions for mainframe, cloud-based technology, ITSM, workflow automation tool, and more. We are globally recognized BMC Helix Control-M Service Providers. We develop their solutions customized to your business-specific requirements and implement them quickly.
                </p>
                <h4 className="nunito-font">Positive Influences BMC Control-M Brings to Your Businesses</h4>
                <p style={{ textAlign: "justify" }}>It may be tedious to assign work to the right team and manage the workflow using conventional methods. Again, monitoring the overall scheduling and progress on various tasks could be challenging without a centralized interface. Assigning the tasks of customization and implementation of the tool to BMC Helix Control-M Vendors could be wise. BMC Control-M offers many benefits to manage your applications and workflows effectively.</p>

              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={bhcmsp} alt="man-with-son-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Here are the reasons to choose us as your implementation partners:</h2>
            <span className="sub-title purple-color"></span>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '800px' }}>
                <div className="icon">
                  <Image src={Powerfulworkflow} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Powerful Workflow Orchestration</a>
                </h5>
                <p style={{ textAlign: "justify" }}>You can create batch jobs, schedule your tasks, delegate tasks to respective teams, and monitor the progress of various projects adopting BMC Control-M. It offers a graphical interface with a single-point control to orchestrate tasks and applications. It serves as an effective workflow automation tool in a simplified manner.
                </p>
                <p style={{ textAlign: "justify" }}>Thus, you would have a user-friendly and easy-to-operate dashboard to monitor workflow. It summarizes your business operations with a holistic approach. This feature helps you strategize your project schedules and report to your clients about the whereabouts of their projects transparently. Choose us as your Control-M Consultant and we would help you make the most effective use of the solution for your businesses.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '800px' }}>
                <div className="icon">
                  <Image src={BetterProductivity} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Better Productivity</a>
                </h5>
                <p style={{ textAlign: "justify" }}>BMC Control-M not only helps you to automate and manage workflows but also helps you attain better productivity. The dashboard to monitor workflows offers real-time insights on various batch jobs you might have assigned to your teams operating in wide-ranging domains. Thus, it serves as an effective tool to resolve any issues quickly and ensure the least possible downtime.</p>
                <p style={{ textAlign: "justify" }}>Proper coordination between the management and the teams working on various tasks and projects using related business applications leads to better productivity. Thus, the workflow automation tool has the potential to change the dynamics of your business in the long run.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '800px' }}>
                <div className="icon">
                  <Image src={Customized} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Customized to Your Needs</a>
                </h5>
                <p style={{ textAlign: "justify" }}>BMC Control-M comes with the flexibility to get molded as per your needs. We come into play at this point, developing a customized solution considering your business-specific needs. We understand the nature of your business and the way you execute your projects. Accordingly, our team of talented IT experts develops a customized solution and implements it for you.</p>
                <p style={{ textAlign: "justify" }}>Customization makes this workflow automation tool more relevant and to the point. We possess adequate experience in BMC Control-M and render our product expertise to help you run your business smoothly. It would be wise to choose us as your implementation partners to adopt this dashboard to monitor workflow.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '800px' }}>
                <div className="icon">
                  <Image src={Userfriendly} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>User-friendly Deployment Options</a>
                </h5>
                <p style={{ textAlign: "justify" }}>Depending upon the spread of your business and the current IT infrastructure, you can choose to deploy BMC Control-M as an on-premise tool or a cloud-based function. This additional flexibility saves the investment required to upgrade your devices and the overall IT infrastructure.</p>
                <p style={{ textAlign: "justify" }}>The best part of the workflow automation tool is your ability to access it using various browser-based devices, including iOS or Android-based mobiles. Thus, you can take control of your ongoing projects even on the go. Again, deployment is not a lengthy, time-consuming, and exhausting process. Our team would deploy the customized solution within a few days.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '900px' }}>
                <div className="icon">
                  <Image src={Accurate} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Accurate Scheduling</a>
                </h5>
                <p style={{ textAlign: "justify" }}>As you start working on any new projects, the most crucial task is to prepare a realistic schedule. Then, assigning batch jobs to concerned teams, and clarifying the time frame is another challenge. Next comes keeping track of the work in progress on various fronts. BMC Control-M simplifies project management through the effective scheduling of tasks and applications. We offer Helix Control-M Managed Services to make your workflow orchestration simple.</p>
                <p style={{ textAlign: "justify" }}>As you schedule your tasks and assign them to the right set of people, your workforce would also be clear about what they need to do and when they need to do it. Again, with the dashboard to monitor workflow, you can quickly track quickly their progress and create easy-to-understand reports. As the tool integrates with various communication channels, you can share these reposts internally to govern the projects and to take appropriate strategic decisions at the right time.
                </p>
              </div>
            </div></div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">We Are the Most Reputed BMC Implementation Partners</h2>
            <p style={{ textAlign: "justify" }}>Your company requires a reliable implementation partner to adopt BMC Control-M smoothly. We are committed to partnering with our clients as BMC Helix Control-M Third Party Vendor. We take you through the digital transformation journey in a hassle-free manner. We offer development, customization, deployment, and technical support for the most appreciated workflow automation tool.
            </p>
            <span className="sub-title purple-color">Here are the reasons to choose us as your implementation partners:</span>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '850px' }}>
                <div className="icon">
                  <Image src={ControlM} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  Trained and Certified IT Professionals
                </h5>
                <ul className="skill-list">
                  <li>
                    <p style={{ textAlign: "justify" }}>We assign the task of customizing BMC Control-M to our team of trained and certified IT professionals. Our team of experts collaborates with your workforce to understand your nature of business and your project execution model. Our team members have adequate hands-on experience to develop customized workflow automation tools considering your operational requirements.</p>
                    <p style={{ textAlign: "justify" }}>Thus, you can rest assured that your project is in safe hands. Our team leverages product expertise. Again, our team trains your IT team through in-depth knowledge about the dashboard to monitor workflows during implementation.
                    </p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '850px' }}>
                <div className="icon">
                  <Image src={ExperienceMatters1} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  Experience Matters
                </h5>
                <ul className="skill-list">
                  <li>
                    <p style={{ textAlign: "justify" }}>We have worked with hundreds of clients worldwide to design, develop, customize and deploy various BMC solutions for many years today.  Our extensive experience in partnering with different sizes of IT companies from across the globe enhances our confidence. No BMC Control-M implementation project is too small or too big for us.
                    </p>
                    <p style={{ textAlign: "justify" }}>As you have an experienced implementation partner with you, your team members can share their ideas and requirements during the process.  Our team tries to customize various aspects of the workflow automation tools according to your needs. Thus, adopting a new solution would add value to your business in the long run.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '850px' }}>
                <div className="icon">
                  <Image src={SolidProductExpertise} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  Solid Product Expertise
                </h5>
                <ul className="skill-list">
                  <li>
                    <p style={{ textAlign: "justify" }}>By choosing us as your implementation partners, your business would not be at the risk of collaborating with newbies in this industry We possess the global recognition for deploying BMC solutions in IT Service Management, workflow orchestration, Cloud Computing solutions, and much more. Your company enjoys the advantage of our incredible product expertise in BMC Control-M. We emphasize smoother transformations and safe landings while executing any implementation project. We organize Helix Control-M Trainings to transform our product expertise for your workforce.
                    </p>
                    <p style={{ textAlign: "justify" }}>Choosing us as your implementation partner would be a wise strategic decision that would provide long-term benefits, such as better productivity.
                    </p>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '850px' }}>
                <div className="icon">
                  <Image src={intime} alt="" />
                </div>
                <h5 className="nunito-font">
                  In-time Implementation
                </h5>
                <ul className="skill-list">
                  <li>
                    <p style={{ textAlign: "justify" }}>We understand the importance of time and respect your deadlines for BMC Control-M implementation. Our team of IT experts customizes the workflow automation tool considering your inputs regarding project execution, batch job scheduling, and many other aspects.  However, it will not take months together to mold the solution in the shape you require.
                    </p>
                    <p style={{ textAlign: "justify" }}>As our team members are trained and certified on various BMC solutions, we can execute BMC Control-M implementation within the stipulated timeline mutually agreed with the clients. Thus, the key personnel in your organization may start utilizing the dashboard to monitor workflows in the shortest possible duration.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={PromptSupport} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  Prompt Support
                </h5>
                <ul className="skill-list">
                  <li>
                    <p style={{ textAlign: "justify" }}>We never leave our clients alone throughout the process of BMC Control-M implementation and beyond. Our technical support team would be just a call away to attend to your technical queries. We are known for our prompt after-sales support. We endeavor to resolve any technical issues with the workflow automation tool we implement as quickly as we can.</p>
                    <p style={{ textAlign: "justify" }}>We ensure that our clients continue with their core business activities and monitor their workflows facing the lowest downtime. We offer Helix Control-M Support Services to help you get any technical issues resolved within almost no time. The zeal of our certified and experienced support team to solve your difficulties makes us stand out from the crowd. You can rely on us as your strategic ITSM partners for years ahead.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75 bg-fff4f8">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"></span>
            <h2>Building Long-lasting Relationships</h2>
            <p style={{ textAlign: "justify" }}>We have been focusing on sustainable business growth and better productivity for our clients for many years today. We treat every BMC Control-M inquiry as an opportunity to build a long-term relationship with a new business. We have been deploying the best ITSM Solutions for our clients to enable them to make the most effective utilization of the information to excel to new heights.</p>
            <p style={{ textAlign: "justify" }}>We leverage our extensive experience and product expertise to help our clients adopt the most appreciated workflow automation tool. While undertaking BMC Control-M implementation, our goal would be to enable our clients to use the dashboard to monitor workflows effortlessly. We remain with our clients throughout the journey of their digital transformation. We are also committed to resolving their technical issues through our in-time support.</p>
            <p style={{ textAlign: "justify" }}>customer support team respond to your inquiries as soon as possible. Collaborate with us today to build a better tomorrow.</p>
            <p style={{ textAlign: "justify" }}>With a wide range of services that we provide, including BMC Control-M, we try to enhance our recognition as a ‘custom software service’ company. We are always on our way to strengthening our clients’ ventures by implementing globally acclaimed ITSM Solutions and workflow automation tools. We strive to foster win-win deals to grow along with our clients from across the world.</p>
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