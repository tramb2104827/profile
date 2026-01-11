import React, { useState } from 'react';
import './Portfolio.css';
import Toast from './Toast';

const Portfolio = () => {
  const [toast, setToast] = useState(null);

  const documents = [
    {
      name: 'Curriculum Vitae (CV)',
      filename: 'CV.pdf',
      type: 'PDF',
      icon: 'fas fa-file-pdf',
      action: 'download'
    },
    {
      name: 'Achievements',
      filename: 'Achievements.pdf',
      type: 'PDF',
      icon: 'fas fa-file-pdf',
      action: 'download'
    },
    {
      name: 'Recommendation Letter',
      filename: 'Recommendation.pdf',
      type: 'PDF',
      icon: 'fas fa-file-pdf',
      action: 'download'
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleDownload = (doc) => {
    try {
      const filePath = `/pdf/${doc.filename}`;
      const link = document.createElement('a');
      link.href = filePath;
      link.download = doc.filename;
      link.target = '_blank';
      
      // Check if file exists by trying to fetch it
      fetch(filePath, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast(`${doc.name} downloaded successfully!`, 'success');
          } else {
            showToast(`File ${doc.filename} not found. Please add it to the /public/pdf/ folder.`, 'error');
          }
        })
        .catch(() => {
          // If file doesn't exist, show helpful message
          showToast(`File ${doc.filename} not found. Please add it to the /public/pdf/ folder.`, 'error');
        });
    } catch (error) {
      showToast('Download failed. Please try again.', 'error');
    }
  };

  const handlePrint = () => {
    window.print();
    showToast('Print dialog opened', 'info');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Duong Thi Bich Tram - Academic Portfolio',
      text: 'Check out my academic portfolio for scholarship application',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        showToast('Portfolio shared successfully!', 'success');
      } else {
        // Fallback: Copy URL to clipboard
        await navigator.clipboard.writeText(window.location.href);
        showToast('Portfolio URL copied to clipboard!', 'success');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        // Fallback: Copy URL to clipboard
        navigator.clipboard.writeText(window.location.href)
          .then(() => showToast('Portfolio URL copied to clipboard!', 'success'))
          .catch(() => showToast('Share failed. Please copy the URL manually.', 'error'));
      }
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-container">
        <p className="portfolio-intro">
          Download my academic documents and portfolio materials
        </p>
        <div className="portfolio-grid">
          {documents.map((doc, index) => (
            <div key={index} className="portfolio-item card">
              <div className="portfolio-icon">
                <i className={doc.icon}></i>
              </div>
              <h4>{doc.name}</h4>
              <span className="portfolio-type">{doc.type}</span>
              {doc.optional && (
                <span className="portfolio-optional">(Optional)</span>
              )}
              <div className="portfolio-buttons">
                <button 
                  className="btn btn-primary portfolio-btn"
                  onClick={() => handleDownload(doc)}
                >
                  <i className="fas fa-download"></i> Download
                </button>
                <button 
                  className="btn btn-outline portfolio-btn"
                  onClick={() => {
                    const filePath = `/pdf/${doc.filename}`;
                    window.open(filePath, '_blank');
                  }}
                >
                  <i className="fas fa-eye"></i> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;

