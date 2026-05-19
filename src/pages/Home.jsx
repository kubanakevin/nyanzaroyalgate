// pages/HomePage.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/Loading";
import {
    FaPhone, FaWhatsapp, FaEnvelope, FaStar, FaArrowRight,
    FaMapMarkerAlt, FaWifi, FaParking, FaShieldAlt, FaClock
} from "react-icons/fa";
import { GiHotMeal, GiCandleLight, GiWineGlass } from "react-icons/gi";
import { MdSpa, MdEvent, MdMeetingRoom, MdPool } from "react-icons/md";
import { RiHomeHeartLine } from "react-icons/ri";

/* ─── Scroll-reveal hook ─── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const io = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.12 }
        );
        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);
}

/* ─── Static data ─── */
const CORE_SERVICES = [
    {
        icon: <MdMeetingRoom size={32} />,
        label: "VIP Accommodation",
        desc: "Elegantly furnished suites and rooms for short or extended stays, each designed for total privacy and comfort.",
        link: "/rooms",
        color: "#C9A84C",
    },
    {
        icon: <GiHotMeal size={32} />,
        label: "Restaurant & Bar",
        desc: "Savour expertly crafted Rwandan and international cuisine alongside curated wines, cocktails, and spirits.",
        link: "/dining",
        color: "#D4622A",
    },
    {
        icon: <MdSpa size={32} />,
        label: "Sauna & Massage",
        desc: "Rejuvenate body and mind with therapeutic massages, steam sauna, and personalised wellness rituals.",
        link: "/wellness",
        color: "#7A9E7E",
    },
];

const OTHER_SERVICES = [
    { icon: <MdMeetingRoom />, label: "Conference Hall" },
    { icon: <GiHotMeal />, label: "Outside Catering" },
    { icon: <GiHotMeal />, label: "Online Catering" },
    { icon: <MdEvent />, label: "Event Planning" },
    { icon: <GiCandleLight />, label: "Weddings" },
    { icon: <GiWineGlass />, label: "Birthdays" },
    { icon: <GiCandleLight />, label: "Proposals" },
    { icon: <MdEvent />, label: "Civil Ceremonies" },
];

const AMENITIES = [
    { icon: <FaWifi />, label: "Free High-Speed Wi-Fi" },
    { icon: <FaParking />, label: "Secure Parking" },
    { icon: <FaShieldAlt />, label: "24/7 Security" },
    { icon: <FaClock />, label: "24-Hour Reception" },
    { icon: <MdPool />, label: "Relaxation Lounge" },
    { icon: <GiWineGlass />, label: "In-Room Bar Service" },
];

const TESTIMONIALS = [
    {
        name: "Amina K.",
        role: "Business Traveller",
        text: "The rooms are impeccably clean and the staff is wonderfully attentive. Nyanza Royal Gate exceeded every expectation — I've already booked my next stay.",
        stars: 5,
    },
    {
        name: "Jean-Pierre M.",
        role: "Wedding Guest",
        text: "We hosted our reception here and it was truly magical. The event team handled every detail perfectly and the food was outstanding.",
        stars: 5,
    },
    {
        name: "Sophie T.",
        role: "Wellness Retreat",
        text: "The massage and sauna services are world-class. I left feeling completely revitalised. This is the hidden gem of Nyanza.",
        stars: 5,
    },
];

/* ═══════════════════════════════════════════════ */

