"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { itemFromLeftVariants, itemFromRightVariants } from "@/app/animations/variants";

export const About = () => (
  <section className="relative w-full min-h-screen z-10 flex flex-col items-center justify-center p-10 md:p-20 bg-transparent">
  <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-900/30 to-transparent -z-10 pointer-events-none" 
  aria-hidden="true"></div>
    <div className="w-full sm:max-w-5xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Lado Esquerdo: Texto Manifesto */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={itemFromLeftVariants}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl uppercase text-white leading-tight">
            De servidor <br />
            <span className="bg-clip-text text-transparent bg-linear-to-b from-blue-50 to-blue-400 font-bold">
              para servidor.
            </span>
          </h2>
          <div className="h-1 w-20 bg-blue-400 rounded-full" />
        </div>

        <p className="text-gray-300 leading-relaxed text-lg">
          A UrbSync nasceu da necessidade real de otimizar fluxos no serviço público. 
          Não é sobre substituir sistemas, é sobre <b>potencializar quem os opera</b>. 
          Eliminamos o trabalho braçal para que você foque no que é estratégico.
        </p>

        <div className="flex flex-col gap-4 bg-white/5 p-5 border border-white/10 backdrop-blur-sm rounded-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="font-semibold text-blue-100 uppercase text-xs tracking-widest">Código 100% Aberto</span>
          </div>
          <p className="text-sm text-gray-400 pl-12 italic">
            Transparência total. O código está disponível para auditoria e melhorias da comunidade.
          </p>
        </div>
      </motion.div>

      {/* Lado Direito: Card Victor Kiss */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={itemFromRightVariants}
        className="relative"
      >
        <div className="absolute -inset-1 bg-linear-to-b from-blue-500 to-emerald-500 rounded-2xl blur-lg opacity-20" />
        <div className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl space-y-6 backdrop-blur-xl">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold text-white tracking-tight">Victor Kiss</h4>
            <p className="text-blue-400 text-xs font-black uppercase tracking-widest">Criador • Software Developer</p>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed italic">
            Acredito que a tecnologia deve servir para libertar o potencial humano. 
            Construí a UrbSync para ser a ferramenta que eu gostaria de ter tido quando comecei no setor público.
          </p>

          <div className="pt-4 flex flex-col gap-3">
            <Link href="https://github.com/smdu-sp/extensao" target="_blank" className="w-full py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-center text-blue-300 text-xs font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
              Repositório Oficial
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <Link href="https://github.com/victor-kiss" target="_blank" className="py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-center text-white text-xs font-bold transition-all">
                GitHub
              </Link>
              <Link href="https://chromewebstore.google.com/..." target="_blank" className="py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center text-emerald-400 text-xs font-bold transition-all">
                Instalar
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);