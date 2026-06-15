// app/taxi-trails/page.js
import Link from 'next/link';
import { masterPackages } from '../data/catalog';
import { MapPin, Calendar, Truck, Users, MessageCircle, CheckCircle, ChevronRight } from 'lucide-react';

export default function TaxiTrails() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="bg-slate-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Taxi Trails by Uttarakhand Rides</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              Home
            </Link>
            <Link href="/uk-rides" className="text-slate-600 hover:text-slate-900 transition-colors">
              Uttarakhand Rides
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Experiential Mountain Circuits & Pilgrimages
        </h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Curated journeys through Uttarakhand's most sacred and scenic destinations. Each circuit is designed for discerning travelers seeking authentic experiences with premium comfort.
        </p>

        {/* Packages Grid */}
        <div className="grid gap-6">
          {/* Desktop: 2-column grid */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-6">
            {masterPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:border-slate-300"
              >
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 p-3 rounded-lg shrink-0">
                      <MapPin className="w-5 h-5 text-slate-900" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
                      <p className="text-slate-600 mb-3">{pkg.duration}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {pkg.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-200 text-slate-800 text-xs px-3 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {pkg.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="border-t pt-5">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Truck className="w-5 h-5 mr-3" /> Pricing
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-slate-500 text-sm">Sedan</p>
                        <p className="text-2xl font-bold">
                          ₹{pkg.pricing.sedan.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm">SUV</p>
                        <p className="text-2xl font-bold">
                          ₹{pkg.pricing.suv.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm">Innova Crysta</p>
                        <p className="text-2xl font-bold">
                          ₹{pkg.pricing.innova.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-3" /> Highlights
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="mt-8">
                    <<a
  href="https://wa.me/919675212169?text=Hi%20I%20am%20interested%20in%20this%20tour%20package"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex items-center justify-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
>
  <MessageCircle className="w-5 h-5 mr-3" />
  Inquire via WhatsApp
</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Single column stack */}
          <div className="md:hidden space-y-6">
            {masterPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:border-slate-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-100 p-3 rounded-lg shrink-0">
                      <MapPin className="w-4 h-4 text-slate-900" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2">{pkg.name}</h2>
                      <p className="text-slate-600 mb-2">{pkg.duration}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {pkg.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-200 text-slate-800 text-xs px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Truck className="w-4 h-4 mr-3" /> Pricing
                    </h3>
                    <div className="grid grid-cols-3 gap-3 text-center text-sm">
                      <div>
                        <p className="text-slate-500">Sedan</p>
                        <p className="font-medium">₹{pkg.pricing.sedan.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm">SUV</p>
                        <p className="font-medium">₹{pkg.pricing.suv.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm">Innova</p>
                        <p className="font-medium">₹{pkg.pricing.innova.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-3" /> Highlights
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    {pkg.highlights.length > 3 && (
                      <p className="mt-2 text-slate-500 text-sm italic">
                        +{pkg.highlights.length - 3} more highlights
                      </p>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="mt-5">
                    <a
  href="https://wa.me/919675212169?text=Hi%20I%20am%20interested%20in%20this%20tour%20package"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex items-center justify-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
>
  <MessageCircle className="w-5 h-5 mr-3" />
  Inquire via WhatsApp
</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Ready to embark on your Uttarakhand journey?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Our expert team is ready to help you customize any of these circuits to suit your preferences, schedule, and budget.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <Link
              href="/uk-rides"
              className="px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Book Point-to-Point Transfers
            </Link>
            <a
  href="https://wa.me/919675212169?text=Hi%20I%20am%20interested%20in%20this%20tour%20package"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex items-center justify-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
>
  <MessageCircle className="w-5 h-5 mr-3" />
  Inquire via WhatsApp
</a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
          <p>&copy; {new Date().getFullYear()} Taxi Trails by Uttarakhand Rides. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="/" className="hover:text-slate-900">Home</a> |
            <a href="/uk-rides" className="hover:text-slate-900">Uttarakhand Rides</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
