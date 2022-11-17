import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import MainHeader from "@/components/HomePages/Index/MainHeader";
import Navbar1 from "@/components/Layout/Navigations/Navbar1";
import Banner from "@/components/HomePages/BigData/Banner";
import TrustedSuccessPartners from "@/components/HomePages/BigData/TrustedSuccessPartners";
import SpmStandsFor from "@/components/HomePages/Index/SpmStandsFor";
import WhatWeDo from "@/components/HomePages/BigData/WhatWeDo";
import SoftwareSolutions from "@/components/HomePages/BigData/SoftwareSolutions";
import ServicePartner from "@/components/HomePages/BigData/ServicePartner";
import WeWorkOn from "@/components/HomePages/BigData/WeWorkOn";
import SolutionsWeOffer from "@/components/HomePages/BigData/SolutionsWeOffer";
import ModesofAlliance from "@/components/HomePages/BigData/ModesofAlliance";
import WeAreVersatile from "@/components/HomePages/BigData/WeAreVersatile";
import WhyChooseUs from "@/components/HomePages/BigData/WhyChooseUs";
import ApplicationManifestation from "@/components/HomePages/BigData/ApplicationManifestation";
import MetaverseServices from "@/components/HomePages/BigData/MetaverseServices";
import TestimonialThree from "@/components/HomePages/BigData/TestimonialThree";
import Funfacts from "@/components/HomePages/BigData/Funfacts";
import BlogGrid from "../pages/blogs/blog-grid";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import ReactGA from 'react-ga';



export default function Home() {
  const TRACKING_ID = "UA-158260568-1"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <div >
        <PageTitle page="Home" />
        <MainHeader />
        <Navbar1 />
        <Banner />
        <TrustedSuccessPartners />
        <SpmStandsFor />
        <WhatWeDo />
        <SoftwareSolutions />
        <ServicePartner />
        <WeWorkOn />
        <SolutionsWeOffer />
        <div className="border-tb" />
        <ModesofAlliance />
        <WeAreVersatile />
        <div className="border-tb" />
        <WhyChooseUs />
        <ApplicationManifestation />
        <MetaverseServices />
        <TestimonialThree />
        <BlogGrid />
        <Funfacts />
        <div className="border-tb" />
        <FooterOne />
      </div>

    </>
  );
}
