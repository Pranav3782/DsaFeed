import React from 'react';
import { motion } from 'motion/react';

const PlatformBadgeSet = () => (
  <>
    {/* Open Hunts */}
    <a href="https://openhunts.com" target="_blank" title="OpenHunts Club" rel="noopener noreferrer" className="shrink-0 transition-transform hover:scale-105">
      <img alt="OpenHunts Club Member" height="54" src="https://cdn.openhunts.com/badges/club.webp" style={{ width: 'auto', height: '54px' }} />
    </a>
    {/* Launch It */}
    <a href="https://www.launchit.site/launches/dsafeed" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-transform hover:scale-105">
      <img src="https://www.launchit.site/badges/launchit-light.svg" alt="DSAfeed - Featured on Launchit" width="200" height="54" style={{ height: '54px', width: 'auto' }} />
    </a>
    {/* Product Hunt */}
    <a href="https://www.producthunt.com/products/dsafeed?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-dsafeed" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-transform hover:scale-105">
      <img alt="DSAfeed - Data Structures & Algorithms Made Simple | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1231063&theme=light&t=1787650845950" style={{ height: '54px', width: 'auto' }} />
    </a>
    {/* Peerlist */}
    <a href="https://peerlist.io/suryapranav/project/dsafeed" target="_blank" rel="noreferrer" className="shrink-0 transition-transform hover:scale-105">
        <img src="https://peerlist.io/api/v1/projects/embed/PRJHGNQOEMJJDD88O18O8NBNGOBKM9?showUpvote=false&theme=light" alt="DSAfeed" style={{ width: 'auto', height: '54px' }} />
    </a>
    {/* JustHunt */}
    <a 
      href="https://justhunt.co/startups/dsafeed-data-structures-algorithms-made-simple" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="shrink-0 transition-transform hover:scale-105"
    >
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 16px',
        background: '#ffffff',
        color: '#111827',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        textDecoration: 'none',
        fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        height: '54px'
      }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '8px', overflow: 'hidden', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #e5e7eb' }}>
          <img src="https://dsafeed.com/./favicon.jpg" alt="DSAfeed" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, gap: '1px' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#f59e0b', letterSpacing: '0.8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>FEATURED ON
          </span>
          <span style={{ fontSize: '12px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 500, marginTop: '2px' }}>
            <img src="https://justhunt.co/logo.png" alt="JH" style={{ width: '14px', height: '14px', borderRadius: '3px' }} />JustHunt
          </span>
        </div>
      </div>
    </a>
    {/* LaunchPad India */}
    <a 
      href="https://launchpadindia.co/listing/dsafeed" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Featured on LaunchPad India" 
      className="shrink-0 transition-transform hover:scale-105"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0,
        height: '60px',
        boxSizing: 'border-box',
        padding: '0 18px 0 6px',
        background: '#ffffff',
        border: '2px solid #f97316',
        borderRadius: '14px',
        textDecoration: 'none',
        fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif",
        boxShadow: '0 1px 2px rgba(249,115,22,0.08), 0 8px 20px -10px rgba(249,115,22,0.25)',
        lineHeight: 1,
        maxWidth: '100%'
      }}
    >
      <img 
        src="https://launchpadindia.co/logo.png" 
        alt="" 
        width="40" 
        height="40" 
        style={{ objectFit: 'contain', display: 'block', flex: 'none' }} 
      />
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '4px', lineHeight: 1, textAlign: 'left' }}>
        <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.16em', color: '#78716c', textTransform: 'uppercase', whiteSpace: 'nowrap', textAlign: 'left' }}>FEATURED ON</span>
        <span style={{ fontSize: '21px', fontWeight: 700, letterSpacing: '-0.025em', color: '#0f172a', whiteSpace: 'nowrap' }}>LaunchPad<span style={{ color: '#f97316' }}>India</span></span>
      </span>
    </a>
    {/* Turbo0 */}
    <a href="https://turbo0.com/item/dsafeed" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-transform hover:scale-105">
      <img src="https://img.turbo0.com/badge-listed-light.svg" alt="Listed on Turbo0" style={{ height: '54px', width: 'auto' }} />
    </a>
    {/* AgentHunter */}
    <a
      href="https://www.agenthunter.io"
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 transition-all hover:scale-105"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        height: '54px',
        boxSizing: 'border-box'
      }}
    >
      <img src="https://www.agenthunter.io/logo-light.svg" alt="AgentHunter Badge" style={{ height: '2.5rem', width: '2.5rem' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>AgentHunter</p>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#111827', fontWeight: 600 }}>Featured AI Agent</p>
      </div>
    </a>
    {/* DANG! */}
    <a href="https://dang.ai" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-transform hover:scale-105">
      <img src="https://assets.dang.ai/badges/dang-verified-light.png" alt="Verified on DANG!" style={{ height: '54px', width: 'auto' }} />
    </a>
    {/* ShowMeBestAI */}
    <a href="https://showmebest.ai" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-transform hover:scale-105">
      <img src="https://showmebest.ai/badge/feature-badge-white.webp" alt="Featured on ShowMeBestAI" style={{ height: '54px', width: 'auto' }} />
    </a>
    {/* That App Show */}
    <a href="https://thatappshow.com/product/dsafeed" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-transform hover:scale-105">
      <img src="https://thatappshow.com/assets/images/badge.png" alt="That App Show" style={{ height: '54px', width: 'auto' }} />
    </a>
  </>
);

export const PlatformBadges: React.FC = () => {
  return (
    <div className="py-12 border-b border-[#EAEAEA] bg-transparent overflow-hidden flex flex-col items-center">
      <style>
        {`
          @keyframes scroll-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-marquee {
            animation: scroll-marquee 25s linear infinite;
          }
          .group:hover .animate-scroll-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="text-center max-w-xl mx-auto px-4 mb-10">
        <h2 className="text-2xl sm:text-3xl font-black text-[#101B3D]">
          <motion.span 
            initial={{ backgroundSize: "0% 100%" }}
            whileInView={{ backgroundSize: "100% 100%" }}
            viewport={{ once: true, amount: 0.8, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="inline leading-relaxed"
            style={{
              backgroundImage: "linear-gradient(transparent 65%, rgba(245,201,74,0.5) 65%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left top"
            }}
          >
            Product is Live On
          </motion.span>
        </h2>
      </div>

      <div className="w-full relative flex overflow-hidden group py-4">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FFFDF9] to-transparent z-10 pointer-events-none" />
        
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FFFDF9] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-scroll-marquee">
          {/* First set */}
          <div className="flex items-center justify-around gap-12 sm:gap-24 px-6 sm:px-12 w-max">
            <PlatformBadgeSet />
          </div>
          {/* Second identical set for seamless looping */}
          <div className="flex items-center justify-around gap-12 sm:gap-24 px-6 sm:px-12 w-max">
            <PlatformBadgeSet />
          </div>
        </div>
      </div>
    </div>
  );
};
