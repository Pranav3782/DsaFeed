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
