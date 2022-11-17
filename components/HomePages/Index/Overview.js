import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Overview = () => {
  // Services We Offer
  const [servicesWeOffer, setServicesWeOffer] = React.useState();
  React.useEffect(() => {
    const getServicesWeOffer = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/services-we-offer?populate=*`
      );
      setServicesWeOffer(response.data);
      // console.log(response.data)
    };
    getServicesWeOffer();
  }, []);

  // Our Services
  const [ourServices, setOurServices] = React.useState();
  React.useEffect(() => {
    const getOurServices = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/our-services-style-1?populate=*`
      );
      setOurServices(response.data);
    };
    getOurServices();
  }, []);
  return (

    <div className="blog-area with-top-border pb-75 pt-100 back_ground" style={{
      marginTop: '15%',
    }}>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <h5 className="text-light">Our 13 years of achievements includes:</h5>
            <h6 className="text-light">  10M+ lines of codes</h6>
            <h6 className="text-light">  2400+ projects completed</h6>
            <h6 className="text-light"> 900+ satisfied clients</h6>
            <h6 className="text-light">  16+ countries served</h6>
          </div>
          {/* //form */}
          <div className="col-lg-5 col-md-5 pb-4 px-5" style={{ width: "50vw" }}>
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
  );
};

export default Overview;
