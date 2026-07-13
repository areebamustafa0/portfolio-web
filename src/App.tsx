import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Inline social icons to avoid naming mismatches
const Linkedin = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Github = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const projects = [
  {
    number: "01",
    name: "Petpedia Pearl",
    description: "Pet Management Platform",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/petpedia.webp",
    demo: "https://petpedia-pearl.vercel.app/",
  },
  {
    number: "02",
    name: "Productivity Hub",
    description: "Task Management System",
    tech: ["React", "Node.js", "Tailwind CSS"],
    image: "/projects/productivity.webp",
    demo: "https://productivityhub-neon.vercel.app/",
  },
  {
    number: "03",
    name: "Lingua Learn Hub",
    description: "Language Learning Platform",
    tech: ["React", "Express.js", "MongoDB"],
    image: "/projects/lingua.webp",
    demo: "https://lingua-learn-hub.vercel.app/",
  },
  {
    number: "04",
    name: "Smart Games Suite Pro",
    description: "Interactive Browser Games",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: "/projects/games.webp",
    demo: "https://smart-games-suite-pro.vercel.app/",
  },
  {
    number: "05",
    name: "Multimodal Sentiment Analysis",
    description: "AI Emotion Detection Platform",
    tech: ["Python", "FastAPI", "Machine Learning"],
    image: "/projects/sentiment.webp",
    demo: "#",
    unavailable: true,
  },
];

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  Small UI primitives                                                       */
/* -------------------------------------------------------------------------- */

