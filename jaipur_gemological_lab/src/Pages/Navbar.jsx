import React from 'react'

const Navbar = () => {
  return (
    <>
       {/* <!-- start: Mobile Menu --> */}
    <div id="tj-overlay-bg2" className="tj-overlay-canvas d-lg-none"></div>
    <div className="tj-offcanvas-area d-lg-none">
        <div className="tj-offcanvas-header d-flex align-items-center justify-content-between">
            <div className="logo-area text-center">
                <a href="index.html"><img src="assets/images/logo/white-logo.png" alt="Logo" /></a>
            </div>
            <div className="offcanvas-icon">
                <a id="canva_close" href="#">
                    <i className="fa-light fa-xmark"></i>
                </a>
            </div>
        </div>
        <div className="tj-search-box">
            <form action="#">
                <input type="text" name="search" id="search" placeholder="Search" />
                <a href="#"> <i className="fal fa-search"></i></a>
            </form>
        </div>
        <nav className="right_menu_togle mobile-navbar-menu d-lg-none" id="mobile-navbar-menu"></nav>
        <div className="mobile-contact">
            <div className="contact-menu">
                <ul className="dot-style">
                    <li>
                        <span><i className="fa-sharp fa-regular fa-envelope"></i></span>
                        <a href="mailto:Info@gmail.com">Info@gmail.com</a>
                    </li>
                    <li>
                        <span><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                        <a href="#">225 Marion Street, Columbia</a>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-phone-volume"></i></span>
                        <a href="tel:+00123456789">+ 00 123 456 789</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="mobile-share">
            <ul className="dot-style">
                <li>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                </li>
            </ul>
        </div>
        <div className="header-button">
            <a className="btn tj-black-btn" href="contact.html">Contact Us</a>
        </div>
    </div>
    {/* <!-- end: Mobile Menu --> */}

    {/* <!-- start: Header Area --> */}
    <header className="tj-header-area header-style-three header-sticky">
        <div className="container-fluid">
            <div className="menu-area">
                <div className="logo-area">
                    <div className="logo">
                        <a href="index.html"><img src="assets/images/logo/dark-logo2.png" alt="Logo" /></a>
                    </div>
                </div>
                <div className="tj-menu-area d-lg-block d-none" id="main-menu">
                    <nav id="mobile-menu">
                        <ul>
                            <li className="has-dropdown">
                                <a href="index.html">Home</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="index.html">Home One</a>
                                    </li>
                                    <li>
                                        <a href="index2.html">Home Two</a>
                                    </li>
                                    <li className="active">
                                        <a className="active" href="index2.html">Home Two</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="about-us.html">About Us</a>
                            </li>
                            <li className="has-dropdown">
                                <a href="service.html">Services</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="service.html">Services</a>
                                    </li>
                                    <li><a href="service-details.html">Services Details</a></li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="portfolio.html">Portfolio</a>
                                    </li>
                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                    <li><a href="faq.html">Faq</a></li>
                                    <li><a href="team.html">Team</a></li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="blog-grid.html">Blog</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog-grid.html">Blog Grid</a>
                                    </li>
                                    <li><a href="blog-standard.html">Blog Standard</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-button d-flex d-none d-lg-block">
                    <a href="contact.html" className="btn tj-white-btn">Contact Us</a>
                </div>
                <div className="tj-canva-two d-lg-none">
                    <a className="canva_expander nav-menu-link menu-button" href="#">
                        <span className="dot1"></span>
                        <span className="dot2"></span>
                        <span className="dot3"></span>
                        <span className="dot4"></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- end: Header Area --> */}
    </>
  )
}

export default Navbar
