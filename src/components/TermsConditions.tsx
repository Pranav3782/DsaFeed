import React from 'react';
import { Scale, CheckCircle2, AlertTriangle, FileText, ArrowLeft } from 'lucide-react';

interface TermsConditionsProps {
  onBack: () => void;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
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
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFFBEA] rounded-3xl shadow-sm border border-[#F5C94A]/20">
          <Scale className="w-10 h-10 text-[#F5C94A]" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[#101B3D] tracking-tight">Terms & Conditions</h1>
        <p className="text-[#8C8C8C] font-bold text-base sm:text-lg max-w-2xl mx-auto">
          The simple rules of the road for using DSAfeed. By using our platform, you agree to these friendly terms.
        </p>
      </div>

      {/* Content Body */}
      <div className="bg-white border border-[#EAEAEA] rounded-[2rem] p-8 sm:p-12 shadow-xs space-y-12">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-[#EFFCF6] rounded-xl text-[#55C990]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#101B3D]">1. Acceptable Use</h2>
          </div>
          <p className="text-base text-[#111111]/80 leading-relaxed font-medium">
            DSAfeed is designed to help you learn Data Structures and Algorithms in a friendly environment. You agree to use the platform for educational purposes. Please do not attempt to scrape, reverse-engineer, or maliciously overload our servers. Let's keep the platform fast and accessible for everyone.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-[#EEF4FF] rounded-xl text-[#3478E5]">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#101B3D]">2. Intellectual Property</h2>
          </div>
          <p className="text-base text-[#111111]/80 leading-relaxed font-medium">
            All the content, exercises, analogies, and code snippets provided on DSAfeed are created to aid your personal learning journey. While you are free to use the knowledge you gain here anywhere, you may not redistribute or sell our curriculum and platform design as your own.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-[#FFF1F0] rounded-xl text-[#F26B5B]">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#101B3D]">3. Disclaimer of Warranties</h2>
          </div>
          <p className="text-base text-[#111111]/80 leading-relaxed font-medium">
            We strive to provide accurate, up-to-date information, but the field of computer science is vast. The platform is provided "as is" without any warranties, express or implied. We do not guarantee that using DSAfeed will land you a specific job, but we definitely hope it helps you nail your interviews!
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 border-t border-[#EAEAEA] pt-10">
          <p className="text-sm text-[#8C8C8C] leading-relaxed font-bold text-center">
            Last updated: August 11, 2026. <br />
            We may update these terms occasionally. We'll let you know about significant changes by placing a notice on our site.
          </p>
        </section>

      </div>
    </div>
  );
};
