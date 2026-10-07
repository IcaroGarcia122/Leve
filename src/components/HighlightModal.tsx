import React, { useState } from 'react';
import { HighlightItem, HIGHLIGHTS } from '../data/highlights';
import { X, MessageCircle, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HighlightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HighlightModal: React.FC<HighlightModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const item = HIGHLIGHTS[currentIndex] || HIGHLIGHTS[0];
  const total = HIGHLIGHTS.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const phone = item.phoneTarget === 'calçados' ? '554236772575' : '554236771669';
  const phoneLabel = item.phoneTarget === 'calçados' ? 'Leve Calçados (42) 3677-2575' : 'Leve Confecção (42) 3677-1669';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    `Olá! Estive vendo a vitrine virtual "${item.categoryTitle}" no site e gostaria de saber modelos e novidades disponíveis!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md max-h-[92dvh] flex flex-col rounded-t-[28px] sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#13223B] to-[#0A1322] shadow-2xl text-white overflow-hidden pb-[env(safe-area-inset-bottom,0px)]">
        {/* Progress indicator */}
        <div className="flex gap-1.5 px-4 pt-3.5 pb-2 shrink-0">
          {HIGHLIGHTS.map((h, i) => (
            <button
              key={h.id}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-[#FF7A00]'
                  : i < currentIndex
                  ? 'bg-white/60'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF7A00] to-[#E65100] text-lg font-bold shadow-md shrink-0">
              {item.emoji}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-sm tracking-wide text-white truncate">
                  Vitrine Virtual Lojas Leve
                </span>
                <span className="text-[10px] text-white/50 shrink-0">· {currentIndex + 1}/{total}</span>
              </div>
              <p className="text-xs text-[#FF9E42] font-medium truncate">
                {item.categoryTitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 active:scale-95 hover:text-white transition-all shrink-0 ml-2"
            aria-label="Fechar"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Categories quick pill selector */}
        <div className="flex items-center gap-2 overflow-x-auto px-4 sm:px-5 py-2.5 bg-black/25 no-scrollbar border-b border-white/5 shrink-0">
          {HIGHLIGHTS.map((h, idx) => (
            <button
              key={h.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors touch-manipulation active:scale-95 ${
                idx === currentIndex
                  ? 'bg-[#FF7A00] text-[#0A1220] font-semibold shadow-sm'
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              {h.name} {h.emoji}
            </button>
          ))}
        </div>

        {/* Modal Body - Scrollable on mobile */}
        <div className="p-4 sm:p-6 space-y-4 overflow-y-auto overscroll-contain flex-1">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF7A00] bg-[#FF7A00]/15 px-3 py-1 rounded-full border border-[#FF7A00]/25">
              <Sparkles className="size-3.5" />
              Destaque da Loja
            </span>
            <h3 className="font-display text-2xl tracking-wide text-white mt-2">
              {item.categoryTitle} {item.emoji}
            </h3>
            <p className="text-xs text-[#FFE8D6]/80 mt-1 italic">
              "{item.tagline}"
            </p>
          </div>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed bg-black/25 p-3.5 rounded-xl border border-white/5">
            {item.description}
          </p>

          {/* Feature list */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
              O que você encontra na Leve:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {item.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs text-white/90 bg-white/5 px-3 py-2 rounded-lg border border-white/5"
                >
                  <CheckCircle2 className="size-3.5 text-[#FF7A00] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action button: Send to WhatsApp */}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/40 hover:brightness-110 active:scale-[0.98] transition-all touch-manipulation"
            >
              <MessageCircle className="size-5 fill-current shrink-0" />
              <span className="truncate">Consultar no WhatsApp ({item.phoneTarget === 'calçados' ? 'Calçados' : 'Confecções'})</span>
            </a>
            <p className="text-[11px] text-center text-white/50 mt-1.5">
              {phoneLabel}
            </p>
          </div>
        </div>

        {/* Modal Navigation Footer */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-t border-white/10 bg-black/25 text-xs text-white/60 shrink-0">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-white/10 active:scale-95 text-white/80 hover:text-white transition-all touch-manipulation"
          >
            <ChevronLeft className="size-4" />
            <span>Anterior</span>
          </button>
          <span className="font-medium text-white/70">
            {currentIndex + 1} de {total}
          </span>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-white/10 active:scale-95 text-white/80 hover:text-white transition-all touch-manipulation"
          >
            <span>Próximo</span>
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
