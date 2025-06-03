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
    <footer class="tj-footer-three">
        {isHomePage && <Footer_contact />}
        <div class="footer-menu-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="footer-widget footer1-col-1">
                            <div class="footer-content-info">
                                <div class="footer-logo">
                                    <a href="index.html">
                                        <img src="assets/images/logo/footer-logo2.png" alt="Logo" />
                                    </a>
                                </div>
                                <p>
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                    as necessary, making this the first true generator on the Internet.
                                </p>
                                <div class="footer-share">
                                    <ul class="dot-style">
                                        <li>
                                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="footer-widget footer1-col-2">
                            <h4 class="footer_title">Top Links</h4>
                            <div class="widget_nav_menu">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">How it’s Work</a></li>
                                        <li><a href="#">Partners</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">Case Studies</a></li>
                                        <li><a href="#">Priving</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="footer-widget footer1-col-5">
                            <h4 class="footer_title">Contact Us</h4>
                            <div class="widget_contact_menu">
                                <div class="footer-menu">
                                    <ul>
                                        <li>
                                            <span><i class="fa-sharp fa-regular fa-envelope"></i></span>
                                            <a href="mailto:Info@gmail.com">Info@gmail.com</a>
                                        </li>
                                        <li>
                                            <span><i class="fa-solid fa-globe"></i></span><a
                                                href="#">www.website.com</a>
                                        </li>
                                        <li>
                                            <span><i class="fa-sharp fa-solid fa-location-dot"></i></span>
                                            <a href="#">25 Marion, Columbia</a>
                                        </li>
                                        <li>
                                            <span><i class="fa-solid fa-phone-volume"></i></span>
                                            <a href="tel:+00123456789">+ 00 123 456 789</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="footer-widget footer1-col-4">
                            <h4 class="footer_title">Photo Gallery</h4>
                            <div class="widget_gallery popup-gallery">
                                <a class="footer-gallery-item" href="assets/images/gallery/post-1.jpg"><img
                                        src="assets/images/gallery/post-1.jpg" alt="Images" />
                                    <div class="gallery-icon">
                                        <i class="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a class="footer-gallery-item" href="assets/images/gallery/post-2.jpg"><img
                                        src="assets/images/gallery/post-2.jpg" alt="Images" />
                                    <div class="gallery-icon">
                                        <i class="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a class="footer-gallery-item" href="assets/images/gallery/post-3.jpg"><img
                                        src="assets/images/gallery/post-3.jpg" alt="Images" />
                                    <div class="gallery-icon">
                                        <i class="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a class="footer-gallery-item" href="assets/images/gallery/post-4.jpg"><img
                                        src="assets/images/gallery/post-4.jpg" alt="Images" />
                                    <div class="gallery-icon">
                                        <i class="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a class="footer-gallery-item" href="assets/images/gallery/post-5.jpg"><img
                                        src="assets/images/gallery/post-5.jpg" alt="Images" />
                                    <div class="gallery-icon">
                                        <i class="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                                <a class="footer-gallery-item" href="assets/images/gallery/post-6.jpg"><img
                                        src="assets/images/gallery/post-6.jpg" alt="Images" />
                                    <div class="gallery-icon">
                                        <i class="fa-regular fa-plus"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-content-area">
                            <div class="copyright-left-content">
                                <p>
                                    Copyright © 2023 <a href="#" target="_blank"> ThemeJunction. </a> All Rights
                                    Reserved.
                                </p>
                            </div>
                            <div class="copyright-menu">
                                <ul>
                                    <li><a href="#">Setting & Privacy</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-sec-shape">
            <div class="shape-1 pulse">
                <img src="assets/images/shape/footer-shape-1.svg" alt="Images" />
            </div>
            <div class="shape-2 shake-y">
                <img src="assets/images/shape/footer-shape-2.svg" alt="Images" />
            </div>
            <div class="shape-3 shake-y">
                <img src="assets/images/shape/footer-shape-3.svg" alt="Images" />
            </div>
            <div class="shape-4 shake-y">
                <img src="assets/images/shape/footer-shape-4.svg" alt="Images" />
            </div>
            <div class="shape-5 shake-y" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="300">
                <img src="assets/images/shape/footer-shape-5.svg" alt="Images" />
            </div>
        </div>
    </footer>
    {/* <!-- end: Footer Area --> */}
    </>
  )
}

export default Footer
