/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./home.scss";
const Home = () => {
  return (
    <div className="productly">
      <header className="productly__header container">
        <img src="./logo.svg" alt="Productly Logo" className="logo" />
        <nav className="productly__nav">
          <a href="#" className="productly__nav-item">
            Products
          </a>
          <a href="#" className="productly__nav-item">
            Customers
          </a>
          <a href="#" className="productly__nav-item">
            Pricing
          </a>
          <a href="#" className="productly__nav-item">
            Resources
          </a>
          <a href="#" className="btn btn--border btn-signin">
            Sign In
          </a>
          <a href="#" className="btn btn--orange btn-signup">
            Sign Up
          </a>
        </nav>
      </header>
      <main className="productly__main container">
        <div className="productly__main-text">
          <h1>The Design Thinking superpowers</h1>
          <p>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <div className="btn-wrapper">
            <button className="btn btn--orange btn--bold btn--large">
              Get Started
            </button>
            <button className="video-btn btn ">
              <img src="./play.svg" alt="Play video" />
              <span>Watch the video</span>
            </button>
          </div>
        </div>
        <div className="productly__main-img">
          <img src="./header-image.svg" alt="Design Thinking" />
        </div>
      </main>
      <section className="productly__features">
        <h2 className="productly__features-heading">
          We design tools to unveil your superpowers
        </h2>
        <div className="productly__features-group">
          <div className="productly__features-container container">
            <div className="productly__feature">
              <div className="productly__feature-icon purple">?</div>
              <h3>First click tests</h3>
              <p>While most people enjoy casino gambling,</p>
            </div>
            <div className="productly__feature">
              <div className="productly__feature-icon yellow">?</div>
              <h3>Design surveys</h3>
              <p>Sports betting, lottery and bingo playing for the fun</p>
            </div>
            <div className="productly__feature">
              <div className="productly__feature-icon red">?</div>
              <h3>Preference tests</h3>
              <p>The Myspace page defines the individual.</p>
            </div>
            <div className="productly__feature">
              <div className="productly__feature-icon light-blue">?</div>
              <h3>Five second tests</h3>
              <p>Personal choices and the overall personality of the person.</p>
            </div>
            <div className="btn-wrapper">
              <button className="btn btn--orange btn--bold btn-signup">
                SIGN UP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="productly__users container">
        <div className="productly__users-group">
          <div className="productly__users-text">
            <p className="productly__users-text-sub-heading">
              Effortless Validation for
            </p>
            <h2 className="productly__users-text-heading">
              Design Professionals
            </h2>
            <p>
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.{" "}
            </p>
            <h4>Accessory makers</h4>
            <p>
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun.
            </p>
            <h4>Alterationists</h4>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money.
            </p>
            <h4>Custom Design designers</h4>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money.
            </p>
          </div>
          <div className="productly__users-img">
            <img src="./user1.svg" alt="Designers" />
          </div>
        </div>
        <div className="productly__users-group image-first">
          <div className="productly__users-img">
            <img src="./user2.svg" alt="Product managers" />
          </div>
          <div className="productly__users-text">
            <p className="productly__users-text-sub-heading">
              Easier decision making for
            </p>
            <h2 className="productly__users-text-heading">Product Managers</h2>
            <p>
              Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior.
            </p>
            <h4>Accessory makers</h4>
            <p>
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun.
            </p>
            <h4>Alterationists</h4>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money.
            </p>
            <h4>Custom Design designers</h4>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money.
            </p>
          </div>
        </div>
        <div className="productly__users-group">
          <div className="productly__users-text">
            <p className="productly__users-text-sub-heading">
              Optimisation for
            </p>
            <h2 className="productly__users-text-heading">Marketers</h2>
            <p>
              Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior.
            </p>
            <h4>Accessory makers</h4>
            <p>
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun.
            </p>
            <h4>Alterationists</h4>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money.
            </p>
            <h4>Custom Design designers</h4>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money.
            </p>
          </div>
          <div className="productly__users-img">
            <img src="./user3.svg" alt="Designers" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
