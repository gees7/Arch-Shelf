import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer-2 wf-section">
        <div className="container-16 w-container">
          <div className="footer-flex-container-2">
            <div>
              <a
                href="index.html"
                aria-current="page"
                className="footer-logo-link-2 w--current"
              >
                <img
                  src={require('../../../assets/images/logo.png')}
                  alt=""
                  className="footer-image-2"
                />
              </a>
              <div>
                <p className="paragraph-132">
                  Lorem Ipsum is simply dummy text of the
                  <br /> printing and typesetting industry. Lorem Ipsum has
                  <br /> been the industry's standard dummy <br />
                  text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="div-block-23314">
              <h2 className="footer-heading-2">Contact us</h2>
              <ul role="list" className="list w-list-unstyled">
                <li>
                  <div className="div-block-30118">
                    <div className="div-block-30119">
                      <div className="text-block-15114"></div>
                    </div>
                    <div>
                      <div className="text-block-15115">
                        Lawrence Road, Amritsar, Punjab 143001
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="mailto:info@greenhedgecapital.com"
                    className="link-block-51 w-inline-block"
                  >
                    <div className="div-block-30118">
                      <div className="div-block-30119">
                        <div className="text-block-15114"></div>
                      </div>
                      <div>
                        <div className="text-block-15115">
                          info@greenhedgecapital.com
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:6283286207"
                    className="link-block-50 w-inline-block"
                  >
                    <div className="div-block-30145">
                      <div className="text-block-15114 icon-size"> </div>
                      <div className="text-block-15115">6283286207</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-heading-2">Quick links</h2>
              <ul role="list" className="w-list-unstyled">
                <li>
                  <a
                    href="index.html"
                    aria-current="page"
                    className="footer-link-2 w--current"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="about-us.html" className="footer-link-2">
                    About us
                  </a>
                </li>
                <li>
                  <a href="blog-page.html" className="footer-link-2">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="personal-branding.html" className="footer-link-2">
                    Founder
                  </a>
                  <a href="contact-us.html" className="footer-link-2">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-heading-2">Information</h2>
              <ul role="list" className="w-list-unstyled">
                <li>
                  <a href="ghc-academy.html" className="footer-link-2">
                    GHC&nbsp;Academy
                  </a>
                </li>
                <li>
                  <a href="ghc-life.html" className="footer-link-2">
                    GHC&nbsp;Life
                  </a>
                  <a href="ghc-foundation.html" className="footer-link-2">
                    GHC&nbsp;Foundation
                  </a>
                </li>
              </ul>
              <a href="ghc-initiatives.html" className="footer-link-2">
                GHC Initiatives
              </a>
            </div>
          </div>
          <div className="text-block-63">
            Copyright © 2021 Green Hedge Capital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
