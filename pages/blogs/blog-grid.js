import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const BlogGrid = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`);
      setBlogs(response.data);
      // console.log(response.data)
    };
    getBlogs();
  }, []);

  return (
    <>
      {blogs && (
        <div className="blog-area">
          <div className="page-title-area">
            <div className="page-title-content">
              <span className="sub-title">Latest News</span>
              <h1>Our latest articles & resources</h1>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              {blogs.data?.filter((e, ind) => ind < 3)?.map(blog =>
                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  key={blog.id}
                >
                  <div className="single-blog-post">
                    <div className="image">
                      <Link href={`/blogs/${blog.attributes.slug}`}>
                        <a className="d-block">
                          <img
                            src={blog.attributes.image.data.attributes.url}
                            alt={
                              blog.attributes.image.data.attributes
                                .alternativeText
                            }
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="content">
                      <ul className="meta">
                        <li>
                          <i className="bx bx-purchase-tag-alt"></i>
                          {blog.attributes.category}
                        </li>
                        <li>
                          <i className="bx bx-calendar-check"></i>
                          {blog.attributes.date}
                        </li>
                      </ul>
                      <h3>
                        <Link href={`/blogs/${blog.attributes.slug}`}>
                          <a>{blog.attributes.title}</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogGrid;
