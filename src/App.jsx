import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ValueProps from './components/ValueProps';
import Features from './components/Features';
import Security from './components/Security';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import BlogPreview from './components/BlogPreview';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <ValueProps />
                <Features />
                <Security />
                <HowItWorks />
                <Pricing />
                <AboutUs />
                <BlogPreview />
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}

export default App;