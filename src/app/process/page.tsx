"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { processSteps } from "@/lib/utils";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0">
          <Image
            src="/photos/water.png"
            alt=""
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-primary-950/60" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-white"
          >
            <span className="section-label text-accent-400">Construction Process</span>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              施工手順
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              RAKUYU-Z工法による標準施工フロー
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Flow Diagram */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <SectionHeader
              label="Flow Chart"
              title="本工法の標準施工フロー"
            />
            <p className="text-sm text-slate-500 mb-6 text-center">
              （なお、点線で記した工種は必要な場合に別途考慮します。）
            </p>
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-card bg-white mb-8">
              <Image
                src="/photos/procedure/flow_main_img.png"
                alt="本工法の標準施工フロー"
                fill
                className="object-contain p-6"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step Navigation */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-20">
        <div className="container-custom">
          <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-hide">
            {processSteps.map((step) => (
              <a
                key={step.step}
                href={`#step-${step.step}`}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeStep === step.step
                    ? "bg-accent-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 text-xs">
                  {step.step}
                </span>
                {step.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 max-w-5xl mx-auto"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                id={`step-${step.step}`}
                variants={staggerItemVariants}
                className="card scroll-mt-32"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-accent-600 text-white font-bold text-xl">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4 text-primary-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {step.description}
                    </p>

                    {/* Images */}
                    {step.images && step.images.length > 0 && (
                      <div className={`grid gap-4 ${step.images.length > 1 ? "md:grid-cols-2" : "max-w-xl"}`}>
                        {step.images.map((img, imgIndex) => (
                          <div key={imgIndex} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 shadow-subtle">
                            <Image
                              src={img}
                              alt={`${step.title} ${step.images && step.images.length > 1 ? (imgIndex === 0 ? "（本管）" : "（取付管）") : ""}`}
                              fill
                              className="object-contain p-2"
                            />
                            {step.images && step.images.length > 1 && (
                              <div className="absolute bottom-0 left-0 right-0 bg-primary-900 text-white text-center py-1 text-sm">
                                {imgIndex === 0 ? "本管" : "取付管"}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Note */}
                    {step.note && (
                      <div className="mt-4 p-4 bg-accent-50 rounded-lg border-l-4 border-accent-500">
                        <p className="text-sm text-slate-600">
                          <strong className="text-primary-900">注: </strong>
                          {step.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">施工についてのご相談</h2>
              <p className="text-accent-100 text-sm">現場条件に応じた施工計画のご提案をいたします。</p>
            </motion.div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button variant="white" asChild>
                <Link href="/contact">お問い合わせフォーム</Link>
              </Button>
              <Button variant="secondary" className="bg-accent-700 hover:bg-accent-800 border-0" asChild>
                <Link href="/works">施工事例を見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
