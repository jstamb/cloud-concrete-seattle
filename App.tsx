
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import LocationDetail from './pages/LocationDetail';
import BlogIndex from './pages/BlogIndex';
import BlogPostDetail from './pages/BlogPostDetail';
import BlogCategory from './pages/BlogCategory';
import ServiceLocationDetail from './pages/ServiceLocationDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import ServicesHub from './pages/ServicesHub';
import LocationsHub from './pages/LocationsHub';
import Privacy from './pages/Privacy';
import ThankYou from './pages/ThankYou';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/locations" element={<LocationsHub />} />
          <Route path="/locations/:slug" element={<LocationDetail />} />
          
          {/* Blog System */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
          
          {/* Contact System */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Compliance */}
          <Route path="/privacy" element={<Privacy />} />

          {/* Thank You */}
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Programmatic Service + Location pages (SEO Powerhouse) */}
          <Route path="/:combinedSlug" element={<ServiceLocationDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
