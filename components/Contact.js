'use client';

import { useState, useRef } from 'react';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ display: 'none', color: '', text: '' });
  const [loading, setLoading] = useState(false);

  const EMAILJS_USER_ID = 'WcZMrqJDNEGtlB0am';
  const EMAILJS_SERVICE_ID = 'service_e6dcp5k';
  const EMAILJS_TEMPLATE_ID = 'template_sx2oupi';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ display: 'block', color: 'var(--text-secondary)', text: 'Sending your message...' });

    if (typeof emailjs === 'undefined') {
      setStatus({ display: 'block', color: '#f87171', text: 'Email service error: unable to send right now.' });
      setLoading(false);
      return;
    }

    emailjs.init(EMAILJS_USER_ID);

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current);
      setStatus({ display: 'block', color: '#4ade80', text: 'Success! Your message was sent.' });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS send error:', error);
      setStatus({ display: 'block', color: '#f87171', text: 'Oops! Could not send message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding reveal reveal-up">
      <div className="container">
        <h2 className="section-title title-coral">
          <i className="fa-solid fa-paper-plane icon-amber"></i> Get In <span className="highlight">Touch</span>
        </h2>
        <div className="contact-wrapper glass-card p-35">
          <div className="contact-info">
            <h3><i className="fa-solid fa-address-book highlight"></i> Contact Information</h3>
            <p>Feel free to reach out to me for any collaborations, opportunities, or just a friendly chat!</p>
            <div className="info-list">
              <div className="info-item">
                <a href="mailto:moturisaidinesh@gmail.com" className="info-icon-link color-pink">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <span>moturisaidinesh@gmail.com</span>
              </div>
              <div className="info-item">
                <a href="tel:+919390107209" className="info-icon-link color-emerald">
                  <i className="fa-solid fa-phone"></i>
                </a>
                <span>+91-9390107209</span>
              </div>
              <div className="info-item">
                <a href="https://www.linkedin.com/in/moturi-sai-dinesh-68572a291/" target="_blank" rel="noopener noreferrer" className="info-icon-link color-indigo">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.linkedin.com/in/moturi-sai-dinesh-68572a291/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
              <div className="info-item">
                <a href="https://github.com/Dinesh9831" target="_blank" rel="noopener noreferrer" className="info-icon-link color-purple">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://github.com/Dinesh9831" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="from_name" id="user_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="from_email" id="user_name_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" id="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name="message" id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button id="form-submit" type="submit" className="btn btn-primary contact-btn" disabled={loading}>
              <i className="fa-solid fa-paper-plane"></i> {loading ? 'Sending...' : 'Send Message'}
            </button>
            <div id="form-status" style={{ display: status.display, marginTop: '15px', fontSize: '0.9rem', color: status.color }}>
              {status.text}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
