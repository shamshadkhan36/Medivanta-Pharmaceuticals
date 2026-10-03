export interface FacilityLine {
  id: string;
  title: string;
  annualCapacity: string;
  cleanroomGrade: string;
  equipment: string[];
  description: string;
  image: string;
}

export const MANUFACTURING_STATS = [
  { value: '100,000+', label: 'Sq. Ft. Built-up Area', subtext: 'Capped cleanroom suites & cGMP warehouses' },
  { value: '1.2 Billion', label: 'Solid Doses / Year', subtext: 'High-speed rotary tablet & capsule lines' },
  { value: '45 Million', label: 'Sterile Units / Year', subtext: 'Vials, ampoules & BFS large-volume parentals' },
  { value: '25 Million', label: 'Liquid Bottles / Year', subtext: 'Fully automated continuous filling lines' },
];

export const PRODUCTION_LINES: FacilityLine[] = [
  {
    id: 'solid-orals',
    title: 'Solid Oral Dosages (Tablets & Capsules)',
    annualCapacity: '1.2 Billion Units',
    cleanroomGrade: 'Class 100,000 (ISO 8) / RH < 35%',
    equipment: [
      'High-shear granulators & Fluid Bed Dryers (FBD)',
      'Double-sided rotary tablet compression presses',
      'Auto-coaters with perforation drum technology',
      'High-speed automated Alu-Alu and Blister packaging lines'
    ],
    description: 'Designed for high-throughput batch manufacturing with automated weight checking, metal detection, and dehumidified packaging suites.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sterile-injectables',
    title: 'Aseptic Injectables & Lyophilization',
    annualCapacity: '45 Million Units',
    cleanroomGrade: 'Class 100 (ISO 5) Isolators & Class 10,000 (ISO 7)',
    equipment: [
      'Closed barrier isolators with laminar airflow',
      'Industrial lyophilizers (freeze dryers)',
      'Continuous depyrogenation tunnels (dry heat 300°C)',
      'Automated high-resolution optical particulate inspection systems'
    ],
    description: 'Critical parenteral manufacturing featuring closed RABS/isolator technology to safeguard complete sterility and zero human intervention during filling.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'liquid-orals',
    title: 'Oral Liquids, Syrups & Suspensions',
    annualCapacity: '25 Million Bottles',
    cleanroomGrade: 'Class 100,000 (ISO 8)',
    equipment: [
      'SS 316L mirror-finish manufacturing vessels',
      'Inline homogenizers & sterile cartridge filtration',
      'Continuous bottle washing, sterilization, filling & capping monoblock',
      'Vision-assisted volume verification & sticker labeling'
    ],
    description: 'Complete closed-loop processing from sugar melting and filtration to sterile filling and automated secondary cartoning.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'topicals-creams',
    title: 'Topical Creams, Ointments & Gels',
    annualCapacity: '18 Million Tubes',
    cleanroomGrade: 'Class 100,000 (ISO 8)',
    equipment: [
      'Vacuum emulsification reactors with planetary scrapers',
      'High-precision tube filling & ultrasonic sealing machines',
      'Online leak test chambers and barcode serialization',
      'Laminated and aluminium tube packaging units'
    ],
    description: 'Equipped for sensitive emulsion systems, guaranteeing uniform particle distribution, smooth texture, and airless vacuum tube packaging.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'warehouse-logistics',
    title: 'Central Warehouse & Cold-Chain Hub',
    annualCapacity: '6,500 Pallet Positions',
    cleanroomGrade: 'Controlled 15°C–25°C & 2°C–8°C Cold Rooms',
    equipment: [
      'Multi-tier narrow-aisle racking systems',
      '24/7 computerized temperature and humidity data loggers',
      'Dedicated quarantine, released, and rejection bays',
      'Backup diesel generators ensuring uninterrupted refrigeration'
    ],
    description: 'Advanced cGMP compliant material handling with automated barcode batch tracking, computerized ERP inventory release, and validated cold-chain transport.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  }
];
