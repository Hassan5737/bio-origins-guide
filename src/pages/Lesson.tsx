import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Target, Lightbulb, HelpCircle, Beaker } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getLessonById, getChapterById, getAdjacentLessons } from "@/data/lessons";

const Lesson = () => {
  const { chapterId, lessonId } = useParams();

  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  const chapter = chapterId ? getChapterById(chapterId) : undefined;
  const { prev, next } = lessonId ? getAdjacentLessons(lessonId) : { prev: undefined, next: undefined };

  if (!lesson || !chapter) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <Layout>
      {/* Breadcrumb Header */}
      <section className="border-b border-border bg-secondary/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
              Courses
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to={`/courses/${chapter.id}`} className="text-muted-foreground hover:text-primary transition-colors">
              {chapter.title}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{lesson.title}</span>
          </nav>
        </div>
      </section>

      {/* Lesson Hero */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium text-primary-foreground">
                Week {lesson.week}
              </span>
              <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium text-primary-foreground">
                {chapter.title}
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              {lesson.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Lesson Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Learning Objectives */}
              {/* <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                <div className="mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    Learning Objectives
                  </h2>
                </div>
                <ul className="space-y-2">
                  {lesson.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Lesson Video */}
              {lesson.video && (
                <div className="rounded-xl border border-border bg-card overflow-hidden card-shadow mb-8">
                  <iframe
                    className="w-full aspect-video"
                    src={lesson.video}
                    title={lesson.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {/* Lesson Image */}
              {lesson.image && (
                <div className="rounded-xl border border-border bg-card overflow-hidden card-shadow mb-8">
                  <img
                    src={lesson.image}
                    alt={lesson.title}
                    className="w-full object-contain"
                  />
                  <div className="p-4 bg-secondary/30">
                    <p className="text-sm text-muted-foreground text-center">
                      Diagram: {lesson.title}
                    </p>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
                  Lesson Content
                </h2>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {lesson.content.split('\n').map((paragraph, index) => {
                    const trimmed = paragraph.trim();
                    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                      return (
                        <h3 key={index} className="mt-6 mb-2 font-serif text-xl font-semibold text-foreground">
                          {trimmed.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }

                    // Check for markdown image syntax ![alt](url)
                    const imageMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
                    if (imageMatch) {
                      const [_, alt, src] = imageMatch;
                      return (
                        <div key={index} className="my-6 rounded-xl border border-border bg-card overflow-hidden card-shadow">
                          <img
                            src={src}
                            alt={alt}
                            className="w-full object-contain max-h-[500px]"
                          />
                          {alt && (
                            <div className="p-3 bg-secondary/30">
                              <p className="text-sm text-muted-foreground text-center italic">
                                {alt}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    }

                    if (trimmed) {
                      return (
                        <p key={index} className="mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Activities */}
              <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                <div className="mb-4 flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-accent" />
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    Activities
                  </h2>
                </div>

                {lesson.activitiesContent ? (
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {lesson.activitiesContent.split('\n').map((paragraph, index) => {
                      const trimmed = paragraph.trim();
                      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                        return (
                          <h3 key={index} className="mt-4 mb-2 font-semibold text-foreground">
                            {trimmed.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      if (trimmed) {
                        return (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {lesson.activities.map((activity, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-lg bg-accent/5 p-4 border border-accent/20"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Quizzes */}
              {lesson.quizzes && (
                <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                  <div className="mb-4 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h2 className="font-serif text-xl font-semibold text-foreground">
                      Quizzes
                    </h2>
                  </div>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {lesson.quizzes.split('\n').map((paragraph, index) => {
                      const trimmed = paragraph.trim();
                      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                        return (
                          <h3 key={index} className="mt-6 mb-2 font-semibold text-foreground">
                            {trimmed.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      if (trimmed) {
                        return (
                          <p key={index} className="mb-2">
                            {paragraph}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Key Concepts */}
              <div className="rounded-xl border border-border bg-card p-6 card-shadow sticky top-20">
                <div className="mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-lg font-semibold text-foreground">
                    Key Concepts
                  </h2>
                </div>
                <ul className="space-y-3">
                  {lesson.keyConcepts.map((concept, index) => (
                    <li
                      key={index}
                      className="rounded-lg bg-primary/5 p-3 text-sm text-foreground border border-primary/10"
                    >
                      {concept}
                    </li>
                  ))}
                </ul>

                {/* Essential Questions */}
                <div className="mt-6">
                  <div className="mb-3 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground">Essential Questions</h3>
                  </div>
                  <ul className="space-y-2">
                    {lesson.essentialQuestions.map((question, index) => (
                      <li key={index} className="text-sm text-muted-foreground italic">
                        "{question}"
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prev ? (
              <Button variant="outline" size="lg" asChild>
                <Link to={`/courses/${prev.chapterId}/${prev.id}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous: {prev.title}
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="lg" asChild>
                <Link to="/courses">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Courses
                </Link>
              </Button>
            )}
            {next && (
              <Button variant="default" size="lg" asChild>
                <Link to={`/courses/${next.chapterId}/${next.id}`}>
                  Next: {next.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lesson;
