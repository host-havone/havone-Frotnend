const fs = require('fs');
const path = require('path');

// Realistic Google Maps-style UI with streets, buildings, and route
const mapSVG = `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#8DC313;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6FA00F;stop-opacity:1" />
    </linearGradient>
    <pattern id="parkPattern" patternUnits="userSpaceOnUse" width="10" height="10">
      <rect width="10" height="10" fill="#e8f5e9"/>
      <circle cx="2" cy="2" r="1" fill="#c8e6c9"/>
      <circle cx="7" cy="6" r="1" fill="#c8e6c9"/>
    </pattern>
  </defs>

  <!-- Base Map Background (Light gray like Google Maps) -->
  <rect width="800" height="600" fill="#f5f5f5"/>

  <!-- Water/River -->
  <path d="M 0 380 Q 200 360 400 380 Q 600 400 800 390 L 800 600 L 0 600 Z" fill="#c6e4f7" opacity="0.6"/>

  <!-- Parks/Green Spaces -->
  <rect x="120" y="80" width="100" height="80" rx="4" fill="url(#parkPattern)"/>
  <rect x="480" y="200" width="120" height="100" rx="4" fill="url(#parkPattern)"/>

  <!-- City Blocks and Buildings -->
  <g id="buildings">
    <!-- Block 1 - Top Left -->
    <rect x="60" y="40" width="40" height="60" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="60" y="40" width="40" height="15" fill="#d5d5d5"/>

    <rect x="110" y="40" width="45" height="80" fill="#e8e8e8" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="110" y="40" width="45" height="20" fill="#d8d8d8"/>

    <rect x="165" y="40" width="35" height="50" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>

    <!-- Block 2 - Top Center -->
    <rect x="280" y="40" width="50" height="70" fill="#e8e8e8" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="340" y="40" width="45" height="55" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="395" y="40" width="40" height="65" fill="#e5e5e5" stroke="#bdbdbd" stroke-width="1"/>

    <!-- Block 3 - Top Right -->
    <rect x="520" y="40" width="60" height="75" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="520" y="40" width="60" height="18" fill="#d5d5d5"/>

    <rect x="590" y="40" width="50" height="60" fill="#e8e8e8" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="650" y="40" width="55" height="70" fill="#e5e5e5" stroke="#bdbdbd" stroke-width="1"/>

    <!-- Block 4 - Middle Left -->
    <rect x="60" y="180" width="45" height="65" fill="#e8e8e8" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="115" y="180" width="40" height="75" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="165" y="180" width="50" height="60" fill="#e5e5e5" stroke="#bdbdbd" stroke-width="1"/>

    <!-- Block 5 - Middle Center -->
    <rect x="280" y="180" width="45" height="80" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="335" y="180" width="50" height="65" fill="#e8e8e8" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="395" y="180" width="40" height="70" fill="#e5e5e5" stroke="#bdbdbd" stroke-width="1"/>

    <!-- Block 6 - Middle Right -->
    <rect x="620" y="180" width="50" height="75" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="680" y="180" width="45" height="60" fill="#e8e8e8" stroke="#bdbdbd" stroke-width="1"/>

    <!-- Block 7 - Bottom Left -->
    <rect x="60" y="320" width="40" height="50" fill="#e8e8e8" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="110" y="320" width="45" height="55" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>

    <!-- Block 8 - Bottom Center -->
    <rect x="280" y="320" width="50" height="60" fill="#e5e5e5" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="340" y="320" width="40" height="55" fill="#e8e8e8" stroke="#bdbdbd" stroke-width="1"/>

    <!-- Block 9 - Bottom Right -->
    <rect x="620" y="320" width="45" height="50" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>
    <rect x="675" y="320" width="50" height="55" fill="#e8e8e8" stroke="#bdbdbd" stroke-width="1"/>

    <!-- Add window details to some buildings -->
    <g fill="#9e9e9e" opacity="0.3">
      <rect x="65" y="50" width="6" height="8"/>
      <rect x="74" y="50" width="6" height="8"/>
      <rect x="83" y="50" width="6" height="8"/>
      <rect x="92" y="50" width="6" height="8"/>

      <rect x="525" y="52" width="7" height="9"/>
      <rect x="536" y="52" width="7" height="9"/>
      <rect x="547" y="52" width="7" height="9"/>
      <rect x="558" y="52" width="7" height="9"/>
      <rect x="569" y="52" width="7" height="9"/>
    </g>
  </g>

  <!-- Major Streets (Horizontal) -->
  <g stroke="#ffffff" stroke-width="12" stroke-linecap="round">
    <line x1="0" y1="140" x2="800" y2="140"/>
    <line x1="0" y1="280" x2="800" y2="280"/>
  </g>

  <!-- Major Streets (Vertical) -->
  <g stroke="#ffffff" stroke-width="12" stroke-linecap="round">
    <line x1="240" y1="0" x2="240" y2="600"/>
    <line x1="460" y1="0" x2="460" y2="600"/>
  </g>

  <!-- Street Names on Major Roads -->
  <g font-family="Arial, sans-serif" font-size="11" fill="#757575">
    <rect x="340" y="127" width="120" height="18" rx="2" fill="white" opacity="0.9"/>
    <text x="400" y="140" text-anchor="middle" font-weight="600">Market Street</text>

    <rect x="340" y="267" width="110" height="18" rx="2" fill="white" opacity="0.9"/>
    <text x="395" y="280" text-anchor="middle" font-weight="600">Mission St</text>
  </g>

  <!-- Lane Dividers -->
  <g stroke="#f0f0f0" stroke-width="1" stroke-dasharray="8,6" opacity="0.7">
    <line x1="0" y1="140" x2="800" y2="140"/>
    <line x1="0" y1="280" x2="800" y2="280"/>
    <line x1="240" y1="0" x2="240" y2="600"/>
    <line x1="460" y1="0" x2="460" y2="600"/>
  </g>

  <!-- Secondary Streets -->
  <g stroke="#ffffff" stroke-width="8">
    <line x1="0" y1="110" x2="230" y2="110"/>
    <line x1="250" y1="110" x2="800" y2="110"/>

    <line x1="0" y1="260" x2="800" y2="260"/>

    <line x1="160" y1="0" x2="160" y2="600"/>
    <line x1="390" y1="0" x2="390" y2="600"/>
    <line x1="615" y1="0" x2="615" y2="600"/>
  </g>

  <!-- Navigation Route (Bold green line) -->
  <g>
    <!-- Route Shadow -->
    <path d="M 120 110 L 240 110 L 240 280 L 460 280 L 460 190 L 615 190 L 615 260"
          stroke="#000000" stroke-width="10" opacity="0.15" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Main Route -->
    <path d="M 120 110 L 240 110 L 240 280 L 460 280 L 460 190 L 615 190 L 615 260"
          stroke="#8DC313" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>

    <!-- Route Direction Arrows -->
    <g fill="#8DC313">
      <polygon points="230,110 235,107 235,113" transform="rotate(0 233 110)"/>
      <polygon points="240,270 237,275 243,275" transform="rotate(90 240 273)"/>
      <polygon points="450,280 455,277 455,283" transform="rotate(0 453 280)"/>
      <polygon points="460,200 457,205 463,205" transform="rotate(-90 460 203)"/>
      <polygon points="605,190 610,187 610,193" transform="rotate(0 608 190)"/>
    </g>
  </g>

  <!-- Start Location (Point A) -->
  <g transform="translate(120, 110)">
    <circle cx="0" cy="0" r="16" fill="#8DC313" opacity="0.3">
      <animate attributeName="r" values="16;24;16" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="0" cy="0" r="12" fill="#8DC313" filter="url(#shadow)"/>
    <text x="0" y="1" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" dominant-baseline="middle">A</text>
  </g>

  <!-- End Location (Point B) -->
  <g transform="translate(615, 260)">
    <circle cx="0" cy="0" r="16" fill="#8DC313" opacity="0.3">
      <animate attributeName="r" values="16;24;16" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="0" cy="0" r="12" fill="#8DC313" filter="url(#shadow)"/>
    <text x="0" y="1" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" dominant-baseline="middle">B</text>
  </g>

  <!-- Route Info Card (Top) -->
  <g transform="translate(20, 20)">
    <rect width="240" height="85" rx="8" fill="white" filter="url(#shadow)"/>
    <g transform="translate(12, 15)">
      <text font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#202124">Route Overview</text>

      <g transform="translate(0, 22)">
        <circle cx="6" cy="0" r="5" fill="#8DC313"/>
        <text x="18" y="4" font-family="Arial, sans-serif" font-size="11" fill="#5f6368">Start: 123 Market St</text>
      </g>

      <line x1="6" y1="30" x2="6" y2="42" stroke="#e0e0e0" stroke-width="2" stroke-dasharray="2,2"/>

      <g transform="translate(0, 44)">
        <circle cx="6" cy="0" r="5" fill="#8DC313"/>
        <text x="18" y="4" font-family="Arial, sans-serif" font-size="11" fill="#5f6368">End: 456 Mission Ave</text>
      </g>

      <g transform="translate(0, 58)">
        <rect width="216" height="1" fill="#e0e0e0"/>
      </g>

      <g transform="translate(0, 65)">
        <text x="0" y="0" font-family="Arial, sans-serif" font-size="10" fill="#5f6368">
          <tspan fill="#1a73e8" font-weight="600">2.4 km</tspan> ·
          <tspan fill="#1a73e8" font-weight="600">8 min</tspan> via Market St
        </text>
      </g>
    </g>
  </g>

  <!-- Location Labels -->
  <g font-family="Arial, sans-serif" font-size="10" fill="#202124">
    <!-- Start label -->
    <rect x="35" y="95" width="75" height="16" rx="3" fill="white" filter="url(#shadow)"/>
    <text x="72.5" y="105" text-anchor="middle" font-weight="500">HAVONE HQ</text>

    <!-- End label -->
    <rect x="545" y="245" width="60" height="16" rx="3" fill="white" filter="url(#shadow)"/>
    <text x="575" y="255" text-anchor="middle" font-weight="500">Client Site</text>
  </g>

  <!-- Current Location Indicator (small dot on route) -->
  <g transform="translate(460, 280)">
    <circle cx="0" cy="0" r="8" fill="#1a73e8" filter="url(#shadow)">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        values="0,0; 2,0; 0,0; -2,0; 0,0"
        dur="2s"
        repeatCount="indefinite"/>
    </circle>
    <circle cx="0" cy="0" r="4" fill="white"/>
  </g>

  <!-- Bottom Info Bar (Distance and Time) -->
  <g transform="translate(0, 540)">
    <rect width="800" height="60" fill="white" filter="url(#shadow)"/>

    <!-- Distance -->
    <g transform="translate(60, 20)">
      <circle cx="0" cy="10" r="18" fill="#e8f5e9" stroke="#8DC313" stroke-width="2"/>
      <text x="0" y="14" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#8DC313">2.4</text>
      <text x="35" y="15" font-family="Arial, sans-serif" font-size="13" fill="#202124">km</text>
      <text x="35" y="30" font-family="Arial, sans-serif" font-size="10" fill="#5f6368">Total Distance</text>
    </g>

    <!-- Time -->
    <g transform="translate(220, 20)">
      <circle cx="0" cy="10" r="18" fill="#e8f5e9" stroke="#8DC313" stroke-width="2"/>
      <text x="0" y="14" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#8DC313">8</text>
      <text x="30" y="15" font-family="Arial, sans-serif" font-size="13" fill="#202124">min</text>
      <text x="30" y="30" font-family="Arial, sans-serif" font-size="10" fill="#5f6368">Est. Time</text>
    </g>

    <!-- Traffic Status -->
    <g transform="translate(380, 20)">
      <rect x="-10" y="0" width="36" height="36" rx="18" fill="#e8f5e9"/>
      <path d="M 8,10 L 10,16 L 6,16 Z" fill="#8DC313"/>
      <text x="35" y="15" font-family="Arial, sans-serif" font-size="13" fill="#202124">Light Traffic</text>
      <text x="35" y="30" font-family="Arial, sans-serif" font-size="10" fill="#5f6368">Fastest route available</text>
    </g>

    <!-- Start Navigation Button -->
    <g transform="translate(620, 15)">
      <rect width="150" height="35" rx="18" fill="#8DC313" filter="url(#shadow)" cursor="pointer">
        <animate attributeName="opacity" values="1;0.9;1" dur="2s" repeatCount="indefinite"/>
      </rect>
      <text x="75" y="23" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="white">Start Navigation</text>
    </g>
  </g>

  <!-- Map Controls (Zoom) -->
  <g transform="translate(750, 80)">
    <rect width="35" height="75" rx="4" fill="white" filter="url(#shadow)"/>
    <line x1="17.5" y1="20" x2="17.5" y2="30" stroke="#5f6368" stroke-width="2"/>
    <line x1="12.5" y1="25" x2="22.5" y2="25" stroke="#5f6368" stroke-width="2"/>
    <line x1="17.5" y1="52" x2="17.5" y2="62" stroke="#5f6368" stroke-width="2"/>
    <line x1="12.5" y1="42" x2="22.5" y2="42" stroke="#e0e0e0" stroke-width="1"/>
  </g>

  <!-- Compass -->
  <g transform="translate(750, 180)">
    <circle cx="17.5" cy="17.5" r="17" fill="white" filter="url(#shadow)"/>
    <text x="17.5" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#5f6368">N</text>
  </g>
</svg>`;

// Save to public/images
const outputPath = path.join(process.cwd(), 'public', 'images', 'map-ui.svg');
fs.writeFileSync(outputPath, mapSVG);

console.log('✅ Realistic map UI image generated successfully at:', outputPath);
