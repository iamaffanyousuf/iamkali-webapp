import { motion } from "motion/react";
import { Terminal, Shield, Lock } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "root@iamkali:~$ Initializing security protocols...";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      {/* High-fi Dynamic Circuit Background with Data Flow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {/* Main circuit grid */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Glowing gradient for lines */}
            <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
            
            {/* Data packet animation */}
            <circle id="dataPacket" r="3" fill="currentColor" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
          </defs>
          
          {/* Circuit paths */}
          <g className="text-chart-2" stroke="currentColor" strokeWidth="0.5" fill="none">
            {/* Horizontal main lines */}
            <motion.path
              d="M0,200 L300,200 L300,150 L500,150"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M1000,300 L700,300 L700,400 L400,400"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,600 L250,600 L250,500 L600,500 L600,550"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
            />
            <motion.path
              d="M1000,700 L750,700 L750,650 L500,650 L500,750"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
            />
            
            {/* Vertical connectors */}
            <motion.path
              d="M200,0 L200,300 L300,300 L300,500"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
            />
            <motion.path
              d="M800,0 L800,250 L700,250 L700,450"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.7, ease: "easeInOut" }}
            />
            <motion.path
              d="M400,1000 L400,700 L500,700 L500,450"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
            
            {/* Complex intersections */}
            <motion.path
              d="M150,400 L350,400 L350,450 M350,400 L450,400 L450,300"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M650,250 L750,250 L750,350 M750,250 L850,250 L850,150"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            />
          </g>
          
          {/* Circuit nodes with pulse */}
          <g className="text-chart-2" fill="currentColor">
            {[
              [300, 200], [300, 150], [500, 150],
              [700, 300], [700, 400], [400, 400],
              [250, 600], [250, 500], [600, 500],
              [750, 700], [500, 650], [500, 750],
              [200, 300], [300, 300], [300, 500],
              [800, 250], [700, 250], [700, 450],
              [400, 700], [500, 700], [500, 450],
              [350, 400], [450, 400], [450, 300],
              [750, 250], [750, 350], [850, 250]
            ].map((pos, i) => (
              <motion.g key={i}>
                <circle cx={pos[0]} cy={pos[1]} r="3" />
                <motion.circle
                  cx={pos[0]}
                  cy={pos[1]}
                  r="6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.g>
            ))}
          </g>
        </svg>
        
        {/* Flowing data packets */}
        <motion.div
          className="absolute top-[20%] left-0 w-3 h-3 rounded-full bg-chart-2"
          animate={{
            x: [0, 300, 300, 500],
            y: [0, 0, -50, -50]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
          style={{ filter: 'blur(1px) drop-shadow(0 0 4px currentColor)' }}
        />
        <motion.div
          className="absolute top-[30%] right-0 w-3 h-3 rounded-full bg-accent"
          animate={{
            x: [0, -300, -300, -600],
            y: [0, 0, 100, 100]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
            repeatDelay: 1
          }}
          style={{ filter: 'blur(1px) drop-shadow(0 0 4px currentColor)' }}
        />
        <motion.div
          className="absolute bottom-[40%] left-0 w-3 h-3 rounded-full bg-chart-2"
          animate={{
            x: [0, 250, 250, 600, 600],
            y: [0, 0, -100, -100, 50]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
            repeatDelay: 1
          }}
          style={{ filter: 'blur(1px) drop-shadow(0 0 4px currentColor)' }}
        />
        <motion.div
          className="absolute bottom-[30%] right-0 w-3 h-3 rounded-full bg-accent"
          animate={{
            x: [0, -250, -250, -500, -500],
            y: [0, 0, -50, -50, 100]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
            repeatDelay: 1
          }}
          style={{ filter: 'blur(1px) drop-shadow(0 0 4px currentColor)' }}
        />
        
        {/* Additional flowing packets */}
        <motion.div
          className="absolute left-[20%] top-0 w-2.5 h-2.5 rounded-full bg-chart-2/80"
          animate={{
            x: [0, 0, 100, 100],
            y: [0, 300, 300, 500]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.3,
            repeatDelay: 1
          }}
          style={{ filter: 'blur(1px) drop-shadow(0 0 3px currentColor)' }}
        />
        <motion.div
          className="absolute right-[20%] top-0 w-2.5 h-2.5 rounded-full bg-accent/80"
          animate={{
            x: [0, 0, -100, -100],
            y: [0, 250, 250, 450]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.8,
            repeatDelay: 1
          }}
          style={{ filter: 'blur(1px) drop-shadow(0 0 3px currentColor)' }}
        />
        
        {/* Glowing connection beams */}
        <motion.div
          className="absolute top-[15%] left-0 h-[1px] bg-gradient-to-r from-chart-2/0 via-chart-2 to-chart-2/0"
          animate={{
            width: ['0%', '50%', '50%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 2
          }}
        />
        <motion.div
          className="absolute top-[70%] right-0 h-[1px] bg-gradient-to-l from-accent/0 via-accent to-accent/0"
          animate={{
            width: ['0%', '40%', '40%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
            repeatDelay: 2
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Terminal header */}
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-card border-2 border-primary/30 px-6 py-3 neon-border-blue">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-mono text-primary">{text}</span>
              <span className="cursor inline-block w-2 h-5 bg-primary"></span>
            </div>
          </div>

          <h1 className="flicker">
            <span className="block text-4xl md:text-7xl font-mono tracking-wider gradient-text">
              iamKali
            </span>
            <span className="block text-xl md:text-3xl font-mono tracking-widest neon-blue mt-2">
              &gt; HACKING | LINUX | SECURITY
            </span>
          </h1>

          <p className="text-lg md:text-xl font-mono text-primary/70 max-w-2xl mx-auto leading-relaxed">
            [SYSTEM ONLINE] Access granted to exclusive cybersecurity tutorials, 
            advanced Linux operations, and elite hacking techniques.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            {/* Animated Stats Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 px-6 py-4 border-2 border-primary/40 bg-primary/5 backdrop-blur-sm relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="font-mono text-sm">
                <div className="text-primary/60 text-xs uppercase tracking-wider">Videos</div>
                <div className="text-primary text-xl font-bold">50+</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 px-6 py-4 border-2 border-accent/40 bg-accent/5 backdrop-blur-sm relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="font-mono text-sm">
                <div className="text-accent/60 text-xs uppercase tracking-wider">Courses</div>
                <div className="text-accent text-xl font-bold">15+</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 px-6 py-4 border-2 border-chart-4/40 bg-chart-4/5 backdrop-blur-sm relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-chart-4/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-2 h-2 bg-chart-4 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="font-mono text-sm">
                <div className="text-chart-4/60 text-xs uppercase tracking-wider">Tutorials</div>
                <div className="text-chart-4 text-xl font-bold">100+</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}