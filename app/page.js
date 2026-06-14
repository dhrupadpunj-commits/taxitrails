// app/page.js
import Link from 'next/link';
import { ChevronRight, TrendingUp, MapPin, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="bg-slate-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center">
            Uttarakhand Rides
          </h1>
          <p className="mt-2 text-center text-slate-600 max-w-xl mx-auto">
            Premium Transportation Solutions Across Uttarakhand
          </p>
        </div>
      </header>

      {/* Main Content - Split Portal */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">
        {/* Desktop: Side-by-side layout */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex md:items-start md:justify-between md:gap-12">
            {/* Left Column - Uttarakhand Rides */}
            <div className="w-[35%]">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-3" /> Uttarakhand Rides
                </h2>
                <p className="mb-6">
                  Your trusted partner for point-to-point, airport, and intercity taxi transfers across Uttarakhand. Experience seamless travel with fixed fares, verified drivers, and 24/7 availability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span>Fixed Fares • No Hidden Charges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>Verified Drivers • AC Vehicles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-purple-500" />
                    <span>24/7 Availability • Flight Tracking</span>
                  </div>
                </div>
                <Link
                  href="/uk-rides"
                  className="w-full mt-8 flex items-center justify-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Book Your Ride →
                </Link>
              </div>
            </div>

            {/* Right Column - Taxi Trails */}
            <div className="w-[60%]">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3" /> Taxi Trails by Uttarakhand Rides
                </h2>
                <p className="mb-6">
                  Elite experiential journeys through Uttarakhand's most sacred and scenic destinations. Curated mountain tour circuits and pilgrimages designed for discerning travelers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-500" />
                    <span>8 Expertly Crafted Circuits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>All-Inclusive Experiences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                    <span>Premium Comfort • Expert Guidance</span>
                  </div>
                </div>
                <Link
                  href="/taxi-trails"
                  className="w-full mt-8 flex items-center justify-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Explore Our Trails →
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-8 w-full">
            {/* Uttarakhand Rides - Mobile */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-3" /> Uttarakhand Rides
              </h2>
              <p className="mb-4">
                Point-to-point, airport, and intercity taxi transfers with fixed fares and verified drivers.
              </p>
              <Link
                href="/uk-rides"
                className="w-flex items-center justify-center px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Book Your Ride →
              </Link>
            </div>

            {/* Taxi Trails - Mobile */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-3" /> Taxi Trails by Uttarakhand Rides
              </h2>
              <p className="mb-4">
                Elite experiential journeys through Uttarakhand's most sacred and scenic destinations.
              </p>
              <Link
                href="/taxi-trails"
                className="w-flex items-center justify-center px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Explore Our Trails →
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
          <p>&copy; {new Date().getFullYear()} Uttarakhand Rides. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="/uk-rides" className="hover:text-slate-900">Uttarakhand Rides</a> |
            <a href="/taxi-trails" className="hover:text-slate-900">Taxi Trails</a>
          </p>
        </div>
      </footer>
    </div>
  );
}