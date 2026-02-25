"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { sixFeatures } from "@/lib/utils";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const galleryImages: string[] = [
  '/photos/features/solution9_1.png',
  '/photos/features/solution9_2.png',
  '/photos/features/solution9_3.png'
];

const AutoGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={galleryImages[currentIndex]}
              alt={`水替スパンの移動 ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent-600 scale-110' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`スライド ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-3 h-1 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
          className="h-full bg-accent-600"
        />
      </div>
    </div>
  );
};

const categoryIcons: Record<string, React.ReactNode> = {
  "耐久性": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "機動性": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "施工性": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "環境性": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "安全性": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  "省力性": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function SpecificationPage() {
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
            <span className="section-label text-accent-400">Six Features</span>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              6つの特徴
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              RAKUYU-Z工法が選ばれる6つの理由
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {["耐久性", "機動性", "安全性", "施工性", "省力性", "環境性"].map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-subtle text-sm font-medium text-primary-900"
              >
                {categoryIcons[cat]}
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 max-w-5xl mx-auto"
          >
            {sixFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                variants={staggerItemVariants}
                className="card p-6 md:p-8"
              >
                {/* Feature Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-600 text-white font-bold text-lg">
                    {feature.id}
                  </span>
                  {feature.category && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 rounded-full text-sm font-medium text-accent-700">
                      {categoryIcons[feature.category]}
                      {feature.category}
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-6 text-primary-900">
                  {feature.title}
                </h3>

                {/* Before/After Comparison */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Before */}
                  <div className="relative">
                    <div className="absolute -top-3 left-4 z-10">
                      <span className="inline-block px-3 py-1 bg-slate-500 text-white text-xs font-bold rounded-full">
                        BEFORE
                      </span>
                    </div>
                    <div className="border-2 border-slate-300 rounded-lg p-4 pt-6">
                      {feature.beforeTitle && (
                        <p className="text-slate-600 font-medium mb-4 text-center text-sm">
                          {feature.beforeTitle}
                        </p>
                      )}
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                        <Image
                          src={feature.beforeImage}
                          alt={feature.beforeTitle || "Before"}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {feature.beforeImage2 && (
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mt-4">
                          <Image
                            src={feature.beforeImage2}
                            alt="Before (2)"
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative">
                    <div className="absolute -top-3 left-4 z-10">
                      <span className="inline-block px-3 py-1 bg-accent-600 text-white text-xs font-bold rounded-full">
                        AFTER
                      </span>
                    </div>
                    <div className="border-2 border-accent-500 rounded-lg p-4 pt-6">
                      {feature.afterTitle && (
                        <p className="text-accent-700 font-bold mb-4 text-center text-sm">
                          {feature.afterTitle}
                        </p>
                      )}
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                        <Image
                          src={feature.afterImage}
                          alt={feature.afterTitle || "After"}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {feature.afterImage2 && (
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mt-4">
                          <Image
                            src={feature.afterImage2}
                            alt="After (2)"
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Feature 8 */}
            <motion.div
              variants={staggerItemVariants}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-600 text-white font-bold text-lg">
                  8
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 rounded-full text-sm font-medium text-accent-700">
                  {categoryIcons["施工性"]}
                  施工性
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-primary-900">
                マンホールポンプ場改修も省スペースで水替
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="relative">
                  <div className="absolute -top-3 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-slate-500 text-white text-xs font-bold rounded-full">
                      BEFORE
                    </span>
                  </div>
                  <div className="border-2 border-slate-300 rounded-lg p-4 pt-6">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                      <Image
                        src="/photos/features/solution8_left.png"
                        alt="従来工法"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute -top-3 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-accent-600 text-white text-xs font-bold rounded-full">
                      AFTER
                    </span>
                  </div>
                  <div className="border-2 border-accent-500 rounded-lg p-4 pt-6">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                      <Image
                        src="/photos/features/solution8_right.png"
                        alt="RAKUYU-Z工法"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 9: Movement Gallery */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card p-6 md:p-8 max-w-5xl mx-auto mt-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-600 text-white font-bold text-lg">
                9
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 rounded-full text-sm font-medium text-accent-700">
                {categoryIcons["機動性"]}
                機動性
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-primary-900">
              水替スパンの移動がスムーズ
            </h3>
            <AutoGallery />
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
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">詳しい資料をお送りします</h2>
              <p className="text-accent-100 text-sm">RAKUYU-Z工法の詳細資料やお見積りなど、お気軽にお問い合わせください。</p>
            </motion.div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button variant="white" asChild>
                <Link href="/contact">お問い合わせフォーム</Link>
              </Button>
              <Button variant="secondary" className="bg-accent-700 hover:bg-accent-800 border-0" asChild>
                <Link href="/process">施工手順を見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
