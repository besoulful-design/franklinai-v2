import { useState, useEffect } from 'react';
import './styles/global.css';

function KiteLogo({ size = 48, className = '' }) {
  const vbX = 62, vbY = 10, vbW = 101, vbH = 240;
  const width  = size * (vbW / vbH);
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="FranklinAI kite and key logo mark"
      role="img"
    >
      <polygon points="110,20 148,88 110,88" fill="#1e3a5f"/>
      <polygon points="110,88 148,88 110,120" fill="#0f2340"/>
      <polygon points="72,88 110,88 110,20"  fill="#0f2340"/>
      <polygon points="72,88 110,120 110,88" fill="#1e3a5f"/>
      <polygon points="110,20 148,88 110,120 72,88" fill="none" stroke="#60a5fa" strokeWidth="4"/>
      <line x1="72"  y1="88" x2="148" y2="88"  stroke="#60a5fa" strokeWidth="2.5"/>
      <line x1="110" y1="20" x2="110" y2="120" stroke="#60a5fa" strokeWidth="2.5"/>
      <line x1="110" y1="120" x2="110" y2="148" stroke="#60a5fa" strokeWidth="2"/>
      <polygon points="114,148 106,161 111,161 103,173 118,160 113,160 118,148" fill="#fbbf24"/>
      <polygon points="113,151 107,161 111,161 105,171 116,160 112,160 116,151" fill="white" opacity="0.6"/>
      <line x1="110" y1="173" x2="110" y2="190" stroke="#60a5fa" strokeWidth="2"/>
      <circle cx="110" cy="203" r="13" fill="none" stroke="#60a5fa" strokeWidth="3.5"/>
      <circle cx="110" cy="203" r="5"  fill="#60a5fa"/>
      <rect x="122" y="199.5" width="32" height="7" rx="3.5" fill="#60a5fa"/>
      <rect x="140" y="206.5" width="5" height="9" rx="2" fill="#60a5fa"/>
      <rect x="148" y="206.5" width="5" height="6" rx="2" fill="#60a5fa"/>
      <line x1="110" y1="216" x2="110" y2="242" stroke="#60a5fa" strokeWidth="2" opacity="0.3"/>
    </svg>
  );
}

function EmailOption({ style }) {
  return (
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#8892a4', marginTop: '18px', ...style }}>
      Not ready to schedule?<br />
      <a href="mailto:david@franklinaisolutions.com" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '600' }}>
        Email me directly.
      </a>
    </p>
  );
}

