import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, GraduationCap, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { teachers, Teacher } from "@/data/teachers";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TeacherCard = ({ teacher, onClick }: { teacher: Teacher; onClick: () => void }) => {
  return (
    <div
      className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="h-full w-full object-fit transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-1 font-serif text-xl font-semibold text-foreground group-hover:text-primary">
          {teacher.name}
        </h3>
        {/* <p className="mb-3 text-sm text-muted-foreground">{teacher.title}</p> */}
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{teacher.bio}</p>
        <div className="flex flex-wrap gap-2">
          {teacher.subjects.map((subject) => (
            <span
              key={subject}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeacherModal = ({
  teacher,
  isOpen,
  onClose,
}: {
  teacher: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!teacher) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">{teacher.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:w-1/3">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full rounded-lg object-contian aspect-square"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-1 font-serif text-2xl font-bold text-foreground">
              {teacher.name}
            </h2>
            {/* <p className="mb-4 text-primary">{teacher.title}</p> */}
            <p className="mb-6 text-muted-foreground">{teacher.bio}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Faculty of Education – Zagazig University, Zagazig, Ash Sharqia, Egypt</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${teacher.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {teacher.email}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-2 font-semibold text-foreground">Subjects</h4>
              <div className="flex flex-wrap gap-2">
                {teacher.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Our Educators
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Learn from passionate biology experts who bring years of research and teaching experience to every lesson.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                onClick={() => setSelectedTeacher(teacher)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Interested in Teaching With Us?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            We're always looking for passionate educators to join our team. Share your knowledge and inspire the next generation of biologists.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <TeacherModal
        teacher={selectedTeacher}
        isOpen={!!selectedTeacher}
        onClose={() => setSelectedTeacher(null)}
      />
    </Layout>
  );
};

export default Teachers;
