import React, { useState, useEffect } from 'react';
import { getDashboardFeed, getFeeds } from '../../../store/api/dashboardApi';
import moment from 'moment';
import styles from './style.less';
import router from 'next/router';
import Link from 'next/link';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState([]);
  const [resources, setResources] = useState([]);
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [breakfast, setBreakfast] = useState([]);

  useEffect(() => {
    getDashboardFeed().then((res) => {
      setDashboard(res?.data);
    });
    getFeeds({ query: { type: 'resources', limit: '3' } }).then((res) => {
      setResources(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'projects', limit: '3' } }).then((res) => {
      setProjects(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'courses', limit: '3' } }).then((res) => {
      setCourses(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'competitions', limit: '3' } }).then((res) => {
      setCompetitions(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'breakfasts', limit: '3' } }).then((res) => {
      setBreakfast(res?.data?.feedList);
    });
  }, []);

  return (
    <div>
      <div className="div-block-166 _80">
        <div className="div-block-401">
          <img src="/images/ad.JPG" loading="lazy" width={549} alt />
        </div>
        <div className="div-block-400">
          <div className="text-block-158">
            “Architecture is the learned game, correct and magnificent, of forms
            assembled in the light”
          </div>
          <p className="paragraph-25 right-align">-Le Corbusier</p>
        </div>
      </div>
      <div className="hero-section _5 wf-section">
        <div className="div-block-377 hide">
          <div className="div-block-378">
            <div
              data-delay={2000}
              data-animation="slide"
              className="slider-5 w-slider"
              data-autoplay="true"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit={0}
              data-nav-spacing={3}
              data-duration={500}
              data-infinite="true"
            >
              <div className="w-slider-mask">
                <div className="slide-2 w-slide">
                  <div className="div-block-386">
                    <a
                      href="blog-categories.html"
                      className="link-block-21 w-inline-block"
                    >
                      <div className="white-box">
                        <p className="hero-slide-p-2">Lorem</p>
                        <h3 className="heading-34">Heading</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-slide">
                  <div className="div-block-386 slide-2">
                    <a href="#" className="link-block-21 w-inline-block">
                      <div className="white-box">
                        <h3 className="heading-34">Heading</h3>
                        <p className="hero-slide-p-2">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="left-arrow-5 w-slider-arrow-left">
                <div className="w-icon-slider-left" />
              </div>
              <div className="right-arrow-2 w-slider-arrow-right">
                <div className="w-icon-slider-right" />
              </div>
              <div className="slide-nav-3 w-slider-nav w-round" />
            </div>
          </div>
          <div className="div-block-379">
            <div className="div-block-380 margin-bottom" />
            <div className="div-block-381">
              <img
                href={require('../../../assets/images/flat-lay-photography-of-cup-spoon-macbook-and-book-977877-p-1080.jpeg')}
                loading="lazy"
                width={567}
                alt
                className="image-48"
              />
            </div>
          </div>
          <div className="div-block-379 _32">
            <div className="div-block-384">
              <div className="div-block-387">
                <img
                  src={dashboard[0]?.feed?.media?.url}
                  // src="/images/Phone-Contacts-01.svg"
                  loading="lazy"
                  width={80}
                  alt
                  className="image-40"
                />
                <div className="div-block-398">
                  <h3 className="heading-35">Support Our Mission</h3>
                  <a href="#" className="button-6 w-button">
                    Support
                  </a>
                </div>
              </div>
            </div>
            <div className="div-block-383">
              <div
                data-delay={2000}
                data-animation="slide"
                className="slider-5 _250 w-slider"
                data-autoplay="true"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit={0}
                data-nav-spacing={3}
                data-duration={500}
                data-infinite="true"
              >
                <div className="w-slider-mask">
                  <div className="slide-2 w-slide">
                    <div className="div-block-386 _250 bg">
                      <a
                        href="blog-categories.html"
                        className="link-block-21 w-inline-block"
                      >
                        <div className="white-box">
                          <h3 className="heading-34">Heading</h3>
                          <p className="hero-slide-p-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div className="div-block-386 slide-2 bg-img">
                      <a href="#" className="link-block-21 w-inline-block">
                        <div className="white-box">
                          <h3 className="heading-34">Heading</h3>
                          <p className="hero-slide-p-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="left-arrow-5 w-slider-arrow-left">
                  <div className="w-icon-slider-left" />
                </div>
                <div className="right-arrow-2 w-slider-arrow-right">
                  <div className="w-icon-slider-right" />
                </div>
                <div className="slide-nav-3 w-slider-nav w-round" />
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-412">
          <div id="w-node-a15ff49a-25f4-45b5-73f9-285ac6b8183e-5e0e1135">
            <div
              data-delay={4000}
              data-animation="slide"
              className="slider-5 _2 w-slider"
              data-autoplay="true"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit={0}
              data-nav-spacing={3}
              data-duration={500}
              data-infinite="true"
            >
              <div className="w-slider-mask">
                <div
                  data-w-id="e216f069-1762-980d-deaa-5e059803ef65"
                  className="slide-2 w-slide"
                >
                  <div className="div-block-386">
                    <a
                      href="blog-categories.html"
                      className="link-block-21 w-inline-block"
                    >
                      <div style={{ width: '0%' }} className="white-box">
                        <div className="overflow-hide">
                          <p
                            style={{
                              WebkitTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              MozTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              msTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              transform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            }}
                            className="hero-slide-p-2"
                          >
                            Lorem{' '}
                          </p>
                        </div>
                        <div className="overflow-hide heading">
                          <h3
                            style={{
                              WebkitTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              MozTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              msTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              transform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            }}
                            className="heading-34"
                          >
                            Heading
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-w-id="e216f069-1762-980d-deaa-5e059803ef6d"
                  className="slide-2 w-slide"
                >
                  <div className="div-block-386 slide-2">
                    <a
                      href="blog-categories.html"
                      className="link-block-21 w-inline-block"
                    >
                      <div style={{ width: '0%' }} className="white-box">
                        <div className="overflow-hide">
                          <p
                            style={{
                              WebkitTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              MozTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              msTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              transform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            }}
                            className="hero-slide-p-2"
                          >
                            Lorem{' '}
                          </p>
                        </div>
                        <div className="overflow-hide heading">
                          <h3
                            style={{
                              WebkitTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              MozTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              msTransform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                              transform:
                                'translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            }}
                            className="heading-34"
                          >
                            Heading
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="left-arrow-5 w-slider-arrow-left">
                <div className="w-icon-slider-left" />
              </div>
              <div className="right-arrow-2 w-slider-arrow-right">
                <div className="w-icon-slider-right" />
              </div>
              <div className="slide-nav-3 w-slider-nav w-round" />
            </div>
          </div>
          <div className="div-block-414 hide">
            <div
              data-delay={4000}
              data-animation="slide"
              className="slider-6 w-slider"
              data-autoplay="true"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit={0}
              data-nav-spacing={3}
              data-duration={500}
              data-infinite="true"
            >
              <div className="mask-4 w-slider-mask">
                <div className="slide-3 w-slide">
                  <div className="div-block-413 _1">
                    <img src={dashboard[1]?.feed?.media?.url} />
                  </div>
                </div>
                <div className="slide-3 w-slide">
                  <div className="div-block-413">
                    <img src={dashboard[2]?.feed?.media?.url} />
                  </div>
                </div>
              </div>
              <div className="left-arrow-6 w-slider-arrow-left">
                <div className="w-icon-slider-left" />
              </div>
              <div className="right-arrow-3 w-slider-arrow-right">
                <div className="w-icon-slider-right" />
              </div>
              <div className="slide-nav-4 w-slider-nav w-round" />
            </div>
          </div>
          <div
            id="w-node-_21ee1159-ee13-974e-3aa5-c30a4f2c918a-5e0e1135"
            className="div-block-414"
          >
            <div
              data-delay={2000}
              data-animation="slide"
              className="slider-6 margin w-slider"
              data-autoplay="true"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit={0}
              data-nav-spacing={3}
              data-duration={500}
              data-infinite="true"
            >
              <div className="mask-4 w-slider-mask">
                <div className="slide-3 w-slide">
                  <div className="div-block-413" />
                </div>
                <div className="slide-3 w-slide">
                  <div className="div-block-413" />
                </div>
              </div>
              <div className="left-arrow-6 w-slider-arrow-left">
                <div className="w-icon-slider-left" />
              </div>
              <div className="right-arrow-3 w-slider-arrow-right">
                <div className="w-icon-slider-right" />
              </div>
              <div className="slide-nav-4 w-slider-nav w-round" />
            </div>
            <div
              data-delay={2000}
              data-animation="slide"
              className="slider-6 w-slider"
              data-autoplay="true"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit={0}
              data-nav-spacing={3}
              data-duration={500}
              data-infinite="true"
            >
              <div className="mask-4 w-slider-mask">
                <div className="slide-3 w-slide">
                  <div className="div-block-413" />
                </div>
                <div className="slide-3 w-slide">
                  <div className="div-block-413" />
                </div>
              </div>
              <div className="left-arrow-6 w-slider-arrow-left">
                <div className="w-icon-slider-left" />
              </div>
              <div className="right-arrow-3 w-slider-arrow-right">
                <div className="w-icon-slider-right" />
              </div>
              <div className="slide-nav-4 w-slider-nav w-round" />
            </div>
          </div>
          <div
            id="w-node-e6bf5714-1f59-0d66-ae35-83acc3799b8c-5e0e1135"
            className="div-block-416"
          >
            <div className="div-block-384 _2">
              <div className="div-block-387">
                <img
                  // src="../../../assets/images/Phone-Contacts-01.svg"
                  src={require('../../../assets/images/architect.jpg')}
                  loading="lazy"
                  width={123}
                  alt
                  className="image-40"
                />
                <div className="div-block-398">
                  <h3 className="heading-35">Support Our Mission</h3>
                  <div className="text-block-6 bold center">
                    <strong className="bold-text-4">
                      Lorem ipsum dolor sit amet, consectetur.
                    </strong>
                  </div>
                  <a href="#" className="button-6 w-button">
                    Support
                  </a>
                </div>
              </div>
            </div>
            <div className="div-block-417" />
          </div>
          <div className="div-block-414 hide">
            <div
              data-delay={4000}
              data-animation="slide"
              className="slider-6 w-slider"
              data-autoplay="true"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit={0}
              data-nav-spacing={3}
              data-duration={500}
              data-infinite="true"
            >
              <div className="mask-4 w-slider-mask">
                <div className="slide-3 w-slide">
                  <div className="div-block-413" />
                </div>
                <div className="slide-3 w-slide">
                  <div className="div-block-413" />
                </div>
              </div>
              <div className="left-arrow-6 w-slider-arrow-left">
                <div className="w-icon-slider-left" />
              </div>
              <div className="right-arrow-3 w-slider-arrow-right">
                <div className="w-icon-slider-right" />
              </div>
              <div className="slide-nav-4 w-slider-nav w-round" />
            </div>
          </div>
          <div className="div-block-414">
            <div className="div-block-415">
              <img
                src={require('../../../assets/images/ads.jpg')}
                loading="lazy"
                width={288}
                alt
                className="image-51"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="background-banner-image wf-section">
        <div className="div-block-399" />
      </div>
      <div className="template">
        <div className="heading-div">
          <div className="div-block-411">
            <h2 className="hero-slide-header-2">Projects</h2>
            <div className="line" />
          </div>
          <div
            data-w-id="38d29e77-bf1b-0e1c-649a-45a2e7decb6a"
            className="div-block-204"
          >
            <Link
              href="/projects"
              as="projects"
              className="dropdown-link-2 w-dropdown-link"
            >
              <a
                data-w-id="38d29e77-bf1b-0e1c-649a-45a2e7decb6b"
                className="link-block-19 w-inline-block"
              >
                <div className="link-6">View All </div>
                <img
                  src={require('../../../assets/images/next.svg')}
                  loading="lazy"
                  width={18}
                  alt
                  className="arrow"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="wrapper-2">
          {projects?.map((proj) => (
            <div className="main-block w-inline-block">
              <img
                className="image-box"
                src={proj.media?.url}
                style={{ height: '300px' }}
              />
              <div className="card-box">
                <div className="text-block-162">
                  <strong className="bold-text-3">{proj?.title}</strong>
                  <br />
                </div>
                <div className="text-block-6 bold">
                  <strong className={`${styles.truncate_overflow} bold-text-4`}>
                    <span
                      className="box"
                      dangerouslySetInnerHTML={{ __html: proj?.body }}
                    />
                  </strong>
                </div>
              </div>
              <div className="div-block-70">
                <Link
                  href="/blogDetails/[details]"
                  as={`/blogDetails/${proj?._id}`}
                  className="dropdown-link-2 w-dropdown-link"
                >
                  <a className="text-block-64">Read More</a>
                </Link>
                <div className="div-block-208">
                  <div className="project-txt past">{proj?.category?.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="template">
        <div className="heading-div">
          <div className="div-block-410">
            <h2 className="hero-slide-header-2">Competitions</h2>
            <div className="line" />
          </div>
          <div
            data-w-id="64ba74b1-c3bc-3ca1-2b51-f4affc83cbe6"
            className="div-block-204"
          >
            <Link
              href="/projects"
              as="projects"
              className="dropdown-link-2 w-dropdown-link"
            >
              <a
                data-w-id="38d29e77-bf1b-0e1c-649a-45a2e7decb6b"
                className="link-block-19 w-inline-block"
              >
                <div className="link-6">View All </div>
                <img
                  src={require('../../../assets/images/next.svg')}
                  loading="lazy"
                  width={18}
                  alt
                  className="arrow"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="wrapper-2">
          {competitions?.map((comp) => (
            <a
              href="blog-categories.html"
              className="main-block w-inline-block"
            >
              <img className="image-box" src={comp?.media?.url} />
              <div className="card-box">
                <div className="div-block-68">
                  <div className="div-block-204">
                    <h1 className="folllowers contact">Contact us</h1>
                    <img
                      src="../../../assets/images/arrow-1.svg"
                      loading="lazy"
                      width={18}
                      alt
                      className="image-36"
                    />
                  </div>
                </div>
                <div className="text-block-162">
                  <strong className="bold-text-3">{comp?.title}</strong>
                  <br />
                </div>
                <div className="text-block-6 bold">
                  <strong className={`${styles.truncate_overflow} bold-text-4`}>
                    <span
                      className="box"
                      dangerouslySetInnerHTML={{
                        __html: comp?.body,
                      }}
                    />
                  </strong>
                </div>
              </div>
              <div className="div-block-70">
                <div className="text-block-64">Read More</div>
                <div className="div-block-208">
                  <div className="project-txt past">Competitions</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="services">
        <div className="div-heading">
          <h1 className="heading-2">Our services</h1>
          <div className="line" />
        </div>
        <div className="div-block-193">
          <div className="div-block-373">
            <div
              data-w-id="0659dacf-b1f1-8b88-7636-fdfd1206db46"
              className="div-block-370"
            >
              <div>
                <h3 className="heading-4 black">Service 1</h3>
                <p className="paragraph-8">
                  Students will have hands-on training taking place in the yard
                  and on the road using a tractor-trailer, while under the
                  instruction of a qualified trainer with great efficiency.
                </p>
              </div>
              <div className="div-block-371">
                <a
                  href="#"
                  data-w-id="0659dacf-b1f1-8b88-7636-fdfd1206db4f"
                  className="nav-link-2 sign-in down-button _2222 w-inline-block"
                >
                  <div className="text-block-65">Read more</div>
                  <img
                    src={require('../../../assets/images/arrow.svg')}
                    loading="lazy"
                    width={12}
                    alt
                    className="arrow"
                  />
                  <img
                    src="../../../assets/images/2nd-line.svg"
                    loading="lazy"
                    width={12}
                    alt
                    className="linewhite"
                  />
                </a>
              </div>
            </div>
            <div
              data-w-id="d34583ac-3a46-ce41-27a6-fd6826cb04da"
              className="div-block-370"
            >
              <div>
                <h3 className="heading-4 black">Service 2</h3>
                <p className="paragraph-8">
                  Students will have hands-on training taking place in the yard
                  and on the road using a tractor-trailer, while under the
                  instruction of a qualified trainer with great efficiency.
                </p>
              </div>
              <div className="div-block-371">
                <a
                  href="#"
                  data-w-id="d34583ac-3a46-ce41-27a6-fd6826cb04e3"
                  className="nav-link-2 sign-in down-button _2222 w-inline-block"
                >
                  <div className="text-block-65">Read more</div>
                  <img
                    src={require('../../../assets/images/arrow.svg')}
                    loading="lazy"
                    width={12}
                    alt
                    className="arrow"
                  />
                  <img
                    src="../../../assets/images/2nd-line.svg"
                    loading="lazy"
                    width={12}
                    alt
                    className="linewhite"
                  />
                </a>
              </div>
            </div>
            <div
              data-w-id="af2afc25-5f4a-dab5-1db5-4ba61f6f05e8"
              className="div-block-370"
            >
              <div>
                <h3 className="heading-4 black">Service 3</h3>
                <p className="paragraph-8">
                  Students will have hands-on training taking place in the yard
                  and on the road using a tractor-trailer, while under the
                  instruction of a qualified trainer with great efficiency.
                </p>
              </div>
              <div className="div-block-371">
                <a
                  href="#"
                  data-w-id="af2afc25-5f4a-dab5-1db5-4ba61f6f05f1"
                  className="nav-link-2 sign-in down-button _2222 w-inline-block"
                >
                  <div className="text-block-65">Read more</div>
                  <img
                    src={require('../../../assets/images/arrow.svg')}
                    loading="lazy"
                    width={12}
                    alt
                    className="arrow"
                  />
                  <img
                    src="../../../assets/images/2nd-line.svg"
                    loading="lazy"
                    width={12}
                    alt
                    className="linewhite"
                  />
                </a>
              </div>
            </div>
            <div
              data-w-id="a1c06fa8-1ead-760f-fabc-d9b26e54d7f7"
              className="div-block-370"
            >
              <div>
                <h3 className="heading-4 black">Service 4</h3>
                <p className="paragraph-8">
                  Students will have hands-on training taking place in the yard
                  and on the road using a tractor-trailer, while under the
                  instruction of a qualified trainer with great efficiency.
                </p>
              </div>
              <div className="div-block-371">
                <a
                  href="#"
                  data-w-id="a1c06fa8-1ead-760f-fabc-d9b26e54d800"
                  className="nav-link-2 sign-in down-button _2222 w-inline-block"
                >
                  <div className="text-block-65">Read more</div>
                  <img
                    src={require('../../../assets/images/arrow.svg')}
                    loading="lazy"
                    width={12}
                    alt
                    className="arrow"
                  />
                  <img
                    src="../../../assets/images/2nd-line.svg"
                    loading="lazy"
                    width={12}
                    alt
                    className="linewhite"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-54 _2 _22">
          <div className="div-block-55 _11">
            <img
              src="../../../assets/images/ic-analysis_1ic-analysis.png"
              loading="lazy"
              alt
            />
            <h3 className="heading-32 _1">1. Analyze</h3>
            <p className="paragraph-15">
              We start by analyzing software system requirements and business
              processes
            </p>
          </div>
          <div className="div-block-55 _11">
            <img
              src="../../../assets/images/ic-consulting-1_1ic-consulting-1.png"
              loading="lazy"
              alt
            />
            <h3 className="heading-32 _1">2. Scope</h3>
            <p className="paragraph-15">
              We work with all stakeholders to create a software development
              plan
            </p>
          </div>
          <div className="div-block-55 _2 _11">
            <img
              src="../../../assets/images/ic-prototyping-2_1ic-prototyping-2.png"
              loading="lazy"
              alt
            />
            <h3 className="heading-32 _1">3. Prototype</h3>
            <p className="paragraph-15">
              We design the features and functions as it relates to the user
              interface
            </p>
          </div>
        </div>
        <div className="btn-div">
          <a href="#" className="button-5 w-inline-block">
            <p className="paragraph-9">View more</p>
            <img
              src="../../../assets/images/next.png"
              width={11}
              alt
              className="arrow1"
            />
          </a>
        </div>
      </div>
      <div className="template">
        <div className="heading-div">
          <div className="div-block-409">
            <h2 className="hero-slide-header-2">Latest Products</h2>
            <div className="line" />
          </div>
          <div
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf9504b"
            className="div-block-204"
          >
            <a
              href="#"
              data-w-id="c05d60c0-f468-2744-88ff-015c0cf9504c"
              className="link-block-19 w-inline-block"
            >
              <div className="link-6">View All </div>
              <img
                src="../../../assets/images/next.svg"
                loading="lazy"
                width={18}
                alt
                className="arrow"
              />
            </a>
          </div>
        </div>
        <div className="wrapper-2">
          <a
            href="#"
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf95051"
            className="case-study-link w-inline-block"
          >
            <div className="portifolio">
              <img
                src="../../../assets/images/policy-01.jpg"
                loading="lazy"
                sizes="100vw"
                srcSet="images/policy-01-p-1080.jpeg 1080w, images/policy-01-p-1600.jpeg 1600w, images/policy-01-p-2000.jpeg 2000w, images/policy-01-p-2600.jpeg 2600w, images/policy-01-p-3200.jpeg 3200w, images/policy-01.jpg 4167w"
                alt
                className="image-31"
              />
              <div className="content-wrapper">
                <div>
                  <h1 className="heading-5">Policy Market</h1>
                  <p className="paragraph-2">UI, Coded Template</p>
                </div>
                <div>
                  <img
                    src="../../../assets/images/eye.svg"
                    loading="lazy"
                    width={23}
                    alt
                  />
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf9505c"
            className="case-study-link w-inline-block"
          >
            <div className="portifolio">
              <img
                src="../../../assets/images/Ademrius-01.jpg"
                loading="lazy"
                sizes="100vw"
                srcSet="images/Ademrius-01-p-1080.jpeg 1080w, images/Ademrius-01-p-1600.jpeg 1600w, images/Ademrius-01-p-2000.jpeg 2000w, images/Ademrius-01-p-2600.jpeg 2600w, images/Ademrius-01-p-3200.jpeg 3200w, images/Ademrius-01.jpg 4167w"
                alt
              />
              <div className="content-wrapper">
                <div>
                  <h1 className="heading-5">Clinical</h1>
                  <p className="paragraph-2">UI, Coded Template</p>
                </div>
                <div>
                  <img
                    src="../../../assets/images/eye.svg"
                    loading="lazy"
                    width={23}
                    alt
                  />
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf95067"
            className="case-study-link w-inline-block"
          >
            <div className="portifolio">
              <img
                src="../../../assets/images/Better-01.jpg"
                loading="lazy"
                sizes="100vw"
                srcSet="images/Better-01-p-1080.jpeg 1080w, images/Better-01-p-1600.jpeg 1600w, images/Better-01-p-2000.jpeg 2000w, images/Better-01-p-2600.jpeg 2600w, images/Better-01-p-3200.jpeg 3200w, images/Better-01.jpg 4167w"
                alt
              />
              <div className="content-wrapper">
                <div>
                  <h1 className="heading-5">Better Mortgage</h1>
                  <p className="paragraph-2">UI, Coded Template</p>
                </div>
                <div>
                  <img
                    src="../../../assets/images/eye.svg"
                    loading="lazy"
                    width={23}
                    alt
                  />
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf95072"
            className="case-study-link w-inline-block"
          >
            <div className="portifolio">
              <img
                src="../../../assets/images/expense.jpg"
                loading="lazy"
                sizes="100vw"
                srcSet="images/expense-p-1080.jpeg 1080w, images/expense-p-1600.jpeg 1600w, images/expense-p-2000.jpeg 2000w, images/expense-p-2600.jpeg 2600w, images/expense-p-3200.jpeg 3200w, images/expense.jpg 4167w"
                alt
              />
              <div className="content-wrapper">
                <div>
                  <h1 className="heading-5">Expense Management</h1>
                  <p className="paragraph-2">UI, Coded Template</p>
                </div>
                <div>
                  <img
                    src="../../../assets/images/eye.svg"
                    loading="lazy"
                    width={23}
                    alt
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="wrapper-2">
          <a
            href="#"
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf9507e"
            style={{ opacity: 0 }}
            className="link-block-20 w-inline-block"
          >
            <div className="card-box">
              <img
                src="../../../assets/images/stock-market.jpg"
                loading="lazy"
                width={310}
                sizes="100vw"
                srcSet="images/stock-market-p-1080.jpeg 1080w, images/stock-market-p-1600.jpeg 1600w, images/stock-market-p-2000.jpeg 2000w, images/stock-market-p-2600.jpeg 2600w, images/stock-market-p-3200.jpeg 3200w, images/stock-market.jpg 5750w"
                alt
                className="image-margin"
              />
              <div className="property-content">
                <div className="text-block-6 bold">
                  <strong>4 Single Family Homes in Richmond</strong>
                </div>
                <div className="text-block-162">
                  <strong>SPRINGWOOD CRESCENT, RICHMOND</strong>
                  <br />
                </div>
              </div>
              <div className="div-block-70">
                <div className="text-block-64">Know More</div>
                <div className="div-block-208">
                  <div className="project-txt past">Past Project</div>
                </div>
              </div>
              <div className="div-block-68">
                <div className="div-block-204">
                  <h1 className="folllowers contact">Contact us</h1>
                  <img
                    src="../../../assets/images/arrow-1.svg"
                    loading="lazy"
                    width={18}
                    alt
                    className="image-36"
                  />
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf95094"
            style={{ opacity: 0 }}
            className="link-block-20 w-inline-block"
          >
            <div className="card-box">
              <img
                src="../../../assets/images/springwood.jpg"
                loading="lazy"
                width={310}
                sizes="100vw"
                srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                alt
                className="image-margin"
              />
              <div className="property-content">
                <div className="text-block-6 bold">
                  <strong>4 Single Family Homes in Richmond</strong>
                </div>
                <div className="text-block-162">
                  <strong>SPRINGWOOD CRESCENT, RICHMOND</strong>
                  <br />
                </div>
              </div>
              <div className="div-block-70">
                <div className="text-block-64">Know More</div>
                <div className="div-block-208">
                  <div className="project-txt past">Past Project</div>
                </div>
              </div>
              <div className="div-block-68">
                <div className="div-block-204">
                  <h1 className="folllowers contact">Contact us</h1>
                  <img
                    src="../../../assets/images/arrow-1.svg"
                    loading="lazy"
                    width={18}
                    alt
                    className="image-36"
                  />
                </div>
              </div>
            </div>
          </a>
          {dashboard.map((dash, index) =>
            index < 3 ? (
              <a
                href="blog-categories.html"
                className="main-block w-inline-block"
              >
                <img className="image-box bg" src={dash?.feed?.media?.url} />
                <div className="card-box">
                  <div className="div-block-68">
                    <div className="div-block-204">
                      <h1 className="folllowers contact">Contact us</h1>
                      <img
                        src="../../../assets/images/arrow-1.svg"
                        loading="lazy"
                        width={18}
                        alt
                        className="image-36"
                      />
                    </div>
                  </div>
                  <div className="text-block-162">
                    <strong className="bold-text-3">{dash?.feed?.title}</strong>
                    <br />
                  </div>
                  <div className="text-block-6 bold">
                    <strong
                      className={`${styles.truncate_overflow} bold-text-4`}
                    >
                      <span
                        className="box"
                        dangerouslySetInnerHTML={{
                          __html: dash?.feed?.body,
                        }}
                      />
                    </strong>
                  </div>
                </div>
                <div className="div-block-70">
                  <div className="text-block-64">Read More</div>
                  <div className="div-block-208">
                    <div className="project-txt past">Products</div>
                  </div>
                </div>
              </a>
            ) : null
          )}
          <a
            href="#"
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf950e9"
            style={{ opacity: 0 }}
            className="link-block-20 w-inline-block"
          >
            <div className="card-box">
              <img
                src="../../../assets/images/springwood.jpg"
                loading="lazy"
                width={310}
                sizes="100vw"
                srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                alt
                className="image-margin"
              />
              <div className="property-content">
                <div className="text-block-6 bold">
                  <strong>4 Single Family Homes in Richmond</strong>
                </div>
                <div className="text-block-162">
                  <strong>SPRINGWOOD CRESCENT, RICHMOND</strong>
                  <br />
                </div>
              </div>
              <div className="div-block-70">
                <div className="text-block-64">Know More</div>
                <div className="div-block-208">
                  <div className="project-txt past">Past Project</div>
                </div>
              </div>
              <div className="div-block-68">
                <div className="div-block-204">
                  <h1 className="folllowers contact">Contact us</h1>
                  <img
                    src="../../../assets/images/arrow-1.svg"
                    loading="lazy"
                    width={18}
                    alt
                    className="image-36"
                  />
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf950ff"
            style={{ opacity: 0 }}
            className="link-block-20 w-inline-block"
          >
            <div className="card-box">
              <img
                src="../../../assets/images/springwood.jpg"
                loading="lazy"
                width={310}
                sizes="100vw"
                srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                alt
                className="image-margin"
              />
              <div className="property-content">
                <div className="text-block-6 bold">
                  <strong>4 Single Family Homes in Richmond</strong>
                </div>
                <div className="text-block-162">
                  <strong>SPRINGWOOD CRESCENT, RICHMOND</strong>
                  <br />
                </div>
              </div>
              <div className="div-block-70">
                <div className="text-block-64">Know More</div>
                <div className="div-block-208">
                  <div className="project-txt past">Past Project</div>
                </div>
              </div>
              <div className="div-block-68">
                <div className="div-block-204">
                  <h1 className="folllowers contact">Contact us</h1>
                  <img
                    src="../../../assets/images/arrow-1.svg"
                    loading="lazy"
                    width={18}
                    alt
                    className="image-36"
                  />
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf95115"
            className="case-study-link w-inline-block"
          >
            <div className="portifolio">
              <img
                src="../../../assets/images/Better-01.jpg"
                loading="lazy"
                sizes="100vw"
                srcSet="images/Better-01-p-1080.jpeg 1080w, images/Better-01-p-1600.jpeg 1600w, images/Better-01-p-2000.jpeg 2000w, images/Better-01-p-2600.jpeg 2600w, images/Better-01-p-3200.jpeg 3200w, images/Better-01.jpg 4167w"
                alt
              />
              <div className="content-wrapper">
                <div>
                  <h1 className="heading-5">Better Mortgage</h1>
                  <p className="paragraph-2">UI, Coded Template</p>
                </div>
                <div>
                  <img
                    src="../../../assets/images/eye.svg"
                    loading="lazy"
                    width={23}
                    alt
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="div-block">
        <div className="div-block-2">
          <div className="div-block-3">
            <img
              src="../../../assets/images/about-archi.png"
              loading="lazy"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 45vw, (max-width: 1279px) 46vw, 558px"
              width={558}
              srcSet="images/about-archi-p-500.png 500w, images/about-archi-p-800.png 800w, images/about-archi-p-1080.png 1080w, images/about-archi-p-1600.png 1600w, images/about-archi.png 1728w"
              alt
              className="image-26"
            />
            <div className="div-block-4" />
            <div className="div-block-5">
              <h2 className="heading-10">Lorem ipsum</h2>
            </div>
          </div>
          <div
            data-w-id="e546e88e-4300-c2b2-5ce4-40c6fb0ae65e"
            className="div-block-6"
          >
            <div className="div-block-11">
              <h1 className="heading-2 left">Who we are</h1>
              <div className="line" />
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className="paragraph bo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,{' '}
            </p>
            <div className="div-block-12">
              <a
                onClick={() => {
                  router.push('/aboutUs');
                }}
                className="button-5 w-inline-block"
              >
                <p className="paragraph-9">Read more</p>
                <img
                  src="../../../assets/images/next.png"
                  width={11}
                  alt
                  className="arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-slider-2 wf-section">
        <div className="container-500 w-container">
          <div className="div-block-122">
            <div className="div-block-64 hide">
              <div>
                <div
                  data-delay={4000}
                  data-animation="slide"
                  className="slider-4 w-slider"
                  data-autoplay="false"
                  data-easing="ease"
                  data-hide-arrows="false"
                  data-disable-swipe="false"
                  data-autoplay-limit={0}
                  data-nav-spacing={3}
                  data-duration={500}
                  data-infinite="true"
                >
                  <div className="mask-3 w-slider-mask">
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="div-block-65">
                        <a href="#" className="link-block-5 w-inline-block">
                          <img
                            src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                            loading="lazy"
                            alt
                            className="image-11"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="left-arrow-4 w-slider-arrow-left">
                    <div className="w-icon-slider-left" />
                  </div>
                  <div className="right-arrow w-slider-arrow-right">
                    <div className="w-icon-slider-right" />
                  </div>
                  <div className="slide-nav-2 w-slider-nav w-round" />
                </div>
              </div>
            </div>
            <div className="div-block-66">
              <div className="div-block-255">
                <div className="div-block-256">
                  <div className="div-block-69">
                    <p className="paragraph-24">
                      If you have any query regarding, feel free to contact us.
                      We are always available to serve you with our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-section wf-section">
        <div className="container-500 w-container">
          <div className="div-block-82">
            <div className="div-block-33">
              <div
                data-w-id="317b7fca-608e-a18c-0353-8b11f689b156"
                className="faq hide"
              >
                <div className="div-block-72">
                  <div
                    data-w-id="317b7fca-608e-a18c-0353-8b11f689b158"
                    className="dropdown-faq d_f"
                  >
                    <div className="div-block-73">
                      <h4 className="heading-12">
                        what is the process for construction ?
                      </h4>
                      <div className="div-block-75">
                        <div className="div-block-76" />
                        <div className="div-block-77" />
                      </div>
                    </div>
                    <div style={{ height: 0 }} className="answer-10-2">
                      <div className="div-block-74">
                        <p className="paragraph-16">
                          There are many variations of passages of available but
                          the majority have suffered alteration in that some
                          form by injected randomised words which don’t look
                          even as slightly believable now.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-id="317b7fca-608e-a18c-0353-8b11f689b163"
                    className="dropdown-faq"
                  >
                    <div className="div-block-73">
                      <h4 className="heading-12">
                        what is the process for construction ?
                      </h4>
                      <div className="div-block-75">
                        <div className="div-block-76" />
                        <div className="div-block-77" />
                      </div>
                    </div>
                    <div style={{ height: 0 }} className="answer-10-2">
                      <div className="div-block-74">
                        <p className="paragraph-16">
                          There are many variations of passages of available but
                          the majority have suffered alteration in that some
                          form by injected randomised words which don’t look
                          even as slightly believable now.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-id="317b7fca-608e-a18c-0353-8b11f689b16e"
                    className="dropdown-faq"
                  >
                    <div className="div-block-73">
                      <h4 className="heading-12">
                        what is the process for construction ?
                      </h4>
                      <div className="div-block-75">
                        <div className="div-block-76" />
                        <div className="div-block-77" />
                      </div>
                    </div>
                    <div style={{ height: 0 }} className="answer-10-2">
                      <div className="div-block-74">
                        <p className="paragraph-16">
                          There are many variations of passages of available but
                          the majority have suffered alteration in that some
                          form by injected randomised words which don’t look
                          even as slightly believable now.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-id="317b7fca-608e-a18c-0353-8b11f689b179"
                    className="dropdown-faq"
                  >
                    <div className="div-block-73">
                      <h4 className="heading-12">
                        what is the process for construction ?
                      </h4>
                      <div className="div-block-75">
                        <div className="div-block-76" />
                        <div className="div-block-77" />
                      </div>
                    </div>
                    <div style={{ height: 0 }} className="answer-10-2">
                      <div className="div-block-74">
                        <p className="paragraph-16">
                          There are many variations of passages of available but
                          the majority have suffered alteration in that some
                          form by injected randomised words which don’t look
                          even as slightly believable now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="../../../assets/images/ad-3.JPG"
                loading="lazy"
                width={185}
                alt
                className="image-37"
              />
              <img
                src="../../../assets/images/archi-tools.png"
                loading="lazy"
                width={400}
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 56vw, (max-width: 991px) 58vw, 400px"
                srcSet="images/archi-tools-p-500.png 500w, images/archi-tools-p-800.png 800w, images/archi-tools.png 1728w"
                alt
                className="image-37 full"
              />
            </div>
            <div className="div-block-78">
              <div className="div-block-79">
                <div className="text-block-163">Request a free Quote</div>
                <div className="w-form">
                  <form data-name="Email Form" name="email-form">
                    <div className="div-block-80">
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Your-Name"
                        data-name="Your Name"
                        placeholder="Your Name"
                        id="Name"
                        required
                      />
                    </div>
                    <div className="div-block-80">
                      <input
                        type="email"
                        className="text-field w-input"
                        maxLength={256}
                        name="Email-Address"
                        data-name="Email Address"
                        placeholder="Email Address "
                        id="Email"
                        required
                      />
                    </div>
                    <div className="div-block-80">
                      <input
                        type="tel"
                        className="text-field w-input"
                        maxLength={256}
                        name="Phone-Number"
                        data-name="Phone Number"
                        placeholder="Phone Number"
                        id="Phone"
                      />
                    </div>
                    <div className="div-block-80">
                      <input
                        type="tel"
                        className="text-field w-input"
                        maxLength={256}
                        name="Subject"
                        data-name="Subject"
                        placeholder="Subject"
                        id="Subject"
                      />
                    </div>
                    <div className="div-block-80">
                      <textarea
                        name="field-3"
                        maxLength={5000}
                        id="Message"
                        placeholder="Message"
                        className="text-field form-message-box w-input"
                        defaultValue={''}
                      />
                    </div>
                    <div className="div-block-80 form-btn">
                      <input
                        type="submit"
                        defaultValue="Get a free quote"
                        data-wait="Please wait..."
                        className="submit-button w-button"
                      />
                      <div className="div-block-81" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
