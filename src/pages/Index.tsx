import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBiology from "@/assets/hero-biology.jpg";
import stemSharkya from "@/assets/stem-sharkya-group.jpg";
import { chapters } from "@/data/lessons";
import { teachers } from "@/data/teachers";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={stemSharkya}
            alt="Plant cells under microscope"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-25" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Your Gateway to Mastering Biology
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              Explore the wonders of life sciences with expert educators. From cellular biology to ecology, discover engaging lessons designed to inspire your scientific curiosity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/teachers">Meet Our Teachers</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why Learn With Us?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform combines expert instruction with engaging content to make biology accessible and exciting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: "Structured Lessons",
                description: "Carefully organized curriculum with clear learning objectives and key concepts.",
                link: "/courses",
              },
              {
                icon: Users,
                title: "Expert Teachers",
                description: "Learn from experienced educators with advanced degrees in biological sciences.",
                link: "/teachers",
              },
              {
                icon: Microscope,
                title: "Hands-On Activities",
                description: "Practical experiments and activities to reinforce theoretical knowledge.",
              },
              {
                icon: Award,
                title: "Track Progress",
                description: "Monitor your learning journey with chapter-based organization.",
                link: "/courses",
              },
            ].map((feature, index) => {
              const content = (
                <>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </>
              );

              const className = "group block h-full rounded-xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1";

              if (feature.link) {
                return (
                  <Link
                    key={index}
                    to={feature.link}
                    className={className}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={index}
                  className={className}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Featured Chapters
              </h2>
              <p className="text-muted-foreground">
                Explore our comprehensive biology curriculum
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {chapters.slice(0, 4).map((chapter, index) => (
              <Link
                key={chapter.id}
                to={`/courses/${chapter.id}`}
                className="group rounded-xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 font-serif text-xl font-semibold text-foreground group-hover:text-primary">
                      {chapter.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Meet Our Educators
              </h2>
              <p className="text-muted-foreground">
                Learn from experienced biology professionals
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/teachers">
                View All Teachers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teachers.map((teacher, index) => (
              <Link
                key={teacher.id}
                to={`/teachers/${teacher.id}`}
                className="group rounded-xl border border-border bg-card overflow-hidden card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-serif text-lg font-semibold text-foreground group-hover:text-primary">
                    {teacher.name}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">{teacher.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.slice(0, 2).map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
            Join thousands of students exploring the fascinating world of biology. Start your journey today!
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/courses">
              Browse All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
