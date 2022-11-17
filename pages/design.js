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
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  // SEO Local Pages API
  const [testimonials, setpage] = React.useState();
  React.useEffect(() => {
    const getpage = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/page?populate=*`
      );
      setpage(response.data);
      // console.log(response.data)
    };
    getpage();
  }, []);

  return (
    <>
      <PageTitle page="Design" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Design" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h3 className="nunito-font">
                  We build and deliver incredible digital experiences that exceed your expectations!
                </h3>
                <p className="w-100" style={{ textAlign: "justify" }}>Would you like to work with a UI UX design application company that fulfils your aspirations and leaves an impact on millions of lives through design? Then choose us as your design partners for your products across various domains and offered on various platforms.</p>
              </div>
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

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Services we offer:</h2>
            <span className="sub-title purple-color"></span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two" style={{ height: '550px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>UX Research</a>
                </h5>
                <p>User experience matters most when it comes to engaging your target audience. We conduct in-depth research on your scenario and develop a UX outline that helps you achieve the best possible user experience. We do it for your websites, web applications, and mobile applications on various platforms.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '550px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>UX Design</a>
                </h5>
                <p>Our User Experience Exerts draw a concise and clear process for design, brainstorm creative design ideas, and deliver the most spectacular UX design outcomes, respecting your deadlines. Our UX team is a small studio within a large software solutions company, putting its highest level of expertise to work to create the most appreciable engagements through innovative ideas and cutting-edge technology in user experience design.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-item style-two" style={{ height: '550px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>UI Design</a>
                </h5>
                <p>No matter how user-friendly and solid your product concept is, you need a set of well-placed and compelling user interfaces to convert your users quickly and consistently. Our User Interface Design Team adds a touch of magic, backed by excellent logic, to your products you wish to offer on diverse platforms.</p>
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
              <div className="single-services-item style-two" style={{ height: '550px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Usability Testing</a>
                </h5>
                <p>Our UX UI Design Team ensures that the design for your product is the most user-centric, engaging, and encouraging for your power users. Our design team conducts usability testing at various stages of product development to assure the highest level of acceptance of your product for the best user experience it delivers.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-item style-two" style={{ height: '550px' }}>
                <div className="icon">
                  <Image src={dummyicon} alt="icon" />
                </div>
                <h5 className="nunito-font">
                  <a>Design Audit</a>
                </h5>
                <p>We have a dedicated QA team for testing and assessing UI and UX designs through well-executed design audits throughout the product development journey. We continuously review and evaluate products from a UX perspective to assess if they meet the desired standards for easy accessibility, user interface, continuity of key components, and if the design is robust, flexible, and takes your users to the desired results at a better pace.</p>
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
                <h3 className="nunito-font">Proven Design Process Leads to Success</h3>
                <p className="w-100" style={{ textAlign: "justify" }}>We have set a standard design process to ensure there are no stones unturned. You get your well-designed products right before the deadline.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We follow proven workflows and stick to guidelines to deliver innovative UI/UX design outcomes that exceed your design aspirations, well in time.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>For UX Design, our team conducts a thorough analysis of your desired product and the overall scenario, works on the interface architecture, creates sketches and wireframes to link the ends, works on a dynamic prototype, and edits and tests the design.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Similarly, for UI design, our team gathers design references and works on the graphic interface. The team creates an animation prototype, develops UI guidelines and kits per your product-specific needs. Then, the team reviews the design.</p>
                <h5>Share Your Aspirations with Us and Let Us Design for You.</h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Fill in the form or get in touch with our Design Rockstars to share your design aspirations along with the product idea. We will let you know what we offer and how we can take your design dreams further!</p>
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