import { motion } from "motion/react";
import { useParams, useNavigate, Link } from "react-router";
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  Star, 
  Users, 
  Calendar,
  Check,
  BookOpen,
  Award,
  Target,
  Zap,
  Shield,
  Terminal
} from "lucide-react";
import { getCourseBySlug, getRelatedCourses } from "../data/courses";
import { VideoPlayer } from "../components/VideoPlayer";

export function CoursePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const course = slug ? getCourseBySlug(slug) : undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Terminal className="w-16 h-16 mx-auto text-accent" />
          <h1 className="font-mono text-2xl text-accent">Course not found</h1>
          <Link to="/courses" className="inline-block font-mono text-sm text-chart-2 hover:text-accent transition-colors">
            ← Back to courses
          </Link>
        </div>
      </div>
    );
  }

  const relatedCourses = getRelatedCourses(course.id);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "BEGINNER": return "text-chart-3 border-chart-3";
      case "INTERMEDIATE": return "text-accent border-accent";
      case "ADVANCED": return "text-chart-4 border-chart-4";
      default: return "text-chart-2 border-chart-2";
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case "BEGINNER": return "bg-chart-3/10";
      case "INTERMEDIATE": return "bg-accent/10";
      case "ADVANCED": return "bg-chart-4/10";
      default: return "bg-chart-2/10";
    }
  };

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
              onClick={() => navigate("/courses")}
              className="flex items-center gap-2 font-mono text-sm text-accent hover:text-chart-2 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Courses</span>
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
                  videoUrl={course.videoUrl} 
                  title={course.title}
                  thumbnail={course.thumbnail}
                />
              </motion.div>

              {/* Course Title & Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                {/* Title */}
                <h1 className="font-mono text-3xl md:text-4xl gradient-text">
                  {course.title}
                </h1>

                {/* Description */}
                <p className="font-mono text-sm text-chart-2/80 leading-relaxed">
                  {course.description}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-accent/20">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-mono text-sm text-chart-2">{course.rating}</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{course.studentsEnrolled} students</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{course.views} views</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-chart-2">{course.duration}</span>
                  </div>
                  <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                  <div className={`px-2 py-1 border ${getLevelColor(course.level)} ${getLevelBg(course.level)} font-mono text-xs`}>
                    {course.level}
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="flex items-center gap-4 p-4 border border-accent/20 bg-card/50">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-full border-2 border-accent/50"
                  />
                  <div>
                    <p className="font-mono text-sm text-accent">Instructor</p>
                    <p className="font-mono text-base text-chart-2">{course.instructor.name}</p>
                    <p className="font-mono text-xs text-chart-2/60">{course.instructor.title}</p>
                  </div>
                </div>
              </motion.div>

              {/* Tabs Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* About Course */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-accent/30">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <h2 className="font-mono text-xl text-accent">About This Course</h2>
                  </div>
                  <p className="font-mono text-sm text-chart-2/80 leading-relaxed">
                    {course.longDescription}
                  </p>
                </div>

                {/* What You'll Learn */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-accent/30">
                    <Target className="w-5 h-5 text-accent" />
                    <h2 className="font-mono text-xl text-accent">What You'll Learn</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-accent/20 bg-card/30">
                        <Check className="w-4 h-4 text-chart-3 flex-shrink-0 mt-0.5" />
                        <span className="font-mono text-xs text-chart-2/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-accent/30">
                    <Shield className="w-5 h-5 text-accent" />
                    <h2 className="font-mono text-xl text-accent">Requirements</h2>
                  </div>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 font-mono text-sm text-chart-2/80">
                        <span className="text-accent mt-0.5">›</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Content/Modules */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-accent/30">
                    <Zap className="w-5 h-5 text-accent" />
                    <h2 className="font-mono text-xl text-accent">Course Content</h2>
                  </div>
                  <div className="space-y-3">
                    {course.modules.map((module, index) => (
                      <motion.div
                        key={module.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border border-accent/20 bg-card/30 p-4 hover:border-accent/40 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-mono text-xs text-accent">MODULE {module.id}</span>
                              <div className="h-[1px] flex-1 bg-accent/20"></div>
                            </div>
                            <h3 className="font-mono text-base text-chart-2">{module.title}</h3>
                          </div>
                          <div className="text-right space-y-1">
                            <p className="font-mono text-xs text-chart-2/60">{module.lessons} lessons</p>
                            <p className="font-mono text-xs text-accent">{module.duration}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
                {/* CTA Card */}
                <div className="border-2 border-accent bg-card/50 p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="font-mono text-xs text-accent uppercase tracking-wider">Course Access</p>
                    {course.isPremium ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-3xl text-chart-2">Premium</span>
                        <Award className="w-5 h-5 text-yellow-400" />
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-3xl text-chart-3">Free</span>
                        <Check className="w-5 h-5 text-chart-3" />
                      </div>
                    )}
                  </div>

                  <button className="w-full py-3 px-4 bg-accent hover:bg-accent/90 text-black font-mono text-sm transition-colors border-2 border-accent neon-border-accent">
                    {course.isPremium ? "ENROLL NOW" : "START LEARNING"}
                  </button>

                  <div className="pt-4 border-t border-accent/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-chart-2/60">Duration</span>
                      <span className="font-mono text-xs text-chart-2">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-chart-2/60">Level</span>
                      <span className="font-mono text-xs text-chart-2">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-chart-2/60">Last Updated</span>
                      <span className="font-mono text-xs text-chart-2">{course.lastUpdated}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-chart-2/60">Students</span>
                      <span className="font-mono text-xs text-chart-2">{course.studentsEnrolled}</span>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="border border-accent/20 bg-card/30 p-6 space-y-4">
                  <h3 className="font-mono text-sm text-accent uppercase tracking-wider">Topics Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 border border-chart-2/40 bg-chart-2/10 font-mono text-xs text-chart-2"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Courses */}
                {relatedCourses.length > 0 && (
                  <div className="border border-accent/20 bg-card/30 p-6 space-y-4">
                    <h3 className="font-mono text-sm text-accent uppercase tracking-wider">Related Courses</h3>
                    <div className="space-y-3">
                      {relatedCourses.map((related) => (
                        <Link
                          key={related.id}
                          to={`/courses/${related.slug}`}
                          className="block border border-accent/20 hover:border-accent/50 bg-background/50 p-3 transition-colors group"
                        >
                          <h4 className="font-mono text-sm text-chart-2 group-hover:text-accent transition-colors mb-2">
                            {related.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs font-mono text-chart-2/60">
                            <Clock className="w-3 h-3" />
                            <span>{related.duration}</span>
                          </div>
                        </Link>
                      ))}
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
