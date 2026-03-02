import { motion, AnimatePresence } from "motion/react";
import { X, Terminal, Shield, FileText, ScrollText, BookOpen } from "lucide-react";
import { useEffect } from "react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "terms" | "privacy" | "license" | "conduct";
}

const legalContent = {
  terms: {
    title: "TERMS_OF_SERVICE",
    prompt: "root@iamkali:~/legal/terms$",
    icon: FileText,
    sections: [
      {
        title: "[SECTION 1] ACCEPTANCE OF TERMS",
        content: [
          "By accessing iamKali, you agree to be bound by these terms.",
          "If you disagree with any part of the terms, you may not access the service.",
          "We reserve the right to update and change the Terms of Service.",
        ],
      },
      {
        title: "[SECTION 2] USE LICENSE",
        content: [
          "Permission is granted to temporarily access the materials on iamKali.",
          "This is the grant of a license, not a transfer of title.",
          "Educational purposes only - ethical hacking principles must be followed.",
          "You may not attempt to decompile or reverse engineer any software.",
        ],
      },
      {
        title: "[SECTION 3] DISCLAIMER",
        content: [
          "The materials on iamKali are provided on an 'as is' basis.",
          "iamKali makes no warranties, expressed or implied.",
          "Use of the information is at your own risk.",
          "We do not warrant that the service will be uninterrupted or error-free.",
        ],
      },
      {
        title: "[SECTION 4] ETHICAL USE",
        content: [
          "All content is for educational and authorized testing only.",
          "Unauthorized access to systems is illegal and prohibited.",
          "Users must comply with all applicable laws and regulations.",
          "iamKali is not responsible for misuse of provided information.",
        ],
      },
      {
        title: "[SECTION 5] LIMITATIONS",
        content: [
          "In no event shall iamKali be liable for any damages.",
          "This includes without limitation any direct, indirect, or consequential damages.",
          "Some jurisdictions do not allow limitations on implied warranties.",
        ],
      },
    ],
  },
  privacy: {
    title: "PRIVACY_POLICY",
    prompt: "root@iamkali:~/legal/privacy$",
    icon: Shield,
    sections: [
      {
        title: "[SECTION 1] INFORMATION COLLECTION",
        content: [
          "We collect information you provide directly to us.",
          "This may include: email, username, and profile information.",
          "We also collect usage data and analytics for service improvement.",
          "No sensitive personal information is collected without consent.",
        ],
      },
      {
        title: "[SECTION 2] DATA USAGE",
        content: [
          "Your information is used to provide and improve our services.",
          "We may send you technical notices and updates.",
          "Analytics help us understand how users interact with our content.",
          "We do not sell your personal information to third parties.",
        ],
      },
      {
        title: "[SECTION 3] DATA SECURITY",
        content: [
          "We implement industry-standard security measures.",
          "All data transmissions are encrypted using SSL/TLS.",
          "Regular security audits are performed on our systems.",
          "However, no method of transmission over the internet is 100% secure.",
        ],
      },
      {
        title: "[SECTION 4] COOKIES & TRACKING",
        content: [
          "We use cookies to enhance user experience.",
          "You can choose to disable cookies in your browser settings.",
          "Some features may not function properly without cookies.",
          "Third-party analytics may use their own cookies.",
        ],
      },
      {
        title: "[SECTION 5] YOUR RIGHTS",
        content: [
          "You have the right to access your personal data.",
          "You can request deletion of your account and data.",
          "You may opt-out of marketing communications at any time.",
          "Contact us for any privacy-related concerns.",
        ],
      },
    ],
  },
  license: {
    title: "LICENSE_AGREEMENT",
    prompt: "root@iamkali:~/legal/license$",
    icon: ScrollText,
    sections: [
      {
        title: "[SECTION 1] COPYRIGHT",
        content: [
          "© 2026 iamKali. All rights reserved.",
          "All content, including videos, courses, and tutorials are copyrighted.",
          "Unauthorized reproduction or distribution is prohibited.",
          "Content may not be used for commercial purposes without permission.",
        ],
      },
      {
        title: "[SECTION 2] EDUCATIONAL LICENSE",
        content: [
          "Content is provided under an educational use license.",
          "You may use materials for personal learning and skill development.",
          "You may reference content with proper attribution.",
          "Sharing of course materials with non-subscribers is prohibited.",
        ],
      },
      {
        title: "[SECTION 3] CODE & SCRIPTS",
        content: [
          "Code examples are provided under MIT License where applicable.",
          "You are free to use, modify, and distribute code examples.",
          "Attribution to iamKali is appreciated but not required for code.",
          "Scripts are provided as-is without warranty.",
        ],
      },
      {
        title: "[SECTION 4] THIRD-PARTY LICENSES",
        content: [
          "We use various open-source libraries and tools.",
          "Each third-party component retains its original license.",
          "Full list of dependencies available in repository.",
          "We comply with all third-party license requirements.",
        ],
      },
      {
        title: "[SECTION 5] RESTRICTIONS",
        content: [
          "You may not claim ownership of iamKali content.",
          "Reselling or redistributing courses is strictly prohibited.",
          "Reverse engineering of protected content is not allowed.",
          "Violation may result in legal action and account termination.",
        ],
      },
    ],
  },
  conduct: {
    title: "CODE_OF_CONDUCT",
    prompt: "root@iamkali:~/legal/conduct$",
    icon: BookOpen,
    sections: [
      {
        title: "[SECTION 1] OUR PLEDGE",
        content: [
          "We pledge to make iamKali a harassment-free experience for everyone.",
          "We welcome people of all backgrounds and skill levels.",
          "Respectful and professional conduct is expected at all times.",
          "We are committed to fostering an open and inclusive community.",
        ],
      },
      {
        title: "[SECTION 2] EXPECTED BEHAVIOR",
        content: [
          "Be respectful and considerate in all interactions.",
          "Use welcoming and inclusive language.",
          "Accept constructive criticism gracefully.",
          "Focus on what is best for the community.",
          "Show empathy towards other community members.",
        ],
      },
      {
        title: "[SECTION 3] UNACCEPTABLE BEHAVIOR",
        content: [
          "Harassment, intimidation, or discrimination of any kind.",
          "Trolling, insulting/derogatory comments, and personal attacks.",
          "Publishing others' private information without permission.",
          "Sexual language or imagery in public spaces.",
          "Any conduct that would be considered inappropriate in a professional setting.",
        ],
      },
      {
        title: "[SECTION 4] ETHICAL HACKING PRINCIPLES",
        content: [
          "Always obtain proper authorization before testing systems.",
          "Respect the privacy and property of others.",
          "Disclose vulnerabilities responsibly to affected parties.",
          "Do not use knowledge gained for malicious purposes.",
          "Follow all applicable laws and regulations.",
        ],
      },
      {
        title: "[SECTION 5] ENFORCEMENT",
        content: [
          "Community leaders have the right and responsibility to enforce this code.",
          "Violations may result in warnings, temporary bans, or permanent bans.",
          "All complaints will be reviewed and investigated promptly.",
          "We maintain confidentiality regarding the reporter of an incident.",
          "Appeals can be submitted to our moderation team.",
        ],
      },
    ],
  },
};

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = legalContent[type];
  const Icon = content.icon;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center p-4 bg-black/90 backdrop-blur-sm pt-10 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-black border-2 border-accent neon-border-accent overflow-hidden my-10"
          >
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none scanline-effect"></div>

            {/* Header */}
            <div className="relative border-b-2 border-accent bg-accent/5 p-4 sticky top-0 z-10 bg-black">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-accent" />
                  <span className="font-mono text-sm text-accent">
                    [{content.title}]
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 text-accent hover:bg-accent/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Terminal prompt */}
              <div className="flex items-center gap-2 font-mono text-xs">
                <Terminal className="w-3 h-3 text-accent" />
                <span className="text-accent">{content.prompt}</span>
                <span className="text-accent/60">cat document.txt</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-accent"
                >
                  █
                </motion.span>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6 space-y-8">
              {/* Header message */}
              <div className="border-l-2 border-accent/50 pl-4 space-y-1">
                <p className="font-mono text-xs text-accent">
                  [INFO] Loading legal document...
                </p>
                <p className="font-mono text-xs text-chart-3">
                  [SUCCESS] Document loaded successfully
                </p>
                <p className="font-mono text-xs text-chart-2/60">
                  [SYSTEM] Last modified: February 10, 2026
                </p>
              </div>

              {/* Sections */}
              {content.sections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-accent/50"></div>
                    <h3 className="font-mono text-sm text-accent">
                      {section.title}
                    </h3>
                    <div className="h-[2px] flex-1 bg-accent/20"></div>
                  </div>

                  <div className="border-l-2 border-accent/30 pl-4 space-y-2">
                    {section.content.map((line, lineIndex) => (
                      <motion.p
                        key={lineIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: sectionIndex * 0.1 + lineIndex * 0.05 }}
                        className="font-mono text-xs text-chart-2/80 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-accent/60 mt-0.5">›</span>
                        <span>{line}</span>
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Footer message */}
              <div className="border-l-2 border-accent/50 pl-4 pt-4 space-y-1">
                <p className="font-mono text-xs text-chart-2/60">
                  [EOF] End of document
                </p>
                <p className="font-mono text-xs text-accent/60">
                  [INFO] Press ESC or click outside to close
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="relative border-t-2 border-accent bg-accent/5 p-3 flex items-center justify-between sticky bottom-0 bg-black">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </motion.div>
                <span className="font-mono text-xs text-accent/70">
                  LEGAL_DOC.STATUS: ACTIVE
                </span>
              </div>
              <span className="font-mono text-xs text-accent/60">
                ESC TO EXIT
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
