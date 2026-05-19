// pages/WellnessPage.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaWhatsapp, FaArrowRight, FaClock, FaCheck, FaStar, FaLeaf, FaHeart
} from "react-icons/fa";
import { MdSpa } from "react-icons/md";
import { GiBodyBalance, GiMeditation, GiWaterDrop } from "react-icons/gi";

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

const TREATMENTS = [
  {
    id: "swedish",
    name: "Swedish Relaxation Massage",
    duration: "60 / 90 min",
    price: "From RWF 20,000",
    desc: "A full-body massage using long, flowing strokes to ease muscle tension and induce deep relaxation. Perfect for first-timers and stress relief.",
    tags: ["Relaxation", "Full Body", "Beginner Friendly"],
    popular: true,
  },
  {
    id: "deep",
    name: "Deep Tissue Massage",
    duration: "60 / 90 min",
    price: "From RWF 25,000",
    desc: "Targets deeper layers of muscle and connective tissue. Ideal for chronic aches, tight shoulders, and recovery from physical exertion.",
    tags: ["Therapeutic", "Muscle Relief"],
    popular: false,
  },
  {
    id: "hot-stone",
    name: "Hot Stone Therapy",
    duration: "75 min",
    price: "From RWF 30,000",
    desc: "Heated volcanic stones are placed along key energy points to melt away tension and improve circulation. A luxurious, deeply warming experience.",
    tags: ["Luxury", "Circulation", "Deep Warmth"],
    popular: false,
  },
  {
    id: "couples",
    name: "Couples Massage",
    duration: "60 / 90 min",
    price: "From RWF 45,000",
    desc: "Experience relaxation side by side in our private couples suite. Choose your preferred massage style — a wonderful gift for special occasions.",
    tags: ["Couples", "Private Suite", "Gift Ideal"],
    popular: false,
  },
  {
    id: "sauna",
    name: "Finnish Sauna Session",
    duration: "30 / 60 min",
    price: "From RWF 10,000",
    desc: "Authentic dry-heat sauna that opens pores, purifies skin, and relieves stress. Available as standalone or combined with any massage treatment.",
    tags: ["Detox", "Skin Care", "Stress Relief"],
    popular: false,
  },
  {
    id: "facial",
    name: "Rejuvenating Facial",
    duration: "45 min",
    price: "From RWF 18,000",
    desc: "A deep-cleansing facial with natural extracts tailored to your skin type. Leaves skin glowing, refreshed, and deeply nourished.",
    tags: ["Skin Care", "Glow", "Natural Products"],
    popular: false,
  },
];

const BENEFITS = [
  { icon: <FaLeaf />, label: "Stress Reduction", desc: "Lower cortisol and anxiety through proven therapeutic techniques" },
  { icon: <GiWaterDrop />, label: "Improved Circulation", desc: "Enhanced blood flow for better energy and muscle recovery" },
  { icon: <FaHeart />, label: "Pain Relief", desc: "Targeted techniques to reduce chronic pain and tension" },
  { icon: <GiMeditation />, label: "Mental Clarity", desc: "Achieve a calm mind and sharper focus after each session" },
];

