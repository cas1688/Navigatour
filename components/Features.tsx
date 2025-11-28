import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Map, ShoppingBag, Mountain, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Errand Mode",
    description: "Plan routes with stops. Home → Grocery Store → Home. We calculate the optimal path for your to-do list."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Safety First",
    description: "Filter for well-lit streets and avoid sketchy areas at night. Your safety is our routing priority."
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Smart Commute",
    description: "Turn your commute into cardio. Find the best running route from your office to your front door."
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Hill Control",
    description: "Feeling strong? Seek elevation. Recovery day? We'll find the flattest loop possible in your city."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Dynamic Routing",
    description: "Input your time (e.g., '30 mins'). We generate a perfect loop that brings you back exactly when you need to be."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Social Meetups",
    description: "Set a meeting point with a friend. Navigatour routes you both to arrive at the same location at the same time."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-600 font-semibold tracking-wide uppercase text-sm"
          >
            Why Navigatour?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl"
          >
            More than just tracking. <br/>
            <span className="text-brand-500">Intelligent Planning.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-slate-500"
          >
            Strava tells you what you did. Navigatour tells you where to go.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-slate-50 p-8 rounded-2xl hover:bg-brand-50 transition-colors duration-300 border border-slate-100 hover:border-brand-100"
            >
              <div className="absolute top-8 left-8 p-3 bg-white rounded-xl shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300 text-brand-600">
                {feature.icon}
              </div>
              <div className="mt-16">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};