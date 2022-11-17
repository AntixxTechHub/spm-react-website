import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center card-h3 mb-4" style={{ color: '#326ebd' }}>Featured Tech Blogs & Insights</h3>
        </div>
      </div>
      <div className="row justify-content-center gx-5">
        <div className="card blogs-card p-0 mx-4" style={{ width: "18rem", borderRadius: '20px' }}>
          <img
            src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1657530233/cld-sample-2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body blogs-card-body">
            <div className="row">
              <div className="col-6">
                <p className="card-paragraph text-white">Enterprise AI</p>
              </div>
              <div className="col-6">
                <p className="card-paragraph text-end text-white">15 Nov 2021</p>
              </div>
            </div>
            <p className="card-text text-white mt-3">
              Briefing Machine learning Platforms with Services and Solutions
            </p>
            <a href="#" className="col-6 btn text-center read-more text-white mx-auto">Read More</a>
          </div>
        </div>
        <div className="card blogs-card p-0 mx-4" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1657530233/cld-sample-2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body blogs-card-body">
            <div className="row">
              <div className="col-6">
                <p className="card-paragraph text-white">Enterprise AI</p>
              </div>
              <div className="col-6">
                <p className="card-paragraph text-end text-white">15 Nov 2021</p>
              </div>
            </div>
            <p className="card-text text-white mt-3">
              Briefing Machine learning Platforms with Services and Solutions
            </p>
            <a href="#" className="col-6 btn text-center read-more text-white mx-auto">Read More</a>
          </div>
        </div>
        <div className="card blogs-card p-0 mx-4" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1657530233/cld-sample-2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body blogs-card-body">
            <div className="row">
              <div className="col-6">
                <p className="card-paragraph text-white">Enterprise AI</p>
              </div>
              <div className="col-6">
                <p className="card-paragraph text-end text-white">15 Nov 2021</p>
              </div>
            </div>
            <p className="card-text text-white mt-3">
              Briefing Machine learning Platforms with Services and Solutions
            </p>
            <a href="#" className="col-6 btn text-center read-more text-white mx-auto">Read More</a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        {/* <div className="col-5 align-items-center"> */}
        <button className="col-1 text-center discover-btn">Discover</button>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Blogs;
