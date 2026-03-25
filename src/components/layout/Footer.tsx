import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-serif text-xl font-bold text-foreground">
                Biology Originators
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your gateway to mastering Biology. Learn from the best educators and explore the wonders of life sciences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Teachers", "Courses", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-foreground">Courses</h4>
            <ul className="space-y-2">
              {["Plant Biology", "Cell Biology", "Genetics", "Ecology", "Human Anatomy"].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contact@biologyoriginators.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                (+20) 1205737666
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                Faculty of Education – Zagazig University, Zagazig, Ash Sharqia, Egypt
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Biology Originators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
