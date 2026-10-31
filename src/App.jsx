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

// The Instagram glyph for the footer. Meta's official path, not hand-drawn:
// Instagram_Glyph_Black.svg from Meta's Instagram brand asset pack (2023),
// about.meta.com/brand/resources/instagram/instagram-brand. One color through
// currentColor, so it takes the link's #60a5fa; the link carries the label.
function InstagramGlyph({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <path transform="translate(-2.5 -2.5)" d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"/>
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

// The bottom Close, shared by all four modals so they match. Framed like the
// modal buttons (same size and radius) but in grey, not blue: a blue ghost
// "Close" under the GlowPT modal's filled discovery-call button would take the
// bottom, strongest position.
function ModalCloseButton({ onClose }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '24px' }}>
      <button type="button" onClick={onClose} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: '600', color: '#8892a4', background: 'transparent', border: '1px solid rgba(136, 146, 164, 0.35)', borderRadius: '12px', padding: '10px 20px', cursor: 'pointer' }}>
        Close
      </button>
    </div>
  );
}

// The check-mark feature list, shared by the GlowPT and case-study modals so
// the two lists always look the same. Lines end with periods.
// `last` drops the bottom margin when the list is the final content, so the
// gap to the bottom Close stays 24px like the other modals.
function ModalFeatureList({ features, last = false }) {
  return (
    <div style={{ marginBottom: last ? '0' : '24px' }}>
      {features.map((f, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: i < features.length - 1 ? '12px' : '0' }}>
          <span style={{ color: '#60a5fa', fontWeight: '700', flexShrink: 0, lineHeight: '1.5' }} aria-hidden="true">&#10003;</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#f0e6d3', lineHeight: '1.5' }}>{f}</span>
        </div>
      ))}
    </div>
  );
}

function GlowPTModal({ onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // These 8 bullets are word-identical AND in the same order as the GlowPT More
  // Info modal on glowpt.app (glowpt/src/lib/marketing.js, `whatGlowptIs.points`).
  // David's call 2026-08-30: the two lists must match exactly, so a buyer who
  // reads both surfaces never sees the product described two different ways.
  // Change one list, change the other.
  const features = [
    'A 30-second daily check-in, with warm encouragement that keeps patients coming back.',
    'A private journal and weekly streaks, in every patient\'s pocket.',
    'One subscription covers the clinic and the patients join for free.',
    'Reaches every patient, not just the ones you can bill remote monitoring on.',
    'More completed plans of care, because engaged patients finish their care.',
    'Zero work for your therapists. No building, no monitoring, no calls.',
    'Runs alongside any EMR. Nothing to set up, nothing to integrate.',
    'A weekly roster summary and a clinic dashboard to follow activity, trends, and flags.'
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &#x2715;
        </button>
        <h2 className="modal__title" style={{ marginTop: '6px' }}>GlowPT</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: '600', color: '#8899b0', marginBottom: '16px' }}>
          Sign up online, or book a call first.
        </p>
        <p className="modal__text">
          The GlowPT app keeps physical therapy patients engaged between visits.
          More completed plans of care and the clinic stays full.
        </p>
        <ModalFeatureList features={features} />
        <div style={{ borderTop: '1px solid rgba(96, 165, 250, 0.12)', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', fontSize: '27.7px', color: '#60a5fa', lineHeight: '1.45', marginBottom: '18px' }}>
            $350 <span style={{ fontSize: '20px' }}>/ month</span>
          </p>
          {/* Self-serve door, deliberately FIRST so the buttons read in the same
              order as the subline above them ("Sign up online, or book a call first").
              Same label as glowpt.app's own primary button, and the same destination
              (/onboard), so it never lands on a page showing a duplicate button.
              Styles were NOT flipped with the order: the filled style stays exclusive
              to the discovery call, site-wide. Only the order changed. */}
          <a href="https://glowpt.app/onboard" target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ padding: '10px 20px', fontSize: '13px' }}>
            Bring GlowPT to Your Clinic
          </a>
          <div style={{ marginTop: '12px' }}>
            <a href="https://cal.com/david-peterson-40s7lw/free-discovery-call" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ padding: '10px 20px', fontSize: '13px', marginTop: '0' }}>
              Book a Free Discovery Call
            </a>
          </div>
        </div>
        <ModalCloseButton onClose={onClose} />
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
        <p className="modal__text">
          The marketing pushes the premium programs, the packages, the specialty
          work, the thing that looks good on a flyer. The money arrives when a
          patient finishes a plan of care, visit after visit, over weeks. Those
          are two different businesses.
        </p>
        <p className="modal__text">
          You are running both. Most practices are. And the two are pulling
          against each other in every role in the building, because your team is
          being asked to sell advanced care and get patients to the end of their
          care at the same time, with nobody telling them which one wins when
          they collide.
        </p>
        <p className="modal__text">
          This guide walks you through the fix: decide what your practice
          actually is, then say it in one sentence your whole team can repeat.
          Not a tactic, not a tool. The one thing that lets everything else line
          up behind it.
        </p>
        <div style={{ borderTop: '1px solid rgba(96, 165, 250, 0.12)', paddingTop: '24px', textAlign: 'center' }}>
          <a href="https://franklinai.kit.com/products/what-your-practice-actually-sells" target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ padding: '12px 26px', fontSize: '15px', marginTop: '0' }}>
            Buy the Guide · $37
          </a>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#8892a4', lineHeight: '1.5', marginTop: '12px', marginBottom: '0' }}>
            A downloadable PDF.
          </p>
        </div>
        <ModalCloseButton onClose={onClose} />
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
            <span className="site-nav__city" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 'clamp(25.6px, 2.72vw, 31.5px)', color: '#60a5fa', lineHeight: '1', marginTop: '3px' }}>Solutions LLC</span>
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

