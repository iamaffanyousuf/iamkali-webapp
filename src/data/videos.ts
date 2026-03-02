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
  }
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
