import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className="footercontainer w-container">
        <div className="div-block-376">
          {/* <img
            src={require('../../../assets/images/ad-4.jpg')}
            loading="lazy"
            sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 88vw, 972px"
            // srcSet="images/ad-4-p-500.jpeg 500w, images/ad-4.JPG 972w"
            alt
          /> */}
        </div>
        <div className="footerdiv">
          <div className="logoimage">
            <div className="text-block-8 ft">
              <span className="text-span">ARCH</span> SHELF
            </div>
          </div>
          <div className="logocontent">
            <p className="divpara footer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt &nbsp;aliqua.
            </p>
          </div>
        </div>
        <div className="footer-links-container">
          <div className="divlinks">
            <div className="divnewsletter">
              <h4 className="footerheading1">
                <strong>About</strong>
              </h4>
              <p className="paragraph color">
                Lorem ipsum dolor sit amet, consectetur&nbsp;elit. Suspendisse
                varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="footerdiv1">
              <h4 className="footerheading1">
                <strong>Quick Links</strong>
              </h4>
              <Link href="/" as="/" className="dropdown-link-2 w-dropdown-link">
                <a aria-current="page" className="homelink w--current">
                  Home
                </a>
              </Link>
              <Link
                href="/about"
                as="/about"
                className="dropdown-link-2 w-dropdown-link"
              >
                <a className="homelink">About</a>
              </Link>
              {/* <a href="#" className="homelink">
                Team
              </a>
              <a href="#" className="homelink">
                Services
              </a>
              <a href="#" className="homelink">
                Career
              </a> */}
            </div>
            <div className="footerdiv1 _1 _2">
              <h4 className="footerheading1">
                <strong>Information</strong>
              </h4>
              <Link href="/" as="/" className="dropdown-link-2 w-dropdown-link">
                <a className="homelink">Privacy policy</a>
              </Link>
              <Link href="/" as="/" className="dropdown-link-2 w-dropdown-link">
                <a className="homelink"> Terms &amp; condition</a>
              </Link>
              <Link
                href="/contact"
                as="/contact"
                className="dropdown-link-2 w-dropdown-link"
              >
                <a className="homelink"> Contact</a>
              </Link>
            </div>
            <div className="footerdiv1 _3">
              <h4 className="footerheading1">Resources</h4>
              <Link
                href="/resources"
                as="/resources"
                className="dropdown-link-2 w-dropdown-link"
              >
                <a className="homelink">Resources</a>
              </Link>
              <Link
                href="/projects"
                as="/projects"
                className="dropdown-link-2 w-dropdown-link"
              >
                <a className="homelink">Projects</a>
              </Link>
              <Link
                href="/courses"
                as="/courses"
                className="dropdown-link-2 w-dropdown-link"
              >
                <a className="homelink">Courses</a>
              </Link>
              <Link
                href="/competitions"
                as="/competitions"
                className="dropdown-link-2 w-dropdown-link"
              >
                <a className="homelink">Competitions</a>
              </Link>
              {/* <a className="homelink">
                Travel
              </a> */}
            </div>
          </div>
        </div>
        <div className="bottomdiv">
          <div className="copyrightdiv">
            <p className="paragraph color">Copyright © archshelf</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
