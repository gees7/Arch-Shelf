import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getResource, getResources } from '../../store/actions/blogActions';
const index = ({ id, resource, resources, getResource, getResources }) => {
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
  const [bdate, setBdate] = useState(null);
  const [readTime, setReadTime] = useState(0);
  useEffect(() => {
    getResources({ query: { type: 'resources', limit: '6' } });
    getResource({ pathParams: { id } });
  }, [id]);

  useEffect(() => {
    var finaldate;
    var time;
    const date = new Date(resource?.data?.created_at);
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    finaldate = mL[month] + ' ' + day + ', ' + year;
    setBdate(finaldate);
    var wordCount = resource?.data?.body?.match(/(\w+)/g).length;
    time = Math.round(wordCount / 250);
    setReadTime(time);
  }, [resource]);

  return (
    <div>
      <div>
        <div className="div-block-97 hight">
          <div className="div-heading">
            <h1 className="heading-2">Our Blogs</h1>
            <div className="line" />
          </div>
        </div>
        <div className="blog-section">
          <div className="container-501">
            <img
              src={resource?.data?.media?.url}
              // sizes="(max-width: 479px) 94vw, (max-width: 991px) 75vw, (max-width: 1279px) 73vw, (max-width: 1919px) 76vw, 1216px"
              // srcSet="images/architect-drawing-architectural-project-PH4Q7EB-min-p-500.jpeg 500w, images/architect-drawing-architectural-project-PH4Q7EB-min-p-800.jpeg 800w, images/architect-drawing-architectural-project-PH4Q7EB-min.jpg 888w"
              alt=""
              className="blog-hero-image"
            />
            <div className="w-layout-grid blog-grid">
              <div className="content-left_blog">
                <h2 className="blog-h2">{resource?.data?.title}</h2>
                <div className="blog-content blog-page">
                  <div className="profile-block blog_page">
                    <img
                      src="images/team-1.jpg"
                      width={62}
                      alt=""
                      className="profile-picture"
                    />
                    <div className="normal-wrapper">
                      <div className="title-small">
                        {resource?.data?.user?.name}
                      </div>
                      <p className="paragraph-detials-small">{bdate}</p>
                    </div>
                  </div>
                  <div className="div-block-23369 blog_page">
                    <img
                      src="images/back-in-time.png"
                      loading="lazy"
                      sizes="(max-width: 1279px) 30px, (max-width: 1919px) 2vw, 1vw"
                      srcSet="images/back-in-time-p-500.png 500w, images/back-in-time.png 512w"
                      alt
                      className="image-53"
                    />
                    <p className="paragraph-detials-medium time">
                      {readTime} Mintues Read
                    </p>
                  </div>
                </div>

                <p
                  dangerouslySetInnerHTML={{ __html: resource?.data?.body }}
                  className="paragraph-detials-large"
                ></p>
              </div>
              <div className="content-right">
                <div className="stick-wrapper">
                  <div className="featured-articles">
                    <div className="title-large">Featured</div>
                    <div className="featured-block">
                      {resources?.data?.feedList?.map((item) => (
                        <Link
                          href={'/resources/' + item?._id}
                          className="featured-item-2 w-inline-block"
                        >
                          <a className="featured-item w-inline-block">
                            <img
                              src={`${item?.media?.url}`}
                              width={90}
                              sizes="(max-width: 479px) 28vw, (max-width: 767px) 20vw, 90px"
                              // srcSet="images/about-archi-p-500.png 500w, images/about-archi-p-800.png 800w, images/about-archi-p-1080.png 1080w, images/about-archi-p-1600.png 1600w, images/about-archi.png 1728w"
                              alt
                              className="feature-image"
                            />
                            <div className="title-small">
                              {item ? item?.title : 'N/A'}
                            </div>
                          </a>
                        </Link>
                      ))}
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

function mapStateToProps(state) {
  const resources = state?.dashboard?.resources;
  const resource = state?.dashboard?.resource;
  return { resource, resources };
}
const mapDispatchToProps = (dispatch) => ({
  getResources: (payload) => dispatch(getResources(payload)),
  getResource: (payload) => dispatch(getResource(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
