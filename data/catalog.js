// app/data/catalog.js
export const masterPackages = [
  {
    id: 'garhwal-hills-explorer',
    name: 'Garhwal Hills Explorer Taxi Circuit',
    duration: '3 Nights / 4 Days',
    route: 'Jolly Grant ➔ Rishikesh ➔ Haridwar ➔ Dehradun City',
    description: 'Explore the spiritual and scenic heart of Garhwal region with visits to Rishikesh, Haridwar, and Dehradun.',
    pricing: {
      sedan: 18000,
      suv: 24000,
      innova: 30000
    },
    tags: ['Spiritual', 'Scenic', 'Heritage'],
    highlights: [
      'Triveni Ghat & Ganga Aarti in Rishikesh',
      'Har Ki Pauri & Mansa Devi Temple in Haridwar',
      'Robber\'s Cave & Sahastradhara in Dehradun',
      'Comfortable overnight stays'
    ]
  },
  {
    id: 'sacred-char-dham',
    name: 'Sacred Char Dham Taxi Journey',
    duration: '9 Nights / 10 Days',
    route: 'Haridwar/Rishikesh to Yamunotri, Gangotri, Kedarnath, Badrinath',
    description: 'The most sacred pilgrimage circuit in Hinduism covering all four holy abodes in the Himalayas.',
    pricing: {
      sedan: 45000,
      suv: 60000,
      innova: 75000
    },
    tags: ['Pilgrimage', 'Adventure', 'Spiritual'],
    highlights: [
      'Yamunotri - Source of Yamuna River',
      'Gangotri - Origin of Ganges River',
      'Kedarnath - One of the 12 Jyotirlingas',
      'Badrinath - Holy abode of Lord Vishnu',
      'Experienced drivers familiar with mountain routes'
    ]
  },
  {
    id: 'kumaon-explorer',
    name: 'Kumaon Explorer Taxi Circuit',
    duration: '4 Nights / 5 Days',
    route: 'Pantnagar ➔ Kathgodam ➔ Nainital ➔ Bhimtal',
    description: 'Discover the serene lakes and hill stations of the Kumaon region.',
    pricing: {
      sedan: 22000,
      suv: 29000,
      innova: 36000
    },
    tags: ['Lakes', 'Hill Stations', 'Relaxation'],
    highlights: [
      'Nainital - The Lake District of India',
      'Bhimtal - Largest lake in Kumaon region',
      'Kathgodam - Gateway to Kumaon',
      'Boating, nature walks, and panoramic views',
      'Peaceful retreat from city life'
    ]
  },
  {
    id: 'delhi-dehradun-mussoorie',
    name: 'Delhi–Dehradun–Mussoorie Taxi Corridor',
    duration: '3 Nights / 4 Days',
    route: 'Delhi ➔ Dehradun ➔ Mussoorie ➔ Delhi',
    description: 'Classic weekend getaway combining the capital city with Queen of Hills.',
    pricing: {
      sedan: 20000,
      suv: 26000,
      innova: 32000
    },
    tags: ['Weekend Getaway', 'Hill Station', 'Colonial'],
    highlights: [
      'Mussoorie - Queen of Hills with panoramic views',
      'Kempty Falls & Gun Hill',
      'Dehradun - Educational hub of Uttarakhand',
      'Robber\'s Cave & Tapkeshwar Temple',
      'Perfect blend of hill station charm and city convenience'
    ]
  },
  {
    id: 'mussoorie-dhanaulti-chakrata',
    name: 'Mussoorie, Dhanaulti & Chakrata Tour Package',
    duration: '3 Nights / 4 Days',
    route: 'Dehradun ➔ Mussoorie ➔ Dhanaulti ➔ Chakrata',
    description: 'Offbeat hill station tour covering three lesser-known but beautiful destinations.',
    pricing: {
      sedan: 21000,
      suv: 28000,
      innova: 35000
    },
    tags: ['Offbeat', 'Adventure', 'Nature'],
    highlights: [
      'Mussoorie - Colonial charm and Mall Road',
      'Dhanaulti - Eco-parks and adventure activities',
      'Chakrata - Hidden gem with Tiger Falls',
      'Lesser crowds, pristine nature',
      'Ideal for photographers and nature lovers'
    ]
  },
  {
    id: 'nainital-ranikhet-almora',
    name: 'Nainital, Ranikhet & Almora Tour Package',
    duration: '4 Nights / 5 Days',
    route: 'Nainital ➔ Ranikhet ➔ Almora/Kausani',
    description: 'Explore the eastern Kumaon region with its lakes, hills, and panoramic Himalayan views.',
    pricing: {
      sedan: 25000,
      suv: 33000,
      innova: 41000
    },
    tags: ['Lakes', 'Himalayan Views', 'Culture'],
    highlights: [
      'Nainital Lake - Boating and scenic promenade',
      'Ranikhet - Chaubatia Gardens and golf course',
      'Almora - Cultural hub with ancient temples',
      'Kausani - \"Switzerland of India\" with Himalayan views',
      'Zero-point panoramic view of Himalayan peaks'
    ]
  },
  {
    id: 'devbhoomi-pilgrimage',
    name: 'Devbhoomi Pilgrimage Taxi Circuit',
    duration: '2 Nights / 3 Days',
    route: 'Dehradun ➔ Neelkanth Mahadev, Jolly Grant ➔ Haridwar',
    description: 'Short but spiritually enriching pilgrimage covering important temples and ashrams.',
    pricing: {
      sedan: 12000,
      suv: 16000,
      innova: 20000
    },
    tags: ['Pilgrimage', 'Short Trip', 'Spiritual'],
    highlights: [
      'Neelkanth Mahadev Temple - Where Lord Shiva drank poison',
      'Jolly Grant Airport area - Spiritual significance',
      'Haridwar - Gateway to God with Ganga Aarti',
      'Perfect for weekend spiritual retreat',
      'Comfortable travel with experienced drivers'
    ]
  },
  {
    id: 'grand-uttarakhand-tour',
    name: 'Grand Uttarakhand Taxi Tour',
    duration: '11 Nights / 12 Days',
    route: 'Ultimate intercity and hill loop',
    description: 'Comprehensive tour covering the best of Garhwal and Kumaon regions.',
    pricing: {
      sedan: 85000,
      suv: 110000,
      innova: 135000
    },
    tags: ['Comprehensive', 'Ultimate Experience', 'All Regions'],
    highlights: [
      'Cover all major destinations in Uttarakhand',
      'Both Garhwal and Kumaon regions',
      'Major pilgrimage sites and hill stations',
      'Flexible itinerary with expert guidance',
      'The ultimate Uttarakhand experience'
    ]
  }
];

