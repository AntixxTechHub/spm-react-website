import React from "react";
import Head from "next/head";
import { NextSeo } from 'next-seo';

const PageTitle = ({ page }) => {
  return (
    <NextSeo
      title={`${page} | SPM Global Technologies `}
    />
  );
};

export default PageTitle;
