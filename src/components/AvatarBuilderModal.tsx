import React, { useState, useEffect } from 'react';
import { X, Check, ImageIcon, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AvatarBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (avatarUrl: string, bgColor: string) => void;
  initialAvatarUrl?: string;
  initialBgColor?: string;
}

const PRESET_SEEDS = ['Felix', 'Aneka', 'Oliver', 'Jude', 'Liliana', 'Destiny', 'Eden', 'Ryker', 'Jasper', 'Emery'];
const BACKGROUND_COLORS = ['b6e3f4', 'c0aede', 'd1d4f9', 'ffdfbf', 'ffd5dc', 'd4f7d4', 'f9f9f9', '1A1A1A', '3478E5', '55C990'];

export const AvatarBuilderModal: React.FC<AvatarBuilderModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialAvatarUrl,
  initialBgColor
}) => {
  const [selectedSeed, setSelectedSeed] = useState(PRESET_SEEDS[0]);
  const [bgColor, setBgColor] = useState(BACKGROUND_COLORS[0]);
  const [activeTab, setActiveTab] = useState<'avatars' | 'background'>('avatars');

  useEffect(() => {
    if (initialAvatarUrl && initialAvatarUrl.includes('dicebear.com')) {
      try {
        const url = new URL(initialAvatarUrl);
        const params = new URLSearchParams(url.search);
        if (params.get('seed')) setSelectedSeed(params.get('seed')!);
      } catch (e) {
        console.error("Error parsing avatar URL");
      }
    } else if (initialAvatarUrl && !initialAvatarUrl.includes('dicebear.com')) {
      // If they had an unsplash one, just fallback to first seed
      setSelectedSeed(PRESET_SEEDS[0]);
    }
    
    if (initialBgColor) {
      setBgColor(initialBgColor.replace('#', ''));
    }
  }, [initialAvatarUrl, initialBgColor, isOpen]);

  if (!isOpen) return null;

  const buildAvatarUrl = (seed: string, bg: string = 'transparent') => {
    let url = `https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}&skinColor=edb98a&mouth=smile&eyes=default&eyebrows=defaultNatural`;
    if (bg && bg !== 'transparent') url += `&backgroundColor=${bg}`;
    return url;
  };

  const currentAvatarUrl = buildAvatarUrl(selectedSeed, 'transparent');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-md bg-white sm:rounded-[32px] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between p-4">
            <button 
              onClick={onClose}
              className="p-2 bg-black/10 hover:bg-black/20 text-white rounded-full backdrop-blur-md transition"
            >
              <X className="w-6 h-6" />
            </button>
            <button 
              onClick={() => onSave(currentAvatarUrl, `#${bgColor}`)}
              className="px-4 py-2 bg-[#55C990] hover:bg-[#46A778] text-white text-sm font-black rounded-full transition shadow-lg active:scale-95 flex items-center gap-1 backdrop-blur-md"
            >
              <Check className="w-4 h-4" /> Save
            </button>
          </div>

          {/* Main Avatar Preview Section (Glass Preview) */}
          <div 
            className="h-[45vh] sm:h-72 w-full flex justify-center items-end transition-colors duration-300 relative pt-12"
            style={{ backgroundColor: `#${bgColor}` }}
          >
            {/* Glass Overlay Effect */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
            
            <div className="w-56 h-56 sm:w-64 sm:h-64 translate-y-4 relative z-10">
              <img 
                src={currentAvatarUrl} 
                alt="Avatar Preview" 
                className="w-full h-full object-contain drop-shadow-2xl" 
              />
            </div>
          </div>

          {/* Tab Bar */}
          <div className="flex items-center px-2 bg-white border-b border-[#EAEAEA] shrink-0">
            <button
              onClick={() => setActiveTab('avatars')}
              className={`flex-1 py-4 flex flex-col items-center justify-center border-b-2 transition-colors ${
                activeTab === 'avatars' ? 'border-[#3478E5] text-[#3478E5]' : 'border-transparent text-[#8C8C8C] hover:text-[#101B3D]'
              }`}
            >
              <User className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Avatars</span>
            </button>
            <button
              onClick={() => setActiveTab('background')}
              className={`flex-1 py-4 flex flex-col items-center justify-center border-b-2 transition-colors ${
                activeTab === 'background' ? 'border-[#3478E5] text-[#3478E5]' : 'border-transparent text-[#8C8C8C] hover:text-[#101B3D]'
              }`}
            >
              <ImageIcon className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Background</span>
            </button>
          </div>

          {/* Options Grid Area */}
          <div className="flex-1 overflow-y-auto bg-[#FAFAFA] p-6 custom-scrollbar">
            
            {activeTab === 'avatars' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-[#101B3D] font-bold text-lg">Select Avatar</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {PRESET_SEEDS.map(seed => {
                    const iconUrl = buildAvatarUrl(seed, 'transparent');
                    return (
                      <button
                        key={seed}
                        onClick={() => setSelectedSeed(seed)}
                        className={`aspect-square rounded-2xl p-2 flex items-center justify-center transition-all border-2 bg-white ${
                          selectedSeed === seed 
                            ? 'bg-[#EEF4FF] border-[#3478E5] shadow-sm scale-105' 
                            : 'border-[#EAEAEA] hover:border-[#D0D0D0]'
                        }`}
                      >
                        <img src={iconUrl} alt={seed} className="w-full h-full object-contain" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'background' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-[#101B3D] font-bold text-lg">Background Color</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                  {BACKGROUND_COLORS.map(color => (
                    <button
                      key={color}
                      onClick={() => setBgColor(color)}
                      className={`aspect-square rounded-2xl transition-all border-4 ${bgColor === color ? 'border-[#3478E5] scale-105 shadow-md' : 'border-[#EAEAEA] hover:border-[#D0D0D0]'}`}
                      style={{ backgroundColor: `#${color}` }}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
