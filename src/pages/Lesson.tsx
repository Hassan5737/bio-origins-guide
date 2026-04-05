import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Lightbulb, HelpCircle, Beaker, ExternalLink, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getLessonById, getChapterById, getAdjacentLessons } from "@/data/lessons";

function getCompletedLessons(): Set<string> {
  try {
    const stored = localStorage.getItem("bio_completed_lessons");
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function markLessonComplete(lessonId: string) {
  const completed = getCompletedLessons();
  completed.add(lessonId);
  localStorage.setItem("bio_completed_lessons", JSON.stringify([...completed]));
}

function getEmbedUrl(url: string): string {
  const params = "?rel=0&modestbranding=1";
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}${params}`;
  const shortLinkMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortLinkMatch) return `https://www.youtube.com/embed/${shortLinkMatch[1]}${params}`;
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}${params}`;
  return url;
}

function renderContent(content: string) {
  return content.split('\n').map((paragraph, index) => {
    const trimmed = paragraph.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2, -2).includes('**')) {
      return (
        <h3 key={index} className="mt-6 mb-2 font-serif text-xl font-semibold text-foreground">
          {trimmed.replace(/\*\*/g, '')}
        </h3>
      );
    }

    const imageMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imageMatch) {
      const [_, alt, src] = imageMatch;
      return (
        <div key={index} className="my-6 rounded-xl border border-border bg-card overflow-hidden card-shadow">
          <img src={src} alt={alt} className="w-full object-contain max-h-[500px]" />
          {alt && (
            <div className="p-3 bg-secondary/30">
              <p className="text-sm text-muted-foreground text-center italic">{alt}</p>
            </div>
          )}
        </div>
      );
    }

    return (
      <p key={index} className="mb-4 leading-relaxed">
        {paragraph}
      </p>
    );
  });
}

const Lesson = () => {
  const { chapterId, lessonId } = useParams();
  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  const chapter = chapterId ? getChapterById(chapterId) : undefined;
  const { prev, next } = lessonId ? getAdjacentLessons(lessonId) : { prev: undefined, next: undefined };

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (lessonId) {
      setIsCompleted(getCompletedLessons().has(lessonId));
    }
  }, [lessonId]);

  const handleMarkComplete = () => {
    if (lessonId) {
      markLessonComplete(lessonId);
      setIsCompleted(true);
    }
  };

  if (!lesson || !chapter) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <Layout>
      {/* Breadcrumb */}
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

      {/* Hero */}
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

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">

            {/* Main */}
            <div className="lg:col-span-2 space-y-8">

              {/* ── Video Sections (new: multiple videos with content) ── */}
              {lesson.videoSections && lesson.videoSections.length > 0 && (
                lesson.videoSections.map((section, idx) => {
                  const embedUrl = getEmbedUrl(section.url);
                  const isShort = section.url.includes("/shorts/");
                  return (
                    <div key={idx} className="space-y-6">
                      {/* Video */}
                      {isShort ? (
                        <div className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-border card-shadow">
                          <div className="relative w-full pb-[177.78%]">
                            <iframe
                              src={embedUrl}
                              title={section.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="absolute inset-0 h-full w-full"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full overflow-hidden rounded-xl border border-border card-shadow">
                          <div className="relative w-full pb-[56.25%]">
                            <iframe
                              src={embedUrl}
                              title={section.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="absolute inset-0 h-full w-full"
                            />
                          </div>
                        </div>
                      )}

                      {/* Content under video */}
                      {section.content && (
                        <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                          <div className="prose prose-sm max-w-none text-muted-foreground">
                            {renderContent(section.content)}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}

              {/* ── Single Video (old style) ── */}
              {lesson.video && !lesson.videoSections && (
                <div className="rounded-xl border border-border bg-card overflow-hidden card-shadow">
                  <iframe
                    className="w-full aspect-video"
                    src={lesson.video}
                    title={lesson.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              )}

              {/* ── Lesson Image (old style) ── */}
              {lesson.image && (
                <div className="rounded-xl border border-border bg-card overflow-hidden card-shadow">
                  <img src={lesson.image} alt={lesson.title} className="w-full object-contain" />
                  <div className="p-4 bg-secondary/30">
                    <p className="text-sm text-muted-foreground text-center">Diagram: {lesson.title}</p>
                  </div>
                </div>
              )}

              {/* ── Main Content (old style, used when no videoSections) ── */}
              {lesson.content && (
                <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                  <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">Lesson Content</h2>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {renderContent(lesson.content)}
                  </div>
                </div>
              )}

              {/* ── Activities ── */}
              <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                <div className="mb-4 flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-accent" />
                  <h2 className="font-serif text-xl font-semibold text-foreground">Activities</h2>
                </div>
                {lesson.activitiesContent ? (
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {renderContent(lesson.activitiesContent)}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {lesson.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3 rounded-lg bg-accent/5 p-4 border border-accent/20">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* ── Quiz Links (new: external buttons) ── */}
              {lesson.quizLinks && lesson.quizLinks.length > 0 && (
                <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                  <div className="mb-4 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h2 className="font-serif text-xl font-semibold text-foreground">Quizzes</h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    {lesson.quizLinks.map((quiz, index) => (
                      <a
                        key={index}
                        href={quiz.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-5 py-4 text-foreground transition-all hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-0.5"
                      >
                        <span className="font-medium">{quiz.label}</span>
                        <ExternalLink className="h-4 w-4 text-primary" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Quizzes text (old style) ── */}
              {lesson.quizzes && !lesson.quizLinks && (
                <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                  <div className="mb-4 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h2 className="font-serif text-xl font-semibold text-foreground">Quizzes</h2>
                  </div>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {renderContent(lesson.quizzes)}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 card-shadow sticky top-20">
                <div className="mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-lg font-semibold text-foreground">Key Concepts</h2>
                </div>
                <ul className="space-y-3">
                  {lesson.keyConcepts.map((concept, index) => (
                    <li key={index} className="rounded-lg bg-primary/5 p-3 text-sm text-foreground border border-primary/10">
                      {concept}
                    </li>
                  ))}
                </ul>
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

          {/* Mark as Complete */}
          <div className="mt-10 flex justify-center">
            {isCompleted ? (
              <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-4 text-primary">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">Lesson Completed!</span>
              </div>
            ) : (
              <Button
                size="lg"
                onClick={handleMarkComplete}
                className="gap-2 px-8"
              >
                <CheckCircle2 className="h-5 w-5" />
                Mark as Complete
              </Button>
            )}
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
