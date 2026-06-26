const fs = require('fs');
const path = require('path');

// Read .env.local directly to avoid dotenvx injection conflicts
const envContent = fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) envVars[match[1].trim()] = match[2].trim();
});

const endpoint = envVars.AZURE_OPENAI_ENDPOINT;
const apiKey = envVars.AZURE_OPENAI_API_KEY;
const MODEL = 'gpt-image-2';

if (!endpoint || !apiKey) {
  console.error('Missing AZURE_OPENAI_ENDPOINT or AZURE_OPENAI_API_KEY in .env.local');
  process.exit(1);
}

console.log('Endpoint:', endpoint);
console.log('Key (first 10):', apiKey.substring(0, 10) + '...');

async function generateImage(prompt, filename, size = '1536x1024', quality = 'high') {
  const outputPath = path.join(__dirname, '..', 'public', 'images', filename);

  if (fs.existsSync(outputPath)) {
    console.log(`  SKIP: ${filename} already exists`);
    return outputPath;
  }

  console.log(`  Generating: ${filename} (${size}, ${quality})`);
  console.log(`  Prompt: ${prompt.substring(0, 100)}...`);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      prompt,
      n: 1,
      size,
      quality,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API Error ${response.status}: ${err}`);
  }

  const data = await response.json();
  const imageData = data?.data?.[0];

  if (!imageData) throw new Error('No image data in response');

  let buffer;
  if (imageData.b64_json) {
    buffer = Buffer.from(imageData.b64_json, 'base64');
  } else if (imageData.url) {
    const imgResp = await fetch(imageData.url);
    buffer = Buffer.from(await imgResp.arrayBuffer());
  } else {
    throw new Error('No b64_json or url in response');
  }

  fs.writeFileSync(outputPath, buffer);
  console.log(`  SAVED: ${outputPath}`);
  return outputPath;
}

// All image prompts from WEBSITE_CONTENT_REVIEW.md
const IMAGE_SETS = {
  home: [
    {
      filename: 'home-hero.png',
      size: '1536x1024',
      prompt: 'A modern Indian highway at golden hour, shot from inside a truck cabin. A sleek IoT device with green LED indicators is mounted near the windshield. Through the windshield: busy multi-lane highway with trucks, cars, and auto-rickshaws. Subtle data visualization overlay tracking vehicles ahead. Cinematic composition. Color palette: deep blacks, electric green (#8DC313) accents, warm amber. Photorealistic.',
    },
    {
      filename: 'home-accident-map.png',
      size: '1024x1536',
      prompt: 'Dark data-visualization style map of India at night with glowing route lines connecting major cities. Red pulse points at accident hotspots. Green flowing lines showing active fleet routes. Black background, green (#8DC313) and red accents. Futuristic infographic style. Clean minimal design, no text or labels.',
    },
    {
      filename: 'home-features-dashboard.png',
      size: '1536x1024',
      prompt: 'Clean dashboard UI mockup showing fleet management interface on monitor and mobile phone. Map with vehicle dots, live video feed thumbnail, and safety alert cards. Dark theme with green (#8DC313) accents. Professional SaaS product aesthetic. Realistic device mockup, photorealistic rendering.',
    },
    {
      filename: 'home-iot-device.png',
      size: '1024x1024',
      prompt: 'Close-up product shot of a smartphone-sized IoT device mounted on a truck windshield. Black matte finish, green LED ring, multiple camera lenses visible. Studio environment, dramatic side lighting, blurred road through windshield background. Apple-level product photography. Premium quality, minimal.',
    },
  ],
  about: [
    {
      filename: 'focus-sensor-intelligence.png',
      size: '1536x1024',
      prompt: 'Futuristic automotive IoT device with multiple camera lenses, radar sensors, and LiDAR components mounted on a sleek black chassis. Close-up product shot showing intricate PCB circuitry, sensor arrays, and microchip architecture. Green LED indicators glow subtly. AI perception visualization overlays showing detected objects and scene understanding. Dark tech aesthetic with golden-hour side lighting. Premium automotive technology showcase. NO BRAND NAMES or visible logos.',
    },
    {
      filename: 'focus-ai-ml.png',
      size: '1536x1024',
      prompt: 'Modern AI fleet analytics dashboard displayed on a large curved monitor in a dark command center. Split-screen interface showing: left side has interactive map with vehicle dots, traffic patterns, and route optimization; right side shows predictive analytics charts, machine learning model performance metrics, autonomous decision trees, and safety scores. Green (#8DC313) accent highlights on data visualizations. Multiple data streams and neural network diagrams flowing across screens. Enterprise SaaS aesthetic with dark theme and glowing green elements. NO BRAND NAMES.',
    },
    {
      filename: 'focus-autonomy-data.png',
      size: '1536x1024',
      prompt: 'Connected autonomous vehicles in formation on a modern smart highway with HD mapping overlay. Multiple vehicles communicating via cloud data pipelines (visualized as glowing green connection lines). Aerial view showing real-time telemetry streams flowing to a central cloud hub with 5G towers. HD maps displayed with precision lane markings, road geometry, and environmental data layers. IoT sensors collecting road surface information. Futuristic smart infrastructure with green accent lighting. Premium autonomous mobility ecosystem visualization. Dark tech aesthetic. NO BRAND NAMES or identifiable manufacturers.',
    },
    {
      filename: 'about-hero-team.png',
      size: '1536x1024',
      prompt: 'Diverse team of young Indian engineers (5-6 people, mixed gender) in modern startup office, around a screen showing fleet map data. Exposed brick, plants, whiteboards with technical diagrams. Natural light. Candid, authentic. Documentary photography style. Warm tones.',
    },
    {
      filename: 'about-journey-timeline.png',
      size: '1536x1024',
      prompt: 'Timeline visual: hand-drawn PCB sketch on paper (left) transitioning to a polished black IoT device on desk (center) transitioning to a premium Indian heavy-duty truck on highway (right). The truck is a modern, luxury fleet vehicle with sleek aerodynamic design, premium white/silver paint, chrome accents. NO visible brand names, logos, or trademarks on the vehicle - use plain generic design. Connected by flowing green line. Clean editorial illustration, white background, minimalist style, cinematic lighting.',
    },
    {
      filename: 'about-rd-pillars.png',
      size: '1536x1024',
      prompt: 'Three isometric illustrations side by side: (1) IoT device with sensor rays emanating outward, (2) Neural network visualization with flowing data particles, (3) Truck silhouette with data streams going into cloud. Black and green (#8DC313) palette on white background. Tech startup aesthetic, clean vector-like style.',
    },
    {
      filename: 'about-careers.png',
      size: '1536x1024',
      prompt: 'Candid shot of 2-3 Indian engineers at workbench with PCB boards, IoT device prototype, soldering iron, oscilloscope, and laptop showing code. Modern co-working space. Natural light from windows. Documentary photography style, authentic and energetic.',
    },
  ],
  technology: [
    {
      filename: 'tech-hero-device.png',
      size: '1536x1024',
      prompt: 'Dramatic dark product shot of an IoT device from low angle on a metal stand. Camera lenses catching light, green LED glow on edges. Blurred fleet dashboard on screen in background. Studio black background. Cinematic, premium feel. Professional product photography.',
    },
    {
      filename: 'tech-hardware-evolution.png',
      size: '1536x1024',
      prompt: 'Three IoT devices left to right showing evolution: rough prototype with visible PCB and wires on left, cleaner black production unit in center, sleek premium device with seamless design and multiple lenses on right. Evolution shot on dark gradient background. Professional hardware photography.',
    },
    {
      filename: 'tech-dashboard-ui.png',
      size: '1536x1024',
      prompt: 'Fleet management dashboard UI screenshot on large monitor (dark theme). Map with green vehicle dots, driver list sidebar, live video panel in corner, alert notifications popup. Dark background (#1a1a1a), green (#8DC313) accents throughout. Polished, production-ready SaaS UI design. Realistic screen mockup.',
    },
    {
      filename: 'tech-sensor-exploded.png',
      size: '1024x1024',
      prompt: 'Exploded/disassembled view of IoT device showing internals floating in space: camera modules, green PCB, antenna, IMU sensor chip, connectors, housing pieces. Dark background with green accent lighting on key components. Technical but artistic composition. Premium hardware teardown style.',
    },
  ],
  solutions: [
    {
      filename: 'solutions-hero.png',
      size: '1536x1024',
      prompt: 'Fleet operations control room with large curved monitor wall showing multiple vehicle camera feeds, maps, and analytics dashboards. An Indian operator (professional, male) standing with tablet. Blue-black ambient lighting, green data visualizations on screens. Corporate tech photography.',
    },
    {
      filename: 'solutions-grid.png',
      size: '1536x1024',
      prompt: 'Create a clean vertical split composition with two scenarios only, maintaining a premium automotive-tech aesthetic and consistent warm golden-hour lighting across both halves. Left Half: A realistic three-lane highway scene. The left lane has a modern long-haul truck, the middle lane has a delivery van, and the right lane has a school bus, all driving in the same direction. Apply subtle AI vehicle detection overlays and lane tracking graphics. Do not display any real company logos, brand names, trademarks, or identifiable commercial markings on any vehicle—use plain, generic fleet vehicles only. Right Half: An insurance professional reviewing dash cam footage on a laptop in a modern office, with the laptop clearly displaying vehicle footage and analytics in a clean, premium interface. Separate the two scenes with a subtle brand-colored divider, maintain realistic proportions, cinematic composition, consistent lighting, and a premium enterprise AI visual style suitable for a flagship website hero section.',
    },
  ],
  newsroom: [
    {
      filename: 'newsroom-hero.png',
      size: '1536x1024',
      prompt: 'Stage or podium with HAVONE logo (simple green text) on a large screen behind. Tech event setting with dramatic stage lighting, green accent lights. Empty stage ready for product launch presentation. Event photography style, wide angle, professional.',
    },
  ],
  blog: [
    {
      filename: 'blog-hero.png',
      size: '1536x1024',
      prompt: 'Aerial view of busy Indian intersection with trucks, cars, auto-rickshaws, two-wheelers, and pedestrians. Data visualization overlay: green bounding boxes on vehicles, trajectory prediction lines, small AI detection labels. Real photography blended with data visualization. Editorial quality.',
    },
  ],
  careers: [
    {
      filename: 'careers-hero.png',
      size: '1536x1024',
      prompt: 'Small startup team (4-5 Indian people, mixed gender) at table with laptops, IoT prototypes, PCB boards scattered. Modern co-working space with natural light. Whiteboard with architecture diagrams in background. Authentic, energetic startup energy. Documentary photography style.',
    },
  ],
  contact: [
    {
      filename: 'contact-hero.png',
      size: '1536x1024',
      prompt: 'Overhead shot of Indian city skyline at blue hour (dusk). Modern buildings, highway flyover with traffic light trails from long exposure. Teal and blue overall tone with warm amber streetlight accents. Wide angle, architectural photography. Could be Bangalore or Hyderabad skyline.',
    },
  ],
};

async function generateSet(setName) {
  const images = IMAGE_SETS[setName];
  if (!images) {
    console.error(`Unknown set: ${setName}. Available: ${Object.keys(IMAGE_SETS).join(', ')}`);
    process.exit(1);
  }

  console.log(`\n=== Generating ${setName.toUpperCase()} images (${images.length}) ===\n`);

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    console.log(`[${i + 1}/${images.length}] ${img.filename}`);
    try {
      await generateImage(img.prompt, img.filename, img.size, 'high');
      console.log('');
    } catch (err) {
      console.error(`  ERROR: ${err.message}\n`);
    }
    // Rate limit pause between generations
    if (i < images.length - 1) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log(`\n=== Done with ${setName} set ===\n`);
}

// CLI: node generate-website-images.js [setName|all]
const arg = process.argv[2] || 'home';

if (arg === 'all') {
  (async () => {
    for (const setName of Object.keys(IMAGE_SETS)) {
      await generateSet(setName);
    }
  })();
} else {
  generateSet(arg);
}
