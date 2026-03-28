"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemFromLeftVariants,
  itemFromRightVariants,
} from "./animations/variants";
import React from "react";
import { Hero } from "./components/hero";
import { IProblemSolutionCard, ProblemSolution } from "./components/problemSolution";
import { Features } from "./components/features";
import { About } from "./components/about";

export default function Home() {
  
  const cards:IProblemSolutionCard[] = [
    {
      title: "O Caos do Copia e Cola",
      problem:
        "Perda de tempo abrindo dezenas de abas no SEI e Aprova Digital para extrair dados manualmente.",
      solution:
        "Extração inteligente que captura requerimento, requerente, protocolo e outras informações instantaneamente.",
      side: "left",
    },
    {
      title: "Erros de Digitação",
      problem:
        "Dados críticos transcritos incorretamente em relatórios, gerando retrabalho e atrasos jurídicos.",
      solution:
        "Precisão absoluta: os dados são filtrados diretamente da fonte e organizados sem interferência humana.",
      side: "right",
    },
    {
      title: "Relatórios Manuais",
      problem:
        "Horas gastas formatando planilhas e organizando informações para a chefia ou equipe técnica.",
      solution:
        "Exportação estruturada pronta para uso. O dado sai do portal e vai direto para sua planilha organizada.",
      side: "left",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Instalação Instantânea",
      description:
        "Adicione a UrbSync ao seu Chrome em dois cliques. Sem configurações complexas.",
      side: "left",
    },
    {
      step: "02",
      title: "Extração Automática",
      description:
        "Abra o SEI ou Aprova Digital. Clique na extensão e no botão 'Extrair Processos'.",
      side: "right",
    },
    {
      step: "03",
      title: "Dados Prontos para Uso",
      description:
        "Receba uma planilha organizada por plataforma e aba. Seus dados do SEI e Aprova Digital — da 'Minha Caixa' ou de terceiros já vêm separados e prontos para o relatório.",
      side: "left",
    },
  ];

  const fieldsExtraction = [
    "Sistema",
    "Processo",
    "Nº SEI",
    "Requerimento",
    "Requerente",
    "Proprietário",
    "Status",
    "Técnico",
    "Taxas",
    "Última Ação",
    "Data Consulta",
  ];
  return (
    <main className="antialiased min-w-full bg-black overflow-hidden">
      {/* Background Grid  */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9a8d4_1px,transparent_1px),linear-gradient(to_bottom,#f9a8d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

     
     <Hero />
      <ProblemSolution cards={cards} />
      <Features steps={steps} fields={fieldsExtraction}/>
      <About />
     
    </main>
  );
}
