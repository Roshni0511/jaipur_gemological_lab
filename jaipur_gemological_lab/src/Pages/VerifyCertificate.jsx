import React, { useState, useEffect } from "react";

const VerifyCertificate = () => {
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 425);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <footer className="tj-footer-three" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form id="contact-form2">
                <div
                  className="contact-form-box3 "
                  data-sal="slide-left"
                  data-sal-duration="1000"
                  data-sal-delay="600"
                  style={{
                  
                    padding: '40px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: '#fff',
                  }}
                >
                  <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ color: '#fff' }}>Verify Certificate</h2>
                  </div>

                 
                     <div className="form-input" style={{ display:'flex',justifyContent:'center' }} >
                                            <input type="text" className="form__input" placeholder="Enter Stock Code" name="con2Name" style={{width:'100%',padding:'15px 20px'}}/>
                                        </div>
<a href="/" style={{ width: '100%' }}>
  <div className="tj-contact-button" style={{ display: 'flex', justifyContent: 'center' }}>
    <button className="btn tj-black-btn-two" type="button"  style={{ width: isMobile ? '100%' : '50%' }}>
      Back To Home
    </button>
  </div>
</a>

                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Background Shape Elements */}
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
          <div
            className="shape-5 shake-y"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-delay="300"
          >
            <img src="assets/images/shape/footer-shape-5.svg" alt="Images" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default VerifyCertificate;
