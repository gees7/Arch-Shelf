import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategories, getProjects } from '../../store/actions/blogActions';

const Categories = ({
  categories,
  getCategories,
  catId,
  setCatId,
  open,
  setOpen,
}) => {
  useEffect(() => {
    getCategories({ query: { categoryType: 'projects' } });
  }, []);

  return (
    <div>
      <div data-delay={0} data-hover="false" className="dropdown w-dropdown">
        <div
          onClick={() => setOpen(!open)}
          className="dropdown-toggle w-dropdown-toggle"
        >
          <div className="icon w-icon-dropdown-toggle" />
          <div>Categories</div>
        </div>
        <nav
          className={
            open
              ? 'dropdown-list-5 p-6 w-dropdown-list bg-white block'
              : 'dropdown-list-5 p-6 w-dropdown-list bg-white '
          }
        >
          <div className="div-block-23358">
            <div className="div-block-23359">
              {/* <div className="div-block-23360">
                <div className="text-block-168">Categories</div>
              </div> */}
              {categories?.categories.length > 0 ? (
                <ul role="list" className="list-6 w-list-unstyled">
                  <li className="list-item-4 cursor-pointer">
                    <div
                      className="link-block-22 w-inline-block capitalize"
                      onClick={() => {
                        setCatId('');
                        setOpen(false);
                      }}
                    >
                      <div
                        className="font-bold underline"
                        className={!catId ? 'font-bold underline' : ''}
                      >
                        All
                      </div>
                    </div>
                  </li>
                  {categories?.categories?.map((item) => (
                    <li className="list-item-4 cursor-pointer" key={item?._id}>
                      <div
                        onClick={() => {
                          setCatId(item?._id);
                          setOpen(false);
                        }}
                        data-w-id="57e5c763-6324-7567-b6cc-1ad3c6e1fef1"
                        className="link-block-22 w-inline-block capitalize"
                      >
                        <div
                          className={
                            item?._id == catId ? 'font-bold underline' : ''
                          }
                        >
                          {item?.name}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                'No category found'
              )}
            </div>
            {/* <div className="div-block-23359">
              <div className="card-1">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-2">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-3">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-4">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-5">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-6">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-7">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-8">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-9">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-10">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-11">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-12">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className="div-block-23359">
              <div className="card-2">
                <div className="div-block-23360">
                  <div className="text-block-168">
                    <br />
                  </div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-4">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-5">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className="div-block-23359">
              <div className="card-4">
                <div className="div-block-23360">
                  <div className="text-block-168">Residential Architecture</div>
                </div>
                <ul role="list" className="w-list-unstyled">
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Housing</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Apartment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Loft</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Penthouse</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 w-inline-block">
                      <div>Coliving</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Houses</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-block-22 bold w-inline-block">
                      <div>Social Houses</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </nav>
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
  getProjects: (payload) => dispatch(getProjects(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
