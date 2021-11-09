import React, { useEffect, useState } from 'react';
import Navbar from '../../components/DashboardComponents/Navbar';
import Footer from '../../components/DashboardComponents/Footer';

import { searchApi } from '../../store/api/searchApi';
import { useRouter } from 'next/router';
import Link from 'next/link';
const index = () => {
  const [result, setResult] = useState([]);
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
  const router = useRouter();
  const query = router.query.query;
  useEffect(() => {
    searchApi({ query: { keywordState: query } }).then((res) => {
      console.log(res?.data?.resultList, 'RE');
      if (res?.data?.resultList) {
        setResult(res?.data?.resultList);
      } else {
        setResult(null);
      }
    });
  }, [query]);
  return (
    <div>
      <div>
        <div className="div-block-97">
          <div className="div-heading">
            <h1 className="heading-2">Search</h1>
            <div className="line" />
          </div>
        </div>
        <div className="container-501">
          {console.log(result?.length)}
          {result?.length ? (
            result?.map((item) => {
              const date = new Date(item?.created_at);
              var day = date.getDate();
              var month = date.getMonth();
              var year = date.getFullYear();

              var finaldate = mL[month] + ' ' + day + ', ' + year;
              var wordCount = item?.body?.match(/(\w+)/g).length;
              var time = Math.round(wordCount / 250);
              if (item?.type != 'breakfasts')
                return (
                  <Link
                    key={item?._id}
                    href={
                      '/' + (item?.type || 'competitions') + '/' + item?._id
                    }
                  >
                    <div
                      className="blog-item-2 cursor-pointer my-6"
                      style={{ width: '90%' }}
                    >
                      <div className="blog-image-wrap">
                        <img
                          src={item?.media?.url}
                          width={380}
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 89vw, (max-width: 991px) 86vw, (max-width: 1279px) 45vw, (max-width: 1919px) 48vw, 777.765625px"
                          srcSet="images/springwood-p-500.jpeg 500w, images/springwood-p-800.jpeg 800w, images/springwood.jpg 900w"
                          alt=""
                          className="blog-image"
                        />
                      </div>
                      <div className="blog-content">
                        <h3 className="heading-h2">{item?.title}</h3>
                        <p className="paragraph-detials-medium">
                          {item?.shortDescription}
                        </p>
                        {/* <div className="div-block-23369">
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
                      </div> */}
                        <div className="profile-block">
                          <div className="normal-wrapper">
                            <div className="font-bold mb-2 rounded capitalize bg-yellow-200 text-yellow-800 py-1 px-4">
                              {item?.type || 'competitions'}
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
            })
          ) : (
            <div
              className="my-16"
              style={{ width: '100%' }}
              >
                <h1 className="text-3xl text-center">No matching records found</h1>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
