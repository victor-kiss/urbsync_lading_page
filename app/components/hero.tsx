"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { containerVariants, itemFromLeftVariants, itemFromRightVariants } from "@/app/animations/variants";

export const Hero = () => (
  <section className="relative w-full min-h-screen xl:h-screen flex flex-col items-center justify-center overflow-hidden py-20 sm:py-0"
    style={{
      backgroundColor: "rgba(10,10,10,0.2)",
      backgroundImage: "radial-gradient(at 94% 0%, rgb(16, 185, 129) 0, transparent 14%), radial-gradient(at 2% 50%, rgb(30, 58, 138) 0, transparent 18%), radial-gradient(at 100% 70%, rgb(107, 33, 168) 0, transparent 19%)",
    }}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="relative w-full p-10 sm:p-0 sm:max-w-5xl flex flex-col items-center text-center"
    >
      <motion.div variants={itemFromLeftVariants} className="inline-flex items-center px-4 py-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-md mb-8">
        <span className="text-purple-300 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          v1.0 Beta • Disponível para Chrome
        </span>
      </motion.div>

      <div className="space-y-8 w-full">
        <motion.h1 variants={itemFromRightVariants} className="text-6xl md:text-8xl xl:text-9xl uppercase bg-clip-text text-transparent bg-linear-to-b from-cyan-50 to-cyan-300 drop-shadow-[0px_0px_15px_rgb(34,211,238,0.8)] tracking-tighter">
          UrbSync
        </motion.h1>
        <motion.p variants={itemFromLeftVariants} className="max-w-2xl mx-auto text-slate-200 leading-relaxed text-base sm:text-xl">
            Diga adeus ao copiar e colar no
              <span className="font-semibold text-white">
                {" "}
                SEI e Aprova Digital
              </span>
              . Automatize a extração de dados críticos desses portais, recupere
              seu tempo e
              <b className="text-emerald-300 font-bold italic">
                {" "}
                foque na análise que realmente importa.
              </b>
        </motion.p>

        <motion.div variants={itemFromRightVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
          <Link href="https://chromewebstore.google.com/detail/ebgfomgjeoghpngkgenjndamckdjlnfg?utm_source=item-share-cb" rel="noopener noreferrer" target="_blank" className="w-full sm:w-auto group px-8 py-4 bg-linear-to-r from-emerald-200 to-emerald-300 text-gray-900 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_#34d399] flex items-center justify-center gap-2">
            Instalar no Chrome
          </Link>
          <Link href="#features" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/15 backdrop-blur-md">
            Como funciona?
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </section>
);
