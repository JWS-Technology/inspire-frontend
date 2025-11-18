import React from "react";
import {
  Menu,
  ArrowRight,
  Users,
} from "lucide-react";

const WorkSection = () => {
  return (
    <section className="bg-[#faf8f6] py-16 my-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: intro + stats + CTA */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Menu className="w-4 h-4" />
              JOIN OUR TEAM
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Work With <span className="text-amber-500">Inspire</span>
          </h2>

          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Explore exciting internship and career opportunities with Inspire
            Softech Group and be part of our growing innovation ecosystem. Join
            a team that values excellence, innovation, and continuous growth.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 text-white rounded-lg p-3 text-sm font-semibold w-12 h-12 flex items-center justify-center">
                15+
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Open Positions
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-500 text-white rounded-lg p-3 text-sm font-semibold w-12 h-12 flex items-center justify-center">
                5000+
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Interns Trained
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-green-500 text-white rounded-lg p-3 text-sm font-semibold w-12 h-12 flex items-center justify-center">
                4
              </div>
              <div className="text-sm text-gray-600 font-medium">Companies</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="/careers"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 focus:ring-2 focus:ring-amber-300 text-white font-semibold px-6 py-3 rounded shadow transition-transform transform hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT: card with bullets */}
        <aside className="rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-amber-50 via-indigo-50 to-purple-50 p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-amber-400 text-white rounded-full p-4 w-20 h-20 flex items-center justify-center shadow-md">
                <Users className="w-8 h-8" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Join Our Innovation Ecosystem
              </h3>
              <p className="text-gray-600 mt-2">
                Be part of a diverse, talented team driving technological
                excellence.
              </p>

              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
                  Internships
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  Training
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  Full-time Roles
                </span>
              </div>

              <div className="mt-6 text-center md:text-left">
                <a
                  href="/careers"
                  className="text-sm font-medium text-amber-700 hover:underline font-semibold"
                >
                  Register for Internship
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default WorkSection;
