import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Product } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ProductModal } from './components/ProductModal';
import { EnquireModal } from './components/EnquireModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { QualityPage } from './pages/QualityPage';
import { ResearchPage } from './pages/ResearchPage';
import { GlobalPresencePage } from './pages/GlobalPresencePage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEnquireOpen, setIsEnquireOpen] = useState<boolean>(false);
  const [enquireInitialProduct, setEnquireInitialProduct] = useState<string>('');

  const handleOpenEnquiry = (productName?: string) => {
    setEnquireInitialProduct(productName || '');
    setIsEnquireOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquireOpen(false);
    setEnquireInitialProduct('');
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
        
        {/* Navigation */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onSelectProduct={handleSelectProduct} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/products" 
              element={
                <ProductsPage 
                  onSelectProduct={handleSelectProduct} 
                  onEnquire={handleOpenEnquiry} 
                />
              } 
            />
            <Route 
              path="/manufacturing" 
              element={<ManufacturingPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/quality" 
              element={<QualityPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/research" 
              element={<ResearchPage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/global-presence" 
              element={<GlobalPresencePage onOpenEnquiry={() => handleOpenEnquiry()} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            {/* Catch-all fallback */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onSelectProduct={handleSelectProduct} 
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Global Interactive Modals */}
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseProductModal}
          onEnquire={(productName) => {
            handleCloseProductModal();
            handleOpenEnquiry(productName);
          }}
        />

        <EnquireModal
          isOpen={isEnquireOpen}
          onClose={handleCloseEnquiry}
          initialProduct={enquireInitialProduct}
        />

      </div>
    </Router>
  );
};

export default App;
