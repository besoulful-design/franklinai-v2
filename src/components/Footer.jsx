import KiteLogo from './KiteLogo';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">

        <a href="/" className="footer__brand" aria-label="FranklinAI home">
          <KiteLogo size={36} />
          <div className="footer__wordmark">
            <span className="footer__name">
              Franklin<span className="footer__ai">AI</span>
            </span>
            <span className="footer__city">Philadelphia</span>
          </div>
        </a>

        <a href="mailto:david@franklinaisolutions.com" className="footer__email">
          david@franklinaisolutions.com
        </a>

        <p className="footer__copy">
          &copy; {year} FranklinAI &mdash; franklinaisolutions.com
        </p>

      </div>
    </footer>
  );
}
