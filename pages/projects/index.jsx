import React, { useState, useEffect } from 'react';
import Categories from '../../components/Categories';
import Country from '../../components/Country';
import Architects from '../../components/Architects';
import Color from '../../components/Color';
import Area from '../../components/Area';
import Materials from '../../components/Materials';
import Year from '../../components/Year';
import Manufacturers from '../../components/Manufacturers';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getProjects } from '../../store/actions/blogActions';
import { Pagination, Spin, Input } from 'antd';

const Projects = ({ projects, count }) => {
  const [data, setData] = useState([]);
  const [keywordState, setKeywordState] = useState('');
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  projects = projects?.data?.feedList;
  count = count?.data?.count;

  function handleChangePagination(current) {
    setStart(limit * (current - 1));
    setCurrentPage(current);
  }

  const Content = () => {
    let temp = [];
    for (let i = 0; i < projects?.length; i = i + 6) {
      temp.push(
        <div key={i}>
          {projects?.length > 0 ? (
            <div className="box---projects">
              {projects[0] && (
                <div
                  className="div-block-23356"
                  style={{ paddingTop: '100px' }}
                >
                  <div id="w-node-_0c497f53-2a51-a14b-e390-7b6095c98b54-c97228da">
                    <div
                      data-delay={4000}
                      data-animation="slide"
                      className="main-slider w-slider"
                      data-autoplay="false"
                      data-easing="ease"
                      data-hide-arrows="false"
                      data-disable-swipe="false"
                      data-autoplay-limit={0}
                      data-nav-spacing={3}
                      data-duration={500}
                      data-infinite="true"
                    >
                      <div className="mask-4 w-slider-mask">
                        <div className="w-slide">
                          <div className="div-block-23364">
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                              // srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                              src={projects[i]?.media?.url}
                              loading="lazy"
                              alt
                              className="w-full h-full"
                            />
                            <Link href={'/projects/' + projects[i]?._id}>
                              <div className="link-block-23 w-inline-block cursor-pointer">
                                <p className="hero-slide-p-2 project-sub-head">
                                  {projects[i]?.category?.name}
                                </p>
                                <h3 className="heading-34 project-head">
                                  {projects[i]?.title}
                                </h3>
                              </div>
                            </Link>
                          </div>
                        </div>
                        {/* <div className="w-slide">
                      <div className="div-block-23364">
                        <img
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                          srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                          src="images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg"
                          loading="lazy"
                          alt
                        />
                        <a
                          href="projects-detail-page.html"
                          className="link-block-23 w-inline-block"
                        >
                          <p className="hero-slide-p-2 project-sub-head">
                            Lorem{' '}
                          </p>
                          <h3 className="heading-34 project-head">Heading</h3>
                        </a>
                      </div>
                    </div> */}
                      </div>
                      <div className="left-arrow-8 w-slider-arrow-left">
                        <div className="icon-27 _1 w-icon-slider-left" />
                      </div>
                      <div className="right-arrow-8 w-slider-arrow-right">
                        <div className="icon-27 w-icon-slider-right" />
                      </div>
                      <div className="slide-nav-9 w-slider-nav w-round" />
                    </div>
                  </div>
                  {projects[i + 1] && (
                    <div
                      id="w-node-_0c497f53-2a51-a14b-e390-7b6095c98b62-c97228da"
                      style={{ height: '320px' }}
                    >
                      <div
                        data-delay={4000}
                        data-animation="slide"
                        className="main-slider w-slider"
                        data-autoplay="false"
                        data-easing="ease"
                        data-hide-arrows="false"
                        data-disable-swipe="false"
                        data-autoplay-limit={0}
                        data-nav-spacing={3}
                        data-duration={500}
                        data-infinite="true"
                      >
                        <div className="mask-4 w-slider-mask">
                          <div className="w-slide">
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                              // srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                              src={projects[i + 1]?.media?.url}
                              loading="lazy"
                              alt="image"
                              className="w-full h-full"
                            />
                            <Link href={'/projects/' + projects[i + 1]?._id}>
                              <div className="link-block-23 short-box w-inline-block cursor-pointer">
                                <p className="hero-slide-p-2 project-sub-head">
                                  {projects[i + 1]?.category?.name}
                                </p>
                                <h3 className="heading-34 project-head">
                                  {projects[i + 1]?.title}
                                </h3>
                              </div>
                            </Link>
                          </div>
                          <div className="w-slide">
                            <div className="div-block-23364">
                              {/* <img
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                          // srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                          src={projects[i + 2]?.media?.url}
                          loading="lazy"
                          alt
                        /> */}
                              <a
                                href="#"
                                className="link-block-23 w-inline-block"
                              >
                                <p className="hero-slide-p-2 project-sub-head">
                                  Lorem{' '}
                                </p>
                                <h3 className="heading-34 project-head">
                                  Heading
                                </h3>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="left-arrow-8 w-slider-arrow-left">
                          <div className="icon-27 w-icon-slider-left" />
                        </div>
                        <div className="right-arrow-8 w-slider-arrow-right">
                          <div className="icon-27 w-icon-slider-right" />
                        </div>
                        <div className="slide-nav-9 w-slider-nav w-round" />
                      </div>
                    </div>
                  )}
                  {projects[i + 2] && (
                    <div
                      id="w-node-_0c497f53-2a51-a14b-e390-7b6095c98b70-c97228da"
                      style={{ height: '320px' }}
                    >
                      <div
                        data-delay={4000}
                        data-animation="slide"
                        className="main-slider w-slider"
                        data-autoplay="false"
                        data-easing="ease"
                        data-hide-arrows="false"
                        data-disable-swipe="false"
                        data-autoplay-limit={0}
                        data-nav-spacing={3}
                        data-duration={500}
                        data-infinite="true"
                      >
                        <div className="mask-4 w-slider-mask">
                          <div className="w-slide">
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                              // srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                              src={projects[i + 2]?.media?.url}
                              alt
                              className="w-full h-full"
                            />
                            <Link href={'/projects/' + projects[i + 2]?._id}>
                              <div className="link-block-23 short-box w-inline-block cursor-pointer">
                                <p className="hero-slide-p-2 project-sub-head">
                                  {projects[i + 2]?.category?.name}
                                </p>
                                <h3 className="heading-34 project-head">
                                  {projects[i + 2]?.title}
                                </h3>
                              </div>
                            </Link>
                          </div>
                          <div className="w-slide">
                            <div>
                              <img
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                                srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                                src="images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg"
                                loading="lazy"
                                alt
                              />
                              <a
                                href="#"
                                className="link-block-23 w-inline-block"
                              >
                                <p className="hero-slide-p-2 project-sub-head">
                                  Lorem{' '}
                                </p>
                                <h3 className="heading-34 project-head">
                                  Heading
                                </h3>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="left-arrow-8 w-slider-arrow-left">
                          <div className="icon-27 w-icon-slider-left" />
                        </div>
                        <div className="right-arrow-8 w-slider-arrow-right">
                          <div className="icon-27 w-icon-slider-right" />
                        </div>
                        <div className="slide-nav-9 w-slider-nav w-round" />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {projects[i + 3] && (
                <div className="div-block-23363">
                  <div
                    id="w-node-_5809e099-d698-f7f6-54ca-09882b5aec6b-c97228da"
                    style={{ height: '320px' }}
                  >
                    <div
                      data-delay={4000}
                      data-animation="slide"
                      className="main-slider w-slider"
                      data-autoplay="false"
                      data-easing="ease"
                      data-hide-arrows="false"
                      data-disable-swipe="false"
                      data-autoplay-limit={0}
                      data-nav-spacing={3}
                      data-duration={500}
                      data-infinite="true"
                    >
                      <div className="mask-4 w-slider-mask">
                        <div className="w-slide">
                          <img
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                            // srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                            src={projects[i + 3]?.media?.url}
                            loading="lazy"
                            className="w-full h-full"
                            alt
                          />
                          <Link href={'/projects/' + projects[i + 3]?._id}>
                            <div className="link-block-23 short-box w-inline-block cursor-pointer">
                              <p className="hero-slide-p-2 project-sub-head">
                                {projects[i + 3]?.category?.name}
                              </p>
                              <h3 className="heading-34 project-head">
                                {projects[i + 3]?.title}
                              </h3>
                            </div>
                          </Link>
                        </div>
                        {/* <div className="w-slide">
                        <div>
                          <img
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                            srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                            src="images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg"
                            loading="lazy"
                            alt
                          />
                          <a href="#" className="link-block-23 w-inline-block">
                            <p className="hero-slide-p-2 project-sub-head">
                              Lorem{' '}
                            </p>
                            <h3 className="heading-34 project-head">Heading</h3>
                          </a>
                        </div>
                      </div> */}
                      </div>
                      <div className="left-arrow-8 w-slider-arrow-left">
                        <div className="icon-27 w-icon-slider-left" />
                      </div>
                      <div className="right-arrow-8 w-slider-arrow-right">
                        <div className="icon-27 w-icon-slider-right" />
                      </div>
                      <div className="slide-nav-9 w-slider-nav w-round" />
                    </div>
                  </div>
                  {projects[i + 4] && (
                    <div id="w-node-_15806059-dbb4-3eda-d299-5b331e0dcf8f-c97228da">
                      <div
                        data-delay={4000}
                        data-animation="slide"
                        className="main-slider w-slider"
                        data-autoplay="false"
                        data-easing="ease"
                        data-hide-arrows="false"
                        data-disable-swipe="false"
                        data-autoplay-limit={0}
                        data-nav-spacing={3}
                        data-duration={500}
                        data-infinite="true"
                      >
                        <div className="mask-4 w-slider-mask">
                          <div className="w-slide">
                            <div>
                              <img
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                                // srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                                src={projects[i + 4]?.media?.url}
                                loading="lazy"
                                alt
                              />
                              <Link href={'/projects/' + projects[i + 4]?._id}>
                                <div className="link-block-23 short-box w-inline-block cursor-pointer">
                                  <p className="hero-slide-p-2 project-sub-head">
                                    {projects[i + 4]?.category?.name}
                                  </p>
                                  <h3 className="heading-34 project-head">
                                    {projects[i + 4]?.title}
                                  </h3>
                                </div>
                              </Link>
                            </div>
                          </div>
                          {/* <div className="w-slide">
                          <div>
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                              srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                              src="images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg"
                              loading="lazy"
                              alt
                            />
                            <a
                              href="#"
                              className="link-block-23 w-inline-block"
                            >
                              <p className="hero-slide-p-2 project-sub-head">
                                Lorem{' '}
                              </p>
                              <h3 className="heading-34 project-head">
                                Heading
                              </h3>
                            </a>
                          </div>
                        </div> */}
                        </div>
                        <div className="left-arrow-8 w-slider-arrow-left">
                          <div className="icon-27 w-icon-slider-left" />
                        </div>
                        <div className="right-arrow-8 w-slider-arrow-right">
                          <div className="icon-27 w-icon-slider-right" />
                        </div>
                        <div className="slide-nav-9 w-slider-nav w-round" />
                      </div>
                    </div>
                  )}
                  {projects[i + 5] && (
                    <div id="w-node-f419f3b8-5789-ccde-4ae5-e6f2f6c6e210-c97228da">
                      <div
                        data-delay={4000}
                        data-animation="slide"
                        className="main-slider w-slider"
                        data-autoplay="false"
                        data-easing="ease"
                        data-hide-arrows="false"
                        data-disable-swipe="false"
                        data-autoplay-limit={0}
                        data-nav-spacing={3}
                        data-duration={500}
                        data-infinite="true"
                      >
                        <div className="mask-4 w-slider-mask">
                          <div className="w-slide">
                            <div>
                              <img
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                                // srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                                src={projects[i + 5]?.media?.url}
                                loading="lazy"
                                alt
                              />
                              <Link href={'/projects/' + projects[i + 5]?._id}>
                                <div className="link-block-23 short-box w-inline-block cursor-pointer">
                                  <p className="hero-slide-p-2 project-sub-head">
                                    {projects[i + 5]?.category?.name}
                                  </p>
                                  <h3 className="heading-34 project-head">
                                    {projects[i + 5]?.title}
                                  </h3>
                                </div>
                              </Link>
                            </div>
                          </div>
                          {/* <div className="w-slide">
                          <div>
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 31vw, (max-width: 1279px) 28vw, (max-width: 1919px) 30vw, 480px"
                              srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                              src="images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg"
                              loading="lazy"
                              alt
                            />
                            <a
                              href="#"
                              className="link-block-23 w-inline-block"
                            >
                              <p className="hero-slide-p-2 project-sub-head">
                                Lorem{' '}
                              </p>
                              <h3 className="heading-34 project-head">
                                Heading
                              </h3>
                            </a>
                          </div>
                        </div> */}
                        </div>
                        <div className="left-arrow-8 w-slider-arrow-left">
                          <div className="icon-27 w-icon-slider-left" />
                        </div>
                        <div className="right-arrow-8 w-slider-arrow-right">
                          <div className="icon-27 w-icon-slider-right" />
                        </div>
                        <div className="slide-nav-9 w-slider-nav w-round" />
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="flex justify-start w-full mt-10">
                <Pagination
                  key={`page-${currentPage}`}
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                  }
                  showSizeChanger
                  pageSizeOptions={['10', '25', '50', '100']}
                  onShowSizeChange={(e, p) => {
                    setLimit(p);
                    setCurrentPage(1);
                    setStart(0);
                  }}
                  defaultCurrent={1}
                  current={currentPage}
                  pageSize={limit}
                  total={count}
                  onChange={handleChangePagination}
                />
              </div>
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

          <div className="ads">
            <img
              src="images/ad-4.JPG"
              loading="lazy"
              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 91vw, (max-width: 1919px) 94vw, 1520px"
              srcSet="images/ad-4-p-500.jpeg 500w, images/ad-4.JPG 972w"
              alt
              className="image-59"
            />
          </div>
        </div>
      );
    }

    return temp;
  };
  return (
    <>
      <div>
        <div className="div-block-97">
          <div className="div-heading">
            <h1 className="heading-2">Projects</h1>
            <div className="line" />
          </div>
        </div>
        <div className="section-77 wf-section">
          <div className="container w-container">
            <div className="div-block-419">
              <div className="div-block-418">
                <div
                  data-current="Tab 1"
                  data-easing="ease"
                  data-duration-in={300}
                  data-duration-out={100}
                  className="tabs w-tabs"
                >
                  <div className="tabs-content w-tab-content">
                    <div
                      data-w-tab="Tab 1"
                      className="w-tab-pane w--tab-active"
                    >
                      <div className="div-block-420">
                        <div
                          className="drop-nav"
                          // style={{ paddingBottom: '250px' }}
                        >
                          <div className="div-block-421">
                            <Categories
                              start={start}
                              limit={limit}
                              keywordState={keywordState}
                              setKeywordState={setKeywordState}
                            />
                            <Country />
                            <Architects />
                            <Manufacturers />
                            <Year />
                            <Materials />
                            <Area />
                            <Color />
                          </div>
                        </div>
                        <Content />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  const projects = state?.dashboard?.projects;
  const count = state?.dashboard?.projects;
  return { projects, count };
}
const mapDispatchToProps = (dispatch) => ({
  getProjects: (payload) => dispatch(getProjects(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
