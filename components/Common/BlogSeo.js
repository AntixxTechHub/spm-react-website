import { NextSeo } from 'next-seo';

const BlogSeo = ({ seo, pageName }) => {
    const seoData = seo[0] && seo[0].attributes && seo[0].attributes.seo ? seo[0].attributes.seo:{};//?.data?.length > 0 && seo?.data[0] && seo?.data[0].attributes?.seo ? seo?.data[0].attributes?.seo : {};
    // console.log("---------seo--------",seoData[0].attributes.seo,"----AJ");
    // console.log("---------seo--------",seoData,"----AJ");
    return <NextSeo
        title={seoData?.metaTitle || `${pageName} | SPM Global Technologies `}
        description={seoData?.metaDescription}
        canonical={seoData?.canonicalURL}
        additionalMetaTags={[{
            keywords:seoData?.keywords
        }]}
    />

}

export default BlogSeo;
