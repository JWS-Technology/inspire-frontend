import React from "react";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

interface jobProps {
    title: string;
    company: string;
    department: string;
    mode: string;
    type: string;
}

const JobCard: React.FC<{ job: jobProps }> = ({ job }) => {
    if (!job) return null; // safety check

    const {
        title = "AI Intern",
        company = "Inspire Softech Solutions",
        department = "Research & Development",
        mode = "Hybrid",
        type = "Internship",
    } = job;

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-gray-200 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            {/* Left Section */}
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl p-3 flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                </div>

                {/* Job Info */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-500 text-sm">{company}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                            <Briefcase className="w-3 h-3" /> {department}
                        </span>

                        <span className="flex items-center gap-2 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
                            <MapPin className="w-3 h-3" /> {mode}
                        </span>

                        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                            {type}
                        </span>
                    </div>
                </div>
            </div>

            {/* Apply Button */}
            <div
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-md shadow-md transition-all duration-300"
            >
                Apply Now <ArrowRight className="w-4 h-4" />
            </div>
        </div>
    );
};

export default JobCard;
