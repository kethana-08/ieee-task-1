import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
      <div className="header-section">
      <video autoPlay muted loop playsInline className="header-video">
        <source src="/assets/ieee.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-content">
        <h1>IEEE</h1>
        <h3>Institute of Electrical and Electronics Engineers</h3>
         
      </div>
    </div>
      
      <p>IEEE,stands for the Institute of Electrical and Electronics Engineers. It is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE is a non-profit organization with over 400,000 members in more than 160 countries. It is a leading authority on areas like aerospace systems, computers, telecommunications, and more. </p>
<h4>IEEE's core activities include:</h4>
<h3>• Publishing technical literature:</h3>
<p>IEEE is responsible for over a third of the world's technical literature in electrical engineering, computer science, and electronics. </p>
<h3>• Developing international standards:</h3>
<p>It is a leading developer of international standards that underpin many of today's technologies. </p>
<h3>• Organizing conferences and events:</h3>
<p>IEEE hosts numerous conferences, symposia, and other events to facilitate the exchange of knowledge. </p>
<h3>• Providing educational resources:</h3>
<p>It offers various educational programs, including webinars, courses, and certifications, to keep members updated. </p>
<h3>• Supporting student branches:</h3>
<p>IEEE has nearly 800 student branches worldwide, fostering interest in engineering and technology among students. </p>
<h3>• Advocating for the profession:</h3>
<p>It advocates for the engineering profession and helps introduce technology careers to young people. </p>
<h4>IEEE's mission is to foster technological innovation and excellence for the benefit of humanity. They achieve this by: </h4>
<ul>
<li>Providing a platform for engineers and technologists to network and collaborate.</li>
<li>Publishing cutting-edge research and information.</li>
<li>Developing industry standards that ensure safety, security, and sustainability.</li>
<li>Supporting educational initiatives and professional development.</li>
</ul> 
      <h1>IEEE Web Bootcamp – 7‑Day Event</h1>
      <p>Join our week-long intensive program to learn HTML, CSS, JavaScript, ReactJS, GitHub workflows, and deployment using platforms like Netlify and Render. Build real-world mini-projects and complete a final ReactJS site by the end of Day 7.</p>
      <h2>About the Bootcamp</h2>
      <ul>
        <li>Project-based learning with mentorship</li>
        <li>Responsive design, collaboration & code reviews</li>
        <li>Prepare for internships and build portfolio projects</li>
      </ul>
    </section>

  );
}
