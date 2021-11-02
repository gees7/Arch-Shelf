import React from 'react';
import Navbar from '../../components/DashboardComponents/Navbar';
import Footer from '../../components/DashboardComponents/Footer';

const AboutUs = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="div-block-97">
          <div className="div-heading">
            <h1 className="heading-2">About Us</h1>
            <div className="line" />
          </div>
        </div>
        <div className="section-74 wf-section">
          <div className="div-block-388">
            <div className="div-block-389">
              <h4 className="heading-36">About Us</h4>
              <div className="div-block-391">
                <h2 className="heading-37">Company Profile</h2>
              </div>
              <div>
                <p className="paragraph-26">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere. Aenean faucibus nibh et justo cursus id
                  rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                  posuere. Aenean faucibus nibh et justo cursus id rutrum lorem
                  imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
                <p className="paragraph-26">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet.{' '}
                </p>
              </div>
              <div className="div-block-395">
                <a href="#" className="button-8 w-button">
                  Know More
                </a>
              </div>
            </div>
            <div className="div-block-390">
              <img src="images/about-us-architecture.png" loading="lazy" alt />
            </div>
          </div>
        </div>
        <div className="section-75 wf-section">
          <div className="div-block-392">
            <div className="div-block-393">
              <h2 className="heading-38">
                Donate your Architecture Books and Work Material
              </h2>
              <div>
                <p className="paragraph-27">
                  “A book lying idle on a shelf is wasted ammunition. Like
                  money, books must be kept in constant circulation… A book is
                  not only a friend, it makes friends for you. When you have
                  possessed a book with mind and spirit, you are enriched. But
                  when you pass it on, ­­you are enriched threefold.” This is an
                  Instance from ‘The Books in My Life’ written by Henry Miller.
                </p>
                <p className="paragraph-27">
                  We at ArchiStudent are working on the same idea of circulation
                  of books. We generally buy books which we don’t need further
                  and then they are just kept like that somewhere in the
                  closets. We invite people to donate the old books which are
                  not in use through our portal. ArchiStudent will help your
                  gently used and old books, architecture drafting tables to
                  reach in the hands of students who need them the most. Let us
                  open the doors to a new world of education and knowledge.
                  Let’s start a cycle of book circulation and let’s make new
                  friends from this.
                </p>
              </div>
              <div className="div-block-395">
                <a href="#" className="button-8 w-button">
                  Contact us
                </a>
              </div>
            </div>
            <div className="div-block-394">
              <img
                src="images/books1.png"
                loading="lazy"
                alt
                className="image-42"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
