import React, { useState, useEffect } from 'react';
import { getFeeds } from '../../store/api/dashboardApi';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getCategories } from '../../store/actions/blogActions';
import FeatureArticle from '../../components/FeatureArticle';
import { notification, Pagination, Spin, Input } from 'antd';
import { debounce } from 'lodash';

const Courses = ({ categories, getCategories }) => {
  const [coursesData, setCoursesData] = useState([]);
  const [keywordState, setKeywordState] = useState('');
  const [catId, setCatId] = useState('');
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const body = {
      start,
      limit,
      type: 'courses',
      selected: catId,
      keywordState,
    };
    getFeeds({ query: body })
      .then((res) => {
        setCoursesData(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: 'Failed to get blogs',
          });
        } else {
          notification.error({
            message: `${err?.data?.error?.message}`,
          });
        }
      });
  }, [catId, keywordState, start, limit]);

  const action = (val) => setKeywordState(val);
  const debounceSearch = debounce(action, 1000);

  function handleChangePagination(current) {
    setStart(limit * (current - 1));
    setCurrentPage(current);
  }

  useEffect(() => {
    getCategories({ query: { categoryType: 'courses' } });
  }, []);

  return (
    <div>
      <div className="div-block-97">
        <div className="div-heading">
          <h1 className="heading-2">Courses</h1>
          <div className="line" />
        </div>
      </div>
      <div className="section-76 wf-section">
        <div className="div-block-406">
          <div className="div-block-407">
            <div className="div-block-408">
              {coursesData?.feedList?.length > 0 ? (
                <Spin tip="Loading..." spinning={loading} size="large">
                  <div className="flex flex-wrap">
                    {coursesData?.feedList?.map((item) => (
                      <div
                        className="p-4 my-6 size w-inline-block"
                        style={{ width: '50%' }}
                      >
                        <Link href="/courses/[id]" as={`/courses/${item?._id}`}>
                          <div className="cursor-pointer flex h-full items-start ">
                            <div className="blog-image-wrap">
                              <img
                                src={item?.media?.url}
                                style={{ height: '170px', width: '250px' }}
                                // sizes="(max-width: 479px) 79vw, (max-width: 991px) 42vw, (max-width: 1279px) 15vw, (max-width: 1919px) 16vw, 264.1875px"
                                // srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                                alt
                                className="blog-image size"
                              />
                            </div>
                            <div
                              className="blog-content pl-4"
                              style={{ width: '200px' }}
                            >
                              <h3
                                className="heading-h2 truncate"
                                style={{ maxWidth: '300px' }}
                              >
                                {item?.title}
                              </h3>
                              <p className="paragraph-detials-small ">
                                {item?.shortDescription}
                              </p>
                              <div className="profile-block mt-4">
                                <img
                                  src="images/team-1.jpg"
                                  width={40}
                                  alt
                                  className="profile-picture"
                                />
                                <div className="normal-wrapper">
                                  <div className="title-small">
                                    {item?.user?.name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                    <div className="flex justify-start w-full">
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
                        total={coursesData?.count}
                        onChange={handleChangePagination}
                      />
                    </div>
                  </div>
                </Spin>
              ) : (
                <div className="flex items-center justify-center flex-col w-full">
                  <img
                    src={require('../../assets/images/empty.png')}
                    className="m-8"
                    style={{ width: '200px' }}
                  />
                  <p className="mb-12">No blog found</p>
                </div>
              )}
            </div>
          </div>
          <div className="content-right" style={{ width: '350px' }}>
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
              <div className="featured-articles">
                <div className="featured-block">
                  <FeatureArticle
                    id={coursesData?.data?.feedList?._id}
                    type="resources"
                  />
                </div>
              </div>
              <div className="categories-block">
                <div className="title-large">Filter By Categories</div>
                {categories?.categories.length > 0 ? (
                  <div>
                    <span
                      className={`categories-pill w-inline-block cursor-pointer
                        ${!catId ? `bg-gray-900` : `bg-gray-700`}
                      `}
                      onClick={() => setCatId('')}
                    >
                      <div className="title-small pink">All</div>
                    </span>

                    {categories?.categories?.map((item) => (
                      <span
                        key={item?._id}
                        className={`categories-pill w-inline-block cursor-pointer 
                          ${catId === item?._id ? 'bg-gray-900' : 'bg-gray-700'}
                        `}
                        onClick={() => setCatId(item?._id)}
                      >
                        <div className="title-small pink">{item?.name}</div>
                      </span>
                    ))}
                  </div>
                ) : (
                  'No category found'
                )}
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
  );
};

function mapStateToProps(state) {
  const categories = state?.dashboard?.categories;
  return { categories };
}
const mapDispatchToProps = (dispatch) => ({
  getCategories: (payload) => dispatch(getCategories(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
