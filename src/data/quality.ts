export interface QualityPillar {
  title: string;
  shortDesc: string;
  description: string;
  metrics: string;
}

export const QUALITY_PILLARS: QualityPillar[] = [
  {
    title: 'Quality Management Systems (QMS)',
    shortDesc: 'Comprehensive procedural integrity across every production phase.',
    description: 'Digitized Quality Management System governing SOPs, deviations, CAPA (Corrective and Preventive Actions), change controls, and training compliance across all operational divisions.',
    metrics: '100% Audit Readiness'
  },
  {
    title: 'Quality Control Laboratory',
    shortDesc: 'State-of-the-art analytical instrumentation and wet-chemistry suites.',
    description: 'Equipped with High-Performance Liquid Chromatography (HPLC), Ultra-Performance Liquid Chromatography (UPLC), Gas Chromatography (GC), FT-IR spectrophotometers, and dissolution apparatus.',
    metrics: '40+ Analytical Instruments'
  },
  {
    title: 'Rigorous Batch Testing',
    shortDesc: 'Raw material, in-process, and finished formulation release verification.',
    description: 'Every individual batch undergoes three-tier validation: raw material analytical assay, in-process compression/filling checks, and finished product stability and purity confirmation.',
    metrics: '3-Tier Release Protocol'
  },
  {
    title: 'Documentation & Traceability',
    shortDesc: 'Data integrity, complete batch records, and serialization tracking.',
    description: 'End-to-end computerized traceability from active pharmaceutical ingredient (API) vendor lot receipts to final carton shipping dispatch barcodes.',
    metrics: '21 CFR Part 11 Compliant Systems'
  },
  {
    title: 'Regulatory Standards Framework',
    shortDesc: 'Standardized dossier dossiers prepared to international guidelines.',
    description: 'Regulatory affairs department maintaining updated CTD, ACTD, and eCTD submission dossiers with validated stability protocols adhering to ICH climatic zones I through IVb.',
    metrics: 'Zone IVb Validated'
  },
  {
    title: 'Continuous Quality Improvement',
    shortDesc: 'Proactive quality risk management and statistical process control.',
    description: 'Adoption of Quality by Design (QbD) principles and annual product quality reviews (APQR) to continually elevate formulation yields and purity margins.',
    metrics: 'Six Sigma & QbD Methodology'
  }
];

export interface ComplianceBadgeItem {
  badgeLabel: string;
  subtitle: string;
  scope: string;
  status: string;
  note: string;
}

export const COMPLIANCE_BADGES: ComplianceBadgeItem[] = [
  {
    badgeLabel: 'Certification / Compliance Badge',
    subtitle: 'Current Good Manufacturing Practice (cGMP)',
    scope: 'Solid Orals, Injectables & Liquid Manufacturing Facilities',
    status: 'Demo Plant Benchmark',
    note: 'Fictional/demo compliance badge placeholder for corporate demonstration.'
  },
  {
    badgeLabel: 'Certification / Compliance Badge',
    subtitle: 'Quality Management System Standard',
    scope: 'Quality Control, Assurance & Corporate Governance Framework',
    status: 'Demo System Standard',
    note: 'Fictional/demo compliance badge placeholder for corporate demonstration.'
  },
  {
    badgeLabel: 'Certification / Compliance Badge',
    subtitle: 'Good Laboratory Practice (GLP)',
    scope: 'Analytical Research & Physicochemical Quality Testing',
    status: 'Demo Lab Compliance',
    note: 'Fictional/demo compliance badge placeholder for corporate demonstration.'
  },
  {
    badgeLabel: 'Certification / Compliance Badge',
    subtitle: 'Environmental & Occupational Health Protocol',
    scope: 'Zero Liquid Discharge (ZLD) Effluent Treatment & Workplace Safety',
    status: 'Demo Environmental Audit',
    note: 'Fictional/demo compliance badge placeholder for corporate demonstration.'
  }
];
