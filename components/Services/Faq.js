import React from "react";
import Accordion from "@/components/Accordion";




import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Faq = (props) => {
  const [faq, setFaq] = React.useState();
  var questionsAnswers = []
  var Headers = ""

  //START FAQ FLAG
  if(props.flag == "itsm"){
    Headers = "FAQs on BMC Helix ITSM"
     questionsAnswers = [
      {
        question: "What is the BMC Helix Platform?",
        answer: [
          {
            option :  `BMC Helix Platform constitutes to be an open, accessible service and operations management service, enhancing efficacy, output, and innovation.
            `
          },
          {
            option :  `BMC Helix is used by various organizations as a ticket management system. The solution also facilitates:`
          },
          {
            option :  `Change Management`
          },
          {
            option :  `Incident Management
            Request Management
            Knowledge Management &
            Asset Management.
            It helps you retain a wide array of ticket types across ITSM in one tool.
            `
          },
          {
            option :  `Request Management
            Knowledge Management &
            Asset Management.
            It helps you retain a wide array of ticket types across ITSM in one tool.
            `
          },
          {
            option :  `Knowledge Management &  Asset Management.`
          },
          {
            option :  `It helps you retain a wide array of ticket types across ITSM in one tool.`
          }
        ]
      },
      // {
      //   question: "What is BMC Remedy ITSM?",
      //   answer:
      //     "BMC Helix ITSM constitutes to be a powerful and people-centric solution, which exploits emerging technologies like Artificial  Intelligence and Machine Learning. While transferring from Remedy on-premise to BMC Helix ITSM, IT professionals gain Analytical service management via auto-classification and routing of incidents.",
      // },
      // {
      //   question: "What is BMC Remedyforce?",
      //   answer: `BMC Helix Remedyforce comprises comprehensive IT service management, which scales and adapts to the requirement of mid-size enterprises. Created on the Salesforce cloud platform, BMC Helix Remedyforce lets you flawlessly combine IT operations management and intellectual competencies to ensure business efficacy, compliances, and security.
      //   `,
      // },
      {
        question: "How to use Helix BMC?",
        answer: [
          {
            option : `BMC Helix allows non-coders to co-create.`
          },
          {
            option : `IT professionals use Helix BMC in the following ways:
            Configuration of enterprise applications through visual drag & drop design tools.`
          },
          {
            option : `Making use of drag-and-drop connectors, with integration service for collaborating with third-party services and core systems.`
          }
        ]
      },
    ];

    
  }
  //END FAQ FLAG

  //START FAQ FLAG
  if(props.flag == "discovery"){
    Headers = "Dedicated to help anything people’s needs"
     questionsAnswers = [
      {
        question: "How many team members can I invite?",
        answer:
          "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      },
      {
        question: "What is the maximum file upload size?",
        answer:
          "No more than 2GB. All files in your account must fit your allotted storage space.",
      },
      {
        question: "How do I reset my password?",
        answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
      },
      {
        question: "Can I cancel my subscription?",
        answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
      },
    ];

    
  }
  //END FAQ FLAG

  if(props.flag == "remedyforce"){
    Headers = "Dedicated to help anything people’s needs"
    questionsAnswers = [
     {
       question: "How many team members can I invite?",
       answer:
         "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
     },
     {
       question: "What is the maximum file upload size?",
       answer:
         "No more than 2GB. All files in your account must fit your allotted storage space.",
     },
     {
       question: "How do I reset my password?",
       answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
     },
     {
       question: "Can I cancel my subscription?",
       answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
     },
   ];

   
 }
  var filterData = []
  React.useEffect(() => {

    const getFaq = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/it-startup-faq?populate=*`
      );
      // await response.data.data.forEach((element) => {
      //   if (element.attributes.flag == props.flag) {
      //     filterData.push(element)
      //   }
      // });
      setFaq(response.data);
      console.log(response.data)
    };
    getFaq();
  }, []);

  return (
    <>
      {faq && (
        <div className="faq-area with-top-border ptb-100">
          <div className="container">
            <div className="row m-0 align-items-end">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="faq-accordion">
                  <div className="section-title">
                    <span className="sub-title">
                      {faq?.data?.attributes?.subTitle}
                    </span>
                    <h2>{Headers}</h2>
                  </div>

                  <div className="accordion" id="faqAccordion">
                    <Accordion questionsAnswers={questionsAnswers} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 p-0">
                <div className="faq-image" data-aos="fade-up">
                  <img
                    src={faq?.data?.attributes?.image?.data?.attributes?.url}
                    alt={
                      faq?.data?.attributes?.image?.data?.attributes?.alternativeText
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Faq;
