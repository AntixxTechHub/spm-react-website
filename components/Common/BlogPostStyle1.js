import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const partnersList_new = [
  { id: '1', "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658732374/service_providers_1_1_mcgwwo.svg", alt: "abc.png", company_Logo: "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658570842/company_logo_4_ut2egd.svg" },
  { id: '2', "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658585335/service_providers_2_ow0mpj.svg", alt: "abc.png", company_Logo: "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658585334/company_logo_2_lokxys.svg" },
  { id: '3', "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658585335/service_providers_3_hul7eu.svg", alt: "abc.png", company_Logo: "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658569113/company_logo_3_pxcknf.svg" },
  { id: '4', "src": "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658585335/service_providers_4_tqfbqu.svg", alt: "abc.png", company_Logo: "https://res.cloudinary.com/dkjjp9tt8/image/upload/v1658570363/company_logo_1_qszy72.svg" },


]

const BlogPostStyle1 = () => {
  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`);
      setBlogs(response.data);
      console.log(response.data);
    };
    getBlogs();
  }, []);

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
        items: 4
      },
    },
    navText: ["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"]
  };

  return (
    // <div className="blog-area with-top-border pb-75 pt-100">
    //   <div className="container">
    //     <div className="section-title">
    //       <span className="sub-title">Service PartnerxXs </span>
    //       <h2>Our latest articles & resources </h2>
    //     </div>

    //     {blogs && (
    //       <div className="row justify-content-center">
    //         {blogs?.data?.slice(0, 3).map((blog) => (
    //           <div
    //             className="col-xl-4 col-lg-6 col-md-6"
    //             data-aos="fade-up"
    //             data-aos-duration="1200"
    //             key={blog.id}
    //           >
    //             <div className="single-blog-post">
    //               <div className="image">
    //                 <Link href={`/blogs/${blog.attributes.slug}`}>
    //                   <a className="d-block">
    //                     <img
    //                       src={blog.attributes.image?.data?.attributes?.url}
    //                       alt={
    //                         blog.attributes.image.data.attributes
    //                           .alternativeText
    //                       }
    //                     />
    //                   </a>
    //                 </Link>
    //               </div>
    //               <div className="content">
    //                 <ul className="meta">
    //                   <li>
    //                     <i className="bx bx-purchase-tag-alt"></i>
    //                     {blog.attributes.category}
    //                   </li>
    //                   <li>
    //                     <i className="bx bx-calendar-check"></i>
    //                     {blog.attributes.date}
    //                   </li>
    //                 </ul>
    //                 <h3>
    //                   <Link href={`/blogs/${blog.attributes.slug}`}>
    //                     <a>{blog.attributes.title}</a>
    //                   </Link>
    //                 </h3>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className="container">
      <div className="">
        <h3 className="text-center card-h3 mb-4" style={{ color: '#326ebd' }}>Implementation Customization & Integration Service Providers</h3>

        <OwlCarousel
          className="partner-slides owl-carousel owl-theme"
          {...options}
        >
          {partnersList_new.map((partnerLogo) => (
            <div className="partner-item" style={{ width: '30%' }} key={partnerLogo.id}>
              <img
                src={partnerLogo.src}
                alt="Picture of the author"
              />
              <p className="p-0 text-wrap text-center fw-bold " style={{
                position: 'absolute',
                bottom: '50px',
                left: '70px',
                fontSize: '10px'
              }}>
                <div className="card border-light text-start" style={{ width: '10rem', color: 'black' }}>
                  <img src={partnerLogo.company_Logo}
                    style={{ height: '72px', paddingBottom: '18px' }} />
                  BMC Helix ITSM
                  <br />BMC Helix Remedyforc
                  <br />BMC Helix Discovery
                  <br />BMC Helix Digital Work Place
                  <br />BMC Helix Digital Work Place
                </div>
              </p>
            </div>
          ))}
        </OwlCarousel>
      </div>

    </div>
  );
};

export default BlogPostStyle1;
