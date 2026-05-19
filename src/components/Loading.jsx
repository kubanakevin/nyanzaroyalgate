import React, { useEffect, useState } from "react";
import IconImage from "../assets/icon.png"; // your logo image

function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (fadeOut) return null;

  return (
    <>
      <div className="loading-screen">
        <div className="loader-content">

          {/* LOGO IMAGE */}
          <img src={IconImage} alt="Logo" className="logo-image" />

          <h1>Nyanza Royal Gate</h1>
          <p>Luxury • Comfort • Experience</p>

          <div className="spinner"></div>
        </div>
      </div>

      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          background: linear-gradient(160deg, #0E0804, #1A0F07);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          animation: fadeIn 0.5s ease;
        }

        .loader-content {
          text-align: center;
          color: #FAF6EE;
        }

        /* LOGO IMAGE STYLE */
        .logo-image {
          width: 90px;
          height: 90px;
          object-fit: contain;
          margin: 0 auto 1rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          padding: 10px;
          box-shadow: 0 0 25px rgba(201,168,76,0.35);
          animation: pulse 1.5s infinite;
        }

        .loader-content h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          color: #E8C97A;
          margin-bottom: 0.3rem;
          letter-spacing: 1px;
        }

        .loader-content p {
          font-size: 0.85rem;
          color: rgba(240,232,216,0.7);
          margin-bottom: 1.5rem;
        }

        .spinner {
          width: 35px;
          height: 35px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top: 3px solid #C9A84C;
          border-radius: 50%;
          margin: 0 auto;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default LoadingScreen;