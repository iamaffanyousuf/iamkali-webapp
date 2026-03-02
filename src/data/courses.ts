export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  videoUrl: string; // YouTube video ID or URL
  thumbnail: string;
  duration: string; // e.g., "2h 45m"
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  views: string;
  rating: number;
  studentsEnrolled: string;
  lastUpdated: string;
  instructor: {
    name: string;
    title: string;
    avatar: string;
  };
  topics: string[];
  requirements: string[];
  whatYouWillLearn: string[];
  modules: {
    id: number;
    title: string;
    lessons: number;
    duration: string;
  }[];
  isPremium: boolean;
  category: string;
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "complete-ethical-hacking-bootcamp",
    title: "Complete Ethical Hacking Bootcamp",
    description: "Master the art of ethical hacking with hands-on labs covering reconnaissance, exploitation, post-exploitation, and reporting",
    longDescription: "Dive deep into the world of ethical hacking and cybersecurity. This comprehensive bootcamp covers everything from basic reconnaissance to advanced exploitation techniques. You'll learn industry-standard tools, methodologies, and best practices used by professional penetration testers. Through hands-on labs and real-world scenarios, you'll gain practical experience that's immediately applicable to security assessments and bug bounty hunting.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "24h 30m",
    level: "INTERMEDIATE",
    views: "45.2K",
    rating: 4.8,
    studentsEnrolled: "2,450",
    lastUpdated: "February 2026",
    instructor: {
      name: "D3vilsKing",
      title: "Senior Security Researcher",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    },
    topics: ["Penetration Testing", "Network Security", "Web Exploitation", "Linux", "Metasploit"],
    requirements: [
      "Basic understanding of networking concepts",
      "Familiarity with command line interface",
      "A computer with at least 8GB RAM for running virtual machines",
      "Willingness to learn and practice ethical hacking",
    ],
    whatYouWillLearn: [
      "Perform comprehensive reconnaissance and information gathering",
      "Identify and exploit common web application vulnerabilities",
      "Master network scanning and enumeration techniques",
      "Use industry-standard tools like Nmap, Burp Suite, and Metasploit",
      "Understand post-exploitation and privilege escalation",
      "Write professional penetration testing reports",
      "Implement security best practices and defenses",
      "Navigate Active Directory environments",
    ],
    modules: [
      { id: 1, title: "Introduction to Ethical Hacking", lessons: 8, duration: "1h 20m" },
      { id: 2, title: "Reconnaissance & OSINT", lessons: 12, duration: "2h 15m" },
      { id: 3, title: "Network Scanning & Enumeration", lessons: 10, duration: "1h 45m" },
      { id: 4, title: "Web Application Security", lessons: 15, duration: "3h 30m" },
      { id: 5, title: "System Exploitation", lessons: 14, duration: "3h 10m" },
      { id: 6, title: "Post-Exploitation", lessons: 11, duration: "2h 25m" },
    ],
    isPremium: true,
    category: "HACKING",
  },
  {
    id: "2",
    slug: "linux-system-administration-pro",
    title: "Linux System Administration Pro",
    description: "Become a Linux expert with comprehensive training on system management, security hardening, and automation",
    longDescription: "Transform yourself into a Linux system administration professional with this in-depth course. From basic system operations to advanced security configurations, you'll master everything needed to manage enterprise Linux environments. Learn automation with shell scripting, implement robust security measures, and understand system architecture at a deep level. Perfect for aspiring sysadmins and security professionals.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwZGFya3xlbnwxfHx8fDE3NzA3NTA4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "18h 45m",
    level: "BEGINNER",
    views: "52.8K",
    rating: 4.9,
    studentsEnrolled: "3,120",
    lastUpdated: "January 2026",
    instructor: {
      name: "D3vilsKing",
      title: "Linux Infrastructure Specialist",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    },
    topics: ["Linux Administration", "Shell Scripting", "System Security", "Automation", "Networking"],
    requirements: [
      "Basic computer literacy",
      "Access to a Linux machine or virtual machine",
      "Willingness to work with command line",
      "No prior Linux experience required",
    ],
    whatYouWillLearn: [
      "Navigate and manage Linux file systems efficiently",
      "Understand and configure user permissions and access control",
      "Write powerful bash scripts for automation",
      "Implement security hardening and best practices",
      "Configure and manage network services",
      "Monitor system performance and troubleshoot issues",
      "Set up and maintain web servers and databases",
      "Master package management and system updates",
    ],
    modules: [
      { id: 1, title: "Linux Fundamentals", lessons: 10, duration: "2h 00m" },
      { id: 2, title: "File System & Permissions", lessons: 8, duration: "1h 30m" },
      { id: 3, title: "Shell Scripting Mastery", lessons: 12, duration: "2h 45m" },
      { id: 4, title: "System Security", lessons: 9, duration: "2h 10m" },
      { id: 5, title: "Network Configuration", lessons: 11, duration: "2h 30m" },
      { id: 6, title: "Server Management", lessons: 13, duration: "3h 00m" },
    ],
    isPremium: false,
    category: "LINUX",
  },
  {
    id: "3",
    slug: "advanced-penetration-testing",
    title: "Advanced Penetration Testing",
    description: "Elite-level pentesting techniques including Active Directory attacks, exploit development, and red team operations",
    longDescription: "Take your penetration testing skills to the elite level with this advanced course. Dive into complex topics like Active Directory exploitation, custom exploit development, advanced persistence techniques, and red team operations. Learn to think like an adversary and bypass modern security controls. This course is designed for experienced security professionals looking to level up their offensive security capabilities.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "32h 15m",
    level: "ADVANCED",
    views: "28.5K",
    rating: 4.9,
    studentsEnrolled: "1,890",
    lastUpdated: "February 2026",
    instructor: {
      name: "D3vilsKing",
      title: "Red Team Operator",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    },
    topics: ["Advanced Pentesting", "Active Directory", "Exploit Development", "Red Teaming", "Bypass Techniques"],
    requirements: [
      "Solid understanding of penetration testing fundamentals",
      "Experience with common pentesting tools and frameworks",
      "Programming knowledge (Python, C, or similar)",
      "Understanding of Windows and Linux internals",
      "Prior experience in offensive security recommended",
    ],
    whatYouWillLearn: [
      "Master Active Directory attack techniques and post-exploitation",
      "Develop custom exploits and shellcode",
      "Bypass modern security controls and EDR solutions",
      "Implement advanced persistence mechanisms",
      "Conduct red team operations and adversary simulations",
      "Understand advanced network pivoting and lateral movement",
      "Exploit kernel vulnerabilities in Windows and Linux",
      "Perform advanced web application attacks",
    ],
    modules: [
      { id: 1, title: "Advanced Reconnaissance", lessons: 9, duration: "2h 30m" },
      { id: 2, title: "Active Directory Attacks", lessons: 16, duration: "4h 45m" },
      { id: 3, title: "Exploit Development", lessons: 18, duration: "5h 20m" },
      { id: 4, title: "Evasion & Bypass Techniques", lessons: 14, duration: "3h 50m" },
      { id: 5, title: "Advanced Persistence", lessons: 12, duration: "3h 30m" },
      { id: 6, title: "Red Team Operations", lessons: 15, duration: "4h 10m" },
    ],
    isPremium: true,
    category: "SECURITY",
  },
  {
    id: "4",
    slug: "bug-bounty-hunter-masterclass",
    title: "Bug Bounty Hunter Masterclass",
    description: "Learn to find and exploit web vulnerabilities to earn through bug bounty programs",
    longDescription: "Start your journey in bug bounty hunting with this practical masterclass. Learn the methodologies, tools, and techniques used by successful bug bounty hunters to find high-impact vulnerabilities. From reconnaissance to exploitation and report writing, you'll gain the skills needed to earn through programs like HackerOne, Bugcrowd, and Synack. Includes real-world case studies and hands-on practice.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "20h 50m",
    level: "INTERMEDIATE",
    views: "38.9K",
    rating: 4.7,
    studentsEnrolled: "2,760",
    lastUpdated: "January 2026",
    instructor: {
      name: "D3vilsKing",
      title: "Bug Bounty Hunter",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    },
    topics: ["Bug Bounty", "Web Security", "Vulnerability Research", "OWASP", "Burp Suite"],
    requirements: [
      "Basic understanding of web technologies (HTML, JavaScript)",
      "Familiarity with HTTP protocol",
      "Basic command line knowledge",
      "Interest in web security and vulnerability research",
    ],
    whatYouWillLearn: [
      "Identify and exploit OWASP Top 10 vulnerabilities",
      "Master reconnaissance and subdomain enumeration",
      "Use Burp Suite like a professional bug bounty hunter",
      "Find authentication and authorization flaws",
      "Discover business logic vulnerabilities",
      "Write high-quality vulnerability reports",
      "Understand bug bounty program rules and etiquette",
      "Develop a systematic approach to vulnerability research",
    ],
    modules: [
      { id: 1, title: "Bug Bounty Introduction", lessons: 7, duration: "1h 40m" },
      { id: 2, title: "Reconnaissance Techniques", lessons: 11, duration: "2h 50m" },
      { id: 3, title: "OWASP Top 10 Deep Dive", lessons: 15, duration: "4h 20m" },
      { id: 4, title: "Advanced Web Vulnerabilities", lessons: 13, duration: "3h 40m" },
      { id: 5, title: "Automation & Tools", lessons: 9, duration: "2h 30m" },
      { id: 6, title: "Reporting & Success", lessons: 8, duration: "2h 10m" },
    ],
    isPremium: false,
    category: "HACKING",
  },
  {
    id: "5",
    slug: "python-for-cybersecurity",
    title: "Python for Cybersecurity",
    description: "Build powerful security tools and automation scripts with Python from scratch",
    longDescription: "Master Python programming specifically for cybersecurity applications. Learn to build custom security tools, automate repetitive tasks, analyze network traffic, and develop exploits. From web scraping for reconnaissance to creating your own port scanner, you'll gain practical Python skills that directly apply to security work. Perfect for security professionals who want to enhance their technical capabilities.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "16h 20m",
    level: "BEGINNER",
    views: "41.3K",
    rating: 4.8,
    studentsEnrolled: "3,890",
    lastUpdated: "February 2026",
    instructor: {
      name: "D3vilsKing",
      title: "Security Developer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    },
    topics: ["Python Programming", "Security Tools", "Automation", "Network Analysis", "Exploit Development"],
    requirements: [
      "Basic programming concepts understanding",
      "No prior Python experience required",
      "Computer with Python installed (installation guide included)",
      "Enthusiasm for learning programming",
    ],
    whatYouWillLearn: [
      "Master Python fundamentals and advanced concepts",
      "Build custom security tools from scratch",
      "Automate reconnaissance and vulnerability scanning",
      "Analyze network packets and protocols",
      "Interact with web applications programmatically",
      "Parse and manipulate log files",
      "Create payloads and exploit scripts",
      "Work with common security libraries and APIs",
    ],
    modules: [
      { id: 1, title: "Python Fundamentals", lessons: 12, duration: "2h 30m" },
      { id: 2, title: "Network Programming", lessons: 10, duration: "2h 40m" },
      { id: 3, title: "Web Scraping & APIs", lessons: 9, duration: "2h 15m" },
      { id: 4, title: "Building Security Tools", lessons: 14, duration: "3h 50m" },
      { id: 5, title: "Automation Scripts", lessons: 11, duration: "2h 45m" },
      { id: 6, title: "Advanced Projects", lessons: 8, duration: "2h 20m" },
    ],
    isPremium: false,
    category: "PROGRAMMING",
  },
  {
    id: "6",
    slug: "red-team-operations",
    title: "Red Team Operations",
    description: "Comprehensive red team tactics, techniques, and procedures for adversary simulation",
    longDescription: "Learn the art and science of red team operations. This advanced course covers the complete red team lifecycle from initial access to long-term persistence, while remaining undetected. Study real-world APT techniques, advanced C2 frameworks, and sophisticated evasion methods. Perfect for security professionals transitioning into offensive security roles or experienced pentesters looking to master red team operations.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "28h 10m",
    level: "ADVANCED",
    views: "19.7K",
    rating: 4.9,
    studentsEnrolled: "1,450",
    lastUpdated: "January 2026",
    instructor: {
      name: "D3vilsKing",
      title: "Senior Red Team Lead",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    },
    topics: ["Red Teaming", "C2 Frameworks", "Evasion", "Persistence", "APT Tactics"],
    requirements: [
      "Strong penetration testing background",
      "Understanding of Windows and Linux internals",
      "Network security knowledge",
      "Programming experience in at least one language",
      "Active Directory knowledge recommended",
    ],
    whatYouWillLearn: [
      "Plan and execute full red team engagements",
      "Set up and operate Command & Control infrastructure",
      "Implement advanced evasion and anti-forensics techniques",
      "Establish and maintain long-term persistence",
      "Emulate APT groups and their tactics",
      "Perform covert lateral movement",
      "Exfiltrate data without detection",
      "Write comprehensive red team reports",
    ],
    modules: [
      { id: 1, title: "Red Team Fundamentals", lessons: 8, duration: "2h 20m" },
      { id: 2, title: "Infrastructure Setup", lessons: 10, duration: "3h 10m" },
      { id: 3, title: "Initial Access Techniques", lessons: 12, duration: "3h 40m" },
      { id: 4, title: "C2 Operations", lessons: 14, duration: "4h 30m" },
      { id: 5, title: "Evasion & Persistence", lessons: 13, duration: "4h 00m" },
      { id: 6, title: "Advanced Operations", lessons: 11, duration: "3h 20m" },
    ],
    isPremium: true,
    category: "SECURITY",
  },
];

// Helper function to get course by slug
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

// Helper function to get related courses
export function getRelatedCourses(currentCourseId: string, limit: number = 3): Course[] {
  const currentCourse = courses.find(c => c.id === currentCourseId);
  if (!currentCourse) return [];
  
  return courses
    .filter(c => c.id !== currentCourseId && (c.category === currentCourse.category || c.level === currentCourse.level))
    .slice(0, limit);
}
