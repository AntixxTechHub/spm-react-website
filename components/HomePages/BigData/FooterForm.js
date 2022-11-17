import React from "react";
import Image from "next/image";

import appDownloadImg2 from "@/public/images/app-download2.png";
import playStoreImg from "@/public/images/play-store.png";
import appleStoreImg from "@/public/images/apple-store.png";

const AppDownload = () => {
  return (
    <div className="app-download-area bg-711f7f">
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-12">
            <div className="app-download-content">
              <h2
                className="nunito-font"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Our 13 years of achievements includes:
              </h2>
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                10M+ lines of codes
              </span>
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                10M+ lines of codes
              </span>
              </span>
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                900+ satisfied clients
              </span>
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                16+ countries served
              </span>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="app-download-content">
              <div style={{ width: "50vw" }}>
            <div className="contact-from-size bottom-0 end-0 contactFormBgImg">
              {/* <h6 className="bg-danger text-light">form</h6> */}
              <form className="row g-3 font_size contact-form">
                <div className="col-md-6">
                  {/* <label for="inputName" className="form-label">First Name <span className="text-danger">*</span></label> */}
                  <input type="text" className="form-control font_size " placeholder="First name" aria-label="First name" />
                </div>
                <div className="col-md-6">
                  {/* <label for="inputLastName" className="form-label font_size">Last Name <span className="text-danger">*</span></label> */}
                  <input type="text" className="form-control font_size" placeholder="Last name" aria-label="last name" />
                </div>

                <div className="col-12">
                  {/* <label for="inputemail" className="form-label">Email <span className="text-danger">*</span></label> */}
                  <input type="email" className="form-control font_size" id="inputemail" placeholder="Email" aria-label="Email" />
                </div>

                <div className="col-12">
                  {/* <label for="inputContactNumber" className="form-label">Contact Number <span className="text-danger">*</span></label> */}
                  <input type="text" className="form-control font_size" id="inputContactNumber" placeholder="Your Contact" aria-label="Your Contact" />
                </div>
                <div className="col-md-6">
                  {/* <label for="inputAddress" className="form-label">Address<span className="text-danger">*</span></label> */}
                  <textarea id="textarea" className="form-control font_size" placeholder="Address" name="textarea" rows="4" cols="57"></textarea>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-6 d-grid">
                      <button className="btn-sm btn btn-danger font_size">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default AppDownload;
