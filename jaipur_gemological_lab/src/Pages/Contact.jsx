import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      
    {/* <!-- start: Breadcrumb Area --> */}
    <section className="breadcrumb-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-content-area">
                        <div className="breadcrumb-heading">
                            <h1 className="breadcrumb-title">Contact Us</h1>
                        </div>
                        <div className="breadcrumb-link">
                            <span>
                                <a href="/">
                                    <span>Home</span>
                                </a>
                            </span>
                            <i className="fa-light fa-angle-right"></i>
                            <span>
                                <span>Contact Us</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="tj-breadcrumb-shape">
                <div className="breadcrumb-shape-one">
                    <img src="assets/images/shape/shape-55.svg" alt="Shape" />
                </div>
                <div className="breadcrumb-shape-two">
                    <img src="assets/images/shape/breadcrumb-2.svg" alt="Shape" />
                </div>
                <div className="breadcrumb-shape-1 pulse">
                    <img src="assets/images/shape/shape-55.svg" alt="Icon" />
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

    {/* <!-- start: Contact Area --> */}
    <section className="tj-contact-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact-form-area ">
                        <div className="contact-left-content " data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="300">
                            <div className="tj-sec-heading">
                                <span className="sub-title">Get In touch</span>
                                <h2 className="sec-title">How Can We help?</h2>
                                <div className="desc">
                                    <p>
                                       We are here to provide you with expert guidance and support tailored to your needs. Whether you have questions, need assistance with our services, or want personalized advice, our dedicated team is ready to listen and offer solutions that make your experience smooth and satisfying. Reach out anytime, and let us help you achieve your goals with ease and confidence.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="comntact-list">
                                <div className="contact-icon">
                                    <img src="assets/images/icon/phone.svg" alt="Icon" />
                                </div>
                                <div className="contact-header">
                                    <span className="d-block">For urgent help</span>
                                    <a href="tel:+0000123456789">+ 0000 123-456-789</a>
                                </div>
                            </div> */}
                            {/* <div className="comntact-list">
                                <div className="contact-icon">
                                    <img src="assets/images/icon/mail.svg" alt="Icon" />
                                </div>
                                <div className="contact-header">
                                    <span className="d-block">Mail us 24/7</span>
                                    <a href="mailto:hello@gmail.com">hello@gmail.com</a>
                                </div>
                            </div> */}
                        </div>
                        <form id="contact-form" className="contact-form-box " data-sal="slide-left" data-sal-duration="1000"
                            data-sal-delay="300">
                            <div className="form-input">
                                <label>Your Name</label>
                                <input type="text" className="form__input" name="conName" />
                            </div>
                            <div className="form-input">
                                <label>Email Address</label>
                                <input type="email" className="form__input" name="conEmail" />
                            </div>
                            
                                        <div className="form-input">
                                               <label>How Can We help?</label>
                                            <input type="text" className="form__input"
                                               name="con2Subject" />
                                        </div>
                              
                               
                                        <div className="form-textarea">
                                               <label>Message</label>
                                            <textarea id="message" name="con2Message"
                                                ></textarea>
                                        </div>
                                          <div className="about-button d-flex">
                                    <a href="" className="tj-secondary-btn btn-border"><span>
                                            Submit</span></a>
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
      <Footer />
    </>
  )
}

export default Contact
