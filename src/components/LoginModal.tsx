import { motion, AnimatePresence } from "motion/react";
import { X, Terminal, Lock, User, Eye, EyeOff } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [currentStep, setCurrentStep] = useState<"username" | "password" | "authenticating" | "success">("username");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "[ iamKali Security Terminal v2.7.3 ]",
    "[ Initializing secure connection... ]",
    "",
    "> Awaiting credentials...",
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, currentStep]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const typeMessage = async (message: string, delay = 30) => {
    setIsTyping(true);
    let currentMessage = "";
    for (let char of message) {
      currentMessage += char;
      setTerminalOutput(prev => {
        const newOutput = [...prev];
        newOutput[newOutput.length - 1] = currentMessage;
        return newOutput;
      });
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    setIsTyping(false);
  };

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setTerminalOutput(prev => [
        ...prev,
        `> login: ${username}`,
        "> Password:",
      ]);
      setCurrentStep("password");
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      const maskedPassword = "•".repeat(password.length);
      setTerminalOutput(prev => [
        ...prev,
        `> password: ${maskedPassword}`,
        "",
        "> Authenticating...",
      ]);
      setCurrentStep("authenticating");

      // Simulate authentication process
      await new Promise(resolve => setTimeout(resolve, 800));
      setTerminalOutput(prev => [...prev, "> Checking credentials..."]);
      
      await new Promise(resolve => setTimeout(resolve, 600));
      setTerminalOutput(prev => [...prev, "> Verifying security tokens..."]);
      
      await new Promise(resolve => setTimeout(resolve, 700));
      setTerminalOutput(prev => [...prev, "> Establishing secure session..."]);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      setTerminalOutput(prev => [
        ...prev,
        "",
        "[ ✓ ACCESS GRANTED ]",
        `[ Welcome back, ${username} ]`,
        "[ Session ID: ${Math.random().toString(36).substr(2, 9).toUpperCase()} ]",
        "",
        "> Redirecting to secure dashboard...",
      ]);
      
      setCurrentStep("success");
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      handleClose();
    }
  };

  const handleClose = () => {
    setCurrentStep("username");
    setUsername("");
    setPassword("");
    setTerminalOutput([
      "[ iamKali Security Terminal v2.7.3 ]",
      "[ Initializing secure connection... ]",
      "",
      "> Awaiting credentials...",
    ]);
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Terminal Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl"
            onKeyDown={handleKeyPress}
          >
            {/* Terminal Window */}
            <div className="bg-card border-2 border-primary/50 shadow-2xl neon-border-blue overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-primary/10 border-b border-primary/30 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 text-primary font-mono text-lg">
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs text-primary">root@iamkali:~#</span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-primary/70 hover:text-primary transition-colors"
                  disabled={currentStep === "authenticating"}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Terminal Body */}
              <div className="bg-background p-6">
                {/* Terminal Output */}
                <div
                  ref={terminalRef}
                  className="font-mono text-sm text-primary/80 mb-4 h-64 overflow-y-auto space-y-1 scanline-effect"
                  style={{
                    textShadow: "0 0 2px rgba(0, 240, 255, 0.3)",
                  }}
                >
                  {terminalOutput.map((line, index) => (
                    <div key={index} className="whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                {currentStep === "username" && (
                  <form onSubmit={handleUsernameSubmit} className="flex items-center gap-2">
                    <span className="font-mono text-sm text-primary/70">login:</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-primary caret-primary"
                      placeholder="enter username_"
                      autoComplete="username"
                      disabled={isTyping}
                    />
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-primary"
                    >
                      █
                    </motion.span>
                  </form>
                )}

                {currentStep === "password" && (
                  <form onSubmit={handlePasswordSubmit} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-primary/70">password:</span>
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          ref={inputRef}
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-primary caret-primary"
                          placeholder="enter password_"
                          autoComplete="current-password"
                          disabled={isTyping}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-primary/50 hover:text-primary transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-primary"
                      >
                        █
                      </motion.span>
                    </div>
                    <div className="flex gap-2 text-xs font-mono text-primary/50">
                      <span>[ Press Enter to authenticate ]</span>
                      <span>[ ESC to abort ]</span>
                    </div>
                  </form>
                )}

                {currentStep === "authenticating" && (
                  <div className="flex items-center gap-2 font-mono text-sm text-primary">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⟳
                    </motion.span>
                    <span>Processing...</span>
                  </div>
                )}

                {currentStep === "success" && (
                  <div className="flex items-center gap-2 font-mono text-sm text-primary">
                    <Lock className="w-4 h-4" />
                    <span>[ Secure session established ]</span>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-primary/5 border-t border-primary/20 px-4 py-2">
                <div className="flex items-center justify-between text-xs font-mono text-primary/40">
                  <span>[ Encrypted Connection: TLS 1.3 ]</span>
                  <span>[ iamKali Auth System ]</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}