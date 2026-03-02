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
  }
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
