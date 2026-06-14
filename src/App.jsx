import { useState } from 'react';
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

function Nav() {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <a href="/" className="site-nav__brand">
          <KiteLogo size={224} className="site-nav__logo" />
          <div className="site-nav__wordmark">
            <span className="site-nav__name">
              Franklin<span className="site-nav__ai">AI</span>
            </span>
            <span className="site-nav__city">Philadelphia</span>
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
          <h1 className="hero__headline">
            Custom apps and tools built for your business.
          </h1>
          <a href="#discovery" className="btn btn--primary">
            Book a free discovery call
          </a>
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
          <h2 className="card-heading">How it Works</h2>
          <div className="step-stack">
            {steps.map(step => (
              <div key={step.number} className="step-item">
                <div className="step-item__header">
                  <span className="step-item__number">{step.number}</span>
                  <h3 className="step-item__title">{step.title}</h3>
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
        <span className="card-label">Case Study</span>
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
          <h2 className="card-heading">Built for Real Work</h2>
          <span className="card-label">Case Study</span>
          <h3 className="card-title">McKenzie Arm Care</h3>
          <p className="card-text">
            A custom patient-care portal for a clinician who needed more than a
            spreadsheet. Patient journaling, symptom tracking, in-app messaging,
            and smart admin alerts.
          </p>
          <button className="btn btn--ghost" onClick={() => setOpen(true)}>
            Read the full case study
          </button>
        </div>
      </div>
      {open && <CaseStudyModal onClose={() => setOpen(false)} />}
    </section>
  );
}

function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="site-card">
          <h2 className="card-heading">About</h2>
          <h3 className="card-title">David Peterson</h3>
          <span className="card-label">Founder &amp; Builder</span>
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
          <h2 className="card-heading">Let's build something for your business.</h2>
          <p className="card-text">
            Every project starts with a conversation. Tell us what you need or what's not working,
            and we'll figure out what to build.
          </p>
          <a href="#discovery" className="btn btn--primary">
            Book a free discovery call
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a href="/" className="site-footer__brand">
          <KiteLogo size={132} className="site-footer__logo" />
          <div className="site-footer__wordmark">
            <span className="site-footer__name">
              Franklin<span className="site-footer__ai">AI</span>
            </span>
            <span className="site-footer__city">Philadelphia</span>
          </div>
        </a>
        <a href="mailto:david@franklinaisolutions.com" className="site-footer__email">
          david@franklinaisolutions.com
        </a>
        <p className="site-footer__copy">
          &copy; {year} FranklinAI · franklinaisolutions.com
        </p>
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
        <About />
        <DiscoveryCTA />
      </main>
      <Footer />
    </>
  );
}