function Nav() {
  return (
    <nav className="site-nav" style={{ padding: '10px 24px' }}>
      <div className="site-nav__inner">
        <a href="/" className="site-nav__brand" style={{ gap: '4px', marginLeft: '18px' }}>
          <KiteLogo size={190} className="site-nav__logo" />
          <div className="site-nav__wordmark" style={{ marginTop: '-24px' }}>
            <span className="site-nav__name" style={{ fontSize: 'clamp(42px, 4.6vw, 60px)' }}>
              Franklin<span className="site-nav__ai">AI</span>
            </span>
            <span className="site-nav__city" style={{ fontSize: 'clamp(18px, 3vw, 22px)', color: '#8899b0' }}>Philadelphia</span>
          </div>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div className="site-card">
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5.4vw, 54px)', fontWeight: '700', letterSpacing: '0.04em', color: '#60a5fa', marginBottom: '14px', lineHeight: '1.3' }}>
            Custom<br />Apps &amp; Tools
          </p>
          <h1 className="hero__headline" style={{ color: '#ffffff', fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: '10px' }}>
            Built for<br />Your Business.
          </h1>
          <p className="card-text" style={{ marginBottom: 'clamp(4px, 1vw, 8px)', marginTop: '0' }}>
            No templates. Built from scratch for how you work.
          </p>
          <a href="https://cal.com/david-peterson-40s7lw/free-discovery-call" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Book a free discovery call.
          </a>
          <EmailOption />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      text: 'A free call to understand how your business runs, what\'s slowing you down, and what a custom tool could solve. No pitch decks, just a real conversation.'
    },
    {
      number: '02',
      title: 'Build',
      text: 'You get a purpose-built web app designed around how your team actually operates. User logins, admin tools, messaging, alerts, whatever the job needs.'
    },
    {
      number: '03',
      title: 'Grow',
      text: 'After launch, we handle hosting and maintenance. As your business evolves, new features get scoped and built. One at a time, on your terms.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="site-card">
          <h2 className="card-heading" style={{ fontSize: 'clamp(35px, 4.375vw, 50px)' }}>How It Works</h2>
          <div className="step-stack" style={{ marginTop: '-10px' }}>
            {steps.map(step => (
              <div key={step.number} className="step-item">
                <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                  <h3 className="step-item__title" style={{ fontSize: '27.7px', textAlign: 'center' }}>{step.title}</h3>
                </div>
                <p className="step-item__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyModal({ onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const features = [
    'User login and role-based access',
    'Daily journaling and symptom tracking',
    'Progress logs with visual history',
    'In-app messaging between patient and clinician',
    'Admin portal with smart alerts',
    'Automated email notifications'
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &#x2715;
        </button>
        <span className="card-label" style={{ fontSize: '1.375em', textTransform: 'none', fontFamily: "'Playfair Display', serif", fontWeight: '400', letterSpacing: '0.05em', color: '#8899b0' }}>Case Study</span>
        <h2 className="modal__title">McKenzie Arm Care</h2>
        <p className="modal__text">
          A custom patient-care web app built for a clinician who needed more
          than a spreadsheet and less than an enterprise system. Patients log in,
          journal their progress, track symptoms, and message their clinician directly.
          The clinician gets a portal with real-time visibility into every
          patient's journey, plus smart alerts when something needs attention.
        </p>
        <ul className="modal__features">
          {features.map((f, i) => (
            <li key={i} className="modal__feature">{f}</li>
          ))}
        </ul>
        <p className="modal__stack">
          Built with React, Supabase, and deployed on Netlify.
        </p>
      </div>
    </div>
  );
}

function CaseStudy() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <div className="site-card">
          <h2 className="card-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: '2px' }}>Real Work</h2>
          <span className="card-label" style={{ fontSize: '1.375em', textTransform: 'none', fontFamily: "'Playfair Display', serif", fontWeight: '400', letterSpacing: '0.05em', color: '#8899b0' }}>Case Study</span>
          <h3 className="card-title">McKenzie Arm Care</h3>
          <p className="card-text">
            A custom patient-care portal for a clinician who needed more than a
            spreadsheet. Patient journaling, symptom tracking, in-app messaging,
            and smart admin alerts.
          </p>
          <button className="btn btn--ghost" onClick={() => setOpen(true)} style={{ marginTop: '16px' }}>
            Read the full case study.
          </button>
        </div>
      </div>
      {open && <CaseStudyModal onClose={() => setOpen(false)} />}
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      title: 'The Build',
      price: 'From $8,000',
      text: 'One flat project fee, set up front. No hourly meter, no surprises.'
    },
    {
      title: 'Monthly Care',
      price: 'From $149 / month',
      text: 'Optional. Covers hosting, maintenance, and updates.'
    },
    {
      title: 'As You Grow',
      price: 'Quoted per feature',
      text: 'New features scoped and built one at a time, on your terms.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="site-card">
          <h2 className="card-heading" style={{ fontSize: 'clamp(40.25px, 5.03vw, 57.5px)' }}>Pricing</h2>
          <div className="step-stack" style={{ marginTop: '-10px' }}>
            {tiers.map(tier => (
              <div key={tier.title} className="step-item">
                <div style={{ marginBottom: '6px', textAlign: 'center' }}>
                  <h3 className="step-item__title" style={{ fontSize: '27.7px', textAlign: 'center' }}>{tier.title}</h3>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', fontSize: '22px', color: '#60a5fa', marginTop: '4px' }}>{tier.price}</p>
                </div>
                <p className="step-item__text">{tier.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="site-card">
          <h2 className="card-heading" style={{ fontSize: 'clamp(44.25px, 5.53vw, 63.25px)' }}>About</h2>
          <img
            src="/david.png"
            alt="David Peterson, founder of FranklinAI"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              margin: '4px auto 16px',
              border: '3px solid rgba(96, 165, 250, 0.3)'
            }}
          />
          <h3 className="card-title" style={{ marginTop: '-8px' }}>David Peterson</h3>
          <p className="card-text">
            David has spent 30 years building and running the systems that keep
            organizations moving across research, education, healthcare, and
            small business. He's worked alongside executive leadership at national
            institutions, built digital tools that transformed how teams operate,
            and has always been the person who figures out how to make things run better.
          </p>
          <p className="card-text">
            That same drive is what FranklinAI is built on. Building custom apps
            and tools is the next step in work he's been doing his whole career,
            now with better technology and a sharper focus on what businesses
            actually need.
          </p>
        </div>
      </div>
    </section>
  );
}

function DiscoveryCTA() {
  return (
    <section className="section" id="discovery">
      <div className="container">
        <div className="site-card">
          <h2 className="card-heading">Let's Build.</h2>
          <p className="card-text">
            Every project starts with a conversation. Tell us what you need or what's not working,
            and we'll figure out what to build.
          </p>
          <a href="https://cal.com/david-peterson-40s7lw/free-discovery-call" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ marginTop: 'clamp(4px, 1vw, 8px)' }}>
            Book a free discovery call.
          </a>
          <EmailOption />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: '24px 24px 20px',
        borderTop: '1px solid rgba(96, 165, 250, 0.12)',
        marginTop: '24px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {/* kite + text column, nudged left for optical centering (single value, desktop + mobile) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          transform: 'translateX(-25px)'
        }}
      >
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <KiteLogo size={100} />
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <a
            href="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: '30px',
                color: '#ffffff',
                lineHeight: 1
              }}
            >
              Franklin<span style={{ color: '#60a5fa' }}>AI</span>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: '14px',
                letterSpacing: '0.02em',
                color: '#8899b0',
                marginTop: '3px'
              }}
            >
              Philadelphia
            </span>
          </a>

          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '11px',
              color: '#8892a4',
              lineHeight: 1.5,
              marginTop: '8px',
              textAlign: 'center',
              width: '100%'
            }}
          >
            franklinaisolutions.com
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '11px',
              color: '#8892a4',
              lineHeight: 1.5,
              textAlign: 'center',
              width: '100%'
            }}
          >
            &copy; {year} FranklinAI
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <CaseStudy />
        <Pricing />
        <About />
        <DiscoveryCTA />
      </main>
      <Footer />
    </>
  );
}
