import React from 'react';

const Area = () => {
  return (
    <div>
      <div data-delay={0} data-hover="false" className="dropdown w-dropdown">
        <div className="dropdown-toggle w-dropdown-toggle">
          <div className="icon w-icon-dropdown-toggle" />
          <div>Area</div>
        </div>
        <nav className="dropdown-list-5 w-dropdown-list">
          <div>
            <div
              data-current="Tab 2"
              data-easing="ease"
              data-duration-in={300}
              data-duration-out={100}
              className="w-tabs"
            >
              <div className="tabs-menu-2 w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  className="tab-link-tab-2-2 w-inline-block w-tab-link"
                >
                  <div className="text-block-169">
                    ft<span className="text-span-4">2</span>
                  </div>
                </a>
                <a
                  data-w-tab="Tab 2"
                  className="tab-link-tab-2-2 w-inline-block w-tab-link w--current"
                >
                  <div className="text-block-169">
                    m<span className="text-span-4">2</span>
                  </div>
                </a>
              </div>
              <div className="w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane">
                  <div className="div-block-23366">
                    <div className="w-form">
                      <form
                        id="email-form-2"
                        name="email-form-2"
                        data-name="Email Form 2"
                        className="form-2"
                      >
                        <input
                          type="text"
                          className="text-field-4 w-input"
                          maxLength={256}
                          name="name-2"
                          data-name="Name 2"
                          placeholder
                          id="name-2"
                        />
                        <input
                          type="email"
                          className="text-field-4 w-input"
                          maxLength={256}
                          name="email"
                          data-name="Email"
                          placeholder
                          id="email"
                          required
                        />
                        <input
                          type="submit"
                          defaultValue="Calculate"
                          data-wait="Please wait..."
                          id="w-node-_5be64c56-8bce-24d6-8c74-cc67637c8a23-c97228da"
                          className="submit-button-3 w-button"
                        />
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
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                  <div className="div-block-23366">
                    <div className="w-form">
                      <form
                        id="email-form-2"
                        name="email-form-2"
                        data-name="Email Form 2"
                        className="form-2"
                      >
                        <input
                          type="text"
                          className="text-field-4 w-input"
                          maxLength={256}
                          name="name-2"
                          data-name="Name 2"
                          placeholder
                          id="name-2"
                        />
                        <input
                          type="email"
                          className="text-field-4 w-input"
                          maxLength={256}
                          name="email-2"
                          data-name="Email 2"
                          placeholder
                          id="email-2"
                          required
                        />
                        <input
                          type="submit"
                          defaultValue="Calculate"
                          data-wait="Please wait..."
                          id="w-node-_1518cb6b-40e8-f55a-2135-4f933ad27c34-c97228da"
                          className="submit-button-3 w-button"
                        />
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
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Area;
