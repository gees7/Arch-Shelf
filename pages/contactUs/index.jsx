import React from 'react';
import Navbar from '../../components/DashboardComponents/Navbar';
import Footer from '../../components/DashboardComponents/Footer';

const contactUs = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="div-block-97">
          <div className="div-heading">
            <h1 className="heading-2">Studio Help Center</h1>
            <div className="line" />
          </div>
        </div>
        <div>
          <div className="div-block-252">
            <div className="div-block-254">
              <h2 className="heading-30">Submit a Request</h2>
              <div className="line" />
              <p className="paragraph-6">
                Contact us and we'll be happy to help out
                <br />
              </p>
            </div>
            <div className="div-block-246">
              <div className="div-block-247">
                <div className="div-block-248">
                  <div className="w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                    >
                      <div className="text-block-164">Full Name</div>
                      <input
                        type="text"
                        className="text-field-2 w-input"
                        maxLength={256}
                        name="name"
                        data-name="Name"
                        placeholder="Your full name"
                        id="name"
                        required
                      />
                      <div className="div-block-250">
                        <div className="half margin-right">
                          <div className="text-block-164">Email</div>
                          <input
                            type="email"
                            className="text-field-2 half w-input"
                            maxLength={256}
                            name="name-4"
                            data-name="Name 4"
                            placeholder="Your Email"
                            id="name-4"
                            required
                          />
                        </div>
                        <div className="half">
                          <div className="text-block-164">Phone</div>
                          <input
                            type="tel"
                            className="text-field-2 half w-input"
                            maxLength={256}
                            name="name-3"
                            data-name="Name 3"
                            placeholder="Phone"
                            id="name-3"
                            required
                          />
                        </div>
                      </div>
                      <div className="text-block-164">Message</div>
                      <textarea
                        placeholder="Describe your request"
                        maxLength={5000}
                        id="field"
                        name="field"
                        data-name="Field"
                        required
                        className="textarea-3 w-input"
                        defaultValue={''}
                      />
                      <div className="div-block-251">
                        <a href="#" className="button-5 nav size w-button">
                          SEND MESSAGE
                        </a>
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
                <div className="div-block-249">
                  <img
                    src="/public/images/Contact-us-amico.png"
                    loading="lazy"
                    style={{ opacity: 0 }}
                    data-w-id="0916cdfa-2b33-253e-54af-e3c012b54623"
                    srcSet="images/Contact-us-amico-p-500.png 500w, images/Contact-us-amico-p-800.png 800w, images/Contact-us-amico-p-1080.png 1080w, images/Contact-us-amico.png 2000w"
                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 63vw, (max-width: 991px) 64vw, (max-width: 1919px) 36vw, 576px"
                    alt
                    className="image-15"
                  />
                  <div className="div-block-253">
                    <h3 className="heading-31">Get in Touch</h3>
                    <a href="mailto:example@gmail.com" className="paragraph-7">
                      Email: example@gmail.com
                    </a>
                    <a href="tel:0001112222" className="paragraph-7">
                      Call: 0001112222
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default contactUs;
