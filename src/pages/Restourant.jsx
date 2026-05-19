// pages/DiningPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaWhatsapp, FaArrowRight, FaClock, FaStar, FaCheck, FaLeaf
} from "react-icons/fa";
import { GiHotMeal, GiWineGlass, GiCoffeeCup, GiCandleLight } from "react-icons/gi";
import { MdOutdoorGrill, MdLocalBar } from "react-icons/md";

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

const MENU_HIGHLIGHTS = [
  {
    category: "Starters",
    icon: <FaLeaf />,
    color: "#5A7D5E",
    items: [
      { name: "Rwandan Vegetable Soup", desc: "Seasonal vegetables in a rich broth with local herbs", tag: "Chef's Pick" },
      { name: "Grilled Tilapia Bites", desc: "Crispy tilapia with avocado dip and lime", tag: "" },
      { name: "Samosa Platter", desc: "Three styles — beef, chicken & vegetable with chutney", tag: "Popular" },
    ],
  },
  {
    category: "Main Courses",
    icon: <GiHotMeal />,
    color: "#D4622A",
    items: [
      { name: "Nyama Choma", desc: "Slow-grilled goat with ugali, sukuma wiki, and kachumbari", tag: "Signature" },
      { name: "Grilled Nile Perch", desc: "Whole fish with plantain, rice, and house sauce", tag: "Chef's Pick" },
      { name: "Chicken Brochette", desc: "Marinated skewers with roasted vegetables and pilau rice", tag: "Popular" },
    ],
  },
  {
    category: "Bar & Drinks",
    icon: <GiWineGlass />,
    color: "#C9A84C",
    items: [
      { name: "Passion Fruit Mojito", desc: "Fresh passion fruit, mint, rum, and soda — refreshing and bold", tag: "Signature" },
      { name: "Primus on Draft", desc: "Rwanda's favourite cold lager, poured fresh", tag: "Popular" },
      { name: "House Wine Selection", desc: "Carefully curated reds and whites from South Africa", tag: "" },
    ],
  },
];

const DINING_FEATURES = [
  { icon: <GiCoffeeCup />, label: "Breakfast", desc: "Served daily from 7:00 AM" },
  { icon: <GiHotMeal />, label: "Lunch & Dinner", desc: "Full menu 12:00 PM – 10:00 PM" },
  { icon: <MdLocalBar />, label: "Bar", desc: "Open until midnight" },
  { icon: <MdOutdoorGrill />, label: "Outside Catering", desc: "We come to your venue" },
  { icon: <GiCandleLight />, label: "Private Dining", desc: "Reserve a secluded table" },
  { icon: <FaStar />, label: "Live Music Nights", desc: "Selected Fridays & Saturdays" },
];

const HOURS = [
  { day: "Monday – Friday", breakfast: "7:00 AM", lunch: "12:00 PM", bar: "Until midnight" },
  { day: "Saturday – Sunday", breakfast: "7:30 AM", lunch: "12:00 PM", bar: "Until 1:00 AM" },
];

