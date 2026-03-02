export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  videoUrl: string; // YouTube video ID or URL - main tutorial video
  thumbnail: string;
  icon: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  duration: string;
  views: string;
  likes: string;
  publishedDate: string;
  articles: number;
  category: string;
  topics: string[];
  whatYouWillLearn: string[];
  prerequisites: string[];
  keyTakeaways: string[];
}

export const tutorials: Tutorial[] = [
  {
    id: "1",
    slug: "linux-fundamentals",
    title: "Linux Fundamentals",
    description: "Essential Linux commands, file systems, and shell scripting basics",
    longDescription: "Master the fundamentals of Linux with this comprehensive tutorial series. Learn essential command-line operations, file system navigation, user management, and basic shell scripting. Perfect for beginners starting their journey in cybersecurity or system administration. We cover everything from basic commands to intermediate concepts that form the foundation of Linux expertise.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwZGFya3xlbnwxfHx8fDE3NzA3NTA4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "terminal",
    difficulty: "BEGINNER",
    duration: "48:20",
    views: "25.4K",
    likes: "2.3K",
    publishedDate: "January 15, 2026",
    articles: 45,
    category: "LINUX",
    topics: ["Command Line", "File Systems", "Shell Scripting", "User Management", "Package Management"],
    whatYouWillLearn: [
      "Navigate Linux file system with confidence",
      "Master essential command-line tools and utilities",
      "Understand Linux file permissions and ownership",
      "Write basic shell scripts for automation",
      "Manage users, groups, and system resources",
      "Install and manage software packages",
      "Use text editors like vim and nano efficiently",
      "Understand process management and system monitoring",
    ],
    prerequisites: [
      "Basic computer literacy",
      "Access to a Linux system or virtual machine",
      "Willingness to learn command line interface",
    ],
    keyTakeaways: [
      "Solid foundation in Linux command line operations",
      "Ability to navigate and manipulate file systems",
      "Understanding of basic system administration tasks",
      "Skills to write simple automation scripts",
    ],
  },
  {
    id: "2",
    slug: "network-security",
    title: "Network Security",
    description: "Understanding network protocols, firewalls, and intrusion detection",
    longDescription: "Dive deep into network security fundamentals with this intermediate tutorial. Explore TCP/IP protocols, network architecture, firewall technologies, and intrusion detection systems. Learn how to analyze network traffic, identify security threats, and implement defensive measures. Essential knowledge for anyone pursuing a career in cybersecurity or network administration.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "network",
    difficulty: "INTERMEDIATE",
    duration: "1:05:15",
    views: "18.7K",
    likes: "1.8K",
    publishedDate: "January 18, 2026",
    articles: 38,
    category: "SECURITY",
    topics: ["TCP/IP", "Firewalls", "IDS/IPS", "Network Protocols", "Packet Analysis", "VPN"],
    whatYouWillLearn: [
      "Understand core network protocols and their vulnerabilities",
      "Analyze network traffic using Wireshark",
      "Configure firewalls and access control lists",
      "Implement intrusion detection systems",
      "Identify common network-based attacks",
      "Design secure network architectures",
      "Use VPNs and encryption for network security",
      "Monitor and respond to network security incidents",
    ],
    prerequisites: [
      "Basic networking knowledge",
      "Understanding of OSI model",
      "Familiarity with command line tools",
    ],
    keyTakeaways: [
      "Deep understanding of network security principles",
      "Ability to analyze and secure network infrastructure",
      "Skills to detect and respond to network threats",
      "Knowledge of industry-standard security tools",
    ],
  },
  {
    id: "3",
    slug: "cryptography",
    title: "Cryptography",
    description: "Modern encryption methods, hashing algorithms, and secure communications",
    longDescription: "Explore the fascinating world of cryptography in this advanced tutorial. Understand symmetric and asymmetric encryption, hashing algorithms, digital signatures, and PKI infrastructure. Learn how cryptographic systems work, their real-world applications, and common implementation vulnerabilities. This tutorial provides both theoretical knowledge and practical insights into modern cryptographic systems.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "shield",
    difficulty: "ADVANCED",
    duration: "1:22:40",
    views: "12.3K",
    likes: "1.4K",
    publishedDate: "January 22, 2026",
    articles: 29,
    category: "SECURITY",
    topics: ["Encryption", "Hashing", "PKI", "Digital Signatures", "SSL/TLS", "Cryptanalysis"],
    whatYouWillLearn: [
      "Master symmetric and asymmetric encryption algorithms",
      "Understand cryptographic hashing and its applications",
      "Implement secure communication protocols",
      "Work with digital certificates and PKI",
      "Identify and exploit cryptographic vulnerabilities",
      "Analyze SSL/TLS implementations",
      "Understand blockchain cryptography basics",
      "Apply cryptography in real-world scenarios",
    ],
    prerequisites: [
      "Strong understanding of computer science fundamentals",
      "Basic programming knowledge",
      "Understanding of network protocols",
      "Mathematical aptitude recommended",
    ],
    keyTakeaways: [
      "Comprehensive understanding of modern cryptography",
      "Ability to implement secure cryptographic systems",
      "Skills to audit and test cryptographic implementations",
      "Knowledge of cryptographic best practices",
    ],
  },
  {
    id: "4",
    slug: "python-for-security",
    title: "Python for Security",
    description: "Building security tools and automation scripts with Python",
    longDescription: "Learn Python programming specifically for cybersecurity applications. This beginner-friendly tutorial covers Python fundamentals and quickly moves into security-specific applications. Build your own security tools, automate reconnaissance tasks, and develop exploit scripts. No prior programming experience required - we start from the basics and progress to practical security tool development.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "code",
    difficulty: "BEGINNER",
    duration: "56:30",
    views: "32.1K",
    likes: "3.1K",
    publishedDate: "January 12, 2026",
    articles: 52,
    category: "PROGRAMMING",
    topics: ["Python Basics", "Security Scripting", "Tool Development", "Automation", "Network Programming"],
    whatYouWillLearn: [
      "Master Python programming fundamentals",
      "Build custom security reconnaissance tools",
      "Automate repetitive security tasks",
      "Work with network sockets and protocols",
      "Parse and manipulate log files",
      "Interact with web applications programmatically",
      "Develop exploit proof-of-concepts",
      "Use popular security Python libraries",
    ],
    prerequisites: [
      "Basic computer skills",
      "No programming experience required",
      "Python installed on your system",
    ],
    keyTakeaways: [
      "Solid Python programming foundation",
      "Ability to create custom security tools",
      "Skills to automate security workflows",
      "Understanding of Python for cybersecurity",
    ],
  },
  {
    id: "5",
    slug: "database-security",
    title: "Database Security",
    description: "Securing databases and preventing SQL injection attacks",
    longDescription: "Master database security with this intermediate tutorial covering SQL injection prevention, database hardening, and secure database design. Learn both offensive and defensive perspectives - how to find and exploit database vulnerabilities, and how to properly secure database systems. Covers MySQL, PostgreSQL, and MongoDB security best practices.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "database",
    difficulty: "INTERMEDIATE",
    duration: "1:12:25",
    views: "15.9K",
    likes: "1.6K",
    publishedDate: "January 8, 2026",
    articles: 34,
    category: "SECURITY",
    topics: ["SQL Injection", "Database Hardening", "Access Control", "Encryption", "Backup Security"],
    whatYouWillLearn: [
      "Identify and exploit SQL injection vulnerabilities",
      "Implement parameterized queries and prepared statements",
      "Configure secure database access controls",
      "Encrypt sensitive data at rest and in transit",
      "Audit database security configurations",
      "Implement secure backup and recovery procedures",
      "Monitor database activity for security threats",
      "Apply principle of least privilege to database access",
    ],
    prerequisites: [
      "Basic SQL knowledge",
      "Understanding of web applications",
      "Familiarity with database concepts",
    ],
    keyTakeaways: [
      "Comprehensive database security knowledge",
      "Ability to secure enterprise database systems",
      "Skills to test database vulnerabilities",
      "Understanding of database security best practices",
    ],
  },
  {
    id: "6",
    slug: "system-architecture",
    title: "System Architecture",
    description: "Understanding modern computing architectures and low-level systems",
    longDescription: "Explore computer system architecture from a security perspective in this advanced tutorial. Understand CPU architecture, memory management, operating system internals, and how these systems can be exploited. Learn about buffer overflows, return-oriented programming, and modern exploit mitigation techniques. Essential for anyone interested in exploit development or low-level security research.",
    videoUrl: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwZGFya3xlbnwxfHx8fDE3NzA3NTA4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "cpu",
    difficulty: "ADVANCED",
    duration: "1:35:50",
    views: "9.8K",
    likes: "1.1K",
    publishedDate: "January 5, 2026",
    articles: 41,
    category: "SECURITY",
    topics: ["CPU Architecture", "Memory Management", "OS Internals", "Exploit Development", "Assembly"],
    whatYouWillLearn: [
      "Understand x86/x64 CPU architecture",
      "Master memory management and virtual memory",
      "Learn assembly language basics",
      "Analyze buffer overflow vulnerabilities",
      "Understand stack and heap exploitation",
      "Explore modern exploit mitigation techniques",
      "Debug programs at the assembly level",
      "Develop low-level security exploits",
    ],
    prerequisites: [
      "Strong programming background",
      "Understanding of C programming",
      "Basic operating systems knowledge",
      "Comfortable with low-level concepts",
    ],
    keyTakeaways: [
      "Deep understanding of system architecture",
      "Ability to analyze and exploit low-level vulnerabilities",
      "Skills in assembly language and debugging",
      "Knowledge of exploit mitigation bypasses",
    ],
  },
];

// Helper function to get tutorial by slug
export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find(tutorial => tutorial.slug === slug);
}

// Helper function to get related tutorials
export function getRelatedTutorials(currentTutorialId: string, limit: number = 3): Tutorial[] {
  const currentTutorial = tutorials.find(t => t.id === currentTutorialId);
  if (!currentTutorial) return [];
  
  return tutorials
    .filter(t => t.id !== currentTutorialId && (t.category === currentTutorial.category || t.difficulty === currentTutorial.difficulty))
    .slice(0, limit);
}