function Logo() {
  return (
    <a
      href="#home"
      aria-label="Areeba Mustafa — Home"
      className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#500e61] shadow-[0_8px_16px_-4px_rgba(80,14,97,0.4)]">
        <span className="font-serif text-xl font-bold italic text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>AM</span>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="truncate font-serif text-lg font-bold tracking-tight text-[#500e61]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Areeba Mustafa
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#9c78b0]">
          Full Stack Developer
        </span>
      </div>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-primary">
      <span>{children}</span>
      <Sparkles className="h-3.5 w-3.5 text-light-purple" />
    </div>
  );
}

function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full bg-[#500e61] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_20px_-5px_rgba(80,14,97,0.3)] transition-all duration-500 ease-out hover:bg-[#4e0a73] hover:shadow-[0_15px_25px_-5px_rgba(80,14,97,0.4)] hover:-translate-y-0.5 ${className}`;
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  href,
  onClick,
  download,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full border border-[#9c78b0]/30 bg-white px-8 py-4 text-[15px] font-semibold text-[#500e61] transition-all duration-500 ease-out hover:border-[#500e61] hover:bg-[#f8f4ff] hover:-translate-y-0.5 ${className}`;
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" download={download} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = "home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section && section.offsetTop <= scrollPosition) {
          current = link.href.replace("#", "");
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
        current = "contact";
      }

      setScrolled(window.scrollY > 20);
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled
            ? "rounded-[20px] border border-[#f0e6f5] bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(80,14,97,0.08)] py-3 px-6"
            : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative text-[16px] font-medium transition-colors duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary"
                      : "text-text-secondary hover:text-text"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <span className="absolute -bottom-1.5 left-0 right-0 mx-auto h-[3px] w-5 rounded-full bg-gradient-to-r from-primary to-light-purple" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          

          <div className="hidden md:block">
          <SecondaryButton
            href="https://www.linkedin.com/in/areeba-mustafa-42a50a376/"
            className="px-5 py-2.5 text-[14px]"
           >
           Let's Connect
          </SecondaryButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 bg-text transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-text transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-text transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 rounded-2xl border border-border bg-white p-6 shadow-lg">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-[16px] font-medium transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "text-primary"
                        : "text-text-secondary hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <SecondaryButton href="/resume.pdf" className="w-full" download>
                  <Download className="h-4 w-4" /> Resume
                </SecondaryButton>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section
    
       id="home"
       className="relative min-h-[90vh] flex items-center overflow-x-clip pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,79,201,0.08),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(235,138,227,0.08),transparent_40%)] pointer-events-none" />
      {/* Decorative background blobs */}
      <div className="absolute -left-40 top-40 hidden h-80 w-80 rounded-full bg-gradient-to-br from-light-purple to-primary/20 blur-3xl opacity-70 lg:block" />
      <div className="absolute -right-40 -top-20 hidden h-96 w-96 rounded-full bg-gradient-to-br from-lavender to-light-purple/50 blur-3xl opacity-60 lg:block" />
      <div className="absolute bottom-10 right-10 hidden h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl lg:block" />

      {/* Decorative dots (top right) */}
        <div className="absolute right-10 top-32 hidden lg:grid grid-cols-5 gap-1.5 opacity-40">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="block h-1 w-1 rounded-full bg-primary/30" />
        ))}
      </div>

      {/* Decorative dots (top left) */}
      <div className="absolute left-10 top-40 hidden lg:grid grid-cols-4 gap-1.5 opacity-40">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="block h-1.5 w-1.5 rounded-full bg-primary/20" />
        ))}
      </div>
    

      {/* Sparkles */}
      <Sparkles className="absolute right-[32%] top-[22%] h-5 w-5 text-primary/50 sparkle hidden lg:block" />
      <Sparkles className="absolute right-[22%] top-[30%] h-4 w-4 text-light-purple/80 sparkle sparkle-delay-1 hidden lg:block" />
      <Sparkles className="absolute left-[32%] top-[28%] h-3 w-3 text-primary/60 sparkle sparkle-delay-2 hidden lg:block" />
      <Sparkles className="absolute left-[32%] bottom-[24%] h-4 w-4 text-light-purple/70 sparkle sparkle-delay-3 hidden lg:block" />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Left */}
        <div className="order-2 lg:order-1">
          <SectionLabel>Hello, I'm</SectionLabel>
          <h1
            className="mt-5 font-serif font-semibold leading-[0.95] tracking-tight text-text"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(48px, 8vw, 88px)",
              lineHeight: 1.02,
            }}
          >
            Areeba
            <br />
            <span className="bg-gradient-to-r from-[#B54FC9] via-[#D98BEA] to-[#EB8AE3] bg-clip-text text-transparent italic">
              Mustafa
            </span>
          </h1>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#9c78b0]/20 bg-white/70 px-4 py-1.5 text-[13px] font-bold text-[#500e61] shadow-[0_8px_20px_-10px_rgba(80,14,97,0.2)] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#eb8ae3] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ab48c2]" />
            </span>
            Full Stack Developer
          </div>

          <p
            className="mt-6 max-w-xl text-[17px] leading-[1.7] text-text-secondary"
            style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
          >
            Full Stack Developer crafting clean, elegant and responsive web
            experiences with modern technologies — from thoughtful interfaces to
            reliable APIs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href="#projects">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton href="/resume.pdf" download>
              <Download className="h-4 w-4" />
              Resume
            </SecondaryButton>
          </div>
        </div>

        {/* Right - portrait */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className=" relative float h-[320px] w-[320px] md:h-[380px] md:w-[380px] lg:h-[520px] lg:w-[520px] flex items-center justify-center "
>
            {/* Gradient circle behind */}
            <div className="absolute inset-0 m-auto
                             h-[310px] w-[310px]
                             md:h-[380px] md:w-[380px]
                             lg:h-[500px] lg:w-[500px]
                             rounded-full
                             bg-[radial-gradient(circle_at_center,#ffffff_0%,#fdf7ff_35%,#eddcff_70%,#d6b2ff_100%)]
                             shadow-[0_0_120px_rgba(181,79,201,0.35)]" />
            {/* Thin ring */}
            <div className="absolute inset-0 m-auto h-[460px] w-[460px] lg:h-[540px] lg:w-[540px] rounded-full border border-primary/15" />
            <div className="absolute inset-0 m-auto h-[500px] w-[500px] lg:h-[580px] lg:w-[580px] rounded-full border border-dashed border-primary/10" />

            {/* Floral decorative branch */}
            <svg
              className="absolute -right-8 -bottom-6 h-40 w-40 text-primary/30 hidden lg:block"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M100 200 C 100 160, 140 140, 160 100" strokeLinecap="round" />
              <path d="M160 100 C 140 100, 130 80, 140 60" strokeLinecap="round" />
              <path d="M160 100 C 170 90, 185 100, 185 85" strokeLinecap="round" />
              <path d="M100 200 C 100 170, 80 160, 60 140" strokeLinecap="round" opacity="0.7" />
              {/* Flowers */}
              <circle cx="140" cy="60" r="10" fill="currentColor" opacity="0.7" />
              <circle cx="185" cy="85" r="8" fill="currentColor" opacity="0.6" />
              <circle cx="60" cy="140" r="7" fill="currentColor" opacity="0.5" />
              <circle cx="130" cy="120" r="5" fill="currentColor" opacity="0.4" />
              {/* Leaves */}
              <ellipse cx="125" cy="150" rx="8" ry="4" fill="currentColor" opacity="0.3" transform="rotate(-30 125 150)" />
              <ellipse cx="165" cy="130" rx="10" ry="5" fill="currentColor" opacity="0.3" transform="rotate(20 165 130)" />
            </svg>

            {/* Image */}
            <div className="absolute h-[470px] w-[470px] rounded-full bg-[#eb8ae3]/20 blur-[90px] -translate-y-2" />
            <div className="relative -translate-x-5 h-[380px] w-[380px] lg:h-[460px] lg:w-[460px] overflow-hidden rounded-full border-[3px] border-white shadow-[0_20px_60px_-15px_rgba(139,92,246,0.35)]">
              <img
                src="/images/hero-portrait.webp"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                alt="Areeba Mustafa"
                className="h-full w-full object-cover object-[42%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-white/25 pointer-events-none" />
            </div>

            {/* Curved arrow pointing down */}
            <svg
              className="absolute -left-3 bottom-4 h-12 w-12 text-primary/50 hidden xl:block"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M20 70 Q 60 90, 80 40"
                strokeLinecap="round"
              />
              <path d="M72 40 L 80 40 L 82 50" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

function Projects() {
  return (
    <section id="projects" className="relative py-16 lg:py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Featured Projects</SectionLabel>
            <h2
              className="mt-4 font-serif font-medium text-text"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(34px, 4.5vw, 52px)",
                lineHeight: 1.1,
              }}
            >
              Things I've <span className="italic text-primary">Built</span>
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-primary to-light-purple" />
            <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-text-secondary">
              A small selection of full-stack projects — each built end-to-end
              with modern tooling and shipped with care.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-white px-4 py-2 text-[12.5px] font-medium text-text-secondary shadow-[0_10px_28px_-20px_rgba(139,92,246,0.5)] md:self-end">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-light-purple" />
            {projects.length} featured projects
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article
      className="group relative rounded-[30px] border border-[#f0e6f5] bg-white p-8 md:p-10 shadow-[0_4px_24px_-8px_rgba(80,14,97,0.06)] transition-all duration-500 hover:shadow-[0_30px_70px_-12px_rgba(181,79,201,0.22)] hover:border-[#ab48c2]/30"
    >
      <div className="grid xl:grid-cols-[auto_1fr_auto] gap-8 lg:gap-10 items-center">
        {/* Number */}
        <div className="flex lg:flex-col items-center lg:items-start gap-4">
          <span
            className="font-serif font-medium text-primary/50 group-hover:text-primary/60 transition-colors duration-500"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1,
            }}
          >
            {project.number}
          </span>
        </div>

        {/* Screenshot */}
        <div className="overflow-hidden rounded-2xl border border-border bg-lavender/20 group-hover:border-primary/20 transition-all duration-500">
          <div className="aspect-video overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* Info + Button */}
        <div className="flex flex-col gap-5 lg:min-w-[240px] items-start">
          <div>
            <h3
              className="font-serif font-medium text-text group-hover:text-primary transition-colors duration-300"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 2.5vw, 32px)",
                lineHeight: 1.2,
              }}
            >
              {project.name}
            </h3>
            <p className="mt-1.5 text-[15px] text-text-secondary">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-lavender/60 px-3 py-1 text-[12px] font-medium text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.unavailable ? (
            <button
              disabled
              className="inline-flex items-center gap-2 rounded-full border border-dashed border-primary/30 bg-white px-5 py-2.5 text-[14px] font-medium text-text-secondary cursor-not-allowed"
            >
              <span className="text-[13px]">Demo Unavailable</span>
            </button>
          ) : (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-5 py-2.5 text-[14px] font-medium text-primary transition-all duration-500 ease-out hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_6px_20px_-6px_rgba(139,92,246,0.5)]"
            >
              Live Demo
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

