// Reusable UI sound synthesizer using the Web Audio API
// Generates a soft, soothing "pop/click" droplet sound

let audioCtx: AudioContext | null = null;
let isMuted = localStorage.getItem('dsafeed_muted') === 'true';

export const toggleUISound = (muted: boolean) => {
  isMuted = muted;
  localStorage.setItem('dsafeed_muted', muted.toString());
};

export const getUISoundMuted = () => isMuted;

export const playUISound = () => {
  if (isMuted) return;
  
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      audioCtx = new AudioContextClass();
    }
    
    // Resume context if suspended (browser autoplay policies)
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    // Soft droplet sound config
    osc.type = 'sine';
    osc.frequency.setValueAtTime(500, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) {
    // Ignore audio errors silently
  }
};
