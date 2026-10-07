import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  show: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-[#FF7A00] px-4 py-2.5 text-xs font-semibold text-[#0B1320] shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200 pointer-events-none select-none">
      <Check className="size-4 stroke-[3]" />
      <span>{message}</span>
    </div>
  );
};
