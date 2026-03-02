"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export default function ConstructionPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setVideoOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoOpen]);

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
            <span className="section-label text-accent-400">Construction Method</span>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              RAKUYU-Z工法
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              不断水水替工法による効率的な下水道工事
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-primary-300 bg-transparent text-primary-900 hover:bg-primary-50 hover:border-primary-400 transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              動画で詳しく
            </button>
            <Button variant="primary" asChild>
              <a href="/rakuyuz.pdf" download className="inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                資料をダウンロード
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1: Standard Image */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <SectionHeader
              label="Overview"
              title="水替工の標準イメージ"
              align="left"
            />
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  RAKUYU－Z工法は、下水や雨水等の供用下施工において、水替えを行わなければ施工困難な本体工事を補完する『不断水水替工法』であります。
                </p>
                <p className="text-slate-600 leading-relaxed">
                  RAKUYU－Z工法で水替えを行うことにより、地域生活者の排水制限を実施することなく、施工箇所が一定期間完全ドライ（又は施工可能な水位）の環境となり、現場の安全衛生が保たれ、本体工事の作業効率を高めるとともに、施工品質の確保が容易となります。
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card bg-slate-100">
                <Image
                  src="/photos/rakuyu-zi method/standard_img.png"
                  alt="水替工の標準イメージ"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Diagrams */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={staggerItemVariants} className="card">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">本管水替のイメージ図</h3>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                <Image
                  src="/photos/rakuyu-zi method/construction_img_new1.png"
                  alt="本管水替のイメージ図"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-slate-500 mt-4">
                本管に対する水替工法のイメージ図です。
              </p>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="card">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">取付管水替のイメージ図</h3>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                <Image
                  src="/photos/rakuyu-zi method/construction_img_new2.png"
                  alt="取付管水替のイメージ図"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-slate-500 mt-4">
                取付管に対する水替工法のイメージ図です。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Real Construction Example */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <SectionHeader
              label="Example"
              title="実例写真"
              align="left"
            />
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card bg-slate-100">
                <Image
                  src="/photos/rakuyu-zi method/pump_img.png"
                  alt="仮配管を地下とU字溝に埋設"
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary-900/90 text-white text-center py-2.5 text-sm">
                  仮配管を地下とU字溝に埋設
                </div>
              </div>
              <div>
                <p className="text-slate-600 leading-relaxed">
                  下の実例写真は、住宅密集地（DID地区）において、本管と取付管（２箇所）を常時排水し、夜間は交通規制を解除する条件です。そのため、道路交通や車庫の出入りの障害となる各所で仮配管を埋設（側溝内布設）しています。また、夜間の騒音を防ぐために「商用電源」を動力としてポンプを稼働させています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Other Construction Images */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Additional"
              title="その他の施工イメージ"
            />
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-card bg-white">
                <Image
                  src="/photos/rakuyu-zi method/standard_img2.png"
                  alt="その他の施工イメージ"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
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
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">お問い合わせ</h2>
              <p className="text-accent-100 text-sm">RAKUYU-Z工法についてのご質問やご相談はお気軽にどうぞ</p>
            </motion.div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button variant="white" asChild>
                <Link href="/contact">お問い合わせフォーム</Link>
              </Button>
              <Button variant="secondary" className="bg-accent-700 hover:bg-accent-800 border-0" asChild>
                <Link href="/specification">6つの特徴を見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 16 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="閉じる"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* 16:9 iframe wrapper */}
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/MRdPPpOpxPU?autoplay=1&rel=0"
                  title="RAKUYU-Z工法 動画"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </motion.div>

            <p className="absolute bottom-4 text-white/40 text-xs">Esc または背景をクリックで閉じる</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
