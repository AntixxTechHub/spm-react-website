import React from "react";

import Image from "next/image";
import Link from "next/link";

import App_Development_2 from "@/public/images/App_Development_2.jpg";
import Artificial_Intelligence_and_Machine_Learning from "@/public/images/Artificial_Intelligence_and_Machine_Learning.jpg";
import custom_solutions_development_2 from "@/public/images/custom_solutions_development_2.jpg";

import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
// import SimpleImageSlider from "react-simple-image-slider";
// var Carousel = require('react-responsive-carousel').Carousel;
import Carousel from 'react-bootstrap/Carousel'

const Banner = () => {
  const [banner, setBanner] = React.useState();
  const images = [
    { url: "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1657690070/small_sample_89d9107013.jpg" },
    { url: "https://reactscript.com/wp-content/uploads/2016/08/multi-slider.png" },
    { url: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2019/08/ReactSlider_featured.jpg" }
  ];
  React.useEffect(() => {
    const getBanner = async () => {
      // const response = await axios.get(
      //   `${baseApiUrl}/api/it-startup-banner?populate=*`
      // );
      setBanner(images);
    };
    getBanner(banner);
  }, []);
  console.log();
  return (

    <>
      {banner &&
        <div style={{ marginTop: '85px' }} >
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image className="d-block w-100" src={App_Development_2} alt="First slide" />
              </div>
              <div className="carousel-item">
                <Image className="d-block w-100" src={Artificial_Intelligence_and_Machine_Learning} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <Image className="d-block w-100" src={custom_solutions_development_2} alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" onClick="$('#carouselExampleIndicators').carousel()" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      }
    </>
  );
};

export default Banner;