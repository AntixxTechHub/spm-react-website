import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

import videoImg from "@/public/images/video.jpg";
import shape15 from "@/public/images/shape/shape15.png";
import shape16 from "@/public/images/shape/shape16.png";

const Funfacts = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="funfacts-area bg-fff9ee pt-100">
        <div className="container">
          <div className="section-title"style={{marginBottom: '15px'}}>
            <span className="sub-title yellow-color">USE CASES</span>
            <h2 className="nunito-font">
              Application Manifestation
            </h2>
          </div>
          <p className="w-100" style={{textAlign: "center"}}>
            Modern-day product-led organizations adopt agile encouraging continuous experimentation through independent teams aligned to OKRs. These independent teams turn around to service queries or customer needs faster, plan their sprints to modify the application and concerning data. This continuous architecture-driven approach helps businesses make well-informed, data-driven decisions to take their performance to new heights.
          </p>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-4 col-sm-4 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-funfacts-item">
                <div className="icon">
                  <i className="flaticon-employee"></i>
                </div>
                <h3>150+</h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4 col-sm-4 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-funfacts-item">
                <div className="icon">
                  <i className="flaticon-projects"></i>
                </div>
                <h3>50+</h3>
                <p>Team</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4 col-sm-4 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-funfacts-item">
                <div className="icon">
                  <i className="flaticon-rating"></i>
                </div>
                <h3>99%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>

          <div
            className="video-box"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Image src={videoImg} alt="video" />
            <div
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
              className="video-btn popup-youtube"
            >
              <i className="flaticon-play"></i>
            </div>
            <div className="shape15">
              <Image src={shape15} alt="shape" />
            </div>
            <div className="shape16">
              <Image src={shape16} alt="shape" />
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="BkCrxxALLY0"
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default Funfacts;
