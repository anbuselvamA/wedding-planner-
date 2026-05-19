import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';
import { Star, Users, Calendar, MapPin } from 'lucide-react';

const statsData = [
  { icon: <Star size={24} color="#c9a367" strokeWidth={1.5} />, value: 500, suffix: '+', label: 'Weddings Planned' },
  { icon: <Users size={24} color="#c9a367" strokeWidth={1.5} />, value: 1000, suffix: '+', label: 'Happy Couples' },
  { icon: <Calendar size={24} color="#c9a367" strokeWidth={1.5} />, value: 5, suffix: '+', label: 'Years Experience' },
  { icon: <MapPin size={24} color="#c9a367" strokeWidth={1.5} />, value: null, text: 'Pan India', label: 'Services Available' },
];

/* Animated count-up hook */
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start || target === null) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const StatBlock = ({ icon, value, suffix, text, label, started }) => {
  const count = useCountUp(value, 1600, started);
  return (
    <div className="stat-block">
      <div className="stat-icon">{icon}</div>
      <h3>
        {value !== null ? <><span>{count}</span>{suffix}</> : text}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref} aria-label="Our achievements">
      <div className="stats-bg-orb stats-bg-orb-1" aria-hidden="true" />
      <div className="stats-bg-orb stats-bg-orb-2" aria-hidden="true" />
      <div className="container stats-container">
        {statsData.map((s, i) => (
          <StatBlock key={i} {...s} started={started} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
