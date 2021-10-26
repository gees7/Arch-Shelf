import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="navigation-wrap">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration={400}
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navigation w-nav"
        >
          <div className="div-block-23515">
            <div className="div-block-918">
              <div className="div-block-23483">
                <div className="div-block-23419">
                  <div>
                    <img
                      src={require('../../../assets/images/money-vector-2.png')}
                      loading="lazy"
                      width={88}
                      alt=""
                    />
                  </div>
                  <div className="div-block-23417">
                    <p className="paragraph-54">Green hedge Capital</p>
                    <div className="div-block-23484">
                      <p className="paragraph-54 tagline">Your Family office</p>
                    </div>
                  </div>
                </div>
                <div className="div-block-916">
                  <div className="div-block-23418">
                    <div className="div-block-917 hide">
                      <a href="#" className="link-block-38 w-inline-block">
                        <img
                          src={require('../../../assets/images/location-1.png')}
                          loading="lazy"
                          width={28}
                          sizes="100vw"
                          alt=""
                          className="image-161"
                        />
                        <div className="text-block-141 _13">
                          Lawrence Road, Amritsar, Punjab,&nbsp;
                          <span className="number">143001</span>
                        </div>
                      </a>
                    </div>
                    <div className="div-block-917">
                      <a
                        href="tel:6283286207"
                        className="link-block-38 w-inline-block"
                      >
                        <img
                          src={require('../../../assets/images/phone.png')}
                          loading="lazy"
                          width={28}
                          sizes="(max-width: 991px) 100vw, (max-width: 1279px) 28px, (max-width: 1439px) 2vw, (max-width: 1919px) 28px, 1vw"
                          alt=""
                          className="image-161"
                        />
                        <div className="text-block-141 _13">
                          <span className="number">6283286207</span>
                        </div>
                      </a>
                    </div>
                    <div className="div-block-917">
                      <a
                        href="mailto:info@greenhedgecapital.com"
                        className="link-block-38 w-inline-block"
                      >
                        <img
                          src={require('../../../assets/images/gmail-1.png')}
                          loading="lazy"
                          width={25}
                          alt=""
                          className="image-161"
                        />
                        <div className="text-block-141 _13">
                          info@greenhedgecapital.com
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-916 hide">
            <div className="div-block-23418">
              <div className="div-block-917">
                <a href="#" className="link-block-38 w-inline-block">
                  <img
                    src={require('../../../assets/images/location-1.png')}
                    loading="lazy"
                    width={28}
                    sizes="100vw"
                    alt=""
                    className="image-161"
                  />
                  <div className="text-block-141 _13">
                    Lawrence Road, Amritsar, Punjab 143001
                  </div>
                </a>
              </div>
              <div className="div-block-917">
                <a
                  href="tel:6283286207"
                  className="link-block-38 w-inline-block"
                >
                  <img
                    src={require('../../../assets/images/phone.png')}
                    loading="lazy"
                    width={28}
                    sizes="100vw"
                    alt=""
                    className="image-161"
                  />
                  <div className="text-block-141 _13">
                    Help desk : 6283286207
                  </div>
                </a>
              </div>
              <div className="div-block-917">
                <a
                  href="mailto:info@greenhedgecapital.com"
                  className="link-block-38 w-inline-block"
                >
                  <img
                    src={require('../../../assets/images/gmail-1.png')}
                    loading="lazy"
                    width={25}
                    alt=""
                    className="image-161"
                  />
                  <div className="text-block-141 _13">
                    info@greenhedgecapital.com
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navigation-container">
            <div className="navigation-left">
              <a
                href="index.html"
                aria-current="page"
                className="brand w-nav-brand w--current"
              >
                <img
                  src={require('../../../assets/images/logo1.png')}
                  loading="lazy"
                  width={59}
                  alt=""
                />
              </a>
            </div>
            <div className="navigation-right">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <a
                  href="ghc-initiatives.html"
                  className="navigation-link w-nav-link"
                >
                  Initiatives
                </a>
                <a href="blog-page.html" className="navigation-link w-nav-link">
                  Blogs
                </a>
                <a href="about-us.html" className="navigation-link w-nav-link">
                  Green Hedge Capital
                </a>
                <a
                  href="ghc-academy.html"
                  className="navigation-link w-nav-link"
                >
                  GHC Academy
                </a>
                <a href="ghc-life.html" className="navigation-link w-nav-link">
                  GHC Life
                </a>
                <a
                  href="ghc-foundation.html"
                  className="navigation-link w-nav-link"
                >
                  GHC Foundation
                </a>
                <a
                  href="personal-branding.html"
                  className="navigation-link rightmargin w-nav-link"
                >
                  Founder
                </a>
                <div className="login-buttons">
                  <a
                    data-w-id="987d0980-2af1-b132-1244-98bcc2b1b7df"
                    href="contact-us.html"
                    className="button-8 nav no-padding show w-inline-block"
                  >
                    <p className="paragraph-9">Contact us</p>
                    <img
                      src={require('../../../assets/images/next.png')}
                      width={15}
                      alt="Next Arrow"
                      className="arrow1"
                    />
                    <img
                      src={require('../../../assets/images/next.png')}
                      width={15}
                      alt="Next Arrow"
                      className="arrow2"
                    />
                    <div className="button-8 hide" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration={400}
          data-easing="ease-out"
          data-easing2="ease-out"
          data-w-id="5b9b5ca5-32eb-532d-1ab9-c22fa1831c0e"
          role="banner"
          className="navigation-mob w-nav"
        >
          <div className="navigation-container-mob">
            <a href="#" className="w-nav-brand">
              <img
                src={require('../../../assets/images/logo.png')}
                alt=""
                className="flowbase-logo"
              />
            </a>
            <nav role="navigation" className="mobile-nav w-nav-menu">
              <a
                href="index.html"
                aria-current="page"
                className="mobile-nav-link w-nav-link w--current"
              >
                Home
              </a>
              <a href="about-us.html" className="mobile-nav-link w-nav-link">
                About Us
              </a>
              <a href="blog-page.html" className="mobile-nav-link w-nav-link">
                Blogs
              </a>
              <a
                href="personal-branding.html"
                className="mobile-nav-link w-nav-link"
              >
                Founder
              </a>
              <a href="#" className="mobile-nav-link w-nav-link">
                Green Hedge Capital
              </a>
              <a
                href="ghc-initiatives.html"
                className="mobile-nav-link w-nav-link"
              >
                GHC Initiatives
              </a>
              <a href="ghc-academy.html" className="mobile-nav-link w-nav-link">
                GHC Academy
              </a>
              <a href="ghc-life.html" className="mobile-nav-link w-nav-link">
                GHC Life
              </a>
              <a href="#" className="mobile-nav-link w-nav-link">
                GHC Foundation
              </a>
              <a href="contact-us.html" className="mobile-nav-link w-nav-link">
                Contact Us
              </a>
            </nav>
            <div className="menu-mob w-nav-button">
              <div className="w-icon-nav-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
