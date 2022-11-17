import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import { text } from "@fortawesome/fontawesome";
const partnersList_new = [
    { id: '1', "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658484750/emerging_technologies_1_vbkzqr.png", alt: "abc.png", text: "Prompt turnarounds with a customer-centric 1 Prompt turnarounds with a customer-centric 3", header: "LOT" },
    { id: '2', "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658484787/emerging_technologies_3_ncbs2m.png", alt: "abc.png", text: "Prompt turnarounds with a customer-centric 3 Prompt turnarounds with a customer-centric 3", header: "AL/ML" },
    { id: '3', "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658484768/emerging_technologies_2_vipwsi.png", alt: "abc.png", text: "Prompt turnarounds with a customer-centric 1 Promurnarounds with a customer-centric 3", header: "AR/VR" },

]

const EmergingTechnology = () => {
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
                items: 3,
                margin: 10,
            },
            576: {
                items: 3,
                margin: 10,
            },
            768: {
                items: 3,
                margin: 10,
            },
        },
    };


    return (
        <div className="container mb-5">

            <div className=" t-5 p-5">
                <h3 className="text-center card-h3 mb-4" style={{ color: '#326ebd' }}>Emerging Technologies We Work On</h3>

                <OwlCarousel
                    className="partner-slides owl-carousel owl-theme"
                    {...options}
                >
                    {partnersList_new.map((partnerLogo) => (
                        <div className="partner-item" key={partnerLogo.id}>
                            <img
                                src={partnerLogo.src}
                            />
                            <p className="p-4 text-wrap text-center " style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '10px',
                                fontSize: '10px'
                            }}>
                                <h3 style={{ paddingBottom: '27%', paddingLeft: '75%' }}>{partnerLogo.header}</h3>
                                <div className="card fw-bold border-light" style={{ width: '10rem', color: 'black' }}>{partnerLogo.text}</div>

                            </p>
                        </div>
                    ))}
                </OwlCarousel>
            </div>

        </div>
    )
}
export default EmergingTechnology;