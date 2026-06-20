const fs = require('fs');
const path = require('path');

// SVG Map UI with black and green theme
const mapSVG = `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="greenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#8DC313;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#8DC313;stop-opacity:0.2" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#mapGradient)"/>

  <!-- Grid Pattern -->
  <g opacity="0.15">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="600" stroke="#8DC313" stroke-width="0.5"/>`).join('')}
    ${Array.from({ length: 15 }, (_, i) => `<line x1="0" y1="${i * 40}" x2="800" y2="${i * 40}" stroke="#8DC313" stroke-width="0.5"/>`).join('')}
  </g>

  <!-- Map Landmasses (Simplified) -->
  <g fill="#1a1a1a" stroke="#8DC313" stroke-width="2" opacity="0.8">
    <!-- North America -->
    <path d="M 150 120 Q 180 100 220 110 L 250 130 L 270 150 L 280 180 L 270 210 L 250 240 L 220 260 L 180 270 L 150 260 L 130 240 L 120 210 L 120 180 Z"/>
    <!-- Europe -->
    <path d="M 400 140 Q 420 130 440 135 L 460 145 L 470 160 L 465 180 L 450 195 L 430 200 L 410 195 L 395 180 Z"/>
    <!-- Asia -->
    <path d="M 520 100 Q 560 90 600 100 L 640 120 L 670 140 L 690 170 L 680 200 L 650 230 L 610 250 L 570 260 L 530 250 L 510 230 L 500 200 L 505 170 Z"/>
    <!-- Australia -->
    <path d="M 620 380 Q 650 370 670 380 L 680 400 L 675 420 L 655 435 L 630 440 L 610 430 L 605 410 Z"/>
    <!-- South America -->
    <path d="M 280 320 L 300 340 L 310 370 L 315 410 L 310 450 L 295 480 L 275 490 L 260 485 L 250 460 L 245 430 L 250 390 L 260 350 Z"/>
  </g>

  <!-- Route Lines -->
  <g stroke="#8DC313" stroke-width="2" fill="none" opacity="0.6" stroke-dasharray="5,5">
    <path d="M 400 165 Q 300 150 200 200" filter="url(#glow)">
      <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
    </path>
    <path d="M 400 165 Q 500 140 600 180" filter="url(#glow)">
      <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
    </path>
    <path d="M 200 200 Q 250 300 280 380" filter="url(#glow)">
      <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
    </path>
  </g>

  <!-- Location Markers -->
  <!-- San Francisco -->
  <g transform="translate(180, 200)">
    <circle cx="0" cy="0" r="20" fill="#8DC313" opacity="0.2">
      <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="0" cy="0" r="12" fill="#8DC313" opacity="0.4">
      <animate attributeName="r" values="12;18;12" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="0" cy="0" r="6" fill="#8DC313" filter="url(#glow)"/>
    <circle cx="0" cy="0" r="3" fill="#ffffff"/>
  </g>

  <!-- New York -->
  <g transform="translate(250, 180)">
    <circle cx="0" cy="0" r="15" fill="#8DC313" opacity="0.2">
      <animate attributeName="r" values="15;22;15" dur="2.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.2;0;0.2" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="0" cy="0" r="5" fill="#8DC313" filter="url(#glow)"/>
    <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
  </g>

  <!-- London -->
  <g transform="translate(420, 160)">
    <circle cx="0" cy="0" r="15" fill="#8DC313" opacity="0.2">
      <animate attributeName="r" values="15;22;15" dur="1.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.2;0;0.2" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="0" cy="0" r="5" fill="#8DC313" filter="url(#glow)"/>
    <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
  </g>

  <!-- Tokyo -->
  <g transform="translate(660, 170)">
    <circle cx="0" cy="0" r="15" fill="#8DC313" opacity="0.2">
      <animate attributeName="r" values="15;22;15" dur="2.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.2;0;0.2" dur="2.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="0" cy="0" r="5" fill="#8DC313" filter="url(#glow)"/>
    <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
  </g>

  <!-- Sydney -->
  <g transform="translate(650, 410)">
    <circle cx="0" cy="0" r="15" fill="#8DC313" opacity="0.2">
      <animate attributeName="r" values="15;22;15" dur="2.6s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.2;0;0.2" dur="2.6s" repeatCount="indefinite"/>
    </circle>
    <circle cx="0" cy="0" r="5" fill="#8DC313" filter="url(#glow)"/>
    <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
  </g>

  <!-- Coordinate Grid Overlay -->
  <g opacity="0.3" font-family="monospace" font-size="10" fill="#8DC313">
    <text x="20" y="30">90°N</text>
    <text x="20" y="300">0°</text>
    <text x="20" y="570">90°S</text>
    <text x="20" y="590">180°W</text>
    <text x="770" y="590">180°E</text>
  </g>

  <!-- Data Overlay Panel -->
  <g transform="translate(20, 450)">
    <rect width="280" height="130" rx="8" fill="#000000" opacity="0.85" stroke="#8DC313" stroke-width="1"/>
    <text x="15" y="25" font-family="monospace" font-size="11" fill="#8DC313" font-weight="bold">GLOBAL NETWORK STATUS</text>
    <line x1="15" y1="32" x2="265" y2="32" stroke="#8DC313" stroke-width="1" opacity="0.5"/>

    <text x="15" y="55" font-family="monospace" font-size="10" fill="#8DC313">◉ Active Nodes:</text>
    <text x="160" y="55" font-family="monospace" font-size="10" fill="#ffffff" font-weight="bold">5</text>

    <text x="15" y="75" font-family="monospace" font-size="10" fill="#8DC313">◉ Fleet Units:</text>
    <text x="160" y="75" font-family="monospace" font-size="10" fill="#ffffff" font-weight="bold">2,437</text>

    <text x="15" y="95" font-family="monospace" font-size="10" fill="#8DC313">◉ Coverage:</text>
    <text x="160" y="95" font-family="monospace" font-size="10" fill="#ffffff" font-weight="bold">38 Countries</text>

    <text x="15" y="115" font-family="monospace" font-size="10" fill="#8DC313">◉ Uptime:</text>
    <text x="160" y="115" font-family="monospace" font-size="10" fill="#ffffff" font-weight="bold">99.8%</text>
  </g>

  <!-- Top Right Info Panel -->
  <g transform="translate(580, 20)">
    <rect width="200" height="80" rx="8" fill="#000000" opacity="0.85" stroke="#8DC313" stroke-width="1"/>
    <text x="15" y="25" font-family="monospace" font-size="11" fill="#8DC313" font-weight="bold">PRIMARY NODE</text>
    <line x1="15" y1="32" x2="185" y2="32" stroke="#8DC313" stroke-width="1" opacity="0.5"/>
    <text x="15" y="50" font-family="monospace" font-size="10" fill="#ffffff">San Francisco, CA</text>
    <text x="15" y="65" font-family="monospace" font-size="9" fill="#8DC313">LAT: 37.7749° N</text>
    <text x="15" y="75" font-family="monospace" font-size="9" fill="#8DC313">LONG: 122.4194° W</text>
  </g>

  <!-- Scanning Line Effect -->
  <line x1="0" y1="0" x2="0" y2="600" stroke="#8DC313" stroke-width="2" opacity="0.3">
    <animate attributeName="x1" from="0" to="800" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="x2" from="0" to="800" dur="4s" repeatCount="indefinite"/>
  </line>
</svg>`;

// Save to public/images
const outputPath = path.join(process.cwd(), 'public', 'images', 'map-ui.svg');
fs.writeFileSync(outputPath, mapSVG);

console.log('✅ Map UI image generated successfully at:', outputPath);
