"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { companyInfo } from "@/lib/utils";

const highlights = [
  { label: "設立", value: "1995年" },
  { label: "受賞", value: "インフラメンテナンス大賞" },
  { label: "本社", value: "京都市右京区" },
  { label: "工法", value: "特許取得済" },
];

export function AboutSection() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left - Image placeholder */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-slate-100 rounded-xl flex items-center justify-center">
              <div className="text-center text-slate-400 p-8">
                <svg className="w-14 h-14 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-sm">協会イメージ</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="section-label">About Us</span>
              <h2 className="text-display-sm md:text-display-md font-semibold text-primary-900 mb-4">
                RAKUYU-Z工法の
                <br />普及と技術向上
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                RAKUYU-Z工法協会は、下水供用下における様々な工事が円滑かつ安全に進行することをサポートする
                RAKUYU-Z工法（不断水水替工法）の普及と工法技術のより一層の向上を目指しています。
              </p>
            </motion.div>

            {/* Company highlights */}
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={staggerItemVariants}
                  className="border-l-2 border-accent-500 pl-3 py-1"
                >
                  <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                  <div className="text-sm font-semibold text-primary-900">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <Button variant="primary" asChild>
                <Link href="/about">協会について</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/works">施工事例</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
