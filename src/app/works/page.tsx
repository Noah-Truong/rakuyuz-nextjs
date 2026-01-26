"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/utils";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

// Get unique categories
const categories = [
  { id: "all", label: "すべて" },
  { id: "replacement", label: "布設替工事" },
  { id: "rehabilitation", label: "更生工事" },
  { id: "disaster", label: "災害復旧" },
  { id: "pump", label: "ポンプ場工事" },
  { id: "other", label: "その他" },
];

// Get unique regions
const regions = [
  { id: "all", label: "全国" },
  { id: "kanto", label: "関東" },
  { id: "chubu", label: "中部" },
  { id: "kinki", label: "近畿" },
  { id: "tohoku", label: "東北" },
  { id: "other", label: "その他" },
];

function getCategoryFromTitle(title: string): string {
  if (title.includes("布設替") || title.includes("改築推進") || title.includes("長距離")) return "replacement";
  if (title.includes("更生") || title.includes("伏せ越し")) return "rehabilitation";
  if (title.includes("震災") || title.includes("地震")) return "disaster";
  if (title.includes("ポンプ")) return "pump";
  return "other";
}

function getRegionFromLocation(location: string): string {
  if (location.includes("東京") || location.includes("千葉") || location.includes("宮城")) return "kanto";
  if (location.includes("静岡") || location.includes("石川") || location.includes("新潟") || location.includes("福井")) return "chubu";
  if (location.includes("京都")) return "kinki";
  if (location.includes("山形")) return "tohoku";
  return "other";
}

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeRegion, setActiveRegion] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    return caseStudies.filter((project) => {
      const categoryMatch = activeCategory === "all" || getCategoryFromTitle(project.title) === activeCategory;
      const regionMatch = activeRegion === "all" || getRegionFromLocation(project.location) === activeRegion;
      return categoryMatch && regionMatch;
    });
  }, [activeCategory, activeRegion]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-950" />
        <div className="container-custom relative z-10">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-white"
          >
            <span className="section-label text-accent-400">Case Studies</span>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              施工事例
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              RAKUYU-Z工法による全国の施工実績
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-slate-50 border-b border-slate-200 sticky top-16 z-20">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-accent-600 text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Region Filter */}
            <select
              value={activeRegion}
              onChange={(e) => setActiveRegion(e.target.value)}
              className="px-4 py-2 rounded-lg border border-slate-200 text-sm bg-white"
            >
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.label}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <p className="text-sm text-slate-500 mt-4">
            {filteredProjects.length} 件の施工事例
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={staggerItemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="card cursor-pointer group"
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] -mx-6 -mt-6 mb-4 overflow-hidden bg-slate-100 rounded-t-lg">
                    <Image
                      src={`/photos/construction examples/${project.folder}/${project.images[0]}`}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-2 py-1 bg-accent-600 text-white text-xs rounded">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-base font-semibold text-primary-900 line-clamp-2 group-hover:text-accent-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-2">
                    {project.content}
                  </p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600">
                      管径: {project.diameter}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = caseStudies.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-xl font-semibold text-primary-900 mb-2">{project.title}</h2>
                        <p className="text-slate-600">{project.content}</p>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Project Details Table */}
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse">
                        <tbody className="divide-y divide-slate-200">
                          <tr>
                            <th className="bg-slate-50 text-left px-4 py-3 font-medium text-sm text-slate-700 w-32">場所</th>
                            <td className="px-4 py-3 text-sm">{project.location}</td>
                          </tr>
                          <tr>
                            <th className="bg-slate-50 text-left px-4 py-3 font-medium text-sm text-slate-700">管径</th>
                            <td className="px-4 py-3 text-sm">{project.diameter}</td>
                          </tr>
                          <tr>
                            <th className="bg-slate-50 text-left px-4 py-3 font-medium text-sm text-slate-700">延長</th>
                            <td className="px-4 py-3 text-sm">{project.length}</td>
                          </tr>
                          <tr>
                            <th className="bg-slate-50 text-left px-4 py-3 font-medium text-sm text-slate-700">流量/日数</th>
                            <td className="px-4 py-3 text-sm">{project.flow}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Photo Gallery */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {project.images.map((img, index) => (
                        <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                          <Image
                            src={`/photos/construction examples/${project.folder}/${img}`}
                            alt={`${project.title} - ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-sm bg-accent-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-center md:text-left">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">施工のご相談</h2>
              <p className="text-accent-100 text-sm">現場条件に応じた施工計画をご提案いたします。</p>
            </motion.div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button variant="white" asChild>
                <Link href="/contact">お問い合わせフォーム</Link>
              </Button>
              <Button variant="secondary" className="bg-accent-700 hover:bg-accent-800 border-0" asChild>
                <Link href="/machine">使用機器を見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
