import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Overview = () => {
  // Services WeO ffer
  const [servicesWeOffer, setServicesWeOffer] = React.useState();
  const serviceOfferData = []
  React.useEffect(() => {
    const getServicesWeOffer = async () => {

      const servicesOffer = await axios.get(
        `${baseApiUrl}/api/services-offers?populate=* `
      );
      console.log("------ services-offer --aaa------------", servicesOffer)
      await servicesOffer.data.data.forEach((element) => {
        console.log("element", element);
        // console.log("props.flag", props.flag);
        if (element.attributes.flag == "itsm") {
      
          serviceOfferData.push(element)
        }
      });
      console.log("------ services-offer --------------", serviceOfferData)

      const response = await axios.get(
        `${baseApiUrl}/api/services-we-offer?populate=*`
      );
      console.log("------ services-offer --------------aaaaaa", serviceOfferData[0])
      setServicesWeOffer(serviceOfferData[0]);
      // console.log(response.data)
    };
    getServicesWeOffer();
  }, []);

  // Our Services
  const [ourServices, setOurServices] = React.useState();
  React.useEffect(() => {
    const getOurServices = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/our-services-style-1?populate=*`
      );
      setOurServices(response.data);
      // console.log(response.data)
    };
    getOurServices();
  }, []);

  return (
    <div className="overview-area ptb-100 bg-f9f9f9">
      <div className="container">
        <div className="overview-box">
          {servicesWeOffer && (
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 overview-image">
                <img
                  src={
                    servicesWeOffer.attributes.image.data[0].attributes.url
                  }
                  alt={
                    servicesWeOffer.attributes.image.data[0].attributes.alternativeText

                  }
                />
              </div>

              <div className="col-lg-6 col-md-12 overview-content">
                <span className="sub-title">
                  { servicesWeOffer.attributes.subTitle}
                </span>

                <h2>{servicesWeOffer.attributes.title}</h2>

                <p >{servicesWeOffer.attributes.description}</p>
                {/* <ul className="overview-list">
                  {servicesWeOffer?.data?.attributes?.servicesList.map((list) => (
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      key={list.id}
                    >
                      <span>
                        <i className="flaticon-draw-check-mark"></i>
                        {list.text}
                      </span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          )}
        </div>

        <div className="overview-box">
          {ourServices && (
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 overview-content">
                <span className="sub-title">
                  {ourServices?.data?.attributes?.subTitle}
                </span>

                <h2>{ourServices?.data?.attributes?.title}</h2>

                {/* <ul className="overview-list">
                  {ourServices?.data?.attributes?.servicesList.map((list) => (
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      key={list.id}
                    >
                      <span>
                        <i className="flaticon-draw-check-mark"></i>
                        {list.text}
                      </span>
                    </li>
                  ))}
                </ul> */}
              </div>

              <div className="col-lg-6 col-md-12 overview-image">
                <img
                  src={ourServices?.data?.attributes?.image?.data?.attributes?.url}
                  alt={
                    ourServices?.data?.attributes?.image.data.attributes
                      .alternativeText
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
