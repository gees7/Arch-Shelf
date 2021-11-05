import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const Navbar = ({
  dashboard,
  setDashboard,
  resources,
  setResources,
  projects,
  setProjects,
  courses,
  setCourses,
  competitions,
  setCompetitions,
  breakfast,
  setBreakfast,
}) => {
  const router = useRouter();

  const dropdownResource = (
    <Menu>
      {resources?.map((item) => (
        <Menu.Item>
          <div className="drop-div">
            <img src={item?.media?.url} loading="lazy" width={30} alt="" />
            <a
              onClick={() => router.push('/blogDetails/Details')}
              className="dropdown-link-2 w-dropdown-link"
            >
              {item.title}
            </a>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  const dropdownProjects = (
    <Menu>
      {projects?.map((item) => (
        <Menu.Item>
          <div className="drop-div">
            <img src={item?.media?.url} loading="lazy" width={30} />
            <a
              onClick={() => router.push('/blogDetails/Details')}
              className="dropdown-link-2 w-dropdown-link"
            >
              {item?.title}
            </a>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  const dropdownCourses = (
    <Menu>
      {courses?.map((item) => (
        <Menu.Item>
          <div className="drop-div">
            <img src={item?.media?.url} loading="lazy" width={30} alt="" />
            <a
              onClick={() => router.push('/blogDetails/Details')}
              className="dropdown-link-2 w-dropdown-link"
            >
              {item.title}
            </a>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  const dropdownCompetitions = (
    <Menu>
      {competitions?.map((item) => (
        <Menu.Item>
          <div className="drop-div">
            <img src={item?.media?.url} loading="lazy" width={30} alt="" />
            <a
              onClick={() => router.push('/blogDetails/Details')}
              className="dropdown-link-2 w-dropdown-link"
            >
              {item.title}
            </a>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  const dropdownBreakfast = (
    <Menu>
      {breakfast?.map((item) => (
        <Menu.Item>
          <div className="drop-div">
            <img src={item?.media?.url} loading="lazy" width={30} alt="" />
            <a
              onClick={() => router.push('/blogDetails/Details')}
              className="dropdown-link-2 w-dropdown-link"
            >
              {item.title}
            </a>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <div className="drop-div">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="dropdown-link-2 w-dropdown-link"
            onClick={() => router.push('/aboutUs')}
          >
            About Us
          </a>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="drop-div">
          <a
            target="_blank"
            className="dropdown-link-2 w-dropdown-link"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Career
          </a>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="drop-div">
          <a
            target="_blank"
            className="dropdown-link-2 w-dropdown-link"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Services
          </a>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="drop-div">
          <a
            target="_blank"
            className="dropdown-link-2 w-dropdown-link"
            rel="noopener noreferrer"
            onClick={() => router.push('/contactUs')}
          >
            Contact Us
          </a>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div id="Top-container" className="top-container">
          <div className="top-wrapper">
            <div className="left-container">
              <div className="text-block-9">Submit a Project</div>
              <div className="text-block-9">Advertise</div>
            </div>
            <div className="right-container">
              <div className="social-link-wrapper">
                <form action="/search" className="search-2 w-form">
                  <input
                    type="search"
                    className="search-input w-input"
                    maxLength={256}
                    name="query"
                    placeholder="Search…"
                    id="search-2"
                    required
                  />
                  <input
                    type="submit"
                    defaultValue="Search"
                    className="search-button-2 w-button"
                  />
                  <a href="#" className="button-7 w-button">
                    
                  </a>
                </form>
                <a href="#" className="social-link w-inline-block">
                  <img
                    src="/images/twitter.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
                <a href="#" className="social-link w-inline-block">
                  <img
                    src="/images/facebook.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
                <a href="#" className="social-link w-inline-block">
                  <img
                    src="/images/instagram.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
                <a href="#" className="social-link w-inline-block">
                  <img
                    src="/images/linkedin.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container w-container">
          <a
            href="index.html"
            aria-current="page"
            className="brand w-nav-brand w--current"
          >
            <div className="text-block-8">
              <span className="text-span">ARCH</span> SHELF
            </div>
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a
              aria-current="page"
              className="nav-link w-nav-link w--current"
              onClick={() => router.push('/')}
            >
              Home
            </a>
            <div data-hover="true" data-delay="0" className="w-dropdown">
              <div className="w-dropdown-toggle">
                {/* <div className="w-icon-dropdown-toggle"></div> */}
                <Dropdown overlay={dropdownResource}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Resources <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
            <div data-hover="true" data-delay="0" className="w-dropdown">
              <div className="w-dropdown-toggle">
                {/* <div className="w-icon-dropdown-toggle"></div> */}
                <Dropdown overlay={dropdownProjects}>
                  <a
                    className="ant-dropdown-link"
                    // onClick={(e) => e.preventDefault()}
                  >
                    Projects <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
            <div data-hover="true" data-delay="0" className="w-dropdown">
              <div className="w-dropdown-toggle">
                {/* <div className="w-icon-dropdown-toggle"></div> */}
                <Dropdown overlay={dropdownCourses}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Courses <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
            <div data-hover="true" data-delay="0" className="w-dropdown">
              <div className="w-dropdown-toggle">
                {/* <div className="w-icon-dropdown-toggle"></div> */}
                <Dropdown overlay={dropdownCompetitions}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Competitions <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
            <div data-hover="true" data-delay="0" className="w-dropdown">
              <div className="w-dropdown-toggle">
                {/* <div className="w-icon-dropdown-toggle"></div> */}
                <Dropdown overlay={dropdownBreakfast}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Over Breakfast <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
            <div data-hover="true" data-delay="0" className="dropdown-2 w-dropdown">
              <div className="dropdown-toggle-2 w-dropdown-toggle">
                {/* <div className="icon-28 w-icon-dropdown-toggle"></div> */}
                <div className="text-block-14">
                  <Dropdown overlay={menu}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      More <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
              </div>
            </div>
          </nav>
          <div className="w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
