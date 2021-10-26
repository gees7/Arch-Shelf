import React, { useState, useEffect } from 'react';
import FixedSocialIcons from '../../FixedSocialIcons';
import {
  getDashboardFeed, getFeeds
} from "../../../store/api/dashboardApi";
import { notification } from "antd";
import moment from "moment";

const Dashboard = () => {
  const [slider, setSlider] = useState("");
  const [sliderData, setSliderData] = useState([]);
  const [nextSlider, setNextSlider] = useState({})
  const [blogs, setBlogs] = useState();
  const [initiatives, setInitiatives] = useState();
  const [academy, setAcademy] = useState();
  const [foundation, setFoundation] = useState();
  const [life, setLife] = useState();

  useEffect(() => {
    if(sliderData[0]) setSlider(sliderData[0]?._id)
    // if(sliderData[0]) setNextSlider(sliderData[0])
  }, [sliderData])

  useEffect(() => {
    getDashboardFeed()
      .then((res) => {
        setSliderData(res.data);
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: "Failed to get sliders",
          });
        } else {
          notification.error({
            message: `${err?.data?.error?.message}`,
          });
        }
      });
  }, []);

  useEffect(() => {
    const body = {
      start: 0,
      limit: 4,
      type: 'blog'
    };
    getFeeds({ query: body })
      .then((res) => {
        setBlogs(res?.data?.feedList)
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: "Failed to get feeds",
          });
        } else {
          notification.error({
            message: `${err?.data?.error?.message}`,
          });
        }
      });
  }, []);

  useEffect(() => {
    const body = {
      start: 0,
      limit: 1,
      type: 'academy'
    };
    getFeeds({ query: body })
      .then((res) => {
        setAcademy(res?.data?.feedList)
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: "Failed to get feeds",
          });
        } else {
          notification.error({
            message: `${err?.data?.error?.message}`,
          });
        }
      });
  }, []);

  useEffect(() => {
    const body = {
      start: 0,
      limit: 1,
      type: 'foundation'
    };
    getFeeds({ query: body })
      .then((res) => {
        setFoundation(res?.data?.feedList)
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: "Failed to get feeds",
          });
        } else {
          notification.error({
            message: `${err?.data?.error?.message}`,
          });
        }
      });
  }, []);  
  
  useEffect(() => {
    const body = {
      start: 0,
      limit: 1,
      type: 'life'
    };
    getFeeds({ query: body })
      .then((res) => {
        setLife(res?.data?.feedList)
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: "Failed to get feeds",
          });
        } else {
          notification.error({
            message: `${err?.data?.error?.message}`,
          });
        }
      });
  }, []);

  useEffect(() => {
    const body = {
      start: 0,
      limit: 3,
      type: 'initiative'
    };
    getFeeds({ query: body })
      .then((res) => {
        setInitiatives(res?.data?.feedList)
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: "Failed to get feeds",
          });
        } else {
          notification.error({
            message: `${err?.data?.error?.message}`,
          });
        }
      });
  }, []);

  return (
    <div>
      <div className="section-73 wf-section">
        <div className="cloneable-area">
          <div className="c-hero-slider-2" slider={slider}>
            <div
              data-delay={2000}
              data-animation="cross"
              className="hero-slider w-slider"
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
                {sliderData && sliderData?.map((item) => (
                    <>
                      {item?._id === slider && (
                        <div className="hero-slide w-slide" >
                          {/* <div className="c-hero-slide-content _2" > */}
                          <div className="c-hero-slide-content" style={{ backgroundImage: `url(${item?.feed?.media?.url})`, backgroundPosition: '0px 0px, 50% 50%', backgroundSize: "cover" , backgroundRepeat: "no-repeat" }}>
                            <div className="hero-slide-highlight-text">
                              <span className="w-4 truncate ">{item?.feed?.title}</span>
                            </div>
                          </div>
                          <div className="c-hero-slide-details">
                            <div className="c-hero-slide-stripes">
                              <div className="hero-slide-stripe" />
                              <div className="hero-slide-stripe" />
                              <div className="hero-slide-stripe" />
                              <div className="hero-slide-stripe" />
                              <div className="hero-slide-stripe" />
                            </div>
                            <div className="_w-hero-slide-details">
                              <h2 className="hero-slide-header" >
                                {item?.feed?.title}
                              </h2>
                              <p className="hero-slide-p"> <span
                                   dangerouslySetInnerHTML={{ __html: item?.feed?.body }}
                               ></span></p>
                              <div className="c-slide-cta">
                                <a
                                  href="about-us.html"
                                  target="_blank"
                                  className="slide-cta w-inline-block"
                                >
                                  <div className="slide-cta-text">
                                    Read More
                                  </div>
                                  <div className="slide-cta-curtain" />
                                </a>
                              </div>
                              {/* <div className="hero-slide-bg-no">{item?.id}</div> */}
                            </div>
                          </div>
                        </div>
                       )}
                         <div className="hero-slider-arrow w-slider-arrow-left">
                          <div className="w-icon-slider-left" />
                         </div>
                         <div className="hero-slider-arrow w-slider-arrow-right">
                         <div className="w-icon-slider-right" onClick={() => setNextSlider(item)}/>
                         </div> 
                    </>
                  ))}
              </div>
              <div className="hero-slider-nav w-slider-nav w-round" />
              <div className="c-hero-slider-navbar" slider={slider}>
                {sliderData &&
                  sliderData?.map((item) => (
                    <div className="wo-hero-slider-nav"  onClick={() => setSlider(item?._id)}>
                      <div className="_w-hero-slider-nav">
                        {/* <div className="hero-slider-nav-number">.</div> */}
                        <div className="c-hero-slider-nav-content">
                          <div
                            className={`hero-slider-nav-title ${
                              slider === item?._id ? 'active' : ''
                            }`}
                          >
                            {item?.feed?.title}
                          </div>
                        </div>
                        <div
                          className={`slider-nav-indicator  ${
                            slider === item?._id ? 'active' : ''
                          } `}
                        />
                        <div className="hero-slider-nav-curtain" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        {/* <img
          src={require('../../../assets/images/hero-image-black.png')}
          loading="lazy"
          sizes="100vw"
          // srcSet="images/hero-image-black-p-500.png 500w, images/hero-image-black-p-800.png 800w, images/hero-image-black.png 1920w"
          alt=""
          // className="image-32243"
        /> */}
        <div className="hero-section-div color">
          <div className="div-block-23425">
            <div
              // data-w-id="a8157dd2-842a-d5e3-6645-e2fdfddbc686"
              // style={{ opacity: 0 }}
              className="div-block-23427"
            >
              <img
                src={require('../../../assets/images/what.png')}
                loading="lazy"
                width={177}
                // data-w-id="4f65fe85-3e3b-0d23-a573-ba7875358a38"
                alt=""
              />
            </div>
            <div
              // data-w-id="eeaa59c4-ab51-b9aa-8f44-710b1d920ddb"
              // style={{ opacity: 0 }}
              className="div-block-23428"
            >
              <img src="images/why.png" loading="lazy" width={177} alt="" />
            </div>
            <div
              // data-w-id="c5e0ea12-a2bf-0d2a-0d85-b42ef5d00642"
              // style={{ opacity: 0 }}
              className="div-block-23429"
            >
              <img src="images/how.png" loading="lazy" width={177} alt="" />
            </div>
          </div>
          <div className="div-block-23426">
            <div
            // data-w-id="60289a9b-d478-1bf4-883e-b59bc7d52d94"
            // style={{ opacity: 0 }}
            >
              <img
                src="images/savings.png"
                loading="lazy"
                width={560}
                alt=""
                className="image-32244"
              />
            </div>
            <div
              // data-w-id="ab1a5e4a-9964-b92a-42ea-e7fced0934c8"
              // style={{ opacity: 0 }}
              className="div-block-23430"
            >
              <img
                src="images/investing.png"
                loading="lazy"
                width={560}
                alt=""
              />
            </div>
            <div
              // data-w-id="14dfa576-f6b4-4bf0-d727-2cfc7d330431"
              // style={{ opacity: 0 }}
              className="div-block-23432"
            >
              <img src="images/trading.png" loading="lazy" width={560} alt="" />
            </div>
            <div
              // data-w-id="5957e789-f493-5d6c-bd45-b3517740315b"
              // style={{ opacity: 0 }}
              className="div-block-23431"
            >
              <img
                src="images/insurance.png"
                loading="lazy"
                width={560}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hero-section-div">
          <div className="div-block-23425">
            <div
              // data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c59797"
              // style={{ opacity: 0 }}
              className="div-block-23427"
            >
              <img
                src={require('../../../assets/images/why-main-dots.png')}
                loading="lazy"
                width={400}
                // data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c59798"
                // srcSet="images/why-main-dots-p-500.png 500w, images/why-main-dots.png 654w"
                // sizes="(max-width: 479px) 100vw, (max-width: 767px) 316.06024169921875px, (max-width: 991px) 395.0753173828125px, (max-width: 1279px) 35vw, (max-width: 1439px) 31vw, (max-width: 1919px) 395.07525634765625px, 21vw"
                alt=""
                className="image-32258"
              />
            </div>
            <div
              // data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c59799"
              // style={{ opacity: 0 }}
              className="div-block-23428"
            >
              <img
                src={require('../../../assets/images/what-white.png')}
                loading="lazy"
                width={200}
                // data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c5979a"
                alt=""
                className="image-32259"
              />
            </div>
            <div
              // data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c5979b"
              // style={{ opacity: 0 }}
              className="div-block-23429"
            >
              <img
                src={require('../../../assets/images/how-white.png')}
                loading="lazy"
                width={200}
                // data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c5979c"
                alt=""
                className="image-32260"
              />
            </div>
          </div>
          <div className="div-block-23426">
            <div
              // data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c5979e"
              // style={{ opacity: 0 }}
              className="div-block-23443"
            >
              <div className="div-block-23448">
                <img
                  src={require('../../../assets/images/saving-ruppe.png')}
                  loading="lazy"
                  width={101}
                  alt=""
                />
              </div>
              <div className="div-block-23446">
                <h3 className="heading-171">Savings</h3>
                <div>
                  <p className="paragraph-139 left">
                    You are &nbsp;the CEO of your own life, financial freedom is
                    not only your choice, it is your responsibility.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c597a0"
              // style={{ opacity: 0 }}
              className="div-block-23430"
            >
              <div className="div-block-23449">
                <img
                  src={require('../../../assets/images/investment.png')}
                  loading="lazy"
                  width={133}
                  alt=""
                />
              </div>
              <div className="div-block-23445">
                <h3 className="heading-171">Investing</h3>
                <div>
                  <p className="paragraph-139 left">
                    You become financially free when your passive income exceeds
                    your expenses and reap the benefits of the eight wonder:
                    Compound Interest
                  </p>
                </div>
              </div>
            </div>
            <div
              data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c597a2"
              // style={{ opacity: 0 }}
              className="div-block-23432"
            >
              <div className="div-block-23447">
                <img
                  src={require('../../../assets/images/trading_1.png')}
                  loading="lazy"
                  width={131}
                  alt=""
                />
              </div>
              <div className="div-block-23444">
                <h3 className="heading-171">Trading</h3>
                <div>
                  <p className="paragraph-139 left">
                    You’re taking steps towards being financially independent
                    and giving yourself a Plan B to create another source of
                    income.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-w-id="aacd9b33-51ca-68ca-4019-c68ae2c597a4"
              // style={{ opacity: 0 }}
              className="div-block-23431"
            >
              <div className="div-block-23450">
                <img
                  src={require('../../../assets/images/insure.png')}
                  loading="lazy"
                  width={98}
                  alt=""
                />
              </div>
              <div>
                <h3 className="heading-171">Insurance</h3>
                <div>
                  <p className="paragraph-139 left">
                    You can have peace of mind when you know you are secured
                    against any unforseen event in life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-4 wf-section">
        <div className="div-block-23234">
          <h1 className="heading-18">Our Ventures</h1>
          <div className="lines-wrapper left">
            <div className="line-bold" />
            <div className="line-bold red" />
          </div>
        </div>
        <div className="container-18 w-container">
          <div className="div-block-324 _1">
            <div className="div-block-335">
              <div className="div-block-23456">
                <div className="div-block-23444">
                  <h3 className="heading-171 billion">Green Hedge Capital</h3>
                  <div>
                    <h4 className="heading-172 billion">
                      Savings &amp; Investment
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="paragraph-139 left bilion">
                    You’re taking steps towards being financially independent
                    and giving yourself a Plan B to create another source of
                    income.
                  </p>
                  <p className="paragraph-139 left bilion">
                    You’re taking steps towards being financially independent
                    and giving yourself a Plan B to create another source of
                    income.
                  </p>
                  <p className="paragraph-139 left bilion">
                    ‍You’re taking steps towards being financially independent
                    and giving yourself a Plan B to create another source of
                    income. You’re taking steps towards being financially
                    independent and giving yourself a Plan B to create another
                    source of income.
                  </p>
                  <p className="paragraph-139 left bilion">
                    ‍You’re taking steps towards being financially independent
                    and giving yourself a Plan B to create another source of
                    income.
                  </p>
                  <div className="div-block-23475">
                    <div className="div-block-23476">
                      <h5 className="heading-176">Read More</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <img
                  src={require('../../../assets/images/billion-p-500.png')}
                  loading="lazy"
                  // width={400}
                  style={{ minWidth: 400 }}
                  // id="w-node-ad016c1f-e0a7-46af-2628-be15ba7af68d-d50409fb"
                  // srcSet="images/billion-p-500.png 500w, images/billion-p-1600.png 1600w, images/billion-p-2000.png 2000w, images/billion-p-2600.png 2600w, images/billion-p-3200.png 3200w, images/billion.png 5616w"
                  // sizes="(max-width: 479px) 100vw, (max-width: 991px) 375px, (max-width: 1439px) 21vw, 282.21875px"
                  alt=""
                  className="image-32254"
                />
                <img
                  src={require('../../../assets/images/white-imge-saving-invest-1-p-500.png')}
                  loading="lazy"
                  style={{ minWidth: 400 }}
                  // width={400}
                  // id="w-node-_51616464-4a2e-58c1-d63f-4d99efc7881b-d50409fb"
                  // srcSet="images/white-imge-saving-invest-1-p-500.png 500w, images/white-imge-saving-invest-1-p-800.png 800w, images/white-imge-saving-invest-1-p-1080.png 1080w, images/white-imge-saving-invest-1-p-1600.png 1600w, images/white-imge-saving-invest-1-p-2000.png 2000w, images/white-imge-saving-invest-1-p-2600.png 2600w, images/white-imge-saving-invest-1-p-3200.png 3200w, images/white-imge-saving-invest-1.png 5616w"
                  // sizes="(max-width: 479px) 100vw, (max-width: 991px) 375px, (max-width: 1439px) 14vw, 188.140625px"
                  alt=""
                  className="image-32254"
                />
              </div>
              <a
                // id="w-node-f8220b2e-f87a-d6d7-0c8d-f8d4fda6b194-d50409fb"
                href="#"
                className="link-block-48 hideback _2 vertical w-inline-block"
              >
                <img
                  src={require('../../../assets/images/saving-1.png')}
                  loading="lazy"
                  sizes="100vw"
                  // srcSet="images/saving-1-p-500.png 500w, images/saving-1-p-800.png 800w, images/saving-1-p-1080.png 1080w, images/saving-1-p-1600.png 1600w, images/saving-1-p-2000.png 2000w, images/saving-1.png 2616w"
                  alt=""
                  className="image-32246 hide"
                />
                <div className="div-block-23456">
                  <div className="div-block-23444">
                    <h3 className="heading-171">GHC Academy</h3>
                    <div>
                      <h4 className="heading-172">Work, Finance &amp; Life</h4>
                    </div>
                    <div>
                      <p className="paragraph-139">
                        You’re taking steps towards being financially
                        independent and giving yourself a Plan B to create
                        another source of income.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                id="w-node-_0cfd4b4c-aa6e-ffd2-bf91-89dec8c7e7b9-d50409fb"
                href="#"
                className="link-block-48 hideback _3 w-inline-block"
              >
                <img
                  src="images/saving-1.png"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="images/saving-1-p-500.png 500w, images/saving-1-p-800.png 800w, images/saving-1-p-1080.png 1080w, images/saving-1-p-1600.png 1600w, images/saving-1-p-2000.png 2000w, images/saving-1.png 2616w"
                  alt=""
                  className="image-32246 hide"
                />
                <div className="div-block-23456">
                  <div className="div-block-23444">
                    <h3 className="heading-171">GHC Foundation</h3>
                    <div>
                      <h4 className="heading-172">
                        Inspire Collaborate &amp; Share
                      </h4>
                    </div>
                    <div>
                      <p className="paragraph-139">
                        You’re taking steps towards being financially
                        independent and giving yourself a Plan B to create
                        another source of income.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                id="w-node-e536a287-3f27-2e9d-a3fa-e9b36133daaa-d50409fb"
                href="#"
                className="link-block-48 hideback _4 w-inline-block"
              >
                <img
                  src="images/saving-1.png"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="images/saving-1-p-500.png 500w, images/saving-1-p-800.png 800w, images/saving-1-p-1080.png 1080w, images/saving-1-p-1600.png 1600w, images/saving-1-p-2000.png 2000w, images/saving-1.png 2616w"
                  alt=""
                  className="image-32246 hide"
                />
                <div className="div-block-23456">
                  <div className="div-block-23444">
                    <h3 className="heading-171">GHC Life</h3>
                    <div>
                      <h4 className="heading-172">Internal Connect</h4>
                    </div>
                    <div>
                      <p className="paragraph-139">
                        You’re taking steps towards being financially
                        independent and giving yourself a Plan B to create
                        another source of income.
                      </p>
                    </div>
                    <div className="div-block-23457">
                      <div
                        data-w-id="c92d2c86-8485-d061-caa8-9614345dd830"
                        className="button-7 about life"
                      >
                        <div className="button-text-2">Know more</div>
                        <img
                          src="images/next.png"
                          width={15}
                          alt="Next Arrow"
                          className="arrow1"
                        />
                        <img
                          src="images/next.png"
                          width={15}
                          style={{
                            WebkitTransform:
                              'translate3d(-10PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform:
                              'translate3d(-10PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform:
                              'translate3d(-10PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform:
                              'translate3d(-10PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            opacity: 0,
                          }}
                          alt="Next Arrow"
                          className="arrow2"
                        />
                        <div className="button-8 hide" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="div-block-23460">
              <a
                href="ghc-academy.html"
                className="link-block-49 w-inline-block"
              >
                <div className="div-block-23459">
                  <div className="div-block-23444 _50">
                    <h3 className="heading-171 academy">GHC Academy</h3>
                    <div className="div-block-23513">
                      <h4 className="heading-172 aca">
                        Work, Finance &amp; Life
                      </h4>
                    </div>
                    <div className="div-block-23461">
                      <p className="paragraph-139 aca">
                        You’re taking steps towards being financially
                        independent and giving yourself a Plan B to create
                        another source of income.
                      </p>
                    </div>
                  </div>
                  <div className="div-block-23458">
                    <img
                      src={require('../../../assets/images/academy3.png')}
                      loading="lazy"
                      width={250}
                      // sizes="(max-width: 479px) 100vw, 250px"
                      // srcSet="images/academy3-p-500.png 500w, images/academy3-p-800.png 800w, images/academy3-p-1080.png 1080w, images/academy3-p-1600.png 1600w, images/academy3.png 5616w"
                      alt=""
                      className="image-32251"
                    />
                  </div>
                </div>
                <div
                  data-w-id="2a15d978-41d8-9b73-e632-31e13517e6e0"
                  className="div-block-45 venture"
                >
                  <div className="div-block-47 venture">
                    <img
                      src={require('../../../assets/images/blog3.jpg')}               
                      loading="lazy"
                      width={174}
                      height={100}
                      // srcSet="images/blog3-p-500.jpeg 500w, images/blog3.jpg 630w"
                      // sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 45vw, (max-width: 1439px) 14vw, 189.6875px"
                      alt=""
                      className="image-9 venture"
                    />
                  </div>
                  <div className="div-block-46 venture">
                    <h1 className="heading-164 venture">
                      <strong className="bold-text-16 venture">
                        {academy ? academy[0].title : ''}
                      </strong>
                    </h1>
                    <div className="text-block-8 venture">Read More</div>
                  </div>
                </div>
              </a>
              <a
                href="ghc-foundation.html"
                className="link-block-49 w-inline-block"
              >
                <div className="div-block-23459">
                  <div className="div-block-23444 _50">
                    <h3 className="heading-171 academy">GHC Foundation</h3>
                    <div>
                      <h4 className="heading-172 aca">
                        Inspire Collaborate &amp; Share
                      </h4>
                    </div>
                    <div className="div-block-23462">
                      <p className="paragraph-139 aca">
                        You’re taking steps towards being financially
                        independent and giving yourself a Plan B to create
                        another source of income.
                      </p>
                    </div>
                  </div>
                  <div className="div-block-23458">
                    <img
                      src={require('../../../assets/images/charity-1.png')}
                      loading="lazy"
                      width={250}
                      // sizes="(max-width: 479px) 100vw, 250px"
                      // srcSet="images/charity-1-p-500.png 500w, images/charity-1-p-800.png 800w, images/charity-1-p-1080.png 1080w, images/charity-1-p-1600.png 1600w, images/charity-1.png 5616w"
                      alt=""
                      className="image-32253"
                    />
                  </div>
                </div>
                <div
                  data-w-id="80f32589-f6f1-bfeb-8fa7-ede914f00778"
                  className="div-block-45 venture"
                >
                  <div className="div-block-47 venture">
                    <img
                      src={require('../../../assets/images/blog3.jpg')}               
                      loading="lazy"
                      width={174}
                      height={100}
                      // srcSet="images/blog3-p-500.jpeg 500w, images/blog3.jpg 630w"
                      // sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 45vw, (max-width: 1439px) 14vw, 189.6875px"
                      alt=""
                      className="image-9 venture"
                    />
                  </div>
                  <div className="div-block-46 venture">
                    <h1 className="heading-164 venture">
                      <strong className="bold-text-16 venture">
                        How To Focus On What Matters Every{' '}
                      </strong>
                    </h1>
                    <div className="text-block-8 venture">Read More</div>
                  </div>
                </div>
              </a>
              <a href="ghc-life.html" className="link-block-49 w-inline-block">
                <div className="div-block-23459">
                  <div className="div-block-23444 _50">
                    <h3 className="heading-171 academy">GHC Life</h3>
                    <div>
                      <h4 className="heading-172 aca">Internal Connect</h4>
                    </div>
                    <div className="div-block-23463">
                      <p className="paragraph-139 aca">
                        You’re taking steps towards being financially
                        independent and giving yourself a Plan B to create
                        another source of income.
                      </p>
                    </div>
                  </div>
                  <div className="div-block-23458">
                    <img
                      src={require('../../../assets/images/meeting-1.png')}               
                      loading="lazy"
                      width={250}
                      // sizes="(max-width: 479px) 100vw, 250px"
                      // srcSet="images/meeting-1-p-500.png 500w, images/meeting-1-p-800.png 800w, images/meeting-1-p-1080.png 1080w, images/meeting-1-p-1600.png 1600w, images/meeting-1-p-2000.png 2000w, images/meeting-1-p-2600.png 2600w, images/meeting-1-p-3200.png 3200w, images/meeting-1.png 5616w"
                      alt=""
                      className="image-32252"
                    />
                  </div>
                </div>
                <div
                  data-w-id="33c2a1ca-fd43-2cac-c415-0b2cd2463eeb"
                  className="div-block-45 venture"
                >
                  <div className="div-block-47 venture">
                    <img
                      src={require('../../../assets/images/blog3.jpg')}               
                      loading="lazy"
                      width={174}
                      height={100}
                      // srcSet="images/blog3-p-500.jpeg 500w, images/blog3.jpg 630w"
                      // sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 45vw, (max-width: 1439px) 14vw, 189.6875px"
                      alt=""
                      className="image-9 venture"
                    />
                  </div>
                  <div className="div-block-46 venture">
                    <h1 className="heading-164 venture">
                      <strong className="bold-text-16 venture">
                        How To Focus On What Matters Every{' '}
                      </strong>
                    </h1>
                    <div className="text-block-8 venture">Read More</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="About" className="section-71 wf-section">
        <div className="content-section hide">
          <div className="div-block-23329">
            <div className="div-block-23359">
              <div className="content-3">
                <div>
                  <h4 className="heading-166">Our&nbsp;Services</h4>
                </div>
                <h1 className="hero-head">What We Do ?</h1>
                <p className="bio">
                  Foundation was established with a small idea that was incepted
                  in the minds of its promoters in the year 1994! We skillfully
                  guide applicants for their immigration process to any country
                  they aspire to settle.
                </p>
                <div className="div-block-23356 hiding-counter">
                  <div className="loadbar">
                    <div
                      data-w-id="6d465c99-3b6d-97f9-dfc6-72e6517fe76d"
                      className="bar-wrap _3"
                    >
                      <h4 className="count-text _1">Financial planning</h4>
                      <div className="div-block-23357">
                        <div className="count">
                          <span className="counterup">90</span> %
                        </div>
                      </div>
                    </div>
                    <div className="bar">
                      <div
                        style={{ width: '0%' }}
                        className="indicator pending _1"
                      />
                      <div className="circle _1" />
                    </div>
                  </div>
                  <div className="loadbar">
                    <div
                      data-w-id="6d465c99-3b6d-97f9-dfc6-72e6517fe779"
                      className="bar-wrap study_via"
                    >
                      <h4 className="count-text _1">Business modelling</h4>
                      <div className="div-block-23357">
                        <div className="count">
                          <span className="counterup">65</span> %
                        </div>
                      </div>
                    </div>
                    <div className="bar">
                      <div
                        style={{ width: '0%' }}
                        className="indicator pending _2"
                      />
                      <div className="circle _2" />
                    </div>
                  </div>
                  <div
                    data-w-id="6d465c99-3b6d-97f9-dfc6-72e6517fe784"
                    className="loadbar"
                  >
                    <div className="bar-wrap _3">
                      <h4 className="count-text _1">Investment management</h4>
                      <div className="div-block-23357">
                        <div className="count">
                          <span className="counterup">85</span> %
                        </div>
                      </div>
                    </div>
                    <div className="bar">
                      <div
                        style={{ width: '0%' }}
                        className="indicator pending _3"
                      />
                      <div className="circle _3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-23360">
              <img
                src="images/portfolio.jpg"
                loading="lazy"
                sizes="100vw"
                srcSet="images/portfolio-p-500.jpeg 500w, images/portfolio.jpg 588w"
                alt=""
              />
              <div className="div-block-23424">
                <a href="#" className="link-block-39 w-inline-block">
                  <img
                    src="images/facebook-2_1facebook-2.png"
                    loading="lazy"
                    width={30}
                    alt=""
                    className="image-23"
                  />
                </a>
                <a href="#" className="twitter w-inline-block">
                  <img
                    src="images/twitter-1.png"
                    loading="lazy"
                    width={30}
                    sizes="100vw"
                    srcSet="images/twitter-1-p-500.png 500w, images/twitter-1.png 512w"
                    alt=""
                    className="image-14"
                  />
                </a>
                <a href="#" className="link-block-40 w-inline-block">
                  <img
                    src="images/linkedin_1linkedin.png"
                    loading="lazy"
                    width={30}
                    alt=""
                    className="image-23"
                  />
                </a>
                <a href="#" className="link-block-41 w-inline-block">
                  <img
                    src="images/insta.png"
                    loading="lazy"
                    width={32}
                    alt=""
                    className="image-23"
                  />
                </a>
                <a href="#" className="link-block-42 w-inline-block">
                  <img
                    src="images/youtube_1.png"
                    loading="lazy"
                    width={32}
                    alt=""
                    className="image-23"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="container-large">
            <div className="w-layout-grid content-grid">
              <div
                data-w-id="9d8a437c-3351-f242-ad59-86c977532ca6"
                style={{ opacity: 0 }}
                className="div-block-188"
              >
                <img
                  src="images/collage.png"
                  srcSet="images/collage-p-500.png 500w, images/collage-p-800.png 800w, images/collage.png 975w"
                  sizes="100vw"
                  width={816}
                  alt=""
                  className="content-image"
                />
              </div>
              <div
                data-w-id="9d8a437c-3351-f242-ad59-86c977532ca8"
                style={{ opacity: 0 }}
                className="content-wrap"
              >
                <h2 className="heading-153">You’re in good hands</h2>
                <div className="title-line" />
                <p className="paragraph-large">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries,
                  <br />
                </p>
                <p className="paragraph-large">
                  t was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently
                  <br />
                </p>
                <a href="#" className="button-dark w-inline-block">
                  <div className="button-text no-space">Know more</div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-block-grey" />
        </div>
        <div className="content-section">
          <div className="div-block-23329">
            <div className="div-block-23359">
              <div className="content-3">
                <div>
                  <h4 className="heading-166">Our&nbsp;Services</h4>
                </div>
                <h1 className="hero-head">What We Do ?</h1>
                <div className="div-block-23434">
                  <div className="div-block-23435">
                    <h4 className="heading-168">Trader</h4>
                    <div>
                      <p className="paragraph-134">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry.
                      </p>
                    </div>
                    <div className="div-block-23437">
                      <h1 className="heading-170">01</h1>
                    </div>
                  </div>
                  <div className="div-block-23436">
                    <h4 className="heading-169">Investor</h4>
                    <div>
                      <p className="paragraph-135">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry.
                      </p>
                    </div>
                    <div className="div-block-23437">
                      <h1 className="heading-170">02</h1>
                    </div>
                  </div>
                </div>
                <div className="div-block-23434">
                  <div className="div-block-23435">
                    <h4 className="heading-168">Entrepreneur</h4>
                    <div>
                      <p className="paragraph-134">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry.
                      </p>
                    </div>
                    <div className="div-block-23437">
                      <h1 className="heading-170">03</h1>
                    </div>
                  </div>
                  <div className="div-block-23436">
                    <h4 className="heading-169">Wealth Strategist</h4>
                    <div>
                      <p className="paragraph-135">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                      </p>
                    </div>
                    <div className="div-block-23437">
                      <h1 className="heading-170">04</h1>
                    </div>
                  </div>
                </div>
                <div className="div-block-23434">
                  <div className="div-block-23435">
                    <h4 className="heading-168">Life Enthusiast</h4>
                    <div>
                      <p className="paragraph-134">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry.
                      </p>
                    </div>
                    <div className="div-block-23437">
                      <h1 className="heading-170">05</h1>
                    </div>
                  </div>
                  <div className="div-block-23436">
                    <h4 className="heading-169">Master Connector</h4>
                    <div>
                      <p className="paragraph-135">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry.
                      </p>
                    </div>
                    <div className="div-block-23437">
                      <h1 className="heading-170">06</h1>
                    </div>
                  </div>
                </div>
                <div className="div-block-23438">
                  <div className="div-block-23439">
                    <p className="paragraph-136">All our services</p>
                  </div>
                  <div className="div-block-23440">
                    <p className="paragraph-137"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-23360">
              <div className="div-block-23478">
                <img
                  src={require('../../../assets/images/aboutsketch.png')}
                  loading="lazy"
                  width={620}
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 78vw, 750px"
                  // srcSet="images/aboutsketch-p-500.png 500w, images/aboutsketch.png 750w"
                  alt=""
                  className="image-32257"
                />
              </div>
              <a
                href="https://m.facebook.com/rasmeet.sethi.9"
                target="_blank"
                className="link-block-39 w-inline-block"
              >
                <img
                  src={require('../../../assets/images/facebook-1.png')}
                  loading="lazy"
                  width={70}
                  alt=""
                  className="image-23"
                />
              </a>
              <a
                href="https://mobile.twitter.com/greenhedgecap"
                target="_blank"
                className="twitter w-inline-block"
              >
                <img
                  src={require('../../../assets/images/twitter.png')}
                  loading="lazy"
                  alt=""
                  className="image-14"
                />
              </a>
              <a href="#" className="link-block-40 w-inline-block">
                <img
                  src={require('../../../assets/images/linkedin_2.png')}
                  loading="lazy"
                  alt=""
                  className="image-23"
                />
              </a>
              <a
                href="https://www.instagram.com/greenhedgecapital"
                target="_blank"
                className="link-block-41 w-inline-block"
              >
                <img
                  src={require('../../../assets/images/instagram_1.png')}
                  loading="lazy"
                  alt=""
                  className="image-23"
                />
              </a>
              <a href="#" className="link-block-42 w-inline-block">
                <img
                  src={require('../../../assets/images/youtube-1.png')}
                  loading="lazy"
                  alt=""
                  className="image-23"
                />
              </a>
              <div className="div-block-23424 hide">
                <a
                  href="https://m.facebook.com/rasmeet.sethi.9"
                  target="_blank"
                  className="link-block-39 w-inline-block"
                >
                  <img
                    src="images/facebook-2_1facebook-2.png"
                    loading="lazy"
                    width={30}
                    alt=""
                    className="image-23"
                  />
                </a>
                <a
                  href="https://mobile.twitter.com/greenhedgecap"
                  target="_blank"
                  className="twitter w-inline-block"
                >
                  <img
                    src="images/twitter-1.png"
                    loading="lazy"
                    width={30}
                    sizes="100vw"
                    srcSet="images/twitter-1-p-500.png 500w, images/twitter-1.png 512w"
                    alt=""
                    className="image-14"
                  />
                </a>
                <a href="#" className="link-block-40 w-inline-block">
                  <img
                    src="images/linkedin_1linkedin.png"
                    loading="lazy"
                    width={30}
                    alt=""
                    className="image-23"
                  />
                </a>
                <a
                  href="https://www.instagram.com/greenhedgecapital"
                  target="_blank"
                  className="link-block-41 w-inline-block"
                >
                  <img
                    src="images/insta.png"
                    loading="lazy"
                    width={32}
                    alt=""
                    className="image-23"
                  />
                </a>
                <a href="#" className="link-block-42 w-inline-block">
                  <img
                    src="images/youtube_1.png"
                    loading="lazy"
                    width={32}
                    alt=""
                    className="image-23"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="container-large">
            <div className="w-layout-grid content-grid">
              <div
                data-w-id="e50c5771-2510-f8c6-4ee5-0eaf2e302383"
                style={{ opacity: 0 }}
                className="div-block-188"
              >
                <img
                  src="images/collage.png"
                  srcSet="images/collage-p-500.png 500w, images/collage-p-800.png 800w, images/collage.png 975w"
                  sizes="100vw"
                  width={816}
                  alt=""
                  className="content-image"
                />
              </div>
              <div
                data-w-id="e50c5771-2510-f8c6-4ee5-0eaf2e302385"
                style={{ opacity: 0 }}
                className="content-wrap"
              >
                <h2 className="heading-153">You’re in good hands</h2>
                <div className="title-line" />
                <p className="paragraph-large">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries,
                  <br />
                </p>
                <p className="paragraph-large">
                  t was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently
                  <br />
                </p>
                <a href="#" className="button-dark w-inline-block">
                  <div className="button-text no-space">Know more</div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-block-grey" />
        </div>
      </div>
      <div className="testimonials-wrapper-2">
        <div className="div-block-23262">
          <h2 className="heading-20">Our Testimonials</h2>
          <div className="lines-wrapper">
            <div className="line-bold" />
            <div className="line-bold red" />
          </div>
        </div>
        <section className="testimonials-t4 wf-section">
          <img
            src="https://uploads-ssl.webflow.com/6129d6d646aff474626fcb8c/6129d6d746aff4d7436fcbab_quote_black.svg"
            loading="lazy"
            width={70}
            alt=""
            className="quote-icon-t4"
          />
          <div className="quote-wrapper-t4-2">
            <div className="quote-1-subwrapper-t4-2">
              <p className="quote-t4-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="user-name-t4-2">
                <strong className="bold-text-24">Ana Finley</strong>
              </div>
            </div>
            <div style={{ opacity: 0 }} className="quote-2-subwrapper-t4-2">
              <p className="quote-t4-2">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <div className="user-name-t4-2">
                <strong>Jennie Richards</strong>
              </div>
            </div>
            <div style={{ opacity: 0 }} className="quote-3-subwrapper-t4-2">
              <p className="quote-t4-2">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est.
              </p>
              <div className="user-name-t4-2">
                <strong>Dillon Brooks</strong>
              </div>
            </div>
            <div style={{ opacity: 0 }} className="quote-4-subwrapper-t4-2">
              <p className="quote-t4-2">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae.
              </p>
              <div className="user-name-t4-2">
                <strong>Tom Roberts</strong>
              </div>
            </div>
          </div>
          <div className="users-wrapper-t4">
            <a
              data-w-id="04572460-b45b-e029-a857-201ca94c5bd1"
              style={{
                WebkitTransform:
                  'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform:
                  'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform:
                  'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform:
                  'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                borderColor: 'rgb(228,228,228)',
              }}
              href="#"
              className="user-1-t4 w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/6129d6d646aff474626fcb8c/6129d6d746aff4cece6fcba2_profile_pic_2.jpg"
                loading="lazy"
                width={80}
                alt=""
                className="user-picture-t4"
              />
            </a>
            <a
              data-w-id="04572460-b45b-e029-a857-201ca94c5bd3"
              href="#"
              className="user-2-t4 w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/6129d6d646aff474626fcb8c/6129d6d746aff410bc6fcba5_profile_pic_5.jpg"
                loading="lazy"
                width={80}
                alt=""
                className="user-picture-t4"
              />
            </a>
            <a
              data-w-id="04572460-b45b-e029-a857-201ca94c5bd5"
              href="#"
              className="user-3-t4 w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/6129d6d646aff474626fcb8c/6129d6d746aff43f966fcba3_profile_pic_4.jpg"
                loading="lazy"
                width={80}
                alt=""
                className="user-picture-t4"
              />
            </a>
            <a
              data-w-id="04572460-b45b-e029-a857-201ca94c5bd7"
              href="#"
              className="user-4-t4 w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/6129d6d646aff474626fcb8c/6129d6d746aff4348d6fcb9c_profile_pic_1.jpg"
                loading="lazy"
                width={80}
                alt=""
                className="user-picture-t4"
              />
            </a>
          </div>
        </section>
        <div className="testimonial-section">
          <div className="container-17">
            <div className="column-wrap">
              <div
                data-delay={2000}
                data-animation="cross"
                className="slider-horizontal w-slider"
                data-autoplay="true"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit={0}
                data-nav-spacing={3}
                data-duration={500}
                data-infinite="true"
              >
                <div className="mask-horizontal w-slider-mask">
                  <div className="slide-horizontal w-slide">
                    <div className="testimonial-card">
                      <div className="testimonial-image-wrap">
                        <img
                          src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389f8f0f693545_angle.svg"
                          alt=""
                          className="horizontal-angle"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389f4256693546_slide-img-02.jpg"
                          alt="Testimonial Image"
                          className="testimonial-image"
                        />
                        <a
                          href="#"
                          className="play-button w-inline-block w-lightbox"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389f6ca2693539_play-button%20(1).svg"
                            alt=""
                            className="play-icon"
                          />
                        </a>
                      </div>
                      <div className="horizontal-content-block">
                        <div className="horizontal-fixed-height">
                          <img
                            src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389fbb4369353c_4.svg"
                            alt=""
                            className="horizontal-logo"
                          />
                          <h4 className="horizontal-quote-h4">
                            There are many different ways a business can display
                            customer testimonials — And when determining the
                            best approach...
                          </h4>
                        </div>
                        <div className="author-block">
                          <img
                            src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389f0eb169353b_avatar.png"
                            alt=""
                            className="author-image"
                          />
                          <div>
                            <h4 className="author-name">Sam Kennedy</h4>
                            <div className="author-job">
                              Marketing Lead, Twitter
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-horizontal w-slide">
                    <div className="testimonial-card">
                      <div className="testimonial-image-wrap">
                        <img
                          src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389f8f0f693545_angle.svg"
                          alt=""
                          className="horizontal-angle"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389f339c693544_slide-img.jpg"
                          alt="Testimonial Image"
                          className="testimonial-image"
                        />
                        <a
                          href="#"
                          className="play-button w-inline-block w-lightbox"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389f6ca2693539_play-button%20(1).svg"
                            alt=""
                            className="play-icon"
                          />
                        </a>
                      </div>
                      <div className="horizontal-content-block">
                        <div className="horizontal-fixed-height">
                          <img
                            src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389fe034693540_2.svg"
                            alt=""
                            className="horizontal-logo"
                          />
                          <h4 className="horizontal-quote-h4">
                            To show the value of what you have to offer, why not
                            let your happy customers do the talking? It's a
                            simple but powerful tool for establishing trust...
                          </h4>
                        </div>
                        <div className="author-block">
                          <img
                            src="https://uploads-ssl.webflow.com/61517b36d8389f70b6693521/61517b37d8389f85ed693542_avatar-03.png"
                            alt=""
                            className="author-image"
                          />
                          <div>
                            <h4 className="author-name">Thomas Lee</h4>
                            <div className="author-job">
                              Marketing Lead, Oculus
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-arrow-6 w-slider-arrow-left">
                  <div className="w-icon-slider-left" />
                </div>
                <div className="right-arrow-6 w-slider-arrow-right">
                  <div className="w-icon-slider-right" />
                </div>
                <div className="slide-nav-8 w-slider-nav w-slider-nav-invert w-round" />
              </div>
            </div>
          </div>
          <section className="testimonials-t4-2 wf-section">
            <img
              src="images/quote_sketch-white.svg"
              loading="lazy"
              width={70}
              alt=""
              className="quote-icon-t4"
            />
            <div className="quote-wrapper-t4-3">
              <div className="quote-1-subwrapper-t4-3">
                <p className="quote-t4-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
                <div className="user-name-t4-3">
                  <strong className="bold-text-31">Ana Finley</strong>, Head of
                  Marketing at Webflow
                </div>
              </div>
              <div style={{ opacity: 0 }} className="quote-2-subwrapper-t4-2">
                <p className="quote-t4-3">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
                <div className="user-name-t4-3">
                  <strong>Jennie Richards</strong>, UX Designer at Shopify
                </div>
              </div>
              <div style={{ opacity: 0 }} className="quote-3-subwrapper-t4-2">
                <p className="quote-t4-3">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est.
                </p>
                <div className="user-name-t4-3">
                  <strong>Dillon Brooks</strong>, Data Analyst at Weebly
                </div>
              </div>
              <div style={{ opacity: 0 }} className="quote-4-subwrapper-t4-2">
                <p className="quote-t4-3">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
                <div className="user-name-t4-3">
                  <strong>Tom Roberts</strong>, Software Developer at Wix
                </div>
              </div>
            </div>
            <div className="users-wrapper-t4-2">
              <a
                data-w-id="c9f1c14e-adc8-27e9-975a-bfc26563d0e0"
                style={{
                  WebkitTransform:
                    'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform:
                    'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform:
                    'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform:
                    'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  borderColor: 'rgb(255,255,255)',
                }}
                href="#"
                className="user-1-t4 w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/6129d6d646aff474626fcb8c/6129d6d746aff4cece6fcba2_profile_pic_2.jpg"
                  loading="lazy"
                  width={80}
                  alt=""
                  className="user-picture-t4-2"
                />
              </a>
              <a
                data-w-id="c9f1c14e-adc8-27e9-975a-bfc26563d0e2"
                href="#"
                className="user-2-t4 w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/6129d6d646aff474626fcb8c/6129d6d746aff410bc6fcba5_profile_pic_5.jpg"
                  loading="lazy"
                  width={80}
                  alt=""
                  className="user-picture-t4-2"
                />
              </a>
              <a
                data-w-id="c9f1c14e-adc8-27e9-975a-bfc26563d0e4"
                href="#"
                className="user-3-t4 w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/6129d6d646aff474626fcb8c/6129d6d746aff43f966fcba3_profile_pic_4.jpg"
                  loading="lazy"
                  width={80}
                  alt=""
                  className="user-picture-t4-2"
                />
              </a>
              <a
                data-w-id="c9f1c14e-adc8-27e9-975a-bfc26563d0e6"
                href="#"
                className="user-4-t4 w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/6129d6d646aff474626fcb8c/6129d6d746aff4348d6fcb9c_profile_pic_1.jpg"
                  loading="lazy"
                  width={80}
                  alt=""
                  className="user-picture-t4-2"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
 <FixedSocialIcons />
      <div className="fixed-chat-bolt hide">
        <a
          href="https://api.whatsapp.com/send?phone=6283283207"
          target="_blank"
          className="link-block-36 w-inline-block"
        >
          <div className="whatsapp-wrapper">
            <img
              src="images/whatsapp-1_1whatsapp-1.png"
              loading="lazy"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className="resources-news wf-section">
        <div className="div-block-48">
          <div>
            <h1 className="heading-165">Our Blogs</h1>
            <div className="lines-wrapper left">
              <div className="line-bold" />
              <div className="line-bold red" />
            </div>
          </div>
          <div className="div-block-49">
            <a
              data-w-id="d848b648-60eb-5343-7267-d195173d6f0d"
              href="https://www.ghcacademy.in/"
              target="_blank"
              className="link"
            >
              View more
            </a>
          </div>
        </div>
        <div className="main-wrapper-div positionb">
          <a href="blog-page.html" className="link-block-43 w-inline-block">            
            <div
              data-w-id="d848b648-60eb-5343-7267-d195173d6f10"
              className="div-block-40"
            >
              <div className="div-block-43">
                <img
                  src={`${blogs ? blogs[0]?.media?.url : ''}`}
                  loading="lazy"
                  width={580}
                  // sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 86vw, (max-width: 1279px) 45vw, 540px"
                  // srcSet="images/blog1-main-p-500.png 500w, images/blog1-main.png 630w"
                  alt=""
                  className="image-32242"
                />
              
              </div>
              <div className="div-block-42">
                <div className="text-block-8">{blogs ? blogs && blogs[0] && moment(blogs[0]?.created_at).format("LL") : ''}</div>
                <h1 className="heading-15">
                {blogs ? blogs && blogs[0] && blogs[0]?.title : ''}
                </h1>
              </div>
            </div>
          </a>
          <div className="div-block-41">
          {blogs?.slice(1, 4)?.map((item) => 
           <a
              href="blogs-by-rasmeet.html"
              className="link-block-44 w-inline-block"
            >
              <div
                // data-w-id="d848b648-60eb-5343-7267-d195173d6f1e"
                className="div-block-45"
              >
                <div className="div-block-47">
                  <img
                   src={`${item ? item?.media?.url : ''}`}
                    loading="lazy"
                    width={309}
                    // sizes="(max-width: 479px) 100vw, (max-width: 767px) 47vw, (max-width: 991px) 43vw, (max-width: 1279px) 25vw, 284.5px"
                    // srcSet="images/blog2-p-500.jpeg 500w, images/blog2.jpg 630w"
                    alt=""
                    className="image-9"
                  />
                </div>
                <div className="div-block-46">
                  <h1 className="heading-164">
                    <strong className="bold-text-16">
                    {item?.title}
                    </strong>
                  </h1>
                  <div className="text-block-8">{moment(item?.created_at).format("LL")}</div>
                </div>
              </div>
            </a>
            )}
          </div>
        </div>
      </div>
      <div className="section-69 wf-section">
        <div className="div-block-23262">
          <h2 className="heading-20 ini">Our Initiatives</h2>
          <div className="lines-wrapper">
            <div className="line-bold blacj" />
            <div className="line-bold red" />
          </div>
        </div>
        <div className="div-block-23464">
          <div className="div-block-23468">
            <div className="div-block-23466">
              <div>
                <img
                  src="images/jax.png"
                  loading="lazy"
                  width={181}
                  height={197}
                  alt=""
                  className="image-25"
                />
              </div>
              <div className="div-block-23467">
                <h4 className="heading-173">Jacksonville Beach, Florida</h4>
                <div className="div-block-131">
                  <h3 className="heading-174">
                    525 3rd St. N. Unit 100
                    <br />
                    Jacksonville Beach
                  </h3>
                </div>
                <div className="div-block-23471">
                  <a
                    data-w-id="c2a72df0-42b0-cf61-26d3-20a77f384fcb"
                    href="tel:+03234567890"
                    className="button-8 nav no-padding show read-more w-inline-block"
                  >
                    <p className="paragraph-9 read-more">Read more</p>
                    <img
                      src="images/next.png"
                      width={15}
                      alt="Next Arrow"
                      className="arrow1"
                    />
                    <img
                      src="images/next.png"
                      width={15}
                      alt="Next Arrow"
                      className="arrow2 read-more"
                    />
                    <div className="button-8 hide" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-23469">
            <div className="div-block-23466">
              <div>
                <img
                  src="images/jax.png"
                  loading="lazy"
                  width={181}
                  height={197}
                  alt=""
                  className="image-25"
                />
              </div>
              <div className="div-block-23467">
                <h4 className="heading-173">Jacksonville Beach, Florida</h4>
                <div className="div-block-131">
                  <h3 className="heading-174">
                    525 3rd St. N. Unit 100
                    <br />
                    Jacksonville Beach
                  </h3>
                </div>
                <div className="div-block-23471">
                  <a
                    data-w-id="06837dc3-7ceb-e97c-52b2-82b46ef4167c"
                    href="tel:+03234567890"
                    className="button-8 nav no-padding show read-more w-inline-block"
                  >
                    <p className="paragraph-9 read-more">Read more</p>
                    <img
                      src="images/next.png"
                      width={15}
                      alt="Next Arrow"
                      className="arrow1"
                    />
                    <img
                      src="images/next.png"
                      width={15}
                      alt="Next Arrow"
                      className="arrow2 read-more"
                    />
                    <div className="button-8 hide" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-23470">
            <div className="div-block-23466">
              <div>
                <img
                  src="images/jax.png"
                  loading="lazy"
                  width={181}
                  height={197}
                  alt=""
                  className="image-25"
                />
              </div>
              <div className="div-block-23467">
                <h4 className="heading-173">Jacksonville Beach, Florida</h4>
                <div className="div-block-131">
                  <h3 className="heading-174">
                    525 3rd St. N. Unit 100
                    <br />
                    Jacksonville Beach
                  </h3>
                </div>
                <div className="div-block-23471">
                  <a
                    data-w-id="4489156c-514a-81d4-b1ea-f6d0e07687aa"
                    href="tel:+03234567890"
                    className="button-8 nav no-padding show read-more w-inline-block"
                  >
                    <p className="paragraph-9 read-more">Read more</p>
                    <img
                      src="images/next.png"
                      width={15}
                      alt="Next Arrow"
                      className="arrow1"
                    />
                    <img
                      src="images/next.png"
                      width={15}
                      alt="Next Arrow"
                      className="arrow2 read-more"
                    />
                    <div className="button-8 hide" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {initiatives?.map((item) =>  <a
            href="blogs-by-rasmeet.html"
            className="link-block-45 ini w-inline-block"
          >
            <div className="div-block-45 ini">
              <div className="div-block-47 ini">
                <img
                src={`${item ? item?.media?.url : ''}`}
                  loading="lazy"
                  width={309}
                  // sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 30vw, 380px"
                  // srcSet="images/blog3-p-500.jpeg 500w, images/blog3.jpg 630w"
                  alt=""
                  className="image-9 ini"
                />
              </div>
              <div className="div-block-46 ini">
                <h1 className="heading-164 ini">
                  {item?.title}
                </h1>
                <div
                  data-w-id="af4255af-bc06-8d90-5f3f-2ea87105f214"
                  className="btn-parent-txt"
                >
                  <div className="text-parent initiate">
                    <div
                      style={{ color: 'rgb(0,152,70)' }}
                      className="btn-txt-3 initiate"
                    >
                      Read More
                    </div>
                  </div>
                  <div
                    style={{
                      width: '18PX',
                      height: '2PX',
                      WebkitTransform:
                        'translate3d(0PX, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform:
                        'translate3d(0PX, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform:
                        'translate3d(0PX, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform:
                        'translate3d(0PX, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    }}
                    className="a-1 initiate"
                  >
                    <div className="a-3-2 initiate" />
                    <div className="a-2 initiate" />
                  </div>
                </div>
              </div>
            </div>
          </a>
          )}                  
        </div>
      </div>
      <div className="section-74 section-testimonials wf-section">
        <div className="container-19 w-container">
          <div
            data-delay={4000}
            data-animation="slide"
            className="slider-21 w-slider"
            data-autoplay="true"
            data-easing="ease-in-out"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-autoplay-limit={0}
            data-nav-spacing={3}
            data-duration={500}
            data-infinite="true"
            id="testimonials"
          >
            <div className="mask-14 w-slider-mask">
              <div className="slide-17 w-slide">
                <div className="div-block-23474">
                  <img
                  src={require('../../../assets/images/quote-bottom.svg')} 
                    loading="lazy"
                    width={75}
                    height={52}
                    alt=""
                    className="quote-bottom"
                  />
                  <img
                  src={require('../../../assets/images/quote-top.svg')} 
                    loading="lazy"
                    width={75}
                    height={52}
                    alt=""
                    className="quote-top"
                  />
                  <p className="text-testimonial">
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book."
                  </p>
                  <div className="div-block-15">
                    <img
                      src="images/telemarketer.png"
                      loading="lazy"
                      width={54}
                      sizes="(max-width: 479px) 17vw, (max-width: 1279px) 54px, (max-width: 1439px) 4vw, 54px"
                      srcSet="images/telemarketer-p-500.png 500w, images/telemarketer.png 512w"
                      alt=""
                      className="image-charity"
                    />
                    <div className="text-block">
                      Lorem Ipsum is simply dummy
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-17 w-slide">
                <div className="div-block-23474">
                  <p className="text-testimonial">
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book."
                  </p>
                  <div className="div-block-15">
                    <img
                      src="images/telemarketer.png"
                      loading="lazy"
                      width={54}
                      sizes="(max-width: 479px) 17vw, (max-width: 1279px) 54px, (max-width: 1439px) 4vw, 54px"
                      srcSet="images/telemarketer-p-500.png 500w, images/telemarketer.png 512w"
                      alt=""
                      className="image-charity"
                    />
                    <div className="text-block">
                      Lorem Ipsum is simply dummy
                    </div>
                  </div>
                </div>
                <img
                  src={require('../../../assets/images/quote-top.svg')} 
                  loading="lazy"
                  width={75}
                  height={52}
                  alt=""
                  className="quote-top middle"
                />
                <img
                  src={require('../../../assets/images/quote-bottom.svg')} 
                  loading="lazy"
                  width={75}
                  height={52}
                  alt=""
                  className="quote-bottom"
                />
              </div>
              <div className="slide-17 w-slide">
                <div className="div-block-23474">
                  <p className="text-testimonial">
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book."
                  </p>
                  <div className="div-block-15">
                    <img
                      src="images/telemarketer.png"
                      loading="lazy"
                      width={54}
                      sizes="(max-width: 479px) 17vw, (max-width: 1279px) 54px, (max-width: 1439px) 4vw, 54px"
                      srcSet="images/telemarketer-p-500.png 500w, images/telemarketer.png 512w"
                      alt=""
                      className="image-charity"
                    />
                    <div className="text-block">
                      Lorem Ipsum is simply dummy
                    </div>
                  </div>
                </div>
                <img
                  src={require('../../../assets/images/quote-top.svg')} 
                  loading="lazy"
                  width={75}
                  height={52}
                  alt=""
                  className="quote-top last"
                />
                <img
                  src={require('../../../assets/images/quote-bottom.svg')} 
                  loading="lazy"
                  width={75}
                  height={52}
                  alt=""
                  className="quote-bottom"
                />
              </div>
            </div>
            <div className="left-arrow-14 w-slider-arrow-left">
              <img src={require('../../../assets/images/arrow-left.svg')}  loading="lazy" alt="" />
            </div>
            <div className="right-arrow-8 w-slider-arrow-right">
              <img
                src={require('../../../assets/images/arrow-right.svg')}
                loading="lazy"
                alt=""
                className="arrow-right"
              />
            </div>
            <div className="slide-nav-9 w-slider-nav w-slider-nav-invert" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
