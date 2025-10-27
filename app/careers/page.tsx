"use client"
import React, { useState, useMemo } from "react";
import {
  Rocket,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Users,
  Globe,
  Search,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/careers/JobCard";
import Footer from "@/components/Footer";


const JOBS = [
  {
    title: "AI Intern",
    company: "Inspire Softech Solutions",
    department: "Research & Development",
    mode: "Hybrid",
    type: "Internship",
    applyLink: "https://rzp.io/l/inspireinternship",
  },
  {
    title: "Full Stack Developer",
    company: "Edinz Tech Pvt. Ltd.",
    department: "Engineering",
    mode: "Remote",
    type: "Full-time",
    applyLink: "https://inspiresoftechgroup.com/apply",
  },
];

const CareersPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  // Filtered Jobs Logic
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOBS.filter((job) => {
      if (filter !== "All" && job.type.toLowerCase() !== filter.toLowerCase())
        return false;
      if (!q) return true;
      return (
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        (job.department || "").toLowerCase().includes(q)
      );
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 pt-36 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Rocket className="w-4 h-4" />
              We&apos;re Hiring!
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            <span className="block">Join Our Mission to</span>
            <span className="block text-amber-500">Inspire Innovation</span>
          </h1>

          <p className="mt-6 mx-auto text-gray-600 max-w-2xl text-base sm:text-lg">
            At Inspire Softech, we believe in nurturing talent, empowering minds, and driving technological excellence.
            Explore our internship, training, and full-time opportunities across our group companies.
          </p>

          <div className="mt-10">
            <a
              href="#openings"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transform transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US SECTION */}
      <section className="bg-[#fafbfd] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Why Work With Us?
          </h2>
          <p className="text-gray-600 mb-12">
            Join a team that values innovation, growth, and excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Work on cutting-edge technologies and contribute to innovative
                solutions that make a real impact.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Growth
              </h3>
              <p className="text-gray-600 text-sm">
                Continuous learning opportunities, skill development programs,
                and clear career advancement paths.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-lg mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mentorship
              </h3>
              <p className="text-gray-600 text-sm">
                Learn from industry experts and experienced professionals who
                are invested in your success.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-lg mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Global Exposure
              </h3>
              <p className="text-gray-600 text-sm">
                Work with international clients and projects, expanding your
                professional network worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS SECTION */}
      <section id="openings" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Current Openings
            </h2>
            <p className="text-gray-600 mt-2">
              Find your perfect role and start your journey with us
            </p>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <label className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, company, or department..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-200 text-black"
              />
            </label>

            <div className="flex items-center gap-3">
              {["All", "Full-time", "Internship"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition ${filter === f
                      ? "bg-amber-500 text-white shadow"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Job list */}
          <div className="space-y-6">
            {filtered.length === 0 ? (
              <div className="text-center text-gray-500 py-12">
                No openings found.
              </div>
            ) : (
              filtered.map((job, idx) => (
                <div
                  key={idx}
                >
                  <JobCard job={job} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CareersPage;

"use client"
import React, { useState, useMemo } from "react";
import {
  Rocket,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Users,
  Globe,
  Search,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/careers/JobCard";

const JOBS = [
  {
    title: "AI Intern",
    company: "Inspire Softech Solutions",
    department: "Research & Development",
    mode: "Hybrid",
    type: "Internship",
    applyLink: "https://rzp.io/l/inspireinternship",
  },
  {
    title: "Full Stack Developer",
    company: "Edinz Tech Pvt. Ltd.",
    department: "Engineering",
    mode: "Remote",
    type: "Full-time",
    applyLink: "https://inspiresoftechgroup.com/apply",
  },
];

const CareersPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  // Filtered Jobs Logic
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOBS.filter((job) => {
      if (filter !== "All" && job.type.toLowerCase() !== filter.toLowerCase())
        return false;
      if (!q) return true;
      return (
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        (job.department || "").toLowerCase().includes(q)
      );
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 pt-36 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Rocket className="w-4 h-4" />
              We&apos;re Hiring!
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            <span className="block">Join Our Mission to</span>
            <span className="block text-amber-500">Inspire Innovation</span>
          </h1>

          <p className="mt-6 mx-auto text-gray-600 max-w-2xl text-base sm:text-lg">
            At Inspire Softech, we believe in nurturing talent, empowering minds, and driving technological excellence.
            Explore our internship, training, and full-time opportunities across our group companies.
          </p>

          <div className="mt-10">
            <a
              href="#openings"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transform transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US SECTION */}
      <section className="bg-[#fafbfd] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Why Work With Us?
          </h2>
          <p className="text-gray-600 mb-12">
            Join a team that values innovation, growth, and excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Work on cutting-edge technologies and contribute to innovative
                solutions that make a real impact.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Growth
              </h3>
              <p className="text-gray-600 text-sm">
                Continuous learning opportunities, skill development programs,
                and clear career advancement paths.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-lg mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mentorship
              </h3>
              <p className="text-gray-600 text-sm">
                Learn from industry experts and experienced professionals who
                are invested in your success.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-lg mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Global Exposure
              </h3>
              <p className="text-gray-600 text-sm">
                Work with international clients and projects, expanding your
                professional network worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS SECTION */}
      <section id="openings" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Current Openings
            </h2>
            <p className="text-gray-600 mt-2">
              Find your perfect role and start your journey with us
            </p>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <label className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, company, or department..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-200 text-black"
              />
            </label>

            <div className="flex items-center gap-3">
              {["All", "Full-time", "Internship"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                    filter === f
                      ? "bg-amber-500 text-white shadow"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Job list */}
          <div className="space-y-6">
            {filtered.length === 0 ? (
              <div className="text-center text-gray-500 py-12">
                No openings found.
              </div>
            ) : (
              filtered.map((job, idx) => (
                <div
                  key={idx}
                >
                  <JobCard job={job} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
