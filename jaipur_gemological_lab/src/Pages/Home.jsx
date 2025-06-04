import React, { useEffect , useState  } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import Counter_home from '../component/Counter_home'
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";


const Home = () => {
 const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
  {
    img: "avatar-5.jpg",
    name: "Pritesh Mehta",
    title: "CEO, Business Co",
    review: `The quality of the gemstones I received was absolutely top-notch. Each stone had a natural shine and was energized perfectly. Truly authentic and spiritually uplifting.`,
  },
  {
    img: "avatar-5.jpg",
    name: "Sara Patel",
    title: "Marketing Head, Glow Inc",
    review: `I purchased a 5 Mukhi Rudraksha and could instantly feel a positive energy around me. The packaging, certification, and overall service were excellent. Highly recommended!`,
  },
  {
    img: "avatar-5.jpg",
    name: "Rohit Sharma",
    title: "Founder, InnovateX",
    review: `Their gemstone recommendations based on my birth chart have brought real changes in my life. I feel more focused and peaceful. A trustworthy source for spiritual products.`,
  },
];


  useEffect(() => {
    const thumbSlider = new Swiper(".thumb-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      watchSlidesProgress: true,
    });

    const contentSlider = new Swiper(".thumb-slider2", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbSlider,
      },
      on: {
        slideChange: function () {
          const realIndex = this.realIndex;
          setActiveIndex(realIndex); // 👈 Update state
          thumbSlider.slideToLoop(realIndex);
        },
      },
    });

    thumbSlider.on("slideChange", function () {
      const realIndex = this.realIndex;
      setActiveIndex(realIndex); // 👈 Update state
      contentSlider.slideToLoop(realIndex);
    });
  }, []);
    return (
        <>
            <Navbar />
            <main className="site-content">
                {/* <!-- start: Hero Area --> */}
                <section className="tj-hero-section-three">
                    <div className="hero-lg-image">
                        <img src="/assets/pic/banner.jpg" alt="Image" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="hero-content-area " data-sal="slide-up" data-sal-duration="1000"
                                    data-sal-delay="400">
                                    <div className="tj-sec-heading">
                                        <span className="white-sub-title">Jaipur Solitare Lab</span>
                                        <h1 className="title">
                                            Trusted <span className="WHITE-color">Gem & Rudraksha Testing <br /> Lab</span> in India
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
                                        <img className="about-lg-image" src="/assets/pic/diamond.webp" alt="About" />
                                    </div>
                                    <div className="image-group-2 " data-sal="slide-left" data-sal-duration="1200"
                                        data-sal-delay="600">
                                        <img className="about-image" src="/assets/pic/chaingems (1).jpg" alt="About" />
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
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
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
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roll-item">
                                <div className="roll-content">
                                    <div className="roll-icon">
                                        <img className="portal-icon" src="assets/images/icon/star.svg" alt="Icon" />
                                    </div>
                                    <div className="roll-text">
                                        <h4 className="title">Tested Gemstones</h4>
                                        <h4 className="title">Rudraksha Testing</h4>
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
                                        We testing Diamond Jewellery like test by clarity F L,  S I 1-V S 2, S I 1-S S 2, I 1, I 2, I 3 & test colour in D to Z, we also test nose pin, ring, earing, pendant, bracelet, bangle’s, necklace etc.
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
                                        We testing Rudraksh mala like test X-ray based testing in rudraksh mala & gemstone like crystal (Sphatik), coral (Munga), dyad coral,  crystal, mala etc.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="tj-service-video-content " data-sal="slide-left" data-sal-duration="1000"
                                    data-sal-delay="600">
                                    <div className="desc">
                                        <p>
                                          Explore our trusted services in Rudraksha verification, diamond purity checks, and genuine gem testing—where authenticity meets expertise
                                        </p>
                                    </div>
                                    <div className="video-area" style={{marginBottom:'10px'}}>
                                        <div className="video-play">
                                            <a  data-autoplay="true">
                                                <i class="fas fa-gem"></i> 
                                            </a>
                                        </div>
                                        <div className="video-text">
                                            <h6 className="title">
Rudraksha Verified</h6>
                                        </div>
                                    </div>
                                       <div className="video-area"  style={{marginBottom:'10px'}}>
                                        <div className="video-play">
                                            <a data-autoplay="true"
                                               >
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </div>
                                        <div className="video-text">
                                            <h6 className="title">Diamond Purity Check</h6>
                                        </div>
                                    </div>
                                       <div className="video-area"  style={{marginBottom:'10px'}}>
                                        <div className="video-play">
                                            <a data-autoplay="true" 
                                               >
                                            <i class="fas fa-check-circle"></i> 
                                            </a>
                                        </div>
                                        <div className="video-text">
                                            <h6 className="title">Genuine Gem Test </h6>
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
                                           <img src="/assets/pic/nat021.jpg" alt="Image" />
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
                                      <img src="/assets/pic/1a.gemstones.png" alt="Image" />
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
                                    <span className="secondary-color">Spiritual Creations</span>
                                    <h2 className="sec-title">Our Sacred Collections</h2>
                                    <p>
                                        Discover timeless collections of natural gemstones and authentic Rudraksha beads. Each item is carefully selected for spiritual benefits and aesthetic elegance to enhance your well-being.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="filter-menu " data-sal="slide-left" data-sal-duration="1000" data-sal-delay="600">
                                    <button className="filter active" data-filter="*">All</button>
                                    <button className="filter" data-filter=".development">Gemstones</button>
                                    <button className="filter" data-filter=".consulting">Rudraksha</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row" id="portfolio-grid" >
                            <div className="col-lg-4 col-md-6">
                                <div className="portfolio-single-item finance development"  >
                                    <div className="portfolio-inner">
                                        <div className="portfolio-image">
                                            <img src="/assets/pic/gems1.png" alt="Image" />
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-header">
                                                <span className="sub-title">Natural Crystals</span>
                                                <h3 className="title-link">
                                                    <a href="">Healing Gemstone Set</a>
                                                </h3>
                                            </div>
                                            {/* <div className="portfolio-arrow">
                                                <a href=""><i className="flaticon-next"></i></a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="portfolio-single-item consulting finance" style={{ position: 'absolute', left: '33.3298%', top: '0px' }}>
                                    <div className="portfolio-inner">
                                        <div className="portfolio-image">
                                            <img src="/assets/pic/gems2.jpg" alt="Image" />
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-header">
                                                <span className="sub-title">Divine Jewelry</span>
                                                <h3 className="title-link">
                                                    <a href="">Navratna Rudraksha Bracelet</a>
                                                </h3>
                                            </div>
                                            {/* <div className="portfolio-arrow">
                                                <a href=""><i className="flaticon-next"></i></a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="portfolio-inner">
                                        <div className="portfolio-image">
                                            <img src="/assets/pic/gems3.jpg" alt="Image" />
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-header">
                                                <span className="sub-title">Spiritual Power</span>
                                                <h3 className="title-link">
                                                    <a href="">5 Mukhi Rudraksha Bead</a>
                                                </h3>
                                            </div>
                                            {/* <div className="portfolio-arrow">
                                                <a href=""><i className="flaticon-next"></i></a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="portfolio-single-item capital consulting" style={{ position: 'absolute', left: '66.6595%', top: '0px' }}>
                                    <div className="portfolio-inner">
                                        <div className="portfolio-image">
                                            <img src="/assets/pic/gems4.png" alt="Image" />
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-header">
                                                <span className="sub-title">Luxury Stones</span>
                                                <h3 className="title-link">
                                                    <a href="">Premium Gems for Astrology</a>
                                                </h3>
                                            </div>
                                            {/* <div className="portfolio-arrow">
                                                <a href=""><i className="flaticon-next"></i></a>
                                            </div> */}
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


            

                {/* <!-- start: Video Area --> */}
               <section className="tj-video-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-video-area text-center">
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
                    <img src="assets/images/shape/shape-61.svg" alt="Shape" />
                </div>
                <div className="shape-2 shake-y">
                    <img src="assets/images/shape/shape-61.svg" alt="Shape" />
                </div>
                {/* <div className="shape-3 pulse">
                    <img src="assets/images/shape/shape-61.svg" alt="Shape" />
                </div> */}

                 
            </div>
        </section>
                {/* <!-- end: Video Area --> */}



                
                {/* <!-- start: Testimonial Area --> */}
               <section className="tj-testimonial-section-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tj-sec-heading"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="600"
              >
                <span className="secondary-color">Optional Subtitle</span>
                <h2 className="sec-title">Praise from Clients</h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-sal="slide-right"
              data-sal-duration="1000"
              data-sal-delay="600"
            >
              <div className="thumb-area">
                <div className="swiper thumb-slider">
                  <div className="swiper-wrapper thumb_slider">
                    {testimonials.map((item, index) => (
                      <div className="swiper-slide thumb_slide" key={index}>
                        <div className="thumb-1">
                          <img src={`assets/pic/${item.img}`} alt={item.name} />
                        </div>
                        <div className="thumb-arrow">
                          <i className="fa-solid fa-quote-right"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="testimonial-info">
                  <h4 className="title">{testimonials[activeIndex].name}</h4>
                  <span className="sub-tilte">{testimonials[activeIndex].title}</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-7"
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-delay="600"
            >
              <div className="swiper thumb-slider2">
                <div className="swiper-wrapper">
                  {testimonials.map((item, index) => (
                    <div className="swiper-slide" key={index}>
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
                        <p>{item.review}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="testimonial-navigation">
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Shapes */}
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

            </main>
            <Footer />
        </>
    )
}

export default Home
