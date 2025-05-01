import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, ComponentType } from 'react';
import RabbitHoleModal from "./components/RabbitHoleModal";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

// Enhanced lazy loading function with preloading capability
function preloadable<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
): { Component: React.LazyExoticComponent<T>; preload: () => void } {
  const Component = lazy(importFunc);
  const preload = () => importFunc();
  return { Component, preload };
}

// Preload the most common pages
const { Component: Index } = preloadable(() => import("./pages/Index"));
const { Component: ManifestoPage } = preloadable(() => import("./pages/Manifesto"));
const { Component: LearnPage } = preloadable(() => import("./pages/Learn"));
const { Component: ResourcesPage } = preloadable(() => import("./pages/Resources"));
const { Component: AboutPage } = preloadable(() => import("./pages/About"));

// Lazy load remaining pages
const PrinciplesPage = lazy(() => import("./pages/Principles"));
const CommunityPage = lazy(() => import("./pages/Community"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const RabbitHolePage = lazy(() => import("./pages/RabbitHole"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfService"));
const FinancialEducationPage = lazy(() => import("./pages/FinancialEducation"));
const NetworkedRevolutionPage = lazy(() => import("./pages/NetworkedRevolution"));
const MathematicalMoneyPage = lazy(() => import("./pages/MathematicalMoney"));
const UnconfiscatableAssetPage = lazy(() => import("./pages/UnconfiscatableAsset"));
const EnergyAlchemyPage = lazy(() => import("./pages/EnergyAlchemy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GlobalGamePage = lazy(() => import("./pages/GlobalGame"));
const LastFreeMarketPage = lazy(() => import("./pages/LastFreeMarket"));
const TimeTravelersPortfolioPage = lazy(() => import("./pages/TimeTravelersPortfolio"));
const DigitalHomesteadingPage = lazy(() => import("./pages/DigitalHomesteading"));
const GeopoliticalShieldPage = lazy(() => import("./pages/GeopoliticalShield"));
const PerspectivesPage = lazy(() => import("./pages/Perspectives"));
const Misconceptions = lazy(() => import("./pages/Misconceptions"));
const GetStartedPage = lazy(() => import("./pages/GetStarted"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ConsultingPage = lazy(() => import("./pages/Consulting"));
const EducationPage = lazy(() => import("./pages/Education"));
const Advisory = lazy(() => import("./pages/Advisory"));
const Glossary = lazy(() => import("./pages/Glossary"));
const ValuePreservationArticle = lazy(() => import("./pages/ValuePreservation"));
const TemporalRebellionPage = lazy(() => import("./pages/TemporalRebellion"));
const DigitalPhysicsRevolutionPage = lazy(() => import("./pages/DigitalPhysicsRevolution"));
const MonetaryEvolutionPage = lazy(() => import("./pages/MonetaryEvolution"));
const BitcoinVsCryptoPage = lazy(() => import("./pages/BitcoinVsCrypto"));
const PhilosophicalFoundationsPage = lazy(() => import("./pages/PhilosophicalFoundations"));

// Lazy load course components
const BeginnerCourse = lazy(() => import("./components/BeginnerCourse"));
const IntermediateCourse = lazy(() => import("./components/IntermediateCourse"));
const AdvancedCourse = lazy(() => import("./components/AdvancedCourse"));

// Lazy load course modules
const WhatIsMoney = lazy(() => import("./components/beginner/WhatIsMoney"));
const StoreOfValue = lazy(() => import("./components/beginner/StoreOfValue"));
const BitcoinFundamentals = lazy(() => import("./components/beginner/BitcoinFundamentals"));
const BitcoinWallets = lazy(() => import("./components/beginner/BitcoinWallets"));
const BitcoinDesign = lazy(() => import("./components/intermediate/BitcoinDesign"));
const ConsensusMining = lazy(() => import("./components/intermediate/ConsensusMining"));
const BitcoinScripting = lazy(() => import("./components/advanced/BitcoinScripting"));

// Simple loading component
const LoadingSpinner = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-black">
    <div className="h-16 w-16 rounded-full border-4 border-orange-500/30 border-t-orange-500 animate-spin"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <RabbitHoleModal />
          <Routes>
          <Route path="/" element={<Suspense fallback={<LoadingSpinner />}><Index /></Suspense>} />
          <Route path="/manifesto" element={<Suspense fallback={<LoadingSpinner />}><ManifestoPage /></Suspense>} />
          <Route path="/principles" element={<Suspense fallback={<LoadingSpinner />}><PrinciplesPage /></Suspense>} />
          <Route path="/learn" element={<Suspense fallback={<LoadingSpinner />}><LearnPage /></Suspense>} />
          <Route path="/learn/beginner" element={<Suspense fallback={<LoadingSpinner />}><BeginnerCourse /></Suspense>} />
          <Route path="/learn/intermediate" element={<Suspense fallback={<LoadingSpinner />}><IntermediateCourse /></Suspense>} />
          <Route path="/learn/advanced" element={<Suspense fallback={<LoadingSpinner />}><AdvancedCourse /></Suspense>} />
            
            {/* Beginner course module routes */}
          <Route path="/learn/beginner/what-is-money" element={<Suspense fallback={<LoadingSpinner />}><WhatIsMoney /></Suspense>} />
          <Route path="/learn/beginner/store-of-value" element={<Suspense fallback={<LoadingSpinner />}><StoreOfValue /></Suspense>} />
          <Route path="/learn/beginner/bitcoin-fundamentals" element={<Suspense fallback={<LoadingSpinner />}><BitcoinFundamentals /></Suspense>} />
          <Route path="/learn/beginner/bitcoin-wallets" element={<Suspense fallback={<LoadingSpinner />}><BitcoinWallets /></Suspense>} />
            
            {/* Intermediate course module routes */}
          <Route path="/learn/intermediate/consensus-mining" element={<Suspense fallback={<LoadingSpinner />}><ConsensusMining /></Suspense>} />
          <Route path="/learn/intermediate/bitcoin-design" element={<Suspense fallback={<LoadingSpinner />}><BitcoinDesign /></Suspense>} />
            
            {/* Advanced course module routes */}
          <Route path="/learn/advanced/bitcoin-scripting" element={<Suspense fallback={<LoadingSpinner />}><BitcoinScripting /></Suspense>} />
            
          <Route path="/resources" element={<Suspense fallback={<LoadingSpinner />}><ResourcesPage /></Suspense>} />
          <Route path="/community" element={<Suspense fallback={<LoadingSpinner />}><CommunityPage /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LoadingSpinner />}><AboutPage /></Suspense>} />
          <Route path="/faq" element={<Suspense fallback={<LoadingSpinner />}><FAQPage /></Suspense>} />
          <Route path="/rabbit-hole" element={<Suspense fallback={<LoadingSpinner />}><RabbitHolePage /></Suspense>} />
          <Route path="/financial-education" element={<Suspense fallback={<LoadingSpinner />}><FinancialEducationPage /></Suspense>} />
          <Route path="/networked-revolution" element={<Suspense fallback={<LoadingSpinner />}><NetworkedRevolutionPage /></Suspense>} />
          <Route path="/global-game" element={<Suspense fallback={<LoadingSpinner />}><GlobalGamePage /></Suspense>} />
          <Route path="/last-free-market" element={<Suspense fallback={<LoadingSpinner />}><LastFreeMarketPage /></Suspense>} />
          <Route path="/mathematical-money" element={<Suspense fallback={<LoadingSpinner />}><MathematicalMoneyPage /></Suspense>} />
          <Route path="/unconfiscatable-asset" element={<Suspense fallback={<LoadingSpinner />}><UnconfiscatableAssetPage /></Suspense>} />
          <Route path="/energy-alchemy" element={<Suspense fallback={<LoadingSpinner />}><EnergyAlchemyPage /></Suspense>} />
          <Route path="/temporal-rebellion" element={<Suspense fallback={<LoadingSpinner />}><TemporalRebellionPage /></Suspense>} />
          <Route path="/digital-physics-revolution" element={<Suspense fallback={<LoadingSpinner />}><DigitalPhysicsRevolutionPage /></Suspense>} />
          <Route path="/monetary-evolution" element={<Suspense fallback={<LoadingSpinner />}><MonetaryEvolutionPage /></Suspense>} />
          <Route path="/bitcoin-vs-crypto" element={<Suspense fallback={<LoadingSpinner />}><BitcoinVsCryptoPage /></Suspense>} />
          <Route path="/philosophical-foundations" element={<Suspense fallback={<LoadingSpinner />}><PhilosophicalFoundationsPage /></Suspense>} />
          <Route path="/privacy-policy" element={<Suspense fallback={<LoadingSpinner />}><PrivacyPolicyPage /></Suspense>} />
          <Route path="/terms-of-service" element={<Suspense fallback={<LoadingSpinner />}><TermsOfServicePage /></Suspense>} />
          <Route path="/time-travelers-portfolio" element={<Suspense fallback={<LoadingSpinner />}><TimeTravelersPortfolioPage /></Suspense>} />
          <Route path="/digital-homesteading" element={<Suspense fallback={<LoadingSpinner />}><DigitalHomesteadingPage /></Suspense>} />
          <Route path="/geopolitical-shield" element={<Suspense fallback={<LoadingSpinner />}><GeopoliticalShieldPage /></Suspense>} />
          <Route path="/perspectives" element={<Suspense fallback={<LoadingSpinner />}><PerspectivesPage /></Suspense>} />
          <Route path="/misconceptions" element={<Suspense fallback={<LoadingSpinner />}><Misconceptions /></Suspense>} />
          <Route path="/get-started" element={<Suspense fallback={<LoadingSpinner />}><GetStartedPage /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LoadingSpinner />}><ContactPage /></Suspense>} />
          <Route path="/services/consulting" element={<Suspense fallback={<LoadingSpinner />}><ConsultingPage /></Suspense>} />
          <Route path="/services/education" element={<Suspense fallback={<LoadingSpinner />}><EducationPage /></Suspense>} />
          <Route path="/services/advisory" element={<Suspense fallback={<LoadingSpinner />}><Advisory /></Suspense>} />
          <Route path="/glossary" element={<Suspense fallback={<LoadingSpinner />}><Glossary /></Suspense>} />
          <Route path="/value-preservation" element={<Suspense fallback={<LoadingSpinner />}><ValuePreservationArticle /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<LoadingSpinner />}><NotFound /></Suspense>} />
          </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
