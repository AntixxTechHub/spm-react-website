import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import Getatrialservice from "@/components/Contact/Getatrialservice";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";


const Services = () => {
  
  return (
    <>
      <PageTitle page="Get A Free Trial Service" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Get A Free Trial Service" />

      <Getatrialservice />
      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export default Services;