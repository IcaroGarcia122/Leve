/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Instagram,
  MessageCircle,
  Star,
  ShoppingBag,
  MapPin,
  Share2,
  Info,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { Logo } from './components/Logo';
import { InfoModal } from './components/InfoModal';
import { HighlightModal } from './components/HighlightModal';
import { Toast } from './components/ShareToast';
import fachadaImg from './assets/images/Fachada da Leve Confecções sem carros.png';

export default function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isVitrineOpen, setIsVitrineOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2400);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Lojas Leve Pinhão',
          text: 'Confira os contatos, WhatsApp e coleções das Lojas Leve Pinhão!',
          url: window.location.href,
        });
      } catch {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    triggerToast('Link copiado com sucesso!');
  };

  // Nav links following the exact structure and clean aesthetic of Lancaster
  // Fully optimized for thumb reach and mobile responsiveness
  const navLinks = [
    {
      id: 'instagram',
      icon: Instagram,
      label: '@lojasleve.pinhao',
      sub: 'Siga no Instagram · 5.351 seguidores',
      href: 'https://instagram.com/lojasleve.pinhao',
    },
    {
      id: 'whatsapp-confeccao',
      icon: MessageCircle,
      label: 'WhatsApp Leve Confecção',
      sub: '(42) 3677-1669 · Moda & CMeB',
      href: 'https://wa.me/554236771669?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20atendimento%20na%20Leve%20Confec%C3%A7%C3%B5es',
    },
    {
      id: 'whatsapp-calcados',
      icon: MessageCircle,
      label: 'WhatsApp Leve Calçados',
      sub: '(42) 3677-2575 · Tênis & Calçados',
      href: 'https://wa.me/554236772575?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20atendimento%20na%20Leve%20Cal%C3%A7ados',
    },
    {
      id: 'avaliar-confeccoes',
      icon: Star,
      label: 'Avaliar Leve Confecções',
      sub: 'Sua opinião no Google · Confecções',
      href: 'https://search.google.com/local/writereview?placeid=ChIJi1eNqOpd75QRAvnyMyhBpbk',
    },
    {
      id: 'avaliar-calcados',
      icon: Star,
      label: 'Avaliar Leve Calçados',
      sub: 'Sua opinião no Google · Calçados',
      href: 'https://search.google.com/local/writereview?placeid=ChIJCTKC-YFd75QRDzzG_6HDKNo',
    },
    {
      id: 'como-chegar',
      icon: MapPin,
      label: 'Como Chegar às Lojas',
      sub: 'Centro de Pinhão - PR',
      href: 'https://www.google.com/maps/search/?api=1&query=Lojas+Leve+Pinhao+PR',
    },
    {
      id: 'vitrine-virtual',
      icon: Sparkles,
      label: 'Vitrine Virtual & Destaques',
      sub: 'CMeB, Feminino, Bebê, Fitness e Tênis',
      onClick: () => setIsVitrineOpen(true),
    },
  ];

  return (
    <main className="font-body relative min-h-[100dvh] overflow-x-hidden bg-[#0A1220] text-[#F8F9FA] selection:bg-[#FF7A00] selection:text-white">
      {/* Background storefront photo from user */}
      <div className="fixed inset-0 pointer-events-none">
        <img
          src={fachadaImg}
          alt="Fachada Leve Confecções Pinhão"
          className="h-full w-full object-cover object-[65%_25%] sm:object-center scale-105 filter brightness-[0.80] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark veil overlays matching Lancaster */}
        <div className="absolute inset-0 bg-[#060B14]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B14]/35 via-[#081224]/65 to-[#060B14]/92" />
      </div>

      {/* Top action controls (Share & Store Info) with safe-area spacing */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-2 pt-[env(safe-area-inset-top,0px)] pr-[env(safe-area-inset-right,0px)]">
        <button
          onClick={() => setIsInfoOpen(true)}
          className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-[#0E1A2E]/75 text-white/90 backdrop-blur-md hover:border-[#FF7A00]/60 hover:bg-[#0E1A2E]/90 active:scale-90 hover:text-white transition-all shadow-lg touch-manipulation cursor-pointer"
          title="Horários e Telefones"
          aria-label="Informações da Loja"
        >
          <Info className="size-4.5" />
        </button>

        <button
          onClick={handleShare}
          className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-[#0E1A2E]/75 text-white/90 backdrop-blur-md hover:border-[#FF7A00]/60 hover:bg-[#0E1A2E]/90 active:scale-90 hover:text-white transition-all shadow-lg touch-manipulation cursor-pointer"
          title="Compartilhar Link"
          aria-label="Compartilhar"
        >
          <Share2 className="size-4.5" />
        </button>
      </div>

      {/* Main Centered Content Container */}
      <div className="animate-in fade-in duration-700 relative z-10 mx-auto flex min-h-[100dvh] max-w-md flex-col items-center justify-center gap-5 sm:gap-7 px-4 sm:px-6 py-10 sm:py-14 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))]">
        {/* Brand Logo - User isolated logo */}
        <Logo className="w-40 sm:w-48 drop-shadow-[0_10px_28px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-transform duration-300" />

        {/* Decorative divider with rotating branded ribbon and shopping bag icon */}
        <div className="flex w-full items-center gap-2.5 sm:gap-3 text-[#FF7A00]">
          <span className="leve-ribbon" aria-hidden="true" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FF7A00]/60 to-transparent" />
          <ShoppingBag className="size-4 sm:size-4.5 shrink-0 text-[#FF8533]" aria-hidden="true" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FF7A00]/60 to-transparent" />
          <span className="leve-ribbon" aria-hidden="true" />
        </div>

        {/* Tagline & Slogan */}
        <div className="flex flex-col items-center gap-1 text-center -mt-1 px-2">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#FFE8D6]/90 text-balance leading-snug">
            Roupas · Calçados · Cama, Mesa &amp; Banho
          </p>
          <p className="text-[11px] sm:text-xs text-[#FFA94D] font-medium italic text-balance">
            "Só a Leve tem, só a Leve faz pra você 🧡"
          </p>
        </div>

        {/* Main Navigation Links */}
        <nav className="flex w-full flex-col gap-2.5 sm:gap-3" aria-label="Nossos contatos">
          {navLinks.map((link) => {
            const IconComponent = link.icon;

            if (link.onClick) {
              return (
                <button
                  key={link.id}
                  onClick={link.onClick}
                  className="group flex w-full items-center gap-3.5 sm:gap-4 rounded-2xl border border-white/15 bg-[#0E1A2E]/60 px-4 py-3.5 sm:px-5 sm:py-4 backdrop-blur-md transition-all duration-200 hover:scale-[1.01] hover:border-[#FF7A00]/60 hover:bg-[#0E1A2E]/85 active:scale-[0.98] active:bg-[#0E1A2E]/95 shadow-lg shadow-black/20 text-left cursor-pointer touch-manipulation min-h-[58px]"
                >
                  <span className="bg-white/10 text-[#FF8533] group-hover:bg-[#FF7A00] group-hover:text-[#0B1320] flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full transition-colors">
                    <IconComponent className="size-4.5 sm:size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col text-left flex-1 min-w-0 pr-1">
                    <span className="font-display text-[17px] sm:text-lg tracking-wide text-[#F8F9FA] group-hover:text-white truncate">
                      {link.label}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#F8F9FA]/75 truncate">
                      {link.sub}
                    </span>
                  </span>
                  <ChevronRight className="size-4 text-white/30 group-hover:text-[#FF7A00] group-hover:translate-x-0.5 shrink-0 transition-all ml-auto" />
                </button>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-white/15 bg-[#0E1A2E]/60 px-4 py-3.5 sm:px-5 sm:py-4 backdrop-blur-md transition-all duration-200 hover:scale-[1.01] hover:border-[#FF7A00]/60 hover:bg-[#0E1A2E]/85 active:scale-[0.98] active:bg-[#0E1A2E]/95 shadow-lg shadow-black/20 text-left cursor-pointer touch-manipulation min-h-[58px]"
              >
                <span className="bg-white/10 text-[#FF8533] group-hover:bg-[#FF7A00] group-hover:text-[#0B1320] flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full transition-colors">
                  <IconComponent className="size-4.5 sm:size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col text-left flex-1 min-w-0 pr-1">
                  <span className="font-display text-[17px] sm:text-lg tracking-wide text-[#F8F9FA] group-hover:text-white truncate">
                    {link.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#F8F9FA]/75 truncate">
                    {link.sub}
                  </span>
                </span>
                <ChevronRight className="size-4 text-white/30 group-hover:text-[#FF7A00] group-hover:translate-x-0.5 shrink-0 transition-all ml-auto" />
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <footer className="mt-1 sm:mt-2 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#F8F9FA]/65">
          Lojas Leve Pinhão
        </footer>
      </div>

      {/* Vitrine Virtual Modal */}
      <HighlightModal
        isOpen={isVitrineOpen}
        onClose={() => setIsVitrineOpen(false)}
      />

      {/* Store Info & Contacts Modal */}
      <InfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} show={showToast} />
    </main>
  );
}
