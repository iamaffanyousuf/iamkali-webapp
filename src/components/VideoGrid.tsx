import { motion } from "motion/react";
import { Play, Clock, Eye, Lock } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { videos } from "../data/videos";

interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
  views: string;
  thumbnail: string;
  category: string;
  isPremium: boolean;
  slug: string;
}

interface VideoGridProps {
  videos: Video[];
}

export function VideoGrid({ videos: mockVideos }: VideoGridProps) {
  // Map to actual videos data for linking
  const displayVideos = videos.slice(0, mockVideos.length);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-primary/50"></div>
            <h2 className="text-3xl md:text-5xl font-mono neon-blue">
              &gt; LATEST_VIDEOS
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/50 to-primary/50"></div>
          </div>
          <p className="text-center font-mono text-primary/70">
            [SYSTEM: Displaying most recent uploads]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card border-2 border-primary/30 overflow-hidden group cursor-pointer neon-border-blue hover:border-primary/60 transition-all"
            >
              <Link to={`/videos/${video.slug}`} className="block">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary/20 backdrop-blur-sm p-4 border-2 border-primary neon-border-blue">
                      <Play className="w-8 h-8 text-primary fill-primary" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-mono uppercase tracking-wider">
                      {video.category}
                    </span>
                  </div>

                  {/* Premium badge */}
                  {video.isPremium && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-destructive/90 text-destructive-foreground px-3 py-1 text-xs font-mono uppercase tracking-wider flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        PRO
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <h3 className="font-mono text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                    $ {video.title}
                  </h3>
                  
                  <p className="font-mono text-sm text-primary/60 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-xs font-mono text-primary/50 pt-2 border-t border-primary/20">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}