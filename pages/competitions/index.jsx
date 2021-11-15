import React, { useState, useEffect } from 'react';
import { getCompetitions } from '../../store/api/competitionApi';
import Link from 'next/link';
import { Pagination, Spin, Input } from 'antd';
import moment from 'moment';
import FeatureArticle from '../../components/FeatureArticle';
import { debounce } from 'lodash';

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [keywordState, setKeywordState] = useState('');

  useEffect(() => {
    setLoading(true);
    const body = {
      start,
      limit,
      // selected,
      keywordState,
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
  }, [start, limit, keywordState]);

  function handleChangePagination(current) {
    setStart(limit * (current - 1));
    setCurrentPage(current);
  }

  const action = (val) => setKeywordState(val);
  const debounceSearch = debounce(action, 1000);

  return (
    <div>
      <div>
        <div className="div-block-97">
          <div className="div-heading">
            <h1 className="heading-2">Competitions</h1>
            <div className="line" />
          </div>
        </div>

        <div className="content-section">
          <div
            style={{ maxWidth: '1600px' }}
            className="flex justify-between m-auto"
          >
            <div className="w-full">
              {competitions?.length > 0 ? (
                <div>
                  <div class="grid-container" style={{ width: '99%' }}>
                    {competitions?.map((comp) => (
                      <Spin tip="Loading..." spinning={loading} size="large">
                        <div class="grid-item">
                          <div
                            className="div-block-200"
                            style={{ width: '100%' }}
                          >
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
                                    <div
                                      className="link-13 _2 truncate cursor-pointer"
                                      style={{ maxWidth: '300px' }}
                                    >
                                      {comp ? comp?.title : 'N/A'}
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="categories-pill competeion w-inline-block">
                                <div className="title-small pink text-base">
                                  {comp ? comp?.status : 'N/A'}
                                </div>
                              </div>
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
                                <div className="details-headers">
                                  Start Day -
                                </div>
                                <div className="day-time">
                                  {comp
                                    ? moment(comp?.startDay).format('LL')
                                    : 'N/A'}{' '}
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
                                    ? moment(comp?.submissionDate).format(
                                        'h:mm:ss'
                                      )
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
                                <div className="details-headers">
                                  Organizer -
                                </div>
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
                      </Spin>
                    ))}
                  </div>
                  <Pagination
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
                <div className="flex items-center justify-center flex-col">
                  <img
                    src={require('../../assets/images/empty.png')}
                    className="m-8"
                    style={{ width: '200px' }}
                  />
                  <p className="mb-12">No blog found</p>
                </div>
              )}
            </div>
            <div className="content-right" style={{ width: '30%' }}>
              <div className="stick-wrapper">
                <form action="/search" className="search w-form">
                  <Input
                    className="seach-bar w-input"
                    onChange={(e) => debounceSearch(e.target.value)}
                    placeholder="Search"
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
                <FeatureArticle type="competitions" />
                <img src="images/ad-3.JPG" loading="lazy" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
