import React, { useState, useEffect } from 'react';
import Navbar from '../../components/DashboardComponents/Navbar';
import Footer from '../../components/DashboardComponents/Footer';
import { getFeeds } from '../../store/api/dashboardApi';
import Link from 'next/link';

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    getFeeds({ query: { type: 'courses' } }).then((res) => {
      setCoursesData(res?.data?.feedList);
    });
  }, []);

  return (
    <div>
      <div className="div-block-97">
        <div className="div-heading">
          <h1 className="heading-2">Courses</h1>
          <div className="line" />
        </div>
      </div>
      <div className="section-76 wf-section">
        <div className="div-block-406">
          <div className="div-block-407">
            <div className="div-block-408">
              <div className="flex flex-wrap">
                {coursesData?.map((item) => (
                  <div className="p-4 my-6 size w-inline-block">
                    <Link href="/courses/[id]" as={`/courses/${item?._id}`}>
                      <div className="cursor-pointer flex h-full items-start">
                        <div className="blog-image-wrap">
                          <img
                            src={item?.media?.url}
                            width={380}
                            sizes="(max-width: 479px) 79vw, (max-width: 991px) 42vw, (max-width: 1279px) 15vw, (max-width: 1919px) 16vw, 264.1875px"
                            srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                            alt
                            className="blog-image size"
                          />
                        </div>
                        <div className="blog-content pl-4">
                          <h3 className="heading-h2">{item?.title}</h3>
                          <div className="profile-block">
                            <img
                              src="images/team-1.jpg"
                              width={40}
                              alt
                              className="profile-picture"
                            />
                            <div className="normal-wrapper">
                              <div className="title-small">
                                {item?.user?.name}
                              </div>
                              <p className="paragraph-detials-small">
                                {item?.updated_at}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {/* <a
                href="blog-detail-page.html"
                className="blog-item-2 size w-inline-block"
              >
                <div className="blog-image-wrap">
                  <img
                    src="images/springwood.jpg"
                    width={380}
                    sizes="(max-width: 479px) 79vw, (max-width: 991px) 42vw, (max-width: 1279px) 15vw, (max-width: 1919px) 16vw, 264.1875px"
                    srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                    alt
                    className="blog-image size"
                  />
                </div>
                <div className="blog-content">
                  <h3 className="heading-h2">
                    Lorem ipsum is the dummy content generator{' '}
                  </h3>
                  <div className="profile-block">
                    <img
                      src="images/team-1.jpg"
                      width={40}
                      alt
                      className="profile-picture"
                    />
                    <div className="normal-wrapper">
                      <div className="title-small">Lorem ipsum</div>
                      <p className="paragraph-detials-small">
                        January 10, 2020
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="blog-detail-page.html"
                className="blog-item-2 size w-inline-block"
              >
                <div className="blog-image-wrap">
                  <img
                    src="images/springwood.jpg"
                    width={380}
                    sizes="(max-width: 479px) 79vw, (max-width: 991px) 42vw, (max-width: 1279px) 15vw, (max-width: 1919px) 16vw, 264.1875px"
                    srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                    alt
                    className="blog-image size"
                  />
                </div>
                <div className="blog-content">
                  <h3 className="heading-h2">
                    Lorem ipsum is the dummy content generator{' '}
                  </h3>
                  <div className="profile-block">
                    <img
                      src="images/team-1.jpg"
                      width={40}
                      alt
                      className="profile-picture"
                    />
                    <div className="normal-wrapper">
                      <div className="title-small">Lorem ipsum</div>
                      <p className="paragraph-detials-small">
                        January 10, 2020
                      </p>
                    </div>
                  </div>
                </div>
              </a> */}
            </div>
          </div>
          <div className="stick-wrapper width">
            <form action="/search" className="search w-form">
              <input
                type="search"
                className="seach-bar w-input"
                maxLength={256}
                name="query"
                placeholder="Search articles"
                id="search"
                required
              />
              <a href="#" className="search-button-wrapper w-inline-block">
                <input
                  type="submit"
                  defaultValue
                  className="search-button w-button"
                />
                <img src="images/search_icon.svg" alt className="search-icon" />
              </a>
            </form>
            <div className="subscription hide">
              <div className="title-large">Subscribe to our newsletter</div>
              <div className="w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  className="form"
                >
                  <input
                    type="email"
                    className="text-field-3 w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="Email address"
                    id="name"
                    required
                  />
                  <div className="submit-button-wrap">
                    <input
                      type="submit"
                      defaultValue
                      data-wait="Please wait..."
                      className="submit-button-2 w-button"
                    />
                    <img
                      src="images/Arrow_1.svg"
                      width={9}
                      height={12}
                      alt
                      className="image-2"
                    />
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-articles">
              <div className="title-large">Featured</div>
              <div className="featured-block">
                <a href="#" className="featured-item w-inline-block">
                  <img
                    src="images/about-archi.png"
                    width={90}
                    sizes="(max-width: 479px) 27vw, (max-width: 991px) 17vw, (max-width: 1919px) 7vw, 116.65625px"
                    srcSet="images/about-archi-p-500.png 500w, images/about-archi-p-800.png 800w, images/about-archi-p-1080.png 1080w, images/about-archi-p-1600.png 1600w, images/about-archi.png 1728w"
                    alt
                    className="feature-image"
                  />
                  <div className="title-small">
                    Lorem ipsum is the dummy content generator portfolio
                    websites
                  </div>
                </a>
                <a href="#" className="featured-item w-inline-block">
                  <img
                    src="images/archi-tools.png"
                    width={90}
                    sizes="(max-width: 479px) 27vw, (max-width: 991px) 17vw, (max-width: 1279px) 7vw, 91.6875px"
                    srcSet="images/archi-tools-p-500.png 500w, images/archi-tools-p-800.png 800w, images/archi-tools.png 1728w"
                    alt
                    className="feature-image"
                  />
                  <div className="title-small">
                    Lorem ipsum is the dummy content generator portfolio
                    websites
                  </div>
                </a>
                <a href="#" className="featured-item w-inline-block">
                  <img
                    src="images/architect.jpg"
                    width={90}
                    alt
                    className="feature-image"
                  />
                  <div className="title-small">
                    Lorem ipsum is the dummy content generator portfolio
                    websites
                  </div>
                </a>
                <a href="#" className="featured-item w-inline-block">
                  <img
                    src="images/springwood.jpg"
                    width={90}
                    sizes="(max-width: 479px) 27vw, (max-width: 991px) 17vw, (max-width: 1919px) 7vw, 116.65625px"
                    srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                    alt
                    className="feature-image"
                  />
                  <div className="title-small">
                    Lorem ipsum is the dummy content generator portfolio
                    websites
                  </div>
                </a>
              </div>
            </div>
            <div className="categories-block">
              <div className="title-large">Filter By Categories</div>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Product</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Engineering</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Saas</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Technology</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Company</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Saas</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Company</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Saas</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Engineering</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Engineering</div>
              </a>
              <a href="#" className="categories-pill w-inline-block">
                <div className="title-small pink">Company</div>
              </a>
            </div>
            <img
              src="images/ad-3.JPG"
              loading="lazy"
              alt
              className="image-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
