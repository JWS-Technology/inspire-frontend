import React from "react";
import { GraduationCap } from "lucide-react";
import CompanyCard, { CompanyCardProps } from "../../components/CompanyCard"; // import the type
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Page: React.FC = () => {
  const companies: CompanyCardProps[] = [
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
    // ...rest of your objects (blue, green, purple)
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
