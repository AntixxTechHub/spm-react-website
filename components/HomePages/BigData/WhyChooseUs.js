import React from "react";
import Link from "next/link";
import wch_img from "@/public/images/wch_img.svg";
import wcu_icon_1 from "@/public/images/icon/wcu_icon_1.png";
import wcu_icon_2 from "@/public/images/icon/wcu_icon_2.png";
import wcu_icon_3 from "@/public/images/icon/wcu_icon_3.png";
import wcu_icon_4 from "@/public/images/icon/wcu_icon_4.png";
import Image from "next/image";

const HelpDesk = () => {
  return (
    <div className="help-desk-area pt-100 pb-75">
      <div className="container">
        <div className="row align-items-center pb-5">
          <div className="col-lg-6 col-md-12" style={{ padding: 'inherit' }}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="section-title text-start">
              <h2 className="sub-title">Why Choose Us?</h2>
              <h3>WHAT OUR CLIENTS ADMIRE?</h3>
              <Image src={wch_img} alt="overview-image" />
              <div
                className="col-lg-6 col-md-12 overview-image"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1200"
              >

                <div className="single-help-desk-item">
                  <div className="icon ">
                    <Image src={wcu_icon_1} alt="" />
                  </div>
                  <h3>Agile</h3>
                  <p>
                    Prompt turnarounds with a customer-centric approach are our traits. We ensure excellent service delivery and offer all-around support to help our clients embrace our solutions to beat the competition.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="single-help-desk-item">
                  <div className="icon">
                    <Image src={wcu_icon_2} alt="" />
                  </div>
                  <h3>Competent</h3>
                  <p>
                    We strive to equip our clients with cutting-edge technology to automate their workflows. We improve their productivity and profitability through our customized solutions driven by AI and data analytics.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="single-help-desk-item">
                  <div className="icon">
                    <Image src={wcu_icon_3} alt="" />
                  </div>
                  <h3>Scalable</h3>
                  <p>
                    We create excellent digital experiences with provisions to let our clients enhance their overall operational landscape. We make our technology-driven solutions expandable to encompass future possibilities
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="single-help-desk-item">
                  <div className="icon">
                    <Image src={wcu_icon_4} alt="" />
                  </div>
                  <h3>Budget-friendly</h3>
                  <p>
                  We add incredible value to our clients by delivering the most trustworthy and efficient services. We help them work to the best of their capabilities to get solid ROI to keep ourselves away from the crowd.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
