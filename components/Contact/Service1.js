import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import gtstopimg from "@/public/images/gts_top_img.svg";

const handleBlur = (perem) => {
  let msg = document.getElementById(perem).value;
  if (new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(msg)) {
    document.getElementById('btnSave').disabled = true;
    document.getElementById('isShowErrorMsg').style.display = "block";
  } else {
    document.getElementById('isShowErrorMsg').style.display = "none";
    document.getElementById('btnSave').disabled = false;
  }
}



const PageTopTtle = ({ subTtle, ttle }) => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <span className="sub-title">{subTtle}</span>
          <h1>{ttle}</h1>
        </div>
      </div>
    </div>
  );
};

const services = ({ttle}) => {
  
  return (
    <>
      {/* <PageTitle page="Service1" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Contact US" /> */}
        <br></br>
        <br></br>
        <h2><center> Get A Free Trial Service On </center></h2>
        <div
              className="col-lg-12 col-md-6 col-sm-6"
              data-aos="flip-right"
              data-aos-duration="1200"
            >
       
         <center> <strong><h4>   {ttle} </h4></strong>   </center>   
        
        
        </div>

     <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
            <div className="contact-form">
                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                <input name="oid" type="hidden" defaultValue="00D2v000003PByK" />
                      <input name="retURL" type="hidden" defaultValue="https://www.spmglobaltech.com" />
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          className="form-control"
                          id="first_name" maxLength={40} name="first_name" size={20} type="text"
                          required
                          onBlur={event => handleBlur('first_name')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          className="form-control"
                          id="last_name" maxLength={80} name="last_name" size={20} type="text"
                          required
                          onBlur={event => handleBlur('last_name')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          className="form-control"
                          id="phone" maxLength={40} name="phone" size={20} type="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          className="form-control"
                          id="email" maxLength={80} name="email" size={20} type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Company</label>
                        <input
                          className="form-control"
                          id="company" maxLength={40} name="company" size={20} type="text"
                          required
                          onBlur={event => handleBlur('company')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Country</label>
                        <input
                          className="form-control"
                          id="country" maxLength={40} name="country" size={20} type="text"
                          required
                          onBlur={event => handleBlur('country')}
                        />
                      </div>
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Message.</label>
                        <textarea
                          cols="30"
                          rows="6"
                          className="form-control"
                          id="00N2v00000XQu8f" name="00N2v00000XQu8f" type="text" wrap="soft" defaultValue={""}
                          required
                          onBlur={event => handleBlur('00N2v00000XQu8f')}
                        ></textarea>



<div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkme"
                        />
                        <label className="form-check-label" htmlFor="checkme">
                          I would like to receive alerts and updates from SPM Global Technology{" "}
                          {/* <Link href="/terms-conditions">
                            <a>Terms of Services</a>
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                          </Link> */}
                        </label>
                      </div>
                    </div>





                        <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkme"
                        />
                        <label className="form-check-label" htmlFor="checkme">
                          Accept{" "}
                          <Link href="/terms-conditions">
                            <a>Terms of Services</a>
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                          </Link>
                        </label>
                      </div>
                    </div>
                      </div>
                      <div style={{display: 'none'}}>
                      <label for="Free_Trial_Service_Request_c">Free Trial Service Requestc</label>
                      <input id="Free_Trial_Service_Request__c" maxLength={40} name="Free_Trial_Service_Request__c" size={20} type="text" defaultValue="True" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <label className="col-lg-12 col-md-12 col-sm-12" style={{ display: 'none' }} id="isShowErrorMsg">Invalid form value</label>
                       <button id="btnSave"
                        type="submit"
                        className="btn-style-one red-light-color"
                   onClick={()=>alertContent()}   >
                        Send Message
                      </button>
                      </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={gtstopimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};


export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=erp&populate=*`
  );
  const seo = await res.json();

  // By returning { props: { blog } }, the Blog component
  // will receive `blog` as a prop at build time
  return {
    props: {
      seo,
    },
  };
}

export default services ;