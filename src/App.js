import React, { useEffect, Suspense, lazy } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Lazy load the page components
const HomePage = lazy(() => import('./HomePage'));
const OurServices = lazy(() => import('./OurServices'));
const DigitalMarketingServices = lazy(() => import('./DigitalMarketingServices'));
const CallCenterServices = lazy(() => import('./call-center-services'));
const SEOPage = lazy(() => import('./seo'));
const SocialMediaMarketingPage = lazy(() => import('./social-media-marketing'));
const DigitalAdvertisingPage = lazy(() => import('./digital-advertising'));
const BrandManagementPage = lazy(() => import('./brand-management'));
const CreativeDesignPage = lazy(() => import('./creative-design'));
const ContactForm = lazy(() => import('./ContactForm'));
const TelesalesPage = lazy(() => import('./telesales'));
const CustomerServicePage = lazy(() => import('./CustomerServicePage'));
const AfterSalesServicePage = lazy(() => import('./AfterSalesServicePage'));
const SurveysPage = lazy(() => import('./SurveysPage'));
const AiSoftwareServices = lazy(() => import('./AiSoftwareServices'));
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 404 Not Found Component
function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/DigitalMarketingServices" element={<DigitalMarketingServices />} />
          <Route path="/call-center-services" element={<CallCenterServices />} />
          <Route path="/seo" element={<SEOPage />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketingPage />} />
          <Route path="/digital-advertising" element={<DigitalAdvertisingPage />} />
          <Route path="/brand-management" element={<BrandManagementPage />} />
          <Route path="/creative-design" element={<CreativeDesignPage />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/telesales" element={<TelesalesPage />} />
          <Route path="/CustomerServicePage" element={<CustomerServicePage />} />
          <Route path="/AfterSalesServicePage" element={<AfterSalesServicePage />} />
          <Route path="/SurveysPage" element={<SurveysPage />} />
          <Route path="/ai-software-services" element={<AiSoftwareServices />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
