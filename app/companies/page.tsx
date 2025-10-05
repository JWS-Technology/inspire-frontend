"use client";

import React from "react";
import { GraduationCap, Code, Cpu, Cloud } from "lucide-react";
import CompanyCards from "../components/CompanyCards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Page: React.FC = () => {
    const companies = [
        {
            icon: <GraduationCap className="w-7 h-7 text-white" />,
            title: "Inspire Softech Solutions",
            tagline:
                "Empowering Minds through Training, Internships & Skill Development.",
            description:
                "Inspire Softech Solutions is the training and skill development arm of the group, empowering learners and professionals with hands-on internships, workshops, and certifications.",
            services: [
                "Internship programs (AICTE-approved, project-based)",
                "Online & international workshops",
                "Corporate & faculty development training",
                "Job-oriented certification courses",
            ],
        },
        {
            icon: <Code className="w-7 h-7 text-white" />,
            title: "Edinz Tech Pvt. Ltd.",
            tagline: "Innovating Businesses with Smart Digital Solutions.",
            description:
                "Edinz Tech Pvt. Ltd. is the technology services company of the group, delivering innovative IT solutions for businesses worldwide.",
            services: [
                "Web & mobile app development",
                "Enterprise software solutions",
                "IT consulting & strategy",
                "Cloud integration & e-commerce solutions",
            ],
        },
        {
            icon: <Cpu className="w-7 h-7 text-white" />,
            title: "Adore Technology",
            tagline: "Driving AI and IoT innovations for tomorrow’s world.",
            description:
                "Adore Technology focuses on AI-driven products, IoT applications, and automation systems, empowering industries through smart technology.",
            services: [
                "AI & machine learning development",
                "IoT systems integration",
                "Automation & embedded systems",
                "AI consulting and deployment",
            ],
        },
        {
            icon: <Cloud className="w-7 h-7 text-white" />,
            title: "Igrean StarTech",
            tagline: "Connecting Cloud, Data, and Enterprise Intelligence.",
            description:
                "Igrean StarTech specializes in cloud computing, enterprise data solutions, and scalable IT infrastructure for modern businesses.",
            services: [
                "Cloud architecture & migration",
                "Data analytics & visualization",
                "DevOps & CI/CD automation",
                "Enterprise infrastructure management",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="flex flex-col items-center space-y-10 pb-24">
                {/* Section Heading */}
                <div className="text-center py-10 pt-36">
                    <h2 className="text-3xl md:text-6xl font-extrabold text-gray-900">
                        Our <span className="text-yellow-500">Companies</span>
                    </h2>
                    <p className="text-gray-600 mt-3 text-base md:text-xl max-w-2xl mx-auto">
                        Four specialized companies working together to deliver comprehensive
                        technology and training solutions
                    </p>
                </div>

                {/* Render Cards Dynamically */}
                {companies.map((company, index) => (
                    <CompanyCards key={index} {...company} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Page;
