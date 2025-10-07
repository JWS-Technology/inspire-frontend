import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/ourServices/HeroSection'
import FeaturedPrograms from '../components/ourServices/FeaturedPrograms'
import HowWeWork from '../components/ourServices/HowWeWork'
import ServiceCategories from '../components/ourServices/ServiceCategories'
import SuccessStories from '../components/ourServices/SuccessStories'
import ServicePortfolio from '../components/ourServices/ServicePortfolio'
import FAQ from '../components/ourServices/FAQ'
import Testimonials from '../components/ourServices/Testimonials'
import ContactSection from '../components/ourServices/ContactSection'


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
// "use client";

// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import {
//     ArrowRight,
//     Download,
//     GraduationCap,
//     Code2,
//     Cloud,
//     Cpu,
//     Award,
//     CheckCircle,
//     Target,
//     Calendar,
//     Zap,
//     RefreshCw,
// } from "lucide-react";

// export default function Page() {
//     const services = [
//         {
//             icon: <GraduationCap className="w-6 h-6" />,
//             title: "Training & Internships",
//             description: "AICTE-approved programs with real-world projects",
//             color: "amber",
//         },
//         {
//             icon: <Code2 className="w-6 h-6" />,
//             title: "Web & Mobile Apps",
//             description: "Custom software solutions for modern businesses",
//             color: "blue",
//         },
//         {
//             icon: <Cloud className="w-6 h-6" />,
//             title: "Enterprise Solutions",
//             description: "ERP, CRM, and cloud transformation services",
//             color: "green",
//         },
//         {
//             icon: <Cpu className="w-6 h-6" />,
//             title: "AI & R&D Innovation",
//             description: "Cutting-edge research in AI, IoT, and Data Science",
//             color: "purple",
//         },
//     ];

//     const featuredPrograms = [
//         {
//             icon: <Award className="w-6 h-6" />,
//             title: "AICTE Internship Program",
//             org: "Inspire Softech Solutions",
//             bullets: [
//                 "Real industry projects",
//                 "Mentor support",
//                 "Placement assistance",
//                 "Certificate of completion",
//             ],
//             outcomeTitle: "Key Outcome",
//             outcome: "95% placement rate in target sectors",
//             tag: "4-12 weeks",
//             color: "amber",
//         },
//         {
//             icon: <Cloud className="w-6 h-6" />,
//             title: "Enterprise Cloud Migration",
//             org: "Adore Technology Solutions",
//             bullets: [
//                 "Zero downtime migration",
//                 "Security audit included",
//                 "24/7 support",
//                 "Cost optimization",
//             ],
//             outcomeTitle: "Key Outcome",
//             outcome: "Average 40% cost reduction",
//             tag: "2-6 months",
//             color: "green",
//         },
//         {
//             icon: <Award className="w-6 h-6" />,
//             title: "AI/ML Prototyping Lab",
//             org: "Igrean StarTech Solutions",
//             bullets: [
//                 "Custom AI models",
//                 "Data analysis",
//                 "Proof of concept",
//                 "Research collaboration",
//             ],
//             outcomeTitle: "Key Outcome",
//             outcome: "10x faster insights delivery",
//             tag: "Project-based",
//             color: "purple",
//         },
//     ];

