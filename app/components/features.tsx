"use client";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemFromLeftVariants,
} from "@/app/animations/variants";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  steps: Step[];
  fields: string[];
}

const handleDownloadExcel = () => {
  // Caminho relativo à pasta public
  const fileUrl = "/urbsync_extracao.xlsx"; 
  
  // Criamos um link temporário "invisível"
  const link = document.createElement("a");
  link.href = fileUrl;
  
  // O atributo download força o navegador a baixar em vez de tentar abrir
  link.setAttribute("download", "urbsync_extracao.xlsx");
  
  document.body.appendChild(link);
  link.click();
  
  // Limpamos o DOM
  document.body.removeChild(link);
};

export const Features = ({ steps, fields }: FeaturesProps) => (
  
  <section

    className="relative w-full min-h-screen flex flex-col items-center justify-center p-10 md:p-20 sm:py-40 bg-transparent"
    id="features"
  >
    <div
      className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-800/30 to-transparent z-10 pointer-events-none"
      aria-hidden="true"
    />

    <div className="w-full sm:max-w-7xl flex flex-col items-center justify-center gap-y-10 z-20 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={itemFromLeftVariants}
        className="space-y-6 w-full text-center"
      >
        <h2 className="text-3xl md:text-6xl uppercase text-gray-200 leading-relaxed">
          Sua produtividade em
          <span className="bg-clip-text text-transparent bg-linear-to-b from-emerald-100 to-emerald-500 drop-shadow-[0_0_2px_#34d399]">
            {" "}
            3 passos Simples
          </span>
        </h2>
      </motion.div>

      {/* Grid de Passos */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemFromLeftVariants}
            className="text-white bg-[#151515]/50 backdrop-blur-md border border-white/10 py-6 px-8 rounded-lg flex flex-col gap-4 hover:border-emerald-500/30 transition-all group"
          >
            <span className="text-emerald-300 font-bold italic text-2xl group-hover:scale-110 transition-transform origin-left">
              {step.step}.
            </span>
            <span className="text-lg font-bold text-gray-100 border-l-2 border-emerald-400 pl-1.5">
              {step.title}
            </span>
            <p className="text-gray-300 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Showcase de Dados */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        className="mt-10 w-full max-w-5xl bg-[#101010]/40 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl"
      >
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-b from-emerald-50 to-emerald-200">
            Dados Extraídos em Tempo Real
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            A UrbSync mapeia automaticamente todos os campos críticos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {fields.map((field, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
              }}
              className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider truncate">
                {field}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-center items-center gap-4">

          <span className="text-gray-400 text-sm leading-relaxed">Todos os dados são fictícios.</span>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-200 to-emerald-300 text-gray-900 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_#34d399]"
            onClick={() => handleDownloadExcel()}
          >
            <span>Baixar Planilha Formatada &#40;.xlsx&#41;</span>

          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);
