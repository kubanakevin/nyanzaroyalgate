import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaGlassCheers, FaRing, FaBirthdayCake, FaBuilding } from "react-icons/fa";

function Events() {
  return (
    <>
      <Header />

      <div className="events-page">

        {/* HERO */}
        <div className="events-hero">
          <h1>Events & Celebrations</h1>
          <p>
            Host unforgettable moments at Nyanza Royal Gate Apartment.
            We provide elegant spaces and full event support for all occasions.
          </p>
        </div>

        {/* EVENTS GRID */}
        <div className="events-grid">

          <div className="event-card">
            <FaRing className="icon" />
            <h3>Weddings</h3>
            <p>Beautiful and elegant wedding ceremonies with full setup and decoration.</p>
          </div>

          <div className="event-card">
            <FaBirthdayCake className="icon" />
            <h3>Birthdays</h3>
            <p>Celebrate your special day in a stylish and joyful environment.</p>
          </div>

          <div className="event-card">
            <FaGlassCheers className="icon" />
            <h3>Proposals</h3>
            <p>Romantic and private setups for unforgettable proposal moments.</p>
          </div>

          <div className="event-card">
            <FaBuilding className="icon" />
            <h3>Corporate Events</h3>
            <p>Professional conference halls for meetings, training, and seminars.</p>
          </div>

          <div className="event-card">
            <FaCalendarAlt className="icon" />
            <h3>Special Occasions</h3>
            <p>Any celebration tailored to your needs with full event planning support.</p>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="events-cta">
          <h2>Plan Your Event With Us</h2>
          <p>Contact us today and let’s make your event unforgettable.</p>

          <a
            href="https://wa.me/250791207400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on WhatsApp
          </a>
        </div>

      </div>

      <Footer />

      {/* CSS */}
      <style>{`
        .events-page {
          background: linear-gradient(160deg, #0E0804, #1A0F07);
          color: #FAF6EE;
          font-family: 'Jost', sans-serif;
          padding: 4rem 2rem;
          min-height: 80vh;
        }

        /* HERO */
        .events-hero {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        .events-hero h1 {
          font-size: 2.6rem;
          font-family: 'Cormorant Garamond', serif;
          color: #E8C97A;
          margin-bottom: 1rem;
        }

        .events-hero p {
          font-size: 1rem;
          color: rgba(240,232,216,0.75);
          line-height: 1.7;
        }

        /* GRID */
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* CARD */
        .event-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .event-card:hover {
          transform: translateY(-5px);
          border-color: #C9A84C;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .event-card .icon {
          font-size: 2rem;
          color: #C9A84C;
          margin-bottom: 1rem;
        }

        .event-card h3 {
          color: #E8C97A;
          margin-bottom: 0.5rem;
        }

        .event-card p {
          font-size: 0.85rem;
          color: rgba(240,232,216,0.7);
          line-height: 1.6;
        }

        /* CTA */
        .events-cta {
          margin-top: 4rem;
          text-align: center;
          padding: 3rem 1.5rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .events-cta h2 {
          color: #E8C97A;
          font-size: 2rem;
          margin-bottom: 1rem;
          font-family: 'Cormorant Garamond', serif;
        }

        .events-cta p {
          color: rgba(240,232,216,0.75);
          margin-bottom: 1.5rem;
        }

        .events-cta a {
          display: inline-block;
          padding: 0.8rem 1.6rem;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          text-decoration: none;
          font-weight: 600;
          border-radius: 50px;
          transition: 0.3s ease;
        }

        .events-cta a:hover {
          transform: scale(1.05);
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .events-hero h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default Events;