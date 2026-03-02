"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { ModelViewer } from "@/components/ui/ModelViewer";
import { pumpSpecs, waterFlowPlugSpecs, stopperSpecs } from "@/lib/utils";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export default function MachinePage() {
  const [selectedPump, setSelectedPump] = useState(0);

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
            <span className="section-label text-accent-400">Main Equipment</span>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              主な使用機器
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              RAKUYU-Z工法を支える専用機器
            </p>
          </motion.div>
        </div>
      </section>

      {/* Special Pumps Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Special Pumps"
              title="特殊ポンプ"
              description="用途に応じた3種類の特殊ポンプをご用意しています。"
              align="left"
            />

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
              {/* 3D Model Viewer */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 shadow-card">
                <ModelViewer
                  key={pumpSpecs[selectedPump].modelPath}
                  modelPath={pumpSpecs[selectedPump].modelPath}
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full">
                    ドラッグで回転 • スクロールで拡大
                  </span>
                </div>
              </div>

              {/* Pump Selector */}
              <div className="space-y-4">
                {pumpSpecs.map((pump, index) => (
                  <button
                    key={pump.model}
                    onClick={() => setSelectedPump(index)}
                    className={`w-full text-left card transition-all ${
                      selectedPump === index
                        ? "ring-2 ring-accent-500 shadow-elevated"
                        : "hover:shadow-card"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 flex items-center justify-center rounded-lg ${
                        selectedPump === index
                          ? "bg-accent-600 text-white"
                          : "bg-slate-100 text-accent-600"
                      }`}>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary-900">{pump.model}</h4>
                        <p className="text-sm text-slate-500">
                          口径: {pump.diameter}mm / 吐出量: {pump.output}㎥/min
                        </p>
                      </div>
                      {selectedPump === index && (
                        <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pump Specifications Table */}
            <div className="mt-8 max-w-5xl mx-auto">
              <p className="text-sm text-slate-500 mb-4">
                以下の表は横スクロールでご覧ください。
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-slate-700">機種</th>
                      <th className="px-4 py-3 text-left font-medium text-slate-700">口径 (mm)</th>
                      <th className="px-4 py-3 text-left font-medium text-slate-700">吐出量(参考) (㎥/min)</th>
                      <th className="px-4 py-3 text-left font-medium text-slate-700">使用電力 (kw)</th>
                      <th className="px-4 py-3 text-left font-medium text-slate-700">電源</th>
                      <th className="px-4 py-3 text-left font-medium text-slate-700">重量 (Kg)</th>
                      <th className="px-4 py-3 text-left font-medium text-slate-700">寸法(㎜) 幅×長さ×高さ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {pumpSpecs.map((pump) => (
                      <tr key={pump.model} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-primary-900">{pump.model}</td>
                        <td className="px-4 py-3">{pump.diameter}</td>
                        <td className="px-4 py-3">{pump.output}</td>
                        <td className="px-4 py-3">{pump.power}</td>
                        <td className="px-4 py-3">{pump.voltage}</td>
                        <td className="px-4 py-3">{pump.weight}</td>
                        <td className="px-4 py-3">{pump.dimensions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RAKUYU-Z Water Pump Section with Subsections */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="RAKUYU-Z Water Pump"
              title="通水ポンプ（ラクユーZ）"
              description="通水プラグとストッパーの仕様一覧です。"
              align="left"
            />

            {/* 3D Models of industrial water pumps */}
            <div className="justify-center gap-6 mb-8 max-w-xs mx-auto">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 shadow-card">
                <ModelViewer
                  key="/models/gas-cylinder-3d-model.glb"
                  modelPath="/models/gas-cylinder-3d-model.glb"
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full">
                    ドラッグで回転 • スクロールで拡大
                  </span>
                </div>
              </div>
            </div>

            {/* Subsections Container */}
            <div className="space-y-8">
              {/* Water Flow Plug Subsection */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 md:p-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">通水器（ラクユーZ）</h3>
                <p className="text-slate-600 mb-6">管径に応じた通水プラグの仕様一覧です。</p>
              
              
            
                {/* 3D Model Viewers */}
                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 shadow-card">
                    <ModelViewer
                      key="/models/mechanical-flange-3d-model.glb"
                      modelPath="/models/mechanical-flange-3d-model.glb"
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full">
                        ドラッグで回転 • スクロールで拡大
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 shadow-card">
                    <ModelViewer
                      key="/models/circular-mechanical-hatch-3d-model.glb"
                      modelPath="/models/circular-mechanical-hatch-3d-model.glb"
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full">
                        ドラッグで回転 • スクロールで拡大
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-500 mb-4">以下の表は横スクロールでご覧ください。</p>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">機種</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">適用管径 (mm)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">外径 (mm)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">長さ (mm)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">水頭 (m)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">重量 (Kg)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">バイパス径 (mm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {waterFlowPlugSpecs.map((spec) => (
                        <tr key={spec.model} className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-medium text-primary-900">{spec.model}</td>
                          <td className="px-4 py-3">{spec.diameter}</td>
                          <td className="px-4 py-3">{spec.outerDiam}</td>
                          <td className="px-4 py-3">{spec.length}</td>
                          <td className="px-4 py-3">{spec.head}</td>
                          <td className="px-4 py-3">{spec.weight}</td>
                          <td className="px-4 py-3">{spec.bypass}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Stopper Subsection */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 md:p-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">ラクユーZ・ストッパー</h3>
                <p className="text-slate-600 mb-6">大口径管に対応したストッパーの仕様一覧です。</p>

                {/* 3D Model Viewer */}
                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 shadow-card">
                    <ModelViewer
                      key="/models/surveying-instrument-3d-model.glb"
                      modelPath="/models/surveying-instrument-3d-model.glb"
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full">
                        ドラッグで回転 • スクロールで拡大
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 shadow-card">
                    <ModelViewer
                      key="/models/r-zs-1800-machinery-model.glb"
                      modelPath="/models/r-zs-1800-machinery-model.glb"
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full">
                        ドラッグで回転 • スクロールで拡大
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-500 mb-4">以下の表は横スクロールでご覧ください。</p>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">機種</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">適用管径 (mm)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">外径 (mm)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">長さ (mm)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">水頭 (m)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">重量 (Kg)</th>
                        <th className="px-4 py-3 text-left font-medium text-slate-700">バイパス径 (mm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {stopperSpecs.map((spec) => (
                        <tr key={spec.model} className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-medium text-primary-900">{spec.model}</td>
                          <td className="px-4 py-3">{spec.diameter}</td>
                          <td className="px-4 py-3">{spec.outerDiam}</td>
                          <td className="px-4 py-3">{spec.length}</td>
                          <td className="px-4 py-3">{spec.head}</td>
                          <td className="px-4 py-3">{spec.weight}</td>
                          <td className="px-4 py-3">{spec.bypass}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automatic Control System Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Automatic Control System"
              title="自動制御システム（制御盤）"
              description="ポンプの自動運転・監視制御を行う制御盤です。"
            />
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 shadow-card">
                <Image src="/photos/machine/machine_img7.png" alt="自動制御システム（制御盤）" fill className="object-cover" />
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">自動制御システム（制御盤）</h3>
                <p className="text-slate-600">ポンプの自動運転・監視制御を行う制御盤です。施工中のポンプ稼働状況をリアルタイムで監視・制御し、安全で効率的な排水作業を実現します。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Temporary Drainage Pipe Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Temporary Drainage Pipe"
              title="仮排水管"
              description="迂回排水用の仮設配管システムです。"
            />
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 shadow-card">
                <Image src="/photos/machine/machine_img8.png" alt="仮排水管" fill className="object-cover" />
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">仮排水管</h3>
                <p className="text-slate-600">迂回排水用の仮設配管システムです。施工箇所周辺の排水を安全に迂回させ、工事中の水流を適切に管理します。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Equipment Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Other Equipment"
              title="その他の機器"
              description="施工に使用するその他の機器類です。"
            />

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center max-w-5xl mx-auto"
            >
             {/* 3D Model Viewer */}
             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
              <div className="flex flex-col">
                <h3 className="text-xl text-center font-semibold text-primary-900 mb-4">コンプレッサーLT</h3>
                <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 shadow-card">                 
                  <ModelViewer
                    key="/models/vacuum-pump-3d-model.glb"
                    modelPath="/models/vacuum-pump-3d-model.glb"
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full">
                      ドラッグで回転 • スクロールで拡大
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl text-center font-semibold text-primary-900 mb-4">コンプレッサーST</h3>
                <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 shadow-card">
                <ModelViewer
                    key="/models/air-compressor-3d-model.glb"
                    modelPath="/models/air-compressor-3d-model.glb"
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full">
                      ドラッグで回転 • スクロールで拡大
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl text-center font-semibold text-primary-900 mb-4">ダストキャップ</h3>
                <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 shadow-card">
                  <ModelViewer
                    key="/models/metal-pot-set-3d-model.glb"
                    modelPath="/models/metal-pot-set-3d-model.glb"
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full">
                      ドラッグで回転 • スクロールで拡大
                    </span>
                  </div>
                </div>
              </div>
             </div>
            </motion.div>
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
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">機器についてのお問い合わせ</h2>
              <p className="text-accent-100 text-sm">機器の詳細や施工条件に合わせた機器選定についてご相談ください。</p>
            </motion.div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button variant="white" asChild>
                <Link href="/contact">お問い合わせフォーム</Link>
              </Button>
              <Button variant="secondary" className="bg-accent-700 hover:bg-accent-800 border-0" asChild>
                <Link href="/about">協会について</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
