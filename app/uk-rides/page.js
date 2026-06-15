// app/uk-rides/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Calendar,
  Clock,
  Truck,
  Users,
  MessageCircle,
  CheckCircle,
  X
} from 'lucide-react';

// Sample direct routes data
const directRoutes = [
  {
    id: 'dehradun-delhi',
    from: 'Dehradun',
    to: 'Delhi',
    distance: '250 km',
    duration: '5-6 hrs',
    pricing: { sedan: 4500, suv: 6000, innova: 7500 },
    popular: true
  },
  {
    id: 'dehradun-mussoorie',
    from: 'Dehradun',
    to: 'Mussoorie',
    distance: '35 km',
    duration: '1-1.5 hrs',
    pricing: { sedan: 1500, suv: 2200, innova: 2800 },
    popular: true
  },
  {
    id: 'dehradun-nainital',
    from: 'Dehradun',
    to: 'Nainital',
    distance: '290 km',
    duration: '7-8 hrs',
    pricing: { sedan: 6500, suv: 9000, innova: 11000 },
    popular: true
  },
  {
    id: 'dehradun-rishikesh',
    from: 'Dehradun',
    to: 'Rishikesh',
    distance: '45 km',
    duration: '1.5-2 hrs',
    pricing: { sedan: 1200, suv: 1600, innova: 2000 },
    popular: false
  },
  {
    id: 'dehradun-haridwar',
    from: 'Dehradun',
    to: 'Haridwar',
    distance: '55 km',
    duration: '2-2.5 hrs',
    pricing: { sedan: 1400, suv: 1900, innova: 2400 },
    popular: false
  },
  {
    id: 'jolly-grant-airport-dehradun',
    from: 'Jolly Grant Airport',
    to: 'Dehradun City',
    distance: '25 km',
    duration: '45-60 mins',
    pricing: { sedan: 1000, suv: 1300, innova: 1600 },
    popular: true
  },
  {
    id: 'jolly-grant-airport-rishikesh',
    from: 'Jolly Grant Airport',
    to: 'Rishikesh',
    distance: '20 km',
    duration: '40-50 mins',
    pricing: { sedan: 900, suv: 1200, innova: 1500 },
    popular: false
  },
  {
    id: 'jolly-grant-airport-haridwar',
    from: 'Jolly Grant Airport',
    to: 'Haridwar',
    distance: '35 km',
    duration: '1-1.5 hrs',
    pricing: { sedan: 1100, suv: 1500, innova: 1800 },
    popular: false
  }
];

