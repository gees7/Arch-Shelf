import React, { useState } from 'react';
import { addQuery } from '../../../store/api/queryApi';
import { notification } from 'antd';

const index = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const submit = () => {
    const body = {
      name,
      email,
      phone,
      message,
    };
    addQuery({ body })
      .then((res) => {
        if (res.data._id) {
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          notification.success({
            message: `Thank you! Your submission has been received!`,
          });
        }
      })
      .catch((err) => {
        if (err && err.status === 400) {
          notification.error({
            message: 'Oops! Something went wrong while submitting the form.',
          });
        } else {
          notification.error({
            message: `${err?.data?.error?.message}`,
          });
        }
      });
  };
  return (
    <div>
      <div className="form-section wf-section">
        <div className="container-500 w-container">
          <div className="div-block-82">
            <div className="div-block-33">
              <div
                data-w-id="317b7fca-608e-a18c-0353-8b11f689b156"
                className="faq hide"
              >
                <div className="div-block-72">
                  <div
                    data-w-id="317b7fca-608e-a18c-0353-8b11f689b158"
                    className="dropdown-faq d_f"
                  >
                    <div className="div-block-73">
                      <h4 className="heading-12">
                        what is the process for construction ?
                      </h4>
                      <div className="div-block-75">
                        <div className="div-block-76" />
                        <div className="div-block-77" />
                      </div>
                    </div>
                    <div style={{ height: 0 }} className="answer-10-2">
                      <div className="div-block-74">
                        <p className="paragraph-16">
                          There are many variations of passages of available but
                          the majority have suffered alteration in that some
                          form by injected randomised words which don’t look
                          even as slightly believable now.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-id="317b7fca-608e-a18c-0353-8b11f689b163"
                    className="dropdown-faq"
                  >
                    <div className="div-block-73">
                      <h4 className="heading-12">
                        what is the process for construction ?
                      </h4>
                      <div className="div-block-75">
                        <div className="div-block-76" />
                        <div className="div-block-77" />
                      </div>
                    </div>
                    <div style={{ height: 0 }} className="answer-10-2">
                      <div className="div-block-74">
                        <p className="paragraph-16">
                          There are many variations of passages of available but
                          the majority have suffered alteration in that some
                          form by injected randomised words which don’t look
                          even as slightly believable now.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-id="317b7fca-608e-a18c-0353-8b11f689b16e"
                    className="dropdown-faq"
                  >
                    <div className="div-block-73">
                      <h4 className="heading-12">
                        what is the process for construction ?
                      </h4>
                      <div className="div-block-75">
                        <div className="div-block-76" />
                        <div className="div-block-77" />
                      </div>
                    </div>
                    <div style={{ height: 0 }} className="answer-10-2">
                      <div className="div-block-74">
                        <p className="paragraph-16">
                          There are many variations of passages of available but
                          the majority have suffered alteration in that some
                          form by injected randomised words which don’t look
                          even as slightly believable now.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-id="317b7fca-608e-a18c-0353-8b11f689b179"
                    className="dropdown-faq"
                  >
                    <div className="div-block-73">
                      <h4 className="heading-12">
                        what is the process for construction ?
                      </h4>
                      <div className="div-block-75">
                        <div className="div-block-76" />
                        <div className="div-block-77" />
                      </div>
                    </div>
                    <div style={{ height: 0 }} className="answer-10-2">
                      <div className="div-block-74">
                        <p className="paragraph-16">
                          There are many variations of passages of available but
                          the majority have suffered alteration in that some
                          form by injected randomised words which don’t look
                          even as slightly believable now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={require('../../../assets/images/ad-3.jpg')}
                loading="lazy"
                width={185}
                alt
                className="image-37"
              />
              <img
                src="../../../assets/images/archi-tools.png"
                loading="lazy"
                width={400}
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 56vw, (max-width: 991px) 58vw, 400px"
                srcSet="images/archi-tools-p-500.png 500w, images/archi-tools-p-800.png 800w, images/archi-tools.png 1728w"
                alt
                className="image-37 full"
              />
            </div>
            <div className="div-block-78">
              <div className="div-block-79">
                <div className="text-block-163">Request a free Quote</div>
                <div className="w-form">
                  <form data-name="Email Form" name="email-form">
                    <div className="div-block-80">
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Your-Name"
                        data-name="Your Name"
                        placeholder="Your Name"
                        id="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="div-block-80">
                      <input
                        type="email"
                        className="text-field w-input"
                        maxLength={256}
                        name="Email-Address"
                        data-name="Email Address"
                        placeholder="Email Address "
                        id="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="div-block-80">
                      <input
                        type="tel"
                        className="text-field w-input"
                        maxLength={256}
                        name="Phone-Number"
                        data-name="Phone Number"
                        placeholder="Phone Number"
                        id="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    {/* <div className="div-block-80">
                      <input
                        type="tel"
                        className="text-field w-input"
                        maxLength={256}
                        name="Subject"
                        data-name="Subject"
                        placeholder="Subject"
                        id="Subject"
                      />
                    </div> */}
                    <div className="div-block-80">
                      <textarea
                        name="field-3"
                        maxLength={5000}
                        id="Message"
                        placeholder="Message"
                        className="text-field form-message-box w-input"
                        defaultValue={''}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="div-block-80 form-btn">
                      <a
                        className="submit-button w-button flex items-center justify-center"
                        onClick={submit}
                      >
                        Get a free quote
                      </a>
                      <div className="div-block-81" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
