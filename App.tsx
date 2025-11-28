import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { PhoneMockup } from './components/PhoneMockup';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">How it Works</a>
              <a href="#pricing" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Pricing</a>
              <a 
                href="#" 
                className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get App
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-brand-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Features</a>
                <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">How it Works</a>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Pricing</a>
                <a href="#" className="block w-full text-center bg-brand-500 text-white px-5 py-3 rounded-xl font-bold">
                  Download Free
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradient Blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6 border border-brand-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Now available in Toronto & NYC
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Run with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                  Purpose.
                </span>
              </h1>
              
              <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-lg">
                The first running app that plans your route based on your life. Commute, run errands, or explore safely—all while hitting your distance goals.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/30">
                  <Download size={20} />
                  Download for iOS
                </button>
                <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                  View Demo
                </button>
              </div>

              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                   ))}
                </div>
                <p>Trusted by 10,000+ urban runners</p>
              </div>
            </motion.div>

            {/* Hero Image / Phone */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <Features />

      {/* "How It Works" / Story Section */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
                Your commute, <br/> reimagined as cardio.
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Most people skip runs because they "don't have time." Navigatour finds the time for you by transforming your necessary trips into productive workouts.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center font-bold text-white shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold">Input Destination</h4>
                    <p className="text-slate-400 mt-1">"I need to get to the Metro Supermarket."</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center font-bold text-white shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold">Set Constraints</h4>
                    <p className="text-slate-400 mt-1">"I have 45 minutes, want flat terrain, and avoid heavy traffic."</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center font-bold text-white shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-bold">Go Run</h4>
                    <p className="text-slate-400 mt-1">We guide you turn-by-turn. You arrive energized and on time.</p>
                  </div>
                </div>
              </div>

              <button className="mt-12 group flex items-center text-brand-400 font-bold hover:text-brand-300 transition-colors">
                Explore Use Cases <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Interactive/Visual Element */}
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
              <div className="flex flex-col gap-4">
                {/* Simulated UI inputs */}
                <div className="bg-slate-700/50 p-4 rounded-xl flex items-center justify-between border border-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-slate-300">Home</span>
                  </div>
                  <div className="h-px w-12 bg-slate-600"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-white font-medium">Metro Market</span>
                  </div>
                </div>

                {/* Simulated Map Visual */}
                <div className="h-64 w-full bg-slate-900 rounded-xl relative overflow-hidden group">
                   <div className="absolute inset-0 opacity-50 bg-[url('https://picsum.photos/seed/map/600/400')] bg-cover bg-center grayscale mix-blend-overlay"></div>
                   
                   {/* Animated Path Line */}
                   <svg className="absolute inset-0 w-full h-full">
                     <path d="M 50 200 Q 150 50 350 150" stroke="#10b981" strokeWidth="4" fill="none" strokeDasharray="10 5" className="animate-[dash_20s_linear_infinite]" />
                     <circle cx="50" cy="200" r="6" fill="#10b981" />
                     <circle cx="350" cy="150" r="6" fill="#ef4444" />
                   </svg>
                   
                   <div className="absolute bottom-4 left-4 bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-brand-400 border border-slate-600">
                     Route calculated: 5.2km • +12m elev
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-brand-500/20 text-brand-300 p-3 rounded-lg text-center text-sm font-medium border border-brand-500/30">
                     Well Lit
                   </div>
                   <div className="bg-brand-500/20 text-brand-300 p-3 rounded-lg text-center text-sm font-medium border border-brand-500/30">
                     Flat Surface
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* CTA Section */}
      <section className="py-20">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
               {/* Decorative Circles */}
               <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500 rounded-full opacity-50"></div>
               <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-brand-700 rounded-full opacity-50"></div>

               <h2 className="text-3xl md:text-5xl font-extrabold text-white relative z-10 mb-6">
                 Ready to run smarter?
               </h2>
               <p className="text-brand-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
                 Join thousands of runners turning their daily routine into an adventure. Download Navigatour today.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                  <button className="bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-colors shadow-lg">
                    Download on App Store
                  </button>
                  <button className="bg-brand-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 transition-colors border border-brand-500">
                    Get for Android
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Logo className="mb-4" />
              <p className="text-slate-500 text-sm">
                Navigatour © 2024. <br/>
                Made for runners, by runners.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-brand-600">Features</a></li>
                <li><a href="#" className="hover:text-brand-600">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-600">Route Library</a></li>
                <li><a href="#" className="hover:text-brand-600">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-brand-600">About</a></li>
                <li><a href="#" className="hover:text-brand-600">Blog</a></li>
                <li><a href="#" className="hover:text-brand-600">Careers</a></li>
                <li><a href="#" className="hover:text-brand-600">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-brand-600">Privacy</a></li>
                <li><a href="#" className="hover:text-brand-600">Terms</a></li>
                <li><a href="#" className="hover:text-brand-600">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-sm">
             <p>Designed with ❤️ in San Francisco</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;