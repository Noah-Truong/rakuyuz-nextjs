"use client";

import Link from "next/link";
import Image from "next/image";
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
          {/* Left - Diagram image */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card">
              <Image
                src="/photos/rakuyuz-method-diagram.png"
                alt="RAKUYU-Z工法 — 施工性・安全性・省力性・環境性・耐久性・機動性"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
