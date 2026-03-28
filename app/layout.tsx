import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "UrbSync - Extrator de Processos",
  description:
    "Diga adeus ao copiar e colar no SEI e Aprova Digital. Automatize a extração de dados críticos desses portais, recupere seu tempo e foque na análise que realmente importa.",
  authors: [{ name: "Victor Kiss", url: "https://github.com/victor-kiss" }],
  icons: {
    icon: "/icon128.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}

        {/* FOOTER */}
        <footer className="relative w-full py-12 border-t border-white/10 bg-[#101010] overflow-hidden">
          {/* Gradiente sutil para o rodapé */}

          {/* O container principal usa items-center para mobile e md:justify-between para desktop */}
          <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            {/* Lado Esquerdo: Logo e Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <h2 className="text-2xl font-bold text-white tracking-tighter uppercase italic">
                Urb<span className="text-emerald-400">Sync</span>
              </h2>
              <p className="text-slate-400 text-sm"> © UrbSync Project.</p>
            </div>

            {/* Lado Central: Links Rápidos  */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-sm text-slate-200">
              <Link
                href="#features"
                className="hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                Como funciona
              </Link>
              <Link
                href="https://github.com/smdu-sp/extensao"
                target="_blank"
                className="hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                Open Source
              </Link>
              <Link
                href="https://chromewebstore.google.com/detail/urbsync-extrator-de-proce/ebgfomgjeoghpngkgenjndamckdjlnfg"
                target="_blank"
                className="hover:text-emerald-400 transition-colors whitespace-nowrap font-semibold"
              >
                Instalar
              </Link>
            </div>
          </div>

          {/* Linha final decorativa */}
          <div className="mt-12 w-full text-center px-10">
            <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
            <p className="text-xs text-gray-400 uppercase tracking-widest leading-loose">
              Desenvolvido para transformar o serviço público
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
