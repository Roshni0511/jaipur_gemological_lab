import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      
    {/* <!-- start: Breadcrumb Area --> */}
    <section class="breadcrumb-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-content-area">
                        <div class="breadcrumb-heading">
                            <h1 class="breadcrumb-title">Contact Us</h1>
                        </div>
                        <div class="breadcrumb-link">
                            <span>
                                <a href="index.html">
                                    <span>Home</span>
                                </a>
                            </span>
                            <i class="fa-light fa-angle-right"></i>
                            <span>
                                <span>Contact Us</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tj-breadcrumb-shape">
            <div class="breadcrumb-shape-one">
                <img src="assets/images/shape/breadcrumb-1.svg" alt="Shape" />
            </div>
            <div class="breadcrumb-shape-two">
                <img src="assets/images/shape/breadcrumb-2.svg" alt="Shape" />
            </div>
            <div class="breadcrumb-shape-1 pulse">
                <img src="assets/images/shape/shape-7.svg" alt="Icon" />
            </div>
            <div class="breadcrumb-shape-2 shake-y">
                <img src="assets/images/shape/shape-4.svg" alt="Icon" />
            </div>
            <div class="breadcrumb-shape-3 pulse">
                <img src="assets/images/shape/shape-6.svg" alt="Icon" />
            </div>
            <div class="breadcrumb-shape-4 shake-y">
                <img src="assets/images/shape/shape-4.svg" alt="Icon" />
            </div>
            <div class="breadcrumb-shape-5 pulse">
                <img src="assets/images/shape/shape-6.svg" alt="Icon" />
            </div>
            <div class="breadcrumb-shape-6 pulse">
                <img src="assets/images/shape/shape-51.svg" alt="Icon" />
            </div>
            <div class="breadcrumb-shape-7 shake-y">
                <img src="assets/images/shape/shape-5.svg" alt="Icon" />
            </div>
            <div class="breadcrumb-shape-8 pulse">
                <img src="assets/images/shape/shape-6.svg" alt="Icon" />
            </div>
        </div>
    </section>
    {/* <!-- end: Breadcrumb Area --> */}

    {/* <!-- start: Contact Area --> */}
    <section class="tj-contact-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact-form-area ">
                        <div class="contact-left-content " data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="300">
                            <div class="tj-sec-heading">
                                <span class="sub-title">Get In touch</span>
                                <h2 class="sec-title">Have any Project Plan In your Mind?</h2>
                                <div class="desc">
                                    <p>
                                        All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                        chunks as necessary, making this the first true generator on the Internet.
                                        It uses a dictionary of over 200 Latin words,
                                    </p>
                                </div>
                            </div>
                            <div class="comntact-list">
                                <div class="contact-icon">
                                    <img src="assets/images/icon/phone.svg" alt="Icon" />
                                </div>
                                <div class="contact-header">
                                    <span class="d-block">For urgent help</span>
                                    <a href="tel:+0000123456789">+ 0000 123-456-789</a>
                                </div>
                            </div>
                            <div class="comntact-list">
                                <div class="contact-icon">
                                    <img src="assets/images/icon/mail.svg" alt="Icon" />
                                </div>
                                <div class="contact-header">
                                    <span class="d-block">Mail us 24/7</span>
                                    <a href="mailto:hello@gmail.com">hello@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <form id="contact-form" class="contact-form-box " data-sal="slide-left" data-sal-duration="1000"
                            data-sal-delay="300">
                            <div class="form-input">
                                <label>Your Name</label>
                                <input type="text" class="form__input" name="conName" />
                            </div>
                            <div class="form-input">
                                <label>Email Address</label>
                                <input type="email" class="form__input" name="conEmail" />
                            </div>
                            <div class="form-textarea">
                                <label>How can help you?</label>
                                <textarea id="message" name="conMessage"></textarea>
                            </div>
                            <div class="tj-contact-button">
                                <button class="btn tj-primary-btn" type="submit">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-section-shape">
            <div class="contact-bg-shape shake-y">
                <img src="assets/images/shape/shape-31.svg" alt="Shape" />
            </div>
            <div class="contact-bg-shape1 pulse">
                <img src="assets/images/shape/shape-32.svg" alt="Shape" />
            </div>
            <div class="contact-bg-shape2 pulse">
                <img src="assets/images/shape/shape-33.svg" alt="Shape" />
            </div>
            <div class="contact-bg-shape3 shake-y">
                <img src="assets/images/shape/shape-34.svg" alt="Shape" />
            </div>
        </div>
    </section>
    {/* <!-- end: Contact Area --> */}
      <Footer />
    </>
  )
}

export default Contact
