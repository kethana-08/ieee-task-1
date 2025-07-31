import React from 'react';
import mentors from '../data/mentorsData';

export default function Mentors() {
  return (
    <section>
      <h2>Our Mentors</h2>
      <div className="mentors-grid">
        {mentors.map((m, idx) => (
          <div key={idx} className="mentor-card">
            <img src={m.photo} alt={m.name} className="mentor-img" />
            <h3>{m.name}</h3>
            <p><em>{m.role}</em></p>
            <p>{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
