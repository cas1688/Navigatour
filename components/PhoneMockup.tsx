import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, MapPin, Battery, Wifi, Signal } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/20">
      {/* Notch / Dynamic Island */}
      <div className="absolute top-0 w-full flex justify-center z-20">
        <div className="h-[26px] w-[100px] bg-black rounded-b-2xl"></div>
      </div>

      {/* Screen Content */}
      <div className="h-[32px] bg-white w-full flex items-center justify-between px-6 pt-2 z-10 text-[10px] font-bold text-slate-800">
        <span>9:41</span>
        <div className="flex gap-1">
          <Signal size={12} />
          <Wifi size={12} />
          <Battery size={12} />
        </div>
      </div>

      <div className="flex-1 bg-slate-100 relative w-full h-full overflow-hidden">
        {/* Fake Map Background */}
        <div className="absolute inset-0 bg-[#E5E7EB] opacity-100">
             {/* Abstract Map Roads */}
             <svg className="absolute w-full h-full" viewBox="0 0 300 600">
                <path d="M150 -50 L150 200 L220 300 L220 650" stroke="#FFFFFF" strokeWidth="20" fill="none" />
                <path d="M-20 250 L150 200" stroke="#FFFFFF" strokeWidth="15" fill="none" />
                <path d="M220 300 L350 320" stroke="#FFFFFF" strokeWidth="15" fill="none" />
                
                {/* Route Path (Green) */}
                <motion.path 
                  d="M150 100 L150 200 L220 300 L220 450" 
                  stroke="#10b981" 
                  strokeWidth="6" 
                  fill="none" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
                />
                 {/* Route Shadow */}
                 <path d="M150 100 L150 200 L220 300 L220 450" stroke="#059669" strokeWidth="8" fill="none" strokeOpacity="0.2" className="blur-[1px]" />
             </svg>
             
             {/* Map Pins */}
             <div className="absolute top-[16%] left-[46%] z-10">
                <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                  <Navigation size={16} className="text-white fill-current" />
                </div>
             </div>

             <div className="absolute top-[75%] left-[68%] z-10">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin size={16} className="text-white" />
                </div>
                <div className="absolute top-10 -left-6 bg-white px-2 py-1 rounded shadow text-[10px] font-bold whitespace-nowrap">
                   Metro Market
                </div>
             </div>
        </div>

        {/* UI Overlay Card - Top */}
        <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
           <div className="bg-white p-2 rounded-lg shadow-md">
             <div className="text-xs font-bold text-slate-500">NEXT STOP</div>
             <div className="font-bold text-slate-800">Metro Market</div>
           </div>
           <div className="bg-slate-800 text-white p-2 rounded-lg shadow-md flex flex-col items-center">
             <span className="text-xs font-medium">4</span>
             <span className="text-[10px]">min</span>
           </div>
        </div>

        {/* UI Overlay Card - Bottom (Simulating user screenshot) */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-6 pb-12 z-20">
           <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-4"></div>
           
           <div className="flex justify-between items-end mb-6">
             <div>
               <div className="text-sm text-slate-500 mb-1">Total Distance</div>
               <div className="text-3xl font-extrabold text-slate-900">8.2 <span className="text-lg font-medium text-slate-400">km</span></div>
             </div>
             <div className="text-right">
                <span className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold mb-1">
                  On Pace
                </span>
                <div className="text-sm font-semibold text-slate-700">5:45 /km</div>
             </div>
           </div>

           {/* Progress Bar */}
           <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
             <div className="bg-brand-500 w-[65%] h-full rounded-full"></div>
           </div>

           {/* Action Button */}
           <div className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-center shadow-lg hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Recording Run
           </div>
        </div>
      </div>
    </div>
  );
};