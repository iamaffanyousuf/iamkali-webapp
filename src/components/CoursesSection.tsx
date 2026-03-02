import { motion } from "motion/react";
import { BookOpen, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { courses } from "../data/courses";

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  students: string;
  modules: number;
  price: string;
}

interface CoursesSectionProps {
  courses: Course[];
}

export function CoursesSection({ courses: mockCourses }: CoursesSectionProps) {
  // Map mock courses to actual courses for linking
  const displayCourses = courses.slice(0, mockCourses.length);

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
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-accent/50"></div>
            <h2 className="text-3xl md:text-5xl font-mono neon-indigo">
              &gt; ELITE_COURSES
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-accent/50"></div>
          </div>
          <p className="text-center font-mono text-accent/70">
            [SYSTEM: Advanced training programs available]
          </p>
        </motion.div>

        <div className="space-y-6">
          {displayCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="bg-card border-2 border-accent/30 p-6 md:p-8 neon-border-indigo hover:border-accent/60 transition-all group cursor-pointer"
            >
              <Link to={`/courses/${course.slug}`} className="block">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <BookOpen className="w-5 h-5 text-primary" />
                          <h3 className="text-xl md:text-2xl font-mono text-primary">
                            $ {course.title}
                          </h3>
                        </div>
                        <p className="font-mono text-sm md:text-base text-primary/70">
                          {course.description}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl md:text-3xl font-mono text-primary neon">
                          {course.isPremium ? "PREMIUM" : "FREE"}
                        </div>
                        <div className="text-xs font-mono text-primary/50 mt-1">
                          {course.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm font-mono">
                      <div className="flex items-center gap-2 text-primary/60">
                        <Award className="w-4 h-4" />
                        <span className="uppercase">{course.level}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary/60">
                        <Users className="w-4 h-4" />
                        <span>{course.studentsEnrolled} students</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary/60">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.modules.length} modules</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-primary-foreground px-6 py-3 font-mono uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all self-end md:self-auto"
                  >
                    ACCESS
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Progress bar decoration */}
                <div className="mt-6 h-1 bg-primary/20 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-chart-2 via-accent to-chart-4"
                  ></motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/courses"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-black font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors border-2 border-accent neon-border-accent group"
          >
            <span>VIEW ALL COURSES</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}