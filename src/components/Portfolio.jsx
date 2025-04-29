import React, { useState, useEffect } from "react";
import { ArrowUpRight, Code } from "lucide-react";
import LazyImage from "./LazyImage";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All", "Web", "Mobile", "Cloud"];

  const projects = [
    {
      title: "Sistem Web Support di Perpus Sleman",
      shortDescription: "Sistem Web Support QR Code Cerdas untuk Akses Layanan Literasi Sleman",
      fullDescription: [
        "Dinas Perpustakaan dan Kearsipan Kabupaten Sleman menghadirkan Sistem Web Support Perpustakaan Sleman, yaitu layanan berbasis QR Code yang memudahkan masyarakat dalam mengakses berbagai link website resmi milik Perpustakaan dan Arsip Sleman. Setelah warga memindai barcode yang tersedia di plakat, mereka akan diarahkan ke satu halaman web yang berisi kumpulan tautan seperti e-library, katalog digital, dan berbagai layanan literasi lainnya.",
        "Plakat dengan QR Code ini sudah dipasang di berbagai titik strategis di wilayah Sleman, seperti kantor kelurahan, sekolah, ruang publik, dan fasilitas umum lainnya. Contoh Plakat dapat dilihat pada gambar.",
      ],
      images: ["./assets/7.png", "./assets/8.jpeg", "./assets/2.png", "./assets/3.png", "./assets/4.png","./assets/5.png","./assets/6.png"],
      category: "Web",
      technologies: ["HTML", "CSS", "JavaScript"],
      metrics: [
        { label: "Conversion", value: "+45%" },
        { label: "Performance", value: "99.9%" },
      ],
    },
    {
      title: "Website Landing Page PesanKami",
      shortDescription: "Sistem Webiste Landing page untuk jasa layanan digital yang profesional",
      fullDescription: [
        "PesanKami adalah sebuah landing page modern yang saya kembangkan pada tahun 2024 untuk mempromosikan layanan digital Website ini dirancang dengan tampilan profesional guna menarik perhatian calon klien serta memudahkan mereka memahami layanan yang ditawarkan",
        "Proyek ini juga menjadi portofolio saya dalam menunjukkan kemampuan teknis di bidang web development, mulai dari desain antarmuka hingga deployment menggunakan GitHub Pages.",
      ],
        images: ["./assets/1a.png", "./assets/1b.png", "./assets/1c.png", "./assets/1e.png", "./assets/1d.png","./assets/1e.png","./assets/1f.png","./assets/1g.png"],
        category: "Web",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      metrics: [
        { label: "Visits", value: "2K+" },
        { label: "Feedback", value: "Positive" },
      ],
      
    },
    {
      title: "Website Portfolio Pribadi",
      shortDescription: "Proyek dan keahlian digital saya, secara kreatif dan inovatif.",
      fullDescription:
        "Website profesional untuk menampilkan pengalaman, keahlian, dan proyek-proyek digital saya sebagai pengembang web.",
        images: ["./assets/2a.png", "./assets/2b.png", "./assets/1c.png", "./assets/1e.png", "./assets/1d.png","./assets/1e.png","./assets/1f.png","./assets/1g.png"],
      category: "Web",
      technologies: ["React", "TailwindCSS", "HTML", "Js"],
      metrics: [
        { label: "Uptime", value: "100%" },
        { label: "Deploy", value: "GitHub Pages" },
      ],
    },
    {
      title: " Sistem Absensi Murid di SMKN 13 Kota Bekasi",
      shortDescription: "Sistem telah selesai dibuat, Terdapat masalah uplaod ke github",
      fullDescription:
        "Sistem telah selesai dikembangkan, namun proses upload ke GitHub sedikit tertunda karena file-nya sempat tidak ditemukan. ",
      images: ["./assets/so.png"],
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Framework Laravel"],
      metrics: [
        { label: "App Rating", value: "4.9" },
        { label: "Daily Users", value: "50K+" },
      ],
    },
    {
      title: "Cloud Migration",
      shortDescription: "Coming Soon",
      fullDescription:
        "Migrasi infrastruktur besar-besaran ke cloud untuk meningkatkan efisiensi dan menghemat biaya hingga 60%.",
      images: ["./assets/so.png"],
      category: "Cloud",
      technologies: ["AWS", "Kubernetes"],
      metrics: [
        { label: "Cost Saving", value: "60%" },
        { label: "Uptime", value: "99.99%" },
      ],
    },
    
  ];

  useEffect(() => {
    if (!selectedProject || !selectedProject.images?.length) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedProject.images.length
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <section className="relative py-30 pb-28 bg-slate-50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">My Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Showcasing
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              My Digital Expertise
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Empowering innovation through tailored digital solutions,
            designed to support impactful and sustainable growth.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {projects
            .filter(
              (project) =>
                activeFilter === "All" || project.category === activeFilter
            )
            .map((project) => (
              <div
                key={project.title}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-white">
                  <LazyImage
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-white">
                            <div className="text-sm opacity-75">
                              {metric.label}
                            </div>
                            <div className="text-lg font-bold">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-50 text-sm text-gray-600"
                      >
                        <Code size={14} />
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                    className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium group"
                  >
                    View Details
                    <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn relative">
            <div className="relative bg-white">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-64 object-contain transition-all duration-700"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full p-2"
              >
                ✕
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex((prevIndex) =>
                    prevIndex === 0
                      ? selectedProject.images.length - 1
                      : prevIndex - 1
                  )
                }
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full"
              >
                {"<"}
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % selectedProject.images.length
                  )
                }
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full"
              >
                {">"}
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedProject.title}
              </h2>
              <div
                className="text-gray-600 mb-4 space-y-4"
                style={{ textAlign: "justify" }}
              >
                {Array.isArray(selectedProject.fullDescription)
                  ? selectedProject.fullDescription.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))
                  : <p>{selectedProject.fullDescription}</p>}
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
                  >
                    <Code size={14} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
