/* KiteLogo.jsx — Blueprint Electric, recolored to brand accent #60a5fa */
export default function KiteLogo({ size = 48, className = '' }) {
  /* Scale the 220×270 viewBox down to whatever size prop is given,
     maintaining the original proportions (220/270 ≈ 0.815 wide). */
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
      {/* No background rect — transparent so it sits on any surface */}

      {/* Blueprint grid lines — very subtle */}
      <line x1="0"   y1="67"  x2="220" y2="67"  stroke="#60a5fa" strokeWidth="0.5" opacity="0.08"/>
      <line x1="0"   y1="134" x2="220" y2="134" stroke="#60a5fa" strokeWidth="0.5" opacity="0.08"/>
      <line x1="0"   y1="201" x2="220" y2="201" stroke="#60a5fa" strokeWidth="0.5" opacity="0.08"/>
      <line x1="55"  y1="0"   x2="55"  y2="270" stroke="#60a5fa" strokeWidth="0.5" opacity="0.08"/>
      <line x1="110" y1="0"   x2="110" y2="270" stroke="#60a5fa" strokeWidth="0.5" opacity="0.08"/>
      <line x1="165" y1="0"   x2="165" y2="270" stroke="#60a5fa" strokeWidth="0.5" opacity="0.08"/>

      {/* KITE — dark fills with glowing blue outline */}
      <polygon points="110,20 148,88 110,88" fill="#0d1e3a"/>
      <polygon points="110,88 148,88 110,120" fill="#091830"/>
      <polygon points="72,88 110,88 110,20"  fill="#091830"/>
      <polygon points="72,88 110,120 110,88" fill="#0d1e3a"/>
      {/* Glow outer ring */}
      <polygon points="110,20 148,88 110,120 72,88" fill="none" stroke="#60a5fa" strokeWidth="6" opacity="0.12"/>
      {/* Main outline */}
      <polygon points="110,20 148,88 110,120 72,88" fill="none" stroke="#60a5fa" strokeWidth="2.5"/>
      {/* Cross spars */}
      <line x1="72"  y1="88" x2="148" y2="88"  stroke="#60a5fa" strokeWidth="1.5" opacity="0.6"/>
      <line x1="110" y1="20" x2="110" y2="120" stroke="#60a5fa" strokeWidth="1.5" opacity="0.6"/>

      {/* String: kite bottom → bolt top */}
      <line x1="110" y1="120" x2="110" y2="148" stroke="#60a5fa" strokeWidth="1.5" opacity="0.7"/>

      {/* LIGHTNING BOLT */}
      {/* Glow layer */}
      <polygon
        points="114,148 106,161 111,161 103,173 118,160 113,160 118,148"
        fill="#60a5fa" opacity="0.14"
      />
      {/* Main bolt */}
      <polygon
        points="114,148 106,161 111,161 103,173 118,160 113,160 118,148"
        fill="#60a5fa"
      />
      {/* White-hot core */}
      <polygon
        points="113,151 107,161 111,161 105,171 116,160 112,160 116,151"
        fill="white" opacity="0.5"
      />

      {/* String: bolt bottom → key */}
      <line x1="110" y1="173" x2="110" y2="190" stroke="#60a5fa" strokeWidth="1.5" opacity="0.7"/>

      {/* KEY */}
      {/* Outer glow ring */}
      <circle cx="110" cy="203" r="17" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.14"/>
      {/* Ring */}
      <circle cx="110" cy="203" r="13" fill="none" stroke="#60a5fa" strokeWidth="2.5"/>
      {/* Inner dot */}
      <circle cx="110" cy="203" r="5"  fill="#60a5fa"/>
      {/* Shaft */}
      <rect x="122" y="199.5" width="32" height="7" rx="3.5" fill="#60a5fa"/>
      {/* Teeth */}
      <rect x="140" y="206.5" width="5" height="9" rx="2" fill="#60a5fa"/>
      <rect x="148" y="206.5" width="5" height="6" rx="2" fill="#60a5fa"/>
      {/* Key glow */}
      <circle cx="110" cy="203" r="13" fill="none" stroke="#60a5fa" strokeWidth="5" opacity="0.07"/>

      {/* String tail — fading out */}
      <line x1="110" y1="216" x2="110" y2="248" stroke="#60a5fa" strokeWidth="1.5" opacity="0.18"/>
    </svg>
  );
}
