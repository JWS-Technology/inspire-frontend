"use client"
import React, { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Mail, MapPin, Phone, Globe } from 'lucide-react'
import { gsap } from 'gsap'

export default function Page() {
    const rootRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
            tl.timeScale(0.9)

            // nav (if rendered inside this react tree)
            tl.from('nav', { y: -20, opacity: 0, duration: 0.5 }, 0)

            // Hero: heading and paragraph
            tl.from(
                '.contact-hero > *',
                { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 },
                0.08
            )

            // Left info title
            tl.from('.contact-info > h3', { y: 30, opacity: 0, duration: 0.6 }, '>-0.1')

            // Left info items
            tl.from(
                '.contact-info .info-item',
                { y: 30, opacity: 0, duration: 0.65, stagger: 0.12 },
                '-=0.35'
            )

            // Form card container
            tl.from('.contact-form-card', { y: 40, opacity: 0, duration: 0.85 }, '-=0.45')

            // Form fields (inputs, textarea, button)
            tl.fromTo(
                '.contact-form-card form input, .contact-form-card form textarea, .contact-form-card form button',
                { y: 20, opacity: 0 },   // starting state
                { y: 0, opacity: 1, duration: 0.3, stagger: 0.04, ease: 'power3.in' },

            )

            // footer (if rendered inside this react tree)
            tl.from('footer', { y: 20, opacity: 0, duration: 0.6 }, '>-0.05')
        }, rootRef)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <Navbar />

            {/* Contact Section */}
            <section className="py-20 pt-36 bg-white text-gray-800" ref={rootRef}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="contact-hero">
                        <h2 className="text-5xl font-bold text-center mb-2">
                            Contact <span className="text-yellow-500">Us</span>
                        </h2>
                        <p className="text-center text-gray-500 mb-12">
                            Get in touch with us for inquiries, partnerships, or to learn more about our services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left Info Section */}
                        <div className="contact-info">
                            <h3 className="text-2xl font-bold mb-6">INSPIRE SOFTECH Group of Companies</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 info-item">
                                    <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Office Address</h4>
                                        <p>10th Floor, CITIUS A Block, Phase 1,
                                            Olympia Tech Park Plot No.1, SIDCO
                                            Industrial Estate, Guindy, Chennai- 600032</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 info-item">
                                    <Phone className="w-6 h-6 text-yellow-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <p>+91 93605 05768</p>
                                        <p>+91 86674 93679</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 info-item">
                                    <Mail className="w-6 h-6 text-yellow-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p>
                                            <a href="mailto:info@inspiresoftechgroup.com" className="hover:underline">
                                                info@inspiresoftechgroup.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 info-item">
                                    <Globe className="w-6 h-6 text-yellow-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Website</h4>
                                        <p>
                                            <a
                                                href="https://www.inspiresoftechgroup.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                www.inspiresoftechgroup.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Section */}
                        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 contact-form-card">
                            <h4 className="text-xl font-semibold mb-6">Send Us a Message</h4>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <textarea
                                    rows={5}
                                    placeholder="Your Message"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-all"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
