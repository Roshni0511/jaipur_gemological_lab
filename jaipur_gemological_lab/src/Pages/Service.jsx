import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import Testimonial from '../component/Testimonial'
import Our_Service from "../component/Our_Service";

const Service = () => {
   
  return (
    <>
      <Navbar />

         <main className="site-content">
        {/* <!-- start: Breadcrumb Area --> */}
        <section className="breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-content-area">
                            <div className="breadcrumb-heading">
                                <h1 className="breadcrumb-title">Our Services</h1>
                            </div>
                            <div className="breadcrumb-link">
                                <span>
                                    <a href="/">
                                        <span>Home</span>
                                    </a>
                                </span>
                                <i className="fa-light fa-angle-right"></i>
                                <span>
                                    <span>Our Services</span>
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

        {/* <!-- start: Service Area --> */}
      <Our_Service />
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
