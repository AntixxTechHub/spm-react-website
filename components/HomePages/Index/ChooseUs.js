import React from "react";
import Why_Choose_Us from "@/public/images/wch_img_1-01.svg"
import Image from "next/image";

const ChooseUs = () => {

  return (
    <div className="container-fluid mb-5">
      <div className="row chooseus-area">
        <div className="col-5 align-item-centre">
          <div className="row">
            <div className="col-12">
              <h1>Why Choose Us?</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="text-center  ">WHAT OUR CLIENTS ADMIRE</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 align-self-end m-5 d-flex align-items-centre flex-column">
              <Image
                className=""
                src={Why_Choose_Us}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="col-3 Services">
          <img src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658503008/wcu_icon_1_c4wd8b.png" className="w-25" alt="img" />
          <h3 className="">Agile</h3>
          <p className="TEXT_SIZE">
            Prompt turnarounds with a customer-centric approach are our traits.
            We ensure excellent service delivery and offer all-around support to
            help our clients embrace our solutions to beat the competition.
          </p>
          <img src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658503008/wcu_icon_2_x6fap8.png" className="w-25" alt="img" />
          <h3>Scalable</h3>
          <p className="TEXT_SIZE">
            We create excellent digital experiences with provisions to let our
            clients enhance their overall operational landscape. We make our
            technology-driven solutions expandable to encompass future
            possibilities
          </p>
        </div>
        <div className="col-3 Services">
          <img src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658503008/wcu_icon_3_u38vmj.png" className="w-25" alt="img" />
          <h3>Competent</h3>
          <p className="TEXT_SIZE">
            We strive to equip our clients with cutting-edge technology to
            automate their workflows. We improve their productivity and
            profitability through our customized solutions driven by AI and data
            analytics.
          </p>
          <img src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658503008/wcu_icon_4_oxfkd9.png" className="w-25" alt="img" />
          <h3>Budget-friendly</h3>
          <p className="TEXT_SIZE">
            We add incredible value to our clients by delivering the most
            trustworthy and efficient services. We help them work to the best of
            their capabilities to get solid ROI to keep ourselves away from
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChooseUs;