import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Image from "next/image";


import iot from "@/public/images/icon/iot.png";
import arvr from "@/public/images/icon/ar-vr.png";
import aiml from "@/public/images/icon/ai-ml.png";
import datascience from "@/public/images/icon/data-science.png";
import blockchain from "@/public/images/icon/block-chain.png";



const options = {
  nav: true,
  margin: 30,
  stagePadding: 30,
  loop: false,
  dots: false,
  autoplay: true,
  autoplayHoverPause: false,
  navText: [
    "<i className='bx bx-chevron-left'></i>",
    "<i className='bx bx-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

const CaseStudies = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="case-studies-area-pb with-top-border pt-100 bg-color">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="sub-title"></span>
          <h2>Emerging Technologies We Work On</h2>
        </div>
      </div>
      <div className="container-fluid">
        {display ? (
          <OwlCarousel
            className="case-studies-slides-banner owl-carousel owl-theme"
            {...options}
          >
            <div className="single-features-box">
              <div className="icon">
              <Image src={iot} alt="icon" />
              </div>
              <h3>IoT</h3>
              <p>
              Our team of talented IoT experts develops incredible solutions for devices, products, vehicles, and wearables.
              </p>
            </div>
            <div className="single-features-box active">
              <div className="icon">
              <Image src={arvr} alt="icon" />
              </div>
              <h3>AR/VR</h3>
              <p>
              We create terrific experiences for our users leveraging cutting-edge technology in Augmented Reality & Virtual Reality.
              </p>
            </div>
            <div className="single-features-box">
              <div className="icon">
              <Image src={aiml} alt="icon" />
              </div>
              <h3>AI/ML</h3>
              <p>
              Adding precision to your strategies, decisions, and outcomes through well-designed Ai & ML-driven solutions. 
              </p>
            </div>
            <div className="single-features-box active">
              <div className="icon">
              <Image src={datascience} alt="icon" />
              </div>
              <h3>Data Science</h3>
              <p>
              Assisting you with making data-driven, well-informed business decisions by extracting useful business insights.
              </p>
            </div>
            <div className="single-features-box">
              <div className="icon">
              <Image src={blockchain} alt="icon" />
              </div>
              <h3>Blockchain</h3>
              <p>
              Revolutionizing your business transactions by adopting the latest technology powered by AI.
              </p>
            </div>

          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
