import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div>
      <div>
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
              <div>
              <h4>Who we are-</h4>
              <p className="paragraph-26">
                Archshelf, a second portal from Archistudent Platform (founded in 2008), is an online collaborative platform and a network for the working professionals, budding architects, designers and aspiring architecture students. It is a feast of knowledge, inspiration and creativity for the architecture fraternity.
                </p>
                <h4>What do we do?</h4>
                <p className="paragraph-26">
                  We at Archshelf promote collaborative approach towards design and believe in providing an exclusive platform for design thinkers and creative minds to excel in the future endeavors and reach new heights. Archshelf serves an influential global audience of design aspirants, architects, planners, landscapers, interior designers, construction professionals, and students of similar fields who are eager to gain knowledge about the latest trends, technology, and product materials. Archshelf is a destination that engages the community in dialogues, debates, and discourses all across.
                  </p>
                  <h4>Why do we do it?</h4>
                  <p className="paragraph-26">
                    Archshelf try to bring together architects, designers, engineers, builders, manufacturers, suppliers, academicians and general people to help develop, share, train and promote excellence in design and construction. We want to be part of the change to help better our lives and well-being through comfort, health and sustainability in our homes and work places.
                    </p>
              </div>
              <div className="div-block-395">
                <Link
                  href="/contact"
                  as="/contact"
                  className="dropdown-link-2 w-dropdown-link"
                >
                  <a className="button-8 w-button">Contact us</a>
                </Link>
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
                <Link
                  href="/contact"
                  as="/contact"
                  className="dropdown-link-2 w-dropdown-link"
                >
                  <a className="button-8 w-button">Contact us</a>
                </Link>
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
      </div>
    </div>
  );
};

export default AboutUs;