function HomePage() {
    const [loading, setLoading] = useState(true);
    useReveal();

    useEffect(() => {
        // Simulate loading time (remove this in production or replace with actual data fetching)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --gold-pale: #F5E6C0;
          --espresso: #1A0F07;
          --bark: #2E1A0D;
          --cream: #FAF6EE;
          --warm-white: #FFFDF8;
          --text-dark: #1A0F07;
          --text-body: #3D2B1A;
          --text-muted: #8A7060;
          --accent-orange: #D4622A;
          --accent-green: #5A7D5E;
          --border: rgba(201,168,76,0.2);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'Jost', sans-serif; background: var(--warm-white); color: var(--text-body); }

        /* ── Scroll reveal ── */
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        /* ── HERO ── */
        .nrg-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(160deg, var(--espresso) 0%, #3A1F0A 40%, #5C2E0A 100%);
        }

        /* Decorative grain texture */
        .nrg-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.5;
          pointer-events: none;
        }

        /* Radial glow */
        .nrg-hero::after {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60vw;
          height: 60vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%);
          pointer-events: none;
        }

        .nrg-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1440px;
          margin: 0 auto;
          padding: 8rem 3rem 6rem;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .nrg-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(201,168,76,0.15);
          border: 1px solid rgba(201,168,76,0.35);
          border-radius: 100px;
          padding: 0.4rem 1rem;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gold-light);
          margin-bottom: 1.5rem;
        }

        .nrg-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 700;
          color: #FAF6EE;
          line-height: 1.08;
          letter-spacing: -0.5px;
          margin-bottom: 1.5rem;
        }

        .nrg-hero-title em {
          font-style: italic;
          color: var(--gold-light);
        }

        .nrg-hero-desc {
          font-size: 1rem;
          font-weight: 300;
          color: rgba(240,232,216,0.75);
          line-height: 1.8;
          max-width: 480px;
          margin-bottom: 2.5rem;
        }

        .nrg-hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          color: var(--espresso);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.9rem 2rem;
          border-radius: 2px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(201,168,76,0.35);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(201,168,76,0.5);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: transparent;
          color: var(--gold-light);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.9rem 2rem;
          border-radius: 2px;
          border: 1px solid rgba(201,168,76,0.4);
          transition: all 0.3s ease;
        }

        .btn-ghost:hover {
          background: rgba(201,168,76,0.1);
          border-color: var(--gold);
        }

        /* Hero right: stats card */
        .nrg-hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .nrg-stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 6px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .nrg-stat-card:hover {
          background: rgba(201,168,76,0.08);
          border-color: rgba(201,168,76,0.4);
          transform: translateY(-3px);
        }

        .nrg-stat-card.featured {
          grid-column: span 2;
          background: linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05));
          border-color: rgba(201,168,76,0.35);
        }

        .nrg-stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1;
          margin-bottom: 0.3rem;
        }

        .nrg-stat-label {
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(240,232,216,0.6);
        }

        .nrg-stat-icon {
          font-size: 1.5rem;
          color: var(--gold);
          margin-bottom: 0.75rem;
        }

        /* ── SECTION WRAPPER ── */
        .nrg-section {
          padding: 6rem 3rem;
          max-width: 1440px;
          margin: 0 auto;
          width: 100%;
        }

        .nrg-section-full {
          padding: 6rem 3rem;
          width: 100%;
        }

        .nrg-section-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nrg-section-label::before {
          content: '';
          display: block;
          width: 30px;
          height: 1px;
          background: var(--gold);
        }

        .nrg-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }

        .nrg-section-title em {
          font-style: italic;
          color: var(--gold);
        }

        .nrg-section-body {
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.85;
          max-width: 560px;
        }

        /* ── CORE SERVICES ── */
        .nrg-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3.5rem;
        }

        .nrg-service-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          padding: 2.5rem 2rem;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .nrg-service-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-color, var(--gold));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .nrg-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          border-color: transparent;
        }

        .nrg-service-card:hover::before {
          transform: scaleX(1);
        }

        .nrg-service-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          background: rgba(201,168,76,0.1);
          color: var(--card-color, var(--gold));
          transition: all 0.3s ease;
        }

        .nrg-service-card:hover .nrg-service-icon {
          background: var(--card-color, var(--gold));
          color: #fff;
        }

        .nrg-service-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.75rem;
        }

        .nrg-service-desc {
          font-size: 0.88rem;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }

        .nrg-service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--card-color, var(--gold));
          transition: gap 0.2s;
        }

        .nrg-service-card:hover .nrg-service-link {
          gap: 0.85rem;
        }

        /* ── OTHER SERVICES (dark band) ── */
        .nrg-dark-band {
          background: linear-gradient(135deg, var(--espresso) 0%, var(--bark) 60%, #3A1F0A 100%);
          position: relative;
          overflow: hidden;
        }

        .nrg-dark-band::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -5%;
          width: 40vw;
          height: 40vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%);
          pointer-events: none;
        }

        .nrg-dark-band .nrg-section-title {
          color: var(--cream);
        }

        .nrg-dark-band .nrg-section-body {
          color: rgba(240,232,216,0.6);
        }

        .nrg-dark-band .nrg-section-label {
          color: var(--gold-light);
        }

        .nrg-dark-band .nrg-section-label::before {
          background: var(--gold-light);
        }

        .nrg-other-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 3rem;
        }

        .nrg-other-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 4px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: default;
        }

        .nrg-other-card:hover {
          background: rgba(201,168,76,0.1);
          border-color: rgba(201,168,76,0.4);
          transform: translateY(-3px);
        }

        .nrg-other-card-icon {
          font-size: 1.5rem;
          color: var(--gold);
        }

        .nrg-other-card-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba(240,232,216,0.8);
        }

        /* ── AMENITIES ── */
        .nrg-amenities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 3rem;
        }

        .nrg-amenity {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          background: #fff;
          transition: all 0.25s ease;
        }

        .nrg-amenity:hover {
          border-color: var(--gold);
          box-shadow: 0 4px 16px rgba(201,168,76,0.12);
        }

        .nrg-amenity-icon {
          font-size: 1.2rem;
          color: var(--gold);
          flex-shrink: 0;
        }

        .nrg-amenity-label {
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--text-body);
        }

        /* ── TESTIMONIALS ── */
        .nrg-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3.5rem;
        }

        .nrg-testimonial {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          padding: 2rem;
          position: relative;
        }
