// components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { MdSpa, MdEvent, MdMeetingRoom } from "react-icons/md";
import { RiHomeHeartLine } from "react-icons/ri";
import IconImage from "../assets/icon.png"; // Optional: If you want to use an image for the logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Jost:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --gold-pale: #F5E6C0;
          --espresso: #1A0F07;
          --bark: #2E1A0D;
          --mahogany: #5C2E0A;
          --cream: #FAF6EE;
          --text-light: #F0E8D8;
          --text-muted: #B8A898;
          --accent: #D4622A;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .nrg-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          transition: all 0.4s ease;
          background: linear-gradient(135deg, var(--espresso) 0%, var(--bark) 60%, #3A1F0A 100%);
          border-bottom: 1px solid rgba(201, 168, 76, 0.25);
        }

        .nrg-header.scrolled {
          box-shadow: 0 4px 30px rgba(0,0,0,0.5);
          background: linear-gradient(135deg, #0E0804 0%, var(--espresso) 100%);
        }

        /* Top accent bar */
        .nrg-header::before {
          content: '';
          display: block;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        .nrg-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 3rem;
          max-width: 1440px;
          margin: 0 auto;
          gap: 1rem;
        }

        /* ── LOGO ── */
        .nrg-logo a {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nrg-logo-emblem {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: var(--espresso);
          box-shadow: 0 0 0 2px rgba(201,168,76,0.3), 0 4px 12px rgba(0,0,0,0.4);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .nrg-logo a:hover .nrg-logo-emblem {
          transform: rotate(10deg) scale(1.05);
        }

        .nrg-logo-text {
          display: flex;
          flex-direction: column;
        }

        .nrg-logo-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--gold-light);
          letter-spacing: 2px;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .nrg-logo-sub {
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 300;
          color: var(--text-muted);
          letter-spacing: 5px;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ── DESKTOP NAV ── */
        .nrg-nav-desktop ul {
          display: flex;
          gap: 0.25rem;
          list-style: none;
          align-items: center;
        }

        .nrg-nav-desktop a {
          text-decoration: none;
          color: var(--text-light);
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
          transition: all 0.25s ease;
          position: relative;
        }

        .nrg-nav-desktop a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1.5px;
          background: var(--gold);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nrg-nav-desktop a:hover {
          color: var(--gold-light);
          background: rgba(201,168,76,0.07);
        }

        .nrg-nav-desktop a:hover::after,
        .nrg-nav-desktop a.active::after {
          width: 70%;
        }

        .nrg-nav-desktop a.active {
          color: var(--gold);
        }

        .nrg-nav-icon {
          font-size: 0.85rem;
          opacity: 0.75;
        }

        /* ── CTA BUTTON (WhatsApp Premium Style) ── */
.nrg-cta a {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: #ffffff;

  font-family: 'Jost', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  text-decoration: none;
  padding: 0.75rem 1.5rem;

  border-radius: 50px;

  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);

  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Hover effect */
.nrg-cta a:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45);
}

/* Icon animation */
.nrg-cta a svg {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.nrg-cta a:hover svg {
  transform: rotate(10deg) scale(1.1);
}

/* Soft glow effect */
.nrg-cta a::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.15);
  transform: skewX(-25deg);
  transition: 0.5s;
}

