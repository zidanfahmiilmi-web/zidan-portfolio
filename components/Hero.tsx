"use client";

import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <AnimationWrapper>
      <section
        className="
          min-h-screen flex items-center px-4 md:px-6 py-12 md:py-24
          text-white glass-card
        "
      >
        <div
          className="
            max-w-6xl mx-auto grid gap-10
            md:grid-cols-2 items-center
          "
        >
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[6px] text-blue-400 mb-4 text-sm md:text-base">
              {language === "en"
                ? "Customer Experience Professional"
                : "Profesional Customer Experience"}
            </p>

            <h1
              className="
                text-3xl md:text-7xl font-bold
                bg-linear-to-r from-blue-400 to-cyan-300
                bg-clip-text text-transparent
              "
            >
              Zidan Fahmi Ilmi
            </h1>

            <h2 className="text-lg md:text-3xl mt-5 text-slate-200">
              {language === "en"
                ? "Customer Service | Customer Experience | Relationship Management"
                : "Customer Service | Pengalaman Pelanggan | Manajemen Relasi"}
            </h2>

            <p className="mt-6 max-w-xl text-slate-300 leading-relaxed text-sm md:text-base">
              {language === "en"
                ? `Professional with experience in customer service,
                   handling complaints, product education, and sales support.
                   Passionate about creating positive customer experiences.`
                : `Profesional dengan pengalaman dalam customer service,
                   menangani keluhan pelanggan, edukasi produk,
                   serta mendukung aktivitas penjualan.
                   Berfokus menciptakan pengalaman pelanggan yang positif.`}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <a
                href="/CV-Zidan-Fahmi-Ilmi.pdf"
                download
                className="
                  w-full md:w-auto px-7 py-3 rounded-xl
                  bg-white/10 border border-white/20
                  backdrop-blur-md shadow-lg
                  text-white font-semibold
                  hover:bg-white/20 hover:border-white/30
                  transition-all duration-300
                "
              >
                {language === "en" ? "Download CV" : "Unduh CV"}
              </a>

              <a
                href="#contact"
                className="
                  w-full md:w-auto px-7 py-3 rounded-xl
                  bg-white/10 border border-white/20
                  backdrop-blur-md shadow-lg
                  text-white font-semibold
                  hover:bg-white/20 hover:border-white/30
                  transition-all duration-300
                "
              >
                {language === "en" ? "Contact Me" : "Hubungi Saya"}
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48 md:w-96 md:h-96">
              <Image
                src="/profile.png"
                alt="Zidan Fahmi Ilmi"
                fill
                priority
                className="
                  object-cover object-[center_20%]
                  rounded-3xl
                  border border-white/20
                  backdrop-blur-md shadow-xl
                "
              />
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
}
