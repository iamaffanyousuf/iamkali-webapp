import { motion } from "motion/react";
import { Link } from "react-router";
import { 
  Clock, 
  Users, 
  Star, 
  Eye, 
  Search,
  Filter,
  Grid3x3,
  List,
  ArrowLeft,
  BookOpen,
  Award,
  Zap
} from "lucide-react";
import { useState } from "react";
import { courses, Course } from "../data/courses";

export function CoursesListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "ALL" || course.level === selectedLevel;
    const matchesCategory = selectedCategory === "ALL" || course.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const categories = ["ALL", ...Array.from(new Set(courses.map(c => c.category)))];
  const levels = ["ALL", "BEGINNER", "INTERMEDIATE", "ADVANCED"];

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Link 
                  to="/"
                  className="flex items-center gap-2 font-mono text-sm text-accent hover:text-chart-2 transition-colors group mb-3"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Home</span>
                </Link>
                <h1 className="font-mono text-3xl md:text-4xl gradient-text">
                  All Courses
                </h1>
                <p className="font-mono text-sm text-chart-2/70 mt-2">
                  Master cybersecurity, Linux, and ethical hacking
                </p>
              </div>

              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-2 border border-accent/30 p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 font-mono text-xs transition-colors ${
                    viewMode === "grid" 
                      ? "bg-accent text-black" 
                      : "text-accent hover:bg-accent/10"
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 font-mono text-xs transition-colors ${
                    viewMode === "list" 
                      ? "bg-accent text-black" 
                      : "text-accent hover:bg-accent/10"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card/50 border border-accent/30 text-chart-2 placeholder-chart-2/40 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                {/* Level Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-accent" />
                  <span className="font-mono text-xs text-accent">Level:</span>
                  <div className="flex gap-2">
                    {levels.map(level => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`px-3 py-1 font-mono text-xs transition-colors ${
                          selectedLevel === level
                            ? "bg-accent text-black border-accent"
                            : "border-accent/30 text-accent hover:border-accent/60"
                        } border`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-accent">Category:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 font-mono text-xs transition-colors ${
                          selectedCategory === category
                            ? "bg-accent text-black border-accent"
                            : "border-accent/30 text-accent hover:border-accent/60"
                        } border`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results count */}
              <div className="flex items-center gap-2 font-mono text-xs text-chart-2/60">
                <span>{filteredCourses.length} courses found</span>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid/List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 mx-auto text-accent/50 mb-4" />
              <p className="font-mono text-lg text-chart-2/60">No courses found</p>
              <p className="font-mono text-sm text-chart-2/40 mt-2">Try adjusting your filters</p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/courses/${course.slug}`}
                    className="block border-2 border-accent/20 hover:border-accent/60 bg-card/50 overflow-hidden transition-all group h-full flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-black overflow-hidden">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      
                      {/* Premium Badge */}
                      {course.isPremium && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-400/90 text-black font-mono text-xs flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          <span>PREMIUM</span>
                        </div>
                      )}
                      
                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm font-mono text-xs text-accent flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-accent/90 text-black font-mono text-xs">
                        {course.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      {/* Level Badge */}
                      <div className={`inline-flex items-center gap-1 px-2 py-1 border ${getLevelColor(course.level)} ${getLevelBg(course.level)} font-mono text-xs w-fit mb-3`}>
                        <Zap className="w-3 h-3" />
                        <span>{course.level}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-mono text-lg text-chart-2 group-hover:text-accent transition-colors mb-2 line-clamp-2">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="font-mono text-xs text-chart-2/60 mb-4 line-clamp-2 flex-1">
                        {course.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 pt-4 border-t border-accent/20">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="font-mono text-xs text-chart-2">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-accent" />
                          <span className="font-mono text-xs text-chart-2">{course.studentsEnrolled}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 text-accent" />
                          <span className="font-mono text-xs text-chart-2">{course.views}</span>
                        </div>
                      </div>

                      {/* Instructor */}
                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-accent/20">
                        <img 
                          src={course.instructor.avatar} 
                          alt={course.instructor.name}
                          className="w-6 h-6 rounded-full border border-accent/50"
                        />
                        <span className="font-mono text-xs text-chart-2/70">{course.instructor.name}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    to={`/courses/${course.slug}`}
                    className="block border-2 border-accent/20 hover:border-accent/60 bg-card/50 overflow-hidden transition-all group"
                  >
                    <div className="flex flex-col md:flex-row gap-4 p-5">
                      {/* Thumbnail */}
                      <div className="relative w-full md:w-64 aspect-video bg-black overflow-hidden flex-shrink-0">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {course.isPremium && (
                          <div className="absolute top-2 right-2 px-2 py-1 bg-yellow-400/90 text-black font-mono text-xs flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            <span>PREMIUM</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 bg-accent/90 text-black font-mono text-xs">
                                {course.category}
                              </span>
                              <div className={`px-2 py-1 border ${getLevelColor(course.level)} ${getLevelBg(course.level)} font-mono text-xs`}>
                                {course.level}
                              </div>
                            </div>
                            <h3 className="font-mono text-xl text-chart-2 group-hover:text-accent transition-colors mb-2">
                              {course.title}
                            </h3>
                            <p className="font-mono text-sm text-chart-2/70 line-clamp-2">
                              {course.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-chart-2/70">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-accent" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span>{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3 text-accent" />
                            <span>{course.studentsEnrolled} students</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3 text-accent" />
                            <span>{course.views} views</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <img 
                            src={course.instructor.avatar} 
                            alt={course.instructor.name}
                            className="w-6 h-6 rounded-full border border-accent/50"
                          />
                          <span className="font-mono text-xs text-chart-2/70">{course.instructor.name}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