// Kit form "The Operator site signup". Double opt-in is ON in Kit, so success
// copy says "check your email". If double opt-in is ever turned off, change
// the success line to "You're in."
const KIT_FORM_URL = 'https://app.kit.com/forms/9962049/subscriptions';

// The latest issue of The Operator on Kit's newsletter site, linked from the
// /confirmed page so a new subscriber can read it right away instead of
// waiting up to a month. UPDATE THIS WHEN EACH NEW ISSUE IS SENT (Kit shows
// the post's link on the "Congrats" screen after sending).
const LATEST_ISSUE_URL = 'https://franklinai.kit.com/posts/you-re-running-an-insurance-practice-with-cash-model-marketing';

function NewsletterModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    if (status !== 'success') return;
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [status, onClose]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    try {
      const body = new FormData();
      body.append('email_address', email.trim());
      const res = await fetch(KIT_FORM_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.status === 'success') {
        setStatus('success');
        return;
      }
      const invalid = data.errors && data.errors.fields && data.errors.fields.includes('email_address');
      setErrorMessage(invalid
        ? "That email address doesn't look right. Check it and try again."
        : "That didn't go through. Please try again in a moment.");
      setStatus('error');
    } catch {
      setErrorMessage("That didn't go through. Please try again in a moment.");
      setStatus('error');
    }
  }

  const submitting = status === 'submitting';

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
          A monthly newsletter for physical therapy practices that takes a look at what's going on in your practice and what to do about&nbsp;it.
        </p>
        {/* Signup form. JS-handled submit to Kit (a plain POST would navigate away and destroy the modal). */}
        <div style={{ borderTop: '1px solid rgba(96, 165, 250, 0.12)', paddingTop: '24px' }}>
          {status === 'success' ? (
            <p role="status" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#f0e6d3', lineHeight: '1.5', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0' }}>
              Almost there. Check your email to confirm.
            </p>
          ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
            <input
              type="email"
              name="email_address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={submitting}
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
            <button type="submit" disabled={submitting} className="btn btn--ghost" style={{ height: '44px', minHeight: '44px', boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '0' }}>
              {submitting ? 'Subscribing…' : 'Subscribe for Free'}
            </button>
          </form>
          )}
          {status !== 'success' && (
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#8892a4', lineHeight: '1.5', textAlign: 'center', marginTop: '12px', marginBottom: '0' }}>
              Then check your email to confirm.
            </p>
          )}
          {status === 'error' && (
            <p role="alert" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#8899b0', lineHeight: '1.5', textAlign: 'center', marginTop: '12px', marginBottom: '0' }}>
              {errorMessage}
            </p>
          )}
        </div>
        <ModalCloseButton onClose={onClose} />
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
            A monthly newsletter for physical therapy practices that takes a look at what's going on in your practice and what to do about&nbsp;it.
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
            A guide for owners running two business models in one building, an insurance practice and a cash practice, and making them work together.
          </p>
          <button className="btn btn--ghost" onClick={() => setEbookOpen(true)} style={{ marginTop: '16px' }}>
            More Info
          </button>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '800', fontSize: 'clamp(30px, 5vw, 35px)', color: '#ffffff', lineHeight: '1.2', marginTop: '28px', marginBottom: '10px' }}>
            GlowPT
          </h3>
          <p className="card-text">
            The GlowPT app keeps physical therapy patients engaged between visits. More completed plans of care and the clinic stays full.
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
    'User login and role-based access.',
    'Daily journaling and symptom tracking.',
    'Progress logs with visual history.',
    'In-app messaging between patient and clinician.',
    'Admin portal with smart alerts.',
    'Automated email notifications.'
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &#x2715;
        </button>
        <h2 className="modal__title" style={{ marginTop: '6px' }}>McKenzie Arm Care</h2>
        <p className="modal__text">
          A custom patient-care web app built for a clinician who needed more
          than a spreadsheet and less than an enterprise system. Patients log in,
          journal their progress, track symptoms, and message their clinician directly.
          The clinician gets a portal with real-time visibility into every
          patient's journey, plus smart alerts when something needs attention.
        </p>
        <ModalFeatureList features={features} last />
        <ModalCloseButton onClose={onClose} />
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
          fine print near the page's center. Single dial, desktop + mobile.
          -14px until 2026-10-25, when David saw it read slightly right; -20px
          read too far left; -17px is halfway back, by David's eye. */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '4px',
          transform: 'translateX(-17px)'
        }}
      >
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <KiteLogo size={105} />
        </span>

        {/* Block layout + text-align, NO flex. Every line is display:block and
            centers via the column's textAlign:center. Deliberately not a flex
            column: flex shrink-to-content centering computes differently across
            engines (Safari), which is what kept the copyright reading off-center.
            Block max-content + text-align is identical in every browser.
            marginTop puts the F's center on the kite crossbar: 0.325 x 105
            - 0.561 x 32 = 16.17px (was 13.16px, 2.8px high, until 2026-10-25). */}
        <div style={{ textAlign: 'center', marginTop: '16.17px' }}>
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
              Solutions LLC
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
            {/* Instagram, the account's one discovery surface, at the end of this
                line (David, 2026-10-25; a fifth line of its own made the footer
                too tall). Laid out at the text's size so the line does not grow, and
                the line stays far narrower than "FranklinAI", so the column cannot
                widen and the lockup cannot move. It rides this line's -3px. Drawn
                50% bigger by a transform (David, 2026-10-31), which takes no layout
                room, so the (c) line stays put; it grows rightward from its left edge,
                keeping the 8px gap. Do not raise size={13} instead: that moves the line. */}
            <a
              href="https://www.instagram.com/franklinaisolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FranklinAI on Instagram"
              style={{
                display: 'inline-block',
                marginLeft: '8px',
                verticalAlign: '-2px',
                lineHeight: 0,
                color: '#60a5fa',
                transform: 'scale(1.5)',
                transformOrigin: 'left center'
              }}
            >
              <InstagramGlyph size={13} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// Where Kit sends a reader after they tap "Confirm Your Subscription"
