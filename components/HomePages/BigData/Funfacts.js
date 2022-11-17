import React from "react";

const Funfacts = () => {
  return (
    <div className="funfacts-area pb-99 ">
      <div className="container">
      <div className="section-title">
            <h2 className="nunito-font">Our 13 years of achievements includes:</h2>
            </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-3 col-sm-3 col-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-funfacts-box">
              <div className="icon">
                <i className="flaticon-projects"></i>
              </div>
              <h3>10M+</h3>
              <p>Lines of Codes</p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-3 col-sm-3 col-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-funfacts-box">
              <div className="icon">
                <i className="flaticon-rating"></i>
              </div>
              <h3>655</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-3 col-sm-3 col-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-funfacts-box">
              <div className="icon">
                <i className="flaticon-expert"></i>
              </div>
              <h3>16+</h3>
              <p>Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funfacts;
