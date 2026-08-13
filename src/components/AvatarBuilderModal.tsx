import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AvatarBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (avatarUrl: string, bgColor: string) => void;
  initialAvatarUrl?: string;
  initialBgColor?: string;
}

const HAIR_STYLES = [
  'shortHairShortFlat', 'shortHairShortRound', 'shortHairShortWaved',
  'longHairStraight', 'longHairCurly', 'longHairBob',
  'eyepatch', 'hat', 'hijab', 'turban', 'winterHat1'
];

const HAIR_COLORS = ['2c1b18', '4a3123', 'a55728', 'b58143', '724133', '282828', 'e8e1e1'];

const ACCESSORIES = ['blank', 'kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers'];

const CLOTHING = ['blazerAndShirt', 'blazerAndSweater', 'collarAndSweater', 'graphicShirt', 'hoodie', 'overall', 'shirtCrewNeck', 'shirtVNeck'];

const BACKGROUND_COLORS = ['b6e3f4', 'c0aede', 'd1d4f9', 'ffdfbf', 'ffd5dc', 'd4f7d4', 'f9f9f9'];

export const AvatarBuilderModal: React.FC<AvatarBuilderModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialAvatarUrl,
  initialBgColor
}) => {
  const [seed, setSeed] = useState(Math.random().toString(36).substring(7));
  const [hair, setHair] = useState('shortHairShortFlat');
  const [hairColor, setHairColor] = useState('2c1b18');
  const [accessory, setAccessory] = useState('blank');
  const [clothing, setClothing] = useState('blazerAndShirt');
  const [bgColor, setBgColor] = useState('b6e3f4');

  // Try to parse existing avatar URL to set initial state
  useEffect(() => {
    if (initialAvatarUrl && initialAvatarUrl.includes('dicebear.com/9.x/avataaars/svg')) {
      try {
        const url = new URL(initialAvatarUrl);
        const params = new URLSearchParams(url.search);
        
        if (params.get('seed')) setSeed(params.get('seed')!);
        if (params.get('top')) setHair(params.get('top')!);
        if (params.get('hairColor')) setHairColor(params.get('hairColor')!);
        if (params.get('accessories')) setAccessory(params.get('accessories')!);
        if (params.get('clothing')) setClothing(params.get('clothing')!);
        if (params.get('backgroundColor')) setBgColor(params.get('backgroundColor')!);
      } catch (e) {
        console.error("Error parsing avatar URL");
      }
    }
  }, [initialAvatarUrl, isOpen]);

  if (!isOpen) return null;

  const currentAvatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}&top=${hair}&hairColor=${hairColor}&accessories=${accessory}&clothing=${clothing}&backgroundColor=${bgColor}&skinColor=edb98a,f8d25c,fd9841`;

  const randomize = () => {
    setSeed(Math.random().toString(36).substring(7));
    setHair(HAIR_STYLES[Math.floor(Math.random() * HAIR_STYLES.length)]);
    setHairColor(HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)]);
    setAccessory(ACCESSORIES[Math.floor(Math.random() * ACCESSORIES.length)]);
    setClothing(CLOTHING[Math.floor(Math.random() * CLOTHING.length)]);
    setBgColor(BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white dark:bg-[#151515] rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#EAEAEA] dark:border-white/10">
            <h2 className="text-xl font-black text-[#101B3D] dark:text-[#F8FAFC]">Create Avatar</h2>
            <button 
              onClick={onClose}
              className="p-2 bg-[#FAFAFA] dark:bg-[#1A1A1A] text-[#8C8C8C] hover:text-[#101B3D] dark:hover:text-[#F8FAFC] rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Avatar Preview */}
          <div className="bg-[#FAFAFA] dark:bg-[#101010] p-8 flex justify-center items-center relative">
            <button 
              onClick={randomize}
              className="absolute top-4 right-4 p-2 bg-white dark:bg-[#1A1A1A] rounded-full shadow-md text-[#3478E5] hover:rotate-180 transition-all duration-500"
              title="Randomize"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            
            <div className="w-40 h-40 rounded-full shadow-xl overflow-hidden bg-white">
              <img src={currentAvatarUrl} alt="Avatar Preview" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
            
            <div className="space-y-6">
              {/* Background Color */}
              <div>
                <label className="text-sm font-bold text-[#101B3D] dark:text-[#F8FAFC] mb-3 block">Background Color</label>
                <div className="flex flex-wrap gap-3">
                  {BACKGROUND_COLORS.map(color => (
                    <button
                      key={color}
                      onClick={() => setBgColor(color)}
                      className={`w-10 h-10 rounded-xl transition-all ${bgColor === color ? 'ring-2 ring-offset-2 ring-[#3478E5] scale-110' : 'hover:scale-105'}`}
                      style={{ backgroundColor: `#${color}` }}
                    />
                  ))}
                </div>
              </div>

              {/* Hair Style */}
              <div>
                <label className="text-sm font-bold text-[#101B3D] dark:text-[#F8FAFC] mb-3 block">Hair & Headwear</label>
                <div className="grid grid-cols-4 gap-2">
                  {HAIR_STYLES.map(style => (
                    <button
                      key={style}
                      onClick={() => setHair(style)}
                      className={`p-2 rounded-xl text-[10px] font-bold transition-all border ${
                        hair === style 
                          ? 'bg-[#EEF4FF] dark:bg-[#3478E5]/20 border-[#3478E5] text-[#3478E5] dark:text-[#60A5FA]' 
                          : 'bg-[#FAFAFA] dark:bg-[#1A1A1A] border-[#EAEAEA] dark:border-white/10 text-[#8C8C8C] hover:border-[#101B3D] dark:hover:border-white/30'
                      }`}
                    >
                      {style.replace(/([A-Z])/g, ' $1').trim().substring(0, 8)}..
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Color */}
              <div>
                <label className="text-sm font-bold text-[#101B3D] dark:text-[#F8FAFC] mb-3 block">Hair Color</label>
                <div className="flex flex-wrap gap-3">
                  {HAIR_COLORS.map(color => (
                    <button
                      key={color}
                      onClick={() => setHairColor(color)}
                      className={`w-8 h-8 rounded-full transition-all ${hairColor === color ? 'ring-2 ring-offset-2 ring-[#3478E5] scale-110' : 'hover:scale-105'}`}
                      style={{ backgroundColor: `#${color}` }}
                    >
                      {hairColor === color && <Check className="w-4 h-4 mx-auto text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accessories */}
              <div>
                <label className="text-sm font-bold text-[#101B3D] dark:text-[#F8FAFC] mb-3 block">Accessories</label>
                <div className="flex flex-wrap gap-2">
                  {ACCESSORIES.map(acc => (
                    <button
                      key={acc}
                      onClick={() => setAccessory(acc)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        accessory === acc 
                          ? 'bg-[#EEF4FF] dark:bg-[#3478E5]/20 border-[#3478E5] text-[#3478E5] dark:text-[#60A5FA]' 
                          : 'bg-[#FAFAFA] dark:bg-[#1A1A1A] border-[#EAEAEA] dark:border-white/10 text-[#8C8C8C]'
                      }`}
                    >
                      {acc}
                    </button>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-[#EAEAEA] dark:border-white/10 bg-white dark:bg-[#151515]">
            <button
              onClick={() => onSave(currentAvatarUrl, `#${bgColor}`)}
              className="w-full py-4 bg-[#101B3D] dark:bg-[#3478E5] hover:bg-[#1A2A5E] dark:hover:bg-[#2563EB] text-white rounded-xl font-bold transition-colors shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              <span>Save Avatar</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
