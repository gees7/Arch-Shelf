import React from 'react';

const Year = () => {
  return (
    <div>
      <div data-delay={0} data-hover="false" className="dropdown w-dropdown">
        <div className="dropdown-toggle w-dropdown-toggle">
          <div className="icon w-icon-dropdown-toggle" />
          <div>Year</div>
        </div>
        <nav className="dropdown-list-5 w-dropdown-list">
          <div className="div-block-23357">
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
          </div>
          <div className="div-block-23365">
            <ul role="list" className="list-6 w-list-unstyled">
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2021</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2020</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2019</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2018</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2017</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2016</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2015</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2014</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2013</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2012</div>
                </a>
              </li>
              <li className="list-item-4">
                <a href="#" className="link-block-22 w-inline-block">
                  <div>2011</div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Year;
