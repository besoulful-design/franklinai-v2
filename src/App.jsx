import './styles/global.css';

function KiteLogo({ size = 48, className = '' }) {
  const width  = size * (220 / 270);
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 270"
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
      <polygon points="114,148 106,161 111,161 103,173 118,160 113,160 118,148" fill="#60a5fa"/>
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

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a href="/" className="site-footer__brand">
          <KiteLogo size={44} className="site-footer__logo" />
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
          &copy; {year} FranklinAI &mdash; franklinaisolutions.com
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
        {/* Hero → How It Works → McKenzie Case Study → About → Discovery CTA */}
      </main>
      <Footer />
    </>
  );
}
