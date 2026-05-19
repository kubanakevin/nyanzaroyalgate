// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";

const QUICK_LINKS = [
    { to: "/", label: "Home" },
    { to: "/rooms", label: "VIP Accommodation" },
    { to: "/dining", label: "Restaurant & Bar" },
    { to: "/wellness", label: "Sauna & Massage" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact Us" },
];

const SERVICES = [
    "Conference Hall",
    "Outside Catering",
    "Online Catering",
    "Event Planning",
    "Weddings & Birthdays",
    "Proposals & Ceremonies",
];

function Footer() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Jost:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --espresso: #1A0F07;
          --bark: #2E1A0D;
          --cream: #FAF6EE;
          --text-muted-footer: rgba(240,232,216,0.55);
          --border-footer: rgba(201,168,76,0.15);
        }

        .nrg-footer {
          background: linear-gradient(160deg, #0E0804 0%, var(--espresso) 40%, var(--bark) 100%);
          color: rgba(240,232,216,0.85);
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Top gold line */
        .nrg-footer::before {
          content: '';
          display: block;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        /* Ambient glow */
        .nrg-footer-glow {
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 50vw;
          height: 50vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ── NEWSLETTER BAND ── */
        .nrg-footer-top {
          border-bottom: 1px solid var(--border-footer);
          padding: 2.5rem 3rem;
        }

        .nrg-footer-top-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .nrg-footer-top-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--cream);
          letter-spacing: 0.5px;
        }

        .nrg-footer-top-text span {
          color: var(--gold-light);
          font-style: italic;
        }

        .nrg-footer-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  background: linear-gradient(135deg, #25D366, #128C7E);
  color: #ffffff;

  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  padding: 0.8rem 1.7rem;
  border-radius: 50px;

  text-decoration: none;
  white-space: nowrap;

  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.3);

  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Hover effect */
.nrg-footer-cta:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 10px 28px rgba(37, 211, 102, 0.45);
}

/* Icon styling */
.nrg-footer-cta svg {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.nrg-footer-cta:hover svg:first-child {
  transform: rotate(10deg) scale(1.1);
}

/* Arrow animation */
.nrg-footer-cta:hover svg:last-child {
  transform: translateX(4px);
}

/* Shine effect */
.nrg-footer-cta::before {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.15);
  transform: skewX(-25deg);
  transition: 0.6s;
}

.nrg-footer-cta:hover::before {
  left: 120%;
}
        /* ── MAIN GRID ── */
        .nrg-footer-main {
          max-width: 1440px;
          margin: 0 auto;
          padding: 3.5rem 3rem 3rem;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
        }

        /* Brand col */
        .nrg-footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          margin-bottom: 1.25rem;
        }

        .nrg-footer-brand-emblem {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: var(--espresso);
          flex-shrink: 0;
        }

        .nrg-footer-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--gold-light);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .nrg-footer-brand-sub {
          font-size: 0.6rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-muted-footer);
        }

        .nrg-footer-about {
          font-size: 0.85rem;
          font-weight: 300;
          color: var(--text-muted-footer);
          line-height: 1.85;
          margin-bottom: 1.5rem;
          max-width: 280px;
        }

        .nrg-footer-location {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.8rem;
          color: var(--text-muted-footer);
          line-height: 1.6;
        }

        .nrg-footer-location svg {
          color: var(--gold);
          margin-top: 3px;
          flex-shrink: 0;
        }

        /* Col headings */
        .nrg-footer-col-title {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .nrg-footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-footer);
        }

        /* Links */
        .nrg-footer-links {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .nrg-footer-links li a,
        .nrg-footer-links li span {
          font-size: 0.82rem;
          font-weight: 300;
          color: rgba(240,232,216,0.7);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }

        .nrg-footer-links li a:hover {
          color: var(--gold-light);
          padding-left: 6px;
        }

        .nrg-footer-links li a::before {
          content: '';
          width: 4px;
          height: 1px;
          background: var(--gold);
          display: inline-block;
          flex-shrink: 0;
          transition: width 0.2s;
        }

        .nrg-footer-links li a:hover::before {
          width: 10px;
        }

        /* Contact col */
        .nrg-footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .nrg-footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .nrg-footer-contact-item:hover {
          transform: translateX(4px);
        }

        .nrg-footer-contact-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          font-size: 0.75rem;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .nrg-footer-contact-item:hover .nrg-footer-contact-icon {
          background: var(--gold);
          color: var(--espresso);
          border-color: var(--gold);
        }

        .nrg-footer-contact-label {
          font-size: 0.68rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted-footer);
        }

        .nrg-footer-contact-value {
          font-size: 0.8rem;
          color: rgba(240,232,216,0.85);
          font-weight: 400;
        }

        /* Social */
        .nrg-footer-socials {
          display: flex;
          gap: 0.6rem;
          margin-top: 1.5rem;
        }

        .nrg-footer-social-btn {
          width: 34px;
          height: 34px;
          border-radius: 4px;
          border: 1px solid rgba(201,168,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(240,232,216,0.6);
          font-size: 0.8rem;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .nrg-footer-social-btn:hover {
          background: var(--gold);
          color: var(--espresso);
          border-color: var(--gold);
          transform: translateY(-3px);
        }

        /* ── BOTTOM BAR ── */
        .nrg-footer-bottom {
          border-top: 1px solid var(--border-footer);
          padding: 1.25rem 3rem;
        }

        .nrg-footer-bottom-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .nrg-footer-copy {
          font-size: 0.75rem;
          font-weight: 300;
          color: var(--text-muted-footer);
          letter-spacing: 0.3px;
        }

        .nrg-footer-copy span {
          color: var(--gold);
        }

        .nrg-footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .nrg-footer-legal a {
          font-size: 0.72rem;
          color: var(--text-muted-footer);
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }

        .nrg-footer-legal a:hover { color: var(--gold-light); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .nrg-footer-main { grid-template-columns: 1fr 1fr; gap: 2rem; padding: 3rem 2rem; }
          .nrg-footer-top { padding: 2rem; }
          .nrg-footer-bottom { padding: 1.25rem 2rem; }
        }

        @media (max-width: 640px) {
          .nrg-footer-main { grid-template-columns: 1fr; padding: 2.5rem 1.5rem; }
          .nrg-footer-top { padding: 1.5rem; }
          .nrg-footer-top-inner { flex-direction: column; align-items: flex-start; }
          .nrg-footer-bottom { padding: 1rem 1.5rem; }
          .nrg-footer-bottom-inner { flex-direction: column; align-items: center; text-align: center; }
          .nrg-footer-legal { flex-wrap: wrap; justify-content: center; gap: 1rem; }
          .nrg-footer-about { max-width: 100%; }
        }
      `}</style>

            <footer className="nrg-footer">
                <div className="nrg-footer-glow" />

                {/* Top CTA band */}
                <div className="nrg-footer-top">
                    <div className="nrg-footer-top-inner">
                        <p className="nrg-footer-top-text">
                            Ready to experience <span>Nyanza Royal Gate</span>?
                        </p>
                        <a
                            href="https://wa.me/250791207400"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nrg-footer-cta"
                        >
                            <FaWhatsapp />
                            Book Your Stay
                            <FaArrowRight />
                        </a>
                    </div>
                </div>

                {/* Main grid */}
                <div className="nrg-footer-main">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="nrg-footer-brand-logo">
                            <div className="nrg-footer-brand-emblem"><GiHotMeal /></div>
                            <div>
                                <div className="nrg-footer-brand-name">Nyanza Royal Gate</div>
                                <div className="nrg-footer-brand-sub">Luxury Apartment</div>
                            </div>
                        </Link>
                        <p className="nrg-footer-about">
                            Experience comfort, luxury, and professional services in the heart of Nyanza —
                            your destination for world-class accommodation, dining, and wellness.
                        </p>
                        <div className="nrg-footer-location">
                            <FaMapMarkerAlt />
                            <span>Nyanza, Southern Province<br />Rwanda</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="nrg-footer-col-title">Navigate</h4>
                        <ul className="nrg-footer-links">
                            {QUICK_LINKS.map(l => (
                                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="nrg-footer-col-title">Services</h4>
                        <ul className="nrg-footer-links">
                            {SERVICES.map(s => (
                                <li key={s}><span>{s}</span></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="nrg-footer-col-title">Contact</h4>
                        <div className="nrg-footer-contact-items">
                            <a href="tel:+250791207400" className="nrg-footer-contact-item">
                                <div className="nrg-footer-contact-icon"><FaPhone /></div>
                                <div>
                                    <div className="nrg-footer-contact-label">Phone</div>
                                    <div className="nrg-footer-contact-value">+250 791 207 400</div>
                                </div>
                            </a>
                            <a href="https://wa.me/250791207400" target="_blank" rel="noopener noreferrer" className="nrg-footer-contact-item">
                                <div className="nrg-footer-contact-icon"><FaWhatsapp /></div>
                                <div>
                                    <div className="nrg-footer-contact-label">WhatsApp</div>
                                    <div className="nrg-footer-contact-value">0791207400</div>
                                </div>
                            </a>
                            <a href="mailto:nyanzaroyalgateapartment@gmail.com" className="nrg-footer-contact-item">
                                <div className="nrg-footer-contact-icon"><FaEnvelope /></div>
                                <div>
                                    <div className="nrg-footer-contact-label">Email</div>
                                    <div className="nrg-footer-contact-value" style={{ fontSize: "0.72rem" }}>nyanzaroyalgateapartment@gmail.com</div>
                                </div>
                            </a>
                        </div>
                        <div className="nrg-footer-socials">
                            <a href="#" className="nrg-footer-social-btn" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" className="nrg-footer-social-btn" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" className="nrg-footer-social-btn" aria-label="Twitter"><FaTwitter /></a>
                            <a href="https://wa.me/250791207400" className="nrg-footer-social-btn" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="nrg-footer-bottom">
                    <div className="nrg-footer-bottom-inner">
                        <p className="nrg-footer-copy">
                            © 2025 <span>Nyanza Royal Gate Apartment</span>. All rights reserved.
                        </p>
                        <div className="nrg-footer-legal">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;