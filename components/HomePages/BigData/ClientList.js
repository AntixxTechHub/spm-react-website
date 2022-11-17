import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const options = {
  loop: false,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 0,
  center: false,
  dots: false,
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

const PartnerStyle1 = () => {
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
        <div className="partner-area">
          <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="text-center">We are the Most Reliable Digital Transformation Partner!</h2>
              <h2 className="text-center">Trusted Success Partners for 100+ Clients</h2>
              <p className="text-center"> The list of our most satisfied clients is ever-growing! We have worked with companies from various sectors and various sizes.
                Our global clientele includes large fortune 500 corporations, small to medium businesses, and government agencies. Adopting
                agile, we have been frequently assessing different stages of the software development process. We keep on improvising, by
                upgrading our skills to achieve ‘bang-on-target’ outcomes. Our clients rely on us as we take them through the journey of digital
                transformation by leveraging cloud-native and AI-driven technologies to make their businesses future-ready.</p>
            </div>
            <h2 className="text-center text-danger">Trusted Customers</h2>
          </div>
            <div className="partner-slides">
              {display ? (
                <OwlCarousel
                  className="partner-slides owl-carousel owl-theme"
                  {...options}
                >
                  {partner?.data?.attributes?.partnersList.map((partnerLogo) => (
                    <div className="partner-item" key={partnerLogo.id}>
                      <img
                        src={partnerLogo.image?.data?.attributes?.url}
                        alt={partnerLogo.image?.data?.attributes?.alternativeText}
                      />
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

export default PartnerStyle1;
