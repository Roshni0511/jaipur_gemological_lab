import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar />
   <main className="site-content">
        {/* <!-- start: Hero Area --> */}
        <section className="tj-hero-section-three">
            <div className="hero-lg-image">
                <img src="assets/images/banner-bg/hero-image.jpg" alt="Image" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="hero-content-area" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="400">
                            <div className="tj-sec-heading">
                                <span className="white-sub-title">Services Platform</span>
                                <h1 className="title">
                                    The World’s top Creative <span className="black-color">Marketing Agency</span>
                                </h1>
                                <div className="desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <div className="hero-button d-flex">
                                    <a href="contact.html" className="btn tj-black-btn-two">Get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-group-shape">
                <div className="group-1 shake-y">
                    <img src="assets/images/shape/shape-55.svg" alt="Shape" />
                </div>
                <div className="group-2 pulse">
                    <img src="assets/images/shape/shape-56.svg" alt="Shape" />
                </div>
                <div className="group-3 shake-y">
                    <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                </div>
                <div className="group-4 shake-y">
                    <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                </div>
                <div className="group-5 pulse">
                    <img src="assets/images/shape/shape-58.svg" alt="Shape" />
                </div>
                <div className="group-6 pulse"></div>
            </div>
        </section>
        {/* <!-- end: Hero Area --> */}

            {/* <!-- start: About Area --> */}
        <section className="tj-about-section-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-image-group-three hover-shape-border">
                            <div className="gradient-shape pulse">
                                <img src="assets/images/about/about-shape.png" alt="Shape" />
                            </div>
                            <div className="image-group-1" data-sal="slide-right" data-sal-duration="1200"
                                data-sal-delay="600">
                                <img className="about-lg-image" src="assets/images/about/about-7.jpg" alt="About" />
                            </div>
                            <div className="image-group-2" data-sal="slide-left" data-sal-duration="1200"
                                data-sal-delay="600">
                                <img className="about-image" src="assets/images/about/about-8.jpg" alt="About" />
                            </div>
                            <div className="about-group-shape">
                                <div className="shape-1 pulse"></div>
                                <div className="shape-2 shake-y"></div>
                                <div className="shape-3 pulse"></div>
                            </div>
                            <div className="border-shape">
                                <span className="border-shadow shadow-1"></span>
                                <span className="border-shadow shadow-2"></span>
                                <span className="border-shadow shadow-3"></span>
                                <span className="border-shadow shadow-4"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-content-three" data-sal="slide-left" data-sal-duration="1000"
                            data-sal-delay="600">
                            <div className="tj-sec-heading">
                                <span className="secondary-color"> About Us</span>
                                <h2 className="sec-title">Unlock Revenue Growth for Your Business.</h2>
                                <div className="desc">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form, by injected humor.
                                    </p>
                                </div>
                                <div className="about-content">
                                    <div className="about-item">
                                        <div className="about-icon hover-shape-border">
                                            <i className="flaticon-profile"></i>
                                            <div className="icon-shape">
                                                <span className="border-shadow shadow-1"></span>
                                                <span className="border-shadow shadow-2"></span>
                                                <span className="border-shadow shadow-3"></span>
                                                <span className="border-shadow shadow-4"></span>
                                            </div>
                                        </div>
                                        <div className="about-text">
                                            <h5 className="title">Efficiency & Management</h5>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but
                                                the majority. giving information on its origins,
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-item">
                                        <div className="about-icon hover-shape-border">
                                            <i className="flaticon-badge"></i>
                                            <div className="icon-shape">
                                                <span className="border-shadow shadow-1"></span>
                                                <span className="border-shadow shadow-2"></span>
                                                <span className="border-shadow shadow-3"></span>
                                                <span className="border-shadow shadow-4"></span>
                                            </div>
                                        </div>
                                        <div className="about-text">
                                            <h5 className="title">Commitment & Professional</h5>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but
                                                the majority.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-button d-flex">
                                    <a href="about-us.html" className="btn tj-white-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end: About Area --> */}



         {/* <!-- start: Roll Area --> */}
        <section className="tj-roll-section sc-pt-55 sc-pb-55">
            <div className="slide-roll">
                <div className="roll-box roll-box-revers">
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roll-box roll-box-revers">
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-content">
                            <div className="roll-icon">
                                <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div className="roll-text">
                                <h4 className="title">Marketing Agency</h4>
                                <h4 className="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end: Roll Area --> */}

            {/* <!-- start: service Area --> */}
        <section className="tj-service-section-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="tj-sec-heading" data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span className="secondary-color">Our Services</span>
                            <h2 className="sec-title">Service We Provide</h2>
                            <p>
                                It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                the release
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="tj-service-item-three">
                            <div className="service-icon">
                                <i className="flaticon-ui-design"></i>
                            </div>
                            <h4 className="title"><a href="portfolio-details.html">Mobile Apps</a></h4>
                            <p>
                                look like readable English. Many desktop publishing packages and web page editors
                                now use
                            </p>
                            <div className="border-inner"></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="tj-service-item-three">
                            <div className="service-icon">
                                <i className="flaticon-megaphone"></i>
                            </div>
                            <h4 className="title"><a href="portfolio-details.html">Digital Marketing</a></h4>
                            <p>
                                look like readable English. Many desktop publishing packages and web page editors
                                now use
                            </p>
                            <div className="border-inner"></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="tj-service-item-three">
                            <div className="border-inner2"></div>
                            <div className="service-icon">
                                <i className="flaticon-design"></i>
                            </div>
                            <h4 className="title"><a href="portfolio-details.html">Logo Design</a></h4>
                            <p>
                                look like readable English. Many desktop publishing packages and web page editors
                                now use
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="tj-service-item-three">
                            <div className="border-inner2"></div>
                            <div className="service-icon">
                                <i className="flaticon-graphic-design-1"></i>
                            </div>
                            <h4 className="title"><a href="portfolio-details.html">Web Design</a></h4>
                            <p>
                                look like readable English. Many desktop publishing packages and web page editors
                                now use
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="tj-service-video-content" data-sal="slide-left" data-sal-duration="1000"
                            data-sal-delay="600">
                            <div className="desc">
                                <p>
                                    Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. eni, ad minim.
                                </p>
                            </div>
                            <div className="video-area">
                                <div className="video-play">
                                    <a className="venobox popup-videos-button" data-autoplay="true" data-vbtype="video"
                                        href="https://www.youtube.com/watch?v=ADmQTw4qqTY">
                                        <i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                </div>
                                <div className="video-text">
                                    <h6 className="title">Video Presentation</h6>
                                </div>
                            </div>
                            <div className="video-shape shake-y">
                                <img src="assets/images/shape/shape-53.svg" alt="Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-section-shape pulse"></div>
        </section>
        {/* <!-- end: service Area --> */}

          {/* <!-- Start: Portfolio Area --> */}
        <section className="tj-portfolio-section-three inc-colum default-padding">
            <div className="container">
                <div className="row align-items-center portfolio-top">
                    <div className="col-lg-6">
                        <div className="tj-sec-heading" data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span className="secondary-color">Projects We Have</span>
                            <h2 className="sec-title">Our Case Studies</h2>
                            <p>
                                It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                the release
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="filter-menu" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="600">
                            <button className="filter active" data-filter="*">All</button>
                            <button className="filter" data-filter=".development">Web Design</button>
                            <button className="filter" data-filter=".consulting">Motion Design</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" id="portfolio-grid">
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-single-item finance">
                            <div className="portfolio-inner">
                                <div className="portfolio-image">
                                    <img src="assets/images/portfolio/portfolio-15.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-content">
                                    <div className="portfolio-header">
                                        <span className="sub-title">Web Developer</span>
                                        <h3 className="title-link">
                                            <a href="portfolio-details.html">Business Solution</a>
                                        </h3>
                                    </div>
                                    <div className="portfolio-arrow">
                                        <a href="portfolio-details.html"><i className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-single-item consulting finance">
                            <div className="portfolio-inner">
                                <div className="portfolio-image">
                                    <img src="assets/images/portfolio/portfolio-17.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-content">
                                    <div className="portfolio-header">
                                        <span className="sub-title">Web Developer</span>
                                        <h3 className="title-link">
                                            <a href="portfolio-details.html">Business Solution</a>
                                        </h3>
                                    </div>
                                    <div className="portfolio-arrow">
                                        <a href="portfolio-details.html"><i className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-inner">
                                <div className="portfolio-image">
                                    <img src="assets/images/portfolio/portfolio-18.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-content">
                                    <div className="portfolio-header">
                                        <span className="sub-title">Web Developer</span>
                                        <h3 className="title-link">
                                            <a href="portfolio-details.html">Business Solution</a>
                                        </h3>
                                    </div>
                                    <div className="portfolio-arrow">
                                        <a href="portfolio-details.html"><i className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-single-item capital development">
                            <div className="portfolio-inner">
                                <div className="portfolio-image">
                                    <img src="assets/images/portfolio/portfolio-16.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-content">
                                    <div className="portfolio-header">
                                        <span className="sub-title">Web Developer</span>
                                        <h3 className="title-link">
                                            <a href="portfolio-details.html">Business Solution</a>
                                        </h3>
                                    </div>
                                    <div className="portfolio-arrow">
                                        <a href="portfolio-details.html"><i className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-bg-shape">
                <div className="portfolio-shape shake-y">
                    <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                </div>
                <div className="portfolio-shape1 shake-y">
                    <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                </div>
            </div>
        </section>
        {/* <!-- end: Portfolio Area --> */}

        {/* <!-- start: Testimonial Area --> */}
        <section className="tj-testimonial-section-three">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-sec-heading" data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span className="secondary-color">Optional Subtitle</span>
                            <h2 className="sec-title">Praise from Clients</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="thumb-area" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="600">
                            <div className="swiper thumb-slider">
                                <div className="swiper-wrapper thumb_slider">
                                    <div className="swiper-slide thumb_slide">
                                        <div className="thumb-1">
                                            <img src="assets/images/testimonial/test-7.png" alt="Image" />
                                        </div>
                                        <div className="thumb-arrow">
                                            <i className="fa-solid fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div className="swiper-slide thumb_slide">
                                        <div className="thumb-1">
                                            <img src="assets/images/testimonial/test-8.png" alt="Image" />
                                        </div>
                                        <div className="thumb-arrow">
                                            <i className="fa-solid fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div className="swiper-slide thumb_slide">
                                        <div className="thumb-1">
                                            <img src="assets/images/testimonial/test-9.png" alt="Image" />
                                        </div>
                                        <div className="thumb-arrow">
                                            <i className="fa-solid fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-info">
                                <h4 className="title">Piter Bowman</h4>
                                <span className="sub-tilte">CEO, Business Co</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="600">
                        <div className="swiper thumb-slider2">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-slider-item">
                                        <div className="testimonial-rating">
                                            <ul className="dot-style">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star-half-stroke"></i></li>
                                            </ul>
                                        </div>
                                        <p>
                                            Many desktop publishing packages and web page editors now use Lorem
                                            Ipsum as their default model text, and a search for 'lorem ipsum' will
                                            uncover many web sites still in their infancy. Various versions have
                                            evolved over the years, sometimes by accident, injected humour and the
                                            like.
                                        </p>
                                        <p>
                                            Various versions have evolved over the years, sometimes by accident,
                                            injected humour and the like.
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-slider-item">
                                        <div className="testimonial-rating">
                                            <ul className="dot-style">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star-half-stroke"></i></li>
                                            </ul>
                                        </div>
                                        <p>
                                            Many desktop publishing packages and web page editors now use Lorem
                                            Ipsum as their default model text, and a search for 'lorem ipsum' will
                                            uncover many web sites still in their infancy. Various versions have
                                            evolved over the years, sometimes by accident, injected humour and the
                                            like.
                                        </p>
                                        <p>
                                            Various versions have evolved over the years, sometimes by accident,
                                            injected humour and the like.
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-slider-item">
                                        <div className="testimonial-rating">
                                            <ul className="dot-style">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star-half-stroke"></i></li>
                                            </ul>
                                        </div>
                                        <p>
                                            Many desktop publishing packages and web page editors now use Lorem
                                            Ipsum as their default model text, and a search for 'lorem ipsum' will
                                            uncover many web sites still in their infancy. Various versions have
                                            evolved over the years, sometimes by accident, injected humour and the
                                            like.
                                        </p>
                                        <p>
                                            Various versions have evolved over the years, sometimes by accident,
                                            injected humour and the like.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-navigation">
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-sec-shape">
                <div className="shape-one shake-y">
                    <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                </div>
                <div className="shape-two pulse"></div>
                <div className="shape-three shake-y">
                    <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                </div>
            </div>
        </section>
        {/* <!-- end: Testimonial Area --> */}

        {/* <!-- start: Team Area --> */}
        <section className="tj-team-section-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-sec-heading text-center" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span className="secondary-color">How We Work</span>
                            <h2 className="sec-title">Meet Our Team</h2>
                            <div className="desc">
                                <p>
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="tj-team-item-two" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                            <div className="team-image">
                                <img src="assets/images/team/team-10.jpg" alt="Team" />
                            </div>
                            <div className="tj-team-content">
                                <div className="team-share">
                                    <ul className="dot-style">
                                        <li>
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="team-header">
                                    <h5 className="title-link"><a href="#">Alextina Deitarson</a></h5>
                                    <span className="sub-title">UI/UX Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="tj-team-item-two" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
                            <div className="team-image">
                                <img src="assets/images/team/team-11.jpg" alt="Team" />
                            </div>
                            <div className="tj-team-content">
                                <div className="team-share">
                                    <ul className="dot-style">
                                        <li>
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="team-header">
                                    <h5 className="title-link"><a href="#">Alextina Deitarson</a></h5>
                                    <span className="sub-title">UI/UX Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="tj-team-item-two" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                            <div className="team-image">
                                <img src="assets/images/team/team-12.jpg" alt="Team" />
                            </div>
                            <div className="tj-team-content">
                                <div className="team-share">
                                    <ul className="dot-style">
                                        <li>
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="team-header">
                                    <h5 className="title-link"><a href="#">Alextina Deitarson</a></h5>
                                    <span className="sub-title">UI/UX Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="tj-team-item-two" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
                            <div className="team-image">
                                <img src="assets/images/team/team-13.jpg" alt="Team" />
                            </div>
                            <div className="tj-team-content">
                                <div className="team-share">
                                    <ul className="dot-style">
                                        <li>
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="team-header">
                                    <h5 className="title-link"><a href="#">Alextina Deitarson</a></h5>
                                    <span className="sub-title">UI/UX Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-shape pulse">
                <img src="assets/images/shape/shape-16.svg" alt="Shape" />
            </div>
        </section>
        {/* <!-- end: Team Area --> */}

        {/* <!-- start: Video Area --> */}
        <section className="tj-video-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-video-area text-center">
                            <div className="tj-video-popup">
                                <div className="circle pulse video-icon">
                                    <a className="venobox popup-videos-button" data-autoplay="true" data-vbtype="video"
                                        href="https://www.youtube.com/watch?v=ADmQTw4qqTY">
                                        <img src="assets/images/icon/play.svg" alt="Play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-sec-shape">
                <div className="shape-1 shake-y">
                    <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                </div>
                <div className="shape-2 shake-y">
                    <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                </div>
                <div className="shape-3 pulse">
                    <img src="assets/images/shape/shape-61.svg" alt="Shape" />
                </div>
            </div>
        </section>
        {/* <!-- end: Video Area --> */}

        {/* <!-- start: Blog Area --> */}
        <section className="tj-blog-section-three">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-sec-heading text-center" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span className="secondary-color">Latest Blog</span>
                            <h2 className="sec-title">The best studio in the city</h2>
                            <div className="desc">
                                <p>
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                    as necessary, making this the first true generator on the Internet. It uses a
                                    dictionary of over 200 Latin words,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="tj-blog-item-three" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="100">
                            <div className="blog-image">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-15.jpg" alt="Image" /></a>
                            </div>
                            <div className="blog-content-area">
                                <div className="blog-meta-three">
                                    <span><a href="blog-details.html">Business</a></span>
                                    <span>May 22, 2023</span>
                                </div>
                                <h4 className="title-link">
                                    <a href="blog-details.html">Simple Proctives that will help you get better every
                                        day</a>
                                </h4>
                                <div className="tj-blog-button">
                                    <a href="blog-details.html" className="btn tj-white-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="tj-blog-item-three" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="200">
                            <div className="blog-image">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-16.jpg" alt="Image" /></a>
                            </div>
                            <div className="blog-content-area">
                                <div className="blog-meta-three">
                                    <span><a href="blog-details.html">Artificial Inteligence</a></span>
                                    <span>Dec 05, 2023</span>
                                </div>
                                <h4 className="title-link">
                                    <a href="blog-details.html">How data backup & recovery can save your business</a>
                                </h4>
                                <div className="tj-blog-button">
                                    <a href="blog-details.html" className="btn tj-white-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="tj-blog-item-three" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="200">
                            <div className="blog-image">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-17.jpg" alt="Image" /></a>
                            </div>
                            <div className="blog-content-area">
                                <div className="blog-meta-three">
                                    <span><a href="blog-details.html">Business Agency</a></span>
                                    <span>Jan 14, 2023</span>
                                </div>
                                <h4 className="title-link">
                                    <a href="blog-details.html">Search enginess optimizaties for streamline
                                        solutions</a>
                                </h4>
                                <div className="tj-blog-button">
                                    <a href="blog-details.html" className="btn tj-white-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-sec-shape">
                <div className="shape-one pulse">
                    <img src="assets/images/shape/shape-16.svg" alt="Images" />
                </div>
                <div className="shape-two shake-y">
                    <img src="assets/images/shape/shape-52.svg" alt="Images" />
                </div>
                <div className="shape-three pulse"></div>
            </div>
        </section>
        {/* <!-- end: Blog Area --> */}
        </main>
<Footer />
    </>
  )
}

export default Home
