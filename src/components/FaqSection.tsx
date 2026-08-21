import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/dsaData';
import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const displayedFaqs = showAll ? FAQ_ITEMS : FAQ_ITEMS.slice(0, 4);

  return (
    <section className="max-w-4xl mx-auto my-16 px-4">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <motion.div 
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFFBEA] border border-[#F5C94A]/40 rounded-full text-xs font-black text-[#101B3D] mb-3"
        >
          <HelpCircle className="w-3.5 h-3.5 text-[#F5C94A]" />
          <span>Frequently Asked Questions</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#101B3D]">
          <motion.span 
            initial={{ backgroundSize: "0% 100%" }}
            whileInView={{ backgroundSize: "100% 100%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="inline leading-relaxed"
            style={{
              backgroundImage: "linear-gradient(transparent 65%, rgba(245,201,74,0.5) 65%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left top"
            }}
          >
            Everything you need to know
          </motion.span>
        </h2>
        <p className="text-sm text-[#111111]/70 font-medium mt-2">
          New to Data Structures & Algorithms? Here are answers to common beginner questions.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        <AnimatePresence>
          {displayedFaqs.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-xs ${
                  isOpen 
                    ? 'border-[#3478E5] shadow-md ring-2 ring-[#3478E5]/10' 
                    : 'border-[#EAEAEA] hover:border-[#3478E5]/50'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="text-base sm:text-lg font-extrabold text-[#101B3D] group-hover:text-[#3478E5] transition-colors">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-xl transition-all duration-200 shrink-0 ${
                    isOpen ? 'bg-[#EEF4FF] text-[#3478E5]' : 'bg-[#F5F5F0] text-[#8C8C8C]'
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-[#111111]/80 font-medium leading-relaxed border-t border-[#EAEAEA]/60 pt-3 mt-1">
                        <div>{item.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less FAQs Toggle Button */}
      {FAQ_ITEMS.length > 4 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F7F5F0] text-[#101B3D] border-2 border-[#EAEAEA] hover:border-[#3478E5]/40 rounded-2xl text-xs sm:text-sm font-extrabold shadow-xs transition-all active:scale-98"
          >
            {showAll ? (
              <>
                <Minus className="w-4 h-4 text-[#F26B5B]" />
                <span>Show Fewer FAQs</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-[#3478E5]" />
                <span>Show More FAQs</span>
              </>
            )}
          </button>
        </motion.div>
      )}

    </section>
  );
};
