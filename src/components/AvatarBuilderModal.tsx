import React, { useState, useEffect } from 'react';
import { X, Check, Glasses, User, Shirt, Image as ImageIcon, Paintbrush, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AvatarBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (avatarUrl: string, bgColor: string) => void;
  initialAvatarUrl?: string;
  initialBgColor?: string;
}

// Diverse hairstyles for both men and women
const HAIR_STYLES = [
  'shortFlat', 'shortRound', 'shortWaved', 'theCaesar',
  'straight01', 'straight02', 'straightAndStrand', 'curly', 
  'bob', 'bun', 'dreads', 'dreads01', 'dreads02',
  'frizzle', 'shaggy', 'shaggyMullet', 'miaWallace', 'longButNotTooLong'
];

// 6 beard styles (including none)
const BEARD_STYLES = ['none', 'beardLight', 'beardMajestic', 'beardMedium', 'moustacheFancy', 'moustacheMagnum'];

const HAIR_COLORS = ['2c1b18', '4a3123', 'a55728', 'b58143', '724133', '282828', 'e8e1e1'];

const ACCESSORIES = ['none', 'kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers', 'eyepatch'];

const CLOTHING = ['blazerAndShirt', 'blazerAndSweater', 'collarAndSweater', 'graphicShirt', 'hoodie', 'overall', 'shirtCrewNeck', 'shirtVNeck', 'shirtScoopNeck'];

const BACKGROUND_COLORS = ['b6e3f4', 'c0aede', 'd1d4f9', 'ffdfbf', 'ffd5dc', 'd4f7d4', 'f9f9f9', '1A1A1A', '3478E5', '55C990'];

