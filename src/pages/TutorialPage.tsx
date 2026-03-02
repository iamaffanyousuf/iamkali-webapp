import { motion } from "motion/react";
import { useParams, useNavigate, Link } from "react-router";
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  ThumbsUp,
  Calendar,
  Terminal,
  Code,
  Database,
  Network,
  Shield,
  Cpu,
  BookOpen,
  Target,
  Zap,
  CheckCircle2
} from "lucide-react";
import { getTutorialBySlug, getRelatedTutorials } from "../data/tutorials";
import { VideoPlayer } from "../components/VideoPlayer";

const iconMap = {
  terminal: Terminal,
  code: Code,
  database: Database,
  network: Network,
  shield: Shield,
  cpu: Cpu,
};

export function TutorialPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const tutorial = slug ? getTutorialBySlug(slug) : undefined;

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <BookOpen className="w-16 h-16 mx-auto text-accent" />
          <h1 className="font-mono text-2xl text-accent">Tutorial not found</h1>
          <Link to="/" className="inline-block font-mono text-sm text-chart-2 hover:text-accent transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const relatedTutorials = getRelatedTutorials(tutorial.id);
  const IconComponent = iconMap[tutorial.icon as keyof typeof iconMap] || Terminal;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "BEGINNER": return "text-chart-3 border-chart-3 bg-chart-3/10";
      case "INTERMEDIATE": return "text-accent border-accent bg-accent/10";
      case "ADVANCED": return "text-chart-4 border-chart-4 bg-chart-4/10";
      default: return "text-chart-2 border-chart-2 bg-chart-2/10";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-chart-4/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
            <div className="lg:col-span-2 space-y-8">
              {/* Video Player */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VideoPlayer 
                  videoUrl={tutorial.videoUrl} 
                  title={tutorial.title}
                  thumbnail={tutorial.thumbnail}
                  autoplay={true}
                />
              </motion.div>

              {/* Tutorial Title & Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                {/* Icon & Category */}
                <div className="flex items-center gap-4">
                  <div className="p-3 border-2 border-accent bg-accent/10">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-chart-4/20 border border-chart-4/40 text-chart-4 font-mono text-xs uppercase tracking-wider">
                      {tutorial.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="font-mono text-3xl md:text-4xl gradient-text">
                  {tutorial.title}
                </h1>

                {/* Description */}
                <p className="font-mono text-sm text-chart-2/80 leading-relaxed">
                  {tutorial.description}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-accent/20">
                  <div className={`px-3 py-1 border ${getDifficultyColor(tutorial.difficulty)} font-mono text-xs uppercase tracking-wider`}>
                    {tutorial.difficulty}
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{tutorial.views} views</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{tutorial.likes} likes</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{tutorial.duration}</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{tutorial.articles} articles</span>
                  </div>
                </div>
              </motion.div>

              {/* Tutorial Content Sections */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* About */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-accent/30">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <h2 className="font-mono text-xl text-accent">About This Tutorial</h2>
                  </div>
                  <p className="font-mono text-sm text-chart-2/80 leading-relaxed">
                    {tutorial.longDescription}
                  </p>
                </div>

                {/* What You'll Learn */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-accent/30">
                    <Target className="w-5 h-5 text-accent" />
                    <h2 className="font-mono text-xl text-accent">What You'll Learn</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {tutorial.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-accent/20 bg-card/30">
                        <CheckCircle2 className="w-4 h-4 text-chart-3 flex-shrink-0 mt-0.5" />
                        <span className="font-mono text-xs text-chart-2/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prerequisites */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-accent/30">
                    <Zap className="w-5 h-5 text-accent" />
                    <h2 className="font-mono text-xl text-accent">Prerequisites</h2>
                  </div>
                  <ul className="space-y-2">
                    {tutorial.prerequisites.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 font-mono text-sm text-chart-2/80">
                        <span className="text-accent mt-0.5">›</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Takeaways */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-accent/30">
                    <Target className="w-5 h-5 text-accent" />
                    <h2 className="font-mono text-xl text-accent">Key Takeaways</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tutorial.keyTakeaways.map((takeaway, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-chart-4/20 bg-chart-4/10">
                        <div className="w-2 h-2 bg-chart-4 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="font-mono text-xs text-chart-2/80">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Topics Covered */}
                {tutorial.topics && tutorial.topics.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-accent/30">
                      <Code className="w-5 h-5 text-accent" />
                      <h2 className="font-mono text-xl text-accent">Topics Covered</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tutorial.topics.map((topic, index) => (
                        <span 
                          key={index}
                          className="px-3 py-2 border border-chart-2/40 bg-chart-2/10 font-mono text-xs text-chart-2"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="sticky top-24 space-y-6"
              >
                {/* Tutorial Info Card */}
                <div className="border-2 border-chart-4/40 bg-card/50 p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="font-mono text-xs text-accent uppercase tracking-wider">Tutorial Series</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-2xl text-chart-2">Free Access</span>
                      <CheckCircle2 className="w-5 h-5 text-chart-3" />
                    </div>
                  </div>

                  <button className="w-full py-3 px-4 bg-chart-4 hover:bg-chart-4/90 text-black font-mono text-sm transition-colors border-2 border-chart-4">
                    START LEARNING
                  </button>

                  <div className="pt-4 border-t border-accent/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-chart-2/60">Duration</span>
                      <span className="font-mono text-xs text-chart-2">{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-chart-2/60">Level</span>
                      <span className="font-mono text-xs text-chart-2">{tutorial.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-chart-2/60">Published</span>
                      <span className="font-mono text-xs text-chart-2">{tutorial.publishedDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-chart-2/60">Articles</span>
                      <span className="font-mono text-xs text-chart-2">{tutorial.articles}</span>
                    </div>
                  </div>
                </div>

                {/* Related Tutorials */}
                {relatedTutorials.length > 0 && (
                  <div className="border border-accent/20 bg-card/30 p-6 space-y-4">
                    <h3 className="font-mono text-sm text-accent uppercase tracking-wider">Related Tutorials</h3>
                    <div className="space-y-3">
                      {relatedTutorials.map((related) => {
                        const RelatedIcon = iconMap[related.icon as keyof typeof iconMap] || Terminal;
                        return (
                          <Link
                            key={related.id}
                            to={`/tutorials/${related.slug}`}
                            className="block border border-accent/20 hover:border-accent/50 bg-background/50 p-3 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-2 border border-chart-4/40 bg-chart-4/10">
                                <RelatedIcon className="w-4 h-4 text-chart-4" />
                              </div>
                              <div className="flex-1 space-y-2">
                                <h4 className="font-mono text-sm text-chart-2 group-hover:text-accent transition-colors line-clamp-2">
                                  {related.title}
                                </h4>
                                <div className="flex items-center gap-2 text-xs font-mono text-chart-2/60">
                                  <Clock className="w-3 h-3" />
                                  <span>{related.duration}</span>
                                  <span className={`ml-2 px-2 py-0.5 border ${getDifficultyColor(related.difficulty)} text-xs`}>
                                    {related.difficulty}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
