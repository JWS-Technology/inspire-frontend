import React from "react";
import { GraduationCap, Code, Cloud, Cpu } from "lucide-react";
import CompanyCard, { CompanyCardProps } from "../../components/CompanyCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Page: React.FC = () => {
  const companies: CompanyCardProps[] = [
    {
      icon: <GraduationCap className="w-7 h-7 text-white" />,
      title: "Inspire Softech Solutions",
      tagline: "Empowering Minds through Training, Internships & Skill Development.",
      color: "amber",
      description:
        "Inspire Softech Solutions is the training and skill development arm of the group, empowering students and professionals through immersive learning experiences, industry-ready internships, and global certification programs.",
      about:
        "Founded to bridge the academic-industry gap, Inspire Softech Solutions designs and delivers transformative learning experiences. From AICTE-approved internships to corporate faculty development programs, our initiatives focus on building real-world competencies through mentorship and project-based learning.",
      services: [
        "AICTE-approved internship programs",
        "Corporate & faculty development training",
        "Online and international skill workshops",
        "Job-oriented certification programs"
      ],
      focusAreas: [
        "AI & Machine Learning internships",
        "Web and App development training",
        "Industry-academia collaboration",
        "Global skill certifications"
      ],
      mission:
        "To empower the next generation of innovators through experiential learning and professional mentorship.",
      vision:
        "To become India’s most trusted partner in talent transformation and digital skill empowerment.",
      contact: {
        phone: "+91 93605 05768",
        email: "info@inspiresoftechgroup.com"
      }
    },
    {
      icon: <Code className="w-7 h-7 text-white" />,
      title: "Edinz Tech Pvt. Ltd.",
      tagline: "Innovating Businesses with Smart Digital Solutions.",
      color: "blue",
      description:
        "Edinz Tech Pvt. Ltd. is the technology services company of the group, delivering innovative IT solutions for businesses worldwide.",
      about:
        "We design modern web and mobile applications, enterprise-grade software, and cloud integrations that help organizations scale and compete in digital markets.",
      services: [
        "Web & mobile app development",
        "Enterprise software solutions",
        "IT consulting & strategy",
        "Cloud integration & e-commerce solutions"
      ],
      focusAreas: [
        "Full-stack web & mobile engineering",
        "Enterprise integrations & APIs",
        "Cloud-native architectures",
        "E-commerce platforms and payments"
      ],
      mission:
        "To provide reliable, scalable, and secure digital products that accelerate business outcomes.",
      vision:
        "To be the go-to engineering partner for mid-to-large enterprises seeking pragmatic, modern solutions.",
      contact: {
        phone: "+91 86674 93679",
        email: "contact@edinztech.com"
      }
    },
    {
      icon: <Cloud className="w-7 h-7 text-white" />,
      title: "Adore Technology Solutions",
      tagline: "Transforming Enterprises with Cloud & Business Technology.",
      color: "green",
      description:
        "Adore Technology Solutions specializes in enterprise technology and business automation, helping organizations embrace secure and scalable digital systems.",
      about:
        "We implement ERP/CRM systems, automate business processes, and provide IT infrastructure & managed services that increase reliability and reduce operational costs.",
      services: [
        "ERP & CRM implementation",
        "Cloud-based enterprise solutions",
        "IT infrastructure & support services",
        "Business automation tools"
      ],
      focusAreas: [
        "ERP & CRM customization",
        "Cloud migration & managed services",
        "Infrastructure automation",
        "Process automation and RPA"
      ],
      mission:
        "To enable organizations to operate smarter by automating processes and modernizing infrastructure.",
      vision:
        "To lead enterprise transformation with dependable, scalable, and secure technology platforms.",
      contact: {
        phone: "+91 93605 05768",
        email: "enterprise@adoretech.com"
      }
    },
    {
      icon: <Cpu className="w-7 h-7 text-white" />,
      title: "Igrean StarTech Solutions",
      tagline: "Driving the Future with AI, IoT & Emerging Tech.",
      color: "purple",
      description:
        "Igrean StarTech Solutions is the research and innovation hub of the group, focused on emerging technologies such as AI, IoT, and Data Science.",
      about:
        "Our prototyping labs and R&D teams build ML models, IoT prototypes, and analytics platforms to help clients evaluate and deploy next-generation solutions.",
      services: [
        "Artificial Intelligence & Machine Learning",
        "IoT solutions & prototyping",
        "Data Science & advanced analytics",
        "Research-driven innovation projects"
      ],
      focusAreas: [
        "Custom ML model development",
        "IoT device prototyping & integration",
        "Big data & analytics pipelines",
        "Research partnerships with academia & industry"
      ],
      mission:
        "To explore and commercialize emerging technologies that solve complex business problems.",
      vision:
        "To become a recognized innovation partner for AI and IoT-driven product engineering.",
      contact: {
        phone: "+91 86674 93679",
        email: "innovation@igreanstartech.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center space-y-10 pb-24">
        <div className="text-center py-10 pt-36">
          <h2 className="text-3xl md:text-6xl font-extrabold text-gray-900">
            Our <span className="text-yellow-500">Companies</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base px-0.5 md:text-xl max-w-2xl mx-auto">
            Four specialized companies working together to deliver complete technology, research, and training ecosystems.
          </p>
        </div>

        {companies.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
