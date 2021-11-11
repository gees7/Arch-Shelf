import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getCategories, getResources } from '../../store/actions/blogActions';
import { debounce } from 'lodash';
import FeatureArticle from '../../components/FeatureArticle';
import { notification, Pagination, Spin, Input } from 'antd';

const Resources = ({ categories, getCategories, resources, getResources }) => {
  const [keywordState, setKeywordState] = useState('');
  const [catId, setCatId] = useState('');
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
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
  useEffect(() => {
    getCategories({ query: { categoryType: 'resources' } });
  }, []);

  useEffect(() => {
    setLoading(true);
    const body = {
      start,
      limit,
      type: 'resources',
      selected: catId,
      keywordState,
    };
    getResources({ query: body })
      .then((res) => {
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
  return (
    <div>
      <div className="div-block-97">
        <div className="div-heading">
          <h1 className="heading-2">Resources</h1>
          <div className="line" />
        </div>
      </div>
      <div className="content-section">
        <div className="container-501">
          <div className="w-layout-grid blog-grid">
            {resources?.data?.feedList.length > 0 ? (
              <Spin tip="Loading..." spinning={loading} size="large">
                <div className="content-left">
                  {resources?.data?.feedList
                    ?.slice(0, 3)
                    ?.map((item, index) => {
                      const date = new Date(item?.created_at);
                      var day = date.getDate();
                      var month = date.getMonth();
                      var year = date.getFullYear();
                      var finalDate = mL[month] + ' ' + day + ', ' + year;
                      var wordCount = item?.body?.match(/(\w+)/g).length;
                      var time = Math.round(wordCount / 250);
                      return (
                        <Link key={item?._id} href={'/resources/' + item?._id}>
                          <div
                            className="blog-item-2 cursor-pointer"
                            style={{ width: '90%' }}
                          >
                            <div className="blog-image-wrap">
                              <img
                                src={item?.media?.url}
                                width={380}
                                // sizes="(max-width: 479px) 86vw, (max-width: 767px) 89vw, (max-width: 991px) 86vw, (max-width: 1279px) 45vw, (max-width: 1919px) 48vw, 777.765625px"
                                // srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                                alt=""
                                className="blog-image"
                              />
                            </div>
                            <div className="blog-content">
                              <div className="w-full flex justify-end">
                                <div
                                  className="font-bold text-gray-100 rounded-full py-2 px-4"
                                  style={{ backgroundColor: '#001425' }}
                                >
                                  {item?.category?.name}
                                </div>
                              </div>
                              <h3 className="heading-h2">{item?.title}</h3>
                              <p className="paragraph-detials-medium">
                                {item?.shortDescription}
                              </p>
                              <div className="div-block-23369">
                                <img
                                  src="/public/images/back-in-time.png"
                                  loading="lazy"
                                  sizes="(max-width: 1279px) 30px, (max-width: 1919px) 2vw, 1vw"
                                  srcSet="images/back-in-time-p-500.png 500w, images/back-in-time.png 512w"
                                  alt=""
                                  className="image-53"
                                />
                                <p className="paragraph-detials-medium time">
                                  {time} Minutes Read
                                </p>
                              </div>
                              <div className="profile-block">
                                <img
                                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1085&q=80         "
                                  width={62}
                                  className="profile-picture"
                                />
                                <div className="normal-wrapper">
                                  <div className="title-small">
                                    {item?.user?.name}
                                  </div>
                                  <p className="paragraph-detials-small">
                                    {finalDate}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  <div className="div-block-23382">
                    <div
                      id="w-node-_2cc27067-6af0-5447-19c8-c594f2b275f4-62ebedc5"
                      data-w-id="2cc27067-6af0-5447-19c8-c594f2b275f4"
                      className="div-block-23383"
                    >
                      <div
                        className="div-block-23385"
                        style={{
                          backgroundImage: `url(${resources?.data?.feedList[3]?.media?.url})`,
                        }}
                      >
                        {resources?.data?.feedList[3] ? (
                          <div className="div-block-23386">
                            <div className="div-block-23387">
                              <div>
                                {resources?.data?.feedList[3]?.shortDescription}
                              </div>
                            </div>
                            <h2 className="heading-39">
                              {resources?.data?.feedList[3]?.title}
                            </h2>
                            <div className="w-full flex justify-end">
                              <div
                                className="font-bold text-gray-100 rounded-full py-2 px-4"
                                style={{ backgroundColor: '#001425' }}
                              >
                                {resources?.data?.feedList[3]?.category?.name}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                    <div className="div-block-23388">
                      <img
                        src="https://assets.website-files.com/615e8b5e6632c8dc750e1133/61651f9a56de5b87a53233c9_ad-3.JPG"
                        loading="lazy"
                        alt=""
                        className="image-58"
                      />
                    </div>
                    <div
                      id="w-node-_571b9005-e3a0-ddaa-14b7-4fb7226efaaf-62ebedc5"
                      data-w-id="571b9005-e3a0-ddaa-14b7-4fb7226efaaf"
                      className="div-block-23383"
                    >
                      {resources?.data?.feedList[4] ? (
                        <div
                          className="div-block-23385"
                          style={{
                            backgroundImage: `url(${resources?.data?.feedList[4]?.media?.url})`,
                          }}
                        >
                          <div className="div-block-23386">
                            <div className="div-block-23387">
                              <div>
                                {resources?.data?.feedList[4]?.shortDescription}
                              </div>
                            </div>
                            <h2 className="heading-39">
                              {resources?.data?.feedList[4]?.title}
                            </h2>
                            <div className="w-full flex justify-end">
                              <div
                                className="font-bold text-gray-100 rounded-full py-2 px-4"
                                style={{ backgroundColor: '#001425' }}
                              >
                                {resources?.data?.feedList[4]?.category?.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div
                      id="w-node-d2625d4f-b0ba-9a39-3627-0c4681b8743f-62ebedc5"
                      data-w-id="d2625d4f-b0ba-9a39-3627-0c4681b8743f"
                      className="div-block-23383"
                    >
                      <div className="div-block-23384 smaal-size">
                        <img
                          src="/public/images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg"
                          loading="lazy"
                          style={{
                            WebkitTransform:
                              'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform:
                              'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform:
                              'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform:
                              'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                          }}
                          sizes="100vw"
                          srcSet="images/cp-molettoparedes-epem-0154_1-p-500.jpeg 500w, images/cp-molettoparedes-epem-0154_1-p-800.jpeg 800w, images/cp-molettoparedes-epem-0154_1-p-1080.jpeg 1080w, images/cp-molettoparedes-epem-0154_1-p-1600.jpeg 1600w, images/cp-molettoparedes-epem-0154_1cp-molettoparedes-epem-0154.jpg 2000w"
                          alt=""
                          className="image-57"
                        />
                      </div>
                      {resources?.data?.feedList[5] ? (
                        <div
                          className="div-block-23385"
                          style={{
                            backgroundImage: `url(${resources?.data?.feedList[5]?.media?.url})`,
                          }}
                        >
                          <div className="div-block-23386">
                            <div className="div-block-23387">
                              <div>
                                {resources?.data?.feedList[5]?.shortDescription}
                              </div>
                            </div>
                            <h2 className="heading-39">
                              {resources?.data?.feedList[5]?.title}
                            </h2>
                            <div className="w-full flex justify-end">
                              <div
                                className="font-bold text-gray-100 rounded-full py-2 px-4"
                                style={{ backgroundColor: '#001425' }}
                              >
                                {resources?.data?.feedList[5]?.category?.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  {resources?.data?.feedList?.slice(5)?.map((item, index) => {
                    const date = new Date(item?.created_at);
                    var day = date.getDate();
                    var month = date.getMonth();
                    var year = date.getFullYear();

                    var finaldate = mL[month] + ' ' + day + ', ' + year;
                    var wordCount = item?.body?.match(/(\w+)/g).length;
                    var time = Math.round(wordCount / 250);
                    if (index >= resources?.data?.feedList?.length / 2)
                      return (
                        <Link key={item?._id} href={'/resources/' + item?._id}>
                          <div
                            className="blog-item-2 cursor-pointer"
                            style={{ width: '90%' }}
                          >
                            <div className="blog-image-wrap">
                              <img
                                src={item?.media?.url}
                                width={380}
                                // sizes="(max-width: 479px) 86vw, (max-width: 767px) 89vw, (max-width: 991px) 86vw, (max-width: 1279px) 45vw, (max-width: 1919px) 48vw, 777.765625px"
                                // srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                                alt=""
                                className="blog-image"
                              />
                            </div>
                            <div className="blog-content">
                              <div className="w-full flex justify-end">
                                <div
                                  className="font-bold text-gray-100 rounded-full py-2 px-4"
                                  style={{ backgroundColor: '#001425' }}
                                >
                                  {item?.category?.name}
                                </div>
                              </div>
                              <h3 className="heading-h2">{item?.title}</h3>
                              <p className="paragraph-detials-medium">
                                {item?.shortDescription}
                              </p>
                              <div className="div-block-23369">
                                <img
                                  src="/public/images/back-in-time.png"
                                  loading="lazy"
                                  sizes="(max-width: 1279px) 30px, (max-width: 1919px) 2vw, 1vw"
                                  srcSet="images/back-in-time-p-500.png 500w, images/back-in-time.png 512w"
                                  alt=""
                                  className="image-53"
                                />
                                <p className="paragraph-detials-medium time">
                                  {time} Minutes Read
                                </p>
                              </div>
                              <div className="profile-block">
                                <img
                                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1085&q=80         "
                                  width={62}
                                  className="profile-picture"
                                />
                                <div className="normal-wrapper">
                                  <div className="title-small">
                                    {item?.user?.name}
                                  </div>
                                  <p className="paragraph-detials-small">
                                    {finaldate}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                  })}
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
                      total={resources?.data?.count}
                      onChange={handleChangePagination}
                    />
                  </div>
                </div>
              </Spin>
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
                      id={resources?.data?.feedList?._id}
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
    </div>
  );
};

function mapStateToProps(state) {
  const categories = state?.dashboard?.categories;
  const resources = state?.dashboard?.resources;
  return { categories, resources };
}
const mapDispatchToProps = (dispatch) => ({
  getCategories: (payload) => dispatch(getCategories(payload)),
  getResources: (payload) => dispatch(getResources(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