function AboutSection() {
  return (
    <section id="about" className="relative py-16 lg:py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-center rounded-[36px] border border-border bg-white p-8 md:p-12 lg:p-16 shadow-[0_2px_30px_-12px_rgba(139,92,246,0.1)]">
          <div className="relative flex justify-center">
          <div className="absolute inset-0 m-auto h-[300px] w-[300px] md:h-[360px] md:w-[360px] lg:h-[340px] lg:w-[340px] rounded-full bg-gradient-to-br from-lavender via-light-purple to-primary/30 blur-sm" />
            <div className="relative h-[220px] w-[220px]
                               sm:h-[260px] sm:w-[260px]
                               md:h-[300px] md:w-[300px]
                               lg:h-[320px] lg:w-[320px]
            overflow-hidden rounded-full border-[4px] border-white shadow-[0_18px_42px_-18px_rgba(139,92,246,0.34)] ">
              <img
                src="/images/about-portrait.webp"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                alt="Areeba Mustafa"
                className="h-full w-full object-cover"
              />
            </div>
            <svg
              className="absolute -bottom-4 left-6 h-20 w-20 text-primary/25 hidden lg:block"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path d="M60 118 Q 52 78, 18 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M60 118 Q 72 82, 104 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
              <circle cx="18" cy="58" r="11" fill="currentColor" opacity="0.45" />
              <circle cx="104" cy="58" r="9" fill="currentColor" opacity="0.35" />
              <ellipse cx="46" cy="84" rx="12" ry="6" fill="currentColor" opacity="0.28" transform="rotate(-25 46 84)" />
            </svg>
          </div>

          <div>
            <SectionLabel>About Me</SectionLabel>
            <h2
              className="mt-4 font-serif font-medium text-text leading-[1.05]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 5vw, 58px)",
              }}
            >
              A little bit
              <br />
              about <span className="italic text-primary">me</span>
              <svg className="ml-3 inline h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.8 4.6c-1.8-1.8-4.7-1.7-6.4.2L12 7.3 9.6 4.8C7.9 2.9 5 2.8 3.2 4.6 1.3 6.5 1.4 9.6 3.5 11.4L12 19l8.5-7.6c2.1-1.8 2.2-4.9.3-6.8Z" />
              </svg>
            </h2>

            <p className="mt-8 max-w-xl text-[16px] md:text-[18px] leading-[1.85] text-text-secondary">
              I'm a Full Stack Developer and BS Computer Science student at the
              University of the Punjab. I love turning ideas into elegant,
              responsive web applications — from thoughtful interfaces to reliable
              backends and everything in between.
            </p>

            <div className="mt-8">
              <SecondaryButton href="/resume.pdf" className="px-5 py-2.5 text-[14px]" download>
                <Download className="h-4 w-4" />
                Download Resume
              </SecondaryButton>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <InfoCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                }
                title="Education"
                lines={["University of the Punjab", "BS Computer Science"]}
              />
              <InfoCard
                icon={<MapPin className="h-5 w-5" />}
                title="Location"
                lines={["Lahore,", "Punjab, Pakistan"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tech Stack                                                                */
/* -------------------------------------------------------------------------- */

function TechStackSection() {
  return (
    <section id="stack" className="relative py-16 lg:py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Tech Stack</SectionLabel>
          <h2
            className="mt-4 font-serif font-medium text-text leading-[1.06]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 5vw, 58px)",
            }}
          >
            Technologies I <span className="italic text-primary">Use</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.75] text-text-secondary">
            A focused set of tools for building polished, responsive and scalable web experiences.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {techStack.map((tech) => (
            <TechCard key={tech} name={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="group rounded-2xl border border-border bg-bg/50 p-5 transition-all duration-500 ease-out hover:border-primary/20 hover:bg-lavender/30 hover:shadow-[0_6px_20px_-10px_rgba(139,92,246,0.25)]">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lavender to-light-purple text-primary">
          {icon}
        </div>
        <div>
          <p className="text-[12px] font-medium uppercase tracking-wider text-text-secondary mb-1">
            {title}
          </p>
          {lines.map((line, i) => (
            <p key={i} className="text-[14px] font-medium text-text leading-[1.4]">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// Official brand colors for authentic tech logo look
const techLogos: Record<string, { Icon: IconType; shade: string }> = {
  React:         { Icon: SiReact,       shade: "#61DAFB" },
  "Next.js":     { Icon: SiNextdotjs,   shade: "#000000" },
  "Node.js":     { Icon: SiNodedotjs,   shade: "#5FA04E" },
  "Express.js":  { Icon: SiExpress,     shade: "#000000" },
  "Tailwind CSS":{ Icon: SiTailwindcss, shade: "#38BDF8" },
  JavaScript:    { Icon: SiJavascript,  shade: "#F7DF1E" },
  TypeScript:    { Icon: SiTypescript,  shade: "#3178C6" },
  Python:        { Icon: SiPython,      shade: "#3776AB" },
  PostgreSQL:    { Icon: SiPostgresql,  shade: "#336791" },
  MongoDB:       { Icon: SiMongodb,     shade: "#47A248" },
  Git:           { Icon: SiGit,         shade: "#F05032" },
  GitHub:        { Icon: SiGithub,      shade: "#181717" },
  "VS Code":     { Icon: VscVscode,     shade: "#007ACC" },
  Postman:       { Icon: SiPostman,     shade: "#FF6C37" },
};

function TechCard({ name }: { name: string }) {
  const tech = techLogos[name];
  const Icon = tech.Icon;
  return (
    <div className="group relative flex min-h-[150px] flex-col items-center justify-center gap-3 rounded-[16px] border border-[#f0e6f5] bg-white px-3 py-5 transition-all duration-500 cursor-default hover:border-[#ab48c2]/30 hover:shadow-[0_12px_24px_-10px_rgba(80,14,97,0.15)] hover:-translate-y-1.5">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#fcf9ff] border border-[#f0e6f5] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md">
        <Icon
          aria-hidden="true"
          className="h-8 w-8 transition-colors duration-500"
          style={{ color: tech.shade }}
        />
      </div>
      <span className="text-[12px] font-bold text-[#500e61]/80 transition-colors duration-300 text-center tracking-tight group-hover:text-[#500e61]">
        {name}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative py-16 lg:py-28 px-6 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] border border-border bg-gradient-to-br from-white via-lavender/30 to-light-purple/20 p-12 md:p-20 shadow-[0_2px_30px_-10px_rgba(139,92,246,0.12)]">
          {/* Decorative florals */}
          <svg
            className="absolute right-6 bottom-4 h-36 w-36 text-primary/25 hidden md:block"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="140" cy="60" r="22" fill="currentColor" opacity="0.55" />
            <circle cx="100" cy="100" r="18" fill="currentColor" opacity="0.4" />
            <circle cx="165" cy="110" r="16" fill="currentColor" opacity="0.45" />
            <path
              d="M140 82 Q 130 130, 90 170 M100 118 Q 120 150, 135 170 M165 126 Q 160 155, 150 175"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.6"
            />
            <ellipse cx="115" cy="125" rx="12" ry="6" fill="currentColor" opacity="0.3" transform="rotate(-30 115 125)" />
            <ellipse cx="155" cy="100" rx="14" ry="7" fill="currentColor" opacity="0.25" transform="rotate(25 155 100)" />
          </svg>

          {/* Sparkles */}
          <Sparkles className="absolute right-20 top-10 h-5 w-5 text-primary/30 sparkle" />
          <Sparkles className="absolute left-[40%] bottom-10 h-4 w-4 text-light-purple/70 sparkle sparkle-delay-2" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Let's Connect</SectionLabel>
              <h2
                className="mt-4 font-serif font-medium text-text leading-[1.08]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(34px, 4.5vw, 56px)",
                }}
              >
                Let's create
                <br />
                something <span className="italic text-primary">amazing</span>!
                <span className="inline-block ml-2 text-primary">♡</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="areebamustafa82@gmail.com"
                href="mailto:areebamustafa82@gmail.com"
              />
              <ContactItem
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
                value="linkedin.com/in/areeba-mustafa-42a50a376"
                href="https://www.linkedin.com/in/areeba-mustafa-42a50a376/"
              />
              <ContactItem
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
                value="github.com/areebamustafa0"
                href="https://github.com/areebamustafa0"
              />
              <ContactItem
                icon={<MapPin className="h-5 w-5" />}
                label="Location"
                value="Lahore, Punjab, Pakistan"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-white/80 backdrop-blur-sm p-4 transition-all duration-500 ease-out hover:border-primary/25 hover:bg-white hover:shadow-[0_8px_24px_-12px_rgba(139,92,246,0.3)] hover:-translate-y-0.5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lavender to-light-purple text-primary transition-colors duration-300 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-secondary">
          {label}
        </p>
        <p className="text-[14px] md:text-[15px] font-medium text-text break-all">
          {value}
        </p>
      </div>
      {href && (
        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-primary/50 transition-all duration-500 ease-out group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </div>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="px-6 pb-8">
      <div className="mx-auto max-w-7xl rounded-[40px] border border-[#f0e6f5] bg-white shadow-[0_-8px_40px_-20px_rgba(80,14,97,0.12)]">
        {/* Top row */}
        <div className="grid gap-10 border-b border-[#f0e6f5] px-8 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-14">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[14px] leading-[1.75] text-[#6b5376]">
              Full Stack Developer crafting elegant, modern and thoughtful web
              experiences from Lahore, Pakistan.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:areebamustafa82@gmail.com"
                aria-label="Email"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#f0e6f5] bg-white text-[#6b5376] transition-all duration-500 ease-out hover:border-[#500e61]/30 hover:text-[#500e61] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(80,14,97,0.2)]"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/areeba-mustafa-42a50a376/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#f0e6f5] bg-white text-[#6b5376] transition-all duration-500 ease-out hover:border-[#500e61]/30 hover:text-[#500e61] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(80,14,97,0.2)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/areebamustafa0"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#f0e6f5] bg-white text-[#6b5376] transition-all duration-500 ease-out hover:border-[#500e61]/30 hover:text-[#500e61] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(80,14,97,0.2)]"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[14px] text-text-secondary transition-colors hover:text-primary"
                  >
                    <span className="h-px w-3 bg-text-secondary/40 transition-all duration-500 ease-out group-hover:w-5 group-hover:bg-primary" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              Get in Touch
            </p>
            <ul className="mt-5 space-y-3 text-[14px] text-text-secondary">
              <li>
                <a
                  href="mailto:areebamustafa82@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  areebamustafa82@gmail.com
                </a>
              </li>
              <li>Lahore, Punjab, Pakistan</li>
              <li>
                <a
                  href="#contact"
                  className="mt-1 inline-flex items-center gap-1.5 font-medium text-primary transition-all hover:gap-2.5"
                >
                  Let's work together
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 px-8 py-6 md:flex-row md:px-14">
          <p className="text-[12.5px] text-text-secondary">
            © 2026 Areeba Mustafa. All Rights Reserved.
          </p>
          <p className="text-[12.5px] text-text-secondary">
            Designed &amp; Developed with{" "}
            <span className="text-primary">♡</span> by{" "}
            <span className="font-medium text-primary">Areeba Mustafa</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scroll to top                                                             */
/* -------------------------------------------------------------------------- */

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_24px_-8px_rgba(139,92,246,0.5)] transition-all duration-500 ease-out hover:bg-primary-dark hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  App                                                                       */
/* -------------------------------------------------------------------------- */

export default function App() {
  return (
    <div className="relative min-h-[90vh] bg-bg font-sans text-text overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <AboutSection />
        <TechStackSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}