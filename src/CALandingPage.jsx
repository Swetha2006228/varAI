import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import varaiLogo from "./assets/VarAI_logo.png";
import {
  BarChart2,
  FileText,
  Search,
  Building2,
  TrendingUp,
  BookOpen,
  Zap,
  Lock,
  Smartphone,
  MessageCircle,
  ChevronDown,
  ArrowUp,
  Shield,
  CheckCircle,
  Star,
  Menu,
  X,
  ArrowRight,
  Brain,
  Bot,
  UserCheck,
  Mic,
  Link2,
  Target,
  Rocket,
  Paperclip,
} from "lucide-react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Nunito:wght@300;400;500;600;700&family=Exo+2:wght@600;700;800&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Nunito', sans-serif; overflow-x: hidden; background: #07090f; }
    .font-serif { font-family: 'Plus Jakarta Sans', sans-serif !important; }
    .font-num   { font-family: 'Exo 2', sans-serif !important; letter-spacing: 0.02em; }
    :root {
      --bg:#07090f; --bg-card:#0d1017; --bg-elevated:#131824;
      --blue:#1d9bf0; --blue-bright:#38bdf8; --blue-glow:rgba(29,155,240,0.35);
      --blue-soft:rgba(29,155,240,0.12); --blue-border:rgba(29,155,240,0.25);
      --blue-shine:rgba(29,155,240,0.55); --teal:#2dd4bf; --teal-soft:rgba(45,212,191,0.12);
      --text:#e8f0fe; --text-muted:#6b7fa8; --text-dim:#2a3450;
      --border:rgba(29,155,240,0.18); --border-shine:rgba(29,155,240,0.55);
      --shadow:0 8px 32px rgba(7,9,15,0.6);
    }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
    @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.6)} }
    @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
    .animate-float-1{animation:float 5s ease-in-out infinite}
    .animate-float-2{animation:float 4s ease-in-out 1.5s infinite}
    .animate-float-3{animation:float 6s ease-in-out 0.8s infinite}
    .animate-fadeup{animation:fadeUp 0.7s ease both}
    .animate-fadeup-d1{animation:fadeUp 0.8s 0.15s ease both}
    .animate-fadeup-d2{animation:fadeUp 0.8s 0.35s ease both}
    .pulse-dot{animation:pulseDot 2s ease-in-out infinite}
    .shine-text {
      background:linear-gradient(90deg,#1d9bf0,#2dd4bf,#38bdf8,#1d9bf0);
      background-size:200% auto; -webkit-background-clip:text;
      -webkit-text-fill-color:transparent; background-clip:text;
      animation:shimmer 4s linear infinite;
    }
    .hover-card { transition:transform 0.3s ease,box-shadow 0.3s ease,border-color 0.3s ease; cursor:default; }
    .hover-card:hover { transform:translateY(-6px) scale(1.01); box-shadow:0 16px 48px rgba(29,155,240,0.2),0 0 28px rgba(29,155,240,0.1); border-color:rgba(29,155,240,0.55) !important; }
    .hero-card { transition:transform 0.35s ease,box-shadow 0.35s ease,border-color 0.35s ease; }
    .hero-card:hover { transform:translateY(-8px) scale(1.03) !important; box-shadow:0 24px 56px rgba(29,155,240,0.28),0 0 36px rgba(29,155,240,0.15) !important; border-color:rgba(29,155,240,0.65) !important; }
    .hero-card-teal:hover { box-shadow:0 20px 48px rgba(45,212,191,0.22),0 0 28px rgba(45,212,191,0.14) !important; border-color:rgba(45,212,191,0.6) !important; }
    .faq-item { transition:border-color 0.25s ease,box-shadow 0.25s ease,transform 0.25s ease; }
    .faq-item:hover { border-color:rgba(29,155,240,0.4) !important; box-shadow:0 4px 20px rgba(29,155,240,0.08); transform:translateX(4px); }
    .test-card { transition:transform 0.3s ease,box-shadow 0.3s ease,border-color 0.3s ease; }
    .test-card:hover { transform:translateY(-8px); box-shadow:0 20px 48px rgba(29,155,240,0.15),0 0 24px rgba(29,155,240,0.08); border-color:rgba(29,155,240,0.45) !important; }
    .stat-item { transition:transform 0.25s ease; cursor:default; }
    .stat-item:hover { transform:translateY(-4px); }
    .why-card { transition:transform 0.3s ease,box-shadow 0.3s ease,border-color 0.3s ease; }
    .why-card:hover { transform:translateX(6px); box-shadow:0 8px 32px rgba(29,155,240,0.12); border-color:rgba(29,155,240,0.45) !important; }
    .why-card:hover .why-icon { background:rgba(29,155,240,0.2) !important; box-shadow:0 0 16px rgba(29,155,240,0.3); }
    .step-card { transition:transform 0.3s ease,box-shadow 0.3s ease,border-color 0.3s ease; }
    .step-card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(29,155,240,0.15); border-color:rgba(29,155,240,0.45) !important; }
    .footer-link { transition:color 0.2s,text-shadow 0.2s; }
    .footer-link:hover { color:var(--blue-bright) !important; text-shadow:0 0 10px rgba(29,155,240,0.6); }
    .btn-glow { position:relative; background:linear-gradient(135deg,#1d9bf0,#2dd4bf); color:#07090f; font-weight:700; border:none; transition:all 0.3s ease; overflow:hidden; cursor:pointer; }
    .btn-glow::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,#2dd4bf,#1d9bf0); opacity:0; transition:opacity 0.3s ease; }
    .btn-glow:hover::after { opacity:1; }
    .btn-glow:hover { box-shadow:0 0 8px rgba(29,155,240,0.25),0 0 14px rgba(45,212,191,0.1); transform:translateY(-1px); }
    .btn-glow > * { position:relative; z-index:1; }
    .btn-outline-glow { background:transparent; border:1px solid var(--border); color:var(--text); transition:all 0.3s ease; cursor:pointer; }
    .btn-outline-glow:hover { border-color:var(--blue); color:var(--blue-bright); box-shadow:0 0 8px rgba(29,155,240,0.2); }
    .card-shine { background:var(--bg-card); border:1px solid var(--border); position:relative; overflow:hidden; transition:all 0.35s ease; }
    .card-shine::before { content:''; position:absolute; top:0; left:-100%; width:50%; height:100%; background:linear-gradient(90deg,transparent,rgba(29,155,240,0.07),transparent); transition:left 0.6s ease; pointer-events:none; }
    .card-shine:hover { border-color:var(--border-shine); box-shadow:0 0 28px rgba(29,155,240,0.14),0 8px 32px rgba(0,0,0,0.5); }
    .card-shine:hover::before { left:120%; }
    .nav-default { background:rgba(7,9,15,0.45); backdrop-filter:blur(16px); border-bottom:1px solid rgba(29,155,240,0.08); }
    .nav-scrolled { background:rgba(7,9,15,0.94); backdrop-filter:blur(24px); border-bottom:1px solid rgba(29,155,240,0.22); box-shadow:0 4px 32px rgba(29,155,240,0.06); }
    .reveal { opacity:0; transform:translateY(24px); transition:opacity 0.6s ease,transform 0.6s ease; }
    .reveal.visible { opacity:1; transform:translateY(0); }
    .mobile-menu { position:fixed; inset:0; z-index:40; background:rgba(7,9,15,0.98); backdrop-filter:blur(24px); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:36px; transition:opacity 0.3s ease,transform 0.3s ease; }
    .mobile-menu.open { opacity:1; pointer-events:all; transform:translateY(0); }
    .mobile-menu.close { opacity:0; pointer-events:none; transform:translateY(-20px); }
    .accordion-body { max-height:0; overflow:hidden; transition:max-height 0.4s ease; }
    .accordion-body.open { max-height:220px; }
    .tab-btn { transition:all 0.25s ease; color:var(--text-muted); border:1px solid var(--border); }
    .tab-btn:hover { color:var(--blue-bright); border-color:var(--blue); box-shadow:0 0 12px rgba(29,155,240,0.15); }
    .tab-btn.active { background:linear-gradient(135deg,#1d9bf0,#2dd4bf) !important; color:#07090f !important; border-color:transparent !important; font-weight:700; box-shadow:0 0 18px rgba(29,155,240,0.45); }
    .progress-bar { height:3px; border-radius:99px; background:linear-gradient(90deg,var(--blue),var(--teal)); transition:width 1.2s ease; box-shadow:0 0 8px rgba(29,155,240,0.55); }
    .dark-input { background:var(--bg-elevated); border:1px solid var(--text-dim); color:var(--text); border-radius:6px; transition:all 0.25s ease; font-family:'Mulish',sans-serif; }
    .dark-input:focus,.dark-input:focus-within { outline:none; border-color:var(--blue) !important; box-shadow:0 0 0 3px rgba(29,155,240,0.15),0 0 14px rgba(29,155,240,0.1); }
    .dark-input::placeholder { color:var(--text-muted); opacity:0.45; }
    .back-top { position:fixed; bottom:28px; right:28px; z-index:99; width:46px; height:46px; border-radius:50%; background:linear-gradient(135deg,#1d9bf0,#2dd4bf); color:#07090f; display:flex; align-items:center; justify-content:center; cursor:pointer; border:none; box-shadow:0 0 8px rgba(29,155,240,0.3); transition:opacity 0.3s,transform 0.3s,box-shadow 0.2s; }
    .back-top.gone { opacity:0; transform:translateY(16px); pointer-events:none; }
    .back-top:hover { box-shadow:0 0 12px rgba(29,155,240,0.45),0 0 20px rgba(45,212,191,0.15); transform:translateY(-2px); }
    .orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(90px); }
    .grid-bg { background-image:linear-gradient(rgba(29,155,240,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(29,155,240,0.03) 1px,transparent 1px); background-size:48px 48px; }
    .dropdown-trigger { display:flex; align-items:center; justify-content:space-between; padding:14px 16px; cursor:pointer; background:var(--bg-elevated); border:1px solid var(--text-dim); border-radius:6px; color:var(--text); transition:all 0.25s ease; font-family:'Mulish',sans-serif; font-size:0.875rem; }
    .dropdown-trigger:hover,.dropdown-trigger.open { border-color:var(--blue); box-shadow:0 0 0 3px rgba(29,155,240,0.15),0 0 14px rgba(29,155,240,0.08); }
    .dropdown-trigger.placeholder { color:rgba(107,127,168,0.45); }

    /* ══ LOGO WHITE CIRCLE ══ */
    .logo-circle {
      background: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 0 12px rgba(255,255,255,0.25), 0 0 24px rgba(29,155,240,0.2);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
    .logo-circle:hover {
      box-shadow: 0 0 18px rgba(255,255,255,0.35), 0 0 32px rgba(29,155,240,0.35);
      transform: scale(1.05);
    }
    .logo-circle img {
      object-fit: contain;
    }

    /* ══ H1 SPACING ══ */
    h1.hero-title { line-height:1.18 !important; letter-spacing:0.02em; word-spacing:0.1em; }
    h1.hero-title br { display:block; content:""; margin-bottom:0.18em; }

    /* ══ GLOBAL HEADING LETTER FIX ══ */
    h1, h2, h3 { letter-spacing:0.03em !important; word-spacing:0.08em !important; }
    .font-serif { letter-spacing:0.03em !important; }
    span.shine-text { letter-spacing:0.03em !important; }

    /* ══ ANIMATED WAVEFORM BARS ══ */
    @keyframes wave1 { 0%,100%{height:20%} 50%{height:90%} }
    @keyframes wave2 { 0%,100%{height:50%} 50%{height:20%} }
    @keyframes wave3 { 0%,100%{height:70%} 50%{height:40%} }
    @keyframes wave4 { 0%,100%{height:30%} 50%{height:100%} }
    @keyframes wave5 { 0%,100%{height:80%} 50%{height:30%} }
    @keyframes wave6 { 0%,100%{height:40%} 50%{height:80%} }
    .wave-bar { border-radius:3px; background:rgba(45,212,191,0.55); width:100%; box-shadow:0 -1px 3px rgba(45,212,191,0.25); }
    .wave-bar:nth-child(6n+1){animation:wave1 1.1s ease-in-out infinite}
    .wave-bar:nth-child(6n+2){animation:wave2 0.9s ease-in-out 0.1s infinite}
    .wave-bar:nth-child(6n+3){animation:wave3 1.3s ease-in-out 0.2s infinite}
    .wave-bar:nth-child(6n+4){animation:wave4 0.8s ease-in-out 0.3s infinite}
    .wave-bar:nth-child(6n+5){animation:wave5 1.2s ease-in-out 0.15s infinite}
    .wave-bar:nth-child(6n+6){animation:wave6 1.0s ease-in-out 0.25s infinite}
    .static-bar { border-radius:3px; width:100%; animation:none !important; box-shadow:0 -2px 4px rgba(45,212,191,0.9); }

    /* ══ VISION GRID ══ */
    .vision-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
    .vision-grid .vision-odd { grid-column:1/2; }
    .vision-grid .vision-even { grid-column:2/3; }
    .vision-grid .vision-full { grid-column:1/3; }
    @keyframes visionPulse { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.15)} }
    .vision-dot { animation:visionPulse 2.5s ease-in-out infinite; }
    .vision-item {
      position:relative; overflow:hidden;
      transition:transform 0.3s ease,box-shadow 0.3s ease,border-color 0.3s ease;
    }
    .vision-item::after {
      content:''; position:absolute; inset:0;
      background:linear-gradient(135deg,rgba(29,155,240,0.05),transparent);
      opacity:0; transition:opacity 0.3s ease;
    }
    .vision-item:hover { transform:translateY(-5px) scale(1.02); box-shadow:0 16px 40px rgba(29,155,240,0.18); border-color:rgba(29,155,240,0.5) !important; }
    .vision-item:hover::after { opacity:1; }

    /* ══ FAQ ANSWER PADDING ══ */
    .faq-answer { padding:16px 24px 20px !important; }

    /* ══ TESTIMONIAL MASONRY ══ */
    @keyframes cardEntrance { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
    .testi-grid { columns:1; gap:20px; }
    @media(min-width:640px){ .testi-grid { columns:2; } }
    @media(min-width:1024px){ .testi-grid { columns:3; } }
    .testi-item { break-inside:avoid; margin-bottom:20px; display:inline-block; width:100%; }
    .testi-card {
      position:relative; overflow:hidden;
      transition:transform 0.3s ease,box-shadow 0.3s ease,border-color 0.3s ease;
    }
    .testi-card::before {
      content:''; position:absolute; top:-10px; right:16px;
      font-size:5rem; font-family:'Libre Baskerville',serif; font-weight:700;
      line-height:1; color:transparent; pointer-events:none; user-select:none;
    }
    .testi-card:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(29,155,240,0.18),0 0 24px rgba(29,155,240,0.08); border-color:rgba(29,155,240,0.5) !important; }
    .testi-card:hover .testi-avatar { box-shadow:0 0 16px rgba(29,155,240,0.5); border-color:var(--blue-bright) !important; }
    .testi-stars { display:flex; gap:3px; margin-bottom:14px; }
  `}</style>
);

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function AnimatedNumber({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let cur = 0;
          const end = parseInt(target);
          const step = Math.ceil(end / 60);
          const t = setInterval(() => {
            cur += step;
            if (cur >= end) {
              setVal(end);
              clearInterval(t);
            } else setVal(cur);
          }, 20);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return (
    <span ref={ref} className='font-num text-4xl font-bold shine-text'>
      {val}
      {suffix}
    </span>
  );
}

// ════════ VARAI LOGO — white circle container
function VarAILogo({ size = 36 }) {
  // Circle is just slightly larger than the image — tight fit
  const circleSize = Math.round(size * 1.08);
  const imgSize = Math.round(size * 0.96);
  return (
    <div
      className='logo-circle'
      style={{ width: circleSize, height: circleSize }}
    >
      <img
        src={varaiLogo}
        alt='VarAI Logo'
        width={imgSize}
        height={imgSize}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

// ════════ NAVBAR
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    ["Services", "#services", "services"],
    ["How It Works", "#howitworks", "howitworks"],
    ["Why VarAI", "#whyus", "whyus"],
    ["FAQ", "#faq", "faq"],
    ["Testimonials", "#testimonials", "testimonials"],
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sectionIds = links.map(([, , id]) => id);
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-16 py-4 transition-all duration-300 ${scrolled ? "nav-scrolled" : "nav-default"}`}
      >
        <a
          href='#'
          className='flex items-center gap-2.5 z-50 relative group'
          style={{ textDecoration: "none" }}
        >
          <VarAILogo size={32} />
          <span
            className='font-serif text-xl md:text-2xl font-semibold tracking-wide'
            style={{ color: "var(--text)", letterSpacing: "0.04em" }}
          >
            Var
            <span className='shine-text' style={{ letterSpacing: "0.04em" }}>
              AI
            </span>
          </span>
        </a>
        <ul className='hidden md:flex items-center gap-8'>
          {links.map(([label, href, id]) => {
            const isActive = activeSection === id;
            return (
              <li key={label}>
                <a
                  href={href}
                  className='text-xs font-semibold tracking-widest uppercase transition-all duration-200'
                  style={{
                    color: isActive
                      ? "var(--blue-bright)"
                      : "var(--text-muted)",
                    textShadow: isActive
                      ? "0 0 14px rgba(29,155,240,0.9), 0 0 28px rgba(29,155,240,0.45)"
                      : "none",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--blue-bright)";
                    e.currentTarget.style.textShadow =
                      "0 0 14px rgba(29,155,240,0.9), 0 0 28px rgba(29,155,240,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive
                      ? "var(--blue-bright)"
                      : "var(--text-muted)";
                    e.currentTarget.style.textShadow = isActive
                      ? "0 0 14px rgba(29,155,240,0.9), 0 0 28px rgba(29,155,240,0.45)"
                      : "none";
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
          {/* ── Join Waitlist as two-color glowy text ── */}
          <li>
            <a
              href='#waitlist'
              className='tracking-widest uppercase'
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                textDecoration: "none",
                background: "linear-gradient(90deg, #38bdf8, #2dd4bf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter:
                  "drop-shadow(0 0 6px rgba(29,155,240,0.8)) drop-shadow(0 0 14px rgba(45,212,191,0.55))",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 10px rgba(29,155,240,1)) drop-shadow(0 0 22px rgba(45,212,191,0.85)) drop-shadow(0 0 40px rgba(29,155,240,0.4))";
                e.currentTarget.style.letterSpacing = "0.2em";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 6px rgba(29,155,240,0.8)) drop-shadow(0 0 14px rgba(45,212,191,0.55))";
                e.currentTarget.style.letterSpacing = "0.16em";
              }}
            >
              Join Waitlist
            </a>
          </li>
        </ul>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className='md:hidden z-50 relative p-1'
        >
          {menuOpen ? (
            <X size={24} style={{ color: "var(--blue-bright)" }} />
          ) : (
            <Menu size={24} style={{ color: "var(--text)" }} />
          )}
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : "close"}`}>
        <a href='#' onClick={close} className='flex items-center gap-2.5 mb-4'>
          <VarAILogo size={40} />
          <span
            className='font-serif text-2xl font-semibold'
            style={{ color: "var(--text)", letterSpacing: "0.04em" }}
          >
            Var
            <span className='shine-text' style={{ letterSpacing: "0.04em" }}>
              AI
            </span>
          </span>
        </a>
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={close}
            className='font-serif text-3xl font-semibold'
            style={{ color: "var(--text)" }}
            onMouseEnter={(e) => (e.target.style.color = "var(--blue-bright)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
          >
            {label}
          </a>
        ))}
        <a
          href='#waitlist'
          onClick={close}
          className='btn-glow mt-4 px-10 py-4 text-sm tracking-widest uppercase rounded-sm inline-block'
        >
          <span>Join Waitlist</span>
        </a>
      </div>
    </>
  );
}

// ════════ HERO
function Hero() {
  return (
    <section
      className='min-h-screen grid md:grid-cols-2 pt-16 relative overflow-hidden grid-bg'
      style={{ background: "var(--bg)" }}
    >
      <div
        className='orb'
        style={{
          width: 600,
          height: 600,
          top: "-150px",
          right: "-100px",
          background: "rgba(29,155,240,0.07)",
        }}
      />
      <div
        className='orb'
        style={{
          width: 300,
          height: 300,
          bottom: "0px",
          left: "-80px",
          background: "rgba(45,212,191,0.05)",
        }}
      />
      <div className='flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16 animate-fadeup-d1 relative z-10'>
        <div
          className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 w-fit'
          style={{
            background: "rgba(29,155,240,0.1)",
            border: "1px solid rgba(29,155,240,0.3)",
          }}
        >
          <span
            className='w-2 h-2 rounded-full block'
            style={{
              background: "var(--blue)",
              boxShadow: "0 0 8px var(--blue)",
            }}
          />
          <span
            className='text-xs font-semibold tracking-widest uppercase'
            style={{ color: "var(--blue-bright)" }}
          >
            AI-Powered Chartered Accountancy
          </span>
        </div>
        <h1
          className='hero-title font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6'
          style={{
            color: "var(--text)",
            lineHeight: 1.18,
            letterSpacing: "-0.01em",
          }}
        >
          Your Taxes. Done <span className='shine-text'>Smarter</span>
          <br />
          With AI + Real CAs
        </h1>
        <p
          className='text-base leading-relaxed max-w-md mb-10'
          style={{ color: "var(--text-muted)" }}
        >
          From GST filings to ITR — VarAI combines intelligent agents,
          automation, and certified Chartered Accountants to maximise your
          returns with zero stress.
        </p>
        <div className='flex flex-wrap gap-4'>
          <a
            href='#waitlist'
            className='btn-glow inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase rounded-sm active:scale-95'
          >
            <span className='flex items-center gap-2 font-semibold'>
              Get Started 
            </span>
          </a>
          <a
            href='#howitworks'
            className='btn-outline-glow inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold tracking-widest uppercase rounded-sm active:scale-95'
          >
            See How It Works
          </a>
        </div>
        <div
          className='mt-12 pt-10 flex gap-8 sm:gap-14 flex-wrap'
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            ["20", "+", "Users Onboarded"],
            ["2", "", "CA Firms Partnered"],
            ["90", "%", "Faster Filing Time"],
          ].map(([num, suf, label]) => (
            <div key={label} className='stat-item'>
              <AnimatedNumber target={num} suffix={suf} />
              <div
                className='text-xs tracking-wider mt-1 uppercase'
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cards */}
      <div className='hidden md:flex items-center justify-center px-8 py-20 animate-fadeup-d2 relative z-10'>
        <div className='relative w-96 h-[460px]'>
          {/* Card 1 — AI Tax Optimization */}
          <div
            className='animate-float-1 absolute top-0 left-4 right-4 rounded-2xl p-5 hero-card'
            style={{
              background: "rgba(7,9,15,0.95)",
              border: "1px solid rgba(29,155,240,0.25)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 0 40px rgba(29,155,240,0.1),inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className='flex items-center gap-4'>
              <div
                className='relative flex-shrink-0'
                style={{ width: 72, height: 72 }}
              >
                <svg width='72' height='72' viewBox='0 0 72 72'>
                  <circle
                    cx='36'
                    cy='36'
                    r='28'
                    fill='none'
                    stroke='rgba(29,155,240,0.1)'
                    strokeWidth='5'
                  />
                  <circle
                    cx='36'
                    cy='36'
                    r='28'
                    fill='none'
                    stroke='url(#bg1)'
                    strokeWidth='5'
                    strokeLinecap='round'
                    strokeDasharray='175.93'
                    strokeDashoffset='38.7'
                    transform='rotate(-90 36 36)'
                  />
                  <defs>
                    <linearGradient id='bg1' x1='0%' y1='0%' x2='100%' y2='0%'>
                      <stop offset='0%' stopColor='#1d9bf0' />
                      <stop offset='100%' stopColor='#2dd4bf' />
                    </linearGradient>
                  </defs>
                  <text
                    x='36'
                    y='40'
                    textAnchor='middle'
                    fontSize='11'
                    fontWeight='700'
                    fontFamily='Barlow Condensed'
                    fill='#38bdf8'
                  >
                    AI ✦
                  </text>
                </svg>
              </div>
              <div>
                <div
                  className='text-xs font-semibold tracking-widest uppercase mb-1'
                  style={{ color: "var(--text-muted)" }}
                >
                  Tax Saved
                </div>
                <div className='font-num text-2xl font-bold shine-text'>
                  ₹2.1L
                </div>
                <div
                  className='text-xs mt-0.5'
                  style={{ color: "var(--text-muted)" }}
                >
                  FY 2024–25
                </div>
              </div>
              <div className='ml-auto text-right'>
                <div
                  className='text-xs px-2 py-1 rounded-full font-semibold mb-2'
                  style={{
                    background: "rgba(34,197,94,0.12)",
                    color: "#4ade80",
                    border: "1px solid rgba(34,197,94,0.25)",
                  }}
                >
                  ↑ 28%
                </div>
                <div className='text-xs' style={{ color: "var(--text-dim)" }}>
                  vs last yr
                </div>
              </div>
            </div>
            <div
              className='my-4'
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg,transparent,rgba(29,155,240,0.2),transparent)",
              }}
            />
            <div className='grid grid-cols-3 gap-2 text-center'>
              {[
                ["80C", "Optimized"],
                ["80D", "Optimized"],
                ["HRA", "Optimized"],
              ].map(([val, lbl]) => (
                <div
                  key={val}
                  className='rounded-lg py-2 hover-card'
                  style={{
                    background: "rgba(29,155,240,0.06)",
                    border: "1px solid transparent",
                  }}
                >
                  <div
                    className='font-num text-sm font-bold'
                    style={{ color: "var(--blue-bright)" }}
                  >
                    {val}
                  </div>
                  <div style={{ color: "var(--teal)", fontSize: 8 }}>{lbl}</div>
                </div>
              ))}
            </div>
            <div
              className='mt-3 text-xs text-center flex items-center justify-center gap-1'
              style={{ color: "var(--teal)" }}
            >
              <Zap size={11} /> AI Suggestion Engine Active
            </div>
          </div>

          {/* Card 2 — GST Agent Console */}
          <div
            className='animate-float-2 absolute rounded-xl overflow-hidden hero-card hero-card-teal'
            style={{
              bottom: 110,
              left: "-10px",
              width: 195,
              background: "#050810",
              border: "1px solid rgba(45,212,191,0.25)",
              boxShadow: "0 0 20px rgba(45,212,191,0.08)",
            }}
          >
            <div
              className='flex items-center gap-1.5 px-3 py-2'
              style={{
                borderBottom: "1px solid rgba(45,212,191,0.1)",
                background: "rgba(45,212,191,0.04)",
              }}
            >
              <div
                className='w-1.5 h-1.5 rounded-full'
                style={{
                  background: "var(--teal)",
                  boxShadow: "0 0 4px var(--teal)",
                }}
              />
              <span
                className='font-mono'
                style={{ color: "var(--teal)", fontSize: 9 }}
              >
                varai_gst.run()
              </span>
            </div>
            <div
              className='p-3 font-mono'
              style={{ fontSize: 9, lineHeight: 1.8 }}
            >
              <div style={{ color: "rgba(45,212,191,0.5)" }}>
                $ gst_agent --execute
              </div>
              <div style={{ color: "var(--teal)" }}>✔ GSTIN validated</div>
              <div style={{ color: "var(--teal)" }}>✔ GSTR-1 Filed</div>
              <div style={{ color: "var(--teal)" }}>✔ GSTR-3B Filed</div>
              <div style={{ color: "#4ade80" }}>✔ ITC Maximised</div>
              <div className='flex items-center gap-1 mt-1'>
                <span style={{ color: "rgba(45,212,191,0.4)" }}>status:</span>
                <span
                  className='px-1 rounded'
                  style={{
                    background: "rgba(45,212,191,0.12)",
                    color: "var(--teal)",
                  }}
                >
                  VERIFIED
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 — Compliance Score */}
          <div
            className='animate-float-3 absolute rounded-xl overflow-hidden hero-card'
            style={{
              bottom: 0,
              right: "-10px",
              width: 185,
              background: "#050c14",
              border: "1px solid rgba(29,155,240,0.2)",
              boxShadow: "0 0 24px rgba(29,155,240,0.08)",
            }}
          >
            <div
              className='px-3 py-2 flex items-center justify-between'
              style={{
                background:
                  "linear-gradient(90deg,rgba(29,155,240,0.15),rgba(45,212,191,0.08))",
                borderBottom: "1px solid rgba(29,155,240,0.12)",
              }}
            >
              <span className='font-mono text-xs font-bold shine-text'>
                COMPLIANCE
              </span>
              <div
                className='w-2 h-2 rounded-full'
                style={{
                  background: "var(--teal)",
                  boxShadow: "0 0 6px var(--teal)",
                }}
              />
            </div>
            <div className='p-3'>
              <div className='flex items-end gap-1 mb-3'>
                <span
                  className='font-num font-bold leading-none shine-text'
                  style={{ fontSize: 42 }}
                >
                  A
                </span>
                <span
                  className='font-num font-bold leading-none shine-text'
                  style={{ fontSize: 28, marginBottom: 4 }}
                >
                  +
                </span>
              </div>
              {[
                ["Accuracy", "100%", 100],
                ["CA Verified", "✔", 100],
                ["Timeliness", "96%", 96],
              ].map(([lbl, pct, w]) => (
                <div key={lbl} className='mb-2'>
                  <div className='flex justify-between mb-0.5'>
                    <span
                      style={{
                        fontSize: 9,
                        color: "var(--text-muted)",
                        fontFamily: "Mulish",
                      }}
                    >
                      {lbl}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        color: "var(--blue-bright)",
                        fontFamily: "Barlow Condensed",
                        fontWeight: 700,
                      }}
                    >
                      {pct}
                    </span>
                  </div>
                  <div
                    className='h-0.5 rounded-full overflow-hidden'
                    style={{ background: "var(--text-dim)" }}
                  >
                    <div
                      style={{
                        width: `${w}%`,
                        height: "100%",
                        background: "linear-gradient(90deg,#1d9bf0,#2dd4bf)",
                        boxShadow: "0 0 4px rgba(29,155,240,0.6)",
                      }}
                    />
                  </div>
                </div>
              ))}
              <div
                className='mt-2 pt-2 flex items-center gap-1.5'
                style={{ borderTop: "1px solid rgba(29,155,240,0.08)" }}
              >
                <CheckCircle size={10} style={{ color: "var(--teal)" }} />
                <span
                  style={{
                    fontSize: 9,
                    color: "var(--text-muted)",
                    fontFamily: "Mulish",
                  }}
                >
                  Hybrid AI + Human Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════ SERVICES
const serviceGroups = {
  Individual: [
    {
      num: "01",
      Icon: BarChart2,
      name: "ITR-1 Filing (AI Assisted)",
      desc: "Automated tax filing with AI agents extracting and optimizing deductions — PDFs, images and Excel all supported.",
    },
    {
      num: "02",
      Icon: Brain,
      name: "Tax Optimization Engine",
      desc: "Multi-agent system that asks smart questions, analyzes income, and maximizes your returns legally.",
    },
    {
      num: "03",
      Icon: TrendingUp,
      name: "Financial Insights",
      desc: "Understand your tax behaviour, savings opportunities, and plan ahead with AI-powered recommendations.",
    },
  ],
  Business: [
    {
      num: "04",
      Icon: FileText,
      name: "GST Compliance (Automated)",
      desc: "Upload invoices and let VarAI extract fields, validate GSTINs, reconcile GSTR-2A and maximise your ITC.",
    },
    {
      num: "05",
      Icon: BookOpen,
      name: "AI Bookkeeping & Reports",
      desc: "Auto-generated P&L, balance sheets, and MIS reports — always accurate, always ready.",
    },
    {
      num: "06",
      Icon: UserCheck,
      name: "CA Advisory Layer",
      desc: "Every filing reviewed and approved by a certified Chartered Accountant before it reaches the portal.",
    },
  ],
};

function Services() {
  const [activeTab, setActiveTab] = useState("Individual");
  const ref = useReveal();
  return (
    <section
      id='services'
      className='py-20 px-6 md:px-16 relative overflow-hidden'
      style={{ background: "var(--bg-card)" }}
    >
      <div
        className='orb'
        style={{
          width: 400,
          height: 400,
          top: "-100px",
          right: "-80px",
          background: "rgba(29,155,240,0.05)",
        }}
      />
      <div ref={ref} className='reveal mb-10 relative z-10'>
        <p
          className='text-xs tracking-widest uppercase mb-3'
          style={{ color: "var(--blue-bright)" }}
        >
          What We Offer
        </p>
        <h2
          className='font-serif text-4xl md:text-5xl font-semibold leading-tight mb-8'
          style={{ color: "var(--text)" }}
        >
          AI + CA Powered <span className='shine-text'>Services</span>
        </h2>
        <div className='flex gap-2 flex-wrap'>
          {Object.keys(serviceGroups).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn px-6 py-2.5 text-sm tracking-wider uppercase rounded-sm ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10'>
        {serviceGroups[activeTab].map((s, i) => (
          <ServiceCard key={s.num} {...s} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ num, Icon, name, desc, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className='reveal card-shine hover-card rounded-xl p-8'
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className='w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300'
        style={{
          background: "rgba(29,155,240,0.1)",
          border: "1px solid rgba(29,155,240,0.22)",
        }}
      >
        <Icon size={22} style={{ color: "var(--blue-bright)" }} />
      </div>
      <div className='font-num text-lg font-bold mb-3 shine-text'>{num}</div>
      <div
        className='font-serif text-xl font-semibold mb-3'
        style={{ color: "var(--text)" }}
      >
        {name}
      </div>
      <div
        className='text-sm leading-relaxed'
        style={{ color: "var(--text-muted)" }}
      >
        {desc}
      </div>
    </div>
  );
}

// ════════ HOW IT WORKS
const steps = [
  {
    num: "01",
    Icon: Link2,
    title: "Data Collection (Automatic)",
    desc: "Connect bank accounts, upload documents, or sync via WhatsApp.",
  },
  {
    num: "02",
    Icon: Bot,
    title: "Multi-Agent Processing",
    desc: "AI agents ask smart questions, analyze transactions, and identify deductions.",
  },
  {
    num: "03",
    Icon: Brain,
    title: "Optimization Engine",
    desc: "System calculates the best tax-saving strategy using multiple scenarios.",
  },
  {
    num: "04",
    Icon: UserCheck,
    title: "CA Review Loop",
    desc: "Certified CA verifies and approves every filing.",
  },
  {
    num: "05",
    Icon: CheckCircle,
    title: "Filing + Compliance",
    desc: "Returns filed automatically with full audit trail.",
  },
];

function HowItWorks() {
  const ref = useReveal();
  return (
    <section
      id='howitworks'
      className='py-20 px-6 md:px-16 relative'
      style={{ background: "var(--bg)" }}
    >
      <div
        className='orb'
        style={{
          width: 500,
          height: 500,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "rgba(29,155,240,0.04)",
        }}
      />
      <div ref={ref} className='reveal mb-14 text-center relative z-10'>
        <p
          className='text-xs tracking-widest uppercase mb-3'
          style={{ color: "var(--blue-bright)" }}
        >
          How It Works
        </p>
        <h2
          className='font-serif text-4xl md:text-5xl font-semibold'
          style={{
            color: "var(--text)",
            letterSpacing: "0.05em",
            wordSpacing: "0.14em",
            lineHeight: 1.38,
          }}
        >
          Built Like an <span className='shine-text'>AI System</span>,<br />
          Verified Like a CA Firm
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10'>
        {steps.map((s, i) => (
          <StepCard key={s.num} {...s} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}

function StepCard({ num, Icon, title, desc, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className='reveal step-card card-shine rounded-xl p-6 text-center relative overflow-hidden'
      style={{
        border: "1px solid var(--border)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className='absolute top-0 left-0 right-0 h-0.5'
        style={{
          background:
            "linear-gradient(90deg,transparent,#1d9bf0,#2dd4bf,#1d9bf0,transparent)",
          boxShadow:
            "0 0 8px rgba(29,155,240,0.8),0 0 16px rgba(45,212,191,0.4)",
        }}
      />
      <div
        className='w-11 h-11 rounded-xl flex items-center justify-center mb-4 mx-auto'
        style={{
          background: "rgba(29,155,240,0.1)",
          border: "1px solid rgba(29,155,240,0.22)",
        }}
      >
        <Icon size={20} style={{ color: "var(--blue-bright)" }} />
      </div>
      <div
        className='font-serif text-sm font-semibold mb-2'
        style={{ color: "var(--text)" }}
      >
        {title}
      </div>
      <div
        className='text-xs leading-relaxed'
        style={{ color: "var(--text-muted)" }}
      >
        {desc}
      </div>
    </div>
  );
}

// ════════ WHY VARAI
const whyItems = [
  {
    Icon: Zap,
    title: "AI Speed",
    text: "Filing in minutes, not days.",
    progress: 95,
  },
  {
    Icon: Bot,
    title: "Agent Intelligence",
    text: "Multi-agent system maximizes deductions.",
    progress: 98,
  },
  {
    Icon: Lock,
    title: "Secure Data",
    text: "Encrypted bank and government integrations.",
    progress: 100,
  },
  {
    Icon: UserCheck,
    title: "CA Verified",
    text: "Every return checked by professionals.",
    progress: 100,
  },
  {
    Icon: Smartphone,
    title: "WhatsApp Native",
    text: "Upload docs and track status via chat.",
    progress: 92,
  },
];

function WhyUs() {
  const headRef = useReveal();
  return (
    <section
      id='whyus'
      className='py-20 px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center relative'
      style={{ background: "var(--bg-card)" }}
    >
      <div
        className='orb'
        style={{
          width: 350,
          height: 350,
          bottom: "-60px",
          left: "-80px",
          background: "rgba(45,212,191,0.05)",
        }}
      />
      <div ref={headRef} className='reveal relative z-10'>
        <p
          className='text-xs tracking-widest uppercase mb-3'
          style={{ color: "var(--teal)" }}
        >
          Why Choose VarAI
        </p>
        <h2
          className='font-serif text-4xl md:text-5xl font-semibold mb-6'
          style={{
            color: "var(--text)",
            letterSpacing: "0.05em",
            wordSpacing: "0.14em",
            lineHeight: 1.38,
          }}
        >
          Not Just Filing<br />
          <span className='shine-text'>Intelligent</span> Tax Automation
        </h2>
        <p
          className='leading-relaxed text-sm max-w-sm'
          style={{ color: "var(--text-muted)" }}
        >
          We combine AI agents, automation pipelines, and real Chartered
          Accountants to deliver faster, smarter, and more accurate tax
          services.
        </p>
      </div>
      <div className='flex flex-col gap-4 relative z-10'>
        {whyItems.map((w) => (
          <WhyCard key={w.title} {...w} />
        ))}
      </div>
    </section>
  );
}

function WhyCard({ Icon, title, text, progress }) {
  const ref = useReveal();
  const barRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setWidth(progress);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (barRef.current) obs.observe(barRef.current);
    return () => obs.disconnect();
  }, [progress]);
  return (
    <div
      ref={ref}
      className='reveal why-card card-shine flex gap-5 items-start p-5 rounded-xl'
      style={{ border: "1px solid var(--border)" }}
    >
      <div
        className='why-icon w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300'
        style={{
          background: "rgba(29,155,240,0.1)",
          border: "1px solid rgba(29,155,240,0.25)",
        }}
      >
        <Icon size={18} style={{ color: "var(--blue-bright)" }} />
      </div>
      <div className='flex-1 min-w-0'>
        <div
          className='font-serif text-base font-semibold mb-1'
          style={{ color: "var(--text)" }}
        >
          {title}
        </div>
        <div
          className='text-xs leading-relaxed mb-3'
          style={{ color: "var(--text-muted)" }}
        >
          {text}
        </div>
        <div className='flex items-center gap-3'>
          <div
            ref={barRef}
            className='flex-1 h-0.5 rounded-full overflow-hidden'
            style={{ background: "var(--text-dim)" }}
          >
            <div className='progress-bar' style={{ width: `${width}%` }} />
          </div>
          <span className='font-num text-xs font-bold shine-text'>
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}

// ════════ PRODUCT VISION
function Vision() {
  const ref = useReveal();
  return (
    <section
      className='py-20 px-6 md:px-16 relative overflow-hidden grid-bg'
      style={{ background: "var(--bg)" }}
    >
      <div
        className='orb'
        style={{
          width: 500,
          height: 500,
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(29,155,240,0.04)",
        }}
      />
      <div ref={ref} className='reveal max-w-5xl mx-auto relative z-10'>
        <p
          className='text-xs tracking-widest uppercase mb-3 text-center'
          style={{ color: "var(--blue-bright)" }}
        >
          Product Vision
        </p>
        <h2
          className='font-serif text-4xl md:text-5xl font-semibold mb-12 text-center'
          style={{ color: "var(--text)", lineHeight: 1.2 }}
        >
          What We're <span className='shine-text'>Building</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
          <div
            className='vision-item card-shine rounded-2xl relative overflow-hidden'
            style={{
              border: "1px solid rgba(29,155,240,0.3)",
              background: "var(--bg-card)",
              boxShadow: "0 0 32px rgba(29,155,240,0.1)",
              padding: "2.2rem",
            }}
          >
            <div
              className='absolute top-0 left-0 right-0 h-0.5'
              style={{
                background:
                  "linear-gradient(90deg,transparent,#1d9bf0,#2dd4bf,transparent)",
              }}
            />
            <div
              className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6'
              style={{
                background: "rgba(29,155,240,0.12)",
                border: "1px solid rgba(29,155,240,0.3)",
                boxShadow: "0 0 20px rgba(29,155,240,0.2)",
              }}
            >
              <Brain size={30} style={{ color: "var(--blue-bright)" }} />
            </div>
            <div
              className='font-serif text-2xl font-semibold mb-4'
              style={{ color: "var(--text)", lineHeight: 1.25 }}
            >
              Agentic AI Architecture
            </div>
            <div
              className='text-sm leading-relaxed mb-6'
              style={{ color: "var(--text-muted)" }}
            >
              Multi-agent AI system inspired by modern autonomous architectures
              — planning, reasoning, and acting like a real CA firm.
            </div>
            <div className='flex flex-wrap gap-2'>
              {["Planning", "Reasoning", "Multi-Agent", "Autonomous"].map(
                (tag) => (
                  <span
                    key={tag}
                    className='text-xs px-3 py-1.5 rounded-full font-semibold'
                    style={{
                      background: "rgba(29,155,240,0.1)",
                      border: "1px solid rgba(29,155,240,0.28)",
                      color: "var(--blue-bright)",
                    }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div
            className='vision-item card-shine rounded-2xl relative overflow-hidden'
            style={{
              border: "1px solid rgba(45,212,191,0.3)",
              background: "var(--bg-card)",
              boxShadow: "0 0 32px rgba(45,212,191,0.08)",
              padding: "2.2rem",
            }}
          >
            <div
              className='absolute top-0 left-0 right-0 h-0.5'
              style={{
                background:
                  "linear-gradient(90deg,transparent,#2dd4bf,#1d9bf0,transparent)",
              }}
            />
            <div
              className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6'
              style={{
                background: "rgba(45,212,191,0.12)",
                border: "1px solid rgba(45,212,191,0.3)",
                boxShadow: "0 0 20px rgba(45,212,191,0.15)",
              }}
            >
              <Mic size={30} style={{ color: "var(--teal)" }} />
            </div>
            <div
              className='font-serif text-2xl font-semibold mb-4'
              style={{ color: "var(--text)", lineHeight: 1.25 }}
            >
              Voice Tax Assistant
            </div>
            <div
              className='text-sm leading-relaxed mb-6'
              style={{ color: "var(--text-muted)" }}
            >
              File taxes just by speaking — no forms, no friction.
            </div>
            <div
              className='flex items-end gap-1 mb-3'
              style={{ height: "52px" }}
            >
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24,
              ].map((i) => (
                <div
                  key={i}
                  className='wave-bar flex-1'
                  style={{
                    background:
                      "linear-gradient(to bottom,rgba(45,212,191,1) 0%,rgba(45,212,191,0.35) 100%)",
                  }}
                />
              ))}
            </div>
            <div
              className='text-xs tracking-widest uppercase font-semibold'
              style={{ color: "rgba(45,212,191,0.5)" }}
            >
              Live Voice Processing
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-6'>
          <div
            className='vision-item card-shine rounded-2xl relative overflow-hidden p-7'
            style={{
              border: "1px solid rgba(29,155,240,0.28)",
              background: "var(--bg-card)",
              boxShadow: "0 0 24px rgba(29,155,240,0.08)",
            }}
          >
            <div
              className='absolute top-0 left-0 right-0 h-0.5'
              style={{
                background:
                  "linear-gradient(90deg,transparent,#1d9bf0,transparent)",
              }}
            />
            <div
              className='w-14 h-14 rounded-2xl flex items-center justify-center mb-5'
              style={{
                background: "rgba(29,155,240,0.1)",
                border: "1px solid rgba(29,155,240,0.28)",
                boxShadow: "0 0 14px rgba(29,155,240,0.15)",
              }}
            >
              <Link2 size={24} style={{ color: "var(--blue-bright)" }} />
            </div>
            <div
              className='font-serif text-lg font-semibold mb-3'
              style={{ color: "var(--text)", lineHeight: 1.3 }}
            >
              Auto Bank Sync
            </div>
            <div
              className='text-sm leading-relaxed mb-5'
              style={{ color: "var(--text-muted)" }}
            >
              Bank & govt data fetched automatically — zero manual entry.
            </div>
            <div className='flex flex-wrap gap-1.5'>
              {["SBI", "HDFC", "ICICI", "Axis", "Kotak"].map((b) => (
                <span
                  key={b}
                  className='text-xs px-2.5 py-1 rounded font-semibold'
                  style={{
                    background: "rgba(29,155,240,0.08)",
                    border: "1px solid rgba(29,155,240,0.22)",
                    color: "var(--blue-bright)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div
            className='vision-item card-shine rounded-2xl relative overflow-hidden p-7'
            style={{
              border: "1px solid rgba(45,212,191,0.28)",
              background: "var(--bg-card)",
              boxShadow: "0 0 24px rgba(45,212,191,0.07)",
            }}
          >
            <div
              className='absolute top-0 left-0 right-0 h-0.5'
              style={{
                background:
                  "linear-gradient(90deg,transparent,#2dd4bf,transparent)",
              }}
            />
            <div
              className='w-14 h-14 rounded-2xl flex items-center justify-center mb-5'
              style={{
                background: "rgba(45,212,191,0.1)",
                border: "1px solid rgba(45,212,191,0.28)",
                boxShadow: "0 0 14px rgba(45,212,191,0.12)",
              }}
            >
              <BarChart2 size={24} style={{ color: "var(--teal)" }} />
            </div>
            <div
              className='font-serif text-lg font-semibold mb-3'
              style={{ color: "var(--text)", lineHeight: 1.3 }}
            >
              Real-Time Optimization
            </div>
            <div
              className='text-sm leading-relaxed mb-5'
              style={{ color: "var(--text-muted)" }}
            >
              Live tax-saving engine running 24/7 — finds deductions as you go.
            </div>
            <div className='flex items-center gap-4 mt-1'>
              <div
                className='relative flex-shrink-0'
                style={{ width: 56, height: 56 }}
              >
                <svg width='56' height='56' viewBox='0 0 56 56'>
                  <defs>
                    <linearGradient
                      id='ringGrad'
                      x1='0%'
                      y1='0%'
                      x2='100%'
                      y2='0%'
                    >
                      <stop offset='0%' stopColor='#2dd4bf' />
                      <stop offset='100%' stopColor='#1d9bf0' />
                    </linearGradient>
                  </defs>
                  <circle
                    cx='28'
                    cy='28'
                    r='24'
                    fill='none'
                    stroke='rgba(45,212,191,0.1)'
                    strokeWidth='2'
                  />
                  <circle
                    cx='28'
                    cy='28'
                    r='24'
                    fill='none'
                    stroke='url(#ringGrad)'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeDasharray='150.8'
                    strokeDashoffset='22.6'
                    transform='rotate(-90 28 28)'
                    style={{ filter: "drop-shadow(0 0 3px #2dd4bf)" }}
                  />
                  <circle
                    cx='28'
                    cy='28'
                    r='16'
                    fill='none'
                    stroke='rgba(29,155,240,0.12)'
                    strokeWidth='1.5'
                  />
                  <circle
                    cx='28'
                    cy='28'
                    r='16'
                    fill='none'
                    stroke='#1d9bf0'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeDasharray='100.5'
                    strokeDashoffset='10'
                    transform='rotate(-90 28 28)'
                    opacity='0.7'
                  />
                  <circle
                    cx='28'
                    cy='28'
                    r='4'
                    fill='#2dd4bf'
                    style={{ filter: "drop-shadow(0 0 4px #2dd4bf)" }}
                  />
                  <text
                    x='28'
                    y='32'
                    textAnchor='middle'
                    fontSize='5'
                    fontFamily='Barlow Condensed'
                    fontWeight='700'
                    fill='#e8f0fe'
                  >
                    85%
                  </text>
                </svg>
              </div>
              <div className='flex flex-col gap-1.5 flex-1'>
                {[
                  ["80C", "₹1.5L", 95],
                  ["HRA", "₹48K", 78],
                  ["80D", "₹25K", 60],
                ].map(([label, val, pct]) => (
                  <div key={label} className='flex items-center gap-2'>
                    <span
                      className='font-num text-xs font-bold w-7'
                      style={{ color: "var(--teal)" }}
                    >
                      {label}
                    </span>
                    <div
                      className='flex-1 h-1 rounded-full overflow-hidden'
                      style={{ background: "rgba(45,212,191,0.1)" }}
                    >
                      <div
                        style={{
                          width: `${pct}%`,
                          height: "100%",
                          background: "linear-gradient(90deg,#2dd4bf,#1d9bf0)",
                          boxShadow: "0 0 4px rgba(45,212,191,0.6)",
                        }}
                      />
                    </div>
                    <span
                      className='font-num text-xs font-bold'
                      style={{ color: "var(--blue-bright)" }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className='vision-item card-shine rounded-2xl relative overflow-hidden p-7'
            style={{
              border: "1px solid rgba(29,155,240,0.28)",
              background: "var(--bg-card)",
              boxShadow: "0 0 24px rgba(29,155,240,0.08)",
            }}
          >
            <div
              className='absolute top-0 left-0 right-0 h-0.5'
              style={{
                background:
                  "linear-gradient(90deg,transparent,#1d9bf0,transparent)",
              }}
            />
            <div
              className='w-14 h-14 rounded-2xl flex items-center justify-center mb-5'
              style={{
                background: "rgba(29,155,240,0.1)",
                border: "1px solid rgba(29,155,240,0.28)",
                boxShadow: "0 0 14px rgba(29,155,240,0.15)",
              }}
            >
              <Smartphone size={24} style={{ color: "var(--blue-bright)" }} />
            </div>
            <div
              className='font-serif text-lg font-semibold mb-3'
              style={{ color: "var(--text)", lineHeight: 1.3 }}
            >
              WhatsApp Native
            </div>
            <div
              className='text-sm leading-relaxed mb-4'
              style={{ color: "var(--text-muted)" }}
            >
              Full tax experience on chat — upload, ask, track, done.
            </div>
            <div className='flex flex-col gap-2'>
              <div
                className='self-end text-xs px-3 py-1.5 rounded-xl rounded-br-sm font-medium flex items-center gap-1.5'
                style={{
                  background: "rgba(29,155,240,0.15)",
                  color: "var(--blue-bright)",
                  border: "1px solid rgba(29,155,240,0.25)",
                }}
              >
                <Paperclip size={10} />
                Upload Form 16
              </div>
              <div
                className='self-start text-xs px-3 py-1.5 rounded-xl rounded-bl-sm font-medium flex items-center gap-1.5'
                style={{
                  background: "rgba(34,197,94,0.12)",
                  color: "#4ade80",
                  border: "1px solid rgba(34,197,94,0.25)",
                }}
              >
                <CheckCircle size={10} />
                ITR filed! Refund: ₹18,400
              </div>
            </div>
          </div>
        </div>

        <div
          className='relative p-7 rounded-2xl overflow-hidden'
          style={{
            background:
              "linear-gradient(135deg,rgba(29,155,240,0.08),rgba(45,212,191,0.05))",
            border: "1px solid rgba(29,155,240,0.25)",
          }}
        >
          <div
            className='absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none'
            style={{
              background: "rgba(45,212,191,0.06)",
              filter: "blur(50px)",
            }}
          />
          <div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-5'>
            <div>
              <p
                className='text-xs tracking-widest uppercase mb-2 flex items-center gap-1.5'
                style={{ color: "var(--teal)" }}
              >
                <Target size={11} />
                Our Goal
              </p>
              <p
                className='font-serif text-xl md:text-2xl font-semibold'
                style={{ color: "var(--text)" }}
              >
                Fully automated tax filing with{" "}
                <span className='shine-text'>CA verification in the loop</span>
              </p>
            </div>
            <a
              href='#waitlist'
              className='btn-glow flex-shrink-0 px-7 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm inline-block'
            >
              <span>Be Part of It →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════ FAQ
const faqs = [
  {
    q: "Is this fully automated?",
    a: "Almost — AI handles most of the process, and a CA verifies everything before submission.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Not at all. You can even file taxes via WhatsApp.",
  },
  {
    q: "What documents do I need?",
    a: "Form 16, bank statements, and investment proofs — we guide or auto-fetch where possible.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. End-to-end encryption with strict compliance protocols.",
  },
  {
    q: "Do you support businesses?",
    a: "Yes — GST filing, bookkeeping, and advisory are fully supported.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useReveal();
  return (
    <section
      id='faq'
      className='py-20 px-6 md:px-16'
      style={{ background: "var(--bg-card)" }}
    >
      <div ref={ref} className='reveal max-w-2xl mx-auto'>
        <p
          className='text-xs tracking-widest uppercase mb-3 text-center'
          style={{ color: "var(--blue-bright)" }}
        >
          Got Questions?
        </p>
        <h2
          className='font-serif text-4xl md:text-5xl font-semibold leading-tight mb-12 text-center'
          style={{ color: "var(--text)" }}
        >
          Frequently <span className='shine-text'>Asked</span>
        </h2>
        <div className='flex flex-col gap-3'>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className='faq-item rounded-xl overflow-hidden'
              style={{
                border: `1px solid ${open === i ? "rgba(29,155,240,0.45)" : "var(--border)"}`,
                boxShadow:
                  open === i ? "0 0 18px rgba(29,155,240,0.1)" : "none",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className='w-full flex items-center justify-between px-6 py-5 text-left transition-colors'
                style={{
                  background:
                    open === i ? "rgba(29,155,240,0.06)" : "var(--bg-card)",
                }}
              >
                <span
                  className='font-semibold text-sm pr-4'
                  style={{ color: "var(--text)" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={17}
                  className={`flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  style={{ color: "var(--blue-bright)" }}
                />
              </button>
              <div className={`accordion-body ${open === i ? "open" : ""}`}>
                <div
                  className='faq-answer px-6 pb-5 text-sm leading-relaxed'
                  style={{ color: "var(--text-muted)", paddingTop: "12px" }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════ WAITLIST
function Waitlist() {
  const [spots, setSpots] = useState(12);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    type: "",
    service: "",
    turnover: "",
  });
  const ref = useReveal();
  useEffect(() => {
    const t = setInterval(
      () => setSpots((s) => (Math.random() < 0.05 && s > 5 ? s - 1 : s)),
      8000,
    );
    return () => clearInterval(t);
  }, []);
  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Enter a valid email";
    return e;
  };
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setSpots((s) => Math.max(s - 1, 3));
    }, 1400);
  };
  return (
    <section
      id='waitlist'
      className='py-20 px-6 relative overflow-hidden grid-bg'
      style={{ background: "var(--bg)" }}
    >
      <div
        className='orb'
        style={{
          width: 500,
          height: 500,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "rgba(29,155,240,0.05)",
        }}
      />
      <div
        className='absolute right-[-20px] bottom-[-30px] font-serif font-bold leading-none select-none pointer-events-none'
        style={{ color: "rgba(29,155,240,0.04)", fontSize: "15rem" }}
      >
        AI
      </div>
      <div
        ref={ref}
        className='reveal max-w-2xl mx-auto text-center relative z-10'
      >
        <p
          className='text-xs tracking-widest uppercase mb-3'
          style={{ color: "var(--blue-bright)" }}
        >
          Early Access
        </p>
        <h2
          className='font-serif text-4xl md:text-5xl font-semibold mb-6'
          style={{
            color: "var(--text)",
            lineHeight: 1.28,
            letterSpacing: "-0.01em",
            wordSpacing: "0.06em",
          }}
        >
          Join VarAI & Unlock
          <br />
          <span className='shine-text'>Smarter Tax Savings</span>
        </h2>
        <p
          className='leading-relaxed mb-10 text-sm'
          style={{ color: "var(--text-muted)" }}
        >
          Be among the first to experience AI-powered tax filing. Get exclusive
          early-user benefits, priority onboarding, and personalized tax
          optimization insights.
        </p>
        <div className='flex items-center justify-center mb-10'>
          <div
            className='hover-card relative flex items-center gap-4 px-6 py-3 rounded-xl'
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "0 0 24px rgba(29,155,240,0.1)",
            }}
          >
            <span
              className='pulse-dot w-3 h-3 rounded-full block flex-shrink-0'
              style={{
                background: "var(--teal)",
                boxShadow: "0 0 10px var(--teal)",
              }}
            />
            <div className='flex items-center gap-2 flex-wrap justify-center'>
              <span
                className='text-xs font-semibold tracking-widest uppercase'
                style={{ color: "var(--text-muted)" }}
              >
                Spots Left
              </span>
              <div className='flex items-baseline gap-1'>
                <span
                  className='font-num text-3xl font-bold shine-text'
                  style={{ lineHeight: 1 }}
                >
                  {spots}
                </span>
                <span
                  className='text-xs font-semibold'
                  style={{ color: "var(--text-muted)" }}
                >
                  / 20
                </span>
              </div>
              <div
                className='w-px h-4 mx-1'
                style={{ background: "var(--border)" }}
              />
              <span
                className='text-xs px-2 py-0.5 rounded-full font-semibold flex items-center gap-1'
                style={{
                  background: "rgba(45,212,191,0.12)",
                  color: "var(--teal)",
                  border: "1px solid rgba(45,212,191,0.3)",
                }}
              >
                <Zap size={10} />
                Filling Fast
              </span>
            </div>
          </div>
        </div>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 text-left'
            noValidate
            autoComplete='off'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <FormField
                label='First Name *'
                name='firstName'
                placeholder='Arjun'
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <FormField
                label='Last Name *'
                name='lastName'
                placeholder='Sharma'
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
              <FormField
                label='Email *'
                name='email'
                placeholder='arjun@company.com'
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <FormField
                label='Phone'
                name='phone'
                placeholder='+91 98765 43210'
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <SelectField
                label='Business / Individual'
                name='type'
                value={form.type}
                onChange={handleChange}
                options={["Individual", "Business", "Both"]}
              />
              <SelectField
                label='Service Needed'
                name='service'
                value={form.service}
                onChange={handleChange}
                options={[
                  "ITR-1 Filing",
                  "Tax Optimization",
                  "GST Compliance",
                  "AI Bookkeeping",
                  "CA Advisory",
                  "Financial Insights",
                ]}
              />
            </div>
            <SelectField
              label='Annual Turnover (approx.)'
              name='turnover'
              value={form.turnover}
              onChange={handleChange}
              options={[
                "Below ₹5 Lakhs",
                "₹5L – ₹20 Lakhs",
                "₹20L – ₹1 Crore",
                "Above ₹1 Crore",
                "Salaried Individual",
              ]}
            />
            <button
              type='submit'
              disabled={loading}
              className='btn-glow w-full py-5 mt-2 text-sm tracking-widest uppercase rounded-sm active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2'
            >
              <span className='flex items-center gap-2 font-semibold'>
                {loading ? (
                  <>
                    <svg
                      className='animate-spin w-4 h-4'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='3'
                        strokeDasharray='40'
                        strokeDashoffset='10'
                      />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    Join Waitlist 
                  </>
                )}
              </span>
            </button>
            <p
              className='text-xs text-center mt-1 flex items-center justify-center gap-1'
              style={{ color: "var(--text-muted)" }}
            >
              <Shield size={12} /> Your data is encrypted. No spam. Only value.
            </p>
          </form>
        ) : (
          <div className='py-16 text-center animate-fadeup'>
            <div
              className='w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'
              style={{
                background: "rgba(29,155,240,0.12)",
                border: "1px solid rgba(29,155,240,0.4)",
                boxShadow: "0 0 28px rgba(29,155,240,0.3)",
              }}
            >
              <CheckCircle size={38} style={{ color: "var(--blue-bright)" }} />
            </div>
            <h3
              className='font-serif text-4xl font-semibold mb-3 flex items-center justify-center gap-3'
              style={{ color: "var(--text)" }}
            >
              You're In{" "}
              <Rocket size={32} style={{ color: "var(--blue-bright)" }} />
            </h3>
            <p
              className='text-sm leading-relaxed'
              style={{ color: "var(--text-muted)" }}
            >
              We'll reach out shortly with your onboarding details and early
              access benefits.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function FormField({ label, name, placeholder, value, onChange, error }) {
  const divRef = useRef(null);
  const isUpdating = useRef(false);
  useEffect(() => {
    const el = divRef.current;
    if (!el) return;
    if (document.activeElement !== el) {
      isUpdating.current = true;
      el.textContent = value;
      isUpdating.current = false;
    }
  }, [value]);
  const handleInput = () => {
    if (isUpdating.current) return;
    onChange({ target: { name, value: divRef.current?.textContent || "" } });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        className='text-xs font-semibold tracking-widest uppercase'
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </label>
      <div className='relative'>
        <div
          ref={divRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          className='dark-input px-4 py-3.5 text-sm w-full min-h-[48px] leading-tight'
          style={{
            border: error ? "1.5px solid #ef4444" : "1px solid var(--text-dim)",
            outline: "none",
            cursor: "text",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        />
        {!value && (
          <span
            className='absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-sm select-none'
            style={{ color: "rgba(107,127,168,0.45)" }}
          >
            {placeholder}
          </span>
        )}
      </div>
      {error && (
        <span className='text-xs' style={{ color: "#f87171" }}>
          {error}
        </span>
      )}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const calcPosition = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const spaceBelow = window.innerHeight - rect.bottom;
    const menuH = Math.min(options.length * 44 + 8, 260);
    if (spaceBelow < menuH + 12) {
      setMenuStyle({
        position: "fixed",
        bottom: window.innerHeight - rect.top + 6,
        left: rect.left,
        width: rect.width,
        zIndex: 99999,
      });
    } else {
      setMenuStyle({
        position: "fixed",
        top: rect.bottom + 6,
        left: rect.left,
        width: rect.width,
        zIndex: 99999,
      });
    }
  };
  const handleOpen = () => {
    calcPosition();
    setOpen((o) => !o);
  };
  useEffect(() => {
    const handler = (e) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      )
        setOpen(false);
    };
    const reCalc = () => {
      if (open) calcPosition();
    };
    document.addEventListener("mousedown", handler);
    window.addEventListener("scroll", reCalc, true);
    window.addEventListener("resize", reCalc);
    return () => {
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", reCalc, true);
      window.removeEventListener("resize", reCalc);
    };
  }, [open]);
  const handleSelect = (opt) => {
    onChange({ target: { name, value: opt } });
    setOpen(false);
  };
  const PortalMenu = open ? (
    <div
      ref={menuRef}
      style={{
        ...menuStyle,
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-shine)",
        borderRadius: 8,
        boxShadow:
          "0 12px 40px rgba(7,9,15,0.95),0 0 28px rgba(29,155,240,0.15)",
        overflow: "hidden",
        maxHeight: 260,
        overflowY: "auto",
        paddingBottom: 4,
      }}
    >
      {options.map((opt) => (
        <div
          key={opt}
          onMouseDown={(e) => {
            e.preventDefault();
            handleSelect(opt);
          }}
          style={{
            padding: "11px 16px",
            fontSize: "0.875rem",
            color: value === opt ? "var(--blue-bright)" : "var(--text-muted)",
            background: value === opt ? "rgba(29,155,240,0.12)" : "transparent",
            cursor: "pointer",
            borderBottom: "1px solid rgba(29,155,240,0.06)",
            fontFamily: "'Mulish',sans-serif",
            fontWeight: value === opt ? 600 : 400,
            transition: "all 0.15s ease",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(29,155,240,0.1)";
            e.currentTarget.style.color = "var(--blue-bright)";
            e.currentTarget.style.paddingLeft = "22px";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              value === opt ? "rgba(29,155,240,0.12)" : "transparent";
            e.currentTarget.style.color =
              value === opt ? "var(--blue-bright)" : "var(--text-muted)";
            e.currentTarget.style.paddingLeft = "16px";
          }}
        >
          {value === opt && (
            <span style={{ color: "var(--blue-bright)", fontSize: 12 }}>✓</span>
          )}
          {opt}
        </div>
      ))}
    </div>
  ) : null;
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        className='text-xs font-semibold tracking-widest uppercase'
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </label>
      <div
        ref={triggerRef}
        className={`dropdown-trigger ${open ? "open" : ""} ${!value ? "placeholder" : ""}`}
        onClick={handleOpen}
      >
        <span>{value || "Select…"}</span>
        <ChevronDown
          size={15}
          style={{
            color: "var(--blue-bright)",
            transition: "transform 0.25s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {PortalMenu && createPortal(PortalMenu, document.body)}
    </div>
  );
}

// ════════ TESTIMONIALS
const testimonials = [
  {
    initials: "MS",
    name: "Murugan S",
    role: "Knitwear Manufacturer, Tirupur",
    stars: 5,
    quote:
      "GST used to be a headache every month. Now VarAI handles everything — filings, reconciliation, even reminders. No penalties, no stress.",
  },
  {
    initials: "KR",
    name: "Karthik R",
    role: "Export Unit Owner, Tirupur",
    stars: 5,
    quote:
      "We deal with multiple invoices and exports. Their system automatically organized everything and our CA just verified. Huge time saved.",
  },
  {
    initials: "SM",
    name: "Selvi M",
    role: "Powerloom Operator, Tirupur",
    stars: 5,
    quote:
      "I never understood tax properly before. VarAI explained and filed everything through simple steps. Very helpful for small businesses like ours.",
  },
  {
    initials: "PG",
    name: "Prakash G",
    role: "Cotton Trader, Tirupur",
    stars: 5,
    quote:
      "Earlier we depended fully on manual work. Now with VarAI, data comes directly and returns are filed faster than ever.",
  },
  {
    initials: "AV",
    name: "Arun V",
    role: "Garment Unit Founder, Tirupur",
    stars: 5,
    quote:
      "The AI suggestions actually helped us save more tax legally. Feels like having a smart CA always available.",
  },
];

function Testimonials() {
  const ref = useReveal();
  return (
    <section
      id='testimonials'
      className='py-20 px-6 md:px-16 relative overflow-hidden'
      style={{ background: "var(--bg-card)" }}
    >
      <div
        className='orb'
        style={{
          width: 400,
          height: 400,
          top: "-60px",
          right: "-60px",
          background: "rgba(29,155,240,0.04)",
        }}
      />
      <div ref={ref} className='reveal mb-14 relative z-10'>
        <p
          className='text-xs tracking-widest uppercase mb-4'
          style={{ color: "var(--teal)" }}
        >
          Client Stories
        </p>
        <h2
          className='font-serif text-4xl md:text-5xl font-semibold mb-6'
          style={{ color: "var(--text)", lineHeight: 1.2 }}
        >
          Trusted by <span className='shine-text'>Tirupur's</span>
          <br />
          Textile & Trade Community
        </h2>
        <div className='flex items-center gap-3'>
          <div className='flex -space-x-2'>
            {testimonials.map((t) => (
              <div
                key={t.initials}
                className='w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2'
                style={{
                  background: "rgba(29,155,240,0.2)",
                  borderColor: "var(--bg-card)",
                  color: "var(--blue-bright)",
                }}
              >
                {t.initials}
              </div>
            ))}
          </div>
          <div className='flex gap-0.5'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill='var(--blue)'
                style={{ color: "var(--blue)" }}
              />
            ))}
          </div>
          <span className='text-xs' style={{ color: "var(--text-muted)" }}>
            5 verified reviews · 0 penalties
          </span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 relative z-10'>
        {testimonials.slice(0, 3).map((t) => (
          <TestCard key={t.name} {...t} />
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-3xl md:mx-auto relative z-10'>
        {testimonials.slice(3).map((t) => (
          <TestCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}

function TestCard({ initials, name, role, stars, quote }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className='reveal testi-card card-shine rounded-2xl p-7 relative overflow-hidden'
      style={{ border: "1px solid var(--border)" }}
    >
      <div
        className='absolute top-0 left-0 bottom-0 w-0.5'
        style={{
          background:
            "linear-gradient(180deg,transparent,#1d9bf0,#2dd4bf,transparent)",
          boxShadow:
            "0 0 8px rgba(29,155,240,0.6),0 0 16px rgba(45,212,191,0.3)",
        }}
      />
      <div
        className='absolute bottom-0 left-0 pointer-events-none'
        style={{
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle at 0% 100%,rgba(29,155,240,0.12),transparent 70%)",
        }}
      />
      <div className='flex items-center gap-3 mb-5 relative z-10'>
        <div
          className='testi-avatar w-11 h-11 rounded-full flex items-center justify-center font-serif text-sm font-bold flex-shrink-0 transition-all duration-300'
          style={{
            background: "rgba(29,155,240,0.15)",
            border: "1px solid rgba(29,155,240,0.35)",
            color: "var(--blue-bright)",
            boxShadow: "0 0 12px rgba(29,155,240,0.15)",
          }}
        >
          {initials}
        </div>
        <div>
          <div
            className='text-sm font-semibold'
            style={{ color: "var(--text)" }}
          >
            {name}
          </div>
          <div
            className='text-xs mt-0.5'
            style={{ color: "var(--text-muted)" }}
          >
            {role}
          </div>
        </div>
      </div>
      <div className='flex gap-0.5 mb-4'>
        {[...Array(stars)].map((_, i) => (
          <Star
            key={i}
            size={13}
            fill='var(--blue)'
            style={{ color: "var(--blue)" }}
          />
        ))}
      </div>
      <p
        className='text-sm leading-relaxed relative z-10'
        style={{ color: "var(--text-muted)" }}
      >
        "{quote}"
      </p>
    </div>
  );
}

// ════════ FOOTER
function Footer() {
  return (
    <footer
      className='py-16 px-6 text-center relative overflow-hidden'
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div
        className='orb'
        style={{
          width: 300,
          height: 300,
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(29,155,240,0.04)",
        }}
      />
      <div className='flex items-center justify-center gap-3 mb-2 relative z-10'>
        <VarAILogo size={34} />
        <div
          className='font-serif text-3xl font-semibold'
          style={{ color: "var(--text)", letterSpacing: "0.04em" }}
        >
          Var
          <span className='shine-text' style={{ letterSpacing: "0.04em" }}>
            AI
          </span>
        </div>
      </div>
      <p
        className='text-sm mb-2 relative z-10'
        style={{ color: "var(--text-muted)" }}
      >
        AI-Powered Tax Filing — Built for the Future
      </p>
      <p
        className='text-xs mb-8 relative z-10'
        style={{ color: "var(--text-dim)" }}
      >
        Partnered with ICAI-registered Chartered Accountants
      </p>
      <div className='flex flex-wrap justify-center gap-6 mb-10 relative z-10'>
        {[
          ["Services", "#services"],
          ["How It Works", "#howitworks"],
          ["FAQ", "#faq"],
          ["Waitlist", "#waitlist"],
          ["Contact", "mailto:hello@varai.in"],
        ].map(([l, h]) => (
          <a
            key={l}
            href={h}
            className='footer-link text-xs tracking-widest uppercase'
            style={{ color: "var(--text-dim)" }}
          >
            {l}
          </a>
        ))}
      </div>
      <hr
        className='mb-8 relative z-10'
        style={{ borderColor: "var(--border)" }}
      />
      <p className='text-xs relative z-10' style={{ color: "var(--text-dim)" }}>
        © 2026 VarAI. All rights reserved.
      </p>
    </footer>
  );
}

// ════════ BACK TO TOP
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-top ${show ? "" : "gone"}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}

// ════════ APP ROOT
export default function CALandingPage() {
  return (
    <>
      <FontLoader />
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Vision />
      <FAQ />
      <Waitlist />
      <Testimonials />
      <Footer />
      <BackToTop />
    </>
  );
}
