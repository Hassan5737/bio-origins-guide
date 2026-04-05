import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { chapters, getLessonsByChapter } from "@/data/lessons";

function getCompletedLessons(): Set<string> {
  try {
    const stored = localStorage.getItem("bio_completed_lessons");
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

const Courses = () => {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    setCompleted(getCompletedLessons());

    // Listen for changes from Lesson page
    const onStorage = () => setCompleted(getCompletedLessons());
    window.addEventListener("storage", onStorage);
    // Also poll every second in case same-tab update
    const interval = setInterval(() => setCompleted(getCompletedLessons()), 1000);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Biology Courses
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Explore our comprehensive curriculum organized by chapters. Each chapter contains carefully crafted lessons with clear objectives and hands-on activities.
            </p>
          </div>
        </div>
      </section>

      {/* Chapters List */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {chapters.map((chapter, index) => {
              const chapterLessons = getLessonsByChapter(chapter.id);
              const completedCount = chapterLessons.filter(l => completed.has(l.id)).length;
              const totalCount = chapterLessons.length;
              const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

              return (
                <div
                  key={chapter.id}
                  className="rounded-xl border border-border bg-card overflow-hidden card-shadow"
                >
                  {/* Chapter Header */}
                  <div className="bg-secondary/50 p-6 md:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {index + 1}
                          </span>
                          <h2 className="font-serif text-2xl font-bold text-foreground">
                            {chapter.title}
                          </h2>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex items-center gap-3">
                          <div className="h-2 flex-1 rounded-full bg-border overflow-hidden">
                            <div
                              className="h-full rounded-full bg-primary transition-all duration-500"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                            {completedCount} / {totalCount} lessons
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 self-start md:self-center">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {progressPercent}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lessons List */}
                  <div className="divide-y divide-border">
                    {chapterLessons.map((lesson) => {
                      const isDone = completed.has(lesson.id);
                      return (
                        <Link
                          key={lesson.id}
                          to={`/courses/${chapter.id}/${lesson.id}`}
                          className="group flex items-center justify-between p-4 md:p-6 transition-colors hover:bg-muted/50"
                        >
                          <div className="flex items-center gap-4">
                            <span className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                              isDone
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }`}>
                              {isDone ? <CheckCircle2 className="h-5 w-5" /> : `W${lesson.week}`}
                            </span>
                            <div>
                              <h3 className={`font-medium transition-colors group-hover:text-primary ${
                                isDone ? "text-muted-foreground line-through" : "text-foreground"
                              }`}>
                                {lesson.title}
                              </h3>
                              {isDone && (
                                <span className="text-xs text-primary font-medium">Completed ✓</span>
                              )}
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
