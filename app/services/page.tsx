import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/ourServices/HeroSection'
import FeaturedPrograms from '../../components/ourServices/FeaturedPrograms'
import HowWeWork from '../../components/ourServices/HowWeWork'
import ServiceCategories from '../../components/ourServices/ServiceCategories'
import SuccessStories from '../../components/ourServices/SuccessStories'
import ServicePortfolio from '../../components/ourServices/ServicePortfolio'
import FAQ from '../../components/ourServices/FAQ'
import Testimonials from '../../components/ourServices/Testimonials'
import ContactSection from '../../components/ourServices/ContactSection'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen bg-white'>
                <HeroSection />

                {/* Service Categories */}
                <ServiceCategories />

                {/* Featured Programs */}
                <FeaturedPrograms />

                {/* Complete Service Portfolio */}
                <ServicePortfolio />

                {/* Success Stories */}
                <SuccessStories />

                {/* How We Work */}
                <HowWeWork />

                {/* FAQ Setction  */}
                <FAQ />

                {/* Testimonials Setction  */}
                <Testimonials />

                <ContactSection />
            </div>
            <Footer />
        </div>
    )
}

export default page