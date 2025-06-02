import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Testimonial from '../component/Testimonial'

export default function About_us() {
  return (
    <div>
      <Navbar />
         <main className="site-content">
        {/* <!-- start: Breadcrumb Area --> */}
        <section className="breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-content-area">
                            <div className="breadcrumb-heading">
                                <h1 className="breadcrumb-title">About Us</h1>
                            </div>
                            <div className="breadcrumb-link">
                                <span>
                                    <a href="index.html">
                                        <span>Home</span>
                                    </a>
                                </span>
                                <i className="fa-light fa-angle-right"></i>
                                <span>
                                    <span>About Us</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tj-breadcrumb-shape">
                <div className="breadcrumb-shape-one">
                    <img src="assets/images/shape/breadcrumb-1.svg" alt="Shape" />
                </div>
                <div className="breadcrumb-shape-two">
                    <img src="assets/images/shape/breadcrumb-2.svg" alt="Shape" />
                </div>
                <div className="breadcrumb-shape-1 pulse">
                    <img src="assets/images/shape/shape-7.svg" alt="Icon" />
                </div>
                <div className="breadcrumb-shape-2 shake-y">
                    <img src="assets/images/shape/shape-4.svg" alt="Icon" />
                </div>
                <div className="breadcrumb-shape-3 pulse">
                    <img src="assets/images/shape/shape-6.svg" alt="Icon" />
                </div>
                <div className="breadcrumb-shape-4 shake-y">
                    <img src="assets/images/shape/shape-4.svg" alt="Icon" />
                </div>
                <div className="breadcrumb-shape-5 pulse">
                    <img src="assets/images/shape/shape-6.svg" alt="Icon" />
                </div>
                <div className="breadcrumb-shape-6 pulse">
                    <img src="assets/images/shape/shape-51.svg" alt="Icon" />
                </div>
                <div className="breadcrumb-shape-7 shake-y">
                    <img src="assets/images/shape/shape-5.svg" alt="Icon" />
                </div>
                <div className="breadcrumb-shape-8 pulse">
                    <img src="assets/images/shape/shape-6.svg" alt="Icon" />
                </div>
            </div>
        </section>
        {/* <!-- end: Breadcrumb Area --> */}

        {/* <!-- start: About Area --> */}
        <section className="tj-about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-12">
                        <div className="about-image-group">
                            <div className="about-circle-box">
                                <img className="circle-one" src="assets/images/shape/ab-shape.svg" alt="Shape" />
                                <div className="ab-circle">
                                    <svg className="shape-1" viewBox="0 0 100 100" width="100" height="100">
                                        <defs>
                                            <path id="circle" d="
                                                  M 50, 50
                                                  m -37, 0
                                                  a 37,37 0 1,1 74,0
                                                  a 37,37 0 1,1 -74,0" />
                                        </defs>
                                        <text font-size="15">
                                            <textPath href="#circle" className="shape-1" >
                                                Creative Minds_, Creative Minds_
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                            <div className="about-image1 pulse">
                                <img src="assets/images/about/about-1.png" alt="Image" />
                            </div>
                            <div className="about-image2 pulse">
                                <img src="assets/images/about/about-2.png" alt="Image" />
                            </div>
                            <div className="about-image3 pulse">
                                <img src="assets/images/about/about-3.png" alt="Image" />
                            </div>
                            <div className="about-image4 pulse">
                                <img src="assets/images/about/about-4.png" alt="Image" />
                            </div>
                            <div className="about-shape1 shake-y">
                                <img src="assets/images/shape/shape-9.svg" alt="Shape" />
                            </div>
                            <div className="about-shape2 pulse">
                                <img src="assets/images/shape/shape-10.svg" alt="Shape" />
                            </div>
                            <div className="about-shape3 pulse">
                                <img src="assets/images/shape/shape-13.svg" alt="Shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="about-content-one sal-animate" data-sal="slide-left" data-sal-duration="1000"
                            data-sal-delay="600">
                            <div className="tj-sec-heading">
                                <span className="sub-title"> About Us</span>
                                <h2 className="sec-title">Making Your Business More Unique</h2>
                                <div className="desc">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form, by injected humour, or
                                        randomised words which don't look even slightly believable.
                                    </p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form,
                                    </p>
                                    <p>
                                        by injected humour, or randomised words which don't look even slightly
                                        believable.
                                    </p>
                                </div>
                                <div className="about-button d-flex">
                                    <a href="about-us.html" className="tj-secondary-btn btn-border"><span>Read
                                            More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section-shape pulse">
                <img src="assets/images/shape/shape-37.svg" alt="Shape" />
            </div>
        </section>
        {/* <!-- end: About Area --> */}

        <Testimonial />
       

        {/* <!-- start: Contact Area --> */}
        <section className="tj-contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-form-area">
                            <div className="contact-left-content" data-sal="slide-right" data-sal-duration="1000"
                                data-sal-delay="300">
                                <div className="tj-sec-heading">
                                    <span className="sub-title">Get In touch</span>
                                    <h2 className="sec-title">Have any Project Plan In your Mind?</h2>
                                    <div className="desc">
                                        <p>
                                            All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                            chunks as necessary, making this the first true generator on the
                                            Internet. It uses a dictionary of over 200 Latin words,
                                        </p>
                                    </div>
                                </div>
                                <div className="comntact-list">
                                    <div className="contact-icon">
                                        <img src="assets/images/icon/phone.svg" alt="Icon" />
                                    </div>
                                    <div className="contact-header">
                                        <span className="d-block">For urgent help</span>
                                        <a href="tel:+0000123456789">+ 0000 123-456-789</a>
                                    </div>
                                </div>
                                <div className="comntact-list">
                                    <div className="contact-icon">
                                        <img src="assets/images/icon/mail.svg" alt="Icon" />
                                    </div>
                                    <div className="contact-header">
                                        <span className="d-block">Mail us 24/7</span>
                                        <a href="mailto:hello@gmail.com">hello@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <form id="contact-form" className="contact-form-box" data-sal="slide-left"
                                data-sal-duration="1000" data-sal-delay="300">
                                <div className="form-input">
                                    <label>Your Name</label>
                                    <input type="text" className="form__input" name="conName" />
                                </div>
                                <div className="form-input">
                                    <label>Email Address</label>
                                    <input type="email" className="form__input" name="conEmail" />
                                </div>
                                <div className="form-textarea">
                                    <label>How can help you?</label>
                                    <textarea id="message" name="conMessage"></textarea>
                                </div>
                                <div className="tj-contact-button">
                                    <button className="btn tj-primary-btn" type="submit">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-section-shape">
                <div className="contact-bg-shape shake-y">
                    <img src="assets/images/shape/shape-31.svg" alt="Shape" />
                </div>
                <div className="contact-bg-shape1 pulse">
                    <img src="assets/images/shape/shape-32.svg" alt="Shape" />
                </div>
                <div className="contact-bg-shape2 pulse">
                    <img src="assets/images/shape/shape-33.svg" alt="Shape" />
                </div>
                <div className="contact-bg-shape3 shake-y">
                    <img src="assets/images/shape/shape-34.svg" alt="Shape" />
                </div>
            </div>
        </section>
        {/* <!-- end: Contact Area --> */}


        {/* <!-- BEGIN: Contact Form Success Modal Message --> */}
        <div className="modal" id="message_sent" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header alert alert-success">
                        <h5 className="modal-title">Message Sent Successfully</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Thank you for contacting us. We will get back to you shortly.<br/>Have a great day!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- END: Contact Form Success Modal Message --> */}


        {/* <!-- BEGIN: Contact Form Fail Modal Message --> */}
        <div className="modal" id="message_fail" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header alert alert-danger">
                        <h5 className="modal-title">Error</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Oops! Something went wrong, please try again.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- END: Contact Form Fail Modal Message End --> */}

    </main>
      <Footer />
    </div>
  )
}
