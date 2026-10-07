import React from 'react';
import { X, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md max-h-[92dvh] flex flex-col rounded-t-[28px] sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#13223B] to-[#0A1322] shadow-2xl text-white overflow-hidden pb-[env(safe-area-inset-bottom,0px)]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-white/10 shrink-0">
          <div>
            <h3 className="font-display text-xl tracking-wide text-white">
              Informações da Loja
            </h3>
            <p className="text-xs text-[#FF9E42]">
              Lojas Leve Pinhão · Confecções &amp; Calçados
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 active:scale-95 hover:text-white transition-all shrink-0 ml-2"
            aria-label="Fechar"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content - Scrollable on small screens */}
        <div className="p-4 sm:p-6 space-y-4 overflow-y-auto overscroll-contain flex-1">
          {/* Phones */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A00]">
              <Phone className="size-4" />
              <span>Telefones para Contato</span>
            </div>
            
            <div className="space-y-2">
              <a
                href="tel:4236771669"
                className="flex items-center justify-between p-3 rounded-xl bg-black/20 hover:bg-black/40 border border-white/5 active:scale-[0.99] transition-all group touch-manipulation"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#FF7A00]">
                    (42) 3677-1669
                  </div>
                  <div className="text-xs text-white/60">Leve Confecção</div>
                </div>
                <span className="text-xs font-medium text-[#FF7A00] bg-[#FF7A00]/15 px-3 py-1.5 rounded-full">
                  Ligar
                </span>
              </a>

              <a
                href="tel:4236772575"
                className="flex items-center justify-between p-3 rounded-xl bg-black/20 hover:bg-black/40 border border-white/5 active:scale-[0.99] transition-all group touch-manipulation"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#FF7A00]">
                    (42) 3677-2575
                  </div>
                  <div className="text-xs text-white/60">Leve Calçados</div>
                </div>
                <span className="text-xs font-medium text-[#FF7A00] bg-[#FF7A00]/15 px-3 py-1.5 rounded-full">
                  Ligar
                </span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A00]">
              <MapPin className="size-4" />
              <span>Endereço &amp; Localização</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Centro Comercial de Pinhão, Paraná — Próximo aos principais comércios do centro da cidade.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lojas+Leve+Pinhao+PR"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF7A00] hover:underline touch-manipulation py-1"
            >
              <span>Abrir rota no Google Maps</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          {/* Opening hours */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A00]">
              <Clock className="size-4" />
              <span>Horário de Atendimento</span>
            </div>
            <div className="text-xs text-white/80 space-y-1.5">
              <div className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="font-medium text-white">08:30 às 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span className="font-medium text-white">08:30 às 13:00</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span>Domingos e Feriados:</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/20 text-center shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-xs font-semibold text-white transition-all touch-manipulation"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