export default function WellnessPage() {
  useReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        :root{
          --gold:#C9A84C;--gold-light:#E8C97A;--espresso:#1A0F07;--bark:#2E1A0D;
          --cream:#FAF6EE;--warm-white:#FFFDF8;
          --text-dark:#1A0F07;--text-body:#3D2B1A;--text-muted:#8A7060;
          --sage:#4A6B50;--sage-light:#6B9270;
        }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Jost',sans-serif;background:var(--warm-white);color:var(--text-body);}
        .reveal{opacity:0;transform:translateY(24px);transition:opacity .65s ease,transform .65s ease;}
        .reveal.visible{opacity:1;transform:none;}
        .rd1{transition-delay:.1s;}.rd2{transition-delay:.2s;}.rd3{transition-delay:.3s;}.rd4{transition-delay:.4s;}

        /* HERO */
        .wp-hero{
          position:relative;min-height:68vh;
          background:linear-gradient(150deg,#060E08 0%,#0F1F12 30%,#1A2E1C 60%,#0E1A0F 100%);
          display:flex;align-items:flex-end;overflow:hidden;
        }
        .wp-hero-pattern{
          position:absolute;inset:0;
          background-image:radial-gradient(circle at 20% 50%,rgba(74,107,80,.15) 0%,transparent 40%),
            radial-gradient(circle at 80% 20%,rgba(201,168,76,.06) 0%,transparent 40%);
        }
        .wp-hero-inner{
          position:relative;z-index:2;max-width:1440px;margin:0 auto;
          width:100%;padding:8rem 3rem 4.5rem;
          display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:flex-end;
        }
        .wp-hero-label{
          display:inline-flex;align-items:center;gap:.6rem;
          font-size:.68rem;font-weight:600;letter-spacing:4px;
          text-transform:uppercase;color:#8FBC94;margin-bottom:1rem;
        }
        .wp-hero-label::before{content:'';width:28px;height:1px;background:#8FBC94;display:block;}
        .wp-hero-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2.5rem,5vw,4.2rem);font-weight:700;
          color:#F0EDE8;line-height:1.08;margin-bottom:1rem;
        }
        .wp-hero-title em{font-style:italic;color:var(--gold-light);}
        .wp-hero-sub{
          font-size:.95rem;font-weight:300;
          color:rgba(240,237,232,.6);max-width:460px;line-height:1.85;
          margin-bottom:2rem;
        }
        .wp-hero-right{
          display:flex;flex-direction:column;gap:1rem;
        }
        .wp-hero-tag{
          background:rgba(74,107,80,.2);border:1px solid rgba(74,107,80,.35);
          border-radius:4px;padding:1.25rem 1.5rem;
          display:flex;align-items:center;gap:1rem;
          transition:all .3s ease;
        }
        .wp-hero-tag:hover{background:rgba(74,107,80,.3);border-color:rgba(74,107,80,.5);}
        .wp-hero-tag-icon{
          width:40px;height:40px;border-radius:50%;
          background:rgba(143,188,148,.15);display:flex;align-items:center;
          justify-content:center;color:#8FBC94;font-size:1.1rem;flex-shrink:0;
        }
        .wp-hero-tag-label{font-size:.8rem;font-weight:500;color:#F0EDE8;}
        .wp-hero-tag-desc{font-size:.72rem;color:rgba(240,237,232,.5);}

        /* SECTION */
        .wp-section{max-width:1440px;margin:0 auto;padding:5rem 3rem;}
        .wp-label{
          font-size:.68rem;font-weight:600;letter-spacing:4px;
          text-transform:uppercase;color:var(--sage-light);
          display:flex;align-items:center;gap:.6rem;margin-bottom:.75rem;
        }
        .wp-label::before{content:'';width:28px;height:1px;background:var(--sage-light);}
        .wp-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.9rem,3vw,2.75rem);font-weight:700;
          color:var(--text-dark);line-height:1.15;margin-bottom:1rem;
        }
        .wp-title em{font-style:italic;color:var(--sage);}
        .wp-body{font-size:.9rem;font-weight:300;color:var(--text-muted);line-height:1.85;max-width:540px;}

        /* BENEFITS */
        .wp-benefits-grid{
          display:grid;grid-template-columns:repeat(4,1fr);
          gap:1.25rem;margin-top:3rem;
        }
        .wp-benefit{
          background:#fff;border:1px solid rgba(0,0,0,.07);
          border-radius:4px;padding:1.75rem;text-align:center;
          transition:all .3s ease;
        }
        .wp-benefit:hover{border-color:var(--sage-light);box-shadow:0 6px 20px rgba(74,107,80,.1);}
        .wp-benefit-icon{
          width:52px;height:52px;border-radius:50%;margin:0 auto 1rem;
          background:rgba(74,107,80,.1);display:flex;align-items:center;
          justify-content:center;color:var(--sage);font-size:1.15rem;
          transition:all .3s;
        }
        .wp-benefit:hover .wp-benefit-icon{background:var(--sage);color:#fff;}
        .wp-benefit-label{font-size:.85rem;font-weight:600;color:var(--text-dark);margin-bottom:.4rem;}
        .wp-benefit-desc{font-size:.78rem;font-weight:300;color:var(--text-muted);line-height:1.6;}

        /* TREATMENTS GRID */
        .wp-treatments-section{
          background:linear-gradient(135deg,#060E08 0%,#0F1F12 50%,#1A2E1C 100%);
        }
        .wp-treatments-section .wp-title{color:#F0EDE8;}
        .wp-treatments-section .wp-body{color:rgba(240,237,232,.6);}
        .wp-treatments-section .wp-label{color:#8FBC94;}
        .wp-treatments-section .wp-label::before{background:#8FBC94;}

        .wp-treatments-grid{
          display:grid;grid-template-columns:repeat(3,1fr);
          gap:1.25rem;margin-top:3rem;
        }
        .wp-treatment{
          background:rgba(255,255,255,.04);border:1px solid rgba(74,107,80,.2);
          border-radius:4px;padding:2rem;display:flex;flex-direction:column;
          transition:all .3s ease;
        }
        .wp-treatment.featured{
          border:1px solid rgba(201,168,76,.3);
          background:rgba(201,168,76,.05);
        }
        .wp-treatment:hover{
          background:rgba(74,107,80,.1);
          border-color:rgba(74,107,80,.4);
          transform:translateY(-4px);
        }
        .wp-treatment-top{
          display:flex;justify-content:space-between;align-items:flex-start;
          margin-bottom:.75rem;
        }
        .wp-treatment-badge{
          font-size:.58rem;font-weight:700;letter-spacing:1.5px;
          text-transform:uppercase;padding:.25rem .65rem;border-radius:100px;
          background:rgba(201,168,76,.15);color:var(--gold-light);
        }
        .wp-treatment-duration{
          font-size:.7rem;color:rgba(240,237,232,.5);
          display:flex;align-items:center;gap:.4rem;
        }
        .wp-treatment-name{
          font-family:'Cormorant Garamond',serif;
          font-size:1.2rem;font-weight:700;color:#F0EDE8;margin-bottom:.6rem;
        }
        .wp-treatment-desc{
          font-size:.8rem;font-weight:300;color:rgba(240,237,232,.55);
          line-height:1.7;flex:1;margin-bottom:1.25rem;
        }
        .wp-treatment-tags{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.25rem;}
        .wp-treatment-tag{
          font-size:.62rem;letter-spacing:.5px;
          padding:.2rem .6rem;border-radius:100px;
          background:rgba(74,107,80,.2);color:#8FBC94;
        }
        .wp-treatment-footer{
          display:flex;align-items:center;justify-content:space-between;
          padding-top:1rem;border-top:1px solid rgba(255,255,255,.07);
        }
        .wp-treatment-price{
          font-family:'Cormorant Garamond',serif;
          font-size:1.05rem;font-weight:600;color:#F0EDE8;
        }
        .wp-book-btn{
          display:inline-flex;align-items:center;gap:.4rem;
          background:linear-gradient(135deg,var(--gold),var(--gold-light));
          color:var(--espresso);text-decoration:none;
          font-size:.65rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
          padding:.5rem 1rem;border-radius:2px;transition:all .25s;
        }
        .wp-book-btn:hover{box-shadow:0 4px 16px rgba(201,168,76,.35);transform:translateY(-1px);}

        /* HOURS */
        .wp-hours-band{
          background:var(--cream);border-top:1px solid rgba(74,107,80,.12);
        }
        .wp-hours-grid{
          display:grid;grid-template-columns:1fr 1fr;
          gap:1.5rem;margin-top:2.5rem;
        }
        .wp-hours-card{
          background:#fff;border:1px solid rgba(0,0,0,.07);
          border-radius:4px;padding:2rem;
        }
        .wp-hours-card:hover{border-color:var(--sage-light);}
        .wp-hours-day{
          font-family:'Cormorant Garamond',serif;
          font-size:1.15rem;font-weight:700;color:var(--text-dark);margin-bottom:.75rem;
        }
        .wp-hours-row{
          display:flex;justify-content:space-between;align-items:center;
          padding:.5rem 0;border-bottom:1px solid rgba(0,0,0,.05);font-size:.82rem;
        }
        .wp-hours-row:last-child{border-bottom:none;}
        .wp-hours-service{font-weight:400;color:var(--text-muted);display:flex;align-items:center;gap:.5rem;}
        .wp-hours-service svg{color:var(--sage);}
        .wp-hours-time{font-weight:500;color:var(--text-body);}

        /* NOTE */
        .wp-note{
          background:rgba(74,107,80,.08);border:1px solid rgba(74,107,80,.2);
          border-radius:4px;padding:1.5rem;margin-top:2.5rem;
          display:flex;gap:1rem;align-items:flex-start;
        }
        .wp-note svg{color:var(--sage);flex-shrink:0;margin-top:2px;}
        .wp-note-text{font-size:.82rem;color:var(--text-body);line-height:1.7;}
        .wp-note-text strong{color:var(--text-dark);}

        /* CTA */
        .wp-cta-band{
          background:linear-gradient(135deg,#060E08 0%,#0F1F12 100%);
          padding:4.5rem 3rem;text-align:center;
        }
        .wp-cta-inner{max-width:600px;margin:0 auto;}
        .wp-cta-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.8rem,3vw,2.5rem);font-weight:700;
          color:#F0EDE8;margin-bottom:1rem;
        }
        .wp-cta-title em{font-style:italic;color:var(--gold-light);}
        .wp-cta-body{font-size:.9rem;color:rgba(240,237,232,.6);line-height:1.8;margin-bottom:2rem;}
        .wp-cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;}
        .btn-primary{
          display:inline-flex;align-items:center;gap:.6rem;
          background:linear-gradient(135deg,var(--gold),var(--gold-light));
          color:var(--espresso);text-decoration:none;
          font-size:.75rem;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
          padding:.9rem 2rem;border-radius:2px;
          transition:all .3s ease;box-shadow:0 4px 20px rgba(201,168,76,.3);
        }
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(201,168,76,.45);}
        .btn-ghost-light{
          display:inline-flex;align-items:center;gap:.6rem;
          background:transparent;color:rgba(240,237,232,.8);text-decoration:none;
          font-size:.75rem;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;
          padding:.9rem 2rem;border-radius:2px;border:1px solid rgba(240,237,232,.2);
          transition:all .3s ease;
        }
        .btn-ghost-light:hover{background:rgba(255,255,255,.07);border-color:rgba(240,237,232,.4);}

        @media(max-width:1024px){
          .wp-section{padding:4rem 2rem;}
          .wp-hero-inner{grid-template-columns:1fr;padding:7rem 2rem 3rem;}
          .wp-hero-right{display:none;}
          .wp-benefits-grid{grid-template-columns:repeat(2,1fr);}
          .wp-treatments-grid{grid-template-columns:1fr 1fr;}
        }
        @media(max-width:640px){
          .wp-section,.wp-cta-band,.wp-hours-band .wp-section{padding:3rem 1.5rem;}
          .wp-benefits-grid{grid-template-columns:1fr 1fr;}
          .wp-treatments-grid{grid-template-columns:1fr;}
          .wp-hours-grid{grid-template-columns:1fr;}
          .wp-hero-inner{padding:6rem 1.5rem 2.5rem;}
        }
      `}</style>

      <Header />

      {/* Hero */}
      <section className="wp-hero">
        <div className="wp-hero-pattern" />
        <div className="wp-hero-inner">
          <div>
            <p className="wp-hero-label reveal">Sauna & Massage</p>
            <h1 className="wp-hero-title reveal rd1">
              Restore.<br /><em>Renew.</em> Relax.
            </h1>
            <p className="wp-hero-sub reveal rd2">
              A dedicated wellness sanctuary where skilled therapists and traditional
              practices combine to restore your body, calm your mind, and elevate your spirit.
            </p>
            <a href="tel:+250791207400" className="btn-primary reveal rd3">
              <FaWhatsapp /> Book a Session
            </a>
          </div>
          <div className="wp-hero-right reveal rd2">
            {[
              { icon: <MdSpa />, label: "Expert Therapists", desc: "Certified massage & wellness professionals" },
              { icon: <GiBodyBalance />, label: "Private Sessions", desc: "Fully private rooms, no shared spaces" },
              { icon: <GiWaterDrop />, label: "Natural Products", desc: "Organic oils and natural extracts only" },
            ].map(t => (
              <div key={t.label} className="wp-hero-tag">
                <div className="wp-hero-tag-icon">{t.icon}</div>
                <div>
                  <div className="wp-hero-tag-label">{t.label}</div>
                  <div className="wp-hero-tag-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <div className="wp-section">
        <p className="wp-label reveal">Why Wellness Matters</p>
        <h2 className="wp-title reveal rd1">The <em>Benefits</em> of Every Session</h2>
        <div className="wp-benefits-grid">
          {BENEFITS.map((b, i) => (
            <div key={b.label} className={`wp-benefit reveal rd${i + 1}`}>
              <div className="wp-benefit-icon">{b.icon}</div>
              <div className="wp-benefit-label">{b.label}</div>
              <p className="wp-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Treatments */}
      <div className="wp-treatments-section">
        <div className="wp-section">
          <p className="wp-label reveal">Our Menu</p>
          <h2 className="wp-title reveal rd1">Treatments &amp; <em>Services</em></h2>
          <p className="wp-body reveal rd2">
            Every treatment is tailored to your needs. Speak to our therapist to
            combine sessions for a full wellness ritual.
          </p>
          <div className="wp-treatments-grid">
            {TREATMENTS.map((t, i) => (
              <div key={t.id} className={`wp-treatment reveal rd${(i % 3) + 1}${t.popular ? " featured" : ""}`}>
                <div className="wp-treatment-top">
                  {t.popular ? <div className="wp-treatment-badge"><FaStar style={{ fontSize: ".55rem", marginRight: "3px" }} />Popular</div> : <div />}
                  <div className="wp-treatment-duration"><FaClock size={10} />{t.duration}</div>
                </div>
                <div className="wp-treatment-name">{t.name}</div>
                <p className="wp-treatment-desc">{t.desc}</p>
                <div className="wp-treatment-tags">
                  {t.tags.map(tag => <span key={tag} className="wp-treatment-tag">{tag}</span>)}
                </div>
                <div className="wp-treatment-footer">
                  <div className="wp-treatment-price">{t.price}</div>
                  <a href="tel:+250791207400" className="wp-book-btn">Book <FaArrowRight /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="wp-hours-band">
        <div className="wp-section">
          <p className="wp-label reveal">Plan Your Visit</p>
          <h2 className="wp-title reveal rd1">Wellness <em>Hours</em></h2>
          <div className="wp-hours-grid">
            <div className="wp-hours-card reveal rd1">
              <div className="wp-hours-day">Weekdays (Mon–Fri)</div>
              <div className="wp-hours-row">
                <span className="wp-hours-service"><MdSpa /> Massage</span>
                <span className="wp-hours-time">9:00 AM – 8:00 PM</span>
              </div>
              <div className="wp-hours-row">
                <span className="wp-hours-service"><GiWaterDrop /> Sauna</span>
                <span className="wp-hours-time">8:00 AM – 9:00 PM</span>
              </div>
              <div className="wp-hours-row">
                <span className="wp-hours-service"><FaLeaf /> Facial</span>
                <span className="wp-hours-time">10:00 AM – 6:00 PM</span>
              </div>
            </div>
            <div className="wp-hours-card reveal rd2">
              <div className="wp-hours-day">Weekends (Sat–Sun)</div>
              <div className="wp-hours-row">
                <span className="wp-hours-service"><MdSpa /> Massage</span>
                <span className="wp-hours-time">8:00 AM – 10:00 PM</span>
              </div>
              <div className="wp-hours-row">
                <span className="wp-hours-service"><GiWaterDrop /> Sauna</span>
                <span className="wp-hours-time">7:00 AM – 10:00 PM</span>
              </div>
              <div className="wp-hours-row">
                <span className="wp-hours-service"><FaLeaf /> Facial</span>
                <span className="wp-hours-time">9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
          <div className="wp-note reveal rd3">
            <FaCheck style={{ color: "var(--sage)", marginTop: "2px" }} />
            <p className="wp-note-text">
              <strong>Advance booking recommended</strong> — especially for couples sessions, hot stone therapy,
              and weekend slots. Walk-ins are welcome subject to availability.
              Call or WhatsApp <strong>+250 791 207 400</strong> to reserve.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="wp-cta-band">
        <div className="wp-cta-inner">
          <h2 className="wp-cta-title reveal">Begin Your <em>Wellness</em> Journey</h2>
          <p className="wp-cta-body reveal rd1">
            Gift yourself — or someone you love — the experience of true relaxation.
            Book a single session or a full wellness package.
          </p>
          <div className="wp-cta-btns reveal rd2">
            <a href="tel:+250791207400" className="btn-primary"><FaWhatsapp /> Book Now</a>
            <Link to="/contact" className="btn-ghost-light">Ask About Packages <FaArrowRight /></Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}