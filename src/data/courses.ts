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
  }
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
