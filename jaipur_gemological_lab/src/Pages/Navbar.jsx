import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isCanvasExpanded, setIsCanvasExpanded] = useState(false);

  // Whenever `isCanvasExpanded` changes, add/remove the class on <body>
  useEffect(() => {
    document.body.classList.toggle("canvas_expanded", isCanvasExpanded);
    // Cleanup is not strictly necessary here, because toggling off is done by the line above.
  }, [isCanvasExpanded]);

  // common handler for opening/closing the canvas
  const toggleCanvas = (e) => {
    e.preventDefault();
    setIsCanvasExpanded((prev) => !prev);
  };

  return (
    <>
      {/* <!-- start: Mobile Menu --> */}
      <div
        id="tj-overlay-bg2"
        className="tj-overlay-canvas d-lg-none"
        onClick={toggleCanvas}
      ></div>

      <div className="tj-offcanvas-area d-lg-none">
        <div className="tj-offcanvas-header d-flex align-items-center justify-content-between">
          <div className="logo-area text-center">
            <a href="">
              <img src="/assets/pic/jsl_logo.png" alt="Logo" />
            </a>
          </div>
          {/* “Close” button inside the offcanvas */}
          <div className="offcanvas-icon">
            <a id="canva_close" href="#" onClick={toggleCanvas}>
              <i className="fa-light fa-xmark"></i>
            </a>
          </div>
        </div>

        <div className="tj-search-box">
          <form action="#">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
            <a href="#">
              <i className="fal fa-search"></i>
            </a>
          </form>
        </div>

        <nav
          className="right_menu_togle mobile-navbar-menu d-lg-none"
          id="mobile-navbar-menu"
        >  </nav>

        <div className="mobile-contact">
          <div className="contact-menu">
            <ul className="dot-style">
              <li>
                <span>
                  <i className="fa-sharp fa-regular fa-envelope"></i>
                </span>
                <a href="mailto:Info@gmail.com">Info@gmail.com</a>
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                </span>
                <a href="#">225 Marion Street, Columbia</a>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <a href="tel:+00123456789">+ 00 123 456 789</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile-share">
          <ul className="dot-style">
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="header-button">
          <a className="btn tj-black-btn" href="">
            Contact Us
          </a>
        </div>
      </div>
      {/* <!-- end: Mobile Menu --> */}

      {/* <!-- start: Header Area --> */}
      <header className="tj-header-area header-style-three header-sticky">
        <div className="container-fluid">
          <div className="menu-area">
            <div className="logo-area">
              <div className="logo">
                <a href="">
                  <img src="/assets/pic/jsl_logo.png" alt="Logo" />
                </a>
              </div>
            </div>

            <div
              className="tj-menu-area d-lg-block d-none"
              id="main-menu"
            >
              <nav id="mobile-menu">
                <ul>
                  {/* <li className="has-dropdown">
                    <a href="">Home</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="">Home One</a>
                      </li>
                      <li>
                        <a href="">Home Two</a>
                      </li>
                      <li className="active">
                        <a className="active" href="">
                          Home Two
                        </a>
                      </li>
                    </ul>
                  </li> */}
                   <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/About_us">About Us</a>
                  </li>
                  <li>
                    <a href="/Service">Services</a>
                  </li>
                  <li>
                    <a href="/VerifyCertificate">Verify Certificate</a>
                  </li>
                   <li>
                    <a href="/Contact">Contact Us</a>
                  </li>
                  {/* <li className="has-dropdown">
                    <a href="">Services</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="">Services</a>
                      </li>
                      <li>
                        <a href="">
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="has-dropdown">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="">Portfolio</a>
                      </li>
                      <li>
                        <a href="">
                          Portfolio Details
                        </a>
                      </li>
                      <li>
                        <a href="">Faq</a>
                      </li>
                      <li>
                        <a href="">Team</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="">Blog Grid</a>
                      </li>
                      <li>
                        <a href="">Blog Standard</a>
                      </li>
                      <li>
                        <a href="">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li> */}
                </ul>
              </nav>
            </div>

            <div className="header-button d-flex d-none d-lg-block">
              <a href="" className="btn tj-white-btn">
                Contact Us
              </a>
            </div>

            <div className="tj-canva-two d-lg-none">
              {/* “Hamburger” (open-canvas) button */}
              <a
                className="canva_expander nav-menu-link menu-button"
                href="#"
                onClick={toggleCanvas}
              >
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
  );
};

export default Navbar;
