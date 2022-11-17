import React from "react";
const UseCases = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 mx-auto usecase-body">
          <div className="row usecase-section">
            <div className="col-6"> <h1 className="p-3">USE CASES</h1></div>
            <div className="col-6"><p className="text-center">Application Manifestation</p></div>
          </div>
          <p className="usecase-p">
            Modern-day product-led organizations adopt agile encouraging
            continuous experimentation through independent teams aligned to
            OKRs. These independent teams turn around to service queries or
            customer needs faster, plan their sprints to modify the application
            and concerning data. This continuous architecture-driven approach
            helps businesses make well-informed, data-driven decisions to take
            their performance to new heights.
          </p>
          <div className="row justify-content-center">
            <div className="col-6 "> <a href="#" className="learn-more text-center">Learn More</a></div>
          </div>

        </div>
        {/* <div className="col-6 align-item-end">
          <div className="row">
            <div className="col-5 mx-3">
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className="w-100"
              />
              
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className="w-100"
              />
            </div>
            <div className="col-5 mx-3">
              <iframe className="w-100"
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className="w-100"
              />
            </div>
          </div>
        </div> */}

        {/* ______________________________________ */}



        <div className="col-6 align-item-end d-flex">
          <div className="col-5 m-4">
            <div className="card m-4 shadow">
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className="w-100"
              />
            </div>
            <div className="card m-4 shadow">
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className="w-100"
              />
            </div>
          </div>
          <div className="col-5 m-4">
            <div className="card m-4 shadow">
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className="w-100"
              />
            </div>
            <div className="card m-4 shadow">
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className="  ratio-21x9"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default UseCases;
