// App.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'odometer/themes/odometer-theme-default.css';


const AnimatedCounter = ({ count }) => {
  const odometerRef = useRef();
  const [odometer, setOdometer] = useState(null);

  useEffect(() => {
    if (odometerRef.current && !odometer) {
      const Odometer = require('odometer'); // avoid SSR issues
      const odo = new Odometer({
        el: odometerRef.current,
        value: 0,
        format: '(,ddd)',
        theme: 'default',
      });
      setOdometer(odo);
    }
  }, []);

  useEffect(() => {
    if (odometer) {
      odometer.update(count);
    }
  }, [count, odometer]);

  return (
    <span className="odometer" ref={odometerRef}>
      0
    </span>
  );
};

const counters = [
  { count: 254, label: 'Project Complete', delay: 100 },
  { count: 164, label: 'Quality Team Member', delay: 200 },
  { count: 433, label: 'Awards Winning', delay: 300 },
  { count: 30, label: 'Years Of Experience', delay: 400 },
];

const Counter_home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="tj-counter-section" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="counter-content-area">
              {counters.map((item, index) => (
                <div
                  key={index}
                  className="counter-item"
                  style={{
                    animation: inView ? `fadeInUp 0.6s ease ${item.delay}ms forwards` : 'none',
                    opacity: 0,
                  }}
                >
                  <div className="tj-count">
                    {inView && <AnimatedCounter count={item.count} />}+
                  </div>
                  <span className="sub-title">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="counter-section-shape">
        <div className="counter_shape">
          <img src="assets/images/shape/counter-shape.svg" alt="Shape" />
        </div>
        <div className="counter_shape1">
          <img src="assets/images/shape/counter-shape1.svg" alt="Shape" />
        </div>
      </div>
    </section>
  );
};

export default Counter_home;
