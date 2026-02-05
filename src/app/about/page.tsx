"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { companyInfo, businessActivities } from "@/lib/utils";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

// Timeline data
const historyTimeline = [
  {
    year: "1995年",
    title: "協会設立",
    description: "RAKUYU-Z工法協会を設立。不断水水替工法の普及活動を開始。",
  },
  {
    year: "2012年",
    title: "工法確立",
    description: "RAKUYU-Z工法の技術基準を確立。全国での施工実績が拡大。",
  },
  {
    year: "2017年",
    title: "特許登録",
    description: "RAKUYU-Z工法関連技術の特許を取得。技術の信頼性が認定。",
  },
  {
    year: "2020年",
    title: "受賞認定",
    description: "第4回インフラメンテナンス大賞にて防衛大臣賞・優秀賞を受賞。",
  },
];

export default function AboutPage() {
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
            <span className="section-label text-accent-400">About the Association</span>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              協会概要
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              RAKUYU-Z工法の普及を目指して
            </p>
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Purpose"
              title="目的"
              align="left"
            />
            <div className="card p-6 md:p-8 max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-primary-900 mb-6">
                本会はRAKUYU－Z工法の普及と技術の向上を図り、会員の情報交換と親睦を図ることを目的としています。
              </p>
              <p className="text-slate-600">
                我々RAKUYU－Z工法協会は、下水供用下における様々な工事が円滑かつ安全に進行することをサポートするRAKUYU－Z工法（不断水水替工法）の普及と工法技術のより一層の向上を求め、それらを円滑に行うべく会員相互の情報交換と親睦を図ることを目的とします。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="History"
              title="沿革"
            />
            
            {/* Timeline */}
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-200 -translate-x-1/2" />
              
              {/* Timeline Items */}
              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {historyTimeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    variants={staggerItemVariants}
                    className={`relative flex items-start gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-accent-600 rounded-full border-4 border-white shadow" />
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="card">
                        <span className="inline-block px-3 py-1 bg-accent-600 text-white text-xs font-bold rounded-full mb-3">
                          {item.year}
                        </span>
                        <h4 className="text-base font-semibold text-primary-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Award Highlight Section */}
      <section className="py-12 bg-accent-600">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center md:text-left"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-accent-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <p className="text-accent-200 font-medium text-sm mb-1">受賞実績</p>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                第4回インフラメンテナンス大賞
              </h3>
              <p className="text-accent-100">
                防衛大臣賞・技術開発部門 優秀賞受賞（2020年）
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Activities Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Business"
              title="事業"
              align="left"
            />
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <motion.ul
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {businessActivities.map((activity, index) => (
                    <motion.li
                      key={index}
                      variants={staggerItemVariants}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-accent-600 text-white text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-slate-600 text-sm">{activity}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="card p-6">
                <p className="text-slate-600 text-sm">
                  下水供用下における施設の維持・管理には、本工事と必ずセットとしての水替が必要となる工事が多々あります。そして、その必要な水替も施工条件によって手法は様々あり、経済的で合理性に富んだ工法が要求されます。様々な要求を満たしたRAKUYU－Z工法の事業を展開しております。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Location"
              title="所在地"
              align="left"
            />
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <th className="text-left py-4 pr-4 font-medium text-slate-700 w-1/3">所在地</th>
                      <td className="py-4 text-slate-600">
                        {companyInfo.address.postal}<br />
                        {companyInfo.address.full}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-left py-4 pr-4 font-medium text-slate-700">TEL</th>
                      <td className="py-4">
                        <a href={`tel:${companyInfo.phone.replace(/-/g, "")}`} className="text-accent-600 hover:underline">
                          {companyInfo.phone}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-left py-4 pr-4 font-medium text-slate-700">FAX</th>
                      <td className="py-4 text-slate-600">{companyInfo.fax}</td>
                    </tr>
                    <tr>
                      <th className="text-left py-4 pr-4 font-medium text-slate-700">最寄り駅</th>
                      <td className="py-4 text-slate-600">{companyInfo.nearestStation}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Map Placeholder */}
              <div className="card p-0 overflow-hidden">
                <div className="relative aspect-[4/3] bg-slate-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-slate-500 text-sm">
                      京都市右京区西京極北大入町66
                    </p>
                    <Button variant="outline" size="sm" className="mt-4" asChild>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address.full)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Mapで見る
                      </a>
                    </Button>
                  </div>
                </div>
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
              <p className="text-accent-100 text-sm">RAKUYU-Z工法協会へのお問い合わせはこちらから</p>
            </motion.div>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <a
                href={`tel:${companyInfo.phone.replace(/-/g, "")}`}
                className="flex items-center gap-2 text-white hover:text-accent-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg font-semibold">{companyInfo.phone}</span>
              </a>
              <Button variant="white" asChild>
                <Link href="/contact">お問い合わせフォーム</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
