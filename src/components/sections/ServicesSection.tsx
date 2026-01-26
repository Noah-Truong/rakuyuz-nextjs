"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/Button";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const services = [
  {
    id: "construction",
    title: "工法について",
    description: "RAKUYU-Z工法（不断水水替工法）の概要と仕組みについて詳しく解説",
    features: ["不断水水替工法", "本管水替", "取付管水替"],
    href: "/construction",
  },
  {
    id: "specification",
    title: "6つの特徴",
    description: "目詰まり対応、省スペース、自動制御など、RAKUYU-Z工法の6つの優位性",
    features: ["耐久性", "機動性", "安全性", "施工性"],
    href: "/specification",
  },
  {
    id: "process",
    title: "施工手順",
    description: "着工から完了までの標準施工フローを詳しく紹介",
    features: ["準備工", "ポンプ設置", "迂回配管", "運転管理"],
    href: "/process",
  },
  {
    id: "machine",
    title: "主な使用機器",
    description: "特殊ポンプ、通水プラグ、ストッパーなど、施工に使用する専用機器",
    features: ["2/4/6インチポンプ", "通水プラグ", "ストッパー"],
    href: "/machine",
  },
];

export function ServicesSection() {
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          label="Services"
          title="RAKUYU-Z工法"
          description="不断水水替工法による効率的な下水道工事をサポート"
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={staggerItemVariants}>
              <Link
                href={service.href}
                className="block h-full bg-white border border-slate-200 rounded-xl p-6 md:p-7
                         hover:border-accent-400 hover:shadow-card transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0
                                group-hover:bg-accent-100 transition-colors">
                    <svg
                      className="w-5 h-5 text-accent-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-primary-900 mb-1.5 group-hover:text-accent-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <svg
                    className="w-5 h-5 text-slate-300 group-hover:text-accent-500 group-hover:translate-x-1 transition-all flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
