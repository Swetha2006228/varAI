import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  BarChart2,
  FileText,
  TrendingUp,
  BookOpen,
  Zap,
  Lock,
  Smartphone,
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
} from "lucide-react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Mulish:wght@300;400;500;600&family=Barlow+Condensed:wght@600;700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Mulish', sans-serif; overflow-x: hidden; background: #07090f; }
    .font-serif { font-family: 'Libre Baskerville', serif !important; }
    .font-num   { font-family: 'Barlow Condensed', sans-serif !important; letter-spacing: 0.02em; }
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
    @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
    @keyframes nodepulse { 0%,100%{opacity:0.4;r:4} 50%{opacity:1;r:6} }
    @keyframes dash { to{stroke-dashoffset:-20} }

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

    /* ── FIX: H1 spacing so letters never touch ── */
    h1.hero-title {
      line-height: 1.32 !important;
      letter-spacing: -0.01em;
      word-spacing: 0.05em;
    }
    h1.hero-title br { display:block; content:""; margin-bottom: 0.1em; }

    /* ── Testimonials heading spacing fix ── */
    h2.testi-h2 { line-height: 1.3 !important; letter-spacing: -0.01em; }

    .hover-card { transition:transform 0.3s ease,box-shadow 0.3s ease,border-color 0.3s ease; cursor:default; }
    .hover-card:hover { transform:translateY(-6px) scale(1.01); box-shadow:0 16px 48px rgba(29,155,240,0.2),0 0 28px rgba(29,155,240,0.1); border-color:rgba(29,155,240,0.55) !important; }
    .hero-card { transition:transform 0.35s ease,box-shadow 0.35s ease,border-color 0.35s ease; }
    .hero-card:hover { transform:translateY(-8px) scale(1.03) !important; box-shadow:0 24px 56px rgba(29,155,240,0.28),0 0 36px rgba(29,155,240,0.15) !important; border-color:rgba(29,155,240,0.65) !important; }
    .hero-card-teal:hover { box-shadow:0 20px 48px rgba(45,212,191,0.22),0 0 28px rgba(45,212,191,0.14) !important; border-color:rgba(45,212,191,0.6) !important; }
    .faq-item { transition:border-color 0.25s ease,box-shadow 0.25s ease,transform 0.25s ease; }
    .faq-item:hover { border-color:rgba(29,155,240,0.4) !important; box-shadow:0 4px 20px rgba(29,155,240,0.08); transform:translateX(4px); }
    .test-card { transition:transform 0.3s ease,box-shadow 0.3s ease,border-color 0.3s ease; box-shadow:0 0 0 1px rgba(29,155,240,0.3), 0 0 12px rgba(29,155,240,0.12); border-color:rgba(29,155,240,0.3) !important; }
    .test-card:hover { transform:translateY(-6px); box-shadow:0 0 0 1px rgba(29,155,240,0.6), 0 0 22px rgba(29,155,240,0.28), 0 16px 40px rgba(29,155,240,0.12); border-color:rgba(29,155,240,0.6) !important; }
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
    .btn-glow:hover { box-shadow:0 0 14px rgba(29,155,240,0.35),0 0 28px rgba(45,212,191,0.12); transform:translateY(-2px); }
    .btn-glow > * { position:relative; z-index:1; }
    .btn-outline-glow { background:transparent; border:1px solid var(--border); color:var(--text); transition:all 0.3s ease; cursor:pointer; }
    .btn-outline-glow:hover { border-color:var(--blue); color:var(--blue-bright); box-shadow:0 0 20px var(--blue-glow),inset 0 0 20px rgba(29,155,240,0.04); }
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
    .back-top { position:fixed; bottom:28px; right:28px; z-index:99; width:46px; height:46px; border-radius:50%; background:linear-gradient(135deg,#1d9bf0,#2dd4bf); color:#07090f; display:flex; align-items:center; justify-content:center; cursor:pointer; border:none; box-shadow:0 0 18px rgba(29,155,240,0.5); transition:opacity 0.3s,transform 0.3s,box-shadow 0.2s; }
    .back-top.gone { opacity:0; transform:translateY(16px); pointer-events:none; }
    .back-top:hover { box-shadow:0 0 32px rgba(29,155,240,0.8),0 0 60px rgba(45,212,191,0.3); transform:translateY(-2px); }
    .orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(90px); }
    .grid-bg { background-image:linear-gradient(rgba(29,155,240,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(29,155,240,0.03) 1px,transparent 1px); background-size:48px 48px; }
    .dropdown-trigger { display:flex; align-items:center; justify-content:space-between; padding:14px 16px; cursor:pointer; background:var(--bg-elevated); border:1px solid var(--text-dim); border-radius:6px; color:var(--text); transition:all 0.25s ease; font-family:'Mulish',sans-serif; font-size:0.875rem; }
    .dropdown-trigger:hover,.dropdown-trigger.open { border-color:var(--blue); box-shadow:0 0 0 3px rgba(29,155,240,0.15),0 0 14px rgba(29,155,240,0.08); }
    .dropdown-trigger.placeholder { color:rgba(107,127,168,0.45); }

    /* ── VISION BENTO CARDS ── */
    .vcard {
      position:relative; overflow:hidden;
      background:var(--bg-card);
      transition:transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }
    .vcard::before {
      content:''; position:absolute; top:0; left:-80%; width:60%; height:100%;
      background:linear-gradient(90deg,transparent,rgba(29,155,240,0.06),transparent);
      transition:left 0.7s ease; pointer-events:none;
    }
    .vcard:hover { transform:translateY(-5px); box-shadow:0 18px 48px rgba(29,155,240,0.18); }
    .vcard:hover::before { left:130%; }
    .vcard:hover .vcard-icon { transform:scale(1.12); }
    .vcard-icon { transition:transform 0.3s ease; }

    /* scanline animation for card 01 */
    .scanline-bar {
      position:absolute; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent,rgba(29,155,240,0.5),transparent);
      animation:scanline 3s linear infinite;
    }
    /* animated dashes for SVG lines */
    .anim-dash { animation:dash 1.5s linear infinite; }

    /* waveform bars */
    @keyframes waveBar { 0%,100%{transform:scaleY(0.3)} 50%{transform:scaleY(1)} }
    .wbar { transform-origin:bottom; border-radius:3px 3px 0 0; }
    .wbar:nth-child(1){animation:waveBar 1.1s ease-in-out 0.0s infinite}
    .wbar:nth-child(2){animation:waveBar 1.1s ease-in-out 0.1s infinite}
    .wbar:nth-child(3){animation:waveBar 1.1s ease-in-out 0.2s infinite}
    .wbar:nth-child(4){animation:waveBar 1.1s ease-in-out 0.15s infinite}
    .wbar:nth-child(5){animation:waveBar 1.1s ease-in-out 0.05s infinite}
    .wbar:nth-child(6){animation:waveBar 1.1s ease-in-out 0.25s infinite}
    .wbar:nth-child(7){animation:waveBar 1.1s ease-in-out 0.18s infinite}
    .wbar:nth-child(8){animation:waveBar 1.1s ease-in-out 0.08s infinite}
    .wbar:nth-child(9){animation:waveBar 1.1s ease-in-out 0.22s infinite}
    .wbar:nth-child(10){animation:waveBar 1.1s ease-in-out 0.12s infinite}
    .wbar:nth-child(11){animation:waveBar 1.1s ease-in-out 0.03s infinite}
    .wbar:nth-child(12){animation:waveBar 1.1s ease-in-out 0.17s infinite}
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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    ["Services", "#services"],
    ["How It Works", "#howitworks"],
    ["Why VarAI", "#whyus"],
    ["FAQ", "#faq"],
    ["Testimonials", "#testimonials"],
  ];
  const close = () => setMenuOpen(false);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-16 py-4 transition-all duration-300 ${scrolled ? "nav-scrolled" : "nav-default"}`}
      >
        <a
          href='#'
          className='flex items-center gap-2.5 z-50 relative'
          style={{ textDecoration: "none" }}
        >
          {/* VarAI Logo Mark — stylised V with circuit/AI nodes */}
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <linearGradient
                id='logoGrad'
                x1='0'
                y1='0'
                x2='32'
                y2='32'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0%' stopColor='#1d9bf0' />
                <stop offset='100%' stopColor='#2dd4bf' />
              </linearGradient>
              <filter id='logoGlow'>
                <feGaussianBlur stdDeviation='1.5' result='blur' />
                <feMerge>
                  <feMergeNode in='blur' />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>
            </defs>
            {/* Outer rounded square bg */}
            <rect
              width='32'
              height='32'
              rx='8'
              fill='url(#logoGrad)'
              opacity='0.12'
            />
            <rect
              width='32'
              height='32'
              rx='8'
              fill='none'
              stroke='url(#logoGrad)'
              strokeWidth='1'
              opacity='0.5'
            />
            {/* V shape */}
            <path
              d='M8 9 L16 23 L24 9'
              stroke='url(#logoGrad)'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
              filter='url(#logoGlow)'
            />
            {/* Top-left node dot */}
            <circle cx='8' cy='9' r='2' fill='#1d9bf0' />
            {/* Top-right node dot */}
            <circle cx='24' cy='9' r='2' fill='#2dd4bf' />
            {/* Bottom apex dot — glowing */}
            <circle cx='16' cy='23' r='2.5' fill='#38bdf8' />
            <circle cx='16' cy='23' r='4.5' fill='#38bdf8' opacity='0.18' />
            {/* Tiny horizontal line across mid — circuit detail */}
            <line
              x1='11'
              y1='16.5'
              x2='21'
              y2='16.5'
              stroke='url(#logoGrad)'
              strokeWidth='1'
              strokeDasharray='2 2'
              opacity='0.5'
            />
          </svg>
          <span
            className='font-serif text-xl md:text-2xl font-semibold tracking-wide'
            style={{ color: "var(--text)" }}
          >
            Var<span className='shine-text'>AI</span>
          </span>
        </a>
        <ul className='hidden md:flex items-center gap-8'>
          {links.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className='text-xs font-semibold tracking-widest uppercase transition-all'
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--blue-bright)";
                  e.target.style.textShadow = "0 0 12px rgba(29,155,240,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "var(--text-muted)";
                  e.target.style.textShadow = "none";
                }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href='#waitlist'
              className='btn-glow text-xs tracking-widest uppercase px-6 py-2.5 rounded-sm inline-block'
            >
              <span>Join Waitlist →</span>
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
        <a href='#' onClick={close} className='flex items-center gap-3 mb-4'>
          <svg
            width='36'
            height='36'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <linearGradient
                id='logoGradM'
                x1='0'
                y1='0'
                x2='32'
                y2='32'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0%' stopColor='#1d9bf0' />
                <stop offset='100%' stopColor='#2dd4bf' />
              </linearGradient>
            </defs>
            <rect
              width='32'
              height='32'
              rx='8'
              fill='url(#logoGradM)'
              opacity='0.12'
            />
            <rect
              width='32'
              height='32'
              rx='8'
              fill='none'
              stroke='url(#logoGradM)'
              strokeWidth='1'
              opacity='0.5'
            />
            <path
              d='M8 9 L16 23 L24 9'
              stroke='url(#logoGradM)'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
            />
            <circle cx='8' cy='9' r='2' fill='#1d9bf0' />
            <circle cx='24' cy='9' r='2' fill='#2dd4bf' />
            <circle cx='16' cy='23' r='2.5' fill='#38bdf8' />
            <circle cx='16' cy='23' r='4.5' fill='#38bdf8' opacity='0.18' />
            <line
              x1='11'
              y1='16.5'
              x2='21'
              y2='16.5'
              stroke='url(#logoGradM)'
              strokeWidth='1'
              strokeDasharray='2 2'
              opacity='0.5'
            />
          </svg>
          <span
            className='font-serif text-2xl font-semibold'
            style={{ color: "var(--text)" }}
          >
            Var<span className='shine-text'>AI</span>
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
          <span>Join Waitlist →</span>
        </a>
      </div>
    </>
  );
}

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
        {/* ── FIXED H1: added hero-title class, adjusted lineHeight & spacing ── */}
        <h1
          className='hero-title font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6'
          style={{
            color: "var(--text)",
            lineHeight: 1.32,
            letterSpacing: "-0.01em",
            wordSpacing: "0.04em",
          }}
        >
          Your Taxes. Done <span className='shine-text'>Smarter</span> —<br />
          With AI + Real CAs
        </h1>
        <p
          className='text-base leading-relaxed max-w-md mb-10'
          style={{ color: "var(--text-muted)" }}
        >
          From ITR-1 to GST filings — VarAI combines intelligent agents,
          automation, and certified Chartered Accountants to maximize your
          returns with zero stress.
        </p>
        <div className='flex flex-wrap gap-4'>
          <a
            href='#waitlist'
            className='btn-glow inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase rounded-sm active:scale-95'
          >
            <span className='flex items-center gap-2 font-semibold'>
              Get Started <ArrowRight size={15} />
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
      <div className='hidden md:flex items-center justify-center px-8 py-20 animate-fadeup-d2 relative z-10'>
        <div className='relative w-96 h-[460px]'>
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
              className='mt-3 text-xs text-center'
              style={{ color: "var(--teal)" }}
            >
              ⚡ AI Suggestion Engine Active
            </div>
          </div>
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
              <div style={{ color: "var(--teal)" }}>✔ GSTR-1 Filed</div>
              <div style={{ color: "var(--teal)" }}>✔ GSTR-3B Filed</div>
              <div style={{ color: "var(--teal)" }}>✔ Reconciliation Done</div>
              <div style={{ color: "#4ade80" }}>✔ 0 Penalties</div>
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

const serviceGroups = {
  Individual: [
    {
      num: "01",
      Icon: BarChart2,
      name: "ITR-1 Filing (AI Assisted)",
      desc: "Automated tax filing with AI agents extracting and optimizing deductions.",
    },
    {
      num: "02",
      Icon: Brain,
      name: "Tax Optimization Engine",
      desc: "Multi-agent system that asks smart questions, analyzes income, and maximizes returns legally.",
    },
    {
      num: "03",
      Icon: TrendingUp,
      name: "Financial Insights",
      desc: "Understand your tax behavior, savings opportunities, and future planning.",
    },
  ],
  Business: [
    {
      num: "04",
      Icon: FileText,
      name: "GST Compliance (Automated)",
      desc: "End-to-end GST filing with auto data pull and reconciliation.",
    },
    {
      num: "05",
      Icon: BookOpen,
      name: "AI Bookkeeping & Reports",
      desc: "Auto-generated P&L, balance sheets, and MIS reports.",
    },
    {
      num: "06",
      Icon: UserCheck,
      name: "CA Advisory Layer",
      desc: "Every filing reviewed by certified Chartered Accountants for accuracy.",
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
        className='w-12 h-12 rounded-xl flex items-center justify-center mb-4'
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
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
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
      className='reveal step-card card-shine rounded-xl p-6 text-center'
      style={{
        border: "1px solid var(--border)",
        transitionDelay: `${delay}ms`,
      }}
    >
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
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
          }}
        >
          Not Just Filing —<br />
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

// ════════ VISION — Redesigned Bento Grid ════════
function Vision() {
  const ref = useReveal();
  return (
    <section
      className='py-24 px-6 md:px-16 relative overflow-hidden grid-bg'
      style={{ background: "var(--bg)" }}
    >
      <div
        className='orb'
        style={{
          width: 500,
          height: 500,
          top: "-100px",
          right: "-100px",
          background: "rgba(29,155,240,0.05)",
        }}
      />
      <div
        className='orb'
        style={{
          width: 300,
          height: 300,
          bottom: "-60px",
          left: "-60px",
          background: "rgba(45,212,191,0.04)",
        }}
      />

      <div ref={ref} className='reveal max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-14'>
          <p
            className='text-xs tracking-widest uppercase mb-3'
            style={{ color: "var(--blue-bright)" }}
          >
            Product Vision
          </p>
          <h2
            className='font-serif text-4xl md:text-5xl font-semibold'
            style={{ color: "var(--text)", lineHeight: 1.2 }}
          >
            What We're <span className='shine-text'>Building</span>
          </h2>
        </div>

        {/* ══ ROW 1: equal 1fr 1fr columns ══ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            marginBottom: 14,
          }}
        >
          {/* Card 01 — Agentic AI — icon on top, content below */}
          <div
            className='vcard rounded-2xl'
            style={{
              border: "1px solid rgba(29,155,240,0.28)",
              padding: "36px 32px",
              minHeight: 200,
            }}
          >
            <div className='scanline-bar' style={{ top: 0 }} />
            <div
              className='vcard-icon'
              style={{
                width: 56,
                height: 56,
                flexShrink: 0,
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(29,155,240,0.13)",
                border: "1px solid rgba(29,155,240,0.3)",
                marginBottom: 18,
              }}
            >
              <Brain size={24} style={{ color: "var(--blue-bright)" }} />
            </div>
            <div
              className='font-num text-xs font-bold shine-text'
              style={{ marginBottom: 8 }}
            >
              01
            </div>
            <div
              className='font-serif text-xl font-semibold'
              style={{
                color: "var(--text)",
                marginBottom: 10,
                lineHeight: 1.25,
              }}
            >
              Agentic AI Architecture
            </div>
            <div
              className='text-sm leading-relaxed'
              style={{
                color: "var(--text-muted)",
                maxWidth: 420,
                marginBottom: 20,
              }}
            >
              Multi-agent AI system inspired by modern autonomous architectures
              — planning, reasoning, and acting like a real CA firm.
            </div>
            {/* tag row */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Planning", "Reasoning", "Multi-Agent", "Autonomous"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      padding: "3px 10px",
                      borderRadius: 99,
                      fontSize: 10,
                      fontFamily: "Barlow Condensed",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      background: "rgba(29,155,240,0.1)",
                      border: "1px solid rgba(29,155,240,0.22)",
                      color: "var(--blue-bright)",
                    }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Card 02 — Voice Tax — with animated waveform */}
          <div
            className='vcard rounded-2xl'
            style={{
              border: "1px solid rgba(45,212,191,0.28)",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                className='vcard-icon'
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(45,212,191,0.13)",
                  border: "1px solid rgba(45,212,191,0.3)",
                  marginBottom: 14,
                }}
              >
                <Mic size={22} style={{ color: "var(--teal)" }} />
              </div>
              <div
                className='font-num text-xs font-bold'
                style={{ color: "var(--teal)", marginBottom: 6 }}
              >
                02
              </div>
              <div
                className='font-serif text-lg font-semibold'
                style={{
                  color: "var(--text)",
                  marginBottom: 6,
                  lineHeight: 1.25,
                }}
              >
                Voice Tax Assistant
              </div>
              <div
                className='text-sm leading-relaxed'
                style={{ color: "var(--text-muted)" }}
              >
                File taxes just by speaking — no forms, no friction.
              </div>
            </div>
            {/* animated waveform */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 3,
                height: 36,
                marginTop: 20,
                paddingBottom: 4,
              }}
            >
              {[14, 22, 30, 18, 26, 20, 34, 16, 28, 12, 30, 20].map((h, i) => (
                <div
                  key={i}
                  className='wbar'
                  style={{
                    flex: 1,
                    height: h,
                    background: `linear-gradient(180deg,var(--teal),rgba(45,212,191,0.25))`,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                fontSize: 9,
                fontFamily: "Mulish",
                color: "var(--teal)",
                opacity: 0.6,
                marginTop: 6,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Live voice processing
            </div>
          </div>
        </div>

        {/* ══ ROW 2: 3 equal cards ══ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 14,
            marginBottom: 14,
          }}
        >
          {/* Card 03 — Auto Bank Sync */}
          <div
            className='vcard rounded-2xl'
            style={{
              border: "1px solid rgba(29,155,240,0.22)",
              padding: "28px 24px",
            }}
          >
            <div
              className='vcard-icon'
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(29,155,240,0.1)",
                border: "1px solid rgba(29,155,240,0.25)",
                marginBottom: 14,
              }}
            >
              <Link2 size={20} style={{ color: "var(--blue-bright)" }} />
            </div>
            <div
              className='font-num text-xs font-bold shine-text'
              style={{ marginBottom: 5 }}
            >
              03
            </div>
            <div
              className='font-semibold'
              style={{
                color: "var(--text)",
                fontSize: "0.95rem",
                marginBottom: 6,
                lineHeight: 1.3,
              }}
            >
              Auto Bank Sync
            </div>
            <div
              className='text-xs leading-relaxed'
              style={{ color: "var(--text-muted)", marginBottom: 16 }}
            >
              Bank & govt data fetched automatically — zero manual entry.
            </div>
            {/* bank tags */}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {["SBI", "HDFC", "ICICI", "Axis", "Kotak"].map((b) => (
                <div
                  key={b}
                  style={{
                    padding: "3px 8px",
                    borderRadius: 99,
                    background: "rgba(29,155,240,0.08)",
                    border: "1px solid rgba(29,155,240,0.18)",
                    fontSize: 9,
                    color: "var(--blue-bright)",
                    fontFamily: "Barlow Condensed",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Card 04 — Real-Time Optimization */}
          <div
            className='vcard rounded-2xl'
            style={{
              border: "1px solid rgba(45,212,191,0.22)",
              padding: "28px 24px",
            }}
          >
            <div
              className='vcard-icon'
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(45,212,191,0.1)",
                border: "1px solid rgba(45,212,191,0.25)",
                marginBottom: 14,
              }}
            >
              <BarChart2 size={20} style={{ color: "var(--teal)" }} />
            </div>
            <div
              className='font-num text-xs font-bold'
              style={{ color: "var(--teal)", marginBottom: 5 }}
            >
              04
            </div>
            <div
              className='font-semibold'
              style={{
                color: "var(--text)",
                fontSize: "0.95rem",
                marginBottom: 6,
                lineHeight: 1.3,
              }}
            >
              Real-Time Optimization
            </div>
            <div
              className='text-xs leading-relaxed'
              style={{ color: "var(--text-muted)", marginBottom: 16 }}
            >
              Live tax-saving engine running 24/7 — finds deductions as you go.
            </div>
            {/* mini rising bar chart */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 4,
                height: 26,
              }}
            >
              {[40, 55, 45, 72, 60, 88, 70, 100].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: "3px 3px 0 0",
                    background: `linear-gradient(180deg,var(--teal),rgba(45,212,191,0.2))`,
                    opacity: 0.7 + i * 0.04,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Card 05 — WhatsApp Native */}
          <div
            className='vcard rounded-2xl'
            style={{
              border: "1px solid rgba(29,155,240,0.22)",
              padding: "28px 24px",
            }}
          >
            <div
              className='vcard-icon'
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(29,155,240,0.1)",
                border: "1px solid rgba(29,155,240,0.25)",
                marginBottom: 14,
              }}
            >
              <Smartphone size={20} style={{ color: "var(--blue-bright)" }} />
            </div>
            <div
              className='font-num text-xs font-bold shine-text'
              style={{ marginBottom: 5 }}
            >
              05
            </div>
            <div
              className='font-semibold'
              style={{
                color: "var(--text)",
                fontSize: "0.95rem",
                marginBottom: 6,
                lineHeight: 1.3,
              }}
            >
              WhatsApp Native
            </div>
            <div
              className='text-xs leading-relaxed'
              style={{ color: "var(--text-muted)", marginBottom: 16 }}
            >
              Full tax experience on chat — upload, ask, track, done.
            </div>
            {/* chat bubbles */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div
                style={{
                  alignSelf: "flex-end",
                  background: "rgba(29,155,240,0.18)",
                  border: "1px solid rgba(29,155,240,0.25)",
                  borderRadius: "10px 10px 2px 10px",
                  padding: "4px 10px",
                  fontSize: 9,
                  color: "var(--blue-bright)",
                  fontFamily: "Mulish",
                }}
              >
                Upload Form 16 📎
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "rgba(45,212,191,0.1)",
                  border: "1px solid rgba(45,212,191,0.2)",
                  borderRadius: "10px 10px 10px 2px",
                  padding: "4px 10px",
                  fontSize: 9,
                  color: "var(--teal)",
                  fontFamily: "Mulish",
                }}
              >
                ✔ ITR filed! Refund: ₹18,400
              </div>
            </div>
          </div>
        </div>

        {/* ══ GOAL BANNER ══ */}
        <div
          style={{
            position: "relative",
            padding: "28px 32px",
            borderRadius: 20,
            overflow: "hidden",
            background: "rgba(29,155,240,0.05)",
            border: "1px solid rgba(29,155,240,0.22)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg,rgba(29,155,240,0.07) 0%,transparent 50%,rgba(45,212,191,0.05) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <p
                className='text-xs tracking-widest uppercase'
                style={{ color: "var(--teal)", marginBottom: 6 }}
              >
                🎯 Our Goal
              </p>
              <p
                className='font-serif text-xl font-semibold'
                style={{ color: "var(--text)", lineHeight: 1.3 }}
              >
                Fully automated tax filing with{" "}
                <span className='shine-text'>CA verification in the loop</span>
              </p>
            </div>
            <a
              href='#waitlist'
              className='btn-glow flex-shrink-0 px-7 py-3 text-sm font-semibold tracking-widest uppercase rounded-sm inline-block'
            >
              <span>Be Part of It →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
                  className='px-6 pb-5 text-sm leading-relaxed'
                  style={{ color: "var(--text-muted)", paddingTop: 12 }}
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
          className='font-serif text-4xl md:text-5xl font-semibold mb-5'
          style={{
            color: "var(--text)",
            lineHeight: 1.38,
            letterSpacing: "-0.01em",
          }}
        >
          Join VarAI &amp; Unlock
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
                className='text-xs px-2 py-0.5 rounded-full font-semibold'
                style={{
                  background: "rgba(45,212,191,0.12)",
                  color: "var(--teal)",
                  border: "1px solid rgba(45,212,191,0.3)",
                }}
              >
                ⚡ Filling Fast
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
                    Join Waitlist <ArrowRight size={15} />
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
              className='font-serif text-4xl font-semibold mb-3'
              style={{ color: "var(--text)" }}
            >
              You're In 🚀
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
      className='py-20 px-6 md:px-16 relative'
      style={{ background: "var(--bg-card)" }}
    >
      <div ref={ref} className='reveal mb-14'>
        <p
          className='text-xs tracking-widest uppercase mb-3'
          style={{ color: "var(--teal)" }}
        >
          Client Stories
        </p>
        {/* ── FIXED: testi-h2 class ensures proper line height and no letter collision ── */}
        <h2
          className='testi-h2 font-serif text-4xl md:text-5xl font-semibold'
          style={{ color: "var(--text)" }}
        >
          Trusted by <span className='shine-text'>Tirupur's</span> Textile &amp;
          <br />
          Trade Community
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {testimonials.slice(0, 3).map((t) => (
          <TestCard key={t.name} {...t} />
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:w-2/3 mx-auto'>
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
      className='reveal test-card card-shine p-8 rounded-2xl'
      style={{ border: "1px solid var(--border)" }}
    >
      {/* Author on top */}
      <div className='flex items-center gap-4 mb-5'>
        <div
          className='w-11 h-11 rounded-full flex items-center justify-center font-serif text-sm font-semibold flex-shrink-0'
          style={{
            background: "rgba(29,155,240,0.15)",
            border: "1px solid rgba(29,155,240,0.3)",
            color: "var(--blue-bright)",
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
      {/* Stars */}
      <div className='flex gap-1 mb-4'>
        {[...Array(stars)].map((_, i) => (
          <Star
            key={i}
            size={13}
            fill='var(--blue)'
            style={{ color: "var(--blue)" }}
          />
        ))}
      </div>
      {/* Quote */}
      <p
        className='text-sm leading-relaxed'
        style={{ color: "var(--text-muted)" }}
      >
        "{quote}"
      </p>
    </div>
  );
}

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
      <div className='flex items-center justify-center gap-2.5 mb-2 relative z-10'>
        <svg
          width='28'
          height='28'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='logoGradF'
              x1='0'
              y1='0'
              x2='32'
              y2='32'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0%' stopColor='#1d9bf0' />
              <stop offset='100%' stopColor='#2dd4bf' />
            </linearGradient>
          </defs>
          <rect
            width='32'
            height='32'
            rx='8'
            fill='url(#logoGradF)'
            opacity='0.12'
          />
          <rect
            width='32'
            height='32'
            rx='8'
            fill='none'
            stroke='url(#logoGradF)'
            strokeWidth='1'
            opacity='0.5'
          />
          <path
            d='M8 9 L16 23 L24 9'
            stroke='url(#logoGradF)'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='none'
          />
          <circle cx='8' cy='9' r='2' fill='#1d9bf0' />
          <circle cx='24' cy='9' r='2' fill='#2dd4bf' />
          <circle cx='16' cy='23' r='2.5' fill='#38bdf8' />
          <circle cx='16' cy='23' r='4.5' fill='#38bdf8' opacity='0.18' />
          <line
            x1='11'
            y1='16.5'
            x2='21'
            y2='16.5'
            stroke='url(#logoGradF)'
            strokeWidth='1'
            strokeDasharray='2 2'
            opacity='0.5'
          />
        </svg>
        <div
          className='font-serif text-3xl font-semibold'
          style={{ color: "var(--text)" }}
        >
          Var<span className='shine-text'>AI</span>
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
