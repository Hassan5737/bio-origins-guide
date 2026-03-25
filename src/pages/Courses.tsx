import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { chapters, getLessonsByChapter } from "@/data/lessons";

const Courses = () => {
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
              return (
                <div
                  key={chapter.id}
                  className="rounded-xl border border-border bg-card overflow-hidden card-shadow"
                >
                  {/* Chapter Header */}
                  <div className="bg-secondary/50 p-6 md:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {index + 1}
                          </span>
                          <h2 className="font-serif text-2xl font-bold text-foreground">
                            {chapter.title}
                          </h2>
                        </div>
                        
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                        <BookOpen className="h-4 w-4 text-primary" />

                      </div>
                    </div>
                  </div>

                  {/* Lessons List */}
                  <div className="divide-y divide-border">
                    {chapterLessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={`/courses/${chapter.id}/${lesson.id}`}
                        className="group flex items-center justify-between p-4 md:p-6 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground">
                            W{lesson.week}
                          </span>
                          <div>
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {lesson.title}
                            </h3>
                            
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </Link>
                    ))}
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
