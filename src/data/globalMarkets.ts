export interface GlobalMarket {
  id: string;
  name: string;
  region: string;
  keyCountries: string[];
  activeDossiers: string;
  distributorPartners: string;
  description: string;
  therapeuticFocus: string;
  mapCoords: { x: number; y: number }; // percentage on map (0-100)
}

export const GLOBAL_MARKETS: GlobalMarket[] = [
  {
    id: 'india',
    name: 'India & South Asia',
    region: 'Domestic & Regional Hub',
    keyCountries: ['India', 'Nepal', 'Sri Lanka', 'Bhutan'],
    activeDossiers: '85+ Formulations',
    distributorPartners: '220+ Distributors',
    description: 'Extensive domestic pan-India hospital distribution, institutional supply contracts, and regional ethical marketing networks.',
    therapeuticFocus: 'Antibiotics, Gastroenterology, Critical Care Injectables & Nutrition',
    mapCoords: { x: 68, y: 52 }
  },
  {
    id: 'middle-east',
    name: 'Middle East (GCC & Levant)',
    region: 'Middle East',
    keyCountries: ['UAE', 'Saudi Arabia', 'Oman', 'Kuwait', 'Jordan'],
    activeDossiers: '40+ Formulations (MOH Ready)',
    distributorPartners: '65+ Distribution Partners',
    description: 'Supplying private hospital networks, government health tenders, and retail pharmacy consortiums with climate-stabilized formulations.',
    therapeuticFocus: 'Sterile Injectables, Cardiovascular, Dermatology & Pediatric Care',
    mapCoords: { x: 57, y: 47 }
  },
  {
    id: 'africa',
    name: 'Sub-Saharan & North Africa',
    region: 'Africa',
    keyCountries: ['Kenya', 'Nigeria', 'Ghana', 'Tanzania', 'Egypt'],
    activeDossiers: '60+ Formulations registered',
    distributorPartners: '95+ Importers & Wholesalers',
    description: 'Long-standing supply partnerships providing essential generic pharmaceuticals, anti-infectives, and pediatric medications.',
    therapeuticFocus: 'Anti-infectives, Respiratory Syrups, Antimalarials & ORS',
    mapCoords: { x: 52, y: 58 }
  },
  {
    id: 'southeast-asia',
    name: 'Southeast Asia (ASEAN)',
    region: 'Southeast Asia',
    keyCountries: ['Vietnam', 'Philippines', 'Myanmar', 'Cambodia', 'Indonesia'],
    activeDossiers: '45+ ACTD Dossiers Submitted',
    distributorPartners: '70+ Commercial Partners',
    description: 'Fast-growing presence driven by ACTD-format regulatory filings, hospital tenders, and strategic localized brand alliances.',
    therapeuticFocus: 'Oral Solid Dosages, High-potency Parenterals & Pediatric Oral Drops',
    mapCoords: { x: 78, y: 56 }
  },
  {
    id: 'cis-markets',
    name: 'CIS & Central Asian Markets',
    region: 'CIS Markets',
    keyCountries: ['Uzbekistan', 'Kazakhstan', 'Georgia', 'Armenia'],
    activeDossiers: '30+ Formulations in Registration',
    distributorPartners: '50+ Distributors',
    description: 'Targeted institutional healthcare supplies with bilingual Russian/English product packaging and validated stability dossiers.',
    therapeuticFocus: 'Analgesics, Neurological formulations & High-potency Injectables',
    mapCoords: { x: 62, y: 36 }
  }
];

export const PARTNERSHIP_PERKS = [
  {
    title: 'CTD / eCTD Dossier Dossiers',
    desc: 'Ready-to-submit Module 1 to 5 dossiers with accelerated and real-time stability data in Zone IVb conditions.'
  },
  {
    title: 'Exclusive Territory Distribution',
    desc: 'Contractual territorial exclusivity options for authorized pharmaceutical distributors and market holders.'
  },
  {
    title: 'Customized Packaging & Branding',
    desc: 'Multilingual artwork, local regulatory barcoding, and market-tailored packaging formats.'
  },
  {
    title: 'Strict Schedule Adherence',
    desc: 'Reliable lead times, seamless sea/air freight documentation, and bonded cold-chain dispatch.'
  }
];
