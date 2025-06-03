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
  { count: 96, label: 'ACCURACY', delay: 100 },
  { count: 95, label: 'SUCCESS-RATE', delay: 200 },
  { count: 92, label: 'BETTER DATA', delay: 300 },
  { count: 98, label: 'COST-EFFECTIVE', delay: 400 },
];

const Counter_home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="tj-counter-section" ref={ref} >
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

     
    </section>
  );
};

export default Counter_home;