// Helper function to format pricing for display
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

// Helper function to generate WhatsApp message
export const generateWhatsAppMessage = (type, data) => {
  let message = '';

  if (type === 'package' && data.package) {
    const pkg = data.package;
    message = `Hello, I'm interested in booking:\n\n`;
    message += `*Package:* ${pkg.name}\n`;
    message += `*Duration:* ${pkg.duration}\n`;
    message += `*Route:* ${pkg.route}\n`;
    message += `*Vehicle:* ${data.vehicle}\n`;
    message += `*Price:* ${formatPrice(pkg.pricing[data.vehicle.toLowerCase()])}\n`;
    if data.dates {
      message += `*Preferred Dates:* ${data.dates}\n`;
    }
    if data.notes {
      message += `*Special Requests:* ${data.notes}\n`;
    }
    message += `\nPlease provide availability and booking details.';
  } else if (type === 'ride' && data) {
    message = `Hello, I'd like to book a taxi:\n\n`;
    message += `*From:* ${data.from}\n`;
    message += `*To:* ${data.to}\n`;
    message += `*Date:* ${data.date}\n`;
    message += `*Time:* ${data.time}\n`;
    message += `*Vehicle:* ${data.vehicle}\n`;
    if data.notes {
      message += `*Special Requests:* ${data.notes}\n`;
    }
    message += `\nPlease confirm availability and fare.';
  }

  // Encode message for WhatsApp URL
  return encodeURIComponent(message);
};

export default masterPackages;