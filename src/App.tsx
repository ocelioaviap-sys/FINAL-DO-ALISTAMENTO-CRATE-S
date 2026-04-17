/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  Globe, 
  Monitor, 
  UserCircle 
} from "lucide-react";

/**
 * Replicates the original card layout with updated 2026 IDV colors and typography.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-[1000px] bg-[#F4F2E9] border-2 border-white shadow-2xl overflow-hidden relative">
        
        {/* Subtle Map Background overlay (simplified) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <Globe size={600} strokeWidth={0.5} />
        </div>

        {/* Top Header Banner */}
        <div className="w-full">
          <div className="h-10 bg-tse-green w-full"></div>
          <div className="h-16 bg-tse-yellow w-full flex flex-col items-center justify-center px-4 py-2">
            <h1 className="text-xl md:text-2xl font-black text-tse-green-dark tracking-tight text-center leading-none">
              ATENÇÃO CRATEÚS E IPAPORANGA/CE!
            </h1>
            <p className="text-lg md:text-xl font-black text-red-600 tracking-tighter text-center mt-1">
              FECHAMENTO DO CADASTRO ELEITORAL!
            </p>
          </div>
        </div>

        <div className="p-6 md:p-10 space-y-8 relative z-10">
          
          {/* Section: Horários Especiais */}
          <div className="w-full border-2 border-tse-yellow rounded-sm overflow-hidden bg-white/50 backdrop-blur-sm shadow-lg">
            <div className="bg-tse-yellow p-2">
              <h2 className="text-lg font-black text-tse-charcoal text-center uppercase">
                Horários Especiais (Cartório Eleitoral)
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 p-4">
              <div className="flex-1">
                <div className="bg-tse-green text-white px-4 py-3 font-bold flex flex-col items-center h-full justify-center rounded-sm">
                  <span className="text-[10px] uppercase tracking-wider mb-1 text-center">
                    Dias Úteis: 27, 28, 29, 30/04 e 04, 05, 06/05
                  </span>
                  <span className="text-3xl font-black">8h às 15h</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-tse-charcoal text-white px-4 py-3 font-bold flex flex-col items-center h-full justify-center rounded-sm">
                  <span className="text-[10px] uppercase tracking-wider text-tse-yellow mb-1 text-center">Feriado e Fim de Semana (01, 02, 03/05)</span>
                  <span className="text-3xl font-black">8h às 14h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Agendamento Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-tse-charcoal">
            <div className="flex gap-4">
              <Calendar className="text-tse-charcoal shrink-0" size={40} />
              <div>
                <p className="font-black text-sm uppercase">Como garantir sua vaga (Agendamento):</p>
                <a href="#" className="text-blue-700 font-bold hover:underline transition-colors block text-sm">
                  https://apps.tre-ce.jus.br/agendabio/publico/
                </a>
                <p className="text-sm font-medium">Agende aqui sua visita!</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-blue-800 shrink-0" size={40} />
              <div>
                <p className="font-black text-sm uppercase">Para tirar dúvidas (Telefone):</p>
                <p className="text-xl font-bold">(85) 3453-3520</p>
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={16} />
                  <span className="font-medium">cartorio20ze@tre-ce.jus.br</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-dashed border-gray-300 w-full my-6"></div>

          {/* Central Boxes: Primeiro Título & Revisão */}
          <p className="text-center font-black text-sm uppercase max-w-2xl mx-auto mb-4">
            Atendimento no Cartório por agendamento e procura espontânea de acordo com a capacidade de atendimento
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1 */}
            <div className="bg-white border-2 border-tse-green rounded-sm overflow-hidden shadow-md">
              <div className="bg-tse-green p-2 text-center">
                <h3 className="text-white font-black uppercase text-sm">Primeiro Título (Presencial)</h3>
              </div>
              <div className="p-4 flex gap-4 items-center">
                <div className="bg-tse-yellow/20 p-2 rounded-full text-tse-green">
                  <UserCircle size={48} />
                </div>
                <div className="text-xs space-y-1">
                  <p className="font-extrabold text-sm">16 anos até 04/10/2025</p>
                  <p className="font-bold">FACULTATIVO: 15 ANOS</p>
                  <p className="italic">(sem voto em 2026)</p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white border-2 border-tse-green rounded-sm overflow-hidden shadow-md">
              <div className="bg-tse-green p-2 text-center">
                <h3 className="text-white font-black uppercase text-sm">Revisão e Transferência (Online)</h3>
              </div>
              <div className="p-4 flex gap-4 items-center">
                <div className="bg-tse-yellow/20 p-2 rounded-full text-tse-green">
                  <Monitor size={48} />
                </div>
                <div className="text-xs space-y-1">
                  <p className="font-extrabold uppercase text-[10px] text-tse-green">Para eleitores com biometria cadastrada</p>
                  <p className="font-bold">FAÇA TUDO PELA INTERNET E EVITE FILAS!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Area */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mt-8">
            <div className="space-y-2">
              <p className="font-black text-lg border-b-2 border-tse-charcoal inline-block uppercase">Contatos Gerais:</p>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-800" size={24} />
                <p className="text-2xl font-black">(85) 3453-3520</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
              <div className="bg-tse-orange text-white text-xs font-black p-2 px-6 rounded-sm text-center uppercase shadow-md leading-tight">
                Sítio do Tribunal Superior Eleitoral:
                <br />
                <span className="lowercase text-sm font-bold mt-1 block">https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral</span>
              </div>
              
              <div className="flex items-center gap-4 bg-white p-2 px-6 rounded-full border border-gray-200">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 relative flex items-center justify-center">
                    <Globe size={24} className="text-tse-blue" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-tse-blue/20 to-transparent rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-tse-charcoal leading-none">TRE-CE</span>
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Tribunal Regional Eleitoral</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wavy Bands bottom */}
        <div className="flex h-3 w-full">
          <div className="w-1/3 bg-tse-yellow"></div>
          <div className="w-1/3 bg-tse-blue"></div>
          <div className="w-1/3 bg-tse-green"></div>
        </div>
        
        {/* The "E" Wavy Flag Logo positioned at bottom center */}
        <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none">
           <div className="flex flex-col w-12 h-12">
              <div className="h-1/3 bg-tse-yellow" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)' }}></div>
              <div className="h-1/3 bg-tse-blue" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)' }}></div>
              <div className="h-1/3 bg-tse-green" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)' }}></div>
           </div>
           <p className="text-[10px] font-black text-tse-charcoal text-center mt-1">2026</p>
        </div>

      </div>
    </div>
  );
}


