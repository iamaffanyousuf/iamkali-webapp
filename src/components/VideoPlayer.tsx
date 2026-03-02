import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  videoUrl: string; // Can be YouTube video ID or full video URL in the future
  title: string;
  thumbnail?: string;
  autoplay?: boolean;
}

export function VideoPlayer({ videoUrl, title, thumbnail, autoplay = false }: VideoPlayerProps) {
  const [isYouTube, setIsYouTube] = useState(true);

  // Check if it's a YouTube URL/ID
  useEffect(() => {
    // Simple check: if it's a YouTube ID (11 characters) or contains youtube.com/youtu.be
    const ytPattern = /^[a-zA-Z0-9_-]{11}$|youtube\.com|youtu\.be/;
    setIsYouTube(ytPattern.test(videoUrl));
  }, [videoUrl]);

  // Extract YouTube video ID from various formats
  const getYouTubeId = (url: string): string => {
    // If it's already just an ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
      return url;
    }
    
    // Extract from various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /^([a-zA-Z0-9_-]{11})$/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    
    return url; // Return as-is if no pattern matches
  };

  if (isYouTube) {
    const videoId = getYouTubeId(videoUrl);
    // Add fs=1 parameter to enable fullscreen button in YouTube player
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1&fs=1`;

    return (
      <div 
        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border-2 border-accent/30 neon-border-accent group"
      >
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none scanline-effect z-10"></div>
        
        {/* YouTube iframe */}
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="w-full h-full relative z-0"
        />

        {/* Terminal-style overlay on top */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-accent">
              <Play className="w-3 h-3" />
              <span>VIDEO_STREAM.STATUS: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent/70">
              <span className="hidden sm:inline">Use player controls for fullscreen</span>
            </div>
          </div>
        </div>

        {/* Corner brackets for cyberpunk effect */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-accent/50 pointer-events-none z-10"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-accent/50 pointer-events-none z-10"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent/50 pointer-events-none z-10"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-accent/50 pointer-events-none z-10"></div>
      </div>
    );
  }

  // Placeholder for future video sources (direct uploads, Vimeo, etc.)
  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border-2 border-accent/30 neon-border-accent flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
          <Play className="w-8 h-8 text-accent" />
        </div>
        <p className="font-mono text-sm text-accent/70">
          [INFO] Video player ready for custom sources
        </p>
      </div>
    </div>
  );
}