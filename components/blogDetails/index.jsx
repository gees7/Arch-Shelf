import React,{useEffect, useState} from 'react';
import Link from "next/link";
import { connect } from 'react-redux';
import { getResource, getResources, getProject, getProjects} from '../../store/actions/blogActions';
const index = ({
  id,
  resource,
  resources,
  getResource,
  getResources,
  project,
  projects,
  getProject,
  getProjects,
  type }) => {
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
    if(type === "resources")
    {
      getResources({ query: { type: 'resources', limit: '4' } });
      getResource({ pathParams: { id } });
    }
    if (type === 'projects') {
      getProjects({ query: { type: 'projects', limit: '4' } });
      getProject({ pathParams: { id } });
    }
  }, [id])

  useEffect(() => {
    
    if (type === 'resources') {
      setData(resource?.data);
      setDataList(resources?.data?.feedList);
    }
    if (type === 'projects') {
      setData(project?.data);
      setDataList(projects?.data?.feedList);
    }
  }, [resource,project,resources,projects])

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

  }, [data])

  // console.log(resource,'RESOURCE');
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
                      <div className="title-small">
                        {data?.user?.name}
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
                {/* <p className="paragraph-detials-large">
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  <br />
                  <br />
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  <br />
                  <br />
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy{' '}
                </p> */}
                <p
                  dangerouslySetInnerHTML={{ __html: data?.body }}
                  className="paragraph-detials-large"
                ></p>
                {/* <img
                  src="images/about-archi.png"
                  width={733}
                  sizes="(max-width: 991px) 94vw, 733px"
                  srcSet="images/about-archi-p-500.png 500w, images/about-archi-p-800.png 800w, images/about-archi-p-1080.png 1080w, images/about-archi-p-1600.png 1600w, images/about-archi.png 1728w"
                  alt
                  className="image-41"
                />
                <p className="paragraph-detials-large">
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites
                  Lorem ipsum is the dummy content generator portfolio websites.
                </p> */}
              </div>
              <div className="content-right">
                <div className="stick-wrapper">
                  <div className="subscription-2 hide">
                    <div className="title-large">
                      Subscribe to our newsletter
                    </div>
                    <div className="w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form"
                      >
                        <input
                          type="email"
                          className="text-field-3 w-input"
                          maxLength={256}
                          name="name-2"
                          data-name="Name 2"
                          placeholder="Email address"
                          id="name-2"
                          required
                        />
                        <div className="submit-button-wrap">
                          <input
                            type="submit"
                            defaultValue
                            data-wait="Please wait..."
                            className="submit-button-2 w-button"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/616657e01068e329c0da59bf/616657e11068e319feda59e2_Arrow%20(1).svg"
                            alt
                            className="image-2"
                          />
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="featured-articles">
                    <div className="title-large">Related articles</div>
                    <div className="featured-block">
                      {dataList?.map((item) => (
                        <div className="featured-item-2 w-inline-block my-6">
                          <Link href={'/resources/' + item?._id}>
                            <div className="cursor-pointer flex items-center">
                              <img
                                src={item?.media?.url}
                                width={90}
                                alt
                                className="feature-image-2"
                              />
                              <div className="title-small">{item?.title}</div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <img src="/public/images/ad-3.JPG" loading="lazy" alt />
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