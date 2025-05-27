import fs from 'fs';
import path from 'path';

const cities = [
  'Los Angeles',
  'San Diego',
  'San Jose',
  'San Francisco',
  'Fresno',
  'Sacramento',
  'Long Beach',
  'Oakland',
  'Bakersfield',
  'Anaheim',
  // Add more cities as needed
];

const baseDir = path.join(process.cwd(), 'app', 'pressure-washing');

function createCityDirectory(city: string) {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const cityDir = path.join(baseDir, citySlug);

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
  }

  return cityDir;
}

function main() {
  cities.forEach(city => {
    const cityDir = createCityDirectory(city);
    console.log(`Created directory for ${city} at ${cityDir}`);
  });
}

main(); 