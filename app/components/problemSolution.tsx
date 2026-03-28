"use client";
import React from "react";
import { motion } from "framer-motion";
import { itemFromLeftVariants } from "@/app/animations/variants";

// 1. Definição do Tipo de Dados (Pode ser exportado para um arquivo de types)
// Usamos interfaces para objetos de dados e Type para uniões
export interface IProblemSolutionCard {
  title: string;
  problem: string;
  solution: string;
  side: "left" | "right"; // Restringe apenas aos valores que você usa na Home
}

// 2. Definição das Props do Componente
interface ProblemSolutionProps {
  cards: IProblemSolutionCard[];
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ cards }) => {
  return (
    <section className="relative w-full z-10  min-h-screen flex flex-col items-center justify-center p-10 md:p-20">
      {/* Camada de Background */}
      <div className="absolute inset-0 bg-linear-to-r from-black/30 via-indigo-900/30 to-black/30 -z-10" />

      <div className="w-full sm:max-w-7xl z-10 flex flex-col items-center justify-center gap-y-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ amount: 0.2 }} 
          variants={itemFromLeftVariants} 
          className="space-y-10 w-full text-center"
        >
          <h2 className="text-4xl md:text-6xl uppercase bg-clip-text text-transparent bg-linear-to-b from-amber-50 to-amber-200 drop-shadow-[0_0_15px_rgba(252,211,77,0.5)]">
            O fim do atrito digital
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {cards.map((card, index) => (
            <React.Fragment key={`${card.title}-${index}`}> 
              {/* Card de Problema */}
              <motion.div 
                initial={{ opacity: 0, x: card.side === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 80, delay: index * 0.1 }}
                className="text-white bg-[#151515]/50 backdrop-blur-sm border border-white/10 py-6 px-8 rounded-lg hover:border-pink-500/30 transition-colors group"
              >
                <span className="text-lg font-semibold text-pink-400 group-hover:text-pink-300">
                  {card.title}
                </span>
                <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                  {card.problem}
                </p>
              </motion.div>

              {/* Card de Solução UrbSync */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ type: "spring", damping: 15, stiffness: 100 }}
                 className="text-white bg-[#151515]/40 backdrop-blur-sm border border-emerald-500/20 py-6 px-8 rounded-lg hover:border-emerald-500/40 transition-colors group"
              >
                <span className="text-lg font-semibold text-emerald-500 drop-shadow-[0px_0px_5px_#10b981] group-hover:text-emerald-400">
                  Solução UrbSync
                </span>
                <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                  {card.solution}
                </p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};