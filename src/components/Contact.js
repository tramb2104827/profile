import React, { useState } from 'react';
import './Contact.css';
import Toast from './Toast';

const Contact = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${label} copied to clipboard!`, 'success');
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showToast(`${label} copied to clipboard!`, 'success');
      } catch (err) {
        showToast('Failed to copy. Please copy manually.', 'error');
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-content card">
          <p className="contact-intro">
            Feel free to reach out for academic collaboration, research opportunities, 
            or scholarship-related inquiries.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <div className="contact-email-wrapper">
                  <a href="mailto:tramb2104827@gmail.com">tramb2104827@gmail.com</a>
                  <button 
                    className="contact-copy-btn"
                    onClick={() => copyToClipboard('tramb2104827@gmail.com', 'Email')}
                    title="Copy email"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Location</strong>
                <span>Can Tho, Vietnam</span>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-university"></i>
              <div>
                <strong>Institution</strong>
                <span>Can Tho University</span>
              </div>
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:tramb2104827@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              Send Email
            </a>
            <button 
              className="contact-link"
              onClick={() => copyToClipboard('tramb2104827@gmail.com', 'Email')}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <i className="fas fa-copy"></i>
              Copy Email
            </button>
            <button 
              className="contact-link"
              onClick={() => copyToClipboard(window.location.href, 'Portfolio URL')}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <i className="fas fa-link"></i>
              Copy Link
            </button>
          </div>
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <footer className="footer">
        <p>&copy; 2025 Duong Thi Bich Tram. All rights reserved.</p>
        <p className="footer-subtitle">Academic Portfolio for Scholarship Application</p>
      </footer>
    </section>
  );
};

export default Contact;