// (form 9962049's after-confirm redirect). Replaces Kit's default page,
// which carries a "Built with Kit" badge that cannot be switched off.
// The build copies index.html to dist/confirmed/ so it is served with a 200.
// No nav on this page (David, 2026-10-16): the card leads, then the footer.
function Confirmed() {
  return (
    <section className="section">
      <div className="container">
        <div className="site-card" style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          <h1 className="card-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 58px)', lineHeight: '1.2', marginBottom: 'clamp(4px, 1.5vw, 10px)' }}>
            Newsletter
          </h1>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 5vw, 35px)', fontWeight: '800', color: '#ffffff', marginTop: '0', marginBottom: '14px', lineHeight: '1.1' }}>
            The Operator
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#8892a4', marginTop: '0', marginBottom: '18px', lineHeight: '1.5' }}>
            Thanks for confirming. You're on the list for The Operator. The next issue will come straight to your&nbsp;inbox.
          </p>
          <a href="/" className="btn btn--ghost" style={{ marginTop: '0' }}>
            Visit FranklinAI
          </a>
          <div style={{ marginTop: '12px' }}>
            <a href={LATEST_ISSUE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ marginTop: '0' }}>
              Read the Latest Issue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const isConfirmed = window.location.pathname.replace(/\/+$/, '') === '/confirmed';

  if (isConfirmed) {
    return (
      <div style={{ WebkitTextSizeAdjust: '100%' }}>
        <main style={{ paddingTop: 'clamp(56px, 16vh, 160px)' }}>
          <Confirmed />
        </main>
        <Footer />
      </div>
    );
  }

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
