// app/partners/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ClientMarquee from "@/components/home/ClientSMarquee";
import partnersData, {
    featured as featuredPartners,
    corporatePartners,
    governmentPartners,
    educationalPartners,
    FeaturedPartner,
} from "@/data/partners";
import { ArrowRight, ExternalLink, Shield, Building2, GraduationCap, Star } from "lucide-react";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
    title: "Our Partners — INSPIRE SOFTECH Group",
    description:
        "Meet our strategic partners, academic collaborators and corporate clients — together we build industry-ready talent and tech solutions.",
};

export default function PartnersPage() {
    const featured: FeaturedPartner[] = featuredPartners;
    const corporate = corporatePartners;
    const government = governmentPartners;
    const education = educationalPartners;

    return (
        <>
            <Navbar />
            <main className="bg-white text-slate-900">
                {/* Enhanced Hero */}
                <section className="relative bg-gradient-to-br from-slate-50 via-amber-50 to-white py-24 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-6 py-2 mb-8 font-medium shadow-lg shadow-amber-500/25">
                            <Star className="w-4 h-4 fill-current" />
                            Trusted By Industry Leaders
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                            Our Partners
                        </h1>
                        <p className="max-w-3xl mx-auto text-slate-600 text-xl leading-relaxed">
                            We collaborate with industry leaders, government organizations, and educational institutions
                            to deliver transformative training, internships, and technology solutions.
                        </p>

                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
                            >
                                Become a Partner
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="#featured"
                                className="group inline-flex items-center gap-2 text-slate-700 hover:text-amber-600 font-medium px-6 py-4 rounded-2xl hover:bg-white/50 transition-all duration-300"
                            >
                                Explore Partnerships
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Featured partners - Enhanced */}
                <section id="featured" className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
                                Strategic & Technology Partners
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                                Selected collaborations that help us deliver enterprise-grade solutions and real-world training experiences.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featured.map((p, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-amber-200/50 transition-all duration-500"
                                >
                                    <div className="flex flex-col sm:flex-row items-start gap-6">
                                        {/* Enhanced logo container */}
                                        <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                                            <Image
                                                src={`/logos/${p.logo}`}
                                                alt={p.name}
                                                width={80}
                                                height={80}
                                                style={{ objectFit: "contain" }}
                                                className="drop-shadow-sm"
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                                        {p.name}
                                                    </h3>
                                                    <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 rounded-full px-3 py-1 text-sm font-medium mt-2">
                                                        {p.tag}
                                                    </div>
                                                </div>
                                                {p.cta && (
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={p.cta.href}
                                                        className="flex-shrink-0 text-amber-600 hover:text-amber-700 p-2 hover:bg-amber-50 rounded-lg transition-colors"
                                                        title={p.cta.label}
                                                    >
                                                        <ExternalLink className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="text-slate-600 mt-4 leading-relaxed">{p.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Corporate Partners - Enhanced */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 text-amber-600 mb-4">
                                <Building2 className="w-8 h-8" />
                                <h3 className="text-3xl font-black bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                    Corporate & Industry Partners
                                </h3>
                            </div>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Enterprise collaborators and industry associations we work with to drive innovation.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {corporate.map((c, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-300/30 hover:border-amber-200/50 hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="w-full aspect-square flex items-center justify-center p-4">
                                        <Image
                                            src={`/logos/${c.logo}`}
                                            alt={c.name}
                                            width={120}
                                            height={120}
                                            style={{ objectFit: "contain" }}
                                            className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Government Partners - Enhanced */}
                <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 text-amber-600 mb-4">
                                <Shield className="w-8 h-8" />
                                <h3 className="text-3xl font-black bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                    Government Collaborations
                                </h3>
                            </div>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Trusted by government training institutes and public-sector organizations nationwide.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {government.map((g, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-300/30 hover:border-amber-200/50 hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="w-full h-20 flex items-center justify-center">
                                        <Image
                                            src={`/logos/${g.logo}`}
                                            alt={g.name}
                                            width={160}
                                            height={80}
                                            style={{ objectFit: "contain" }}
                                            className="opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Educational Institutions - Enhanced */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 text-amber-600 mb-4">
                                <GraduationCap className="w-8 h-8" />
                                <h3 className="text-3xl font-black bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                    Educational Institutions
                                </h3>
                            </div>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Colleges, universities and training centers we've partnered with to shape future talent.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {education.map((e, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-300/30 hover:border-amber-200/50 hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="w-full aspect-video flex items-center justify-center p-3">
                                        <Image
                                            src={`/logos/${e.logo}`}
                                            alt={e.name}
                                            width={120}
                                            height={80}
                                            style={{ objectFit: "contain" }}
                                            className="opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enhanced Marquee Section */}
                {/* <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h4 className="text-2xl font-bold text-white mb-3">
                                Academic & Training Partners
                            </h4>
                            <p className="text-slate-300 max-w-2xl mx-auto">
                                Join our growing network of educational institutions transforming tech education
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <ClientMarquee />
                        </div>
                    </div>
                </section> */}

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-yellow-300 to-amber-500 ">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-black text-white mb-6">
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-amber-100 text-xl mb-8 leading-relaxed">
                            Join our network of innovators and help shape the future of technology education and solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 bg-white text-amber-600 hover:bg-slate-50 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Partnership Discussion
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-3 text-white hover:text-slate-100 font-semibold px-6 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}