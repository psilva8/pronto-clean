/** @type {import('next').NextConfig} */

// List of all LA County cities for static generation
const laCities = [
  'agoura-hills', 'alhambra', 'arcadia', 'artesia', 'avalon', 'azusa', 'baldwin-park', 
  'bell', 'bell-gardens', 'bellflower', 'beverly-hills', 'bradbury', 'burbank', 'calabasas', 
  'carson', 'cerritos', 'claremont', 'commerce', 'compton', 'covina', 'cudahy', 'culver-city', 
  'diamond-bar', 'downey', 'duarte', 'el-monte', 'el-segundo', 'gardena', 'glendale', 'glendora', 
  'hawaiian-gardens', 'hawthorne', 'hermosa-beach', 'hidden-hills', 'huntington-park', 'industry', 
  'inglewood', 'irwindale', 'la-canada-flintridge', 'la-habra-heights', 'la-mirada', 'la-puente', 
  'la-verne', 'lakewood', 'lancaster', 'lawndale', 'lomita', 'long-beach', 'los-angeles', 'lynwood', 
  'malibu', 'manhattan-beach', 'maywood', 'monrovia', 'montebello', 'monterey-park', 'norwalk', 
  'palmdale', 'palos-verdes-estates', 'paramount', 'pasadena', 'pico-rivera', 'pomona', 'rancho-palos-verdes', 
  'redondo-beach', 'rolling-hills', 'rolling-hills-estates', 'rosemead', 'san-dimas', 'san-fernando', 
  'san-gabriel', 'san-marino', 'santa-clarita', 'santa-fe-springs', 'santa-monica', 'sierra-madre', 
  'signal-hill', 'south-el-monte', 'south-gate', 'south-pasadena', 'temple-city', 'torrance', 'vernon', 
  'walnut', 'west-covina', 'west-hollywood', 'westlake-village', 'whittier'
];

// Generate all city routes
const generateCityRoutes = () => {
  const routes = [];
  
  laCities.forEach(city => {
    routes.push(`/pressure-washing/${city}`);
    routes.push(`/power-washing/${city}`);
  });
  
  return routes;
};

const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  output: 'export', // Static site export for Cloudflare Pages
  distDir: 'out',
  // More specific Next.js options for App Router
  experimental: {
    // These are valid experimental options for Next.js 14
    serverActions: false,
    mdxRs: false,
  },
}

module.exports = nextConfig 