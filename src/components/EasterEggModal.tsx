import { motion, AnimatePresence } from "motion/react";
import { X, Terminal, Skull, Zap, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EasterEggModal({ isOpen, onClose }: EasterEggModalProps) {
  const [matrix, setMatrix] = useState<string[][]>([]);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      // Generate matrix rain
      const cols = 40;
      const rows = 15;
      const chars = "01アイウエオカキクケコサシスセソタチツテト";
      const newMatrix: string[][] = [];
      
      for (let i = 0; i < rows; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < cols; j++) {
          newMatrix[i][j] = chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setMatrix(newMatrix);

      // Animate terminal lines
      const terminalLines = [
        "[SYSTEM] Unauthorized access detected...",
        "[SYSTEM] Initializing counter-trace protocol...",
        "[SYSTEM] Connection origin: 127.0.0.1",
        "[SYSTEM] Analyzing threat level...",
        "",
        "[STATUS] Threat level: HARMLESS_SCRIPT_KIDDIE",
        "[STATUS] User classification: CURIOUS_HACKER",
        "",
        "[ALERT] Just kidding! You found the secret!",
        "",
        "[INFO] Easter egg unlocked: 'The Matrix Has You'",
        "[INFO] Achievement: Persistent Clicker",
        "",
        "[MESSAGE] Welcome to the real iamKali, Neo.",
        "[MESSAGE] Remember: There is no spoon... only sudo.",
        "",
        "[KALI@LOCALHOST]$ sudo rm -rf /your_fear",
        "[KALI@LOCALHOST]$ chmod +x /your_skills",
        "[KALI@LOCALHOST]$ ./hack_the_planet.sh",
        "",
        "[SUCCESS] You're now part of the iamKali.",
        "[SUCCESS] Keep clicking, keep hacking!",
        "",
        "[YOUTUBE] Want more hacking content?",
        "[YOUTUBE] Subscribe: @D3vilsKing",
      ];

      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < terminalLines.length) {
          setLines(prev => [...prev, terminalLines[currentLine]]);
          currentLine++;
        } else {
          clearInterval(interval);
        }
      }, 150);

      return () => clearInterval(interval);
    } else {
      setLines([]);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-black border-4 border-primary neon-border-blue overflow-hidden"
          >
            {/* Matrix rain background */}
            <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
              {matrix.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="font-mono text-xs text-primary flex"
                >
                  {row.map((char, j) => (
                    <motion.span
                      key={j}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: (i + j) * 0.1,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Header */}
            <div className="relative border-b-2 border-primary bg-primary/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Skull className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <div className="font-mono text-primary text-sm">[ROOT@IAMKALI]#</div>
                  <div className="font-mono text-xs text-primary/70">~/easter_egg/matrix.sh</div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-primary hover:bg-primary/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Terminal content */}
            <div className="relative p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-1">
                {lines.map((line, index) => {
                  if (!line) return null;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`font-mono text-sm ${
                        line.startsWith("[SYSTEM]")
                          ? "text-primary"
                          : line.startsWith("[STATUS]")
                          ? "text-chart-2"
                          : line.startsWith("[ALERT]")
                          ? "text-chart-1"
                          : line.startsWith("[INFO]")
                          ? "text-chart-4"
                          : line.startsWith("[MESSAGE]")
                          ? "text-accent"
                          : line.startsWith("[SUCCESS]")
                          ? "text-chart-3"
                          : line.startsWith("[YOUTUBE]")
                          ? "text-chart-1"
                          : line.startsWith("[KALI@LOCALHOST]")
                          ? "text-primary neon-blue"
                          : "text-primary/70"
                      }`}
                    >
                      {line}
                      {index === lines.length - 1 && (
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                          }}
                          className="inline-block ml-1"
                        >
                          █
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Glitch effect overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <div className="absolute inset-0 bg-primary/20" style={{ clipPath: "polygon(0 20%, 100% 20%, 100% 22%, 0 22%)" }} />
                <div className="absolute inset-0 bg-primary/20" style={{ clipPath: "polygon(0 60%, 100% 60%, 100% 62%, 0 62%)" }} />
              </motion.div>
            </div>

            {/* Footer with pulsing effects */}
            <div className="relative border-t-2 border-primary bg-primary/5 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <Zap className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="font-mono text-xs text-primary/70">EASTER_EGG.STATUS: ACTIVE</span>
              </div>
              
              <motion.a
                href="https://www.youtube.com/@D3vilsKing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-chart-1/20 border-2 border-chart-1 text-chart-1 hover:bg-chart-1/30 transition-colors font-mono text-xs neon-border-red"
              >
                <Youtube className="w-4 h-4" />
                <span>VISIT_CHANNEL</span>
              </motion.a>
              
              <span className="font-mono text-xs text-primary/70 hidden sm:block">PRESS ESC TO EXIT</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}