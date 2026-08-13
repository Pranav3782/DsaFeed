import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Sparkles, Star } from 'lucide-react';
import { RazorpayModal } from './RazorpayModal';

const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 300,
    tagline: 'Skip one Biryani this week 🍛',
    description: 'Instead of just eating a biryani, you can invest this in building your foundational logic and problem-solving ability.',
    features: [
      'Access to core DSA concepts',
      'Basic practice problems',
      'Community forum access'
    ],
    highlight: false,
    color: 'bg-white',
    buttonColor: 'bg-[#101B3D]',
    textColor: 'text-[#101B3D]'
  },
  {
    id: 'plus',
    name: 'Plus Plan',
    price: 500,
    tagline: 'Skip the weekend movie 🍿',
    description: 'Instead of spending on a movie ticket and popcorn, dramatically improve your logic building with advanced patterns.',
    features: [
      'Everything in Basic',
      'Advanced DSA patterns',
      'Weekly coding contests',
      'Priority support'
    ],
    highlight: true,
    color: 'bg-gradient-to-b from-[#101B3D] to-[#2B4B99]',
    buttonColor: 'bg-[#3478E5]',
    textColor: 'text-white'
  },
  {
    id: 'pro',
    name: 'Pro Plus',
    price: 1000,
    tagline: 'Skip the expensive birthday party 🎂',
    description: 'Instead of doing an expensive birthday party outside, master DSA and land your dream job with our complete package.',
    features: [
      'Everything in Plus',
      '1-on-1 Mentorship',
      'Mock Interviews',
      'Resume reviews'
    ],
    highlight: false,
    color: 'bg-white',
    buttonColor: 'bg-[#101B3D]',
    textColor: 'text-[#101B3D]'
  }
];

export const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: number} | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF4FF] dark:bg-[#3478E5]/10 text-[#3478E5] dark:text-[#60A5FA] font-bold text-sm mb-6 border border-[#3478E5]/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Invest in your future</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#101B3D] dark:text-[#F8FAFC] mb-6"
          >
            Simple pricing for serious learners
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#8C8C8C] dark:text-gray-400 font-medium leading-relaxed"
          >
            We've made mastering Data Structures incredibly affordable. 
            Choose a plan that fits your goals and skip the unnecessary weekend expenses.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), type: "spring", stiffness: 100 }}
              className={`relative rounded-3xl p-8 sm:p-10 transition-transform hover:-translate-y-2 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-[#101B3D] to-[#2B4B99] text-white shadow-2xl scale-105 md:scale-110 z-20 border-2 border-[#3478E5]/50' 
                  : 'bg-white dark:bg-[#151515] text-[#101B3D] dark:text-[#F8FAFC] shadow-xl border border-[#EAEAEA] dark:border-white/10 z-10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F5C94A] to-[#F26B5B] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wide flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-white" /> MOST POPULAR
                </div>
              )}

              <h3 className={`text-2xl font-black mb-2 ${plan.highlight ? 'text-white' : 'text-[#101B3D] dark:text-[#F8FAFC]'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className={`text-5xl font-black tracking-tight ${plan.highlight ? 'text-white' : 'text-[#101B3D] dark:text-[#F8FAFC]'}`}>
                  ₹{plan.price}
                </span>
                <span className={`text-sm font-bold ml-1 ${plan.highlight ? 'text-white/70' : 'text-[#8C8C8C]'}`}>
                  /lifetime
                </span>
              </div>

              <div className={`p-4 rounded-xl mb-8 border ${
                plan.highlight ? 'bg-white/10 border-white/20' : 'bg-[#FAFAFA] dark:bg-[#1A1A1A] border-[#EAEAEA] dark:border-white/10'
              }`}>
                <p className="font-bold text-sm mb-1">{plan.tagline}</p>
                <p className={`text-xs leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-[#8C8C8C]'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-1 shrink-0 ${
                      plan.highlight ? 'bg-white/20' : 'bg-[#EEF4FF] dark:bg-[#3478E5]/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlight ? 'text-white' : 'text-[#3478E5]'}`} />
                    </div>
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-white/90' : 'text-[#111111] dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan({ name: plan.name, price: plan.price })}
                className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? 'bg-[#3478E5] hover:bg-[#2864C6] text-white shadow-lg shadow-[#3478E5]/30'
                    : 'bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#EAEAEA] dark:border-white/10 hover:border-[#101B3D] dark:hover:border-white/30 text-[#101B3D] dark:text-[#F8FAFC]'
                }`}
              >
                <span>Get Started</span>
                <Zap className={`w-4 h-4 ${plan.highlight ? 'fill-white' : ''}`} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <RazorpayModal 
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan?.name || ''}
        amount={selectedPlan?.price || 0}
      />
      
    </div>
  );
};
