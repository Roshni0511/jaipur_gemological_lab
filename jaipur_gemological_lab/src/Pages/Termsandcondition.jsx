import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Termsandcondition = () => {
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
                                <h1 className="breadcrumb-title">Terms and condition</h1>
                            </div>
                            <div className="breadcrumb-link">
                                <span>
                                    <a href="/">
                                        <span>Home</span>
                                    </a>
                                </span>
                                <i className="fa-light fa-angle-right"></i>
                                <span>
                                    <span>Terms and condition</span>
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

    <div className='tj-portfolio-section-three tj-sec-heading'>
  <div>
    <div className="container">
      <h2 className='sec-title' style={{marginBottom:'30px'}}>Terms & Conditions – Jaipur Solitaire Lab</h2>
      <p >Welcome to Jaipur Solitaire Lab. By using our website or services, you agree to the following Terms & Conditions. Please read them carefully before proceeding.</p>

      <div  style={{marginBottom:'30px'}}>
        <h4>1. Service Overview</h4>
        <p>Jaipur Solitaire Lab offers gem testing, grading, and certification services. Our assessments are conducted by qualified professionals using standard industry tools and methods.</p>
      </div>

      <div  style={{marginBottom:'30px'}}>
        <h4>2. User Responsibility</h4>
        <ul className='mb-2' style={{listStyle:'none'}}>
          <li className='mb-1'>You must provide accurate and complete information when submitting gemstones for testing or when contacting us.</li>
          <li>You agree not to misuse the website, services, or falsely represent gem certifications.</li>
        </ul>
      </div>

      <div  style={{marginBottom:'30px'}}>
        <h4>3. Report Accuracy</h4>
        <p>All test reports are based on the results obtained from standard laboratory conditions and equipment. However, Jaipur Solitaire Lab is not responsible for any discrepancies that may arise due to external environmental factors or customer misuse.</p>
      </div>

      <div  style={{marginBottom:'30px'}}>
        <h4>4. Intellectual Property</h4>
        <p>All website content, logos, reports, and visuals are the exclusive property of Jaipur Solitaire Lab. No part of the website or report may be copied, reused, or reproduced without written permission.</p>
      </div>

      <div  style={{marginBottom:'30px'}}>
        <h4>5. Limitation of Liability</h4>
        <p>Jaipur Solitaire Lab is not liable for any direct, indirect, or consequential damages arising out of the use or misuse of the website, our test reports, or any delay in service.</p>
      </div>

      <div  style={{marginBottom:'30px'}}>
        <h4>6. Payment & Refund Policy</h4>
        <p>All payments for lab services must be made in advance unless otherwise agreed. Once the testing process has begun, no refund will be issued.</p>
      </div>

      <div  style={{marginBottom:'30px'}}>
        <h4>7. Modifications</h4>
        <p>We reserve the right to modify these Terms & Conditions at any time. Changes will be updated on this page, and continued use of the site constitutes agreement to the revised terms.</p>
      </div>

      <div   style={{marginBottom:'30px'}}>
        <h4>8. Governing Law</h4>
        <p>These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the jurisdiction of Surat, Gujarat.</p>
      </div>

      <div style={{marginBottom:'40px'}}>
        <h4>9. Contact Information</h4>
        <p>For any questions about these Terms & Conditions, you can reach us at:</p>
        <p>📧 Email: <a href="mailto:info@jaipursolitairelab.in">info@jaipursolitairelab.in</a></p>
        <p>📞 Phone: +91-XXXXXXXXXX</p>
        <p>🌐 Website: www.jaipursolitairelab.in</p>
      </div>
    </div>
  </div>

  <div className="portfolio-bg-shape">
    <div className="portfolio-shape shake-y">
      <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
    </div>
    <div className="portfolio-shape1 shake-y">
      <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
    </div>
  </div>
</div>

        </main>


        

      <Footer />
    </>
  )
}

export default Termsandcondition
