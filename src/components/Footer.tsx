import { Terminal, Github, Twitter, Youtube, Mail, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { LegalModal } from "./LegalModal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ];

  const footerLinks = [
    {
      title: "RESOURCES",
      links: ["Videos", "Courses", "Tutorials", "Blog"]
    },
    {
      title: "COMMUNITY",
      links: ["Discord", "Forum", "Events", "Contributors"]
    },
    {
      title: "LEGAL",
      links: ["Terms", "Privacy", "License", "Conduct"]
    }
  ];

  const [isLegalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"terms" | "privacy" | "license" | "conduct">("terms");

  const handleLinkClick = (link: string, section: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Only open modal for legal links
    if (section === "LEGAL") {
      const linkLower = link.toLowerCase() as "terms" | "privacy" | "license" | "conduct";
      setLegalModalType(linkLower);
      setLegalModalOpen(true);
    }
  };

  return (
    <footer className="relative border-t border-chart-2/40 bg-gradient-to-b from-background to-card/80 backdrop-blur-xl overflow-hidden">
      {/* Top decorative scan line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-chart-2/80 through-accent/60 to-transparent"></div>
      
      {/* Circuit-like linings background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {/* Horizontal lines */}
        <div className="absolute top-20 left-0 w-1/3 h-[1px] bg-gradient-to-r from-chart-2/0 via-chart-2 to-chart-2/0"></div>
        <div className="absolute top-32 right-0 w-1/4 h-[1px] bg-gradient-to-l from-chart-2/0 via-chart-2 to-chart-2/0"></div>
        <div className="absolute top-48 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-chart-2/0 via-chart-2 to-chart-2/0"></div>
        
        {/* Vertical lines */}
        <div className="absolute top-0 left-1/4 w-[1px] h-48 bg-gradient-to-b from-chart-2/0 via-chart-2 to-chart-2/0"></div>
        <div className="absolute top-0 right-1/3 w-[1px] h-32 bg-gradient-to-b from-chart-2/0 via-chart-2 to-chart-2/0"></div>
        
        {/* Circuit nodes */}
        <div className="absolute top-20 left-1/4 w-2 h-2 border border-chart-2 bg-background rotate-45"></div>
        <div className="absolute top-32 right-1/3 w-2 h-2 border border-chart-2 bg-background rotate-45"></div>
        <div className="absolute top-48 left-1/2 w-2 h-2 border border-chart-2 bg-background rotate-45"></div>
        
        {/* Corner circuits */}
        <svg className="absolute top-10 right-10 w-24 h-24" viewBox="0 0 100 100">
          <path d="M0,50 L30,50 L30,20 M30,50 L50,50 L50,80 M50,50 L80,50 L80,20 M80,50 L100,50" 
                stroke="currentColor" strokeWidth="0.5" fill="none" className="text-chart-2"/>
          <circle cx="30" cy="50" r="2" fill="currentColor" className="text-chart-2"/>
          <circle cx="50" cy="50" r="2" fill="currentColor" className="text-chart-2"/>
          <circle cx="80" cy="50" r="2" fill="currentColor" className="text-chart-2"/>
        </svg>
        
        <svg className="absolute bottom-20 left-10 w-20 h-20" viewBox="0 0 100 100">
          <path d="M20,0 L20,40 L50,40 M50,40 L50,70 L80,70 M50,40 L80,40" 
                stroke="currentColor" strokeWidth="0.5" fill="none" className="text-chart-2"/>
          <circle cx="20" cy="40" r="2" fill="currentColor" className="text-chart-2"/>
          <circle cx="50" cy="40" r="2" fill="currentColor" className="text-chart-2"/>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Terminal-style header */}
        <div className="flex items-center gap-3 mb-12 pb-6 border-b border-chart-2/40">
          <div className="flex items-center font-mono text-sm">
            <span className="text-chart-2">➜</span>
          </div>
          <span className="font-mono text-sm text-chart-2/90">root@iamkali:~$</span>
          <span className="font-mono text-sm text-chart-2/70">./footer --info</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand - Minimal & Hacker styled */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-3 border border-chart-2/50 px-4 py-2 bg-card/50">
              <Terminal className="w-5 h-5 text-chart-2" />
              <span className="font-mono text-lg text-chart-2">iamKali</span>
              <Lock className="w-3 h-3 text-chart-2/70 ml-auto" />
            </div>
            
            <p className="font-mono text-xs text-chart-2/70 max-w-md leading-relaxed border-l-2 border-chart-2/40 pl-4">
              # Elite cybersecurity education<br />
              # Advanced hacking & Linux mastery<br />
              # Status: [ENCRYPTED_TRANSMISSION]
            </p>
            
            <div className="flex items-center gap-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 border border-chart-2/40 hover:border-chart-2/70 hover:bg-chart-2/10 transition-all"
                  aria-label={social.label}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <social.icon className="w-4 h-4 text-chart-2/90 hover:text-chart-2" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links - Minimal terminal style */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-mono text-xs text-chart-2 uppercase tracking-widest flex items-center gap-2">
                <span className="text-chart-2/70">&gt;</span>
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => handleLinkClick(link, section.title, e)}
                      className="font-mono text-xs text-chart-2/60 hover:text-chart-2 transition-all inline-flex items-center gap-2 group"
                    >
                      <span className="text-chart-2/40 group-hover:text-chart-2/80">$</span>
                      <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom - Ultra minimal */}
        <div className="pt-8 border-t border-chart-2/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 font-mono text-xs text-chart-2/60">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-chart-2 rounded-full animate-pulse"></span>
                NODE STATUS: STABLE
              </span>
              <span className="hidden md:inline text-chart-2/40">|</span>
              <span>© {currentYear} iamKali</span>
            </div>
            
            <div className="font-mono text-xs text-chart-2/50">
              <span className="inline-flex items-center gap-2">
                <span className="text-chart-2/60">&gt;_</span>
                SECURE_CONNECTION
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 border-l border-t border-chart-2/30 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 font-mono text-[8px] text-chart-2/50">EOF</div>
      
      {/* Legal Modal */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        type={legalModalType}
      />
    </footer>
  );
}