export default function UttarakhandRides() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    vehicle: 'sedan'
  });

  const [selectedRoute, setSelectedRoute] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.from || !formData.to || !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setShowConfirmation(true);
      setLoading(false);
    }, 1000);
  };

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
    setFormData(prev => ({ ...prev, from: route.from, to: route.to }));
  };

  const generateWhatsAppLink = () => {
    const fullMessage =
      `Hello, I'd like to book a taxi:\n\n` +
      `*From:* ${formData.from}\n` +
      `*To:* ${formData.to}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time}\n` +
      `*Vehicle:* ${formData.vehicle.toUpperCase()}\n` +
      `\nPlease confirm availability and fare.`;
    const phoneNumber = '91XXXXXXXXXX';
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  };

  const BookingForm = ({ mobile = false }) => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="font-medium">From</label>
        <input
          type="text"
          value={formData.from}
          onChange={(e) => setFormData(prev => ({ ...prev, from: e.target.value }))}
          placeholder="Enter pickup location"
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
          disabled={!!selectedRoute}
        />
      </div>
      <div className="space-y-2">
        <label className="font-medium">To</label>
        <input
          type="text"
          value={formData.to}
          onChange={(e) => setFormData(prev => ({ ...prev, to: e.target.value }))}
          placeholder="Enter drop-off location"
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
          disabled={!!selectedRoute}
        />
      </div>
      <div className="space-y-2">
        <label className="font-medium">Date</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
      </div>
      <div className="space-y-2">
        <label className="font-medium">Time</label>
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
      </div>
      <div className="space-y-2">
        <label className="font-medium">Vehicle Type</label>
        <div className="flex space-x-3">
          {['sedan', 'suv', 'innova'].map((vehicle) => (
            <label key={vehicle} className="flex items-center space-x-2 cursor-pointer flex-1">
              <input
                type="radio"
                value={vehicle}
                checked={formData.vehicle === vehicle}
                onChange={(e) => setFormData(prev => ({ ...prev, vehicle: e.target.value }))}
                className="h-4 w-4 text-slate-900"
              />
              <span className="text-sm">{vehicle.toUpperCase()}</span>
            </label>
          ))}
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 flex items-center justify-center px-4 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50"
      >
        {loading ? 'Checking Availability...' : 'Check Availability'}
      </button>
    </form>
  );

  const PopularRoutes = () => (
    <div className="mt-8">
      <h3 className="font-semibold mb-4 flex items-center">
        <Users className="w-5 h-5 mr-3" /> Popular Routes
      </h3>
      <div className="space-y-3">
        {directRoutes.filter(r => r.popular).map((route) => (
          <div
            key={route.id}
            onClick={() => handleRouteSelect(route)}
            className="p-4 border border-slate-200 rounded-md hover:bg-slate-50 cursor-pointer transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{route.from} → {route.to}</p>
                <p className="text-slate-500 text-sm">{route.distance} • {route.duration}</p>
              </div>
              <p className="font-medium">₹{route.pricing[formData.vehicle]?.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const BookingSummary = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="font-semibold mb-4">Booking Summary</h3>
        <div className="space-y-3">
          {[
            ['Route', `${selectedRoute.from} → ${selectedRoute.to}`],
            ['Distance', selectedRoute.distance],
            ['Duration', selectedRoute.duration],
            ['Date', formData.date],
            ['Time', formData.time],
            ['Vehicle', formData.vehicle.toUpperCase()],
            ['Estimated Fare', `₹${selectedRoute.pricing[formData.vehicle]?.toLocaleString() || '0'}`],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span>{label}:</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {!showConfirmation && (
        <button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
        >
          Check Availability & Fare
        </button>
      )}

      {showConfirmation && (
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 className="font-semibold mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
            Availability Confirmed!
          </h3>
          <p className="mb-4">
            Your ride from <strong>{selectedRoute.from}</strong> to <strong>{selectedRoute.to}</strong> on{' '}
            <strong>{formData.date}</strong> at <strong>{formData.time}</strong> is available.
          </p>
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors mb-3"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Confirm via WhatsApp
          </a>
          <button
            onClick={() => {
              setShowConfirmation(false);
              setSelectedRoute(null);
              setFormData(prev => ({ ...prev, from: '', to: '', date: '', time: '' }));
            }}
            className="w-full flex items-center justify-center px-6 py-3 bg-slate-200 text-slate-800 text-sm font-semibold rounded-lg hover:bg-slate-300 transition-colors"
          >
            Book Another Ride
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="bg-slate-50 py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Uttarakhand Rides</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
            <Link href="/taxi-trails" className="text-slate-600 hover:text-slate-900 transition-colors">Taxi Trails</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Desktop Layout */}
        <div className="hidden md:flex md:items-start md:gap-12">
          {/* Left: Booking Form */}
          <div className="w-[35%]">
            <div className="sticky top-16 bg-slate-50 p-6 rounded-xl border border-slate-200 max-h-[calc(100vh-120px)] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-3" /> Book Your Ride
              </h2>
              <BookingForm />
              {!selectedRoute && <PopularRoutes />}
            </div>
          </div>

          {/* Right: Route Feed */}
          <div className="w-[65%]">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Truck className="w-5 h-5 mr-3" /> Available Routes
              </h2>
              {selectedRoute ? (
                <BookingSummary />
              ) : (
                <div className="space-y-4">
                  <p className="text-slate-600">Select a route to see details and check availability.</p>
                  {directRoutes.map((route) => (
                    <div
                      key={route.id}
                      onClick={() => handleRouteSelect(route)}
                      className="p-6 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium">{route.from} → {route.to}</h3>
                        {route.popular && (
                          <span className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded">Popular</span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-slate-500">
                        <div>Distance:</div><div className="text-right">{route.distance}</div>
                        <div>Duration:</div><div className="text-right">{route.duration}</div>
                        <div>Sedan:</div><div className="text-right">₹{route.pricing.sedan.toLocaleString()}</div>
                        <div>SUV:</div><div className="text-right">₹{route.pricing.suv.toLocaleString()}</div>
                        <div>Innova:</div><div className="text-right">₹{route.pricing.innova.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-3" /> Book Your Ride
            </h2>
            <BookingForm mobile />
            {!selectedRoute && <PopularRoutes />}
          </div>

          {selectedRoute && (
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Truck className="w-5 h-5 mr-3" /> Route Details
              </h2>
              <BookingSummary />
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
          <p>&copy; {new Date().getFullYear()} Uttarakhand Rides. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="/" className="hover:text-slate-900">Home</a> |{' '}
            <a href="/taxi-trails" className="hover:text-slate-900">Taxi Trails</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
