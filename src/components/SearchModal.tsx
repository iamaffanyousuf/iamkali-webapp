import { motion, AnimatePresence } from "motion/react";
import { X, Search, Terminal, Code, Video, BookOpen, Users } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router";
import { videos } from "../data/videos";
import { courses } from "../data/courses";
import { tutorials } from "../data/tutorials";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  videos?: any[];
  courses?: any[];
  tutorials?: any[];
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  // Create searchable data from actual website content
  const searchData = useMemo(() => {
    const items = [];
    
    // Add videos
    videos.forEach((video) => {
      items.push({
        id: `video-${video.id}`,
        title: video.title,
        description: video.description,
        type: "video",
        category: video.category || "Video",
        path: `/videos/${video.slug}`,
        meta: `${video.duration} • ${video.views} views`,
      });
    });
    
    // Add courses
    courses.forEach((course) => {
      items.push({
        id: `course-${course.id}`,
        title: course.title,
        description: course.description,
        type: "course",
        category: course.level || "Course",
        path: `/courses/${course.slug}`,
        meta: `${course.modules.length} modules • ${course.studentsEnrolled} students`,
      });
    });
    
    // Add tutorials
    tutorials.forEach((tutorial) => {
      items.push({
        id: `tutorial-${tutorial.id}`,
        title: tutorial.title,
        description: tutorial.description,
        type: "tutorial",
        category: tutorial.difficulty || "Tutorial",
        path: `/tutorials/${tutorial.slug}`,
        meta: `${tutorial.articles} articles`,
      });
    });
    
    return items;
  }, []);

  const filteredResults = useMemo(() => {
    if (searchQuery.trim() === "") {
      return searchData;
    }
    
    return searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, searchData]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultRefs.current[selectedIndex]) {
      resultRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
    } else if (e.key === "Enter" && filteredResults.length > 0) {
      e.preventDefault();
      onClose();
      navigate(filteredResults[selectedIndex].path);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const handleResultClick = (path: string) => {
    onClose();
    navigate(path);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />;
      case "course":
        return <BookOpen className="w-4 h-4" />;
      case "tutorial":
        return <Code className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "text-accent";
      case "course":
        return "text-primary";
      case "tutorial":
        return "text-emerald-400";
      default:
        return "text-primary";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Search Modal */}
          <div className="fixed inset-0 z-[101] flex items-start justify-center pt-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-3xl bg-card border-2 border-primary neon-border-blue relative overflow-hidden"
              style={{
                boxShadow: "0 0 40px rgba(0,240,255,0.3)",
              }}
            >
              {/* Scanlines Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.1) 2px, rgba(0,240,255,0.1) 4px)",
                  }}
                />
              </div>

              {/* Terminal Header */}
              <div className="bg-primary/10 border-b border-primary/30 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs text-primary">search@iamkali:~$</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-primary/70 hover:text-primary transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Input */}
              <div className="relative border-b border-primary/30 bg-background/50">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-mono">
                  grep -r
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="search content..."
                  className="w-full bg-transparent border-none outline-none px-4 py-4 pl-24 text-primary font-mono text-sm placeholder:text-primary/30"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/50 font-mono text-xs">
                  <span className="hidden sm:inline">[↑↓ navigate]</span> [ESC close]
                </div>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                {filteredResults.length > 0 ? (
                  <div className="p-2">
                    {filteredResults.map((item, index) => (
                      <motion.div
                        key={item.id}
                        onClick={() => handleResultClick(item.path)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`block p-4 border border-primary/20 mb-2 transition-all group ${
                          index === selectedIndex
                            ? "bg-primary/20 border-primary neon-border-blue"
                            : "hover:bg-primary/10 hover:border-primary/40"
                        }`}
                        onMouseEnter={() => setSelectedIndex(index)}
                        ref={(el) => (resultRefs.current[index] = el)}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 ${getTypeColor(item.type)}`}>
                            {getIcon(item.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-mono text-sm text-primary">
                                {index === selectedIndex && <span className="text-accent">$ </span>}
                                {item.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-xs font-mono">
                              <span className={`${getTypeColor(item.type)}`}>
                                [{item.type.toUpperCase()}]
                              </span>
                              <span className="text-primary/50">{item.category}</span>
                              <span className="text-primary/30">{item.path}</span>
                            </div>
                          </div>
                          {index === selectedIndex && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-accent font-mono text-xs flex items-center gap-1"
                            >
                              <span>[ENTER]</span>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Terminal className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                    <p className="font-mono text-primary/50 text-sm">
                      $ grep: no matches found for "{searchQuery}"
                    </p>
                    <p className="font-mono text-primary/30 text-xs mt-2">
                      Try different search terms
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-primary/5 border-t border-primary/30 px-4 py-2">
                <div className="flex items-center justify-between text-xs font-mono text-primary/50">
                  <span>
                    {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} found
                  </span>
                  <span className="hidden sm:inline">
                    Powered by iamKali Search Engine
                  </span>
                </div>
              </div>

              {/* Glitch Effect Border */}
              <motion.div
                className="absolute inset-0 border-2 border-accent pointer-events-none"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}