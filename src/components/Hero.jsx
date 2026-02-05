import React from "react";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    { value: "DigiWorks", label: "Explore My Digital Creations" },
    { value: "Project's", label: "Real Projects Delivered By Team Freelance" },
    { value: "3+", label: "Published Projects & Research" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-200 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="text-center space-y-10 max-w-4xl mx-auto">

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900">
            Sabs Transforms
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Vision
            </span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            I’m a versatile professional offering web development, admin support,
            mobile and laptop repairs, and freelance data entry.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group inline-flex items-center"
            >
              My Work in Action
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => navigate("/portfolio")}
              className="px-8 py-4 rounded-full border-2 border-slate-700 text-slate-900 font-medium hover:bg-slate-50 transition-all duration-300 group inline-flex items-center"
            >
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <p className="text-3xl font-bold text-slate-900">{value}</p>
                  <p className="mt-2 text-sm text-slate-600">{label}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
