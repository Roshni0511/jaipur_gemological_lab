import React, { useState } from "react";

const ServiceCard = ({ title, content, iconSrc  }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
       <div className="col-lg-3 col-md-6 col-sm-6" data-sal="slide-up" data-sal-duration="1000">
      <div className="tj-service-item text-center">
        <div className="service-inner">
          <div className="service-icon">
            {/* Replace iconClass with image */}
            <img src={iconSrc} alt={`${title} icon`} style={{ width: '50px', height: '50px' }} />
            <img className="image-1" src="assets/images/shape/service-image.svg" alt="Shape" />
            <img className="image-2" src="assets/images/shape/service-image1.svg" alt="Shape" />
          </div>
          <div className={`service-content ${isExpanded ? "expanded" : ""}`}>
            <h4 className="title-link"><a href="#">{title}</a></h4>
            <p>{content}</p>
            <button className="read-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};
export default function Our_Service() {
   const services = [
  {
    title: "Testing Gems Stone",
    iconSrc: "/assets/pic/diamond1.png", 
    content:` All Gemstones are Lab Tested & Certified. So, with each Gemstone, you will receive a Laboratory Report which guarantees the authenticity of the Gemstone you buy. Each gemstone is graded very carefully on the Quality parameters, so that the customer gets the best value for money. Since we are direct importers of gemstones, we do not have any middlemen involved and hence we are able to give the best quality gemstone at the best price.`
  },
  {
    title: "Testing Diamond Jewellery",
    iconSrc: "/assets/pic/diamond2.png",
    content: ` We testing Diamond Jewellery like test by clarity F L, I F, V V S I-V V S 2, V S 2, S I 1-V S 2, S I 1-S S 2, I 1, I 2, I 3 & test colour in D to Z, we also test nose pin, ring, earing, pendant, bracelet, bangle’s, necklace etc.`
  },
  {
    title: "Testing Rudraksh",
    iconSrc: "/assets/pic/rudrakash1.png",
    content: `Sometimes a higher valued Rudraksha (Gaurishankar Rudraksha or a Trijuti) are made by artificially joining two or three Rudraksha with glue. In case of doubt, Rudraksha should be boiled for 1–2 hours. Sharp discoloration shows artificial Rudraksha. Water test is not reliable. Fool-proof method: cut it horizontally—same number of compartments as lines. But bead is destroyed.`
  },
  {
    title: "Testing Rudraksh Mala",
    iconSrc: "/assets/pic/rudrakash2.png",
    content: ` The range of Rudraksha Mala exported and supplied by us is made from genuine rudraksha in different mukhis and kanthas. Yogis wear Rudraksha Mala for tranquility. To activate senses and concentrate better, avail malas offered by us. Most affordable prices. We also offer incense sticks for prayers & fragrance, creating peaceful atmosphere.`
  }
];
    return (
       
            <section className="tj-service-section service-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tj-sec-heading text-center " data-sal="slide-up" data-sal-duration="1000"
                                data-sal-delay="600">
                                <span className="sub-title"> Our Services</span>
                                <h2 className="sec-title">Service We Provide</h2>
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
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
                <div className="service-section-shape">
                    <div className="service-bg-shape pulse">
                        <img src="assets/images/shape/shape-14.svg" alt="Shape" />
                    </div>
                    <div className="service-bg-shape1">
                        <img src="assets/images/shape/shape-15.svg" alt="Shape" />
                    </div>
                    <div className="service-bg-shape2">
                        <img src="assets/images/shape/shape-14.svg" alt="Shape" />
                    </div>
                    <div className="service-bg-shape3 pulse">
                        <img src="assets/images/shape/shape-15.svg" alt="Shape" />
                    </div>
                    <div className="service-bg-shape4 pulse">
                        <img src="assets/images/shape/shape-16.svg" alt="Shape" />
                    </div>
                </div>
            </section>
       
    )
}
