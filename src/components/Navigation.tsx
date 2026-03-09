import { motion } from "motion/react";
import { Terminal, Menu, X, Search, Lock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { LoginModal } from "./LoginModal";
import { SearchModal } from "./SearchModal";
import { EasterEggModal } from "./EasterEggModal";
import React from "react";

interface NavigationProps {
  videos?: any[];
  courses?: any[];
  tutorials?: any[];
}

export function Navigation({ videos = [], courses = [], tutorials = [] }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);

    // Clear existing timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    // Reset click count after 2 seconds of no clicks
    clickTimeoutRef.current = setTimeout(() => {
      setClickCount(0);
    }, 2000);
  };

  useEffect(() => {
    if (clickCount === 11) {
      setIsEasterEggOpen(true);
      setClickCount(0);
    }
  }, [clickCount]);

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: "VIDEOS", href: "#videos" },
    { name: "COURSES", href: "#courses" },
    { name: "TUTORIALS", href: "#tutorials" },
    { name: "COMMUNITY", href: "#community" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="p-2 border-2 border-primary neon-border-blue"
                animate={clickCount > 0 ? {
                  borderColor: ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--primary))"],
                  boxShadow: [
                    "0 0 10px hsl(var(--primary) / 0.5)",
                    "0 0 20px hsl(var(--accent) / 0.8)",
                    "0 0 10px hsl(var(--primary) / 0.5)"
                  ]
                } : {}}
                transition={{ duration: 0.3 }}
              >
                <Terminal className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.span 
                className="text-xl font-mono text-primary neon-blue"
                animate={clickCount > 0 ? {
                  textShadow: [
                    "0 0 10px hsl(var(--primary) / 0.5)",
                    "0 0 20px hsl(var(--accent) / 0.8)",
                    "0 0 10px hsl(var(--primary) / 0.5)"
                  ]
                } : {}}
                transition={{ duration: 0.3 }}
              >
                iamKali
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-mono text-sm text-primary/70 hover:text-primary transition-colors relative group"
                >
                  <span className="relative z-10">&gt; {item.name}</span>
                  <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform"></span>
                </motion.a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-primary hover:bg-primary/10 transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={() => setIsLoginOpen(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,240,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-transparent border-2 border-primary text-primary px-6 py-2 font-mono uppercase tracking-wider text-sm overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>&gt;./login</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-primary/30 bg-card"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block font-mono text-primary/70 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  &gt; {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsOpen(false);
                }}
                className="w-full bg-transparent border-2 border-primary text-primary px-6 py-2 font-mono uppercase tracking-wider text-sm mt-4 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>&gt; ACCESS_TERMINAL</span>
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        videos={videos}
        courses={courses}
        tutorials={tutorials}
      />
      <EasterEggModal isOpen={isEasterEggOpen} onClose={() => setIsEasterEggOpen(false)} />
    </>
  );
}