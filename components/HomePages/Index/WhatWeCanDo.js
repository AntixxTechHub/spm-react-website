import React from "react";
import App_Development_2 from "@/public/images/App_Development_2.jpg";
import Artificial_Intelligence_and_Machine_Learning from "@/public/images/Artificial_Intelligence_and_Machine_Learning.jpg";
import custom_solutions_development_2 from "@/public/images/custom_solutions_development_2.jpg";
import Image from "next/image";
import baseApiUrl from "@/utils/baseApiUrl";
import Carousel from 'react-bootstrap/Carousel'

// const WhatWeCanDo = () => {
//   const [banner, setBanner] = React.useState();
//   const images = [
//     { url: "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1657690070/small_sample_89d9107013.jpg" },
//     { url: "https://reactscript.com/wp-content/uploads/2016/08/multi-slider.png" },
//     { url: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2019/08/ReactSlider_featured.jpg" }
//   ];
//   // React.useEffect(() => {
//   //   const getBanner = async () => {
//   //     const response = await axios.get(
//   //       `${baseApiUrl}/api/it-startup-banner?populate=*`
//   //     );
//   //     setBanner(response.data);
//   //   };
//   //   getBanner();
//   // }, []);
//   return (
//     <>
//     <div  style={{marginTop: '85px'}} >
//       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//       {/* <h1>askamslmasl</h1> */}
//         <ol className="carousel-indicators">
//           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <Image className="d-block w-100" src={App_Development_2} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <Image className="d-block w-100" src={Artificial_Intelligence_and_Machine_Learning} alt="Second slide" />
//           </div>
//           <div className="carousel-item">
//             <Image className="d-block w-100" src={custom_solutions_development_2} alt="Third slide" />
//           </div>
//         </div>
//         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" onclick="$('#carouselExampleIndicators').carousel()" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//   </>
//   );
// };


// import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import axios from "axios";
// import baseApiUrl from "@/utils/baseApiUrl";

const options = {
  loop: false,
  nav: false,
  autoplay: false,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 10,
  center: false,
  dots: true,
  autoHeight: true,
  smartSpeed: 1500,

  responsive: {
    0: {
      items: 3,
      margin: 30,
    },
    576: {
      items: 3,
      margin: 30,
    },
    768: {
      items: 5,
      margin: 30,
    },
  },
};

const partnersList_new = [
  { "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658481797/implementation_services_rqr7co.png", alt: "abc.png", header: "Implementation Services", content: "We offer end-to-end implementation of various ITSM products and services." },
  { "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658482332/enabling_digital_transformation_2_plx8me.png", alt: "abc.png", header: "Integration Services", content: "We deploy simple to complex integrations to help our clients enjoy a consistent integrated experience" },
  // { "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658482333/enabling_digital_transformation_3_mh3jcp.png", alt: "abc.png", header: "AWS Cloud Migration", content: "We facilitate seamless communication and data transfer across applications." },
  // { "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658482332/enabling_digital_transformation_4_yb5fh8.png", alt: "abc.png", header: "Consulting & Advisory Services", content: "We help our clients embrace cutting-edge technology by guiding them through the path." },
  // { "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658481797/implementation_services_rqr7co.png", alt: "abc.png", header: "Implementation Services", content: "We offer end-to-end implementation of various ITSM products and services." },
  // { "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658482332/enabling_digital_transformation_2_plx8me.png", alt: "abc.png", header: "Integration Services", content: "We deploy simple to complex integrations to help our clients enjoy a consistent integrated experience" },
  // { "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658482333/enabling_digital_transformation_3_mh3jcp.png", alt: "abc.png", header: "AWS Cloud Migration", content: "We facilitate seamless communication and data transfer across applications." },
  // { "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658482332/enabling_digital_transformation_4_yb5fh8.png", alt: "abc.png", header: "Consulting & Advisory Services", content: "We help our clients embrace cutting-edge technology by guiding them through the path." },

]
const WhatWeCanDo = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  // Partner API
  const [partner, setPartner] = React.useState();
  React.useEffect(() => {
    const getPartner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/partner?populate=partnersList.image`
      );
      setPartner(response.data);
      // console.log(response.data)
    };
    getPartner();
  }, []);

  return (
    <>
      {partner && (
        <div className="partner-area ptb-100">
          <div className="container">
            <div className="row mb-4">
              <div className="col-12">
                <h4 className="text-center text-danger">
                  Our Services that help you connect to
                </h4>
                <h5 className="text-center text-danger">
                  What We Do
                </h5>
              </div>
            </div>
            <div className="partner-slides">

              {display ? (

                <OwlCarousel
                  className="partner-slides owl-carousel owl-theme"
                  {...options}
                >
                  {partnersList_new.map((partnerLogo) => (

                    <div className="image">
                      <div className="partner-item" key={partnerLogo.id} >
                        {/* <div className="bg-image"
                        style="background-image: url{partnerLogo.src};height: 100vh;"></div> */}
                        {/* <div className="image"
                        style={{
                          width: '332px',
                        }}
                      > */}
                        {/* <h1>dsds</h1> */}
                        <img className="img_size"
                          src={partnerLogo.src}

                        />
                        {/* </div> */}

                        <div>
                          <p className="p-0" style={{
                            position: 'absolute',
                            bottom: '132px',
                            left: '52px',
                            fontSize: '15px'
                          }}> {partnerLogo.header}</p>

                          <p className="p-0" style={{
                            position: 'absolute',
                            bottom: '60px',
                            left: '29px',
                            fontSize: '12px'
                          }}> {partnerLogo.content}</p>

                        </div>

                        {/* <div>
                        <h5>{partnerLogo.header}</h5>
                        <p>{partnerLogo.content}</p>
                      </div> */}
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatWeCanDo;








// export default Banner;

// const WhatWeCanDo=()=>{
//  return (
//     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="./images/case-studies/case-studies6.jpg" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="./images/case-studies/case-studies4.jpg" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="./images/case-studies/case-studies5.jpg" className="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//     )
// }
// export default WhatWeCanDo;