import React from "react";
import Link from "next/link";
import Image from "next/image";

import ondemandsolutions from "@/public/images/icon/on-demand-solutions.png";
import educationelearning from "@/public/images/icon/education-e-learning.png";
import retailecommerce from "@/public/images/icon/retail-e-commerce.png";
import healthcarefitness from "@/public/images/icon/healthcare-fitness.png";
import logisticsinventorymanagement from "@/public/images/icon/logistics-inventory-management.png";
import travelhospitality from "@/public/images/icon/travel-hospitality.png";
import realestate from "@/public/images/icon/real-estate.png";
import foodrestaurants from "@/public/images/icon/food-restaurants.png";
import socialnetworking from "@/public/images/icon/social-networking.png";
import game from "@/public/images/icon/game.png";


const Services = () => {
    return (
        <div className="services-area with-top-border pt-100 pb-75">
            <div className="container">
                <div className="section-title">
                    <h2 className="nunito-font">We are versatile!</h2>
                    <span className="sub-title purple-color">We work with clients across wide-ranging sectors to deliver well-designed custom solutions</span>
                </div>
                <div className="row justify-content-center">
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={ondemandsolutions} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>On-Demand Solutions</a>
                            </h6>
                        </div>
                    </div>
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={retailecommerce} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>Retail, ECommerce</a>
                            </h6>
                        </div>
                    </div>
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={educationelearning} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>Education & e-Learning</a>
                            </h6>
                        </div>
                    </div>
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={healthcarefitness} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>Healthcare & Fitness</a>
                            </h6>
                        </div>
                    </div>
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={logisticsinventorymanagement} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>Logistics Management</a>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={travelhospitality} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>Travel & Hospitality</a>
                            </h6>
                        </div>
                    </div>
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={realestate} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>Real Estate Sector</a>
                            </h6>
                        </div>
                    </div>
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={foodrestaurants} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>Food & Restaurants</a>
                            </h6>
                        </div>
                    </div>
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={socialnetworking} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>Social Networking</a>
                            </h6>
                        </div>
                    </div>
                    <div
                        className="col-lg-2 col-md-4 col-sm-1">
                        <div className="single-services-item style-two">
                            <div className="icon">
                                <Image src={game} alt="icon" />
                            </div>
                            <h6 className="nunito-font">
                                <a>Gaming Industries
                                <p className="text-break"></p>
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
