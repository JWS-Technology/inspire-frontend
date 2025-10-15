"use client";

import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    // responsive outer padding instead of p-14
    <div className="px-4 py-8 sm:px-6 lg:px-14">
      <section className="max-w-6xl mx-auto rounded-xl shadow-sm border border-orange-100 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start overflow-hidden">
        {/* Left Side */}
        <div className="min-w-0"> {/* min-w-0 allows children to shrink and wrap on small screens */}
          <button className="bg-orange-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow hover:bg-orange-600 transition">
            Get In Touch
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Lets Build Something <br /> Great Together
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Have a project in mind? Need training for your team? Lets discuss how
            we can help.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                <Phone size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-gray-900">+91 93605 05768</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm sm:text-lg">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                <Mail size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500">Email</p>
                {/* allow long emails to wrap instead of overflowing */}
                <p className="font-semibold text-gray-900 break-words max-w-full">
                  info@inspiresoftechgroup.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                <MapPin size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500">Office</p>
                <p className="font-semibold text-gray-900">Chennai, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-4 min-w-0"> {/* min-w-0 here too */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-md border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-md border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          <select className="w-full rounded-md border border-gray-200 px-4 py-3 text-gray-600 focus:ring-2 focus:ring-orange-400 focus:outline-none">
            <option value="">Select Service Interest</option>
            <option value="training">Corporate Training</option>
            <option value="internship">Internship Programs</option>
            <option value="software">Software Development</option>
            <option value="consulting">Consulting</option>
          </select>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-md border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md flex justify-center items-center gap-2 transition"
          >
            Send Message
            <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactSection;
