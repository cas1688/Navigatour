import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started with planned runs.',
    features: [
      'Basic route generation',
      'Start & End point customization',
      'Save up to 3 favorite routes',
      'Basic run tracking & history',
      'Community route access'
    ],
    cta: 'Download Now',
    featured: false
  },
  {
    name: 'Pro',
    price: '$6',
    period: '/month',
    description: 'For runners who want total control over their path.',
    features: [
      'Advanced filters (Lighting, Hills, Traffic)',
      'Multi-stop Errand Routing',
      'Offline Maps',
      'AI Training Plan Integration',
      'Unlimited saved routes',
      'Export to GPX/Watch'
    ],
    cta: 'Start 14-Day Free Trial',
    featured: true
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Simple Pricing
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            Invest in your lifestyle. Cancel anytime.
          </p>
        </div>

        <div className="grid max-w-lg mx-auto gap-8 lg:grid-cols-2 lg:max-w-4xl">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col justify-between p-8 bg-white rounded-3xl shadow-xl ring-1 ${
                tier.featured ? 'ring-brand-500 scale-105 z-10' : 'ring-slate-200'
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline text-slate-900">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.period && <span className="ml-1 text-xl font-semibold text-slate-500">{tier.period}</span>}
                </div>
                <p className="mt-6 text-slate-500">{tier.description}</p>

                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-5 h-5 text-brand-500" />
                      <span className="ml-3 text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-xl text-center font-bold transition-all ${
                  tier.featured
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg hover:shadow-xl'
                    : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};