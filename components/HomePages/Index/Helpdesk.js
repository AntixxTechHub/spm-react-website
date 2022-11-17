import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import abc from "@/public/images/services-details.jpg";
import abc2 from "@/public/images/working-process.jpg";
import SimpleImageSlider from "react-simple-image-slider";

const Helpdesk = () => {

  const [services, setServices] = React.useState();
  // const [index, setIndex] = useState(0);
  // const [width, setWidth] = useState(0);
  // const [xPosition, setXPosition] = useState(0);
  const images = [
    { url: "https://paper-attachments.dropbox.com/s_90D36719F163C7985D6ADF74D3BA26A6444FA61145AE448965DA37ACA64C393C_1626370423570_Screen+Shot+2021-07-15+at+11.03.18+PM.png" },
    { url: "https://reactscript.com/wp-content/uploads/2016/08/multi-slider.png" },
    { url: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2019/08/ReactSlider_featured.jpg" }
  ];
  React.useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(`${baseApiUrl}/api/services?populate=*`);
      console.log("---------------------------response", response)
      setServices(response.data);
      // console.log(response.data)
    };
    getServices();
  }, []);

 
  return (
    <>
      <div className="help-desk-area pt-100 pb-75">
        <div className="container-fluid">
          {services && (
            <div className="row justify-content-center">
              {services.data.slice(0, 4).map((service) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  key={service.id}
                >
                  <div className="single-help-desk-box">
                    <div className="icon">
                      <img
                        src={service.attributes.image?.data?.attributes?.url}
                        alt={
                          service.attributes.image.data.attributes
                            .alternativeText
                        }
                      />
                    </div>
                    <h3>{service.attributes.title}</h3>
                    <p>{service.attributes.shortText}</p>
                    <Link href={`/services/${service.attributes.slug}`}>
                      <a className="link-btn">
                        {service.attributes.btnText}{" "}
                        <i className="bx bx-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Helpdesk;


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
