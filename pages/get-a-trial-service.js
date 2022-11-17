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

const Services = () => {
  
  return (
    <>
      <PageTitle page="Get A Free Trial Service" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Get A Free Trial Service" />

     <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
            <div className="contact-form">
                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                <input name="oid" type="hidden" defaultValue="00D2v000003PByK" />
                      <input name="retURL" type="hidden" defaultValue="http://www.spmglobaltech.com" />
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
                        <label>Trail Service On</label>
                        <select className="form-control" id="00N2y000002FXr7" name="00N2y000002FXr7" title="Product Type">
                                <option>--None--</option>
                                <option value="IoT">IOT</option>
                                <option value="Big Data">Big Data</option>
                                <option value="Cyber Security & Cloud">Cyber Security and Cloud</option>
                                <option value="Blockchain">Blockchain</option>
                                <option value="Data Science">Data Science</option>
                                <option value="BMC">BMC</option>
                                <option value="Service Now">Service Now</option>
                                <option value="Salesforce">Salesforce</option>
                                <option value="AWS">AWS</option>
                                <option value="SAP">SAP</option>
                                <option value="Analytics">Analytics</option>
                                <option value="Mainframe">Mainframe</option>
                                <option value="ERP Application">ERP Application</option>
                                <option value="Other">Other</option>
                              </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Message...</label>
                        <textarea
                          cols="30"
                          rows="6"
                          className="form-control"
                          id="00N2v00000XQu8f" name="00N2v00000XQu8f" type="text" wrap="soft" defaultValue={""}
                          required
                          onBlur={event => handleBlur('00N2v00000XQu8f')}
                        ></textarea>
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
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={gtstopimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export default Services;