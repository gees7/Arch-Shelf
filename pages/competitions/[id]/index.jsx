import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCompetition } from '../../../store/api/competitionApi';
import FeatureArticle from '../../competitions/FeatureArticle';
import moment from 'moment';

const Competitions = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [competition, setCompetition] = useState();
  useEffect(() => {
    setLoading(true);
    getCompetition({ pathParams: { id } })
      .then((res) => {
        setCompetition(res?.data);
        setLoading(false);
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
              src={competition?.media[0]?.url}
              // sizes="(max-width: 479px) 94vw, (max-width: 991px) 75vw, (max-width: 1279px) 73vw, (max-width: 1919px) 76vw, 1216px"
              // srcSet="images/architect-drawing-architectural-project-PH4Q7EB-min-p-500.jpeg 500w, images/architect-drawing-architectural-project-PH4Q7EB-min-p-800.jpeg 800w, images/architect-drawing-architectural-project-PH4Q7EB-min.jpg 888w"
              alt=""
              className="blog-hero-image"
            />
            <div className="w-layout-grid blog-grid">
              <div className="content-left_blog">
                <h2 className="blog-h2">
                  {competition ? competition?.title : 'N/A'}
                </h2>
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
                        {competition ? competition?.user?.name : 'N/A'}
                      </div>
                      <p className="paragraph-detials-small">
                        {competition
                          ? moment(competition.created_at).format('LL')
                          : 'N/A'}
                      </p>
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
                      5 Mintues Read
                    </p>
                  </div> */}
                  <div className="categories-pill competeion w-inline-block">
                    <div className="title-small pink text-base">
                      {competition ? competition?.status : 'N/A'}
                    </div>
                  </div>
                </div>
                <div className="div-block-23390">
                  <ul role="list" className="list-7 w-list-unstyled">
                    <li className="list-item-5">
                      <img
                        src={require('../../../assets/images/schedule.png')}
                        loading="lazy"
                        sizes="(max-width: 1439px) 50px, (max-width: 1919px) 3vw, 50px"
                        // srcSet="https://assets.website-files.com/615e8b5e6632c8dc750e1133/61779861289b1bbe17ff194a_architect-p-500.png 500w, https://assets.website-files.com/615e8b5e6632c8dc750e1133/61779861289b1bbe17ff194a_architect.png 512w"
                        alt
                        className="image-56"
                      />
                    </li>
                    <li className="list-item-5">
                      <div className="text-block-171">Start Day:</div>
                    </li>
                    <li className="list-item-5">
                      <p className="paragraph-28">
                        {competition
                          ? moment(competition?.startDay).format('LL')
                          : 'N/A'}{' '}
                        (
                        {competition
                          ? moment(competition?.startDay).format('h:mm:ss')
                          : 'N/A'}
                        )
                      </p>
                    </li>
                  </ul>
                  <ul role="list" className="list-7 w-list-unstyled">
                    <li className="list-item-5">
                      <img
                        src={require('../../../assets/images/date.png')}
                        loading="lazy"
                        alt
                        className="image-56"
                      />
                    </li>
                    <li className="list-item-5">
                      <div className="text-block-171">Submission Deadline:</div>
                    </li>
                    <li className="list-item-5">
                      <p className="paragraph-28">
                        {competition
                          ? moment(competition?.submissionDate).format('LL')
                          : 'N/A'}{' '}
                        (
                        {competition
                          ? moment(competition?.submissionDate).format(
                              'h:mm:ss'
                            )
                          : 'N/A'}
                        )
                      </p>
                    </li>
                  </ul>
                  <ul role="list" className="list-7 w-list-unstyled">
                    <li className="list-item-5">
                      <img
                        src={require('../../../assets/images/graphic-designer.png')}
                        loading="lazy"
                        sizes="(max-width: 1439px) 50px, (max-width: 1919px) 3vw, 50px"
                        // srcSet="https://assets.website-files.com/615e8b5e6632c8dc750e1133/6177995ed7f4222cf2ccd147_calendar-p-500.png 500w, https://assets.website-files.com/615e8b5e6632c8dc750e1133/6177995ed7f4222cf2ccd147_calendar.png 512w"
                        alt
                        className="image-56"
                      />
                    </li>
                    <li className="list-item-5">
                      <div className="text-block-171">Organizer:</div>
                    </li>
                    <li className="list-item-5">
                      <p className="paragraph-28">
                        {competition ? competition?.organizer : 'N/A'}
                      </p>
                    </li>
                  </ul>
                  <ul role="list" className="list-7 w-list-unstyled">
                    <li className="list-item-5">
                      <img
                        src={require('../../../assets/images/pricing.png')}
                        loading="lazy"
                        sizes="(max-width: 1439px) 50px, (max-width: 1919px) 3vw, 50px"
                        // srcSet="https://assets.website-files.com/615e8b5e6632c8dc750e1133/6177994957b46f5eb59174a2_architect%20(1)-p-500.png 500w, https://assets.website-files.com/615e8b5e6632c8dc750e1133/6177994957b46f5eb59174a2_architect%20(1).png 512w"
                        alt
                        className="image-56"
                      />
                    </li>
                    <li className="list-item-5">
                      <div className="text-block-171">Price:</div>
                    </li>
                    <li className="list-item-5">
                      <p className="paragraph-28">
                        {competition ? competition?.price : 'N/A'}
                      </p>
                    </li>
                  </ul>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: competition?.body }}
                  className="paragraph-detials-large"
                ></p>
              </div>
              <div className="content-right">
                <div className="stick-wrapper">
                  <FeatureArticle id={competition?._id} type="competitions" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
