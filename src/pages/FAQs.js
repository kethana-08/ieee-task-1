import React from 'react';
import faqs from '../data/faqsData';

export default function FAQs() {
  return (
    <section className="faqs-section">
      <div className="section-header">
        <img src="/assets/faqs-icon.jpeg" alt=" " className="section-icon" />
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faqs-wrapper">
        <div className="faqs-text">
          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <strong>{item.q}</strong>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
        <div className="faqs-image">
          <img src="/assets/faqs.jpg" alt="FAQs Illustration" />
        </div>
      </div>
    </section>
  );
}
