import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function GutterCleaningSantaFeSprings() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gutter Cleaning in Santa Fe Springs",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santa Fe Springs",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Santa Fe Springs"
    },
    "description": "Looking for professional gutter cleaning services in Santa Fe Springs? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.",
    "serviceType": "Gutter Cleaning"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Gutter Cleaning in Santa Fe Springs"
        subtitle="Professional gutter cleaning services for Santa Fe Springs properties"
        backgroundImage="/images/gutter-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Gutter Cleaning in Santa Fe Springs
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional gutter cleaning services in Santa Fe Springs? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Santa Fe Springs</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Debris removal</li>
                <li>Minor repairs</li>
                <li>Guard installation</li>
                <li>Downspout cleaning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Santa Fe Springs Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Prevent water damage</li>
                <li>Maintain roof health</li>
                <li>Protect foundation</li>
                <li>Save on repairs</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Santa Fe Springs
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="gutter-cleaning" serviceTitle="Gutter Cleaning" />
    </>
  )
}