//     const portfolio = [
//         {
//             company: "Inspire Softech Solutions",
//             color: "amber",
//             items: [
//                 { title: "Internship Programs", subtitle: "For: Students & Fresh Graduates" },
//                 { title: "Corporate Training", subtitle: "For: Enterprises" },
//                 { title: "Faculty Development", subtitle: "For: Educational Institutions" },
//                 { title: "Certification Courses", subtitle: "For: Professionals" },
//             ],
//         },
//         {
//             company: "Edinz Tech Pvt. Ltd.",
//             color: "blue",
//             items: [
//                 { title: "Web Development", subtitle: "For: Startups & SMEs" },
//                 { title: "Mobile Apps", subtitle: "For: All Industries" },
//                 { title: "IT Consulting", subtitle: "For: Enterprises" },
//                 { title: "E-commerce Solutions", subtitle: "For: Retail Businesses" },
//             ],
//         },
//         {
//             company: "Adore Technology Solutions",
//             color: "green",
//             items: [
//                 { title: "ERP Implementation", subtitle: "For: Manufacturing & Retail" },
//                 { title: "CRM Solutions", subtitle: "For: Sales Organizations" },
//                 { title: "Cloud Migration", subtitle: "For: Enterprises" },
//                 { title: "IT Infrastructure", subtitle: "For: All Sectors" },
//             ],
//         },
//         {
//             company: "Igrean StarTech Solutions",
//             color: "purple",
//             items: [
//                 { title: "AI & Machine Learning", subtitle: "For: Tech Companies" },
//                 { title: "IoT Solutions", subtitle: "For: Smart Industries" },
//                 { title: "Data Analytics", subtitle: "For: Data-Driven Organizations" },
//                 { title: "R&D Projects", subtitle: "For: Innovation Teams" },
//             ],
//         },
//     ];

//     // Tailwind-safe color mappings
//     const colorStyles: Record<
//         string,
//         { border: string; bg: string; accentBg: string; link: string; tileBg: string; tileBorder: string }
//     > = {
//         amber: {
//             border: "border-amber-200",
//             bg: "bg-amber-500",
//             accentBg: "bg-amber-50",
//             link: "text-amber-600",
//             tileBg: "bg-amber-50",
//             tileBorder: "border-amber-100",
//         },
//         blue: {
//             border: "border-blue-200",
//             bg: "bg-blue-500",
//             accentBg: "bg-blue-50",
//             link: "text-blue-600",
//             tileBg: "bg-blue-50",
//             tileBorder: "border-blue-100",
//         },
//         green: {
//             border: "border-green-200",
//             bg: "bg-green-500",
//             accentBg: "bg-green-50",
//             link: "text-green-600",
//             tileBg: "bg-green-50",
//             tileBorder: "border-green-100",
//         },
//         purple: {
//             border: "border-purple-200",
//             bg: "bg-purple-500",
//             accentBg: "bg-purple-50",
//             link: "text-purple-600",
//             tileBg: "bg-purple-50",
//             tileBorder: "border-purple-100",
//         },
//     };

//     const successCases = [
//         {
//             percent: "95%",
//             stat: "500+ Students Placed",
//             desc: "Placement rate across AICTE internship batches",
//             org: "Inspire Softech",
//             color: "amber",
//         },
//         {
//             percent: "40%",
//             stat: "Enterprise Migration",
//             desc: "Average cost reduction post cloud migration",
//             org: "Adore Technology",
//             color: "green",
//         },
//         {
//             percent: "10x",
//             stat: "AI Performance Boost",
//             desc: "Faster insights with custom ML models",
//             org: "Igrean StarTech",
//             color: "purple",
//         },
//     ];

//     const processSteps = [
//         { icon: <Target className="w-6 h-6" />, title: "Discover", desc: "Share your goals and challenges" },
//         { icon: <Calendar className="w-6 h-6" />, title: "Plan", desc: "Custom roadmap and timeline" },
//         { icon: <Zap className="w-6 h-6" />, title: "Execute", desc: "Agile delivery with regular updates" },
//         { icon: <RefreshCw className="w-6 h-6" />, title: "Review", desc: "Continuous improvement & support" },
//     ];

//     return (
//         <>
//             <Navbar />
//             <div className="bg-white min-h-screen">
//                 <section className="relative flex flex-col items-center justify-center text-center pt-[10rem] py-20 px-6 bg-white">
//                     {/* Tagline */}
//                     <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-gray-700 border rounded-full shadow-sm border-gray-200 bg-white backdrop-blur-md">
//                         Complete Technology & Training Solutions
//                     </div>

//                     {/* Main Heading */}
//                     <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
//                         Empowering Growth through{" "}
//                         <span className="bg-gradient-to-r from-amber-500 via-gray-800 to-blue-600 bg-clip-text text-transparent">
//                             Knowledge & Technology
//                         </span>
//                     </h1>

