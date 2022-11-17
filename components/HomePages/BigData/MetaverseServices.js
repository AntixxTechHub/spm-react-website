import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg12 from "@/public/images/shape/shape12.png";
import shapeImg13 from "@/public/images/shape/shape13.png";

const FreeTrial = () => {
  return (
    <div className="free-trial-area">
      <div className="container col-lg-12 col-md-12">
        <div className="free-trial-inner">
          <h2
            className="nunito-font"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Metaverse Services Enabling Extended Brand Presence
          </h2>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          We take you to a different virtual online world through our Metaverse Services for an all-new approach towards Neural Company
          </p>
          <div
            className="btn-box"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <Link href="/get-a-trial-service">
              <a className="btn-style-one green-color2">
                Get A Free Trial Service
              </a>
            </Link>
            <Link href="/metaverse">
              <a className="btn-style-one white-color">
                Learn More
              </a>
            </Link>
          </div>

          {/* Shape Images */}
          <div className="shape12">
            <Image src={shapeImg12} alt="shape" />
          </div>
          <div className="shape13">
            <Image src={shapeImg13} alt="shape" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
