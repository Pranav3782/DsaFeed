import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, User, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile } from '../types';
import { supabase } from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (isFirstLogin: boolean) => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setEmail('');
      setPassword('');
      setName('');
      setError('');
      setSuccessMessage('');
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (mode === 'signup' && !name) {
      setError('Please enter your full name.');
      return;
    }

    setError('');
    setSuccessMessage('');
    setIsLoading(true);

    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
              avatar_url: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`,
            },
          },
        });
        if (error) throw error;
        
        // If Supabase requires email verification, session will be null
        if (data.user && !data.session) {
          setSuccessMessage('Account created! Please check your email to verify your account.');
          setIsLoading(false);
          return;
        }
        
        onLoginSuccess(true);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        
        onLoginSuccess(false);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101B3D]/60 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-md bg-white border border-[#EAEAEA] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#8C8C8C] hover:text-[#101B3D] hover:bg-[#F5F5F0] transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-full text-xs font-black text-[#3478E5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome to DSAfeed</span>
          </div>
          <h2 className="text-2xl font-black text-[#101B3D]">
            {mode === 'login' ? 'Sign In to Continue' : 'Create Free Account'}
          </h2>
          <p className="text-xs text-[#111111]/70 font-medium">
            Start mastering data structures and track your daily learning progress.
          </p>
        </div>

        {/* Mode Toggle Pills */}
        <div className="grid grid-cols-2 p-1 bg-[#F5F5F0] rounded-2xl mb-6">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError('');
              setSuccessMessage('');
            }}
            className={`py-2 text-xs font-extrabold rounded-xl transition ${
              mode === 'login'
                ? 'bg-white text-[#101B3D] shadow-xs'
                : 'text-[#8C8C8C] hover:text-[#101B3D]'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setError('');
              setSuccessMessage('');
            }}
            className={`py-2 text-xs font-extrabold rounded-xl transition ${
              mode === 'signup'
                ? 'bg-white text-[#101B3D] shadow-xs'
                : 'text-[#8C8C8C] hover:text-[#101B3D]'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {error && (
            <div className="p-3 bg-[#FFF1F0] border border-[#F26B5B]/30 rounded-xl text-xs font-bold text-[#F26B5B] text-center">
              {error}
            </div>
          )}
          {successMessage && (
            <div className="p-3 bg-[#EEF4FF] border border-[#3478E5]/30 rounded-xl text-xs font-bold text-[#3478E5] text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {successMessage}
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-[11px] font-black uppercase text-[#8C8C8C] mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FFFDF9] border border-[#EAEAEA] focus:border-[#3478E5] rounded-xl text-xs font-bold text-[#101B3D] outline-none transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-black uppercase text-[#8C8C8C] mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FFFDF9] border border-[#EAEAEA] focus:border-[#3478E5] rounded-xl text-xs font-bold text-[#101B3D] outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-black uppercase text-[#8C8C8C] mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FFFDF9] border border-[#EAEAEA] focus:border-[#3478E5] rounded-xl text-xs font-bold text-[#101B3D] outline-none transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3.5 bg-[#3478E5] hover:bg-[#2864C6] text-white font-extrabold text-xs rounded-2xl shadow-md transition flex items-center justify-center gap-2 active:scale-98"
          >
            {isLoading ? (
              <span>Processing...</span>
            ) : (
              <>
                <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-[11px] text-[#8C8C8C] text-center mt-5 font-medium">
          By continuing, you agree to DSAfeed's Terms & Learning Policy.
        </p>
      </motion.div>
    </div>
  );
};
