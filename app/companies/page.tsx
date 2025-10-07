"use client";

import React from "react";
import { GraduationCap, Code, Cpu, Cloud } from "lucide-react";
import CompanyCard from "../components/CompanyCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Page: React.FC = () => {
  const companies = [
    {
      icon: <GraduationCap className="w-7 h-7 text-white" />,
      title: "Inspire Softech Solutions",
      tagline:
        "Empowering Minds through Training, Internships & Skill Development.",
      color: "amber",
      description:
        "Inspire Softech Solutions is the training and skill development arm of the group, empowering students and professionals through immersive learning experiences, industry-ready internships, and global certification programs.",
      about:
        "Founded with the mission of bridging the academic-industry gap, Inspire Softech Solutions designs and delivers transformative learning experiences. From AICTE-approved internships to corporate faculty development programs, our initiatives focus on building real-world competencies through mentorship and project-based learning.",
      services: [
        "AICTE-approved internship programs",
        "Corporate & faculty development training",
        "Online and international skill workshops",
        "Job-oriented certification programs",
      ],
      focusAreas: [
        "AI & Machine Learning internships",
        "Web and App development training",
        "Industry-academia collaboration",
        "Global skill certifications",
      ],
      mission:
        "To empower the next generation of innovators through experiential learning and professional mentorship.",
      vision:
        "To become India’s most trusted partner in talent transformation and digital skill empowerment.",
    },
    {
      icon: <Code className="w-7 h-7 text-white" />,
      title: "Edinz Tech Pvt. Ltd.",
      tagline: "Innovating Businesses with Smart Digital Solutions.",
      color: "blue",
      description:
        "Edinz Tech Pvt. Ltd. is the technology backbone of the group, delivering smart, scalable, and sustainable digital solutions for global businesses.",
      about:
        "Edinz Tech is a dynamic software development company specializing in custom enterprise applications, cloud solutions, and IT strategy. With a team of seasoned engineers and creative problem solvers, we help organizations innovate faster and operate smarter through digital transformation.",
      services: [
        "Web & mobile app development",
        "Enterprise software solutions",
        "IT consulting & strategy",
        "Cloud integration & e-commerce solutions",
      ],
      focusAreas: [
        "Full-stack application development",
        "Cloud-native architecture",
        "E-commerce platforms",
        "Data-driven digital strategy",
      ],
      mission:
        "To empower organizations with intelligent technology that drives measurable business growth.",
      vision:
        "To be a global leader in delivering cutting-edge IT solutions that make technology human-centered and impactful.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-white" />,
      title: "Adore Technology Solutions",
      tagline: "Transforming Enterprises with Cloud & Business Technology.",
      color: "green",
      description:
        "Adore Technology Solutions focuses on enterprise technology and automation, enabling businesses to optimize, innovate, and scale with confidence.",
      about:
        "Adore Technology provides complete business automation ecosystems that integrate ERP, CRM, and cloud solutions. Our approach centers around creating secure, flexible, and intelligent systems that streamline workflows and drive productivity across organizations.",
      services: [
        "ERP & CRM implementation",
        "Cloud-based enterprise solutions",
        "IT infrastructure & managed services",
        "Business process automation tools",
      ],
      focusAreas: [
        "Enterprise cloud adoption",
        "Intelligent automation (RPA)",
        "IT infrastructure modernization",
        "Digital workplace transformation",
      ],
      mission:
        "To simplify enterprise transformation through technology-driven innovation.",
      vision:
        "To become the preferred partner for businesses embracing automation, scalability, and digital excellence.",
    },
    {
      icon: <Cloud className="w-7 h-7 text-white" />,
      title: "Igrean StarTech Solutions",
      tagline: "Driving the Future with AI, IoT & Emerging Tech.",
      color: "purple",
      description:
        "Igrean StarTech Solutions is the group’s innovation hub, dedicated to research and development in Artificial Intelligence, Internet of Things, and Data Science.",
      about:
        "Igrean StarTech brings together researchers, data scientists, and developers to explore next-generation technologies. Our focus lies in building prototypes, predictive analytics systems, and intelligent IoT solutions that redefine what’s possible in automation and smart industries.",
      services: [
        "Artificial Intelligence & Machine Learning solutions",
        "IoT system design & prototyping",
        "Data science & predictive analytics",
        "Research-driven innovation projects",
      ],
      focusAreas: [
        "Generative AI applications",
        "Edge computing & IoT integration",
        "AI ethics & model explainability",
        "Data-driven product innovation",
      ],
      mission:
        "To pioneer research and development in AI, IoT, and emerging technologies for sustainable innovation.",
      vision:
        "To be a global innovation center driving the intelligent future of connected industries.",
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
          <p className="text-gray-600 mt-3 text-base px-0.5 md:text-xl max-w-2xl mx-auto">
            Four specialized companies working together to deliver complete technology, research, and training ecosystems.
          </p>
        </div>

        {/* Cards */}
        {companies.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
