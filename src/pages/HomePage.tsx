import React from 'react';
import type { Product } from '../data/products';
import { Hero } from '../components/Hero';
import { CompanyIntro } from '../components/CompanyIntro';
import { ProductPortfolioSection } from '../components/ProductPortfolioSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ManufacturingSection } from '../components/ManufacturingSection';
import { QualitySection } from '../components/QualitySection';
import { RDSection } from '../components/RDSection';
import { GlobalPresenceSection } from '../components/GlobalPresenceSection';
import { B2BPartnerCTA } from '../components/B2BPartnerCTA';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onOpenEnquiry: (productName?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenEnquiry,
  onSelectProduct,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenEnquiry={() => onOpenEnquiry()} />

      {/* 2. Company Introduction */}
      <CompanyIntro />

      {/* 3. Product Portfolio Showcase */}
      <ProductPortfolioSection
        onSelectProduct={onSelectProduct}
        onEnquire={onOpenEnquiry}
      />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Manufacturing Excellence */}
      <ManufacturingSection />

      {/* 6. Quality & Compliance */}
      <QualitySection />

      {/* 7. Research & Development */}
      <RDSection />

      {/* 8. Global Presence */}
      <GlobalPresenceSection onOpenEnquiry={() => onOpenEnquiry()} />

      {/* 9. B2B Partnership CTA */}
      <B2BPartnerCTA onOpenEnquiry={() => onOpenEnquiry()} />

      {/* 10. Contact Section */}
      <ContactSection />
    </div>
  );
};
