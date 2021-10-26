import React from 'react';

const FixedSocialIcons = () => {
  return (
       <div className="fixed-buttons-2">
        <a
          href="https://m.facebook.com/rasmeet.sethi.9"
          target="_blank"
          className="link-block-26 w-inline-block"
        >
          <div className="yellow-btn">
            <img
              src={require('../../assets/images/facebook.png')}
              loading="lazy"
              width={30}
              alt=""
              className="image-23"
            />
          </div>
        </a>
        <a
          href="https://mobile.twitter.com/greenhedgecap"
          target="_blank"
          className="link-block-26 w-inline-block"
        >
          <div className="yellow-btn light-btn">
            <img
              src={require('../../assets/images/twitter-1.png')}
              loading="lazy"
              width={30}
              // sizes="(max-width: 1279px) 30px, (max-width: 1919px) 2vw, 30px"
              // srcSet="images/twitter-1-p-500.png 500w, images/twitter-1.png 512w"
              alt=""
              className="image-14"
            />
          </div>
        </a>
        <a href="#" className="link-block-26 w-inline-block">
          <div className="linkedin">
            <img
              src={require('../../assets/images/linkedin_1.png')}
              loading="lazy"
              width={26}
              alt=""
              className="image-23"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/greenhedgecapital"
          target="_blank"
          className="link-block-26 w-inline-block"
        >
          <div className="tiktok">
            <img
              src={require('../../assets/images/instagram.png')}
              loading="lazy"
              width={30}
              // sizes="(max-width: 1279px) 30px, (max-width: 1919px) 2vw, 30px"
              // srcSet="images/instagram-p-500.png 500w, images/instagram.png 512w"
              alt=""
              className="image-23"
            />
          </div>
        </a>
        <a href="#" className="link-block-26 w-inline-block">
          <div className="tiktok youtube">
            <img
              src={require('../../assets/images/youtube.png')}
              loading="lazy"
              width={30}
              alt=""
              className="image-23"
            />
          </div>
        </a>
      </div>
  );
};

export default FixedSocialIcons;
