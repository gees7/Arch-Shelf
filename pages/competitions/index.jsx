import React, { useState, useEffect } from 'react';
import { getCompetitions } from '../../store/api/competitionApi';
import Link from 'next/link';
import { Pagination, Spin } from 'antd';
import moment from 'moment';

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const body = {
      start,
      limit,
      // selected,
      // keywordState,
    };
    getCompetitions({ query: body })
      .then((res) => {
        setCompetitions(res.data.competitionsList);
        setLoading(false);
      })
      .catch((err) => {
        if (err && err.status === 422) {
          notification.error({
            message: Object.keys(err.data)
              .map((key) => err.data[key][0])
              .join(' '),
          });
        } else {
          notification.error({
            message: 'Failed to get feeds',
          });
        }
      });
  }, [start, limit]);

  function handleChangePagination(current) {
    setStart(limit * (current - 1));
    setCurrentPage(current);
  }

  return (
    <div>
      <div>
        <div className="div-block-97">
          <div className="div-heading">
            <h1 className="heading-2">Competitions</h1>
            <div className="line" />
          </div>
        </div>
        {competitions?.length > 0 ? (
          <div className="content-section">
            <div
              style={{ maxWidth: '1600px' }}
              className="flex justify-between m-auto"
            >
              <div class="grid-container">
                {competitions?.map((comp) => (
                  <div class="grid-item">
                    <div className="div-block-200" style={{ width: '100%' }}>
                      <div className="div-block-402">
                        <img
                          src={`${comp?.media[0]?.url}`}
                          loading="lazy"
                          width={448}
                          sizes="(max-width: 767px) 94vw, (max-width: 991px) 92vw, (max-width: 1279px) 29vw, (max-width: 1919px) 30vw, 479.984375px"
                          // srcSet="images/Arch-competitions-p-500.jpeg 500w, images/Arch-competitions.jpg 770w"
                          alt
                          className="image-47"
                        />
                        <div className="blog_overlap_heading">
                          <div className="div-block-202">
                            <Link
                              href="/competitions/[id]"
                              as={`/competitions/${comp?._id}`}
                              className="dropdown-link-2 w-dropdown-link"
                            >
                              <a className="link-13 _2">
                                {comp ? comp?.title : 'N/A'}
                              </a>
                            </Link>
                            <p
                              className="paragraph-21 _2"
                              style={{
                                maxWidth: '320px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {comp ? (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: comp.body,
                                  }}
                                ></span>
                              ) : (
                                'N/A'
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <a className="categories-pill competeion w-inline-block">
                          <div className="title-small pink text-base">
                            {comp ? comp?.status : 'N/A'}
                          </div>
                        </a>
                      </div>
                      <div className="sheduled-time">
                        <div className="setails-wrapper">
                          <img
                            src="images/schedule.png"
                            loading="lazy"
                            id="w-node-b278a96a-64f6-c459-1dec-cd8b52c66292-612bb55a"
                            sizes="(max-width: 1439px) 35px, (max-width: 1919px) 2vw, 35px"
                            srcSet="images/schedule-p-500.png 500w, images/schedule.png 512w"
                            alt
                            className="image-52 _2"
                          />
                          <div className="details-headers">Start Day -</div>
                          <div className="day-time">
                            {comp ? moment(comp?.startDay).format('LL') : 'N/A'}{' '}
                            (
                            {comp
                              ? moment(comp?.startDay).format('h:mm:ss')
                              : 'N/A'}
                            )
                          </div>
                        </div>
                        <div className="setails-wrapper">
                          <img
                            src="images/date.png"
                            loading="lazy"
                            id="w-node-_2dfeab4f-5192-b9e4-3196-49396a8ac37d-612bb55a"
                            sizes="(max-width: 1439px) 35px, (max-width: 1919px) 2vw, 35px"
                            srcSet="images/date-p-500.png 500w, images/date.png 512w"
                            alt
                            className="image-52 _2"
                          />
                          <div className="details-headers">
                            Submission Deadline -
                          </div>
                          <div className="day-time">
                            {comp
                              ? moment(comp?.submissionDate).format('LL')
                              : 'N/A'}{' '}
                            (
                            {comp
                              ? moment(comp?.submissionDate).format('h:mm:ss')
                              : 'N/A'}
                            )
                          </div>
                        </div>
                      </div>
                      <div className="organizer">
                        <div className="setails-wrapper _2">
                          <img
                            src="images/graphic-designer.png"
                            loading="lazy"
                            id="w-node-_899ff1ed-6ec6-1b89-e0f7-a06643ce77a3-612bb55a"
                            alt
                            className="image-52"
                          />
                          <div className="details-headers">Organizer -</div>
                          <div className="day-time">
                            {comp ? comp.organizer : 'N/A'}
                          </div>
                        </div>
                      </div>
                      <div className="price">
                        <div className="setails-wrapper _2">
                          <img
                            src="images/pricing.png"
                            loading="lazy"
                            id="w-node-e513dfcb-7332-3a54-6965-298be881f22a-612bb55a"
                            sizes="(max-width: 1279px) 30px, (max-width: 1919px) 2vw, 30px"
                            srcSet="images/pricing-p-500.png 500w, images/pricing.png 512w"
                            alt
                            className="image-52 price"
                          />
                          <div className="details-headers">Price -</div>
                          <div className="day-time">
                            {comp ? comp.price : 'N/A'} Rs
                          </div>
                        </div>
                      </div>
                      <div className="div-block-396 flex">
                        <Link
                          href="/competitions/[id]"
                          as={`/competitions/${comp?._id}`}
                          className="dropdown-link-2 w-dropdown-link"
                        >
                          <a className="link-14">KNOW MORE</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="content-right">
                <div className="stick-wrapper">
                  <form action="/search" className="search w-form">
                    <input
                      className="seach-bar w-input"
                      maxLength={256}
                      placeholder="Search articles"
                      required
                    />
                    <a className="search-button-wrapper w-inline-block">
                      <input className="search-button w-button" />
                      <img
                        src="images/search_icon.svg"
                        alt
                        className="search-icon"
                      />
                    </a>
                  </form>
                  <div className="featured-articles">
                    <div className="title-large">Featured</div>
                    <div className="featured-block">
                      {competitions?.map((comp) => (
                        <a className="featured-item w-inline-block">
                          <img
                            src={`${comp?.media[0]?.url}`}
                            width={90}
                            sizes="(max-width: 479px) 28vw, (max-width: 767px) 20vw, 90px"
                            // srcSet="images/about-archi-p-500.png 500w, images/about-archi-p-800.png 800w, images/about-archi-p-1080.png 1080w, images/about-archi-p-1600.png 1600w, images/about-archi.png 1728w"
                            alt
                            className="feature-image"
                          />
                          <div className="title-small">
                            {comp ? comp?.title : 'N/A'}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <img src="images/ad-3.JPG" loading="lazy" alt />
                </div>
              </div>
            </div>
            <Pagination
              style={{ maxWidth: '1600px' }}
              className="flex justify-center"
              key={`page-${currentPage}`}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              showSizeChanger
              pageSizeOptions={['10', '25', '50', '100']}
              onShowSizeChange={(e, p) => {
                setLimit(p);
                setCurrentPage(1);
                setStart(0);
              }}
              defaultCurrent={1}
              current={currentPage}
              pageSize={limit}
              total={competitions && competitions?.length}
              onChange={handleChangePagination}
            />
          </div>
        ) : (
          'No blog found'
        )}
      </div>
    </div>
  );
};

export default Competitions;
