import React from 'react'

export default function Footer_contact() {
  return (
    <div>
       <div className="footer-top-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="contact-right-content " data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="600">
                            <div className="tj-sec-heading">
                                <span className="white-sub-title">Get in touch</span>
                                <h2 className="title">
                                    Get your Free Trial and <span className="black-color">Quotation</span>
                                </h2>
                                <div className="desc">
                                    <p>
                                        All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                        chunks as necessary, making this the first true generator on the Internet.
                                    </p>
                                </div>
                                {/* <div className="comntact-list">
                                    <div className="contact-icon">
                                        <img src="assets/images/icon/phone4.svg" alt="Icon" />
                                    </div>
                                    <div className="contact-header">
                                        <p className="d-block">Phone :</p>
                                        <a href="tel:+9033600020">+91-9033600020</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form id="contact-form2">
                            <div className="contact-form-box3 " data-sal="slide-left" data-sal-duration="1000"
                                data-sal-delay="600">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-input">
                                            <input type="text" className="form__input" placeholder="Name" name="con2Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-input">
                                            <input type="email" className="form__input" placeholder="Email"
                                                name="con2Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-input">
                                            <input type="text" className="form__input"
                                                placeholder="How Can Help You?" name="con2Subject" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-textarea">
                                            <textarea id="message" name="con2Message"
                                                placeholder="Type your query"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="tj-contact-button">
                                    <button className="btn tj-black-btn-two" type="submit" value="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
