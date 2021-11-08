import React, { useState, useEffect } from 'react';
import { getDashboardFeed, getFeeds } from '../../../store/api/dashboardApi';
import { getCompetitions } from '../../../store/api/competitionApi';
import styles from './style.less';
import router from 'next/router';
import Link from 'next/link';
import Contact from '../Contact';
import Slider from '../Slider';
const Dashboard = () => {
  const [dashboard, setDashboard] = useState([]);
  const [resources, setResources] = useState([]);
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [breakfast, setBreakfast] = useState([]);

  useEffect(() => {
    getDashboardFeed().then((res) => {
      setDashboard(res?.data);
    });
    getFeeds({ query: { type: 'resources', limit: '3' } }).then((res) => {
      setResources(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'projects', limit: '3' } }).then((res) => {
      setProjects(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'courses', limit: '3' } }).then((res) => {
      setCourses(res?.data?.feedList);
    });
    getCompetitions({ query: { limit: '3' } }).then((res) => {
      setCompetitions(res?.data?.competitionsList);
    });
    getFeeds({ query: { type: 'breakfasts', limit: '3' } }).then((res) => {
      setBreakfast(res?.data?.feedList);
    });
  }, []);

  return (
    <div>
      <div className="div-block-166 _80">
        <div className="div-block-401">
          <img src="/images/ad.JPG" loading="lazy" width={549} alt />
        </div>
        <div className="div-block-400">
          <div className="text-block-158">
            “Architecture is the learned game, correct and magnificent, of forms
            assembled in the light”
          </div>
          <p className="paragraph-25 right-align">-Le Corbusier</p>
        </div>
      </div>
      <Slider dashboard={dashboard} />
      <div className="background-banner-image wf-section">
        <div className="div-block-399" />
      </div>
      <div className="template">
        <div className="heading-div">
          <div className="div-block-411">
            <h2 className="hero-slide-header-2">Projects</h2>
            <div className="line" />
          </div>
          <div
            data-w-id="38d29e77-bf1b-0e1c-649a-45a2e7decb6a"
            className="div-block-204"
          >
            <Link
              href="/projects"
              as="projects"
              className="dropdown-link-2 w-dropdown-link"
            >
              <a
                data-w-id="38d29e77-bf1b-0e1c-649a-45a2e7decb6b"
                className="link-block-19 w-inline-block"
              >
                <div className="link-6">View All </div>
                <img
                  src={require('../../../assets/images/next.svg')}
                  loading="lazy"
                  width={18}
                  alt
                  className="arrow"
                />
              </a>
            </Link>
          </div>
        </div>
        {projects.length > 0 ? (
          <div className="wrapper-2">
            {projects?.map((proj) => (
              <div className="main-block w-inline-block">
                <img
                  className="image-box"
                  src={proj.media?.url}
                  style={{ height: '300px', width: '100%' }}
                />
                <div className="card-box">
                  <div
                    className="text-block-162"
                    style={{
                      width: '90%',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <strong className="bold-text-3">{proj?.title}</strong>
                    <br />
                  </div>
                  <div className="text-block-6 bold">
                    <strong
                      className={`${styles.truncate_overflow} bold-text-4`}
                    >
                      <span
                        className="box"
                        dangerouslySetInnerHTML={{ __html: proj?.body }}
                      />
                    </strong>
                  </div>
                </div>
                <div className="div-block-70">
                  <Link
                    href="/projects/[id]"
                    as={`/projects/${proj?._id}`}
                    className="dropdown-link-2 w-dropdown-link"
                  >
                    <a className="text-block-64">Read More</a>
                  </Link>
                  <div className="div-block-208">
                    <div className="project-txt past">
                      {proj?.category?.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <img
              src={require('../../../assets/images/empty.png')}
              className="m-8"
              style={{ width: '200px' }}
            />
            <p className="mb-12">No blog found</p>
          </div>
        )}
      </div>

      <div className="template">
        <div className="heading-div">
          <div className="div-block-410">
            <h2 className="hero-slide-header-2">Competitions</h2>
            <div className="line" />
          </div>
          <div
            data-w-id="64ba74b1-c3bc-3ca1-2b51-f4affc83cbe6"
            className="div-block-204"
          >
            <Link
              href="/competitions"
              as="competitions"
              className="dropdown-link-2 w-dropdown-link"
            >
              <a
                data-w-id="38d29e77-bf1b-0e1c-649a-45a2e7decb6b"
                className="link-block-19 w-inline-block"
              >
                <div className="link-6">View All </div>
                <img
                  src={require('../../../assets/images/next.svg')}
                  loading="lazy"
                  width={18}
                  alt
                  className="arrow"
                />
              </a>
            </Link>
          </div>
        </div>
        {competitions?.length > 0 ? (
          <div className="wrapper-2">
            {competitions?.map((comp) => (
              <div className="main-block w-inline-block">
                <img
                  className="image-box"
                  src={comp?.media[0]?.url}
                  style={{ height: '300px', width: '100%' }}
                />
                <div className="card-box">
                  <div
                    className="text-block-162"
                    style={{
                      width: '90%',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <strong className="bold-text-3">{comp?.title}</strong>
                    <br />
                  </div>
                  <div className="text-block-6 bold">
                    <strong
                      className={`${styles.truncate_overflow} bold-text-4`}
                    >
                      <span
                        className="box"
                        dangerouslySetInnerHTML={{
                          __html: comp?.body,
                        }}
                      />
                    </strong>
                  </div>
                </div>
                <div className="div-block-70">
                  <Link
                    href="/competitions/[id]"
                    as={`/competitions/${comp?._id}`}
                    className="dropdown-link-2 w-dropdown-link"
                  >
                    <a className="text-block-64">Read More</a>
                  </Link>
                  <div className="div-block-208">
                    <div className="project-txt past">{comp?.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <img
              src={require('../../../assets/images/empty.png')}
              className="m-8"
              style={{ width: '200px' }}
            />
            <p className="mb-12">No blog found</p>
          </div>
        )}
      </div>
      <div className="services " style={{ paddingBottom: '0px' }}>
        <div className="div-heading">
          <h1 className="heading-2">Our services</h1>
          <div className="line" />
        </div>
        <div className="div-block-193">
          <div className="div-block-373">
            <div
              data-w-id="0659dacf-b1f1-8b88-7636-fdfd1206db46"
              className="div-block-370"
            >
              <div>
                <h3 className="heading-4 black">Service 1</h3>
                <p className="paragraph-8">
                  Students will have hands-on training taking place in the yard
                  and on the road using a tractor-trailer, while under the
                  instruction of a qualified trainer with great efficiency.
                </p>
              </div>
              <div className="div-block-371">
                <a
                  href="#"
                  data-w-id="0659dacf-b1f1-8b88-7636-fdfd1206db4f"
                  className="nav-link-2 sign-in down-button _2222 w-inline-block"
                >
                  <div className="text-block-65">Read more</div>
                  <img
                    src={require('../../../assets/images/arrow.svg')}
                    loading="lazy"
                    width={12}
                    alt
                    className="arrow"
                  />
                  <img
                    src="../../../assets/images/2nd-line.svg"
                    loading="lazy"
                    width={12}
                    alt
                    className="linewhite"
                  />
                </a>
              </div>
            </div>
            <div
              data-w-id="d34583ac-3a46-ce41-27a6-fd6826cb04da"
              className="div-block-370"
            >
              <div>
                <h3 className="heading-4 black">Service 2</h3>
                <p className="paragraph-8">
                  Students will have hands-on training taking place in the yard
                  and on the road using a tractor-trailer, while under the
                  instruction of a qualified trainer with great efficiency.
                </p>
              </div>
              <div className="div-block-371">
                <a
                  href="#"
                  data-w-id="d34583ac-3a46-ce41-27a6-fd6826cb04e3"
                  className="nav-link-2 sign-in down-button _2222 w-inline-block"
                >
                  <div className="text-block-65">Read more</div>
                  <img
                    src={require('../../../assets/images/arrow.svg')}
                    loading="lazy"
                    width={12}
                    alt
                    className="arrow"
                  />
                  <img
                    src="../../../assets/images/2nd-line.svg"
                    loading="lazy"
                    width={12}
                    alt
                    className="linewhite"
                  />
                </a>
              </div>
            </div>
            <div
              data-w-id="af2afc25-5f4a-dab5-1db5-4ba61f6f05e8"
              className="div-block-370"
            >
              <div>
                <h3 className="heading-4 black">Service 3</h3>
                <p className="paragraph-8">
                  Students will have hands-on training taking place in the yard
                  and on the road using a tractor-trailer, while under the
                  instruction of a qualified trainer with great efficiency.
                </p>
              </div>
              <div className="div-block-371">
                <a
                  href="#"
                  data-w-id="af2afc25-5f4a-dab5-1db5-4ba61f6f05f1"
                  className="nav-link-2 sign-in down-button _2222 w-inline-block"
                >
                  <div className="text-block-65">Read more</div>
                  <img
                    src={require('../../../assets/images/arrow.svg')}
                    loading="lazy"
                    width={12}
                    alt
                    className="arrow"
                  />
                  <img
                    src="../../../assets/images/2nd-line.svg"
                    loading="lazy"
                    width={12}
                    alt
                    className="linewhite"
                  />
                </a>
              </div>
            </div>
            <div
              data-w-id="a1c06fa8-1ead-760f-fabc-d9b26e54d7f7"
              className="div-block-370"
            >
              <div>
                <h3 className="heading-4 black">Service 4</h3>
                <p className="paragraph-8">
                  Students will have hands-on training taking place in the yard
                  and on the road using a tractor-trailer, while under the
                  instruction of a qualified trainer with great efficiency.
                </p>
              </div>
              <div className="div-block-371">
                <a
                  href="#"
                  data-w-id="a1c06fa8-1ead-760f-fabc-d9b26e54d800"
                  className="nav-link-2 sign-in down-button _2222 w-inline-block"
                >
                  <div className="text-block-65">Read more</div>
                  <img
                    src={require('../../../assets/images/arrow.svg')}
                    loading="lazy"
                    width={12}
                    alt
                    className="arrow"
                  />
                  <img
                    src="../../../assets/images/2nd-line.svg"
                    loading="lazy"
                    width={12}
                    alt
                    className="linewhite"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="btn-div">
          <Link
            href="/resources"
            as="resources"
            className="dropdown-link-2 w-dropdown-link"
          >
            <a className="button-5 w-inline-block">
              <p className="paragraph-9">View more</p>
              <img
                src={require('../../../assets/images/next.png')}
                width={11}
                alt
                className="arrow1"
              />
            </a>
          </Link>
        </div> */}
      </div>
      <div className="template">
        <div className="heading-div">
          <div className="div-block-409">
            <h2 className="hero-slide-header-2">Latest Products</h2>
            <div className="line" />
          </div>
          <div
            data-w-id="c05d60c0-f468-2744-88ff-015c0cf9504b"
            className="div-block-204"
          >
            <Link
              href="/resources"
              as="resources"
              className="dropdown-link-2 w-dropdown-link"
            >
              <a
                data-w-id="c05d60c0-f468-2744-88ff-015c0cf9504c"
                className="link-block-19 w-inline-block"
              >
                <div className="link-6">View All </div>
                <img
                  src={require('../../../assets/images/next.svg')}
                  loading="lazy"
                  width={18}
                  alt
                  className="arrow"
                />
              </a>
            </Link>
          </div>
        </div>
        {dashboard.length > 0 ? (
          <div className="wrapper-2">
            {dashboard.map((dash, index) =>
              index < 3 ? (
                <a className="main-block w-inline-block">
                  <img
                    className="image-box bg"
                    src={dash?.feed?.media?.url}
                    style={{ height: '300px', width: '100%' }}
                  />
                  <div className="card-box">
                    <div className="div-block-68">
                      <div className="div-block-204">
                        <h1 className="folllowers contact">Contact us</h1>
                        <img
                          src="../../../assets/images/arrow-1.svg"
                          loading="lazy"
                          width={18}
                          alt
                          className="image-36"
                        />
                      </div>
                    </div>
                    <div
                      className="text-block-162"
                      style={{
                        width: '90%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      <strong className="bold-text-3">
                        {dash?.feed?.title}
                      </strong>
                      <br />
                    </div>
                    <div className="text-block-6 bold">
                      <strong
                        className={`${styles.truncate_overflow} bold-text-4`}
                      >
                        <span
                          className="box"
                          dangerouslySetInnerHTML={{
                            __html: dash?.feed?.body,
                          }}
                        />
                      </strong>
                    </div>
                  </div>
                  <div className="div-block-70">
                    <div className="text-block-64">Read More</div>
                    <div className="div-block-208">
                      <div className="project-txt past">
                        {dash?.feed?.category?.name}
                      </div>
                    </div>
                  </div>
                </a>
              ) : null
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <img
              src={require('../../../assets/images/empty.png')}
              className="m-8"
              style={{ width: '200px' }}
            />
            <p className="mb-12">No blog found</p>
          </div>
        )}
      </div>
      <div className="div-block">
        <div className="div-block-2">
          <div className="div-block-3">
            <img
              src="../../../assets/images/about-archi.png"
              loading="lazy"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 45vw, (max-width: 1279px) 46vw, 558px"
              width={558}
              srcSet="images/about-archi-p-500.png 500w, images/about-archi-p-800.png 800w, images/about-archi-p-1080.png 1080w, images/about-archi-p-1600.png 1600w, images/about-archi.png 1728w"
              alt
              className="image-26"
            />
            <div className="div-block-4" />
            <div className="div-block-5">
              <h2 className="heading-10">Lorem ipsum</h2>
            </div>
          </div>
          <div
            data-w-id="e546e88e-4300-c2b2-5ce4-40c6fb0ae65e"
            className="div-block-6"
          >
            <div className="div-block-11">
              <h1 className="heading-2 left">Who we are</h1>
              <div className="line" />
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className="paragraph bo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,{' '}
            </p>
            <div className="div-block-12">
              <a
                onClick={() => {
                  router.push('/about');
                }}
                className="button-5 w-inline-block"
              >
                <p className="paragraph-9">Read more</p>
                <img
                  src={require('../../../assets/images/next.png')}
                  width={11}
                  alt
                  className="arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-slider-2 wf-section">
        <div className="container-500 w-container">
          <div className="div-block-122">
            <div className="div-block-66">
              <div className="div-block-255">
                <div className="div-block-256">
                  <div className="div-block-69">
                    <p className="paragraph-24">
                      If you have any query regarding, feel free to contact us.
                      We are always available to serve you with our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Dashboard;
