import React, { useState, useEffect } from 'react';
import { getCompetitions } from '../../store/api/competitionApi';
import Link from 'next/link';

const index = ({ id }) => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const body = {
      start: 0,
      limit: 4,
      // selected,
      // keywordState,
    };
    getCompetitions({ query: body })
      .then((res) => {
        setCompetitions(res.data.competitionsList);
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
      <div className="featured-articles">
        <div className="title-large">Featured</div>
        {competitions.length > 0 ? (
          <div className="featured-block">
            {competitions
              .filter((data) => data._id !== id)
              ?.map((comp) => (
                <Link
                  href={`/competitions/${comp?._id}`}
                  className="featured-item-2 w-inline-block"
                >
                  <a className="featured-item w-inline-block">
                    <img
                      src={`${comp?.media[0]?.url}`}
                      style={{ width: '100px', height: '80px' }}
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
                </Link>
              ))}
          </div>
        ) : (
          'No Blogs found'
        )}
      </div>
    </div>
  );
};

export default index;
