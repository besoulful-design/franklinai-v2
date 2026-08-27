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
        Email
      </a>
    </p>
  );
}

function GlowPTModal({ onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const features = [
    'A 30-second daily check-in, with warm encouragement that keeps patients coming back.',
    'A private journal and weekly streaks, in every patient\'s pocket.',
    'One subscription covers the clinic. Patients join free.',
    'Reaches every patient, not just the ones you can bill remote monitoring on.',
    'More completed plans of care, because engaged patients finish their care.',
    'Zero work for your therapists. No building, no monitoring, no calls.',
    'Runs alongside any EMR. Nothing to set up, nothing to integrate.',
    'A free weekly roster summary and a clinic dashboard to follow activity, trends, and flags.'
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &#x2715;
        </button>
        <h2 className="modal__title" style={{ marginTop: '6px' }}>GlowPT</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: '600', color: '#8899b0', marginBottom: '16px' }}>
          Clinic subscriptions available.
        </p>
        <p className="modal__text">
          Patients walk out doing great, then drift off before their plan of
          care is done. The GlowPT app keeps patients engaged between visits, so
          more plans of care get completed and the clinic stays full.
        </p>
        <div style={{ marginBottom: '24px' }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: i < features.length - 1 ? '12px' : '0' }}>
              <span style={{ color: '#60a5fa', fontWeight: '700', flexShrink: 0, lineHeight: '1.5' }} aria-hidden="true">&#10003;</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#f0e6d3', lineHeight: '1.5' }}>{f}</span>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(96, 165, 250, 0.12)', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', fontSize: '27.7px', color: '#60a5fa', lineHeight: '1.45', marginBottom: '18px' }}>
            $350 <span style={{ fontSize: '20px' }}>/ month</span>
          </p>
          <a href="https://cal.com/david-peterson-40s7lw/free-discovery-call" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
            Book a Free Discovery Call
          </a>
          {/* Self-serve door. Same label as glowpt.app's own primary button, and the
              same destination (/onboard), so it never lands on a duplicate button.
              Ghost on purpose: the filled style stays exclusive to the discovery call. */}
          <div style={{ marginTop: '12px' }}>
            <a href="https://glowpt.app/onboard" target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ padding: '10px 20px', fontSize: '13px', marginTop: '0' }}>
              Bring GlowPT to Your Clinic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function EbookModal({ onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &#x2715;
        </button>
        <h2 className="modal__title" style={{ marginTop: '6px' }}>What Your Practice Actually Sells</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: '600', color: '#8899b0', marginBottom: '16px' }}>
          A self-serve guide. $37, yours to download.
        </p>
        <p className="modal__text">
          Your whole team is being asked to sell advanced care and get patients
          to the end of their plan of care at the same time. That's not a
          marketing problem. You're running two business models in one building,
          an insurance practice and a cash practice, and they're pulling against
          each other.
        </p>
        <p className="modal__text">
          You didn't set out to run two businesses, but you chose every piece
          that built the second one. The tactics arrived built for a business
          you don't own, and none of them came with a label. So the team gets
          mixed signals about what the practice is driving at, and every patient
          feels the seams.
        </p>
        <p className="modal__text">
          This guide walks you through the fix: decide what your practice
          actually is, then say it in one sentence your whole team can repeat.
          Not a tactic, not a tool. The one thing that lets everything else line
          up behind it.
        </p>
        <div style={{ borderTop: '1px solid rgba(96, 165, 250, 0.12)', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', fontSize: '27.7px', color: '#60a5fa', lineHeight: '1.45', marginBottom: '18px' }}>
            $37
          </p>
          <a href="#" className="btn btn--ghost" style={{ padding: '10px 20px', fontSize: '13px' }}>
            Buy the Guide
          </a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="site-nav" style={{ padding: '6px 24px' }}>
      <div className="site-nav__inner">
        <a href="/" className="site-nav__brand" style={{ gap: '4px', alignItems: 'flex-start', transform: 'translateX(-26px)' }}>
          <span style={{ flexShrink: 0, display: 'flex' }}>
            <KiteLogo size={130} />
          </span>
          <div className="site-nav__wordmark" style={{ marginTop: 'clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)' }}>
            <span className="site-nav__name" style={{ fontSize: 'clamp(40.95px, 4.35vw, 50.4px)', color: '#60a5fa' }}>
              Franklin<span className="site-nav__ai" style={{ color: '#ffffff' }}>AI</span>
            </span>
            <span className="site-nav__city" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 'clamp(25.6px, 2.72vw, 31.5px)', color: '#60a5fa', lineHeight: '1', marginTop: '3px' }}>Solutions, LLC</span>
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
        <div className="site-card" style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '700', letterSpacing: '0.04em', color: '#60a5fa', marginBottom: 'clamp(2px, 1vw, 8px)', lineHeight: '1.1' }}>
            Custom<br />Apps &amp; Tools
          </p>
          <h1 className="hero__headline" style={{ color: '#ffffff', fontSize: 'clamp(37.5px, 5.75vw, 57.5px)', marginBottom: '10px' }}>
            Built for<br />Your Practice
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#8892a4', marginTop: '0', marginBottom: 'clamp(4px, 1vw, 8px)' }}>
            Built to Handle HIPAA
          </p>
          <a href="https://cal.com/david-peterson-40s7lw/free-discovery-call" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ padding: '11px 22px', fontSize: '14px' }}>
            Book a Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsletterModal({ onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &#x2715;
        </button>
        <h2 className="modal__title" style={{ marginTop: '6px' }}>The Operator</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: '600', color: '#8899b0', marginBottom: '16px' }}>
          Free to subscribe.
        </p>
        <p className="modal__text">
          For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it.
        </p>
        {/* Signup form. Not wired yet. The Kit form endpoint gets added here later. */}
        <div style={{ borderTop: '1px solid rgba(96, 165, 250, 0.12)', paddingTop: '24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Your email address"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                color: '#f0e6d3',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '8px',
                padding: '10px 14px',
                height: '44px',
                minHeight: '44px',
                boxSizing: 'border-box',
                outline: 'none',
                WebkitAppearance: 'none',
                flex: '1 1 220px',
                maxWidth: '280px'
              }}
            />
            <button type="button" className="btn btn--ghost" style={{ height: '44px', minHeight: '44px', boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '0' }}>
              Subscribe for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsletterStrip() {
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <div className="site-card" style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          <h2 className="card-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 58px)', lineHeight: '1.2', marginBottom: 'clamp(4px, 1.5vw, 10px)' }}>
            Newsletter
          </h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 5vw, 35px)', fontWeight: '800', color: '#ffffff', marginTop: '0', marginBottom: '14px', lineHeight: '1.1' }}>
            The Operator
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#8892a4', marginTop: '0', marginBottom: '18px', lineHeight: '1.5' }}>
            For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it.
          </p>
          <button type="button" className="btn btn--ghost" onClick={() => setNewsletterOpen(true)} style={{ marginTop: '0' }}>
            Subscribe for Free
          </button>
        </div>
      </div>
      {newsletterOpen && <NewsletterModal onClose={() => setNewsletterOpen(false)} />}
    </section>
  );
}

