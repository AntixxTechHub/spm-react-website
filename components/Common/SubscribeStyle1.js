import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const SubscribeStyle1 = () => {
  const [subscribeOurNewsletter, setSubscribeOurNewsletter] = React.useState();
  React.useEffect(() => {
    const getSubscribeOurNewsletter = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/subscribe-our-newsletter?populate=*`
      );
      setSubscribeOurNewsletter(response.data);
      // console.log(response.data)
    };
    getSubscribeOurNewsletter();
  }, []);

  return (
    <>
      {subscribeOurNewsletter && (
        <div className="subscribe-area bg-f9f9f9 ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div
                  className="subscribe-content"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  <span className="sub-title">
                    {subscribeOurNewsletter?.data?.attributes?.subTitle}
                  </span>
                  <h2>{subscribeOurNewsletter?.data?.attributes?.title}</h2>
                  <form className="newsletter-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                    <input name="oid" type="hidden" defaultValue="00D2v000003PByK" />
                    <input name="retURL" type="hidden" defaultValue="https://www.spmglobaltech.com" />
                    <div className="row">
                      <div className="col-xl-8 col-lg-7 col-md-8">
                        <input id="email" maxLength={80} name="email" size={20} type="text" required autoComplete="off" className="input-newsletter" placeholder="Enter your email address" />
                      </div>
                      <div style={{ "display": "none" }}>
                        <label htmlFor="lead_source">lead Source</label>
                        <input id="lead_source" maxLength={40} name="lead_source" size={20} type="text" defaultValue="Website" />
                        <label htmlFor="Subscribed__c">Subscribe</label>
                        <input id="Subscribed__c" maxLength={40} name="Subscribed__c" size={20} type="text" defaultValue="True" />
                      </div>
                      <div className="col-xl-4 col-lg-5 col-md-4">
                        <button type="submit" className="btn-style-one green-color">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="subscribe-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src={
                      subscribeOurNewsletter?.data?.attributes?.image.data
                        .attributes.url
                    }
                    alt={
                      subscribeOurNewsletter?.data?.attributes?.image.data
                        .attributes.alternativeText
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribeStyle1;
