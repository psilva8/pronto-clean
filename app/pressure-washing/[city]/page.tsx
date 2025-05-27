import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { generateLocalBusinessSchema } from '../../../utils/schema';
import { generateMetadata as generatePageMetadata } from '../../../utils/metadata';

interface CityPageProps {
  params: {
    city: string;
  };
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cityName = params.city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return generatePageMetadata({
    title: `Professional Pressure Washing Services in ${cityName}, CA`,
    description: `Expert pressure washing services in ${cityName}, California. Residential and commercial cleaning solutions for your property.`,
    path: `/pressure-washing/${params.city}/`,
  });
}

export default function CityPage({ params }: CityPageProps) {
  const cityName = params.city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const schema = generateLocalBusinessSchema({
    city: cityName,
  });

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <h1>Professional Pressure Washing Services in {cityName}, CA</h1>
        {/* Add your city-specific content here */}
      </main>
    </>
  );
} 