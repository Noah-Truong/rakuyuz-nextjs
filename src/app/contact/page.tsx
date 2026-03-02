"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { companyInfo } from "@/lib/utils";
import { fadeUpVariants } from "@/lib/animations";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
            <span className="section-label text-accent-400">Contact Us</span>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              お問い合わせ
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              RAKUYU-Z工法についてのご質問・ご相談はこちらから
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-600 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-sm text-slate-600">
                {companyInfo.address.postal}<br />
                {companyInfo.address.full}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-600 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a href={`tel:${companyInfo.phone.replace(/-/g, "")}`} className="text-lg font-semibold text-accent-600">
                {companyInfo.phone}
              </a>
              <span className="text-xs text-slate-500">FAX: {companyInfo.fax}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-600 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href={`mailto:${companyInfo.email}`} className="text-accent-600 text-sm">
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <SectionHeader
              label="Form"
              title="お問い合わせフォーム"
              description="下記フォームに必要事項をご記入の上、送信してください。"
            />

            {submitStatus === "success" ? (
              <div className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">送信完了</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  お問い合わせいただきありがとうございます。<br />
                  担当者より折り返しご連絡いたします。
                </p>
                <Button variant="primary" onClick={() => setSubmitStatus("idle")}>
                  新しいお問い合わせ
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 md:p-8">
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                      placeholder="山田 太郎"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                      placeholder="株式会社〇〇"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                        placeholder="000-0000-0000"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                      件名 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="inquiry">工法についてのお問い合わせ</option>
                      <option value="estimate">お見積りのご依頼</option>
                      <option value="consultation">施工相談</option>
                      <option value="document">資料請求</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-y"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  {/* Submit */}
                  <div className="text-center pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto sm:min-w-[200px]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          送信中...
                        </>
                      ) : (
                        <>
                          送信する
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
