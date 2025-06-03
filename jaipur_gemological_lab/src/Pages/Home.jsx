import React, { useEffect } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import Counter_home from '../component/Counter_home'


const Home = () => {

    return (
        <>
            <Navbar />
            <main className="site-content">
                {/* <!-- start: Hero Area --> */}
                <section className="tj-hero-section-three">
                    <div className="hero-lg-image">
                        <img src="/assets/pic/numerology-concept-with-hands-holding-pebbles.jpg" alt="Image" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="hero-content-area " data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="400">
                                    <div className="tj-sec-heading">
                                        <span className="white-sub-title">Jaipur Solitare Lab</span>
                                        <h1 className="title">
                                            Trusted <span className="black-color">Gem & Rudraksha Testing <br /> Lab</span> in India
                                        </h1>
                                        <div className="desc">
                                            <p>
                                                Jaipur Solitare Lab (JSL) is a trusted Indian lab offering certified testing of gemstones, Rudraksha, diamonds, and malas with accurate and reliable results.
                                            </p>
                                        </div>
                                        <div className="hero-button d-flex">
                                            <a href="/Contact" className="btn tj-black-btn-two">Get started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-group-shape">
                        <div className="group-1 shake-y">
                            <img src="assets/images/shape/shape-55.svg" alt="Shape" />
                        </div>
                        <div className="group-2 pulse">
                            <img src="assets/images/shape/shape-56.svg" alt="Shape" />
                        </div>
                        <div className="group-3 shake-y">
                            <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                        </div>
                        <div className="group-4 shake-y">
                            <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                        </div>
                        <div className="group-5 pulse">
                            <img src="assets/images/shape/shape-58.svg" alt="Shape" />
                        </div>
                        <div className="group-6 pulse"></div>
                    </div>
                </section>
                {/* <!-- end: Hero Area --> */}

                {/* <!-- start: About Area --> */}
                <section className="tj-about-section-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-image-group-three hover-shape-border">
                                    <div className="gradient-shape pulse">
                                        <img src="assets/images/about/about-shape.png" alt="Shape" />
                                    </div>
                                    <div className="image-group-1 " data-sal="slide-right" data-sal-duration="1200"
                                        data-sal-delay="600">
                                        <img className="about-lg-image" src="assets/images/about/about-7.jpg" alt="About" />
                                    </div>
                                    <div className="image-group-2 " data-sal="slide-left" data-sal-duration="1200"
                                        data-sal-delay="600">
                                        <img className="about-image" src="assets/images/about/about-8.jpg" alt="About" />
                                    </div>
                                    <div className="about-group-shape">
                                        <div className="shape-1 pulse"></div>
                                        <div className="shape-2 shake-y"></div>
                                        <div className="shape-3 pulse"></div>
                                    </div>
                                    <div className="border-shape">
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-content-three " data-sal="slide-left" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <div className="tj-sec-heading">
                                        <span className="secondary-color">Gems Testing</span>
                                        <h2 className="sec-title">Authenticity Guaranteed with Certification</h2>
                                        <div className="desc">
                                            <p>
                                                We Don’t Sale any Gem, Rudraksh and related products !! We just Test them in our Well Established Lab and provide you report on basis of its quality. We also provide a certificate with all Tested Gems, Rudraksh and related product. This certificate can also be checked on our website to confirm the originality of it.
                                            </p>
                                        </div>
                                        <div className="about-content">
                                            <div className="about-item">
                                                <div className="about-icon hover-shape-border">
                                                    <i className="fa-solid fa-gem"></i>
                                                    <div className="icon-shape">
                                                        <span className="border-shadow shadow-1"></span>
                                                        <span className="border-shadow shadow-2"></span>
                                                        <span className="border-shadow shadow-3"></span>
                                                        <span className="border-shadow shadow-4"></span>
                                                    </div>
                                                </div>
                                                <div className="about-text">
                                                    <h5 className="title">Daily Gemstone Arrivals</h5>
                                                    <p>
                                                        Check out our daily new gemstone arrivals! We update our inventory every day, so visit often—these gems won’t last long.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="about-item">
                                                <div className="about-icon hover-shape-border">
                                                    <i className="fa-solid fa-star"></i>
                                                    <div className="icon-shape">
                                                        <span className="border-shadow shadow-1"></span>
                                                        <span className="border-shadow shadow-2"></span>
                                                        <span className="border-shadow shadow-3"></span>
                                                        <span className="border-shadow shadow-4"></span>
                                                    </div>
                                                </div>
                                                <div className="about-text">
                                                    <h5 className="title">Fresh Gemstone Collections</h5>
                                                    <p>
                                                        Discover our latest gemstone additions updated daily. Stay tuned and explore our ever-changing selection before these unique pieces are gone!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about-button d-flex">
                                            <a href="" className="btn tj-white-btn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end: About Area --> */}



                {/* <!-- start: Roll Area --> */}
                <section className="tj-roll-section sc-pt-55 sc-pb-55">
                    <div className="slide-roll">
                        <div className="roll-box roll-box-revers">
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="roll-box roll-box-revers">
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Marketing Agency</h4>
                                        <h4 className="title">Creative Agency</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end: Roll Area --> */}

                {/* <!-- start: service Area --> */}
                <section className="tj-service-section-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="tj-sec-heading " data-sal="slide-right" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <span className="secondary-color">Our Services</span>
                                    <h2 className="sec-title">Service We Provide</h2>
                                    <p >
                                        We are dedicated to providing top-quality testing services for gemstones, rudrakshas, malas, and diamonds. Our expert team ensures accurate, reliable, and certified reports to help you verify the authenticity and quality of your precious items with confidence.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="tj-service-item-three">
                                    <div className="service-icon">
                                        <img style={{ height: "45px" }} src="/assets/pic/diamond1.png" />
                                    </div>
                                    <h4 className="title"><a href="">we testing gems stone</a></h4>
                                    <p>
                                        We testing gemstone like natural Yellow sapphire (Pukhraj), Blue sapphire (Neelam), Ruby (Manik), Emerald (Panna), Hessonite garnet (Gommed), Cat’s eye (Ketu), Pearl (Moti), Coral (Munga) etc.
                                    </p>
                                    <div className="border-inner"></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="tj-service-item-three">
                                    <div className="service-icon">
                                        <img style={{ height: "45px" }} src="/assets/pic/diamond2.png" />
                                    </div>
                                    <h4 className="title"><a href="">we testing diamond jewellery</a></h4>
                                    <p>
                                        We testing Diamond Jewellery like test by clarity F L, I F, V V S I-V V S 2, V S 2, S I 1-V S 2, S I 1-S S 2, I 1, I 2, I 3 & test colour in D to Z, we also test nose pin, ring, earing, pendant, bracelet, bangle’s, necklace etc.
                                    </p>
                                    <div className="border-inner"></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="tj-service-item-three">
                                    <div className="border-inner2"></div>
                                    <div className="service-icon">
                                        <img style={{ height: "45px" }} src="/assets/pic/rudrakash1.png" />
                                    </div>
                                    <h4 className="title"><a href="">we testing rudraksh</a></h4>
                                    <p>
                                        We testing Rudraksh like test X-ray based testing & conform to how many natural face & seeds in Rudraksh. Testing IN 1 TO 21 mukhi ganesh, gaurisankar, trijeurti, nirakar, ekavinshat etc.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="tj-service-item-three">
                                    <div className="border-inner2"></div>
                                    <div className="service-icon">
                                        <img style={{ height: "45px" }} src="/assets/pic/rudrakash2.png" />
                                    </div>
                                    <h4 className="title"><a href="">we testing gemstone & rudraksh mala</a></h4>
                                    <p>
                                        We testing Rudraksh mala like test X-ray based testing in rudraksh mala & gemstone like crystal (Sphatik), coral (Munga), dyad coral, dyad quartaz, navratna (Navgrah), pearl (Moti), crystal, mala etc.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="tj-service-video-content " data-sal="slide-left" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <div className="desc">
                                        <p>
                                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. eni, ad minim.
                                        </p>
                                    </div>
                                    <div className="video-area">
                                        <div className="video-play">
                                            <a className="venobox popup-videos-button" data-autoplay="true" data-vbtype="video"
                                                href="https://www.youtube.com/watch?v=ADmQTw4qqTY">
                                                <i className="fa-sharp fa-solid fa-play"></i>
                                            </a>
                                        </div>
                                        <div className="video-text">
                                            <h6 className="title">Video Presentation</h6>
                                        </div>
                                    </div>
                                    <div className="video-shape shake-y">
                                        <img src="assets/images/shape/shape-53.svg" alt="Shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-section-shape pulse"></div>
                </section>
                {/* <!-- end: service Area --> */}

                {/* <!-- start: Counter Area --> */}
                <Counter_home />

                {/* <!-- end: Counter Area --> */}

                {/* <!-- start: Certified Trust Area --> */}
                <section className="tj-service-section-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tj-sec-heading" data-sal="slide-right" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <span className="sub-title">Certified Trust</span>
                                    <h2 className="sec-title">
                                        JSL Gems – Our Identity, <span className="active-color">Your Trust </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tj-service-item-two" data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="100">
                                    <div className="service-content-info">
                                        <div className="service-left-content">
                                            <div className="service-icon">
                                               <i className="fas fa-gem"></i> 
                                            </div>
                                            <div className="service-text">
                                                <h3 className="title-link">
                                                    <a className="sec-title" href="">GemStone Overview</a>
                                                </h3>
                                                <span className="number">01</span>
                                            </div>
                                        </div>
                                        <div className="service-wrapper">
                                            <img src="assets/images/service/service-1.jpg" alt="Image" />
                                        </div>
                                    </div>
                                    <div className="service-middle-content">
                                        <div className="service-text">
                                            <div className="desc">
                                                <p>
                                                    Gemstones are a smart investment that has attracted people for centuries. Gemstones not only have a rich history and represent power, but they are eye-catching beauties, and are treasured collectables. The integrity of these precious stones is important to our gemstones dealers, as much as the seamless process of purchasing them. Whatever your reasons are for investing in gemstones, we’re dedicated to ensuring you get a quality selection to choose from and that you’re satisfied with your experience.
                                                </p>
                                            </div>
                                            {/* <div className="service-tags">
                                        <span className="btn text-btn">Creative</span>
                                        <span className="btn text-btn">Accessibility</span>
                                    </div> */}
                                        </div>
                                        <div className="service-arrow">
                                            <a href="/About_us"><i className="flaticon-next"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tj-service-item-two" data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="200">
                                    <div className="service-content-info">
                                        <div className="service-left-content">
                                            <div className="service-icon">
                                               <i className="flaticon-quality"></i>
                                            </div>
                                            <div className="service-text">
                                                <h3 className="title-link">
                                                    <a className="sec-title" href="">why choose us?</a>
                                                </h3>
                                                <span className="number">02</span>
                                            </div>
                                        </div>
                                        <div className="service-wrapper">
                                            <img src="assets/images/service/service-3.jpg" alt="Image" />
                                        </div>
                                    </div>
                                    <div className="service-middle-content">
                                        <div className="service-text">
                                            <div className="desc">
                                                <p>
                                                    We know choosing the perfect gemstone is an extremely important decision. We aim to make our customer’s search as easy as possible and to educate the consumer about the differences between a natural and certified gemstone and an artificially enhanced or synthetic gem. Simply put, quality, rarity, and value are the cornerstones of our gemstone business.
                                                </p>
                                            </div>
                                            {/* <div className="service-tags">
                                        <span className="btn text-btn">Creative</span>
                                        <span className="btn text-btn">Accessibility</span>
                                    </div> */}
                                        </div>
                                        <div className="service-arrow">
                                            <a href="/About_us"><i className="flaticon-next"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="service-group-shape">
                        <div className="service-shape pulse">
                            <img src="assets/images/shape/shape-42.svg" alt="Shape" />
                        </div>
                        <div className="service-shape1 pulse">
                            <img src="assets/images/shape/shape-42.svg" alt="Shape" />
                        </div>
                    </div>
                </section>
                {/* <!-- end: Certified Trust Area --> */}

                {/* <!-- Start: Portfolio Area --> */}
                <section className="tj-portfolio-section-three inc-colum default-padding">
                    <div className="container">
                        <div className="row align-items-center portfolio-top">
                            <div className="col-lg-6">
                                <div className="tj-sec-heading " data-sal="slide-right" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <span className="secondary-color">Projects We Have</span>
                                    <h2 className="sec-title">Our Case Studies</h2>
                                    <p>
                                        It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                        the release
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="filter-menu " data-sal="slide-left" data-sal-duration="1000" data-sal-delay="600">
                                    <button className="filter active" data-filter="*">All</button>
                                    <button className="filter" data-filter=".development">Web Design</button>
                                    <button className="filter" data-filter=".consulting">Motion Design</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row" id="portfolio-grid" >
                            <div className="col-lg-4 col-md-6">
                                <div className="portfolio-single-item finance"  >
                                    <div className="portfolio-inner">
                                        <div className="portfolio-image">
                                            <img src="assets/images/portfolio/portfolio-15.jpg" alt="Image" />
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-header">
                                                <span className="sub-title">Web Developer</span>
                                                <h3 className="title-link">
                                                    <a href="">Business Solution</a>
                                                </h3>
                                            </div>
                                            <div className="portfolio-arrow">
                                                <a href=""><i className="flaticon-next"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="portfolio-single-item consulting finance" style={{ position: 'absolute', left: '33.3298%', top: '0px' }}>
                                    <div className="portfolio-inner">
                                        <div className="portfolio-image">
                                            <img src="https://www.rudraksha-ratna.com/assets/shared/Consultations/rudraksha-gems-recommendation.jpg" alt="Image" />
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-header">
                                                <span className="sub-title">Web Developer</span>
                                                <h3 className="title-link">
                                                    <a href="">Business Solution</a>
                                                </h3>
                                            </div>
                                            <div className="portfolio-arrow">
                                                <a href=""><i className="flaticon-next"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-inner">
                                        <div className="portfolio-image">
                                            <img src="https://gemsmantra.com/cdn/shop/files/7_Mukhi_Rudraksha_SKU1041R_3afef5b5-5019-442a-b038-fd63f8aa7162.jpg?v=1747740171&width=2048" alt="Image" />
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-header">
                                                <span className="sub-title">Web Developer</span>
                                                <h3 className="title-link">
                                                    <a href="">Business Solution</a>
                                                </h3>
                                            </div>
                                            <div className="portfolio-arrow">
                                                <a href=""><i className="flaticon-next"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="portfolio-single-item capital development" style={{ position: 'absolute', left: '66.6595%', top: '0px' }}>
                                    <div className="portfolio-inner">
                                        <div className="portfolio-image">
                                            <img src="https://brahmagems-media.s3.ap-south-1.amazonaws.com/77920/1738304645.png" alt="Image" />
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-header">
                                                <span className="sub-title">Web Developer</span>
                                                <h3 className="title-link">
                                                    <a href="">Business Solution</a>
                                                </h3>
                                            </div>
                                            <div className="portfolio-arrow">
                                                <a href=""><i className="flaticon-next"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                </section>
                {/* <!-- end: Portfolio Area --> */}

                {/* <!-- start: Testimonial Area --> */}
                <section className="tj-testimonial-section-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tj-sec-heading  " data-sal="slide-right" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <span className="secondary-color">Optional Subtitle</span>
                                    <h2 className="sec-title">Praise from Clients</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5 ">
                                <div className="thumb-area " data-sal="slide-right" data-sal-duration="1000" data-sal-delay="600">
                                    <div className="swiper thumb-slider">
                                        <div className="swiper-wrapper thumb_slider">
                                            <div className="swiper-slide thumb_slide">
                                                <div className="thumb-1">
                                                    <img src="assets/images/testimonial/test-7.png" alt="Image" />
                                                </div>
                                                <div className="thumb-arrow">
                                                    <i className="fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                            <div className="swiper-slide thumb_slide">
                                                <div className="thumb-1">
                                                    <img src="assets/images/testimonial/test-8.png" alt="Image" />
                                                </div>
                                                <div className="thumb-arrow">
                                                    <i className="fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                            <div className="swiper-slide thumb_slide">
                                                <div className="thumb-1">
                                                    <img src="assets/images/testimonial/test-9.png" alt="Image" />
                                                </div>
                                                <div className="thumb-arrow">
                                                    <i className="fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-info">
                                        <h4 className="title">Piter Bowman</h4>
                                        <span className="sub-tilte">CEO, Business Co</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 " data-sal="slide-left" data-sal-duration="1000" data-sal-delay="600">
                                <div className="swiper thumb-slider2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                    <div className="swiper-wrapper" id="swiper-wrapper-a7e1b8a98c99a89e" aria-live="polite" style={{
                                        transitionDuration: '0ms',
                                        transform: 'translate3d(-1501px, 0px, 0px)',
                                    }}>
                                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" role="group" aria-label="3 / 3" style={{
                                            width: '746px',
                                            marginRight: '10px',
                                        }}>
                                            <div className="testimonial-slider-item">
                                                <div className="testimonial-rating">
                                                    <ul className="dot-style">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star-half-stroke"></i></li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Many desktop publishing packages and web page editors now use Lorem
                                                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                                                    uncover many web sites still in their infancy. Various versions have
                                                    evolved over the years, sometimes by accident, injected humour and the
                                                    like.
                                                </p>
                                                <p>
                                                    Various versions have evolved over the years, sometimes by accident,
                                                    injected humour and the like.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-slider-item">
                                                <div className="testimonial-rating">
                                                    <ul className="dot-style">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star-half-stroke"></i></li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Many desktop publishing packages and web page editors now use Lorem
                                                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                                                    uncover many web sites still in their infancy. Various versions have
                                                    evolved over the years, sometimes by accident, injected humour and the
                                                    like.
                                                </p>
                                                <p>
                                                    Various versions have evolved over the years, sometimes by accident,
                                                    injected humour and the like.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-slider-item">
                                                <div className="testimonial-rating">
                                                    <ul className="dot-style">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star-half-stroke"></i></li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Many desktop publishing packages and web page editors now use Lorem
                                                    Ipsum as their default model text, and a search for 'lorem ipsum' will
                                                    uncover many web sites still in their infancy. Various versions have
                                                    evolved over the years, sometimes by accident, injected humour and the
                                                    like.
                                                </p>
                                                <p>
                                                    Various versions have evolved over the years, sometimes by accident,
                                                    injected humour and the like.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-navigation">
                                        <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-sec-shape">
                        <div className="shape-one shake-y">
                            <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                        </div>
                        <div className="shape-two pulse"></div>
                        <div className="shape-three shake-y">
                            <img src="assets/images/shape/portfolio-shape2.svg" alt="Shape" />
                        </div>
                    </div>
                </section>
                {/* <!-- end: Testimonial Area --> */}

                {/* <!-- start: Team Area --> */}
                <section className="tj-team-section-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tj-sec-heading text-
                        center " data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <span className="secondary-color">How We Work</span>
                                    <h2 className="sec-title">Meet Our Team</h2>
                                    <div className="desc">
                                        <p>
                                            It has survived not only five centuries, but also the leap into electronic
                                            typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                            with the release
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tj-team-item-two " data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                                    <div className="team-image">
                                        <img src="assets/images/team/team-10.jpg" alt="Team" />
                                    </div>
                                    <div className="tj-team-content">
                                        <div className="team-share">
                                            <ul className="dot-style">
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-header">
                                            <h5 className="title-link"><a href="#">Alextina Deitarson</a></h5>
                                            <span className="sub-title">UI/UX Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tj-team-item-two " data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
                                    <div className="team-image">
                                        <img src="assets/images/team/team-11.jpg" alt="Team" />
                                    </div>
                                    <div className="tj-team-content">
                                        <div className="team-share">
                                            <ul className="dot-style">
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-header">
                                            <h5 className="title-link"><a href="#">Alextina Deitarson</a></h5>
                                            <span className="sub-title">UI/UX Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tj-team-item-two " data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                                    <div className="team-image">
                                        <img src="assets/images/team/team-12.jpg" alt="Team" />
                                    </div>
                                    <div className="tj-team-content">
                                        <div className="team-share">
                                            <ul className="dot-style">
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-header">
                                            <h5 className="title-link"><a href="#">Alextina Deitarson</a></h5>
                                            <span className="sub-title">UI/UX Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tj-team-item-two " data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
                                    <div className="team-image">
                                        <img src="assets/images/team/team-13.jpg" alt="Team" />
                                    </div>
                                    <div className="tj-team-content">
                                        <div className="team-share">
                                            <ul className="dot-style">
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-header">
                                            <h5 className="title-link"><a href="#">Alextina Deitarson</a></h5>
                                            <span className="sub-title">UI/UX Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-shape pulse">
                        <img src="assets/images/shape/shape-16.svg" alt="Shape" />
                    </div>
                </section>
                {/* <!-- end: Team Area --> */}

                {/* <!-- start: Video Area --> */}
                <section className="tj-video-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tj-video-area text-center ">
                                    <div className="tj-video-popup">
                                        <div className="circle pulse video-icon">
                                            <a className="venobox popup-videos-button" data-autoplay="true" data-vbtype="video"
                                                href="https://www.youtube.com/watch?v=ADmQTw4qqTY">
                                                <img src="assets/images/icon/play.svg" alt="Play" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-sec-shape">
                        <div className="shape-1 shake-y">
                            <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                        </div>
                        <div className="shape-2 shake-y">
                            <img src="assets/images/shape/shape-57.svg" alt="Shape" />
                        </div>
                        <div className="shape-3 pulse">
                            <img src="assets/images/shape/shape-61.svg" alt="Shape" />
                        </div>
                    </div>
                </section>
                {/* <!-- end: Video Area --> */}

                {/* <!-- start: Blog Area --> */}
                <section className="tj-blog-section-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tj-sec-heading text-center " data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <span className="secondary-color">Latest Blog</span>
                                    <h2 className="sec-title">The best studio in the city</h2>
                                    <div className="desc">
                                        <p>
                                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                            as necessary, making this the first true generator on the Internet. It uses a
                                            dictionary of over 200 Latin words,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="tj-blog-item-three " data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="100">
                                    <div className="blog-image">
                                        <a href=""><img src="assets/images/blog/blog-15.jpg" alt="Image" /></a>
                                    </div>
                                    <div className="blog-content-area">
                                        <div className="blog-meta-three ">
                                            <span><a href="">Business</a></span>
                                            <span>May 22, 2023</span>
                                        </div>
                                        <h4 className="title-link">
                                            <a href="">Simple Proctives that will help you get better every
                                                day</a>
                                        </h4>
                                        <div className="tj-blog-button">
                                            <a href="" className="btn tj-white-btn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tj-blog-item-three " data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="200">
                                    <div className="blog-image">
                                        <a href=""><img src="assets/images/blog/blog-16.jpg" alt="Image" /></a>
                                    </div>
                                    <div className="blog-content-area">
                                        <div className="blog-meta-three">
                                            <span><a href="">Artificial Inteligence</a></span>
                                            <span>Dec 05, 2023</span>
                                        </div>
                                        <h4 className="title-link">
                                            <a href="">How data backup & recovery can save your business</a>
                                        </h4>
                                        <div className="tj-blog-button">
                                            <a href="" className="btn tj-white-btn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tj-blog-item-three " data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="200">
                                    <div className="blog-image">
                                        <a href=""><img src="assets/images/blog/blog-17.jpg" alt="Image" /></a>
                                    </div>
                                    <div className="blog-content-area">
                                        <div className="blog-meta-three">
                                            <span><a href="">Business Agency</a></span>
                                            <span>Jan 14, 2023</span>
                                        </div>
                                        <h4 className="title-link">
                                            <a href="">Search enginess optimizaties for streamline
                                                solutions</a>
                                        </h4>
                                        <div className="tj-blog-button">
                                            <a href="" className="btn tj-white-btn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-sec-shape">
                        <div className="shape-one pulse">
                            <img src="assets/images/shape/shape-16.svg" alt="Images" />
                        </div>
                        <div className="shape-two shake-y">
                            <img src="assets/images/shape/shape-52.svg" alt="Images" />
                        </div>
                        <div className="shape-three pulse"></div>
                    </div>
                </section>
                {/* <!-- end: Blog Area --> */}
            </main>
            <Footer />
        </>
    )
}

export default Home
