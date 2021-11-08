import React from 'react';
import Link from 'next/link';

const Slider = ({ dashboard }) => {
  return (
    <div>
      <div className="hero-section _5 wf-section">
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
                  <div
                    className="div-block-386"
                    style={{
                      backgroundImage: `url(${dashboard[0]?.feed?.media?.url})`,
                      backgroundPosition: '0px 0px, 50% 50%',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <Link
                      href={`/${dashboard[0]?.feed?.type}/[id]`}
                      as={`/${dashboard[0]?.feed?.type}/${dashboard[0]?.feed?._id}`}
                    >
                      <a className="link-block-21 w-inline-block">
                        <div className="white-box">
                          <div className="overflow-hide">
                            <p className="hero-slide-p-2">
                              {dashboard[0]?.feed?.category?.name || 'N/A'}
                            </p>
                          </div>
                          <div className="overflow-hide heading">
                            <h3 className="heading-34">
                              {dashboard[0]?.feed?.title || 'N/A'}
                            </h3>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
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
                  <div
                    className="div-block-413"
                    style={{
                      backgroundImage: `url(${dashboard[1]?.feed?.media?.url})`,
                      backgroundPosition: '0px 0px, 50% 50%',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#dddddd',
                    }}
                  />
                  <Link
                    href={`/${dashboard[1]?.feed?.type}/[id]`}
                    as={`/${dashboard[1]?.feed?.type}/${dashboard[1]?.feed?._id}`}
                  >
                    <a className="link-block-21 w-inline-block">
                      <div className="white-box">
                        <div className="overflow-hide">
                          <p className="hero-slide-p-2">
                            {dashboard[1]?.feed?.category?.name || 'N/A'}
                          </p>
                        </div>
                        <div className="overflow-hide heading">
                          <h3 className="heading-34">
                            {dashboard[1]?.feed?.title || 'N/A'}
                          </h3>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
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
                  <div
                    className="div-block-413"
                    style={{
                      backgroundImage: `url(${dashboard[2]?.feed?.media?.url})`,
                      backgroundPosition: '0px 0px, 50% 50%',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#dddddd',
                    }}
                  />
                  <Link
                    href={`/${dashboard[2]?.feed?.type}/[id]`}
                    as={`/${dashboard[2]?.feed?.type}/${dashboard[2]?.feed?._id}`}
                  >
                    <a className="link-block-21 w-inline-block">
                      <div className="white-box">
                        <div className="overflow-hide">
                          <p className="hero-slide-p-2">
                            {dashboard[2]?.feed?.category?.name || 'N/A'}
                          </p>
                        </div>
                        <div className="overflow-hide heading">
                          <h3 className="heading-34">
                            {dashboard[2]?.feed?.title || 'N/A'}
                          </h3>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-e6bf5714-1f59-0d66-ae35-83acc3799b8c-5e0e1135"
            className="div-block-416"
          >
            <div className="div-block-384 _2">
              <div className="div-block-387">
                <img
                  src="images/Phone-Contacts-01.svg"
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
                  <Link href="/contact" as="/contact">
                    <a className="button-6 w-button">Support</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mask-4 w-slider-mask">
              <div className="slide-3 w-slide">
                <div
                  className="div-block-413"
                  style={{
                    backgroundImage: `url(${dashboard[3]?.feed?.media?.url})`,
                    backgroundPosition: '0px 0px, 50% 50%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#dddddd',
                  }}
                />
                <Link
                  href={`/${dashboard[3]?.feed?.type}/[id]`}
                  as={`/${dashboard[3]?.feed?.type}/${dashboard[3]?.feed?._id}`}
                >
                  <a className="link-block-21 w-inline-block">
                    <div className="white-box">
                      <div className="overflow-hide">
                        <p className="hero-slide-p-2">
                          {dashboard[3]?.feed?.category?.name || 'N/A'}
                        </p>
                      </div>
                      <div className="overflow-hide heading">
                        <h3 className="heading-34">
                          {dashboard[3]?.feed?.title || 'N/A'}
                        </h3>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="div-block-414">
            <div className="div-block-415">
              <img
                src="images/ad.JPG"
                loading="lazy"
                width={288}
                alt
                className="image-51"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