//                     {/* Subheading */}
//                     <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
//                         End-to-end services covering training, consulting, and technology
//                         solutions for students, professionals, and enterprises
//                     </p>

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-4">
//                         <button className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
//                             Contact Us <ArrowRight className="w-4 h-4" />
//                         </button>

//                         <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-300">
//                             View Internships
//                         </button>

//                         <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-300">
//                             <Download className="w-4 h-4" />
//                             Download Brochure
//                         </button>
//                     </div>

//                     {/* Services Section */}
//                     <div>
//                         <div className="py-32 bg-white text-center">
//                             <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
//                                 Our Service Categories
//                             </h2>
//                             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                                 Comprehensive solutions across training, development, and
//                                 innovation
//                             </p>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6 pb-20">
//                             {services.map((service, index) => {
//                                 const colors = colorStyles[service.color];
//                                 return (
//                                     <div
//                                         key={index}
//                                         className={`border ${colors.border} rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300`}
//                                     >
//                                         <div className="flex items-start gap-4">
//                                             <div
//                                                 className={`${colors.bg} text-white p-3 rounded-lg flex items-center justify-center`}
//                                             >
//                                                 {service.icon}
//                                             </div>
//                                             <div>
//                                                 <h3 className="text-xl font-semibold text-gray-900">
//                                                     {service.title}
//                                                 </h3>
//                                                 <p className="text-gray-600 mb-3">{service.description}</p>
//                                                 <a
//                                                     href="#"
//                                                     className={`${colors.link} font-medium inline-flex items-center gap-1 hover:gap-2 transition-all`}
//                                                 >
//                                                     Learn more <ArrowRight className="w-4 h-4" />
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>



//                     {/* Featured Programs Section */}
//                     <div>

//                         <div className="py-8 text-center w-full">
//                             <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gray-800 border rounded-full bg-white border-gray-200 shadow-sm">
//                                 Flagship Services
//                             </div>
//                             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//                                 Featured Programs
//                             </h2>
//                             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                                 Our most popular and impactful service offerings
//                             </p>
//                         </div>
//                         <div className="max-w-7xl mx-auto px-6 pb-12">
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
//                                 {featuredPrograms.map((p, i) => {
//                                     const c = colorStyles[p.color];
//                                     return (
//                                         <article
//                                             key={i}
//                                             className={`flex flex-col justify-between border ${c.border} rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300`}
//                                         >
//                                             {/* Top: icon + tag */}
//                                             <div className="flex justify-between items-start gap-4">
//                                                 <div className={`${c.bg} text-white p-3 rounded-lg flex items-center justify-center`}>
//                                                     {p.icon}
//                                                 </div>
//                                                 <div className="ml-auto">
//                                                     <span className="text-xs px-3 py-1 bg-gray-100 text-gray-500 rounded-full">
//                                                         {p.tag}
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             {/* Middle: title, org, bullets */}
//                                             <div className="mt-6">
//                                                 <h3 className="text-2xl font-bold text-gray-900 mb-1">{p.title}</h3>
//                                                 <div className="text-sm text-gray-500 mb-4">{p.org}</div>

//                                                 <ul className="space-y-3 mb-6">
//                                                     {p.bullets.map((b, idx) => (
//                                                         <li key={idx} className="flex items-center gap-3 text-gray-700">
//                                                             <CheckCircle className={`w-5 h-5 ${p.color === "green" ? "text-green-500" : p.color === "purple" ? "text-purple-500" : p.color === "amber" ? "text-amber-500" : "text-blue-500"}`} />
//                                                             <span>{b}</span>
//                                                         </li>
//                                                     ))}
//                                                 </ul>

//                                                 {/* Outcome box */}
//                                                 <div className={`rounded-lg p-4 ${c.accentBg} border ${c.border} mb-6`}>
//                                                     <div className="text-sm text-gray-600 font-semibold mb-1">{p.outcomeTitle}</div>
//                                                     <div className="text-lg font-bold text-gray-900">{p.outcome}</div>
//                                                 </div>
//                                             </div>

