
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

import bmc from "@/public/images/icon/bmc.png";
import developSkillImg from "@/public/images/develop-skill.jpg";
import shape14 from "@/public/images/shape/shape14.png";


const Services = () => {
  return (
    <>
      <PageTitle page="BMC Suite of Products" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Coming Soon"/>
      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export default Services;