export default function DiningPage() {
  useReveal();
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        :root {
          --gold:#C9A84C; --gold-light:#E8C97A; --espresso:#1A0F07; --bark:#2E1A0D;
          --cream:#FAF6EE; --warm-white:#FFFDF8;
          --text-dark:#1A0F07; --text-body:#3D2B1A; --text-muted:#8A7060;
          --accent:#D4622A;
        }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Jost',sans-serif;background:var(--warm-white);color:var(--text-body);}
        .reveal{opacity:0;transform:translateY(24px);transition:opacity .65s ease,transform .65s ease;}
        .reveal.visible{opacity:1;transform:none;}
        .rd1{transition-delay:.1s;}.rd2{transition-delay:.2s;}.rd3{transition-delay:.3s;}.rd4{transition-delay:.4s;}

        /* HERO */
        .dp-hero {
          position:relative; min-height:65vh;
          background:linear-gradient(150deg,#0E0804 0%,var(--espresso) 35%,#3A1F0A 70%,#5C2E0A 100%);
          display:flex; align-items:flex-end; overflow:hidden;
        }
        .dp-hero::before{
          content:''; position:absolute; inset:0;
          background:repeating-linear-gradient(-30deg,transparent,transparent 80px,rgba(201,168,76,0.02) 80px,rgba(201,168,76,0.02) 81px);
        }
        .dp-hero-glow{
          position:absolute; bottom:-30%; left:50%; transform:translateX(-50%);
          width:80vw; height:80vw; border-radius:50%;
          background:radial-gradient(circle,rgba(212,98,42,0.08) 0%,transparent 65%);
          pointer-events:none;
        }
        .dp-hero-inner{
          position:relative; z-index:2; max-width:1440px; margin:0 auto;
          width:100%; padding:8rem 3rem 4rem;
        }
        .dp-hero-label{
          display:inline-flex; align-items:center; gap:.6rem;
          font-size:.68rem; font-weight:600; letter-spacing:4px;
          text-transform:uppercase; color:var(--gold); margin-bottom:1rem;
        }
        .dp-hero-label::before{content:'';width:28px;height:1px;background:var(--gold);display:block;}
        .dp-hero-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2.5rem,5vw,4rem); font-weight:700;
          color:var(--cream); line-height:1.08; margin-bottom:1rem;
        }
        .dp-hero-title em{font-style:italic;color:var(--gold-light);}
        .dp-hero-sub{
          font-size:.95rem; font-weight:300;
          color:rgba(240,232,216,.65); max-width:520px; line-height:1.8;
          margin-bottom:2rem;
        }
        .dp-hero-stats{
          display:flex; gap:3rem; flex-wrap:wrap;
        }
        .dp-hero-stat-num{
          font-family:'Cormorant Garamond',serif; font-size:2rem;
          font-weight:700; color:var(--gold-light); line-height:1;
        }
        .dp-hero-stat-label{
          font-size:.65rem; letter-spacing:2px; text-transform:uppercase;
          color:rgba(240,232,216,.55);
        }

        /* SECTION */
        .dp-section{max-width:1440px;margin:0 auto;padding:5rem 3rem;}
        .dp-label{
          font-size:.68rem; font-weight:600; letter-spacing:4px;
          text-transform:uppercase; color:var(--gold);
          display:flex; align-items:center; gap:.6rem; margin-bottom:.75rem;
        }
        .dp-label::before{content:'';width:28px;height:1px;background:var(--gold);}
        .dp-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.9rem,3vw,2.75rem); font-weight:700;
          color:var(--text-dark); line-height:1.15; margin-bottom:1rem;
        }
        .dp-title em{font-style:italic;color:var(--gold);}
        .dp-body{font-size:.9rem;font-weight:300;color:var(--text-muted);line-height:1.85;max-width:540px;}

        /* FEATURES GRID */
        .dp-features-grid{
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:1.25rem; margin-top:3rem;
        }
        .dp-feature{
          background:#fff; border:1px solid rgba(0,0,0,.07); border-radius:4px;
          padding:1.75rem; display:flex; gap:1.1rem; align-items:flex-start;
          transition:all .25s ease;
        }
        .dp-feature:hover{border-color:var(--gold);box-shadow:0 4px 18px rgba(201,168,76,.1);}
        .dp-feature-icon{
          width:44px; height:44px; border-radius:50%;
          background:rgba(201,168,76,.1); display:flex; align-items:center;
          justify-content:center; color:var(--gold); font-size:1.1rem; flex-shrink:0;
          transition:all .25s;
        }
        .dp-feature:hover .dp-feature-icon{background:var(--gold);color:var(--espresso);}
        .dp-feature-label{
          font-size:.82rem; font-weight:600; color:var(--text-dark); margin-bottom:.2rem;
        }
        .dp-feature-desc{font-size:.78rem;font-weight:300;color:var(--text-muted);}

        /* MENU SECTION */
        .dp-menu-section{
          background:linear-gradient(135deg,var(--espresso) 0%,var(--bark) 100%);
        }
        .dp-menu-section .dp-title{color:var(--cream);}
        .dp-menu-section .dp-body{color:rgba(240,232,216,.6);}
        .dp-menu-section .dp-label{color:var(--gold-light);}
        .dp-menu-section .dp-label::before{background:var(--gold-light);}

        .dp-menu-tabs{
          display:flex; gap:.5rem; margin-top:2.5rem; flex-wrap:wrap;
        }
        .dp-menu-tab{
          font-family:'Jost',sans-serif; font-size:.72rem; font-weight:500;
          letter-spacing:1.5px; text-transform:uppercase;
          padding:.55rem 1.25rem; border-radius:2px; cursor:pointer;
          background:rgba(255,255,255,.06); border:1px solid rgba(201,168,76,.2);
          color:rgba(240,232,216,.65); transition:all .25s ease;
          display:flex; align-items:center; gap:.5rem;
        }
        .dp-menu-tab:hover{background:rgba(201,168,76,.1);color:var(--gold-light);}
        .dp-menu-tab.active{
          background:linear-gradient(135deg,var(--gold),var(--gold-light));
          color:var(--espresso); border-color:transparent;
        }

        .dp-menu-items{
          display:flex; flex-direction:column; gap:1px;
          margin-top:2rem; background:rgba(201,168,76,.08);
          border:1px solid rgba(201,168,76,.12); border-radius:4px; overflow:hidden;
        }
        .dp-menu-item{
          background:rgba(255,255,255,.04); padding:1.5rem 2rem;
          display:flex; justify-content:space-between; align-items:center;
          gap:1rem; transition:background .2s;
        }
        .dp-menu-item:hover{background:rgba(201,168,76,.07);}
        .dp-menu-item-left{flex:1;}
        .dp-menu-item-name{
          font-family:'Cormorant Garamond',serif;
          font-size:1.15rem; font-weight:600; color:var(--cream); margin-bottom:.3rem;
        }
        .dp-menu-item-desc{font-size:.8rem;font-weight:300;color:rgba(240,232,216,.55);}
        .dp-menu-item-tag{
          font-size:.6rem; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;
          padding:.2rem .6rem; border-radius:100px;
          background:rgba(201,168,76,.15); color:var(--gold); white-space:nowrap;
        }

        /* HOURS */
        .dp-hours-grid{
          display:grid; grid-template-columns:repeat(2,1fr);
          gap:1.5rem; margin-top:3rem;
        }
        .dp-hours-card{
          background:#fff; border:1px solid rgba(0,0,0,.07);
          border-radius:4px; padding:2rem; transition:all .25s;
        }
        .dp-hours-card:hover{border-color:var(--gold);}
        .dp-hours-day{
          font-family:'Cormorant Garamond',serif;
          font-size:1.25rem; font-weight:700; color:var(--text-dark); margin-bottom:1rem;
        }
        .dp-hours-row{
          display:flex; justify-content:space-between;
          padding:.5rem 0; border-bottom:1px solid rgba(0,0,0,.05);
          font-size:.82rem;
        }
        .dp-hours-row:last-child{border-bottom:none;}
        .dp-hours-period{font-weight:400;color:var(--text-muted);}
        .dp-hours-time{font-weight:500;color:var(--text-body);}

        /* CTA */
        .dp-cta-band{
          background:var(--cream); border-top:1px solid rgba(201,168,76,.15);
          padding:4rem 3rem; text-align:center;
        }
        .dp-cta-inner{max-width:600px;margin:0 auto;}
        .dp-cta-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.8rem,3vw,2.5rem); font-weight:700;
          color:var(--text-dark); margin-bottom:1rem;
        }
        .dp-cta-title em{font-style:italic;color:var(--gold);}
        .dp-cta-body{font-size:.9rem;color:var(--text-muted);line-height:1.8;margin-bottom:2rem;}
        .dp-cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;}
        .btn-primary{
          display:inline-flex;align-items:center;gap:.6rem;
          background:linear-gradient(135deg,var(--gold),var(--gold-light));
          color:var(--espresso);text-decoration:none;
          font-size:.75rem;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
          padding:.9rem 2rem;border-radius:2px;
          transition:all .3s ease;box-shadow:0 4px 20px rgba(201,168,76,.3);
        }
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(201,168,76,.45);}
        .btn-ghost{
          display:inline-flex;align-items:center;gap:.6rem;
          background:transparent;color:var(--text-dark);text-decoration:none;
          font-size:.75rem;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;
          padding:.9rem 2rem;border-radius:2px;border:1px solid rgba(201,168,76,.4);
          transition:all .3s ease;
        }
        .btn-ghost:hover{background:rgba(201,168,76,.07);border-color:var(--gold);}

        @media(max-width:1024px){
          .dp-section{padding:4rem 2rem;}
          .dp-features-grid{grid-template-columns:1fr 1fr;}
          .dp-hero-inner{padding:7rem 2rem 3rem;}
        }
        @media(max-width:640px){
          .dp-features-grid{grid-template-columns:1fr;}
          .dp-hours-grid{grid-template-columns:1fr;}
          .dp-section,.dp-cta-band{padding:3rem 1.5rem;}
          .dp-hero-inner{padding:6rem 1.5rem 2.5rem;}
          .dp-menu-item{flex-direction:column;align-items:flex-start;}
        }
      `}</style>

      <Header />

      {/* Hero */}
      <section className="dp-hero">
        <div className="dp-hero-glow" />
        <div className="dp-hero-inner">
          <p className="dp-hero-label reveal">Restaurant & Bar</p>
          <h1 className="dp-hero-title reveal rd1">Flavours That<br /><em>Linger</em></h1>
          <p className="dp-hero-sub reveal rd2">
            An authentic dining experience rooted in Rwandan cuisine — elevated with
            international flair, quality ingredients, and warm hospitality.
          </p>
          <div className="dp-hero-stats reveal rd3">
            <div>
              <div className="dp-hero-stat-num">3</div>
              <div className="dp-hero-stat-label">Daily Menus</div>
            </div>
            <div>
              <div className="dp-hero-stat-num">7</div>
              <div className="dp-hero-stat-label">Days a Week</div>
            </div>
            <div>
              <div className="dp-hero-stat-num">Late</div>
              <div className="dp-hero-stat-label">Bar Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="dp-section">
        <p className="dp-label reveal">What We Offer</p>
        <h2 className="dp-title reveal rd1">More Than a <em>Meal</em></h2>
        <p className="dp-body reveal rd2">
          Our restaurant is a destination in itself — a warm, welcoming space where every
          visit feels like a special occasion.
        </p>
        <div className="dp-features-grid">
          {DINING_FEATURES.map((f, i) => (
            <div key={f.label} className={`dp-feature reveal rd${(i % 3) + 1}`}>
              <div className="dp-feature-icon">{f.icon}</div>
              <div>
                <div className="dp-feature-label">{f.label}</div>
                <div className="dp-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Highlights */}
      <div className="dp-menu-section">
        <div className="dp-section">
          <p className="dp-label reveal">A Taste of What's Inside</p>
          <h2 className="dp-title reveal rd1">Menu <em>Highlights</em></h2>
          <p className="dp-body reveal rd2">
            Fresh ingredients, traditional techniques, and bold flavours — our kitchen
            takes pride in every plate.
          </p>
          <div className="dp-menu-tabs reveal rd3">
            {MENU_HIGHLIGHTS.map((cat, i) => (
              <button
                key={cat.category}
                className={`dp-menu-tab${activeMenu === i ? " active" : ""}`}
                onClick={() => setActiveMenu(i)}
              >
                {cat.icon} {cat.category}
              </button>
            ))}
          </div>
          <div className="dp-menu-items reveal rd4">
            {MENU_HIGHLIGHTS[activeMenu].items.map(item => (
              <div key={item.name} className="dp-menu-item">
                <div className="dp-menu-item-left">
                  <div className="dp-menu-item-name">{item.name}</div>
                  <div className="dp-menu-item-desc">{item.desc}</div>
                </div>
                {item.tag && <div className="dp-menu-item-tag">{item.tag}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="dp-section">
        <p className="dp-label reveal">Plan Your Visit</p>
        <h2 className="dp-title reveal rd1">Opening <em>Hours</em></h2>
        <div className="dp-hours-grid">
          {HOURS.map((h, i) => (
            <div key={h.day} className={`dp-hours-card reveal rd${i + 1}`}>
              <div className="dp-hours-day">{h.day}</div>
              <div className="dp-hours-row">
                <span className="dp-hours-period"><FaClock style={{ marginRight: "6px", color: "var(--gold)", fontSize: ".7rem" }} />Breakfast</span>
                <span className="dp-hours-time">{h.breakfast} – 10:30 AM</span>
              </div>
              <div className="dp-hours-row">
                <span className="dp-hours-period"><GiHotMeal style={{ marginRight: "6px", color: "var(--gold)", fontSize: ".7rem" }} />Lunch & Dinner</span>
                <span className="dp-hours-time">{h.lunch} – 10:00 PM</span>
              </div>
              <div className="dp-hours-row">
                <span className="dp-hours-period"><GiWineGlass style={{ marginRight: "6px", color: "var(--gold)", fontSize: ".7rem" }} />Bar</span>
                <span className="dp-hours-time">{h.bar}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="dp-cta-band">
        <div className="dp-cta-inner">
          <h2 className="dp-cta-title reveal">Reserve a <em>Table</em> Tonight</h2>
          <p className="dp-cta-body reveal rd1">
            Walk-ins welcome, but a reservation guarantees your preferred spot.
            Call or WhatsApp us to book a table or arrange outside catering.
          </p>
          <div className="dp-cta-btns reveal rd2">
            <a href="tel:+250791207400" className="btn-primary"><FaWhatsapp /> Reserve a Table</a>
            <Link to="/contact" className="btn-ghost">Catering Enquiry <FaArrowRight /></Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}