.nrg-testimonial::before {
  content: '\\201C';
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 5rem;
  color: rgba(201,168,76,0.12);
  line-height: 1;
  pointer-events: none;
}

        .nrg-stars {
          display: flex;
          gap: 0.2rem;
          color: var(--gold);
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }

        .nrg-testimonial-text {
          font-size: 0.9rem;
          font-style: italic;
          font-family: 'Cormorant Garamond', serif;
          color: var(--text-body);
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }

        .nrg-testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nrg-author-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          color: var(--espresso);
          font-size: 1rem;
          flex-shrink: 0;
        }

        .nrg-author-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .nrg-author-role {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.5px;
        }

        /* ── CONTACT SECTION ── */
        .nrg-contact-band {
          background: var(--cream);
          border-top: 1px solid rgba(201,168,76,0.15);
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }

        .nrg-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .nrg-contact-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 2.5rem;
        }

        .nrg-contact-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          text-decoration: none;
          color: inherit;
          transition: all 0.25s ease;
        }

        .nrg-contact-item:hover {
          border-color: var(--gold);
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
        }

        .nrg-contact-item-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--espresso);
          font-size: 1rem;
          flex-shrink: 0;
        }

        .nrg-contact-item-label {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }

        .nrg-contact-item-value {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-dark);
        }

        .nrg-contact-map {
          background: linear-gradient(135deg, var(--bark) 0%, var(--espresso) 100%);
          border-radius: 6px;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1rem;
          min-height: 280px;
        }

        .nrg-contact-map-icon {
          font-size: 2.5rem;
          color: var(--gold);
        }

        .nrg-contact-map-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--cream);
        }

        .nrg-contact-map-body {
          font-size: 0.85rem;
          color: rgba(240,232,216,0.65);
          line-height: 1.7;
        }

        .nrg-contact-map a {
          margin-top: 0.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gold);
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nrg-contact-map a:hover { color: var(--gold-light); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .nrg-section, .nrg-section-full { padding: 5rem 2rem; }
          .nrg-hero-content { padding: 7rem 2rem 5rem; gap: 2.5rem; }
          .nrg-services-grid { grid-template-columns: 1fr 1fr; }
          .nrg-other-grid { grid-template-columns: repeat(4, 1fr); }
          .nrg-testimonials-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .nrg-hero-content { grid-template-columns: 1fr; padding: 6rem 1.5rem 4rem; }
          .nrg-hero-stats { display: none; }
          .nrg-services-grid { grid-template-columns: 1fr; }
          .nrg-other-grid { grid-template-columns: repeat(2, 1fr); }
          .nrg-amenities-grid { grid-template-columns: 1fr 1fr; }
          .nrg-testimonials-grid { grid-template-columns: 1fr; }
          .nrg-contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .nrg-section, .nrg-section-full { padding: 4rem 1.5rem; }
        }

        @media (max-width: 480px) {
          .nrg-other-grid { grid-template-columns: repeat(2, 1fr); }
          .nrg-amenities-grid { grid-template-columns: 1fr; }
          .nrg-hero-actions { flex-direction: column; }
          .btn-primary, .btn-ghost { justify-content: center; }
        }
      `}</style>

            <Header />

            {/* ── HERO ── */}
            <section className="nrg-hero">
                <div className="nrg-hero-content">
                    {/* Left */}
                    <div>
                        <div className="nrg-hero-badge reveal">
                            <FaStar style={{ fontSize: "0.65rem" }} /> Luxury Hospitality · Nyanza, Rwanda
                        </div>
                        <h1 className="nrg-hero-title reveal reveal-delay-1">
                            Where <em>Comfort</em> Meets<br />Refined Elegance
                        </h1>
                        <p className="nrg-hero-desc reveal reveal-delay-2">
                            Nyanza Royal Gate Apartment offers a complete luxury experience —
                            from beautifully appointed rooms and world-class dining to rejuvenating
                            wellness services, all within one distinguished address.
                        </p>
                        <div className="nrg-hero-actions reveal reveal-delay-3">
                            <a href="tel:+250791207400" className="btn-primary">
                                <FaWhatsapp /> Reserve Your Stay
                            </a>
                            <Link to="/rooms" className="btn-ghost">
                                Explore Rooms <FaArrowRight />
                            </Link>
                        </div>
                    </div>

                    {/* Right: stat cards */}
                    <div className="nrg-hero-stats reveal reveal-delay-2">
                        <div className="nrg-stat-card featured">
                            <div className="nrg-stat-icon"><GiHotMeal /></div>
                            <div className="nrg-stat-number">3+</div>
                            <div className="nrg-stat-label">Signature Services under one roof</div>
                        </div>
                        <div className="nrg-stat-card">
                            <div className="nrg-stat-icon"><MdMeetingRoom /></div>
                            <div className="nrg-stat-number">VIP</div>
                            <div className="nrg-stat-label">Private Suites & Rooms</div>
                        </div>
                        <div className="nrg-stat-card">
                            <div className="nrg-stat-icon"><FaClock /></div>
                            <div className="nrg-stat-number">24/7</div>
                            <div className="nrg-stat-label">Attentive Service</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INTRO ── */}
            <div className="nrg-section">
                <div style={{ maxWidth: "680px" }}>
                    <p className="nrg-section-label reveal">Our Story</p>
                    <h2 className="nrg-section-title reveal reveal-delay-1">
                        A <em>Sanctuary</em> of<br />Comfort & Culture
                    </h2>
                    <p className="nrg-section-body reveal reveal-delay-2">
                        Nestled in the heart of Nyanza, we blend Rwandan warmth with refined
                        hospitality to create a truly unforgettable experience. Whether you're
                        visiting for business, celebration, or pure relaxation — Nyanza Royal Gate
                        is designed to feel like home, elevated.
                    </p>
                </div>
            </div>

            {/* ── CORE SERVICES ── */}
            <div style={{ background: "#F7F3EC" }}>
                <div className="nrg-section">
                    <p className="nrg-section-label reveal">What We Offer</p>
                    <h2 className="nrg-section-title reveal reveal-delay-1">
                        Our <em>Signature</em> Services
                    </h2>

                    <div className="nrg-services-grid">
                        {CORE_SERVICES.map((s, i) => (
                            <Link
                                key={s.label}
                                to={s.link}
                                className={`nrg-service-card reveal reveal-delay-${i + 1}`}
                                style={{ "--card-color": s.color }}
                            >
                                <div className="nrg-service-icon">{s.icon}</div>
                                <div className="nrg-service-name">{s.label}</div>
                                <p className="nrg-service-desc">{s.desc}</p>
                                <span className="nrg-service-link">Discover More <FaArrowRight /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── AMENITIES ── */}
            <div className="nrg-section">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
                    <div>
                        <p className="nrg-section-label reveal">Included in Your Stay</p>
                        <h2 className="nrg-section-title reveal reveal-delay-1">
                            Every <em>Detail</em> Considered
                        </h2>
                    </div>
                </div>
                <div className="nrg-amenities-grid">
                    {AMENITIES.map((a, i) => (
                        <div key={a.label} className={`nrg-amenity reveal reveal-delay-${(i % 4) + 1}`}>
                            <span className="nrg-amenity-icon">{a.icon}</span>
                            <span className="nrg-amenity-label">{a.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── OTHER SERVICES (dark) ── */}
            <div className="nrg-dark-band">
                <div className="nrg-section-full" style={{ maxWidth: "1440px", margin: "0 auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
                        <div>
                            <p className="nrg-section-label reveal">Beyond The Ordinary</p>
                            <h2 className="nrg-section-title reveal reveal-delay-1">
                                More <em>Ways</em> to Celebrate
                            </h2>
                            <p className="nrg-section-body reveal reveal-delay-2">
                                From intimate proposals to grand civil ceremonies — our dedicated events team
                                crafts moments that last a lifetime.
                            </p>
                        </div>
                    </div>
                    <div className="nrg-other-grid">
                        {OTHER_SERVICES.map((s, i) => (
                            <div key={s.label} className={`nrg-other-card reveal reveal-delay-${(i % 4) + 1}`}>
                                <span className="nrg-other-card-icon">{s.icon}</span>
                                <span className="nrg-other-card-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── TESTIMONIALS ── */}
            <div style={{ background: "#F7F3EC" }}>
                <div className="nrg-section">
                    <p className="nrg-section-label reveal">Guest Voices</p>
                    <h2 className="nrg-section-title reveal reveal-delay-1">
                        What Our <em>Guests</em> Say
                    </h2>
                    <div className="nrg-testimonials-grid">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={t.name} className={`nrg-testimonial reveal reveal-delay-${i + 1}`}>
                                <div className="nrg-stars">
                                    {Array.from({ length: t.stars }).map((_, j) => <FaStar key={j} />)}
                                </div>
                                <p className="nrg-testimonial-text">"{t.text}"</p>
                                <div className="nrg-testimonial-author">
                                    <div className="nrg-author-avatar">{t.name[0]}</div>
                                    <div>
                                        <div className="nrg-author-name">{t.name}</div>
                                        <div className="nrg-author-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CONTACT ── */}
            <div className="nrg-contact-band">
                <div className="nrg-section">
                    <div className="nrg-contact-grid">
                        <div>
                            <p className="nrg-section-label reveal">Get In Touch</p>
                            <h2 className="nrg-section-title reveal reveal-delay-1">
                                We'd Love to<br /><em>Welcome</em> You
                            </h2>
                            <p className="nrg-section-body reveal reveal-delay-2">
                                Reach us anytime for reservations, event enquiries, or just to say hello.
                                Our team is ready to help you plan your perfect visit.
                            </p>
                            <div className="nrg-contact-items">
                                <a href="tel:+250791207400" className="nrg-contact-item reveal reveal-delay-2">
                                    <div className="nrg-contact-item-icon"><FaPhone /></div>
                                    <div>
                                        <div className="nrg-contact-item-label">Phone / WhatsApp</div>
                                        <div className="nrg-contact-item-value">+250 791 207 400</div>
                                    </div>
                                </a>
                                <a href="tel:+250791207400" className="nrg-contact-item reveal reveal-delay-3">
                                    <div className="nrg-contact-item-icon"><FaWhatsapp /></div>
                                    <div>
                                        <div className="nrg-contact-item-label">WhatsApp Chat</div>
                                        <div className="nrg-contact-item-value">0791207400</div>
                                    </div>
                                </a>
                                <a href="mailto:nyanzaroyalgateapartment@gmail.com" className="nrg-contact-item reveal reveal-delay-4">
                                    <div className="nrg-contact-item-icon"><FaEnvelope /></div>
                                    <div>
                                        <div className="nrg-contact-item-label">Email Address</div>
                                        <div className="nrg-contact-item-value">nyanzaroyalgateapartment@gmail.com</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="reveal reveal-delay-2">
                            <div className="nrg-contact-map">
                                <div className="nrg-contact-map-icon"><FaMapMarkerAlt /></div>
                                <div className="nrg-contact-map-title">Find Us in Nyanza</div>
                                <p className="nrg-contact-map-body">
                                    We're located in the heart of Nyanza, Rwanda —<br />
                                    easily accessible and welcoming guests<br />from near and far.
                                </p>
                                <a href="https://maps.google.com/?q=Nyanza+Rwanda" target="_blank" rel="noopener noreferrer">
                                    Get Directions <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default HomePage;