import React from 'react';
import { Shield, Eye, Database, Mail, UserCheck, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300 pb-20 pt-6 px-4">
      
      {/* Back Button */}
      <div className="flex justify-start">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#8C8C8C] hover:text-[#101B3D] transition-all font-bold text-sm bg-white border border-[#EAEAEA] px-4 py-2.5 rounded-xl shadow-sm active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>

      {/* Header */}
      <div className="text-center space-y-5">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#EEF4FF] rounded-3xl shadow-sm border border-[#3478E5]/10">
          <Shield className="w-10 h-10 text-[#3478E5]" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[#101B3D] tracking-tight">Privacy Policy</h1>
        <p className="text-[#8C8C8C] font-bold text-base sm:text-lg max-w-2xl mx-auto">
          We believe in keeping your learning data secure, private, and strictly under your control. 
          Here is our promise to you, written in plain English.
        </p>
      </div>

      {/* Content Body */}
      <div className="bg-white border border-[#EAEAEA] rounded-[2rem] p-8 sm:p-12 shadow-xs space-y-12">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-[#FFFBEA] rounded-xl text-[#F5C94A]">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#101B3D]">1. Information We Collect</h2>
          </div>
          <p className="text-base text-[#111111]/80 leading-relaxed font-medium">
            When you create an account on DSAfeed, we only ask for what we absolutely need. This typically includes your basic profile information (like your name or email) if you choose to sign up. If you are learning as a guest, your progress is saved entirely locally on your own device.
          </p>
          <ul className="list-disc list-inside text-base text-[#111111]/80 leading-relaxed font-medium ml-4 space-y-2">
            <li><strong>Account Data:</strong> Email address and encrypted password (via our secure authentication provider).</li>
            <li><strong>Learning Data:</strong> Your quiz scores, completed topics, and daily streaks to power your personalized dashboard.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-[#EFFCF6] rounded-xl text-[#55C990]">
              <Database className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#101B3D]">2. How We Use Your Data</h2>
          </div>
          <p className="text-base text-[#111111]/80 leading-relaxed font-medium">
            We are a learning platform, not a data broker. Your data is strictly used to improve your learning experience. We use your learning history to award badges, track your streaks, and show you exactly where you left off. 
          </p>
          <p className="text-base text-[#111111]/80 leading-relaxed font-medium">
            <strong>We will never sell your personal information to third parties.</strong>
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-[#FFF1F0] rounded-xl text-[#F26B5B]">
              <UserCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#101B3D]">3. Your Rights & Control</h2>
          </div>
          <p className="text-base text-[#111111]/80 leading-relaxed font-medium">
            You own your data. At any time, you can navigate to your Profile Dashboard and choose to completely reset your progress. If you wish to permanently delete your account and all associated data from our servers, you can do so by contacting support.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 border-t border-[#EAEAEA] pt-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-[#F7F5F0] rounded-xl text-[#101B3D]">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#101B3D]">Questions?</h2>
          </div>
          <p className="text-base text-[#111111]/80 leading-relaxed font-medium">
            If you have any questions about how we handle your privacy, please feel free to reach out to us at <a href="mailto:voiein7@gmail.com" className="text-[#3478E5] font-bold hover:underline">voiein7@gmail.com</a>. We're here to help!
          </p>
        </section>

      </div>
    </div>
  );
};
