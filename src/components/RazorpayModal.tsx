import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, CheckCircle2, X, Lock } from 'lucide-react';

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  planName: string;
}

export const RazorpayModal: React.FC<RazorpayModalProps> = ({
  isOpen,
  onClose,
  amount,
  planName
}) => {
  const [step, setStep] = useState<'input' | 'processing' | 'success'>('input');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('input');
      setEmail('');
      setPhone('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate network delay and payment processing
    setTimeout(() => {
      setStep('success');
      
      // Auto close after success
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#101B3D]/60 backdrop-blur-sm"
          onClick={step === 'input' ? onClose : undefined}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative z-10 w-full max-w-[360px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Razorpay Header */}
          <div className="bg-[#101B3D] px-6 py-5 text-white flex flex-col items-center justify-center relative">
            {step === 'input' && (
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
              <span className="text-[#3478E5] font-black text-xl tracking-tighter">DSA</span>
            </div>
            <h2 className="font-medium opacity-90 text-sm">DSAFeed Platform</h2>
            <div className="mt-2 text-3xl font-bold tracking-tight">
              ₹{amount}
            </div>
            <p className="text-white/60 text-xs mt-1">For {planName} Plan</p>
          </div>

          <div className="p-6 bg-[#F9F9F9] flex-1">
            
            {step === 'input' && (
              <form onSubmit={handlePay} className="space-y-4">
                <div>
                  <h3 className="text-[#101B3D] font-bold text-sm mb-4">Contact Details</h3>
                  <div className="space-y-3">
                    <div className="relative">
                      <input 
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        required
                        className="w-full pl-4 pr-4 py-3 bg-white border border-[#EAEAEA] rounded-md focus:outline-none focus:border-[#3478E5] text-sm text-[#101B3D] placeholder:text-[#8C8C8C] shadow-sm transition"
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email ID"
                        required
                        className="w-full pl-4 pr-4 py-3 bg-white border border-[#EAEAEA] rounded-md focus:outline-none focus:border-[#3478E5] text-sm text-[#101B3D] placeholder:text-[#8C8C8C] shadow-sm transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#3478E5] hover:bg-[#2864C6] text-white py-3.5 rounded-md font-bold text-sm shadow-md transition flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    Pay ₹{amount}
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] text-[#8C8C8C] font-medium">
                  <Lock className="w-3 h-3" />
                  <span>Secured by Razorpay</span>
                </div>
              </form>
            )}

            {step === 'processing' && (
              <div className="py-12 flex flex-col items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-12 h-12 border-4 border-[#EAEAEA] border-t-[#3478E5] rounded-full mb-4"
                />
                <p className="text-[#101B3D] font-bold">Processing Payment...</p>
                <p className="text-sm text-[#8C8C8C] mt-1">Please do not close this window</p>
              </div>
            )}

            {step === 'success' && (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-10 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#55C990]/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-[#55C990]" />
                </div>
                <h3 className="text-xl font-black text-[#101B3D]">Payment Successful!</h3>
                <p className="text-sm text-[#8C8C8C] mt-2 font-medium max-w-[200px]">
                  You have successfully subscribed to the {planName} plan.
                </p>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
