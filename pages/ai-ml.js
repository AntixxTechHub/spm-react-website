import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

import goalImg from "@/public/images/goal.png";
import manWithSon from "@/public/images/man-with-son.png";
import bmc from "@/public/images/icon/bmc.png";
import servicenow from "@/public/images/icon/servicenow.svg";
import salesforce from "@/public/images/icon/salesforce.svg";
import aws from "@/public/images/icon/aws.svg";
import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";




const Services = () => {
  return (
    <>
      <PageTitle page="Artificial Intelligence and Machine Learning" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="AI & ML" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>Artificial Intelligence and Machine Learning</h3>
                <p style={{ textAlign: "justify" }}>Artificial Intelligence and Machine Learning technologies help businesses for prediction-based proactive planning to minimize the risks in different verticals and to improve quality service availability. SPM Global Technologies, a leading service support provider, has proven capabilities to help you leverage the benefits of integrating Artificial Intelligence (AI) and Machine Learning (ML) technologies. Our strategically planned tailor-made AI and ML services help you have actionable insights to take critical decisions for improvement and innovate new products for having a competitive edge.</p>
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
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={dummyimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3>Increasing Importance of Predictive Analytics with ML and AI</h3>
                <p style={{ textAlign: "justify" }}>Automated data visualization for predictive analytics has become a must-have ITSM support for businesses. Natural language processing (NLP) and computer vision (CV) like advanced capabilities are helping the businesses in different sectors like financial, healthcare, automotive, R&D, logistics, telecom, e-commerce, real estate etc to accelerate innovation, reduce costs, and improve customer experience. Artificial Intelligence empowers machines to observe and analyze data for smart decision-making.</p>
                <p style={{ textAlign: "justify" }}>The cost, time-saving, unbiased decisions, fast proactive decision-making, minimum error, data security etc are key concerns for any business. Natural language understanding (NLU) and Computer Vision link the robots and humans to drive in automation of tasks addressing all the key concerns to perform with excellence. NLP helps machines to understand human speech and CV transforms ML models to images. According to Gartner’s report, “Almost 70% of people will be using conversational AI platforms by the end of 2022.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Eight Benefits of Artificial Intelligence and Machine Learning Integration</h2>
            <p style={{textAlign: "justify"}}>AI implementation has become an integral part of IoT, Virtual reality (VR), and Augmented Reality (AR) apps/devices management to accomplish all the critical tasks like product orientation, efficiency improvement, process flow enhancement, supply chain management, cognitive customer analytics etc. As being one of the top Artificial Intelligence and Machine Learning solution provider, we at SPM Global Technologies have empowered the number of businesses to improve their management excellence, operations, on-the-time deliveries, customer engagement, and service quality by leveraging the benefits like</p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '300px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Enhanced customer relationship</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '300px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Increased operational efficiency by minimizing errors</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '300px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Smarter decision making to minimize risks</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '300px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Robotic process automation to reduce repetitive tasks</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '300px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Desktop as a Service (DaaS) integration for more agility and data security</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '300px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Improved customer experience by interactive chatbots</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '300px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Reliable Big data analytics for cost optimization, efficiency improvement etc.</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '300px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Deep learning for feature engineering</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">What We Offer As Machine Learning Services Provider</h2>
            <p style={{textAlign: "justify"}}>Our future-ready machine learning services offer applications-aligned advanced algorithms to help businesses for solving complex business challenges, creating innovative operating models, and data-driven decision making, etc. The experienced Machine Learning specialists create customized applications by using technologies like computational intelligence, mathematical optimization, nature-inspired algorithms, pattern recognition etc. We help you explore growth possibilities based on insights driven by ML technology. The services, we offer as the best Machine Learning solutions provider, include</p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '325px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Deep Learning solutions to improve capabilities for forecasting, decision-making, and other operations</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '325px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Predictive Analytics to identifying underlying patterns</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '325px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Image Analytics to help you detect an attribute/ object in an image</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '325px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Video Analytics to help you identify & tag different entities in motion pictures/ video</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '325px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h6 className="nunito-font">
                  <a>Natural Language Processing to create natural interactions with users as well as to identify key patterns</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '325px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Computer Vision to extract actionable relevant information from videos and images</a>
                </h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '325px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h6 className="nunito-font">
                  <a>Data Science to find valuable insights for improving the product, services, supply chain, etc</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">What We Offer As Artificial Intelligence Solutions Provider</h2>
            <p style={{textAlign: "justify"}}>Our expertise in both AI and ML helps us create the best solutions that your business needs to address the particular concerns for continuous improvement. As an Artificial Intelligence services company, SPM Global Technologies offers a range of the best-aligned AI solutions.</p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <p>Our expertise in both AI and ML helps us create the best solutions that your business needs to address the particular concerns for continuous improvement. As an Artificial Intelligence services company, SPM Global Technologies offers a range of the best-aligned AI solutions</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <p>Chatbots development to interact with customers and to streamline transactions</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <p>Natural Language Understanding (NLU) to interpret text and to perform relevant tasks like grammar checking, classification, translation, etc.</p>
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
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <p>Predictive & User Behavior Analytics to provide an actionable data-oriented holistic view of performance, efficiency, resource management, etc.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <p>Image Recognition and Visual Search to create pattern recognition and visual search apps for customer journey improvement.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <p>Cognitive Customer Analytics to improve personalized customer service and decision making based on predictions</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '400px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <p>Real-time Enterprise Operational Analytics for actionable management to improve collaboration and consumer engagement as well as to streamline & automate information management for better predictions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area pt-100 bg-fff4f8  pb-75">
        <div className="container">
          <div className="section-title">
            <h4>As being the best performing AI and ML support service providers, we offer a range of services to help you experience and enjoy the competitive advantages of AI & ML solutions up to their full potential in a hassle-free manner</h4>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '225px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Artificial Intelligence consulting services</a>
                </h3>
              </div>
              <div className="services-box" style={{ height: '225px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>AI powered predictive proactive maintenance solutions</a>
                </h3></div>
              <div className="services-box" style={{ height: '225px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Artificial Intelligence product configuration</a>
                </h3></div>
              <div className="services-box" style={{ height: '225px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Artificial Intelligence managed services for post-deployment support</a>
                </h3>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="services-box" style={{ height: '225px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>IoT Analytics consultancy</a>
                </h3></div>
              <div className="services-box" style={{ height: '225px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Data visualization consulting </a>
                </h3>
              </div>
              <div className="services-box" style={{ height: '225px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Optimizing customer services for the enhanced experience with machine learning</a>
                </h3>
              </div>
              <div className="services-box" style={{ height: '225px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="" />
                </div>
                <h3 className="nunito-font">
                  <a>Big Data Analytics services</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Our Approach for ML and AI Solution Structuring</h2>
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
                <Image src={dummyimg} alt="goal-image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <p style={{ textAlign: "justify" }}>As a leading ITSM services provider company, SPM Global Technologies has proved its capabilities to leverage ML/AI algorithms in line with current and would-be needs. We have the best pool of AI developers and ML experts to customize full suite of AI/ML services to plan, develop, integrate, configure, and manage AI- ML enabled business solutions based on the best suitable platform-Google Machine Learning (Vertex AI, AI building blocks, AutoML, AI Infrastructure, Conversational AI etc)</p>
                <ul>
                  <li><h6>1. Azure Machine Learning Studio (MLOps, Code SDKs, ML Pipeline, etc)</h6></li>
                  <li><h6>2. Amazon Machine Learning (SageMaker, SageMaker Ground Truth, Amazon Lex, AWS Inferentia, etc)</h6></li>
                </ul>
                <p style={{ textAlign: "justify" }}>Our ML and AI experts explore your non-utilized data also to identify the valuable trends that otherwise goes waste because of manual practices. The customer-centric approach makes our ML and AI solutions and support services the industry best because we –</p>
                <ul>
                  <li><h6>1. We collect data from the genuine sources to analyze it for the true-color understanding of your business needs</h6></li>
                  <li><h6>2. We refine and transform collected data to ensure its utility, value, relevance, etc</h6></li>
                  <li><h6>3. We create and train different service/solution models, test efficiencies, and continue to iterate until we get the planned accuracy</h6></li>
                  <li><h6>4. After being satisfied with evaluation reports, we go for the best suitable AI-ML deployment</h6></li>
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
                <h3>Why Hire SPM As AI And Machine Learning Specialist Agency</h3>
                <p style={{ textAlign: "justify" }}>We have an in-house panel of certified and experienced Artificial Intelligence and Machine Learning professionals dedicated to deliver the best-in-class services.</p>
                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    AI/ML team offers superior quality business solutions with rights reserved for you
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We ensure the highest ROI
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We ensure the highest ROI
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    Years of experience in successfully delivering AI/ML projects to businesses in diverse sectors
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We have proven expertise in multiple platforms
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    We extend comprehensive support to embrace Machine Learning and Artificial Intelligence technologies
                  </li>
                </ul>
              </div>
              <p style={{textAlign: "justify"}}>We welcome you to discover growth possibilities by implementing customized Machine Learning and AI apps and turnkey solutions that will help you for intelligent decisions and proactive actions to be proficient in addressing ever-changing customer demands and business needs.</p>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={dummyimg} alt="man-with-son-image" />
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