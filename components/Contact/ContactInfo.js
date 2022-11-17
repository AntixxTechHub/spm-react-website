import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area bg-f1f5fd">
        <div className="container">
          <div className="contact-info-inner">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box" style={{ height: '275px' }}>
                  <div className="icon bg1">
                    <i className="bx bx-phone-call"></i>
                  </div>
                  <p>
                    <a href="tel:+91 97393 80513">+91 97393 80513</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box" style={{ height: '275px' }}>
                  <div className="icon">
                    <i className="bx bx-envelope"></i>
                  </div>
                  <p>
                    <a href="mailto:info@spmglobaltech.com">info@spmglobaltech.com</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box" style={{ height: '275px' }}>
                  <div className="icon bg2">
                    <i className="bx bx-map"></i>
                  </div>
                  <p>#63/3, Arham Towers, 3rd Floor, Krishna Rajendra Road, 7th Block, Jayanagar, Bengaluru - 560070, India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
