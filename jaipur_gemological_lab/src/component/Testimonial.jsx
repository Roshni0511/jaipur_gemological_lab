import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
  return (
    <div>
      {/* <!-- start: Testimonial Area --> */}
      <section className="tj-testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-top-area">
                <div className="tj-sec-heading">
                  <span className="sub-title">Testimonials</span>
                  <h2 className="sec-title">What Our Customer Say About Us</h2>
                </div>
                <div className="testimonial-right-content">
                  <p>
                    It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container testimonial-slider">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="tj-testimonial-slider swiper"
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 8500 }}
                pagination={{ clickable: true }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Pagination]}
              >
                <SwiperSlide>
                  <div className="testimonial-item">
                    <div className="testimonial-top-content">
                      <div className="testimonial-left-content">
                        <div className="auother-image">
                          <img
                            src="assets/images/testimonial/test-1.png"
                            alt="Erika Wagner"
                          />
                        </div>
                        <div className="auother-text">
                          <h4 className="title">Erika Wagner</h4>
                          <span className="sub-title">Chief lil UX Designer</span>
                        </div>
                      </div>
                      <div className="testimonial-right-content">
                        <div className="testimonial-rating">
                          <ul className="dot-style">
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-regular fa-star-half-stroke"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="testimonial-quote">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="44"
                            viewBox="0 0 60 44"
                            fill="none"
                          >
                            <g opacity="0.3">
                              <path
                                d="M0.573543 43.6491C0.382362 42.3418 0.238976 40.9878 0.143385 39.5872C0.0477951 38.1865 0 37.1594 0 36.5057C0 30.2495 1.14709 24.3201 3.44126 18.7175C5.73543 13.0215 8.55535 8.21259 11.901 4.29077L26.9565 7.65233C25.1403 11.6675 23.6586 16.1963 22.5116 21.2386C21.4601 26.281 20.9343 31.0899 20.9343 35.6653C20.9343 35.8521 20.9343 36.2723 20.9343 36.9259C20.9343 37.4862 20.9343 38.1865 20.9343 39.0269C21.0299 39.7739 21.0777 40.5676 21.0777 41.408C21.1733 42.2484 21.2689 42.9954 21.3645 43.6491H0.573543Z"
                                fill="#DCDEE7"
                              />
                              <path
                                d="M59.4259 0.0126953C59.6171 1.31997 59.7605 2.67393 59.8561 4.07458C59.9517 5.47523 59.9995 6.50238 59.9995 7.15602C59.9995 13.4123 58.8524 19.3884 56.5582 25.0843C54.2641 30.687 51.4441 35.4492 48.0985 39.371L33.043 36.0094C34.8592 31.9942 36.293 27.4654 37.3445 22.4231C38.4916 17.3808 39.0652 12.5719 39.0652 7.9964C39.0652 7.80965 39.0652 7.43614 39.0652 6.87588C39.0652 6.22224 39.0174 5.52192 38.9218 4.77491C38.9218 3.93451 38.874 3.09412 38.7784 2.25373C38.7784 1.41334 38.7306 0.66633 38.635 0.0126953H59.4259Z"
                                fill="#DCDEE7"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h4 className="test-title">Customers Review</h4>
                    <p>
                      Many desktop publishing web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will uncover many web
                      sites still in
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-item">
                    <div className="testimonial-top-content">
                      <div className="testimonial-left-content">
                        <div className="auother-image">
                          <img
                            src="assets/images/testimonial/test-2.png"
                            alt="Erika Wagner"
                          />
                        </div>
                        <div className="auother-text">
                          <h4 className="title">Erika Wagner</h4>
                          <span className="sub-title">Chief lil UX Designer</span>
                        </div>
                      </div>
                      <div className="testimonial-right-content">
                        <div className="testimonial-rating">
                          <ul className="dot-style">
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-regular fa-star-half-stroke"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="testimonial-quote">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="44"
                            viewBox="0 0 60 44"
                            fill="none"
                          >
                            <g opacity="0.3">
                              <path
                                d="M0.573543 43.6491C0.382362 42.3418 0.238976 40.9878 0.143385 39.5872C0.0477951 38.1865 0 37.1594 0 36.5057C0 30.2495 1.14709 24.3201 3.44126 18.7175C5.73543 13.0215 8.55535 8.21259 11.901 4.29077L26.9565 7.65233C25.1403 11.6675 23.6586 16.1963 22.5116 21.2386C21.4601 26.281 20.9343 31.0899 20.9343 35.6653C20.9343 35.8521 20.9343 36.2723 20.9343 36.9259C20.9343 37.4862 20.9343 38.1865 20.9343 39.0269C21.0299 39.7739 21.0777 40.5676 21.0777 41.408C21.1733 42.2484 21.2689 42.9954 21.3645 43.6491H0.573543Z"
                                fill="#DCDEE7"
                              />
                              <path
                                d="M59.4259 0.0126953C59.6171 1.31997 59.7605 2.67393 59.8561 4.07458C59.9517 5.47523 59.9995 6.50238 59.9995 7.15602C59.9995 13.4123 58.8524 19.3884 56.5582 25.0843C54.2641 30.687 51.4441 35.4492 48.0985 39.371L33.043 36.0094C34.8592 31.9942 36.293 27.4654 37.3445 22.4231C38.4916 17.3808 39.0652 12.5719 39.0652 7.9964C39.0652 7.80965 39.0652 7.43614 39.0652 6.87588C39.0652 6.22224 39.0174 5.52192 38.9218 4.77491C38.9218 3.93451 38.874 3.09412 38.7784 2.25373C38.7784 1.41334 38.7306 0.66633 38.635 0.0126953H59.4259Z"
                                fill="#DCDEE7"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h4 className="test-title">Customers Review</h4>
                    <p>
                      Many desktop publishing web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will uncover many web
                      sites still in
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-item">
                    <div className="testimonial-top-content">
                      <div className="testimonial-left-content">
                        <div className="auother-image">
                          <img
                            src="assets/images/testimonial/test-3.png"
                            alt="Erika Wagner"
                          />
                        </div>
                        <div className="auother-text">
                          <h4 className="title">Erika Wagner</h4>
                          <span className="sub-title">Chief lil UX Designer</span>
                        </div>
                      </div>
                      <div className="testimonial-right-content">
                        <div className="testimonial-rating">
                          <ul className="dot-style">
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i className="fa-regular fa-star-half-stroke"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="testimonial-quote">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="44"
                            viewBox="0 0 60 44"
                            fill="none"
                          >
                            <g opacity="0.3">
                              <path
                                d="M0.573543 43.6491C0.382362 42.3418 0.238976 40.9878 0.143385 39.5872C0.0477951 38.1865 0 37.1594 0 36.5057C0 30.2495 1.14709 24.3201 3.44126 18.7175C5.73543 13.0215 8.55535 8.21259 11.901 4.29077L26.9565 7.65233C25.1403 11.6675 23.6586 16.1963 22.5116 21.2386C21.4601 26.281 20.9343 31.0899 20.9343 35.6653C20.9343 35.8521 20.9343 36.2723 20.9343 36.9259C20.9343 37.4862 20.9343 38.1865 20.9343 39.0269C21.0299 39.7739 21.0777 40.5676 21.0777 41.408C21.1733 42.2484 21.2689 42.9954 21.3645 43.6491H0.573543Z"
                                fill="#DCDEE7"
                              />
                              <path
                                d="M59.4259 0.0126953C59.6171 1.31997 59.7605 2.67393 59.8561 4.07458C59.9517 5.47523 59.9995 6.50238 59.9995 7.15602C59.9995 13.4123 58.8524 19.3884 56.5582 25.0843C54.2641 30.687 51.4441 35.4492 48.0985 39.371L33.043 36.0094C34.8592 31.9942 36.293 27.4654 37.3445 22.4231C38.4916 17.3808 39.0652 12.5719 39.0652 7.9964C39.0652 7.80965 39.0652 7.43614 39.0652 6.87588C39.0652 6.22224 39.0174 5.52192 38.9218 4.77491C38.9218 3.93451 38.874 3.09412 38.7784 2.25373C38.7784 1.41334 38.7306 0.66633 38.635 0.0126953H59.4259Z"
                                fill="#DCDEE7"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h4 className="test-title">Customers Review</h4>
                    <p>
                      Many desktop publishing web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will uncover many web
                      sites still in
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* If you need a separate pagination container, uncomment below: */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>

        <div className="testimonial-section-shape">
          <div className="testmonial-shape1">
            <img src="assets/images/shape/shape-17.svg" alt="Shape" />
          </div>
          <div className="testmonial-shape2">
            <img src="assets/images/shape/shape-15.svg" alt="Shape" />
          </div>
          <div className="testmonial-shape3 pulse">
            <img src="assets/images/shape/shape-15.svg" alt="Shape" />
          </div>
          <div className="testmonial-shape4 pulse">
            <img src="assets/images/shape/shape-18.svg" alt="Shape" />
          </div>
        </div>
      </section>
      {/* <!-- end: Testimonial Area --> */}
    </div>
  );
}
