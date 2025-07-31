import React from 'react';
import timeline from '../data/timelineData';

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="section-header">
        <img src="/assets/timeline-icon.jpg" alt=" " className="section-icon" />
        <h2>Bootcamp Timeline</h2>
      </div>
      <div className="timeline-wrapper">
        <div className="timeline-text">
          {timeline.map(item => (
            <div key={item.day} className="timeline-item">
              <h3>Day {item.day}: {item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="timeline-image">
          <img src="/assets/timeline.jpg" alt="Timeline Visual" />
        </div>
      </div>
    </section>
  );
}
