import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { VideoGrid } from "../components/VideoGrid";
import { CoursesSection } from "../components/CoursesSection";
import { TutorialsSection } from "../components/TutorialsSection";
import { Footer } from "../components/Footer";
import React from "react";

// Mock data - will be replaced with Supabase data
const mockVideos = [
  {
    id: 1,
    title: "Advanced SQL Injection Techniques",
    description: "Deep dive into modern SQL injection methods and prevention strategies",
    duration: "45:30",
    views: "12.5K",
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "HACKING",
    isPremium: true,
  },
  {
    id: 2,
    title: "Linux Kernel Exploitation 101",
    description: "Understanding and exploiting kernel vulnerabilities in modern Linux systems",
    duration: "1:12:45",
    views: "8.3K",
    thumbnail: "https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwZGFya3xlbnwxfHx8fDE3NzA3NTA4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "LINUX",
    isPremium: false,
  },
  {
    id: 3,
    title: "Network Penetration Testing",
    description: "Complete guide to network scanning, enumeration and exploitation",
    duration: "58:20",
    views: "15.2K",
    thumbnail: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "SECURITY",
    isPremium: true,
  },
  {
    id: 4,
    title: "Bash Scripting for Hackers",
    description: "Automate your hacking workflow with powerful bash scripts",
    duration: "42:15",
    views: "9.7K",
    thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZXxlbnwxfHx8fDE3NzA3NDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "LINUX",
    isPremium: false,
  },
  {
    id: 5,
    title: "Web Application Security",
    description: "Identifying and exploiting common web vulnerabilities",
    duration: "1:05:30",
    views: "11.4K",
    thumbnail: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "HACKING",
    isPremium: true,
  },
  {
    id: 6,
    title: "Reverse Engineering Malware",
    description: "Analyzing malicious software using industry-standard tools",
    duration: "1:25:10",
    views: "6.8K",
    thumbnail: "https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwZGFya3xlbnwxfHx8fDE3NzA3NTA4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "SECURITY",
    isPremium: true,
  },
];

const mockCourses = [
  {
    id: 1,
    title: "Complete Ethical Hacking Bootcamp",
    description: "Master the art of ethical hacking with hands-on labs covering reconnaissance, exploitation, post-exploitation, and reporting",
    level: "INTERMEDIATE",
    students: "2,450",
    modules: 24,
    price: "$149",
  },
  {
    id: 2,
    title: "Linux System Administration Pro",
    description: "Become a Linux expert with comprehensive training on system management, security hardening, and automation",
    level: "BEGINNER",
    students: "3,120",
    modules: 18,
    price: "$99",
  },
  {
    id: 3,
    title: "Advanced Penetration Testing",
    description: "Elite-level pentesting techniques including Active Directory attacks, exploit development, and red team operations",
    level: "ADVANCED",
    students: "1,890",
    modules: 32,
    price: "$249",
  },
  {
    id: 4,
    title: "Bug Bounty Hunter Masterclass",
    description: "Learn to find and exploit web vulnerabilities to earn through bug bounty programs",
    level: "INTERMEDIATE",
    students: "2,760",
    modules: 20,
    price: "$129",
  },
];

const mockTutorials = [
  {
    id: 1,
    title: "Linux Fundamentals",
    description: "Essential Linux commands, file systems, and shell scripting basics",
    icon: "terminal",
    articles: 45,
    difficulty: "BEGINNER",
  },
  {
    id: 2,
    title: "Network Security",
    description: "Understanding network protocols, firewalls, and intrusion detection",
    icon: "network",
    articles: 38,
    difficulty: "INTERMEDIATE",
  },
  {
    id: 3,
    title: "Cryptography",
    description: "Modern encryption methods, hashing algorithms, and secure communications",
    icon: "shield",
    articles: 29,
    difficulty: "ADVANCED",
  },
  {
    id: 4,
    title: "Python for Security",
    description: "Building security tools and automation scripts with Python",
    icon: "code",
    articles: 52,
    difficulty: "BEGINNER",
  },
  {
    id: 5,
    title: "Database Security",
    description: "Securing databases and preventing SQL injection attacks",
    icon: "database",
    articles: 34,
    difficulty: "INTERMEDIATE",
  },
  {
    id: 6,
    title: "System Architecture",
    description: "Understanding modern computing architectures and low-level systems",
    icon: "cpu",
    articles: 41,
    difficulty: "ADVANCED",
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-chart-4/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Navigation videos={mockVideos} courses={mockCourses} tutorials={mockTutorials} />
        
        <main>
          <HeroSection />
          
          <div id="videos">
            <VideoGrid videos={mockVideos} />
          </div>
          
          <div id="courses">
            <CoursesSection courses={mockCourses} />
          </div>
          
          <div id="tutorials">
            <TutorialsSection tutorials={mockTutorials} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
