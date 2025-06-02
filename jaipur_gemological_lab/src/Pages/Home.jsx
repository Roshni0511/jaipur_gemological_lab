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
        <section class="tj-about-section-three">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="about-image-group-three hover-shape-border">
                            <div class="gradient-shape pulse">
                                <img src="assets/images/about/about-shape.png" alt="Shape" />
                            </div>
                            <div class="image-group-1" data-sal="slide-right" data-sal-duration="1200"
                                data-sal-delay="600">
                                <img class="about-lg-image" src="assets/images/about/about-7.jpg" alt="About" />
                            </div>
                            <div class="image-group-2" data-sal="slide-left" data-sal-duration="1200"
                                data-sal-delay="600">
                                <img class="about-image" src="assets/images/about/about-8.jpg" alt="About" />
                            </div>
                            <div class="about-group-shape">
                                <div class="shape-1 pulse"></div>
                                <div class="shape-2 shake-y"></div>
                                <div class="shape-3 pulse"></div>
                            </div>
                            <div class="border-shape">
                                <span class="border-shadow shadow-1"></span>
                                <span class="border-shadow shadow-2"></span>
                                <span class="border-shadow shadow-3"></span>
                                <span class="border-shadow shadow-4"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="about-content-three" data-sal="slide-left" data-sal-duration="1000"
                            data-sal-delay="600">
                            <div class="tj-sec-heading">
                                <span class="secondary-color"> About Us</span>
                                <h2 class="sec-title">Unlock Revenue Growth for Your Business.</h2>
                                <div class="desc">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form, by injected humor.
                                    </p>
                                </div>
                                <div class="about-content">
                                    <div class="about-item">
                                        <div class="about-icon hover-shape-border">
                                            <i class="flaticon-profile"></i>
                                            <div class="icon-shape">
                                                <span class="border-shadow shadow-1"></span>
                                                <span class="border-shadow shadow-2"></span>
                                                <span class="border-shadow shadow-3"></span>
                                                <span class="border-shadow shadow-4"></span>
                                            </div>
                                        </div>
                                        <div class="about-text">
                                            <h5 class="title">Efficiency & Management</h5>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but
                                                the majority. giving information on its origins,
                                            </p>
                                        </div>
                                    </div>
                                    <div class="about-item">
                                        <div class="about-icon hover-shape-border">
                                            <i class="flaticon-badge"></i>
                                            <div class="icon-shape">
                                                <span class="border-shadow shadow-1"></span>
                                                <span class="border-shadow shadow-2"></span>
                                                <span class="border-shadow shadow-3"></span>
                                                <span class="border-shadow shadow-4"></span>
                                            </div>
                                        </div>
                                        <div class="about-text">
                                            <h5 class="title">Commitment & Professional</h5>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but
                                                the majority.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="about-button d-flex">
                                    <a href="about-us.html" class="btn tj-white-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end: About Area --> */}



         {/* <!-- start: Roll Area --> */}
        <section class="tj-roll-section sc-pt-55 sc-pb-55">
            <div class="slide-roll">
                <div class="roll-box roll-box-revers">
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="roll-box roll-box-revers">
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div class="roll-item">
                        <div class="roll-content">
                            <div class="roll-icon">
                                <img class="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                            </div>
                            <div class="roll-text">
                                <h4 class="title">Marketing Agency</h4>
                                <h4 class="title">Creative Agency</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end: Roll Area --> */}

            {/* <!-- start: service Area --> */}
        <section class="tj-service-section-three">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="tj-sec-heading" data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span class="secondary-color">Our Services</span>
                            <h2 class="sec-title">Service We Provide</h2>
                            <p>
                                It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                the release
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div class="tj-service-item-three">
                            <div class="service-icon">
                                <i class="flaticon-ui-design"></i>
                            </div>
                            <h4 class="title"><a href="portfolio-details.html">Mobile Apps</a></h4>
                            <p>
                                look like readable English. Many desktop publishing packages and web page editors
                                now use
                            </p>
                            <div class="border-inner"></div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div class="tj-service-item-three">
                            <div class="service-icon">
                                <i class="flaticon-megaphone"></i>
                            </div>
                            <h4 class="title"><a href="portfolio-details.html">Digital Marketing</a></h4>
                            <p>
                                look like readable English. Many desktop publishing packages and web page editors
                                now use
                            </p>
                            <div class="border-inner"></div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div class="tj-service-item-three">
                            <div class="border-inner2"></div>
                            <div class="service-icon">
                                <i class="flaticon-design"></i>
                            </div>
                            <h4 class="title"><a href="portfolio-details.html">Logo Design</a></h4>
                            <p>
                                look like readable English. Many desktop publishing packages and web page editors
                                now use
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div class="tj-service-item-three">
                            <div class="border-inner2"></div>
                            <div class="service-icon">
                                <i class="flaticon-graphic-design-1"></i>
                            </div>
                            <h4 class="title"><a href="portfolio-details.html">Web Design</a></h4>
                            <p>
                                look like readable English. Many desktop publishing packages and web page editors
                                now use
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div class="tj-service-video-content" data-sal="slide-left" data-sal-duration="1000"
                            data-sal-delay="600">
                            <div class="desc">
                                <p>
                                    Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. eni, ad minim.
                                </p>
                            </div>
                            <div class="video-area">
                                <div class="video-play">
                                    <a class="venobox popup-videos-button" data-autoplay="true" data-vbtype="video"
                                        href="https://www.youtube.com/watch?v=ADmQTw4qqTY">
                                        <i class="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                </div>
                                <div class="video-text">
                                    <h6 class="title">Video Presentation</h6>
                                </div>
                            </div>
                            <div class="video-shape shake-y">
                                <img src="assets/images/shape/shape-53.svg" alt="Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-section-shape pulse"></div>
        </section>
        {/* <!-- end: service Area --> */}

          {/* <!-- Start: Portfolio Area --> */}
        <section class="tj-portfolio-section-three inc-colum default-padding">
            <div class="container">
                <div class="row align-items-center portfolio-top">
                    <div class="col-lg-6">
                        <div class="tj-sec-heading" data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span class="secondary-color">Projects We Have</span>
                            <h2 class="sec-title">Our Case Studies</h2>
                            <p>
                                It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                the release
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="filter-menu" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="600">
                            <button class="filter active" data-filter="*">All</button>
                            <button class="filter" data-filter=".development">Web Design</button>
                            <button class="filter" data-filter=".consulting">Motion Design</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row" id="portfolio-grid">
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-single-item finance">
                            <div class="portfolio-inner">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/portfolio-15.jpg" alt="Image" />
                                </div>
                                <div class="portfolio-content">
                                    <div class="portfolio-header">
                                        <span class="sub-title">Web Developer</span>
                                        <h3 class="title-link">
                                            <a href="portfolio-details.html">Business Solution</a>
                                        </h3>
                                    </div>
                                    <div class="portfolio-arrow">
                                        <a href="portfolio-details.html"><i class="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-single-item consulting finance">
                            <div class="portfolio-inner">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/portfolio-17.jpg" alt="Image" />
                                </div>
                                <div class="portfolio-content">
                                    <div class="portfolio-header">
                                        <span class="sub-title">Web Developer</span>
                                        <h3 class="title-link">
                                            <a href="portfolio-details.html">Business Solution</a>
                                        </h3>
                                    </div>
                                    <div class="portfolio-arrow">
                                        <a href="portfolio-details.html"><i class="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-inner">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/portfolio-18.jpg" alt="Image" />
                                </div>
                                <div class="portfolio-content">
                                    <div class="portfolio-header">
                                        <span class="sub-title">Web Developer</span>
                                        <h3 class="title-link">
                                            <a href="portfolio-details.html">Business Solution</a>
                                        </h3>
                                    </div>
                                    <div class="portfolio-arrow">
                                        <a href="portfolio-details.html"><i class="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-single-item capital development">
                            <div class="portfolio-inner">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/portfolio-16.jpg" alt="Image" />
                                </div>
                                <div class="portfolio-content">
                                    <div class="portfolio-header">
                                        <span class="sub-title">Web Developer</span>
                                        <h3 class="title-link">
                                            <a href="portfolio-details.html">Business Solution</a>
                                        </h3>
                                    </div>
                                    <div class="portfolio-arrow">
                                        <a href="portfolio-details.html"><i class="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolio-bg-shape">
                <div class="portfolio-shape shake-y">
                    <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                </div>
                <div class="portfolio-shape1 shake-y">
                    <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                </div>
            </div>
        </section>
        {/* <!-- end: Portfolio Area --> */}

        {/* <!-- start: Testimonial Area --> */}
        <section class="tj-testimonial-section-three">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tj-sec-heading" data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span class="secondary-color">Optional Subtitle</span>
                            <h2 class="sec-title">Praise from Clients</h2>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="thumb-area" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="600">
                            <div class="swiper thumb-slider">
                                <div class="swiper-wrapper thumb_slider">
                                    <div class="swiper-slide thumb_slide">
                                        <div class="thumb-1">
                                            <img src="assets/images/testimonial/test-7.png" alt="Image" />
                                        </div>
                                        <div class="thumb-arrow">
                                            <i class="fa-solid fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div class="swiper-slide thumb_slide">
                                        <div class="thumb-1">
                                            <img src="assets/images/testimonial/test-8.png" alt="Image" />
                                        </div>
                                        <div class="thumb-arrow">
                                            <i class="fa-solid fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div class="swiper-slide thumb_slide">
                                        <div class="thumb-1">
                                            <img src="assets/images/testimonial/test-9.png" alt="Image" />
                                        </div>
                                        <div class="thumb-arrow">
                                            <i class="fa-solid fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-info">
                                <h4 class="title">Piter Bowman</h4>
                                <span class="sub-tilte">CEO, Business Co</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="600">
                        <div class="swiper thumb-slider2">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="testimonial-slider-item">
                                        <div class="testimonial-rating">
                                            <ul class="dot-style">
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star-half-stroke"></i></li>
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
                                <div class="swiper-slide">
                                    <div class="testimonial-slider-item">
                                        <div class="testimonial-rating">
                                            <ul class="dot-style">
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star-half-stroke"></i></li>
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
                                <div class="swiper-slide">
                                    <div class="testimonial-slider-item">
                                        <div class="testimonial-rating">
                                            <ul class="dot-style">
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star-half-stroke"></i></li>
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
                            <div class="testimonial-navigation">
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-sec-shape">
                <div class="shape-one shake-y">
                    <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                </div>
                <div class="shape-two pulse"></div>
                <div class="shape-three shake-y">
                    <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                </div>
            </div>
        </section>
        {/* <!-- end: Testimonial Area --> */}

        {/* <!-- start: Team Area --> */}
        <section class="tj-team-section-two">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tj-sec-heading text-center" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span class="secondary-color">How We Work</span>
                            <h2 class="sec-title">Meet Our Team</h2>
                            <div class="desc">
                                <p>
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="tj-team-item-two" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                            <div class="team-image">
                                <img src="assets/images/team/team-10.jpg" alt="Team" />
                            </div>
                            <div class="tj-team-content">
                                <div class="team-share">
                                    <ul class="dot-style">
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-header">
                                    <h5 class="title-link"><a href="#">Alextina Deitarson</a></h5>
                                    <span class="sub-title">UI/UX Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="tj-team-item-two" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
                            <div class="team-image">
                                <img src="assets/images/team/team-11.jpg" alt="Team" />
                            </div>
                            <div class="tj-team-content">
                                <div class="team-share">
                                    <ul class="dot-style">
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-header">
                                    <h5 class="title-link"><a href="#">Alextina Deitarson</a></h5>
                                    <span class="sub-title">UI/UX Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="tj-team-item-two" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                            <div class="team-image">
                                <img src="assets/images/team/team-12.jpg" alt="Team" />
                            </div>
                            <div class="tj-team-content">
                                <div class="team-share">
                                    <ul class="dot-style">
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-header">
                                    <h5 class="title-link"><a href="#">Alextina Deitarson</a></h5>
                                    <span class="sub-title">UI/UX Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="tj-team-item-two" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
                            <div class="team-image">
                                <img src="assets/images/team/team-13.jpg" alt="Team" />
                            </div>
                            <div class="tj-team-content">
                                <div class="team-share">
                                    <ul class="dot-style">
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-header">
                                    <h5 class="title-link"><a href="#">Alextina Deitarson</a></h5>
                                    <span class="sub-title">UI/UX Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-shape pulse">
                <img src="assets/images/shape/shape-16.svg" alt="Shape" />
            </div>
        </section>
        {/* <!-- end: Team Area --> */}

        {/* <!-- start: Video Area --> */}
        <section class="tj-video-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tj-video-area text-center">
                            <div class="tj-video-popup">
                                <div class="circle pulse video-icon">
                                    <a class="venobox popup-videos-button" data-autoplay="true" data-vbtype="video"
                                        href="https://www.youtube.com/watch?v=ADmQTw4qqTY">
                                        <img src="assets/images/icon/play.svg" alt="Play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-sec-shape">
                <div class="shape-1 shake-y">
                    <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                </div>
                <div class="shape-2 shake-y">
                    <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                </div>
                <div class="shape-3 pulse">
                    <img src="assets/images/shape/shape-61.svg" alt="Shape" />
                </div>
            </div>
        </section>
        {/* <!-- end: Video Area --> */}

        {/* <!-- start: Blog Area --> */}
        <section class="tj-blog-section-three">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tj-sec-heading text-center" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span class="secondary-color">Latest Blog</span>
                            <h2 class="sec-title">The best studio in the city</h2>
                            <div class="desc">
                                <p>
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                    as necessary, making this the first true generator on the Internet. It uses a
                                    dictionary of over 200 Latin words,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="tj-blog-item-three" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="100">
                            <div class="blog-image">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-15.jpg" alt="Image" /></a>
                            </div>
                            <div class="blog-content-area">
                                <div class="blog-meta-three">
                                    <span><a href="blog-details.html">Business</a></span>
                                    <span>May 22, 2023</span>
                                </div>
                                <h4 class="title-link">
                                    <a href="blog-details.html">Simple Proctives that will help you get better every
                                        day</a>
                                </h4>
                                <div class="tj-blog-button">
                                    <a href="blog-details.html" class="btn tj-white-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="tj-blog-item-three" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="200">
                            <div class="blog-image">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-16.jpg" alt="Image" /></a>
                            </div>
                            <div class="blog-content-area">
                                <div class="blog-meta-three">
                                    <span><a href="blog-details.html">Artificial Inteligence</a></span>
                                    <span>Dec 05, 2023</span>
                                </div>
                                <h4 class="title-link">
                                    <a href="blog-details.html">How data backup & recovery can save your business</a>
                                </h4>
                                <div class="tj-blog-button">
                                    <a href="blog-details.html" class="btn tj-white-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="tj-blog-item-three" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="200">
                            <div class="blog-image">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-17.jpg" alt="Image" /></a>
                            </div>
                            <div class="blog-content-area">
                                <div class="blog-meta-three">
                                    <span><a href="blog-details.html">Business Agency</a></span>
                                    <span>Jan 14, 2023</span>
                                </div>
                                <h4 class="title-link">
                                    <a href="blog-details.html">Search enginess optimizaties for streamline
                                        solutions</a>
                                </h4>
                                <div class="tj-blog-button">
                                    <a href="blog-details.html" class="btn tj-white-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-sec-shape">
                <div class="shape-one pulse">
                    <img src="assets/images/shape/shape-16.svg" alt="Images" />
                </div>
                <div class="shape-two shake-y">
                    <img src="assets/images/shape/shape-52.svg" alt="Images" />
                </div>
                <div class="shape-three pulse"></div>
            </div>
        </section>
        {/* <!-- end: Blog Area --> */}
        </main>
<Footer />
    </>
  )
}

export default Home
