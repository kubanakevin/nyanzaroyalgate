import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <>
      <Header />

      <div className="contact-page">

        {/* HERO */}
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            We are here to assist you 24/7. Reach out for reservations,
            inquiries, or support at Nyanza Royal Gate Apartment.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="contact-grid">

          <div className="contact-card">
            <FaPhone className="icon" />
            <h3>Phone</h3>
            <p>+250 791 207 400</p>
            <a href="tel:+250791207400">Call Now</a>
          </div>

          <div className="contact-card">
            <FaWhatsapp className="icon" />
            <h3>WhatsApp</h3>
            <p>Fast booking & support</p>
            <a
              href="https://wa.me/250791207400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat Now
            </a>
          </div>

          <div className="contact-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>nyanzaroyalgateapartment@gmail.com</p>
            <a href="mailto:nyanzaroyalgateapartment@gmail.com">
              Send Email
            </a>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Location</h3>
            <p>Nyanza, Southern Province, Rwanda</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Map
            </a>
          </div>

        </div>
      </div>

      <Footer />

      {/* CSS */}
      <style>{`
        .contact-page {
          padding: 4rem 2rem;
          background: linear-gradient(160deg, #0E0804, #1A0F07);
          color: #FAF6EE;
          min-height: 80vh;
          font-family: 'Jost', sans-serif;
        }

        /* HERO */
        .contact-hero {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        .contact-hero h1 {
          font-size: 2.5rem;
          color: #E8C97A;
          font-family: 'Cormorant Garamond', serif;
          margin-bottom: 1rem;
        }

        .contact-hero p {
          font-size: 1rem;
          color: rgba(240,232,216,0.75);
          line-height: 1.7;
        }

        /* GRID */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* CARD */
        .contact-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: #C9A84C;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .contact-card .icon {
          font-size: 2rem;
          color: #C9A84C;
          margin-bottom: 1rem;
        }

        .contact-card h3 {
          margin-bottom: 0.5rem;
          color: #E8C97A;
        }

        .contact-card p {
          font-size: 0.85rem;
          color: rgba(240,232,216,0.7);
          margin-bottom: 1rem;
        }

        .contact-card a {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #C9A84C, #E8C97A);
          color: #1A0F07;
          text-decoration: none;
          font-weight: 600;
          border-radius: 30px;
          transition: 0.3s ease;
          font-size: 0.75rem;
        }

        .contact-card a:hover {
          transform: scale(1.05);
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .contact-hero h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default ContactUs;