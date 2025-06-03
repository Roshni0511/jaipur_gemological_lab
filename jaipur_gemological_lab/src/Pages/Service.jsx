import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Testimonial from '../component/Testimonial'

const Service = () => {
  return (
    <>
      <Navbar />

         <main class="site-content">
        {/* <!-- start: Breadcrumb Area --> */}
        <section class="breadcrumb-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-content-area">
                            <div class="breadcrumb-heading">
                                <h1 class="breadcrumb-title">Our Services</h1>
                            </div>
                            <div class="breadcrumb-link">
                                <span>
                                    <a href="index.html">
                                        <span>Home</span>
                                    </a>
                                </span>
                                <i class="fa-light fa-angle-right"></i>
                                <span>
                                    <span>Our Services</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tj-breadcrumb-shape">
                <div class="breadcrumb-shape-one">
                    <img src="assets/images/shape/breadcrumb-1.svg" alt="Shape" />
                </div>
                <div class="breadcrumb-shape-two">
                    <img src="assets/images/shape/breadcrumb-2.svg" alt="Shape" />
                </div>
                <div class="breadcrumb-shape-1 pulse">
                    <img src="assets/images/shape/shape-7.svg" alt="Icon" />
                </div>
                <div class="breadcrumb-shape-2 shake-y">
                    <img src="assets/images/shape/shape-4.svg" alt="Icon" />
                </div>
                <div class="breadcrumb-shape-3 pulse">
                    <img src="assets/images/shape/shape-6.svg" alt="Icon" />
                </div>
                <div class="breadcrumb-shape-4 shake-y">
                    <img src="assets/images/shape/shape-4.svg" alt="Icon" />
                </div>
                <div class="breadcrumb-shape-5 pulse">
                    <img src="assets/images/shape/shape-6.svg" alt="Icon" />
                </div>
                <div class="breadcrumb-shape-6 pulse">
                    <img src="assets/images/shape/shape-51.svg" alt="Icon" />
                </div>
                <div class="breadcrumb-shape-7 shake-y">
                    <img src="assets/images/shape/shape-5.svg" alt="Icon" />
                </div>
                <div class="breadcrumb-shape-8 pulse">
                    <img src="assets/images/shape/shape-6.svg" alt="Icon" />
                </div>
            </div>
        </section>
        {/* <!-- end: Breadcrumb Area --> */}

        {/* <!-- start: Service Area --> */}
        <section class="tj-service-section service-inner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tj-sec-heading text-center " data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="600">
                            <span class="sub-title"> Our Services</span>
                            <h2 class="sec-title">Service We Provide</h2>
                            <div class="desc">
                                <p>
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 " data-sal="slide-up" data-sal-duration="1000"
                        data-sal-delay="100">
                        <div class="tj-service-item text-center">
                            <div class="service-inner">
                                <div class="service-icon">
                                    <i class="flaticon-design"></i>
                                    <img class="image-1" src="assets/images/shape/service-image.svg" alt="Shape" />
                                    <img class="image-2" src="assets/images/shape/service-image1.svg" alt="Shape" />
                                </div>
                                <div class="service-content">
                                    <h4 class="title-link">
                                        <a href="service-details.html">Testing Gems Stone</a>
                                    </h4>
                                    <p>
                                        All Gemstones are Lab Tested & Certified. So, with each Gemstone, you will receive a Laboratory Report which guarantees the authenticity of the Gemstone you buy. Each gemstone is graded very carefully on the Quality parameters, so that the customer gets the best value for money. Since we are direct importers of gemstones, we do not have any middlemen involved and hence we are able to give the best quality gemstone at the best price
                                    </p>
                                </div>
                                   <div className="about-button d-flex">
                                    <a href="" className="tj-secondary-btn btn-border"><span>
                                            Read more</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 " data-sal="slide-up" data-sal-duration="1000"
                        data-sal-delay="200">
                        <div class="tj-service-item text-center">
                            <div class="service-inner">
                                <div class="service-icon">
                                    <i class="flaticon-graphic-design-1"></i>
                                    <img class="image-1" src="assets/images/shape/service-image.svg" alt="Shape" />
                                    <img class="image-2" src="assets/images/shape/service-image1.svg" alt="Shape" />
                                </div>
                                <div class="service-content">
                                    <h4 class="title-link">
                                        <a href="service-details.html">Testing Diamond Jewellery</a>
                                    </h4>
                                    <p>
                                       We testing Diamond Jewellery like test by clarity F L, I F, V V S I-V V S 2, V S 2, S I 1-V S 2, S I 1-S S 2, I 1, I 2, I 3 & test colour in D to Z, we also test nose pin, ring, earing, pendant, bracelet, bangle’s, necklace etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 " data-sal="slide-up" data-sal-duration="1000"
                        data-sal-delay="300">
                        <div class="tj-service-item text-center">
                            <div class="service-inner">
                                <div class="service-icon">
                                    <i class="flaticon-ui-design"></i>
                                    <img class="image-1" src="assets/images/shape/service-image.svg" alt="Shape" />
                                    <img class="image-2" src="assets/images/shape/service-image1.svg" alt="Shape" />
                                </div>
                                <div class="service-content">
                                    <h4 class="title-link">
                                        <a href="service-details.html">Testing Rudraksh</a>
                                    </h4>
                                    <p>
                                   Some times a higher valued Rudraksha (Gaurishankar Rudraksha or a Trijuti) are made by artificially joining two or three Rudraksha with the help of glue etc. In case of doubt such Rudraksha should be boiled in water for one to two hours. A sharp discoloration will take place at the joint in case of artificial Rudraksha.The test wherein the Rudraksha Bead dips in water (commonly known as water test) is not dependable. A fool proof method is to cut the Rudraksha bead horizontally. One will find the same number of compartments as that of the number of lines . However the drawback the bead gets destroyed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 " data-sal="slide-up" data-sal-duration="1000"
                        data-sal-delay="400">
                        <div class="tj-service-item text-center">
                            <div class="service-inner">
                                <div class="service-icon">
                                    <i class="flaticon-megaphone"></i>
                                    <img class="image-1" src="assets/images/shape/service-image.svg" alt="Shape" />
                                    <img class="image-2" src="assets/images/shape/service-image1.svg" alt="Shape" />
                                </div>
                                <div class="service-content">
                                    <h4 class="title-link">
                                        <a href="service-details.html">Testing Rudraksh Mala</a>
                                    </h4>
                                    <p>
                           The range of Rudraksha Mala exported and supplied by us is made from genuine rudraksha provided in different mukhis and kanthas. Since long time, yogis have worn Rudraksha Mala in search of tranquility. To activate six senses and concentrate better, avail the rudraksha malas offered by us. These malas can be availed at the most affordable prices.Our prime vision is to provide utmost level of satisfaction to the clients. To accomplish the same, we offer superlative Incense sticks that are widely used for prayers & other religious purposes and for spreading fragrance, which creates a peaceful atmosphere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div class="service-section-shape">
                <div class="service-bg-shape pulse">
                    <img src="assets/images/shape/shape-14.svg" alt="Shape" />
                </div>
                <div class="service-bg-shape1">
                    <img src="assets/images/shape/shape-15.svg" alt="Shape" />
                </div>
                <div class="service-bg-shape2">
                    <img src="assets/images/shape/shape-14.svg" alt="Shape" />
                </div>
                <div class="service-bg-shape3 pulse">
                    <img src="assets/images/shape/shape-15.svg" alt="Shape" />
                </div>
                <div class="service-bg-shape4 pulse">
                    <img src="assets/images/shape/shape-16.svg" alt="Shape" />
                </div>
            </div>
        </section>
        {/* <!-- end: Service Area --> */}
<div className='mb-5'>

<Testimonial />
</div>

    </main>

      <Footer />
    </>
  )
}

export default Service
