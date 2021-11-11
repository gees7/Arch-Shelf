import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import {
  getResource,
  getResources,
  getProject,
  getProjects,
} from '../../store/actions/blogActions';
import { getFeed, getFeeds } from '../../store/api/dashboardApi';

const index = ({ id, type }) => {
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
  const [data, setData] = useState(null);
  const [dataList, setDataList] = useState(null);

  useEffect(() => {
    getFeed({ pathParams: { id } })
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: 'Failed to get competitions',
          });
        } else {
          notification.error({
            message: `${err.data.error.message}`,
          });
        }
      });
  }, [id]);

  useEffect(() => {
    getFeeds({ query: { type } })
      .then((res) => {
        setDataList(res?.data.feedList);
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: 'Failed to get competitions',
          });
        } else {
          notification.error({
            message: `${err.data.error.message}`,
          });
        }
      });
  }, [id]);

  useEffect(() => {
    if (data) {
      var finaldate;
      var time;
      const date = new Date(data?.created_at);
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();

      finaldate = mL[month] + ' ' + day + ', ' + year;
      setBdate(finaldate);
      var wordCount = data?.body?.match(/(\w+)/g).length;
      time = Math.round(wordCount / 250);
      setReadTime(time);
    }
  }, [data]);

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
              src={data?.media?.url}
              // sizes="(max-width: 479px) 94vw, (max-width: 991px) 75vw, (max-width: 1279px) 73vw, (max-width: 1919px) 76vw, 1216px"
              // srcSet="images/architect-drawing-architectural-project-PH4Q7EB-min-p-500.jpeg 500w, images/architect-drawing-architectural-project-PH4Q7EB-min-p-800.jpeg 800w, images/architect-drawing-architectural-project-PH4Q7EB-min.jpg 888w"
              alt=""
              className="blog-hero-image"
            />
            <div className="w-layout-grid blog-grid">
              <div className="content-left_blog">
                <h2 className="blog-h2">{data?.title}</h2>
                <div className="blog-content blog-page">
                  <div className="profile-block blog_page">
                    <img
                      src="images/team-1.jpg"
                      width={62}
                      alt=""
                      className="profile-picture"
                    />
                    <div className="normal-wrapper">
                      <div className="title-small">{data?.user?.name}</div>
                      <p className="paragraph-detials-small">{bdate}</p>
                    </div>
                  </div>
                  {/* <div className="div-block-23369 blog_page">
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
                  </div> */}
                </div>

                <p
                  dangerouslySetInnerHTML={{ __html: data?.body }}
                  className="paragraph-detials-large"
                ></p>
              </div>
              <div className="content-right">
                <div className="stick-wrapper">
                  <div className="featured-articles">
                    <div className="title-large">Featured</div>
                    <div className="featured-block">
                      {dataList
                        ?.filter((data) => data._id !== id)
                        ?.map((item) => (
                          <div className="featured-item-2 w-inline-block my-6">
                            <Link href={'/resources/' + item?._id}>
                              <div className="cursor-pointer flex items-center">
                                <img
                                  src={item?.media?.url}
                                  style={{ width: '100px', height: '80px' }}
                                  alt
                                  className="feature-image-2"
                                />
                                <div className="title-small">{item?.title}</div>
                              </div>
                            </Link>
                          </div>
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
  const projects = state?.dashboard?.projects;
  const project = state?.dashboard?.project;
  return { resource, resources, project, projects };
}
const mapDispatchToProps = (dispatch) => ({
  getResources: (payload) => dispatch(getResources(payload)),
  getResource: (payload) => dispatch(getResource(payload)),
  getProjects: (payload) => dispatch(getProjects(payload)),
  getProject: (payload) => dispatch(getProject(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
