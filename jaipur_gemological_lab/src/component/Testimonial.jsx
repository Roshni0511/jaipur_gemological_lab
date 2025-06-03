import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
  return (
    <div>
      {/* <!-- start: Testimonial Area --> */}
      <section className="tj-testimonial-section pb-0">
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
                pagination={{ clickable: true , el: '.swiper-pagination'}}
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
                    slidesPerView: 2.5,
                  },
                }}
                modules={[Autoplay, Pagination]}
              >
                <SwiperSlide>
  <div className="testimonial-item">
    <div className="testimonial-top-content">
      <div className="testimonial-left-content">
        <div className="auother-image">
          <img src="/assets/pic/avatar-5.jpg" alt="Rajesh Sharma" />
        </div>
        <div className="auother-text">
          <h4 className="title">Rajesh Sharma</h4>
          <span className="sub-title">Spiritual Healer</span>
        </div>
      </div>
      <div className="testimonial-right-content">
        <div className="testimonial-rating">
          <ul className="dot-style">
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-regular fa-star-half-stroke"></i></li>
          </ul>
        </div>
        <div className="testimonial-quote">
          {/* SVG code here */}
        </div>
      </div>
    </div>
    <h4 className="test-title">Customer Review</h4>
    <p>
      I purchased a Rudraksh Mala from this website and noticed a positive shift in my energy. 
      Truly authentic products and great service!
    </p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-item">
    <div className="testimonial-top-content">
      <div className="testimonial-left-content">
        <div className="auother-image">
          <img src="/assets/pic/avatar-5.jpg" alt="Anjali Desai" />
        </div>
        <div className="auother-text">
          <h4 className="title">Anjali Desai</h4>
          <span className="sub-title">Yoga Instructor</span>
        </div>
      </div>
      <div className="testimonial-right-content">
        <div className="testimonial-rating">
          <ul className="dot-style">
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
          </ul>
        </div>
        <div className="testimonial-quote">
          {/* SVG code here */}
        </div>
      </div>
    </div>
    <h4 className="test-title">Customer Review</h4>
    <p>
      The gemstone I bought was not only beautiful but also came with a proper lab certificate. 
      Very satisfied with the quality and packaging.
    </p>
  </div>
</SwiperSlide>


               <SwiperSlide>
  <div className="testimonial-item">
    <div className="testimonial-top-content">
      <div className="testimonial-left-content">
        <div className="auother-image">
          <img src="/assets/pic/avatar-5.jpg" alt="Mahesh Trivedi" />
        </div>
        <div className="auother-text">
          <h4 className="title">Mahesh Trivedi</h4>
          <span className="sub-title">Astrologer</span>
        </div>
      </div>
      <div className="testimonial-right-content">
        <div className="testimonial-rating">
          <ul className="dot-style">
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-regular fa-star"></i></li>
          </ul>
        </div>
        <div className="testimonial-quote">
          {/* SVG code here */}
        </div>
      </div>
    </div>
    <h4 className="test-title">Customer Review</h4>
    <p>
      Excellent collection of spiritual gemstones. The site is trustworthy and delivery is timely. 
      Recommended to my clients too.
    </p>
  </div>
</SwiperSlide>

                
              </Swiper>
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
