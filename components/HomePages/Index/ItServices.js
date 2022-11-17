import React from "react";
import Link from "next/link";
import axios from "axios";
// import SimpleImageSlider from "react-simple-image-slider";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));


const partnersList_new = [
    { id: '1', "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/c_scale,h_8,w_4/v1658494441/Software_solutions_enxlny.svg", alt: "abc.png" },
    { id: '2', "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658564764/software_solutions_2_wtv3tn.svg", alt: "abc.png" },
    { id: "3", "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658585335/software_solutions_3_oorxsm.svg", alt: "abc.png" },
    { id: "4", "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658585338/software_solutions_4_rotzpi.svg", alt: "abc.png" },

]

const ItServices = () => {

    const options = {
        loop: false,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        margin: 0,
        center: false,
        dots: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 4,
            },
            576: {
                items: 4,
            },
            768: {
                items: 4,
            },
        },
        navText: ["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"]
    };

    return (
        <>
            <div className="container m-5">
                <div className="container m-5">
                    <h3 className="text-center card-h3 mb-4" style={{ color: '#326ebd' }}>One-Stop Destination for Custom Software Solutions!</h3>
                    <OwlCarousel
                        className="partner-slides owl-carousel owl-theme p-2"
                        {...options}
                    >
                        {partnersList_new.map((partnerLogo) => (
                            <div className="partner-item" key={partnerLogo.id}>
                                <img
                                    src={partnerLogo.src}
                                />
                            </div>
                        ))}
                    </OwlCarousel>
                </div>

            </div>
        </>
    );
};

export default ItServices;


