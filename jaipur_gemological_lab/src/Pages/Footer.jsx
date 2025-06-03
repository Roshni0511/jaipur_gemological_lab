import React from 'react'
import Footer_contact from '../component/Footer_contact'
import { useLocation } from 'react-router-dom';
const Footer = () => {
     const location = useLocation();

  // Check if current path is only `/`
  const isHomePage = location.pathname === '/';

  return (
    <>
         {/* <!-- start: Footer Area --> */}
    <footer className="tj-footer-three">
        {isHomePage && <Footer_contact />}
        <div className="footer-menu-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-widget footer1-col-1">
                            <div className="footer-content-info">
                                <div className="footer-logo">
                                    <a href="/">
                                        <img src="/assets/pic/jsl_logo.png" alt="Logo" />
                                    </a>
                                </div>
                                <p>
                                   Rudraksha and Gemstone Testing Laboratory is a certified Dehradun-based lab offering authentic testing for Rudraksha, gemstones, malas, and diamonds.
                                </p>
                                <div className="footer-share">
                                    <ul className="dot-style">
                                        <li>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-widget footer1-col-2">
                            <h4 className="footer_title">Quick Links</h4>
                            <div className="widget_nav_menu">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/About_us">About Us</a></li>
                                        <li><a href="/Service">Services</a></li>
                                        <li><a href="/VerifyCertificate">Verify Certificate</a></li>
                                        <li><a href="/Contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-widget footer1-col-2">
                            <h4 className="footer_title">Policy</h4>
                            <div className="widget_nav_menu">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/Privacypolicy">Privacy Policy</a></li>
                                        <li><a href="/Termsandcondition">Term & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-widget footer1-col-4">
                            <h4 className="footer_title">Photo Gallery</h4>
                            <div className="widget_gallery popup-gallery">
                                <a className="footer-gallery-item" href="assets/images/gallery/post-1.jpg"><img
                                        src="assets/images/gallery/post-1.jpg" alt="Images" />
                                    <div className="gallery-icon">
                                        <i className="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a className="footer-gallery-item" href="assets/images/gallery/post-2.jpg"><img
                                        src="assets/images/gallery/post-2.jpg" alt="Images" />
                                    <div className="gallery-icon">
                                        <i className="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a className="footer-gallery-item" href="assets/images/gallery/post-3.jpg"><img
                                        src="assets/images/gallery/post-3.jpg" alt="Images" />
                                    <div className="gallery-icon">
                                        <i className="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a className="footer-gallery-item" href="assets/images/gallery/post-4.jpg"><img
                                        src="assets/images/gallery/post-4.jpg" alt="Images" />
                                    <div className="gallery-icon">
                                        <i className="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a className="footer-gallery-item" href="assets/images/gallery/post-5.jpg"><img
                                        src="assets/images/gallery/post-5.jpg" alt="Images" />
                                    <div className="gallery-icon">
                                        <i className="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a className="footer-gallery-item" href="assets/images/gallery/post-6.jpg"><img
                                        src="assets/images/gallery/post-6.jpg" alt="Images" />
                                    <div className="gallery-icon">
                                        <i className="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-content-area justify-content-center">
                            <div className="copyright-left-content">
                                <p>
                                   © Copyright 2023 | All Rights Reserved |<a href="https://successinnovativetechnologiespvtltd.com/" target="_blank"> Proudly Powered by Success Innovative Technologies Pvt Ltd </a> 
                                </p>
                            </div>
                            {/* <div className="copyright-menu">
                                <ul>
                                    <li><a href="#">Setting & Privacy</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-sec-shape">
            <div className="shape-1 pulse">
                <img src="assets/images/shape/footer-shape-1.svg" alt="Images" />
            </div>
            <div className="shape-2 shake-y">
                <img src="assets/images/shape/footer-shape-2.svg" alt="Images" />
            </div>
            <div className="shape-3 shake-y">
                <img src="assets/images/shape/footer-shape-3.svg" alt="Images" />
            </div>
            <div className="shape-4 shake-y">
                <img src="assets/images/shape/footer-shape-4.svg" alt="Images" />
            </div>
            <div className="shape-5 shake-y" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="300">
                <img src="assets/images/shape/footer-shape-5.svg" alt="Images" />
            </div>
        </div>
    </footer>
    {/* <!-- end: Footer Area --> */}
    </>
  )
}

export default Footer
