import React, { useState } from "react";
import PageTitle from "@/components/Layout/PageTitle";
// import Navbar3 from "@/components/Layout/Navigations/Navbar3";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import MainHeader from "@/components/HomePages/Index/MainHeader";
import Navbar from "@/components/Layout/Navigations/Navbar1";

const alertContent = () => {
    MySwal.fire({
        title: "Congratulations!",
        text: "Your message was successfully send and will back to you soon",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    companyName: "",
    country: "",
    industry: "",
    services: "",
    projectBudget: "",
    trailService: "",
    file: "",
    message: ""
};

const TrialContactUs = () => {

    const [contact, setContact] = useState(INITIAL_STATE);
    const [projectBudget, setPrice] = useState(40);

    const handleInput = (e) => {
        setPrice(e.target.value);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, companyName, country, industry, services, projectBudget, trailService, file, message } = contact;
            const payload = { name, email, number, companyName, country, industry, services, projectBudget, trailService, file, message };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <> <PageTitle page="Get A Trail Services" />
            <MainHeader />
            <Navbar />
            <div className="trial-contact ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="trail mt-5">
                            <h3>Get A Trial Service</h3>
                            <img className="trial-img" src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658497053/gts_top_img_olczj4.svg" alt="trailservice"></img>
                        </div>

                        <div className="trial-contact">
                            {/* <img src="https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658496996/gts_contact_bg_r5qlib.svg" alt="contact"></img> */}

                            <div className="trailcontact-page bottom-0 end-0 contactFormBgImg">
                                <form onSubmit={handleSubmit} className="row g-3 font_size trailcontact-form-val">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="First name" aria-label="First name" className="form-control input-text-size" value={contact.name} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div className="form-group">
                                                <input type="text" name="email" placeholder="Email" aria-label="Email" className="form-control input-text-size" value={contact.email} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div className="form-group">
                                                <input type="text" name="phoneNumber" placeholder="Phone Number" aria-label="phone number" className="form-control input-text-size" value={contact.number} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div className="form-group">
                                                <input type="text" name="Company Name" placeholder="Company Name" aria-label="Company Name" className="form-control input-text-size" value={contact.subject} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div className="form-group">
                                                <input type="text" name="country" placeholder="Country"
                                                    aria-label="country" className="form-control input-text-size" value={contact.country} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div className="form-group">
                                                <input type="text" name="industry" placeholder="Industry"
                                                    aria-label="industry" className="form-control input-text-size" value={contact.industry} onChange={handleChange} required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div className="form-group">
                                                <input type="text" name="services" placeholder="Services/Technologies"
                                                    aria-label="services" className="form-control input-text-size" value={contact.services} onChange={handleChange} required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div className="form-group">
                                                <input type="range" name="services" onInput={handleInput} required />
                                                {/* <input type="text" name="services" placeholder="Services/Technologies" 
                                                aria-label="services" className="form-control input-text-size" value={contact.services} onChange={handleChange} required /> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <label className="form-label">Trial Service</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
                                                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
                                                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div className="form-group">
                                            <input className="form-control form-control-sm" id="file" type="file"/>
                                                {/* <input type="text" name="services" placeholder="Services/Technologies"
                                                    aria-label="services" className="form-control input-text-size" value={contact.services} onChange={handleChange} required /> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                                            <div className="form-group">
                                                <textarea name="text" cols="30" rows="4" placeholder="Your Message" aria-label="Your Message" className="form-control input-text-size" value={contact.text} onChange={handleChange}
                                                    required></textarea>
                                            </div>
                                        </div>


                                        <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
                                            <button type="submit" className="btn-sm btn btn-danger">
                                                Submit <i className="bx bx-chevron-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    );
};

export default TrialContactUs;
