import React, { useState } from "react";
import {
  Monitor,
  Smartphone,
  Cloud,
  Shield,
  ArrowUpRight,
  X,
} from "lucide-react";

const Services = () => {
  const [showCvModal, setShowCvModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const services = [
    {
      title: "Bidang Administrasi",
      description: "",
      icon: Monitor,
      gradient: "from-violet-600 to-indigo-600",
      features: [
        "PT Duta Hita Jaya Admin Produksi Progress dari November 2024 - Sekarang",
        "CV Trubus Jaya Abadi Admin Operasional dari Maret 2023 – Desember 2023",
        "Online Shop Craft Jogja Admin Marketpalace dari Maret 2024 - Juni 2024",
      ],
    },
    {
      title: "Bidang Teknologi",
      description: "",
      icon: Smartphone,
      gradient: "from-indigo-600 to-blue-600",
      features: [
        "Dinas Perpus Arsip Sleman Web Support & Entry Data dari Februari 2023 - Maret 2023",
        "PT Bursa Efek Indonesia DIY Magang Team Digital Web Mei 2022 - Juli 2022",
        "Dinas Perpus Arsip Sleman Magang Desiner Web Support Februari 2021 – Maret 2021",
      ],
    },
    {
      title: "Pelatihan Sertifikasi",
      description: "",
      icon: Cloud,
      gradient: "from-blue-600 to-sky-600",
      features: [
        "PT Ebiz Prima Nusa X KarirNex Pelatihan Sertifikasi Microsoft office Excel Speciallist Desember 2023",
        "PT Inixindo Persada Rekayasa Komputer Sertifikasi Profesi Pengelolaan Layanan TI Februari 2022",
        "SMKN 13 Bekasi Sertifikasi Kompetensi Teknik Komputer Jaringan Mei 2019",
      ],
    },
    {
      title: "Publikasi",
      description: "",
      icon: Shield,
      gradient: "from-sky-600 to-cyan-600",
      features: [
        "Sistem Pendukung Keputusan Pemilihan Makanan Balita Android https://shorturl.at/MenPf",
        "Team Sosialisasi Pengabdian Masyarakat Pencegahan Stunting Pada Balita Di Wilayah Kerja Puskesmas Dlingo2 https://shorturl.at/VGo83",
        "Aplikasi Skrining Kanker Payudara Karya Tim PKM Unisa Yogyakarta https://shorturl.at/PB4oG",
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Pengalaman Kerja & Magang</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Crafting Digital
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Experiences with Passion
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Berikut adalah beberapa pengalaman kerja yang pernah saya jalani.
            Setiap peran memberikan kesempatan untuk belajar, berkembang, dan
            berkontribusi secara langsung dalam berbagai proyek serta lingkungan
            kerja yang beragam.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative space-y-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon size={28} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-base text-slate-600"
                    >
                      <span className="mr-2 font-medium">{idx + 1}.</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-100">
                  <button className="group inline-flex items-center text-sm font-medium text-slate-900 hover:text-violet-600 transition-colors">
                    Learn more
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-full max-w-2xl p-8 rounded-3xl bg-slate-900 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10" />

            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-white">
                "Saya terbuka untuk peluang baru dan kolaborasi."
              </h3>
              <p className="text-slate-400">
                Together, we can craft innovative digital solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowCvModal(true)}
                  className="px-8 py-4 rounded-full bg-white text-slate-900 font-medium hover:shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  CV Sabrina Khusnul Khotimah
                </button>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="px-8 py-4 rounded-full border-2 border-slate-700 text-white font-medium hover:bg-slate-800 transition-all duration-300"
                >
                  Kontak
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 max-w-3xl w-full relative">
            <button
              onClick={() => setShowCvModal(false)}
              className="absolute top-4 right-4 text-slate-700 hover:text-red-500"
            >
              <X />
            </button>
            <iframe
              src="./assets/CVSabrinakh.pdf"
              className="w-full h-[500px]"
              title="CV PDF"
            />
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg relative text-center">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-slate-700 hover:text-red-500"
            >
              <X />
            </button>
            <img
              src="./assets/SAB.jpeg"
              alt="Foto Sabrina"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Sabrina Khusnul Khotimah S,Kom.</h3>
            <p className="text-slate-600 mb-2">Email: sabrinakhusnulkh@gmail.com</p>
            <p className="text-slate-600 mb-2">WhatsApp: +62 888 6342 115</p>
            <p className="text-slate-600">LinkedIn://www.linkedin.com/in/sabrinakhusnulkh/</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
