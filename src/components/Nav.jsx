import KiteLogo from './KiteLogo';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a href="/" className="nav__brand" aria-label="FranklinAI home">
          <KiteLogo size={42} className="nav__icon" />
          <div className="nav__wordmark">
            <span className="nav__name">
              Franklin<span className="nav__ai">AI</span>
            </span>
            <span className="nav__city">Philadelphia</span>
          </div>
        </a>
      </div>
    </nav>
  );
}
