import { motion } from "motion/react";
import { useParams, useNavigate, Link } from "react-router";
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  ThumbsUp,
  Calendar,
  Share2,
  Bookmark,
  Tag,
  Play
} from "lucide-react";
import { getVideoBySlug, getRelatedVideos } from "../data/videos";
import { VideoPlayer } from "../components/VideoPlayer";

export function VideoPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const video = slug ? getVideoBySlug(slug) : undefined;

  if (!video) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Play className="w-16 h-16 mx-auto text-accent" />
          <h1 className="font-mono text-2xl text-accent">Video not found</h1>
          <Link to="/videos" className="inline-block font-mono text-sm text-chart-2 hover:text-accent transition-colors">
            ← Back to videos
          </Link>
        </div>
      </div>
    );
  }

  const relatedVideos = getRelatedVideos(video.id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-accent/20 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 font-mono text-sm text-accent hover:text-chart-2 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Video & Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VideoPlayer 
                  videoUrl={video.videoUrl} 
                  title={video.title}
                  thumbnail={video.thumbnail}
                  autoplay={true}
                />
              </motion.div>

              {/* Video Title & Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-accent text-black font-mono text-xs uppercase tracking-wider">
                    {video.category}
                  </span>
                  {video.isPremium && (
                    <span className="px-3 py-1 bg-yellow-400 text-black font-mono text-xs uppercase tracking-wider">
                      PREMIUM
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="font-mono text-3xl md:text-4xl gradient-text">
                  {video.title}
                </h1>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-accent/20">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{video.views} views</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{video.likes} likes</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{video.duration}</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{video.publishedDate}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 border border-accent/40 hover:border-accent hover:bg-accent/10 transition-colors font-mono text-sm text-chart-2">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-accent/40 hover:border-accent hover:bg-accent/10 transition-colors font-mono text-sm text-chart-2">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-accent/40 hover:border-accent hover:bg-accent/10 transition-colors font-mono text-sm text-chart-2">
                    <Bookmark className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border border-accent/20 bg-card/30 p-6 space-y-4"
              >
                <h2 className="font-mono text-xl text-accent flex items-center gap-2">
                  <div className="h-[2px] w-8 bg-accent"></div>
                  Description
                </h2>
                <p className="font-mono text-sm text-chart-2/80 leading-relaxed">
                  {video.longDescription}
                </p>

                {/* Tags */}
                {video.tags && video.tags.length > 0 && (
                  <div className="pt-4 border-t border-accent/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-accent" />
                      <span className="font-mono text-xs text-accent uppercase tracking-wider">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {video.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 border border-chart-2/40 bg-chart-2/10 font-mono text-xs text-chart-2 hover:border-accent/40 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Topics */}
                {video.relatedTopics && video.relatedTopics.length > 0 && (
                  <div className="pt-4 border-t border-accent/20">
                    <p className="font-mono text-xs text-accent uppercase tracking-wider mb-3">Related Topics</p>
                    <div className="flex flex-wrap gap-2">
                      {video.relatedTopics.map((topic, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 border border-accent/30 font-mono text-xs text-accent/70"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Related Videos */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="sticky top-24 space-y-4"
              >
                <h3 className="font-mono text-lg text-accent uppercase tracking-wider flex items-center gap-2">
                  <div className="h-[2px] w-6 bg-accent"></div>
                  Related Videos
                </h3>
                
                <div className="space-y-3">
                  {relatedVideos.map((related) => (
                    <Link
                      key={related.id}
                      to={`/videos/${related.slug}`}
                      className="block border border-accent/20 hover:border-accent/50 bg-card/50 overflow-hidden transition-all group"
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video bg-black">
                        <img 
                          src={related.thumbnail} 
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        
                        {/* Duration */}
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm font-mono text-xs text-accent">
                          {related.duration}
                        </div>

                        {/* Category */}
                        <div className="absolute top-2 left-2 px-2 py-1 bg-accent/90 text-black font-mono text-xs">
                          {related.category}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-3 space-y-2">
                        <h4 className="font-mono text-sm text-chart-2 group-hover:text-accent transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs font-mono text-chart-2/60">
                          <Eye className="w-3 h-3" />
                          <span>{related.views}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Videos */}
                <Link
                  to="/"
                  className="block w-full py-3 px-4 border-2 border-accent hover:bg-accent hover:text-black text-accent font-mono text-sm text-center transition-colors"
                >
                  VIEW ALL VIDEOS
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
