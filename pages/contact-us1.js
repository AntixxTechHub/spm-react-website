import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import MainHeader from "@/components/HomePages/Index/MainHeader";
import GoogleMap from "@/components/Contact/GoogleMap";

const Contact = () => {
  return (
    <>
      <PageTitle page="Contact us" />
      <MainHeader />
      <Navbar />
      <div className="contact-area pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <img src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658313084/contact_us_main-01_wwdchc.svg" alt="faq1.png" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mt-5">
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-9 mb-3">
                  <div className="contact-headers">
                    <h5></h5>
                    <h2><strong>Contact us</strong></h2>
                  </div>
                </div>
              </div>
              <div className="contact-address row">
                <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                  <p className="row">
                    <div className="col-sm-2 location-icon">
                      <img src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658484560/location_itrvy9.png" alt="location"></img>
                    </div>
                    <div className="col-sm-1">
                      <div className="addr-border1"></div>
                      <div className="addr-border2"></div>
                    </div>
                    <div className="col-sm-9 addr-border">
                      <h6 className="mt-3">Delivery Office</h6>
                      <p>

                        #63/3, Arham Towers, 3rd Floor, Krishna Rajendra Road,<br></br>
                        7th Block, Jayanagar, Bengaluru - 560070, India.
                      </p>
                    </div>
                  </p>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                  <p className="row">
                    <div className="col-sm-2 location-icon">
                      <img src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658484560/location_itrvy9.png" alt="location"></img>
                    </div>
                    <div className="col-sm-1">
                      <div className="addr-border1"></div>
                      <div className="addr-border2"></div>
                    </div>
                    <div className="col-sm-9 addr-border">
                      <h6 className="mt-3">Sales Office</h6>
                      <p>
                        P O box 8706, Al tobaishi,1st street<br></br>
                        Dammam 31492
                      </p>
                    </div>
                  </p>
                </div>
                {/* <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                  <p className="row">
                    <div className="col-sm-2 location-icon">
                      <img src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658484560/location_itrvy9.png" alt="location"></img>
                    </div>
                    <div className="col-sm-1">
                      <div className="addr-border1"></div>
                      <div className="addr-border2"></div>
                    </div>
                    <div className="col-sm-9 addr-border">
                      <h6 className="mt-3">Sales Office</h6>
                      <p>
                        1817, Kitasuna 5-Chome Danchi,<br></br>
                        Koto-ku-1360073 Tokyo.
                      </p>
                    </div>
                  </p>
                </div> */}
              </div>
              {/* <GoogleMap /> */}
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <div className="border-tb" />
      <FooterOne />
    </>
  );
};

export default Contact;
