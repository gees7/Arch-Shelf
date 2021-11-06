import React, { useState, useEffect } from 'react';
import Navbar from '../../components/DashboardComponents/Navbar';
import Footer from '../../components/DashboardComponents/Footer';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getCategories, getResources } from '../../store/actions/blogActions';
const Resources = ({ categories, getCategories, resources, getResources }) => {
  var mL = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  useEffect(() => {
    getResources({ query: { type: 'resources', limit: '6' } });
    getCategories({ query: {} });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="div-block-97">
          <div className="div-heading">
            <h1 className="heading-2">Resources</h1>
            <div className="line" />
          </div>
        </div>
        <div className="content-section">
          <div className="container-501">
            <div className="w-layout-grid blog-grid">
              <div className="content-left">
                {resources?.data?.feedList?.map((item, index) => {
                  const date = new Date(item?.created_at);
                  var day = date.getDate();
                  var month = date.getMonth();
                  var year = date.getFullYear();

                  var finaldate = mL[month] + ' ' + day + ', ' + year;
                  var wordCount = item?.body?.match(/(\w+)/g).length;
                  var time = Math.round(wordCount / 250);
                  if (index < resources?.data?.feedList?.length / 2)
                    return (
                      <Link key={item?._id} href={'/resources/' + item?._id}>
                        <div className="blog-item-2" style={{ width: '90%' }}>
                          <div className="blog-image-wrap">
                            <img
                              src={item?.media?.url}
                              width={380}
                              sizes="(max-width: 479px) 86vw, (max-width: 767px) 89vw, (max-width: 991px) 86vw, (max-width: 1279px) 45vw, (max-width: 1919px) 48vw, 777.765625px"
                              srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                              alt=""
                              className="blog-image"
                            />
                          </div>
                          <div className="blog-content">
                            <h3 className="heading-h2">{item?.title}</h3>
                            <p className="paragraph-detials-medium">
                              {item?.shortDescription}
                            </p>
                            <div className="div-block-23369">
                              <img
                                src="/public/images/back-in-time.png"
                                loading="lazy"
                                sizes="(max-width: 1279px) 30px, (max-width: 1919px) 2vw, 1vw"
                                srcSet="images/back-in-time-p-500.png 500w, images/back-in-time.png 512w"
                                alt=""
                                className="image-53"
                              />
                              <p className="paragraph-detials-medium time">
                                {time} Minutes Read
                              </p>
                            </div>
                            <div className="profile-block">
                              <img
                                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1085&q=80         "
                                width={62}
                                className="profile-picture"
                              />
                              <div className="normal-wrapper">
                                <div className="title-small">
                                  {item?.user?.name}
                                </div>
                                <p className="paragraph-detials-small">
                                  {finaldate}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                })}

                <div className="div-block-23382">
                  <div
                    id="w-node-_2cc27067-6af0-5447-19c8-c594f2b275f4-62ebedc5"
                    data-w-id="2cc27067-6af0-5447-19c8-c594f2b275f4"
                    className="div-block-23383"
                  >
                    <div className="div-block-23384">
                      <img
                        src="/public/images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg"
                        loading="lazy"
                        style={{
                          WebkitTransform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          MozTransform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          msTransform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          transform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        }}
                        sizes="100vw"
                        srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                        alt=""
                        className="image-57"
                      />
                    </div>
                    <div className="div-block-23385">
                      <div className="div-block-23386">
                        <div className="div-block-23387">
                          <div>This is some text </div>
                          <div className="text-block-170">
                            This is some text{' '}
                          </div>
                        </div>
                        <h2 className="heading-39">Heading</h2>
                      </div>
                    </div>
                  </div>
                  <div className="div-block-23388">
                    <img
                      src="https://assets.website-files.com/615e8b5e6632c8dc750e1133/61651f9a56de5b87a53233c9_ad-3.JPG"
                      loading="lazy"
                      alt=""
                      className="image-58"
                    />
                  </div>
                  <div
                    id="w-node-_571b9005-e3a0-ddaa-14b7-4fb7226efaaf-62ebedc5"
                    data-w-id="571b9005-e3a0-ddaa-14b7-4fb7226efaaf"
                    className="div-block-23383"
                  >
                    <div className="div-block-23384 smaal-size">
                      <img
                        src="/public/images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg"
                        loading="lazy"
                        style={{
                          WebkitTransform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          MozTransform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          msTransform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          transform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        }}
                        sizes="100vw"
                        srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                        alt=""
                        className="image-57"
                      />
                    </div>
                    <div className="div-block-23385">
                      <div className="div-block-23386">
                        <div className="div-block-23387">
                          <div>This is some text </div>
                          <div className="text-block-170">
                            This is some text{' '}
                          </div>
                        </div>
                        <h2 className="heading-39">Heading</h2>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-d2625d4f-b0ba-9a39-3627-0c4681b8743f-62ebedc5"
                    data-w-id="d2625d4f-b0ba-9a39-3627-0c4681b8743f"
                    className="div-block-23383"
                  >
                    <div className="div-block-23384 smaal-size">
                      <img
                        src="/public/images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg"
                        loading="lazy"
                        style={{
                          WebkitTransform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          MozTransform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          msTransform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          transform:
                            'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        }}
                        sizes="100vw"
                        srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                        alt=""
                        className="image-57"
                      />
                    </div>
                    <div className="div-block-23385">
                      <div className="div-block-23386">
                        <div className="div-block-23387">
                          <div>This is some text </div>
                          <div className="text-block-170">
                            This is some text{' '}
                          </div>
                        </div>
                        <h2 className="heading-39">Heading</h2>
                      </div>
                    </div>
                  </div>
                </div>
                {resources?.data?.feedList?.map((item, index) => {
                  const date = new Date(item?.created_at);
                  var day = date.getDate();
                  var month = date.getMonth();
                  var year = date.getFullYear();

                  var finaldate = mL[month] + ' ' + day + ', ' + year;
                  var wordCount = item?.body?.match(/(\w+)/g).length;
                  var time = Math.round(wordCount / 250);
                  if (index >= resources?.data?.feedList?.length / 2)
                    return (
                      <Link key={item?._id} href={'/resources/' + item?._id}>
                        <div className="blog-item-2" style={{ width: '90%' }}>
                          <div className="blog-image-wrap">
                            <img
                              src={item?.media?.url}
                              width={380}
                              sizes="(max-width: 479px) 86vw, (max-width: 767px) 89vw, (max-width: 991px) 86vw, (max-width: 1279px) 45vw, (max-width: 1919px) 48vw, 777.765625px"
                              srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                              alt=""
                              className="blog-image"
                            />
                          </div>
                          <div className="blog-content">
                            <h3 className="heading-h2">{item?.title}</h3>
                            <p className="paragraph-detials-medium">
                              {item?.shortDescription}
                            </p>
                            <div className="div-block-23369">
                              <img
                                src="/public/images/back-in-time.png"
                                loading="lazy"
                                sizes="(max-width: 1279px) 30px, (max-width: 1919px) 2vw, 1vw"
                                srcSet="images/back-in-time-p-500.png 500w, images/back-in-time.png 512w"
                                alt=""
                                className="image-53"
                              />
                              <p className="paragraph-detials-medium time">
                                {time} Minutes Read
                              </p>
                            </div>
                            <div className="profile-block">
                              <img
                                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1085&q=80         "
                                width={62}
                                className="profile-picture"
                              />
                              <div className="normal-wrapper">
                                <div className="title-small">
                                  {item?.user?.name}
                                </div>
                                <p className="paragraph-detials-small">
                                  {finaldate}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                })}
              </div>
              <div className="content-right">
                <div className="stick-wrapper">
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
                    <a
                      href="#"
                      className="search-button-wrapper w-inline-block"
                    >
                      <input
                        type="submit"
                        defaultValue=""
                        className="search-button w-button"
                      />
                      <img
                        src="https://assets.website-files.com/615e8b5e6632c8dc750e1133/61665ff8cfba82d222a04f28_search_icon.svg"
                        alt=""
                        className="search-icon"
                      />
                    </a>
                  </form>
                  <div className="subscription hide">
                    <div className="title-large">
                      Subscribe to our newsletter
                    </div>
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
                            defaultValue=""
                            data-wait="Please wait..."
                            className="submit-button-2 w-button"
                          />
                          <img
                            src="/public/images/Arrow_1.svg"
                            width={9}
                            height={12}
                            alt=""
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
                          src="/public/images/about-archi.png"
                          width={90}
                          sizes="(max-width: 479px) 28vw, (max-width: 767px) 20vw, 90px"
                          srcSet="images/about-archi-p-500.png 500w, images/about-archi-p-800.png 800w, images/about-archi-p-1080.png 1080w, images/about-archi-p-1600.png 1600w, images/about-archi.png 1728w"
                          alt=""
                          className="feature-image"
                        />
                        <div className="title-small">
                          Lorem ipsum is the dummy content generator portfolio
                          websites
                        </div>
                      </a>
                      <a href="#" className="featured-item w-inline-block">
                        <img
                          src="/public/images/archi-tools.png"
                          width={90}
                          sizes="(max-width: 479px) 28vw, (max-width: 767px) 20vw, 90px"
                          srcSet="images/archi-tools-p-500.png 500w, images/archi-tools-p-800.png 800w, images/archi-tools.png 1728w"
                          alt=""
                          className="feature-image"
                        />
                        <div className="title-small">
                          Lorem ipsum is the dummy content generator portfolio
                          websites
                        </div>
                      </a>
                      <a href="#" className="featured-item w-inline-block">
                        <img
                          src="/public/images/architect.jpg"
                          width={90}
                          alt=""
                          className="feature-image"
                        />
                        <div className="title-small">
                          Lorem ipsum is the dummy content generator portfolio
                          websites
                        </div>
                      </a>
                      <a href="#" className="featured-item w-inline-block">
                        <img
                          src="/public/images/springwood.jpg"
                          width={90}
                          sizes="(max-width: 479px) 28vw, (max-width: 767px) 20vw, 90px"
                          srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                          alt=""
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
                    {categories?.categories?.map((item) => (
                      <span
                        href="#"
                        key={item?._id}
                        className="categories-pill w-inline-block"
                      >
                        <div className="title-small pink">{item?.name}</div>
                      </span>
                    ))}
                  </div>
                  <img
                    src="https://assets.website-files.com/615e8b5e6632c8dc750e1133/61651f9a56de5b87a53233c9_ad-3.JPG"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const categories = state?.dashboard?.categories;
  const resources = state?.dashboard?.resources;
  return { categories, resources };
}
const mapDispatchToProps = (dispatch) => ({
  getCategories: (payload) => dispatch(getCategories(payload)),
  getResources: (payload) => dispatch(getResources(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
