import { NextSeo } from 'next-seo';

const PageSeo = ({ seo, pageName }) => {
    const seoData = seo?.data?.length > 0 && seo?.data[0] && seo?.data[0].attributes?.seo ? seo?.data[0].attributes?.seo : {};
    return <NextSeo
        title={seoData?.metaTitle || `${pageName} | SPM Global Technologies | `}
        description={seoData?.metaDescription}
        canonical={seoData?.canonicalURL}
        additionalMetaTags={[{
            keywords: seoData?.keywords
        }]}
    />

}

export default PageSeo;