function AvailableForPractice() {
  const [glowOpen, setGlowOpen] = useState(false);
  const [ebookOpen, setEbookOpen] = useState(false);

  return (
    <section className="section" id="financial-clarity">
      <div className="container">
        <div className="site-card" style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          <h2 className="card-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' }}>
            Available
          </h2>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '800', fontSize: 'clamp(30px, 5vw, 35px)', color: '#ffffff', lineHeight: '1.2', marginTop: '12px', marginBottom: '10px' }}>
            What Your Practice Actually Sells
          </h3>
          <p className="card-text" style={{ marginBottom: '0' }}>
            A downloadable guide for owners running two business models in one building, an insurance practice and a cash practice, and making them work together.
          </p>
          <button className="btn btn--ghost" onClick={() => setEbookOpen(true)} style={{ marginTop: '16px' }}>
            More Info
          </button>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '800', fontSize: 'clamp(30px, 5vw, 35px)', color: '#ffffff', lineHeight: '1.2', marginTop: '28px', marginBottom: '10px' }}>
            GlowPT
          </h3>
          <p className="card-text">
            An app for physical therapy patients to stay engaged between visits, with zero work for your therapists.
          </p>
          <button className="btn btn--ghost" onClick={() => setGlowOpen(true)} style={{ marginTop: '16px' }}>
            More Info
          </button>
        </div>
      </div>
      {ebookOpen && <EbookModal onClose={() => setEbookOpen(false)} />}
      {glowOpen && <GlowPTModal onClose={() => setGlowOpen(false)} />}
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
      text: 'After launch, we handle hosting and maintenance. As your business evolves, new features get scoped and built on your terms.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="site-card" style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          <h2 className="card-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' }}>How It Works</h2>
          <div className="step-stack" style={{ marginTop: '0' }}>
            {steps.map(step => (
              <div key={step.number} className="step-item">
                <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                  <h3 className="step-item__title" style={{ fontSize: 'clamp(30px, 5vw, 35px)', textAlign: 'center' }}>{step.title}</h3>
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

function CustomWork() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <div className="site-card" style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          <h2 className="card-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' }}>Custom Work</h2>
          <h3 className="card-title" style={{ fontSize: 'clamp(30px, 5vw, 35px)' }}>McKenzie Arm Care</h3>
          <p className="card-text">
            A custom patient-care portal for a clinician who needed more than a
            spreadsheet. Patient journaling, symptom tracking, in-app messaging,
            and smart admin alerts.
          </p>
          <button className="btn btn--ghost" onClick={() => setOpen(true)} style={{ marginTop: '16px' }}>
            Case Study
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
      pricePrefix: 'From',
      price: '$10,000',
      text: 'One flat project fee, set up front. No hourly meter, no surprises.',
      subtext: 'New features quoted and built one at a time, as you grow.'
    },
    {
      title: 'Monthly Care',
      price: '$350',
      priceSuffix: '/ month',
      text: 'Optional. Covers hosting, maintenance, security, and updates.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="site-card" style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          <h2 className="card-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' }}>Custom Pricing</h2>
          <div className="step-stack" style={{ marginTop: '0' }}>
            {tiers.map(tier => (
              <div key={tier.title} className="step-item">
                <div style={{ marginBottom: '6px', textAlign: 'center' }}>
                  <h3 className="step-item__title" style={{ fontSize: 'clamp(30px, 5vw, 35px)', textAlign: 'center' }}>{tier.title}</h3>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', fontSize: '27.7px', color: '#60a5fa', marginTop: '4px' }}>
                    {tier.pricePrefix && <span style={{ fontSize: '20px' }}>{tier.pricePrefix} </span>}
                    {tier.price}
                    {tier.priceSuffix && <span style={{ fontSize: '20px' }}> {tier.priceSuffix}</span>}
                  </p>
                </div>
                <p className="step-item__text">{tier.text}</p>
                {tier.subtext && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#8892a4', marginTop: '0' }}>
                    {tier.subtext}
                  </p>
                )}
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
        <div className="site-card" style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          <h2 className="card-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 58px)', lineHeight: '1.1', marginBottom: 'clamp(4px, 1.5vw, 10px)' }}>Behind<br />Franklin<span style={{ color: '#ffffff' }}>AI</span></h2>
          <img
            src="/david.png"
            alt="David Peterson, founder of FranklinAI"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              margin: '14px auto 10px',
              border: '3px solid rgba(96, 165, 250, 0.3)'
            }}
          />
          <h3 className="card-title" style={{ marginTop: '0', fontSize: 'clamp(30px, 5vw, 35px)', color: '#ffffff' }}>David Peterson</h3>
          <p className="card-text">
            David has spent decades building systems and processes in both
            nonprofit and for-profit businesses, across healthcare, research,
            and education.
          </p>
          <p className="card-text">
            That experience is what FranklinAI is built on. Custom apps and tools
            are the next step in work he's been doing his whole career, now with
            better technology and a clear focus on what a business needs.
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
        <div className="site-card" style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          <h2 className="card-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' }}>Let's Build</h2>
          <p className="card-text">
            Every project starts with a conversation. Tell us what you need or what's not working,
            and we'll figure out what to build.
          </p>
          <a href="https://cal.com/david-peterson-40s7lw/free-discovery-call" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ marginTop: 'clamp(4px, 1vw, 8px)', padding: '11px 22px', fontSize: '14px' }}>
            Book a Free Discovery Call
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
        marginTop: '0',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {/* kite + text column. The text column sits right of the lockup's center
          (half the kite width + gap), so this translateX lands the wordmark AND the
          fine print near the page's center. Single dial, desktop + mobile. */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '4px',
          transform: 'translateX(-14px)'
        }}
      >
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <KiteLogo size={105} />
        </span>

        {/* Block layout + text-align, NO flex. Every line is display:block and
            centers via the column's textAlign:center. Deliberately not a flex
            column: flex shrink-to-content centering computes differently across
            engines (Safari), which is what kept the copyright reading off-center.
            Block max-content + text-align is identical in every browser. */}
        <div style={{ textAlign: 'center', marginTop: '13.16px' }}>
          <a
            href="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            }}
          >
            <span
              style={{
                display: 'block',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: '32px',
                color: '#60a5fa',
                lineHeight: 1
              }}
            >
              Franklin<span style={{ color: '#ffffff' }}>AI</span>
            </span>
            <span
              style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: '20px',
                letterSpacing: '0.02em',
                color: '#60a5fa',
                lineHeight: '1',
                marginTop: '2px'
              }}
            >
              Solutions, LLC
            </span>
          </a>

          <span
            style={{
              display: 'block',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#8892a4',
              lineHeight: 1.5,
              marginTop: '8px'
            }}
          >
            franklinaisolutions.com
          </span>
          {/* The copyright line carries a deliberate -3px optical correction, and
              it is the ONLY line on the page that does. Why it is not a leftover:
              the line is geometrically centered to 0.00px, but "(c)" is a light
              hollow circle sitting next to four solid digits, so its ink weight
              leans right and the eye reads the line as pushed right. The gap was
              already tightened to 2px below; the math says no gap can finish the
              job (solving for a balanced gap returns a negative number), so the
              residual lean is corrected here. Landed at -3px by David's eye on the
              live site (-2px measured closer on paper, but -3px is what reads
              centered). V31 stripped a -2px nudge from this line as a "Philadelphia
              leftover" - on this one line that was an over-correction, and this
              restores it on purpose. It moves this line only: do not add one to any
              other line, and DO NOT touch the footer lockup. */}
          <span
            style={{
              display: 'block',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#8892a4',
              lineHeight: 1.5,
              transform: 'translateX(-3px)'
            }}
          >
            {/* Tightened gap after the (c) symbol: a fixed 2px margin replaces the
                3.66px word space, deterministic in every browser, unlike a
                thin-space glyph which depends on the font having it. */}
            &copy;<span style={{ marginLeft: '2px' }}>{year}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ WebkitTextSizeAdjust: '100%' }}>
      <Nav />
      <main>
        <Hero />
        <NewsletterStrip />
        <AvailableForPractice />
        <CustomWork />
        <HowItWorks />
        <Pricing />
        <About />
        <DiscoveryCTA />
      </main>
      <Footer />
    </div>
  );
}