//                                             {/* Bottom: Apply Now (anchored to bottom by flex layout) */}
//                                             <div className="mt-4">
//                                                 <button className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-200">
//                                                     Apply Now <ArrowRight className="w-4 h-4" />
//                                                 </button>
//                                             </div>
//                                         </article>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </div>


//                     {/* COMPLETE SERVICE PORTFOLIO */}
//                     <div className="w-full bg-white">
//                         <div className="max-w-7xl mx-auto px-6 pb-12">
//                             <div className="text-center mb-8">
//                                 <h2 className="text-4xl font-extrabold text-gray-900">Complete Service Portfolio</h2>
//                                 <p className="text-gray-600 mt-2">Specialized services from each company in our group</p>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {portfolio.map((c, idx) => {
//                                     const cs = colorStyles[c.color];
//                                     return (
//                                         <div
//                                             key={idx}
//                                             className={`border ${cs.border} rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300`}
//                                         >
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-6">{c.company}</h3>

//                                             <div className="space-y-4">
//                                                 {c.items.map((it, i2) => (
//                                                     <div key={i2} className={`rounded-lg p-4 ${cs.tileBg} border ${cs.tileBorder}`}>
//                                                         <div className="font-semibold text-gray-900">{it.title}</div>
//                                                         <div className="text-sm text-gray-500 mt-1">{it.subtitle}</div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </div>

//                     {/* SUCCESS STORIES */}
//                     <div>
//                         <div className="w-full bg-white">
//                             <div className="max-w-7xl mx-auto px-6 py-12">
//                                 <div className="text-center mb-8">
//                                     <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gray-800 border rounded-full bg-white border-gray-200 shadow-sm">
//                                         Proven Results
//                                     </div>
//                                     <h2 className="text-4xl font-extrabold text-gray-900">Success Stories</h2>
//                                     <p className="text-gray-600 mt-2">Real impact from our programs and projects</p>
//                                 </div>

//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//                                     {successCases.map((s, i) => {
//                                         const cs = colorStyles[s.color];
//                                         return (
//                                             <div key={i} className={`border ${cs.border} rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 text-center`}>
//                                                 <div className={`${s.color === "amber" ? "text-amber-500" : s.color === "green" ? "text-green-500" : "text-purple-500"} text-5xl font-extrabold`}>
//                                                     {s.percent}
//                                                 </div>
//                                                 <h3 className="text-xl font-semibold text-gray-900 mt-4">{s.stat}</h3>
//                                                 <p className="text-sm text-gray-500 mt-3">{s.desc}</p>
//                                                 <div className={`mt-4 font-medium ${cs.link}`}>{s.org}</div>

//                                                 <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm text-gray-700 font-medium hover:gap-3 transition-all">
//                                                     Read case study <ArrowRight className="w-4 h-4" />
//                                                 </a>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                     {/* HOW WE WORK */}
//                     <div className="w-full bg-gray-50">
//                         <div className="max-w-7xl mx-auto px-6 py-16">
//                             <div className="text-center mb-12">
//                                 <h2 className="text-4xl font-extrabold text-gray-900">How We Work</h2>
//                                 <p className="text-gray-600 mt-2">Our proven 4-step process</p>
//                             </div>

//                             {/* simple horizontal process with icons and connecting line */}
//                             <div className="relative">
//                                 {/* horizontal connecting line */}
//                                 <div className="hidden md:block absolute left-6 right-6 top-12 h-px bg-amber-100"></div>

//                                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                                     {processSteps.map((p, idx) => (
//                                         <div key={idx} className="flex flex-col items-center text-center px-4">
//                                             <div className="relative">
//                                                 <div className="rounded-lg p-4 bg-amber-50 border border-amber-100 w-20 h-20 flex items-center justify-center">
//                                                     {p.icon}
//                                                 </div>
//                                                 <div className="absolute -top-2 -right-2 md:-right-4">
//                                                     <div className="bg-amber-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
//                                                         {String(idx + 1).padStart(2, "0")}
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <h4 className="mt-6 font-semibold text-lg text-gray-900">{p.title}</h4>
//                                             <p className="text-sm text-gray-500 mt-2">{p.desc}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </section>
//             </div>
//             <Footer />
//         </>
//     );
// }
