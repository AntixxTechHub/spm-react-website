import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import PHONE from "@/public/images/Phonenew.svg"
import EMAIL_LOGO from "@/public/images/email_logo.svg"


import SimpleImageSlider from "react-simple-image-slider";


const MainHeader = () => {
  return (
    <>
      {/* <div className="container-flex justify-content-center h-25 h-1 py-1" style={{ backgroundColor: "#fc7318", }}>
        <div className="container d-flex justify-content-between justify-content-center">
          <div className=" d-inline-flex">
            <Image
              className=""
              src={EMAIL_LOGO}
              alt="Picture of the author"
              width={17}
              height={17}
            />
            <a className="mx-2 text-white " style={{ fontSize: '12px', fontWeight: '500' }}>info@spmglobaltech.com</a>
            <Image
              className=""
              src={PHONE}
              alt="Picture of the author"
              width={17}
              height={17}
            />
            <a className="text-white fw-normal mx-2" style={{ fontSize: '12px', fontWeight: '500' }}>
              +91 9739380513</a>
          </div>
          <div className=" d-inline-flex">
            <a className="mx-3 text-white" style={{ fontSize: '12px' }}>Login</a>
            <a className="align-middle text-white " style={{ fontSize: '12px' }}>Sign Up</a>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default MainHeader;


// const handleClickPrev = () => {
//   if (index === 0) return;
//   setIndex(index - 1);
//   setXPosition(xPosition + width);
// };
// const handleClicknext = () => {
//   if (index === images.length - 1) {
//     setIndex(0);
//     setXPosition(0);
//   } else {
//     setIndex(index + 1);
//     setXPosition(xPosition - width);
//   }
// };



{/* <Carousel
            images={images}
            // setWidth={setWidth}
            // xPosition={xPosition}
            handleClickPrev={handleClickPrev}
            handleClicknext={handleClicknext}
          /> */}
{/* <span className="sub-title">How Can Help You </span>
            <h2>We,re helping teams do their best work</h2> */}
{/* <div>
              <h2>NextJs Carousel - GeeksforGeeks</h2>
              <Carousel>
                  <div>
                      <Image src={abc} alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <Image src={abc} alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <Image src={abc} alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
              </Carousel>
            </div> */}
{/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" >
              <div className="carousel-item active">
                <Image src={abc} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <Image src={abc} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <Image src={abc} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="section-title">

            </div>
          </div> */}
