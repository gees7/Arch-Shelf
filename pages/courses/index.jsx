import React, { useState, useEffect } from 'react';
import { getFeeds } from '../../store/api/dashboardApi';
import Link from 'next/link';
import FeatureArticle from '../../components/FeatureArticle';

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
              {coursesData?.length > 0 ? (
                <div className="flex flex-wrap">
                  {coursesData?.map((item) => (
                    <div className="p-4 my-6 size w-inline-block">
                      <Link href="/courses/[id]" as={`/courses/${item?._id}`}>
                        <div className="cursor-pointer flex h-full items-start">
                          <div className="blog-image-wrap">
                            <img
                              src={item?.media?.url}
                              style={{ height: '170px', width: '250px' }}
                              // sizes="(max-width: 479px) 79vw, (max-width: 991px) 42vw, (max-width: 1279px) 15vw, (max-width: 1919px) 16vw, 264.1875px"
                              // srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
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
              ) : (
                <div className="flex items-center justify-center flex-col">
                  <img
                    src={require('../../assets/images/empty.png')}
                    className="m-8"
                    style={{ width: '200px' }}
                  />
                  <p className="mb-12">No blog found</p>
                </div>
              )}
            </div>
          </div>
          <div className="stick-wrapper width">
            {/* <form action="/search" className="search w-form">
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
            </form> */}
            <div className="featured-articles">
              <div className="featured-block">
                <FeatureArticle
                  // id={resources?.data?.feedList?._id}
                  type="courses"
                />
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