export const AvatarBuilderModal: React.FC<AvatarBuilderModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialAvatarUrl,
  initialBgColor
}) => {
  const [seed, setSeed] = useState(Math.random().toString(36).substring(7));
  const [hair, setHair] = useState('shortFlat');
  const [beard, setBeard] = useState('none');
  const [hairColor, setHairColor] = useState('2c1b18');
  const [accessory, setAccessory] = useState('none');
  const [clothing, setClothing] = useState('blazerAndShirt');
  const [bgColor, setBgColor] = useState('b6e3f4');

  const [activeTab, setActiveTab] = useState<'hair' | 'beard' | 'hairColor' | 'accessories' | 'clothing' | 'background'>('hair');

  useEffect(() => {
    if (initialAvatarUrl && initialAvatarUrl.includes('dicebear.com')) {
      try {
        const url = new URL(initialAvatarUrl);
        const params = new URLSearchParams(url.search);
        
        if (params.get('seed')) setSeed(params.get('seed')!);
        if (params.get('top')) setHair(params.get('top')!);
        if (params.get('facialHair')) setBeard(params.get('facialHair')!);
        if (params.get('hairColor')) setHairColor(params.get('hairColor')!);
        if (params.get('accessories')) setAccessory(params.get('accessories')!);
        if (params.get('clothing')) setClothing(params.get('clothing')!);
      } catch (e) {
        console.error("Error parsing avatar URL");
      }
    }
    if (initialBgColor) {
      setBgColor(initialBgColor.replace('#', ''));
    }
  }, [initialAvatarUrl, initialBgColor, isOpen]);

  if (!isOpen) return null;

  // Helper to safely build the API URL and avoid broken images
  const buildAvatarUrl = (options: { seedStr: string, top?: string, beard?: string, acc?: string, cloth?: string, bg?: string, hideBody?: boolean }) => {
    let url = `https://api.dicebear.com/9.x/avataaars/svg?seed=${options.seedStr}&skinColor=edb98a&mouth=smile&eyes=default&eyebrows=defaultNatural`;
    if (options.bg && options.bg !== 'transparent') url += `&backgroundColor=${options.bg}`;
    if (options.top) url += `&top=${options.top}`;
    if (options.beard && options.beard !== 'none') url += `&facialHair=${options.beard}`;
    if (options.cloth) url += `&clothing=${options.cloth}`;
    if (options.acc && options.acc !== 'none') url += `&accessories=${options.acc}`;
    url += `&hairColor=${hairColor}`;
    return url;
  };

  const currentAvatarUrl = buildAvatarUrl({ 
    seedStr: seed, 
    top: hair, 
    beard: beard, 
    acc: accessory, 
    cloth: clothing, 
    bg: 'transparent' 
  });

  const tabs = [
    { id: 'hair', icon: User, label: 'Hair' },
    { id: 'beard', icon: Smile, label: 'Beard' },
    { id: 'hairColor', icon: Paintbrush, label: 'Color' },
    { id: 'accessories', icon: Glasses, label: 'Glasses' },
    { id: 'clothing', icon: Shirt, label: 'Clothing' },
    { id: 'background', icon: ImageIcon, label: 'Background' },
  ] as const;

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
              className="p-2 bg-black/10 hover:bg-black/20 text-[#101B3D] rounded-full backdrop-blur-md transition"
            >
              <X className="w-6 h-6" />
            </button>
            <button 
              onClick={() => onSave(currentAvatarUrl, `#${bgColor}`)}
              className="px-4 py-2 bg-[#55C990] hover:bg-[#46A778] text-white text-sm font-black rounded-full transition shadow-lg active:scale-95 flex items-center gap-1"
            >
              <Check className="w-4 h-4" /> Save
            </button>
          </div>

          {/* Main Avatar Preview Section */}
          <div 
            className="h-[45vh] sm:h-72 w-full flex justify-center items-end transition-colors duration-300 relative pt-12"
            style={{ backgroundColor: `#${bgColor}` }}
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 translate-y-4">
              <img 
                src={currentAvatarUrl} 
                alt="Avatar" 
                className="w-full h-full object-contain drop-shadow-xl" 
              />
            </div>
          </div>

          {/* Tab Bar - Scrollable horizontally if needed */}
          <div className="flex items-center px-2 bg-white border-b border-[#EAEAEA] shrink-0 overflow-x-auto hide-scrollbar">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 min-w-[60px] py-4 flex flex-col items-center justify-center border-b-2 transition-colors ${
                    isActive 
                      ? 'border-[#3478E5] text-[#3478E5]' 
                      : 'border-transparent text-[#8C8C8C] hover:text-[#101B3D]'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </button>
              );
            })}
          </div>

          {/* Options Grid Area */}
          <div className="flex-1 overflow-y-auto bg-[#FAFAFA] p-6 custom-scrollbar">
            
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

            {activeTab === 'hair' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-[#101B3D] font-bold text-lg">Hair Styles ({HAIR_STYLES.length})</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {HAIR_STYLES.map(style => {
                    const iconUrl = buildAvatarUrl({ seedStr: seed, top: style, beard: beard, acc: 'none', cloth: 'shirtCrewNeck' });
                    return (
                      <button
                        key={style}
                        onClick={() => setHair(style)}
                        className={`aspect-square rounded-2xl p-2 flex items-center justify-center transition-all border-2 bg-white ${
                          hair === style 
                            ? 'bg-[#EEF4FF] border-[#3478E5] shadow-sm' 
                            : 'border-[#EAEAEA] hover:border-[#D0D0D0]'
                        }`}
                      >
                        <img src={iconUrl} alt={style} className="w-full h-full object-contain" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'beard' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-[#101B3D] font-bold text-lg">Facial Hair ({BEARD_STYLES.length})</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {BEARD_STYLES.map(style => {
                    const iconUrl = buildAvatarUrl({ seedStr: seed, top: hair, beard: style, acc: 'none', cloth: 'shirtCrewNeck' });
                    return (
                      <button
                        key={style}
                        onClick={() => setBeard(style)}
                        className={`aspect-square rounded-2xl p-2 flex items-center justify-center transition-all border-2 bg-white ${
                          beard === style 
                            ? 'bg-[#EEF4FF] border-[#3478E5] shadow-sm' 
                            : 'border-[#EAEAEA] hover:border-[#D0D0D0]'
                        }`}
                      >
                        {style === 'none' ? (
                          <span className="text-xs font-bold text-[#8C8C8C]">None</span>
                        ) : (
                          <img src={iconUrl} alt={style} className="w-full h-full object-contain" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'hairColor' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-[#101B3D] font-bold text-lg">Hair Color</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                  {HAIR_COLORS.map(color => (
                    <button
                      key={color}
                      onClick={() => setHairColor(color)}
                      className={`aspect-square rounded-full transition-all border-4 ${hairColor === color ? 'border-[#3478E5] scale-105 shadow-md' : 'border-[#EAEAEA] hover:border-[#D0D0D0]'}`}
                      style={{ backgroundColor: `#${color}` }}
                    >
                      {hairColor === color && <Check className="w-6 h-6 mx-auto text-white drop-shadow-md" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'accessories' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-[#101B3D] font-bold text-lg">Glasses & Specs ({ACCESSORIES.length})</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {ACCESSORIES.map(acc => {
                    const iconUrl = buildAvatarUrl({ seedStr: seed, top: hair, beard: beard, acc: acc, cloth: 'shirtCrewNeck' });
                    return (
                      <button
                        key={acc}
                        onClick={() => setAccessory(acc)}
                        className={`aspect-square rounded-2xl p-2 flex items-center justify-center transition-all border-2 bg-white ${
                          accessory === acc 
                            ? 'bg-[#EEF4FF] border-[#3478E5] shadow-sm' 
                            : 'border-[#EAEAEA] hover:border-[#D0D0D0]'
                        }`}
                      >
                        {acc === 'none' ? (
                          <span className="text-xs font-bold text-[#8C8C8C]">None</span>
                        ) : (
                          <img src={iconUrl} alt={acc} className="w-full h-full object-contain" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'clothing' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-[#101B3D] font-bold text-lg">Clothing ({CLOTHING.length})</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {CLOTHING.map(cloth => {
                    const iconUrl = buildAvatarUrl({ seedStr: seed, top: 'shortFlat', beard: 'none', acc: 'none', cloth: cloth });
                    return (
                      <button
                        key={cloth}
                        onClick={() => setClothing(cloth)}
                        className={`aspect-square rounded-2xl p-2 flex items-center justify-center transition-all border-2 bg-white ${
                          clothing === cloth 
                            ? 'bg-[#EEF4FF] border-[#3478E5] shadow-sm' 
                            : 'border-[#EAEAEA] hover:border-[#D0D0D0]'
                        }`}
                      >
                        <img src={iconUrl} alt={cloth} className="w-full h-full object-contain" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
