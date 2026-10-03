export interface Product {
  id: string;
  name: string;
  genericName: string;
  category: 'Tablets & Capsules' | 'Syrups & Suspensions' | 'Injectables' | 'Topical Preparations' | 'Nutraceuticals' | 'Pediatric Care';
  dosageForm: string;
  strength: string;
  therapeuticSegment: string;
  packaging: string;
  shelfLife: string;
  storageCondition: string;
  description: string;
  keyHighlights: string[];
  regulatoryDossier: string;
  imageUrl: string;
  isDemo: boolean;
}

export const PRODUCT_CATEGORIES = [
  'All Categories',
  'Tablets & Capsules',
  'Syrups & Suspensions',
  'Injectables',
  'Topical Preparations',
  'Nutraceuticals',
  'Pediatric Care'
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'medivanta-cv-625',
    name: 'Medivanta-CV 625 Tablets',
    genericName: 'Amoxicillin & Potassium Clavulanate Tablets USP (Demo Formula)',
    category: 'Tablets & Capsules',
    dosageForm: 'Film-Coated Tablet',
    strength: '500 mg + 125 mg',
    therapeuticSegment: 'Anti-Infective / Broad Spectrum Antibiotic',
    packaging: '10 x 1 x 10 Alu-Alu Strip Packaging',
    shelfLife: '24 Months',
    storageCondition: 'Store in a dry place below 25°C. Protect from moisture and direct sunlight.',
    description: 'A benchmark demo broad-spectrum antibacterial formulation produced under dehumidified Class 100,000 cleanroom environments to maintain maximum stability.',
    keyHighlights: [
      'Manufactured in humidity-controlled suites (<30% RH)',
      'High-stability Alu-Alu strip barrier',
      'ICH stability zone IVb compliant formulation',
      'Batch-to-batch dissolution consistency'
    ],
    regulatoryDossier: 'CTD / ACTD Format Dossier Available',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'vitacore-plus-softgels',
    name: 'VitaCore Plus Softgels',
    genericName: 'Multivitamins, Minerals, Lycopene & Ginseng Complex (Demo Formula)',
    category: 'Nutraceuticals',
    dosageForm: 'Soft Gelatin Capsule',
    strength: 'Balanced Daily Micronutrient Matrix',
    therapeuticSegment: 'Preventive Healthcare & Vitality',
    packaging: '3 x 10 Blister Pack in UV-Shield Carton',
    shelfLife: '24 Months',
    storageCondition: 'Store in a cool, dry place. Keep out of reach of children.',
    description: 'Premium nutraceutical formulation developed for restorative vitality, metabolic cellular protection, and immune resilience support.',
    keyHighlights: [
      'Encapsulated in pharmaceutical-grade bovine-free shell options',
      'Fortified with standardized antioxidant extracts',
      'Enhanced bioavailability lipid-base vehicle',
      'Heavy metal & micro-contaminant testing cleared'
    ],
    regulatoryDossier: 'Export Health Certificate & Certificate of Analysis',
    imageUrl: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'gastroease-dsr',
    name: 'GastroEase DSR Capsules',
    genericName: 'Rabeprazole Sodium (EC) & Domperidone (SR) Capsules (Demo Formula)',
    category: 'Tablets & Capsules',
    dosageForm: 'Capsule with Enteric-Coated & Sustained-Release Pellets',
    strength: '20 mg EC + 30 mg SR',
    therapeuticSegment: 'Gastroenterology / Acid Peptic Disorders',
    packaging: '10 x 10 Alu-Alu Moisture-Proof Blister',
    shelfLife: '24 Months',
    storageCondition: 'Store at temperatures not exceeding 30°C. Protect from light.',
    description: 'Biphasic dual-release technology featuring rapid gastric proton-pump suppression paired with prolonged upper GI motility support.',
    keyHighlights: [
      'Dual-pellet release profile (Immediate + Sustained)',
      'Enteric polymer coating designed for intestinal dissolution',
      'Superior acid resistance verified by HPLC testing',
      'Automated high-speed capsule filling'
    ],
    regulatoryDossier: 'CTD / eCTD Module 3 Available',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'respiracare-syrup',
    name: 'RespiraCare Broncho Syrup',
    genericName: 'Levosalbutamol, Ambroxol HCl & Guaiphenesin Expectorant (Demo Formula)',
    category: 'Syrups & Suspensions',
    dosageForm: 'Oral Liquid / Expectorant',
    strength: '1 mg + 30 mg + 50 mg per 5 ml',
    therapeuticSegment: 'Respiratory Care & Pulmonology',
    packaging: '100 ml Amber PET Bottle with Calibrated Dispenser Cup',
    shelfLife: '36 Months',
    storageCondition: 'Store below 25°C. Do not freeze. Shake well before use.',
    description: 'Palatable, non-sedating multi-action respiratory suspension formulated for bronchospasm relief, mucus liquefaction, and mucociliary clearance.',
    keyHighlights: [
      'Sugar-free, suitable for diabetic consideration',
      'Prepared in closed sterile stainless-steel 316L reactors',
      'Calibrated measuring cup for precision pediatric/adult dosing',
      'Microbial limit validated per international pharmacopeia'
    ],
    regulatoryDossier: 'Module 3 Quality Dossier & Stability Data',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'dermaclear-skin-cream',
    name: 'Dermaclear Advanced Cream',
    genericName: 'Clobetasol Propionate & Nadifloxacin Topical Cream (Demo Formula)',
    category: 'Topical Preparations',
    dosageForm: 'Topical Emulsion / Cream',
    strength: '0.05% w/w + 1% w/w',
    therapeuticSegment: 'Dermatology & Skin Barrier Care',
    packaging: '30 g Collapsible Laminated Aluminium Tube',
    shelfLife: '24 Months',
    storageCondition: 'Store below 25°C in a dry place. Do not freeze.',
    description: 'Micro-emulsified topical formulation combining anti-inflammatory activity with targeted dermatological anti-infective protection.',
    keyHighlights: [
      'Micro-particulate homogenization for smooth topical absorption',
      'Hermetically sealed tamper-evident orifice',
      'Zero greasy residue with optimal skin barrier adherence',
      'Skin tolerability & dermal toxicity profile documented'
    ],
    regulatoryDossier: 'eCTD Regulatory Dossier Available',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'neurobalance-tablets',
    name: 'NeuroBalance Forte Tablets',
    genericName: 'Methylcobalamin, Alpha Lipoic Acid & Pyridoxine (Demo Formula)',
    category: 'Tablets & Capsules',
    dosageForm: 'Bilayer Film-Coated Tablet',
    strength: '1500 mcg + 100 mg + 3 mg',
    therapeuticSegment: 'Neurology & Peripheral Nerve Support',
    packaging: '10 x 10 Alu-Alu Blister Pack',
    shelfLife: '24 Months',
    storageCondition: 'Store protected from moisture and light below 25°C.',
    description: 'Targeted neuro-protective complex engineered to support nerve myelin regeneration, reduce oxidative cellular stress, and maintain nerve conduction velocity.',
    keyHighlights: [
      'High-purity biologically active Mecobalamin form',
      'Stable co-formulation of light-sensitive B-vitamins',
      'Bilayer compression minimizing inter-ingredient interaction',
      'Accelerated 6-month stability confirmed'
    ],
    regulatoryDossier: 'CTD / ACTD Modules 1-5 Ready',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'sterile-ceftri-1000',
    name: 'Sterile Ceftri-1000 Injection',
    genericName: 'Ceftriaxone Sodium Sterile Dry Powder for Injection USP (Demo Formula)',
    category: 'Injectables',
    dosageForm: 'Lyophilized / Sterile Dry Powder for Injection',
    strength: '1000 mg (1.0 g)',
    therapeuticSegment: 'Critical Care / Cephalosporin Antibiotic',
    packaging: 'Molded USP Type-I Borosilicate Glass Vial + 10 ml Sterile WFI',
    shelfLife: '36 Months',
    storageCondition: 'Store below 25°C. Protect from light.',
    description: 'Sterile critical-care injectable manufactured in Class 100 laminar airflow isolators with automated particulate inspection.',
    keyHighlights: [
      'Class A / ISO 5 aseptic isolator vial filling',
      'Endotoxin tested below international pharmacopeial thresholds',
      'Automated 100% camera-assisted particulate inspection',
      'Supplied with hermetically sealed USP Type-I water for injection'
    ],
    regulatoryDossier: 'Full eCTD Dossier with Process Validation Reports',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'pediacalm-drops',
    name: 'PediaCalm Colic Drops',
    genericName: 'Simethicone, Dill Oil & Fennel Oil Oral Drops (Demo Formula)',
    category: 'Pediatric Care',
    dosageForm: 'Oral Pediatric Drops with Calibrated Dropper',
    strength: '40 mg + 0.005 ml + 0.0007 ml per ml',
    therapeuticSegment: 'Pediatric Care & Infant Gastrointestinal Comfort',
    packaging: '15 ml Amber Glass Bottle with Safety Cap & CE Dropper',
    shelfLife: '24 Months',
    storageCondition: 'Store in a cool dry place. Protect from heat and light.',
    description: 'Gentle, pediatric-optimized formulation for rapid alleviation of infantile colic, gas entrapment, and abdominal spasm.',
    keyHighlights: [
      'Formulated strictly alcohol-free and artificial dye-free',
      'Ultra-fine emulsion ensuring uniform dosing without aggressive agitation',
      'Tamper-evident child-resistant safety packaging',
      'Tested under stringent bio-burden testing protocols'
    ],
    regulatoryDossier: 'Product Master File & Batch Manufacturing Record',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'infulytes-iv-500',
    name: 'InfuLytes-Balanced IV Solution',
    genericName: 'Multiple Electrolytes & Dextrose Infusion USP (Demo Formula)',
    category: 'Injectables',
    dosageForm: 'Sterile Large Volume Parenteral (LVP)',
    strength: 'Balanced Ringer Lactate Osmolarity',
    therapeuticSegment: 'Critical Care / Fluid Resuscitation',
    packaging: '500 ml Non-PVC Non-DEHP Self-Collapsing Infusion Bag',
    shelfLife: '24 Months',
    storageCondition: 'Store at 20°C to 25°C. Do not freeze.',
    description: 'Aseptic Form-Fill-Seal (FFS) manufactured intravenous solution for rapid fluid electrolyte restoration in surgical and emergency settings.',
    keyHighlights: [
      'Advanced Blow-Fill-Seal / Form-Fill-Seal technology',
      'DEHP-free and latex-free medical container closure',
      'Sterility assurance level (SAL) 10^-6 autoclaved',
      'Dual access ports with sterile peel foil protection'
    ],
    regulatoryDossier: 'CTD Modules 1-4 with Impurity Profiling',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'osteoflex-d3-max',
    name: 'OsteoFlex-D3 Max Softgels',
    genericName: 'Cholecalciferol (Vitamin D3) 60,000 IU Softgels (Demo Formula)',
    category: 'Nutraceuticals',
    dosageForm: 'Soft Gelatin Capsule',
    strength: '60,000 International Units',
    therapeuticSegment: 'Bone Health & Calcium Homeostasis',
    packaging: '1 x 4 Blister Strip Pack / 10 x 4 Dispenser Box',
    shelfLife: '24 Months',
    storageCondition: 'Store in cool and dry place below 25°C.',
    description: 'High-potency therapeutic cholecalciferol formulation dissolved in medium-chain triglycerides for optimal intestinal lipid micelle absorption.',
    keyHighlights: [
      'MCT oil vehicle for superior bioavailability',
      'Light-protective amber gelatin capsule shell',
      'Stability across diverse climatic zones',
      'Standardized assay verification via HPLC'
    ],
    regulatoryDossier: 'Certificate of Free Sale & Stability Studies',
    imageUrl: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'pulmocough-dx-syrup',
    name: 'PulmoCough-DX Suspension',
    genericName: 'Dextromethorphan HBr, Chlorpheniramine & Phenylephrine (Demo Formula)',
    category: 'Syrups & Suspensions',
    dosageForm: 'Oral Suspension',
    strength: '10 mg + 2 mg + 5 mg per 5 ml',
    therapeuticSegment: 'Cough, Cold & Allergic Rhinitis',
    packaging: '100 ml Pet Bottle with Safety Cap',
    shelfLife: '36 Months',
    storageCondition: 'Store below 25°C in a dry place.',
    description: 'Triple-combination antitussive, decongestant and anti-histaminic oral liquid with consistent suspension viscosity and taste-masking.',
    keyHighlights: [
      'Micro-encapsulated active taste-masking technology',
      'Non-drowsy balanced formulation profile',
      'Multi-dose container preservation validated',
      'Compliant with international heavy metal limits'
    ],
    regulatoryDossier: 'ASEAN Common Technical Dossier (ACTD)',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'healmelt-burn-ointment',
    name: 'HealMelt Barrier Ointment',
    genericName: 'Silver Sulfadiazine & Chlorhexidine Gluconate Ointment (Demo Formula)',
    category: 'Topical Preparations',
    dosageForm: 'Topical Ointment',
    strength: '1.0% w/w + 0.2% w/w',
    therapeuticSegment: 'Wound Care, Burns & Tissue Healing',
    packaging: '50 g Laminated Cleanroom Tube',
    shelfLife: '24 Months',
    storageCondition: 'Store at room temperature below 25°C. Do not freeze.',
    description: 'Sterile-manufactured antimicrobial burn and wound barrier matrix providing broad antiseptic shielding against hospital pathogen infiltration.',
    keyHighlights: [
      'Aseptic homogenization and filling technology',
      'Broad antibacterial activity including resistant strains',
      'High thermal stability for tropical supply chains',
      'Minimal skin maceration formulation'
    ],
    regulatoryDossier: 'CTD Module 3 & Biological Safety Data',
    imageUrl: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  }
];
