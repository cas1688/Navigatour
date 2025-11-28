import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* IMAGE REPLACEMENT START */}
      <img
        src="/logo.png"
        alt="Navigatour Logo"
        className="w-10 h-10 rounded-xl shadow-lg object-cover"
      />
      {/* IMAGE REPLACEMENT END */}

      <span className="font-bold text-xl tracking-tight text-slate-900">
        Navigatour
      </span>
    </div>
  );
};