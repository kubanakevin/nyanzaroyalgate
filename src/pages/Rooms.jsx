// pages/RoomsPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaPhone, FaWhatsapp, FaArrowRight, FaCheck, FaWifi,
  FaTv, FaSnowflake, FaShower, FaCoffee, FaLock, FaStar
} from "react-icons/fa";
import { MdMeetingRoom, MdKingBed, MdBed } from "react-icons/md";

/* ─── Scroll reveal ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const ROOMS = [
  {
    id: "standard",
    tier: "Standard",
    name: "Classic Room",
    size: "20 m²",
    guests: "1–2 guests",
    icon: <MdBed size={28} />,
    tagline: "Quiet comfort for the solo traveller or couple",
    price: "From RWF 35,000",
    features: ["Double bed", "En-suite bathroom", "Air conditioning", "Free Wi-Fi", "Smart TV", "Daily housekeeping"],
    amenityIcons: [<FaWifi />, <FaTv />, <FaSnowflake />, <FaShower />, <FaCoffee />, <FaLock />],
    highlight: false,
  },
  {
    id: "deluxe",
    tier: "Deluxe",
    name: "Deluxe Suite",
    size: "32 m²",
    guests: "1–2 guests",
    icon: <MdKingBed size={28} />,
    tagline: "Elevated space with premium furnishings and added luxury",
    price: "From RWF 55,000",
    features: ["King-size bed", "Luxury en-suite", "Air conditioning", "Free Wi-Fi", "55″ Smart TV", "Mini-fridge & bar", "Room service", "Daily housekeeping"],
    amenityIcons: [<FaWifi />, <FaTv />, <FaSnowflake />, <FaShower />, <FaCoffee />, <FaLock />],
    highlight: true,
  },
  {
    id: "vip",
    tier: "VIP",
    name: "Royal VIP Suite",
    size: "48 m²",
    guests: "Up to 4 guests",
    icon: <MdMeetingRoom size={28} />,
    tagline: "The pinnacle of comfort — space, privacy, and royal treatment",
    price: "From RWF 90,000",
    features: ["King-size bed + sofa bed", "Luxury bathroom with tub", "Climate control", "Free Wi-Fi", "65″ Smart TV", "Fully stocked minibar", "Priority room service", "Private lounge area", "Turndown service"],
    amenityIcons: [<FaWifi />, <FaTv />, <FaSnowflake />, <FaShower />, <FaCoffee />, <FaLock />],
    highlight: false,
  },
];

const POLICIES = [
  { label: "Check-in", value: "From 2:00 PM" },
  { label: "Check-out", value: "By 11:00 AM" },
  { label: "Early Check-in", value: "On request" },
  { label: "Late Check-out", value: "On request" },
  { label: "Cancellation", value: "24 hrs notice" },
  { label: "Pets", value: "Not permitted" },
];

export default function RoomsPage() {
  useReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        :root {
          --gold: #C9A84C; --gold-light: #E8C97A; --gold-pale: #F5E6C0;
          --espresso: #1A0F07; --bark: #2E1A0D;
          --cream: #FAF6EE; --warm-white: #FFFDF8;
          --text-dark: #1A0F07; --text-body: #3D2B1A; --text-muted: #8A7060;
          --accent: #D4622A; --border: rgba(201,168,76,0.2);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; background: var(--warm-white); color: var(--text-body); }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .rd1 { transition-delay: 0.1s; } .rd2 { transition-delay: 0.2s; } .rd3 { transition-delay: 0.3s; } .rd4 { transition-delay: 0.4s; }

        /* HERO */
        .rp-hero {
          position: relative; min-height: 60vh;
          background: linear-gradient(150deg, var(--espresso) 0%, #3A1F0A 50%, #5C2E0A 100%);
          display: flex; align-items: flex-end; overflow: hidden;
        }
        .rp-hero::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(201,168,76,0.015) 60px, rgba(201,168,76,0.015) 61px);
        }
        .rp-hero::after {
          content: ''; position: absolute; top: -20%; right: -5%;
          width: 55vw; height: 55vw; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%);
        }
        .rp-hero-inner {
          position: relative; z-index: 2; max-width: 1440px; margin: 0 auto;
          width: 100%; padding: 8rem 3rem 4rem;
        }
        .rp-hero-label {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-size: 0.68rem; font-weight: 600; letter-spacing: 4px;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 1rem;
        }
        .rp-hero-label::before { content: ''; width: 28px; height: 1px; background: var(--gold); display: block; }
        .rp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700;
          color: var(--cream); line-height: 1.08; margin-bottom: 1rem;
        }
        .rp-hero-title em { font-style: italic; color: var(--gold-light); }
        .rp-hero-sub {
          font-size: 0.95rem; font-weight: 300;
          color: rgba(240,232,216,0.65); max-width: 520px; line-height: 1.8;
        }

        /* SECTION */
        .rp-section { max-width: 1440px; margin: 0 auto; padding: 5rem 3rem; }
        .rp-section-full { padding: 5rem 3rem; width: 100%; }
        .rp-label {
          font-size: 0.68rem; font-weight: 600; letter-spacing: 4px;
          text-transform: uppercase; color: var(--gold);
          display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.75rem;
        }
        .rp-label::before { content: ''; width: 28px; height: 1px; background: var(--gold); }
        .rp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.9rem, 3vw, 2.75rem); font-weight: 700;
          color: var(--text-dark); line-height: 1.15; margin-bottom: 1rem;
        }
        .rp-title em { font-style: italic; color: var(--gold); }
        .rp-body { font-size: 0.9rem; font-weight: 300; color: var(--text-muted); line-height: 1.85; max-width: 540px; }

        /* ROOMS GRID */
        .rp-rooms-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem; margin-top: 3.5rem;
        }
        .rp-room-card {
          background: #fff; border: 1px solid rgba(0,0,0,0.07);
          border-radius: 6px; overflow: hidden;
          display: flex; flex-direction: column;
          transition: all 0.35s ease;
          position: relative;
        }
        .rp-room-card.featured {
          border: 2px solid var(--gold);
          box-shadow: 0 0 0 4px rgba(201,168,76,0.08);
        }
        .rp-room-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
        }
        .rp-room-badge {
          position: absolute; top: 1rem; right: 1rem;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: var(--espresso);
          font-size: 0.62rem; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 0.3rem 0.75rem; border-radius: 100px;
        }
        .rp-room-visual {
          height: 180px;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .rp-room-visual-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--espresso) 0%, var(--bark) 60%, #3A1F0A 100%);
        }
        .rp-room-visual.featured .rp-room-visual-bg {
          background: linear-gradient(135deg, #3A1F0A 0%, var(--bark) 40%, #5C2E0A 100%);
        }
        .rp-room-visual-icon {
          position: relative; z-index: 1;
          width: 72px; height: 72px; border-radius: 50%;
          background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.35);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold-light); font-size: 1.8rem;
        }
        .rp-room-size-tag {
          position: absolute; bottom: 1rem; left: 1rem; z-index: 1;
          font-size: 0.68rem; letter-spacing: 1px; color: rgba(240,232,216,0.7);
          background: rgba(0,0,0,0.3); padding: 0.2rem 0.6rem; border-radius: 100px;
        }
        .rp-room-body { padding: 1.75rem; flex: 1; display: flex; flex-direction: column; }
        .rp-room-tier {
          font-size: 0.62rem; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: var(--gold); margin-bottom: 0.4rem;
        }
        .rp-room-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 700;
          color: var(--text-dark); margin-bottom: 0.5rem;
        }
        .rp-room-tagline {
          font-size: 0.82rem; font-weight: 300;
          color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;
        }
        .rp-room-features {
          list-style: none; padding: 0;
          display: flex; flex-direction: column; gap: 0.45rem;
          margin-bottom: 1.5rem; flex: 1;
        }
        .rp-room-features li {
          font-size: 0.8rem; color: var(--text-body);
          display: flex; align-items: center; gap: 0.6rem;
        }
        .rp-room-features li svg { color: var(--gold); flex-shrink: 0; font-size: 0.65rem; }
        .rp-room-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 1.25rem; border-top: 1px solid rgba(0,0,0,0.06);
          flex-wrap: wrap; gap: 0.75rem;
        }
        .rp-room-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; font-weight: 700; color: var(--text-dark);
        }
        .rp-room-price span { font-size: 0.72rem; font-family: 'Jost', sans-serif; font-weight: 300; color: var(--text-muted); }
        .rp-book-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: var(--espresso); text-decoration: none;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 0.55rem 1.1rem; border-radius: 2px;
          transition: all 0.25s ease;
        }
        .rp-book-btn:hover { box-shadow: 0 4px 16px rgba(201,168,76,0.35); transform: translateY(-1px); }

        /* POLICIES */
        .rp-dark-band {
          background: linear-gradient(135deg, var(--espresso) 0%, var(--bark) 100%);
        }
        .rp-policies-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.1); border-radius: 4px;
          overflow: hidden; margin-top: 3rem;
        }
        .rp-policy-item {
          background: rgba(255,255,255,0.04); padding: 1.5rem;
          text-align: center; transition: background 0.2s;
        }
        .rp-policy-item:hover { background: rgba(201,168,76,0.08); }
        .rp-policy-label {
          font-size: 0.65rem; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: var(--gold); margin-bottom: 0.4rem;
        }
        .rp-policy-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; font-weight: 600; color: var(--cream);
        }
        .rp-dark-band .rp-title { color: var(--cream); }
        .rp-dark-band .rp-body { color: rgba(240,232,216,0.6); }

        /* CTA BAND */
        .rp-cta-band {
          background: var(--cream); border-top: 1px solid rgba(201,168,76,0.15);
          padding: 4rem 3rem; text-align: center;
        }
        .rp-cta-inner { max-width: 600px; margin: 0 auto; }
        .rp-cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 700;
          color: var(--text-dark); margin-bottom: 1rem;
        }
        .rp-cta-title em { font-style: italic; color: var(--gold); }
        .rp-cta-body { font-size: 0.9rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 2rem; }
        .rp-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 0.6rem;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: var(--espresso); text-decoration: none;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 0.9rem 2rem; border-radius: 2px;
          transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(201,168,76,0.3);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(201,168,76,0.45); }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 0.6rem;
          background: transparent; color: var(--text-dark); text-decoration: none;
          font-size: 0.75rem; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 0.9rem 2rem; border-radius: 2px;
          border: 1px solid rgba(201,168,76,0.4); transition: all 0.3s ease;
        }
        .btn-ghost:hover { background: rgba(201,168,76,0.07); border-color: var(--gold); }

        @media (max-width: 1024px) {
          .rp-rooms-grid { grid-template-columns: 1fr 1fr; }
          .rp-section, .rp-section-full { padding: 4rem 2rem; }
          .rp-hero-inner { padding: 7rem 2rem 3rem; }
        }
        @media (max-width: 640px) {
          .rp-rooms-grid { grid-template-columns: 1fr; }
          .rp-policies-grid { grid-template-columns: 1fr 1fr; }
          .rp-section, .rp-section-full, .rp-cta-band { padding: 3rem 1.5rem; }
          .rp-hero-inner { padding: 6rem 1.5rem 2.5rem; }
        }
      `}</style>

      <Header />

      {/* Hero */}
      <section className="rp-hero">
        <div className="rp-hero-inner">
          <p className="rp-hero-label reveal">Accommodation</p>
          <h1 className="rp-hero-title reveal rd1">Where Rest Becomes<br /><em>Royal</em></h1>
          <p className="rp-hero-sub reveal rd2">
            Each room at Nyanza Royal Gate is crafted to deliver total comfort —
            from quiet standard rooms to sprawling VIP suites, every detail is intentional.
          </p>
        </div>
      </section>

      {/* Intro */}
      <div className="rp-section">
        <p className="rp-label reveal">Our Rooms</p>
        <h2 className="rp-title reveal rd1">Three Tiers of <em>Luxury</em></h2>
        <p className="rp-body reveal rd2">
          Whether you're here for a single night or an extended stay, we have a room
          that fits your pace. All rooms include complimentary Wi-Fi, daily housekeeping,
          and access to our restaurant and wellness facilities.
        </p>

        <div className="rp-rooms-grid">
          {ROOMS.map((room, i) => (
            <div key={room.id} className={`rp-room-card reveal rd${i + 1}${room.highlight ? " featured" : ""}`}>
              {room.highlight && <div className="rp-room-badge"><FaStar style={{ fontSize: "0.55rem", marginRight: "3px" }} />Most Popular</div>}
              <div className={`rp-room-visual${room.highlight ? " featured" : ""}`}>
                <div className="rp-room-visual-bg" />
                <div className="rp-room-visual-icon">{room.icon}</div>
                <div className="rp-room-size-tag">{room.size} · {room.guests}</div>
              </div>
              <div className="rp-room-body">
                <div className="rp-room-tier">{room.tier}</div>
                <div className="rp-room-name">{room.name}</div>
                <p className="rp-room-tagline">{room.tagline}</p>
                <ul className="rp-room-features">
                  {room.features.map(f => (
                    <li key={f}><FaCheck />{f}</li>
                  ))}
                </ul>
                <div className="rp-room-footer">
                  <div className="rp-room-price">{room.price} <span>/ night</span></div>
                  <a href="tel:+250791207400" className="rp-book-btn">
                    Book <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Policies */}
      <div className="rp-dark-band">
        <div className="rp-section-full" style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <p className="rp-label reveal" style={{ color: "var(--gold-light)" }}>Good to Know</p>
          <h2 className="rp-title reveal rd1">Hotel <em>Policies</em></h2>
          <div className="rp-policies-grid">
            {POLICIES.map((p, i) => (
              <div key={p.label} className={`rp-policy-item reveal rd${(i % 3) + 1}`}>
                <div className="rp-policy-label">{p.label}</div>
                <div className="rp-policy-value">{p.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rp-cta-band">
        <div className="rp-cta-inner">
          <h2 className="rp-cta-title reveal">Ready to <em>Reserve</em> Your Room?</h2>
          <p className="rp-cta-body reveal rd1">
            Call or WhatsApp us directly to check availability and secure your stay.
            Our team is available 24/7 to assist you.
          </p>
          <div className="rp-cta-btns reveal rd2">
            <a href="tel:+250791207400" className="btn-primary"><FaWhatsapp /> Call / WhatsApp</a>
            <Link to="/contact" className="btn-ghost">More Options <FaArrowRight /></Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}