.nrg-cta a:hover::before {
  left: 100%;
}

        /* ── MOBILE TOGGLE ── */
        .nrg-toggle {
          display: none;
          background: none;
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 4px;
          padding: 0.45rem 0.6rem;
          cursor: pointer;
          color: var(--gold-light);
          font-size: 1.1rem;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .nrg-toggle:hover {
          border-color: var(--gold);
          background: rgba(201,168,76,0.1);
        }

        /* ── MOBILE NAV ── */
        .nrg-nav-mobile {
          background: var(--espresso);
          border-top: 1px solid rgba(201,168,76,0.15);
          padding: 0;
          overflow: hidden;
          animation: mobileSlide 0.3s ease forwards;
        }

        @keyframes mobileSlide {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 600px; }
        }

        .nrg-nav-mobile ul {
          list-style: none;
          padding: 0.75rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .nrg-nav-mobile a {
          color: var(--text-light);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.9rem 0.5rem;
          border-bottom: 1px solid rgba(201,168,76,0.1);
          transition: all 0.2s ease;
        }

        .nrg-nav-mobile a:hover,
        .nrg-nav-mobile a.active {
          color: var(--gold);
          padding-left: 1rem;
        }

        .nrg-mobile-cta {
          margin: 1rem 0.5rem 0;
        }

        .nrg-mobile-cta a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: var(--espresso);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0.85rem 1.5rem;
          border-radius: 2px;
        }
        

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .nrg-container { padding: 0.9rem 1.5rem; }
          .nrg-nav-desktop a { padding: 0.5rem 0.55rem; font-size: 0.72rem; }
        }

        @media (max-width: 820px) {
          .nrg-nav-desktop { display: none; }
          .nrg-cta { display: none; }
          .nrg-toggle { display: flex; align-items: center; }
          .nrg-logo-title { font-size: 1.1rem; }
        }

        @media (max-width: 480px) {
          .nrg-container { padding: 0.75rem 1rem; }
          .nrg-logo-emblem { width: 38px; height: 38px; font-size: 1.1rem; }
          .nrg-logo-title { font-size: 0.95rem; letter-spacing: 1px; }
          .nrg-logo-sub { font-size: 0.5rem; letter-spacing: 3px; }
        }
      `}</style>

      <header className={`nrg-header${isScrolled ? " scrolled" : ""}`}>
        <div className="nrg-container">
          {/* Logo */}
          <div className="nrg-logo">
            <Link to="/">
              <div className="nrg-logo-emblem">
                <img src={IconImage} alt="Nyanza Royal Gate Logo" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="nrg-logo-text">
                <span className="nrg-logo-title">Nyanza Royal Gate</span>
                <span className="nrg-logo-sub">Luxury Apartment</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="nrg-nav-desktop">
            <ul>
              <li><NavLink to="/"><span className="nrg-nav-icon"><RiHomeHeartLine /></span> Home</NavLink></li>
              <li><NavLink to="/rooms"><span className="nrg-nav-icon"><MdMeetingRoom /></span> Rooms</NavLink></li>
              <li><NavLink to="/dining"><span className="nrg-nav-icon"><GiHotMeal /></span> Restaurant</NavLink></li>
              <li><NavLink to="/wellness"><span className="nrg-nav-icon"><MdSpa /></span> Wellness</NavLink></li>
              <li><NavLink to="/events"><span className="nrg-nav-icon"><MdEvent /></span> Events</NavLink></li>
              <li><NavLink to="/contact"><span className="nrg-nav-icon"><FaPhone /></span> Contact</NavLink></li>
            </ul>
          </nav>

         {/* CTA */}
<div className="nrg-cta">
  <a
    href="https://wa.me/250791207400"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
    Book on WhatsApp
  </a>
</div>

          {/* Mobile Toggle */}
          <button className="nrg-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="nrg-nav-mobile">
            <ul>
              <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}><RiHomeHeartLine /> Home</NavLink></li>
              <li><NavLink to="/rooms" onClick={() => setIsMenuOpen(false)}><MdMeetingRoom /> Rooms</NavLink></li>
              <li><NavLink to="/dining" onClick={() => setIsMenuOpen(false)}><GiHotMeal /> Restaurant & Bar</NavLink></li>
              <li><NavLink to="/wellness" onClick={() => setIsMenuOpen(false)}><MdSpa /> Sauna & Massage</NavLink></li>
              <li><NavLink to="/events" onClick={() => setIsMenuOpen(false)}><MdEvent /> Events</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}><FaPhone /> Contact</NavLink></li>
            </ul>
            <div className="nrg-mobile-cta">
              <a href="tel:+250791207400"><FaWhatsapp /> Call / WhatsApp: 0791207400</a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;