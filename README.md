# Uttarakhand Rides & Taxi Trails

A premium Next.js 14 application for a dual-brand taxi service platform featuring:
- **Uttarakhand Rides**: Point-to-point, airport, and intercity taxi transfers
- **Taxi Trails by Uttarakhand Rides**: Experiential mountain tour circuits and pilgrimages

## Features
 
- **Modern Tech Stack**: Next.js 14 (App Router), Tailwind CSS, Lucide React Icons
- **Premium UI/UX**: Ultra-minimalist executive design with strict left-alignment
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Static Data Engine**: JSON-based master package catalog
- **WhatsApp Integration**: Deep-linking for seamless inquiries and bookings
- **No Backend Required**: Fully frontend solution using static data and WhatsApp API

## Project Structure

```
app/
├── data/
│   └── catalog.js          # Master package data engine
├── uk-rides/
│   └── page.js             # Uttarakhand Rides directory
├── taxi-trails/
│   └── page.js             # Taxi Trails catalog
├── layout.js               # Root layout
├── page.js                 # Home/gateway page
└── globals.css             # Tailwind base styles
```

## Key Components

### 1. Master Data Engine (`app/data/catalog.js`)
- Contains 8 pre-defined tour packages with pricing for Sedan, SUV, and Innova Crysta
- Includes helper functions for price formatting and WhatsApp message generation

### 2. Root Gateway (`app/page.js`)
- Luxury landing page acting as a split portal
- Left/Top: Uttarakhand Rides (Swift Cab Booking)
- Right/Bottom: Taxi Trails (Curated Mountain Circuits)
- Strict left-alignment and premium aesthetics

### 3. Uttarakhand Rides Directory (`app/uk-rides/page.js`)
- Desktop: 35% booking form (left) + 65% route feed (right)
- Mobile: Single vertical stack
- Features: Sticky form, route selection, availability checking, WhatsApp confirmation

### 4. Taxi Trails Catalog (`app/taxi-trails/page.js`)
- Beautiful, highly scannable grid displaying all 8 master packages
- Each card shows: name, duration, route tags, pricing metrics, and highlights
- Action button: "Inquire via WhatsApp" with pre-filled package details

## Design Philosophy

- **Aesthetic**: Ultra-premium, minimalist executive vibe
- **Colors**: Deep slate (slate-900), zinc, and pure white backgrounds
- **Typography**: Strict left-alignment for all text, headers, form labels, and data blocks
- **Responsiveness**: Mobile-first with fluid collapse to vertical stack on mobile
- **Desktop Layout**: Modern side-by-side split layout (similar to Uber's web booking)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Packages Included

1. Garhwal Hills Explorer Taxi Circuit
2. Sacred Char Dham Taxi Journey
3. Kumaon Explorer Taxi Circuit
4. Delhi–Dehradun–Mussoorie Taxi Corridor
5. Mussoorie, Dhanaulti & Chakrata Tour Package
6. Nainital, Ranikhet & Almora Tour Package
7. Devbhoomi Pilgrimage Taxi Circuit
8. Grand Uttarakhand Taxi Tour

## Customization

- Update package data in `app/data/catalog.js`
- Modify colors and styling in `tailwind.config.js`
- Adjust content in individual page files
- Replace placeholder WhatsApp functionality with actual API integration

## Deployment

This application can be deployed to any platform supporting Next.js applications:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Traditional Node.js hosting

---
*Built as a premium competitor to Uttarakhand.cab using a self-cannibalization/dual-brand strategy to capture 100% market share.*
