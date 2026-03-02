export interface Video {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  videoUrl: string; // YouTube video ID or URL
  thumbnail: string;
  duration: string;
  views: string;
  likes: string;
  publishedDate: string;
  category: string;
  isPremium: boolean;
  tags: string[];
  relatedTopics: string[];
}

export const videos: Video[] = [
  {
    id: "1",
    slug: "advanced-sql-injection-techniques",
    title: "Advanced SQL Injection Techniques",
    description: "Deep dive into modern SQL injection methods and prevention strategies",
    longDescription: "In this comprehensive video, we explore advanced SQL injection techniques used by professional penetration testers. You'll learn about blind SQL injection, time-based attacks, union-based exploitation, and how to bypass common web application firewalls. We'll also cover detection methods and prevention strategies that developers should implement to protect their applications from these critical vulnerabilities.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "45:30",
    views: "12.5K",
    likes: "1.2K",
    publishedDate: "February 15, 2026",
    category: "HACKING",
    isPremium: true,
    tags: ["SQL Injection", "Web Security", "OWASP", "Database Security", "Penetration Testing"],
    relatedTopics: ["Web Application Security", "Database Exploitation", "WAF Bypass"],
  },
  {
    id: "2",
    slug: "linux-kernel-exploitation-101",
    title: "Linux Kernel Exploitation 101",
    description: "Understanding and exploiting kernel vulnerabilities in modern Linux systems",
    longDescription: "Dive deep into Linux kernel exploitation with this beginner-friendly guide. We'll explore kernel architecture, common vulnerability classes, and walk through real-world exploit development. Learn about privilege escalation, kernel debugging techniques, and how to analyze kernel crashes. This video provides the foundation needed to understand kernel-level security and exploitation techniques used in modern operating systems.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwZGFya3xlbnwxfHx8fDE3NzA3NTA4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "1:12:45",
    views: "8.3K",
    likes: "892",
    publishedDate: "February 10, 2026",
    category: "LINUX",
    isPremium: false,
    tags: ["Linux Kernel", "Exploitation", "Privilege Escalation", "System Security", "Low-Level"],
    relatedTopics: ["Operating System Security", "Exploit Development", "Kernel Debugging"],
  },
  {
    id: "3",
    slug: "network-penetration-testing",
    title: "Network Penetration Testing",
    description: "Complete guide to network scanning, enumeration and exploitation",
    longDescription: "Master network penetration testing with this comprehensive guide covering the entire attack lifecycle. From reconnaissance and scanning to exploitation and post-exploitation, you'll learn industry-standard methodologies. We cover tools like Nmap, Masscan, and custom scripts for network enumeration. Understand how to identify vulnerable services, exploit them, and maintain access while avoiding detection. Perfect for aspiring penetration testers and red team operators.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "58:20",
    views: "15.2K",
    likes: "1.5K",
    publishedDate: "February 8, 2026",
    category: "SECURITY",
    isPremium: true,
    tags: ["Network Security", "Penetration Testing", "Nmap", "Scanning", "Enumeration"],
    relatedTopics: ["Network Protocols", "Service Exploitation", "Post-Exploitation"],
  },
  {
    id: "4",
    slug: "bash-scripting-for-hackers",
    title: "Bash Scripting for Hackers",
    description: "Automate your hacking workflow with powerful bash scripts",
    longDescription: "Transform your hacking efficiency with automation through bash scripting. This video teaches you how to write powerful bash scripts for reconnaissance automation, custom tool development, and workflow optimization. Learn about loops, conditionals, functions, and how to parse command outputs. We'll build several practical scripts including a subdomain enumerator, port scanner wrapper, and vulnerability checker. Essential skills for every security professional.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "42:15",
    views: "9.7K",
    likes: "1.1K",
    publishedDate: "February 5, 2026",
    category: "LINUX",
    isPremium: false,
    tags: ["Bash Scripting", "Automation", "Linux", "Shell", "Tool Development"],
    relatedTopics: ["Command Line Mastery", "Script Automation", "Linux Administration"],
  },
  {
    id: "5",
    slug: "web-application-security",
    title: "Web Application Security",
    description: "Identifying and exploiting common web vulnerabilities",
    longDescription: "Explore the world of web application security testing with this detailed walkthrough. Cover the OWASP Top 10 vulnerabilities including XSS, CSRF, broken authentication, and insecure deserialization. Learn to use Burp Suite professionally, understand HTTP protocol intricacies, and develop a methodology for comprehensive web app assessments. Includes hands-on demonstrations of finding and exploiting vulnerabilities in real-world scenarios.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "1:05:30",
    views: "11.4K",
    likes: "1.3K",
    publishedDate: "February 1, 2026",
    category: "HACKING",
    isPremium: true,
    tags: ["Web Security", "OWASP", "XSS", "CSRF", "Burp Suite"],
    relatedTopics: ["Application Security", "Bug Bounty", "Vulnerability Assessment"],
  },
  {
    id: "6",
    slug: "reverse-engineering-malware",
    title: "Reverse Engineering Malware",
    description: "Analyzing malicious software using industry-standard tools",
    longDescription: "Learn the art and science of malware reverse engineering. This advanced tutorial covers static and dynamic analysis techniques, using tools like IDA Pro, Ghidra, and x64dbg. Understand malware behavior patterns, anti-analysis techniques, and how to extract indicators of compromise. We'll analyze real malware samples (in a safe environment) and learn to write YARA rules for detection. Essential for malware analysts and threat researchers.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwZGFya3xlbnwxfHx8fDE3NzA3NTA4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "1:25:10",
    views: "6.8K",
    likes: "785",
    publishedDate: "January 28, 2026",
    category: "SECURITY",
    isPremium: true,
    tags: ["Reverse Engineering", "Malware Analysis", "IDA Pro", "Ghidra", "Threat Intelligence"],
    relatedTopics: ["Binary Analysis", "Threat Hunting", "Forensics"],
  },
  {
    id: "7",
    slug: "active-directory-pentesting",
    title: "Active Directory Pentesting",
    description: "Complete guide to attacking Windows domain environments",
    longDescription: "Master Active Directory penetration testing with this comprehensive guide. Learn enumeration techniques, Kerberos attacks (Kerberoasting, AS-REP Roasting), credential dumping, and lateral movement strategies. Understand how to abuse trust relationships, exploit misconfigurations, and achieve domain dominance. Includes demonstrations with BloodHound, Mimikatz, and other essential tools for AD security assessments.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "1:38:45",
    views: "14.8K",
    likes: "1.7K",
    publishedDate: "January 25, 2026",
    category: "HACKING",
    isPremium: true,
    tags: ["Active Directory", "Windows Security", "Kerberos", "BloodHound", "Domain Exploitation"],
    relatedTopics: ["Windows Pentesting", "Lateral Movement", "Privilege Escalation"],
  },
  {
    id: "8",
    slug: "python-for-security-automation",
    title: "Python for Security Automation",
    description: "Build custom security tools and automate pentesting workflows",
    longDescription: "Supercharge your security testing with Python automation. Learn to build custom reconnaissance tools, vulnerability scanners, and exploit frameworks. Cover essential libraries like requests, scapy, and paramiko. We'll create practical tools including a web scraper for OSINT, a multi-threaded port scanner, and a custom exploit delivery system. Perfect for security professionals who want to level up their Python skills.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "52:30",
    views: "10.2K",
    likes: "1.1K",
    publishedDate: "January 20, 2026",
    category: "PROGRAMMING",
    isPremium: false,
    tags: ["Python", "Automation", "Security Tools", "Scripting", "Development"],
    relatedTopics: ["Tool Development", "Security Programming", "Pentesting Automation"],
  },
];

// Helper function to get video by slug
export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find(video => video.slug === slug);
}

// Helper function to get related videos
export function getRelatedVideos(currentVideoId: string, limit: number = 4): Video[] {
  const currentVideo = videos.find(v => v.id === currentVideoId);
  if (!currentVideo) return [];
  
  return videos
    .filter(v => v.id !== currentVideoId && v.category === currentVideo.category)
    .slice(0, limit);
}
