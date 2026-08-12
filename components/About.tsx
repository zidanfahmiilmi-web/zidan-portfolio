"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="
            text-4xl font-bold mb-8
            bg-linear-to-r from-blue-400 to-cyan-300
            bg-clip-text text-transparent
          "
        >
          {language === "en" ? "About Me" : "Tentang Saya"}
        </h2>

        <div className="space-y-5 text-slate-300 leading-relaxed">
          {language === "en" ? (
            <>
              <p>
                I am a Customer Experience Professional with experience in
                customer service, complaint handling, product education, and
                sales support.
              </p>
              <p>
                During my experience as a Customer Service Representative at
                Telkomsel, I handled various customer needs, provided solutions
                for customer issues, and helped customers understand products
                and services that matched their requirements.
              </p>
              <p>
                I believe that excellent customer experience is built through
                effective communication, empathy, problem solving, and
                continuous improvement.
              </p>
              <p>
                My background in customer service and aviation ground handling
                has developed my ability to work under pressure, adapt quickly,
                and collaborate with different teams.
              </p>
            </>
          ) : (
            <>
              <p>
                Saya adalah seorang profesional Customer Experience dengan
                pengalaman di bidang customer service, penanganan keluhan
                pelanggan, edukasi produk, serta dukungan aktivitas penjualan.
              </p>
              <p>
                Selama bekerja sebagai Customer Service Representative di
                Telkomsel, saya menangani berbagai kebutuhan pelanggan,
                memberikan solusi terhadap kendala yang dihadapi pelanggan,
                serta membantu pelanggan memahami produk dan layanan yang sesuai
                dengan kebutuhan mereka.
              </p>
              <p>
                Saya percaya bahwa pengalaman pelanggan yang baik dibangun
                melalui komunikasi yang efektif, empati, kemampuan menyelesaikan
                masalah, serta kemauan untuk terus berkembang.
              </p>
              <p>
                Latar belakang saya di bidang customer service dan ground
                handling penerbangan membentuk kemampuan saya untuk bekerja di
                bawah tekanan, beradaptasi dengan cepat, serta berkolaborasi
                dengan berbagai tim.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
