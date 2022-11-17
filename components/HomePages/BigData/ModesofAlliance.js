import React from "react";
import Image from "next/image";

import goalImg2 from "@/public/images/goal2.jpg";

const Goal = () => {
  return (
    <div className="goal-area ptb-100 br-bottom-100 bg-f9f9f9">
      <div className="container">
      <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h2 className="nunito-font">Modes of Alliance</h2>
          <span className="goal-text">SPM Global Technologies has been a trusted solution provider for diverse technology-oriented services. Here are the ways you can partner with us for your digital transformation needs and more:</span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="goal-img">
              <Image src={goalImg2} alt="goal-image" />
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="goal-text">
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="1200">
                  <h3>Stipulated Price Model</h3>
                  <p className="w-100" style={{textAlign: "justify"}}>
                  Our project management experts discuss the project scope and associated costs and determine an overall project cost beforehand. They determine a stipulated price for your project before beginning the development process. The stipulated Price Model suits long-term engagements and provides complete peace of mind to our clients, as we execute the project at the agreed-upon price. If you have a precise vision of your needs, we recommend you choose this mode of an alliance.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Per-Hour Rate Model</h3>
                  <p className="w-100" style={{textAlign: "justify"}}>
                  This model simplifies your control of the product-building process. You pay for the hours our development team works on your project - and that’s it! Don’t you have the detailed specifications of the solution you require? Not to worry - You keep monitoring the development process through strong mutual communication. Along with this, you can come up with innovative ideas to add features to your product or solution, and our team will deliver them within the schedule. This mode of alliance brings trust and transparency throughout the journey.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Resource Allocation Model</h3>
                  <p className="w-100" style={{textAlign: "justify"}}>
                    Do you need face-to-face interactions with our developers? You can choose the resource allocation model to have temporary additional resources working through your premise. This mode of alliance keeps the process cost-effective and helps you meet your project deadlines. You can have better interaction with our expert developers throughout the process and effectively monitor it.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
