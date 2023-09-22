import React, { useState, useEffect } from 'react';

function StatusPage() {
  const [status, setStatus] = useState('Loading...');
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Simulate fetching status from an API (replace with actual data fetching)
    setTimeout(() => {
      setStatus('All systems operational');
      setShowImage(true); // Show the image after updating the status
    }, 2000); // Simulate a 2-second delay
  }, []);

  return (
    <div className="status-page">
      <h1>Status</h1>
      <p>{status}</p>
      {showImage && (
        <img
          src="https://www.researchgate.net/profile/Gul-Baloch-2/publication/271339663/figure/tbl3/AS:668975851663360@1536507680117/Details-about-Crime-Prisoners-Status-Education-and-Co-accused.png" // Replace with the actual URL of your image
          alt="Status Image"
        />
      )}
    </div>
  );
}

export default StatusPage;
