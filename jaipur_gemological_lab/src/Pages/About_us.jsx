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
                                            <a href="/">
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
                                        <img src="/assets/pic/manik-stone-1.jpg" alt="Image" />
                                    </div>
                                    <div className="about-image2 pulse">
                                        <img src="/assets/pic/yellow-sapphire.jpg" alt="Image" />
                                    </div>
                                    <div className="about-image3 pulse">
                                        <img src="/assets/pic/gems_1.png" alt="Image" />
                                    </div>
                                    <div className="about-image4 pulse">
                                        <img src="/assets/pic/Original_Panch.webp" alt="Image" />
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
                                <div className="about-content-one " data-sal="slide-left" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <div className="tj-sec-heading">
                                        <span className="sub-title"> About Us</span>
                                        <h2 className="sec-title" > Certified Gems & Rudraksh Experts</h2>

                                        <div className="desc">
                                            <p >
                                                JSL Diamond & Gems Testing Laboratory – Rudraksh Research Center is providing its dedicated services from last 10 years. From Last 5 years we are into the research field of Gems & Rudraksh. We have setup our Gemological Laboratory Last Year. We visited all possible places to get more knowledge in the field of Research of Gems, Rudraksh and Diamonds. JSL deals in testing for All Kinds of Gems (Coral, Saphire, Emerald, Ruby, Moon Stone, Diamonds etc) and Rudraksh of all mukhis. We also Provide Certificate & Box Pack Gem & Rudraksh with every Certified Gem which can be confirmed from our website.</p>
                                            <p>
                                                Our Advanced Lab assures you to provide better report always. We test every product with all Latest & Quality Equipments which ensures that you’ll get reliable reports with satisfaction.
                                            </p>
                                            {/* <p>
                                  We Don’t Sale any Gem, Rudraksh and related products !! We just Test them in our Well Established Lab and provide you report on basis of its quality. We also provide a certificate with all Tested Gems, Rudraksh and related product. This certificate can also be checked on our website to confirm the originality of it
                                    </p> */}
                                            <ul>
                                                <li>Special Prices for Bulk Testing of Products.</li>
                                                <li>Special Brand Name Box Packing available</li>
                                            </ul>
                                        </div>
                                        <div className="about-button d-flex">
                                            <a href="" className="tj-secondary-btn btn-border"><span>Read
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

                {/* <!-- start: Service Area --> */}
                <section className="tj-service-section-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tj-sec-heading" data-sal="slide-right" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <span className="sub-title">Certified Trust</span>
                                    <h2 className="sec-title">
                                        JSL Gems – Our Identity, <span className="active-color">Your Trust </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tj-service-item-two" data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="100">
                                    <div className="service-content-info">
                                        <div className="service-left-content">
                                            <div className="service-icon">
                                                <i className="flaticon-digital-marketing"></i>
                                            </div>
                                            <div className="service-text">
                                                <h3 className="title-link">
                                                    <a className="sec-title" href="">About JSL Gems</a>
                                                </h3>
                                                <span className="number">01</span>
                                            </div>
                                        </div>
                                        <div className="service-wrapper">
                                            <img src="/assets/pic/nat021.jpg" alt="Image" />
                                        </div>
                                    </div>
                                    <div className="service-middle-content">
                                        <div className="service-text">
                                            <div className="desc">
                                                <p>
                                                    I also want to thank you for you swift, professional, informative and friendly service, it is refreshing and comforting to know that there are people out there that you can trust and who care about the service that they give as well the quality of the product that they sell.
                                                </p>
                                            </div>
                                            {/* <div className="service-tags">
                                        <span className="btn text-btn">Creative</span>
                                        <span className="btn text-btn">Accessibility</span>
                                    </div> */}
                                        </div>
                                        <div className="service-arrow">
                                            <a href="/About_us"><i className="flaticon-next"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tj-service-item-two" data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="200">
                                    <div className="service-content-info">
                                        <div className="service-left-content">
                                            <div className="service-icon">
                                                <i className="flaticon-enlargement"></i>
                                            </div>
                                            <div className="service-text">
                                                <h3 className="title-link">
                                                    <a className="sec-title" href="">Why Choose Us</a>
                                                </h3>
                                                <span className="number">02</span>
                                            </div>
                                        </div>
                                        <div className="service-wrapper">
                                            <img src="/assets/pic/1a.gemstones.png" alt="Image" />
                                        </div>
                                    </div>
                                    <div className="service-middle-content">
                                        <div className="service-text">
                                            <div className="desc">
                                                <p>
                                                    We know choosing the perfect gemstone is an extremely important decision. We aim to make our customer’s search as easy as possible and to educate the consumer about the differences between a natural and certified gemstone and an artificially enhanced or synthetic gem. Simply put, quality, rarity, and value are the cornerstones of our gemstone business.
                                                </p>
                                            </div>
                                            {/* <div className="service-tags">
                                        <span className="btn text-btn">Creative</span>
                                        <span className="btn text-btn">Accessibility</span>
                                    </div> */}
                                        </div>
                                        <div className="service-arrow">
                                            <a href="/About_us"><i className="flaticon-next"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="service-group-shape">
                        <div className="service-shape pulse">
                            <img src="assets/images/shape/shape-42.svg" alt="Shape" />
                        </div>
                        <div className="service-shape1 pulse">
                            <img src="assets/images/shape/shape-42.svg" alt="Shape" />
                        </div>
                    </div>
                </section>
                {/* <!-- end: Service Area --> */}


                {/* <!-- start: Contact Area --> */}
                <section className="tj-contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-form-area">
                                    <div className="contact-left-content " data-sal="slide-right" data-sal-duration="1000"
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
                                        {/* <div className="comntact-list">
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
                                        </div> */}
                                    </div>
                                    <form id="contact-form" className="contact-form-box  " data-sal="slide-left"
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
                                <p>Thank you for contacting us. We will get back to you shortly.<br />Have a great day!</p>
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
