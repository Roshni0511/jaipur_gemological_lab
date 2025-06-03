import React from 'react'

export default function Footer_contact() {
  return (
    <div>
       <div class="footer-top-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="contact-right-content " data-sal="slide-right" data-sal-duration="1000"
                            data-sal-delay="600">
                            <div class="tj-sec-heading">
                                <span class="white-sub-title">Get in touch</span>
                                <h2 class="title">
                                    Get your Free Trial and <span class="black-color">Quotation</span>
                                </h2>
                                <div class="desc">
                                    <p>
                                        All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                        chunks as necessary, making this the first true generator on the Internet.
                                    </p>
                                </div>
                                <div class="comntact-list">
                                    <div class="contact-icon">
                                        <img src="assets/images/icon/phone4.svg" alt="Icon" />
                                    </div>
                                    <div class="contact-header">
                                        <p class="d-block">Heple Line:</p>
                                        <a href="tel:+000123456789">+ 000 123 456 789</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form id="contact-form2">
                            <div class="contact-form-box3 " data-sal="slide-left" data-sal-duration="1000"
                                data-sal-delay="600">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-input">
                                            <input type="text" class="form__input" placeholder="Name" name="con2Name" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-input">
                                            <input type="email" class="form__input" placeholder="Email"
                                                name="con2Email" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-input">
                                            <input type="text" class="form__input"
                                                placeholder="Business services consultion" name="con2Subject" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-textarea">
                                            <textarea id="message" name="con2Message"
                                                placeholder="Type your query"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="tj-contact-button">
                                    <button class="btn tj-black-btn-two" type="submit" value="submit">
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
