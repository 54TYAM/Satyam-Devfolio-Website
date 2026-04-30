"use client";

import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Bot,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Rocket,
  Sparkles,
  SunMedium,
  TerminalSquare,
} from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    name: 'Online Health Record Management System',
    tag: 'MERN Stack',
    description:
      'Secure medical records platform designed to store, manage, and access patient data in one place.',
    impact: 'Healthcare workflow automation, centralized records, cleaner user access patterns.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    href: 'https://github.com/54TYAM/Online-Health-Record-Management-System',
  },
  {
    name: 'ResumeCraft - Digital Resume Builder',
    tag: 'Productivity Tool',
    description:
      'A resume builder that helps users create professional resumes quickly with configurable templates.',
    impact: 'Template-driven UX, export flow, and polished document generation experience.',
    stack: ['PHP', 'JavaScript', 'UI Design'],
    href: 'https://github.com/54TYAM/Digital-Resume-Builder',
  },
  {
    name: 'InfoPulse AI Tech News Aggregator',
    tag: 'AI / Python',
    description:
      'Chatbot-powered tech news aggregator that collects, summarizes, and delivers trends in real time.',
    impact: 'Conversational information delivery with a clear use case for AI-assisted discovery.',
    stack: ['Python', 'AI Chatbot', 'Automation'],
    href: 'https://github.com/54TYAM/InfoPulse-AI-Tech-News-Aggregator-Chatbot',
  },
  {
    name: 'Plant-a-Tree Sustainable Gardening AI Chatbot',
    tag: 'AI Assistant',
    description:
      'Gardening assistant built with Gemini API to help users grow sustainable gardens with practical tips.',
    impact: 'Environment-focused assistant design with conversational guidance and utility.',
    stack: ['Gemini API', 'HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/54TYAM/Plant-a-Tree-Sustainable-Gardening-AI-Chatbot',
  },
];

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'Python',
  'CPP',
  'GitHub Actions',
  'Cloud Computing',
];

const highlights = [
  'Computer Science student at Lovely Professional University',
  'Open to internships and project collaborations',
  'Building AI-flavored, practical products with a backend mindset',
  'GitHub profile shows active recent project work and first PR experience',
];

const terminalLines = [
  { command: 'whoami', output: 'satyam-yadav | developer | builder | systems thinker' },
  { command: 'skills', output: 'MERN, JavaScript, TypeScript, Python, CPP, Git, AI workflows' },
  { command: 'projects', output: 'Health records, resume builder, AI news, gardening assistant' },
  { command: 'resume', output: 'Available on request - add your PDF in /public and wire the button' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/54TYAM',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/5atyam',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:sy415801@gmail.com',
    icon: Mail,
  },
];

const rotatingRoles = ['AI builder', 'MERN developer', 'backend-first problem solver', 'internship-ready engineer'];

const featureStats = [
  { label: 'Featured projects', value: '4' },
  { label: 'Primary stack', value: 'MERN + AI' },
  { label: 'Open for', value: 'Internships' },
];

function TypewriterLine() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const activeRole = rotatingRoles[roleIndex];
    let charIndex = 0;

    const interval = window.setInterval(() => {
      charIndex += 1;
      setText(activeRole.slice(0, charIndex));

      if (charIndex >= activeRole.length) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          setRoleIndex((current) => (current + 1) % rotatingRoles.length);
          setText('');
        }, 1100);
      }
    }, 65);

    return () => window.clearInterval(interval);
  }, [roleIndex]);

  return (
    <p className="mt-4 text-sm font-medium text-sky-200 sm:text-base">
      Currently shaping this portfolio as a <span className="text-white">{text}</span>
      <span className="animate-pulse text-sky-300">|</span>
    </p>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}

function GlassCard({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`glass rounded-3xl ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showTopButton, setShowTopButton] = useState(false);
  const [cursorPoint, setCursorPoint] = useState({ x: 0, y: 0 });
  const [clockTime, setClockTime] = useState<Date | null>(null);
  const [trailDots, setTrailDots] = useState<Array<{ id: number; x: number; y: number; size: number; hue: number }>>(
    []
  );
  const spotlightProject = projects[spotlightIndex];

  useEffect(() => {
    document.body.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    setClockTime(new Date());

    const timer = window.setInterval(() => {
      setClockTime(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 600);
    };

    const handlePointerMove = (event: MouseEvent) => {
      const nextPoint = { x: event.clientX, y: event.clientY };
      setCursorPoint(nextPoint);
      setTrailDots((current) => [
        ...current.slice(-7),
        {
          id: Date.now() + Math.random(),
          x: nextPoint.x,
          y: nextPoint.y,
          size: 22 + Math.random() * 42,
          hue: Math.floor(Math.random() * 360),
        },
      ]);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  return (
    <main className="noise relative overflow-hidden text-white">
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
        style={{ scaleX }}
      />
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        <motion.div
          className="absolute h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
          animate={{ x: [cursorPoint.x - 140, cursorPoint.x - 100], y: [cursorPoint.y - 140, cursorPoint.y - 100] }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
        <AnimatePresence>
          {trailDots.map((dot) => (
            <motion.div
              key={dot.id}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: [0.85, 0.45, 0], scale: 1 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute rounded-full blur-2xl mix-blend-screen"
              style={{
                left: dot.x - dot.size / 2,
                top: dot.y - dot.size / 2,
                width: dot.size,
                height: dot.size,
                background: `hsla(${dot.hue}, 95%, 68%, 0.55)`,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-aurora-glow opacity-80" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-24 h-24 w-24 rounded-full border border-sky-300/20 bg-sky-400/10"
        animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[28rem] h-32 w-32 rounded-full border border-white/10 bg-white/5"
        animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="nav-glass sticky top-4 z-40 flex items-center justify-between rounded-full px-4 py-3">
          <div>
            <p className="text-sm font-semibold tracking-[0.35em] text-sky-300 theme-accent">54TYAM</p>
            <p className="text-xs text-slate-400 theme-muted">Portfolio / Systems / AI Projects</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 theme-secondary md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 theme-contrast"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              href="mailto:sy415801@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Hire me <Menu className="h-4 w-4 md:hidden" />
            </Link>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
              <Sparkles className="h-4 w-4" />
              Open to internships, freelance work, and ambitious builds
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Satyam Yadav builds <span className="text-gradient">developer-first</span> products with AI and backend depth.
            </h1>
            <TypewriterLine />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m a Computer Science student focused on MERN, JavaScript, Python, and practical systems. This portfolio
              is shaped around the projects on my GitHub profile, with a clean dark interface, motion, and room to grow.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {featureStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 * index }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-200/70">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                View projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:sy415801@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact me <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/54TYAM"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-400/15"
              >
                GitHub profile <Github className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/35 hover:bg-sky-400/10"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.12 }}
            className="grid gap-4"
          >
            <GlassCard className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Profile signal</p>
                  <p className="mt-1 text-xl font-semibold">Project-driven, active, internship-ready</p>
                </div>
                <BadgeCheck className="h-7 w-7 text-sky-300" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-200/70">Focus</p>
                  <p className="mt-2 font-medium">AI + backend systems</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-200/70">Stack</p>
                  <p className="mt-2 font-medium">MERN, Python, CPP</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-200/70">LinkedIn</p>
                  <p className="mt-2 font-medium">5atyam</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-200/70">Email</p>
                  <p className="mt-2 font-medium">sy415801@gmail.com</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300">
                  <TerminalSquare className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Terminal preview</p>
                  <p className="font-medium">A small interactive-feel section for your Linux/backend vibe</p>
                </div>
              </div>
              <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-sm text-slate-300">
                {terminalLines.map((line) => (
                  <div key={line.command} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                    <span className="text-sky-300">$ {line.command}</span>
                    <span>{line.output}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <section id="about" className="py-6 sm:py-10">
          <SectionTitle
            eyebrow="About"
            title="A simple, recruiter-friendly story with room for future features."
            description="This version keeps the layout focused on your strongest signals: active projects, an AI/software profile, and clean communication. It can later expand into a blog, contact form, or dashboard without changing the visual language."
          />
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <GlassCard className="p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-200/70">Highlights</p>
              <div className="mt-5 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-slate-200">
                    <Rocket className="mt-0.5 h-4 w-4 text-sky-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-200/70">Skills</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="projects" className="py-16 sm:py-20">
          <SectionTitle
            eyebrow="Projects"
            title="The strongest part of the portfolio is your work."
            description="These cards are built to showcase what you actually shipped: architecture, impact, stack, and a direct path to the repo."
          />
          <div className="mb-6 flex flex-wrap gap-2">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                onClick={() => setSpotlightIndex(index)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  spotlightIndex === index
                    ? 'border-sky-300/40 bg-sky-400/15 text-white'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {project.tag}
              </button>
            ))}
          </div>

          <GlassCard className="mb-6 overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative bg-gradient-to-br from-sky-400/15 via-white/5 to-transparent p-6 lg:p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-200/70">Featured spotlight</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={spotlightProject.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{spotlightProject.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{spotlightProject.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {spotlightProject.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={spotlightProject.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Open repo <Github className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSpotlightIndex((current) => (current + 1) % projects.length)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Next project <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="grid gap-px bg-white/6 p-px lg:grid-cols-2">
                <div className="bg-[#0a1020] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Impact</p>
                  <p className="mt-3 text-lg leading-8 text-white">{spotlightProject.impact}</p>
                </div>
                <div className="bg-[#0a1020] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Why it stands out</p>
                  <p className="mt-3 text-lg leading-8 text-white">
                    This project demonstrates the mix recruiters care about: product sense, implementation discipline,
                    and enough technical depth to talk architecture.
                  </p>
                </div>
                <div className="bg-[#0a1020] p-6 lg:col-span-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Quick notes</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">Clean repo structure</div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">AI / backend narrative</div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">Demo-friendly presentation</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="h-full p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-sky-200/70">{project.tag}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                    </div>
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-sky-400/10"
                    >
                      GitHub <Github className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                  <p className="mt-4 rounded-2xl border border-sky-400/15 bg-sky-400/8 p-4 text-sm text-slate-200">
                    {project.impact}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <GlassCard className="p-6">
            <SectionTitle
              eyebrow="AI Assistant"
              title="A recruiter-facing chatbot concept fits your profile well."
              description="A future version can answer questions about your skills, projects, and resume. For now, this section presents the idea cleanly so you can extend it later with a real backend or static knowledge base."
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-100">
              <Bot className="h-4 w-4" /> Ask about Satyam
            </div>
            <motion.div
              className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="font-mono text-sm text-slate-300">
                &gt; Ask about skills, projects, achievements, or what role fits best.
              </p>
            </motion.div>
          </GlassCard>

          <GlassCard id="contact" className="p-6">
            <SectionTitle
              eyebrow="Contact"
              title="Keep this part simple and direct."
              description="The best early portfolio CTA is frictionless contact through email and LinkedIn. Replace the resume button with your PDF once it is ready."
            />
            <div className="space-y-3 text-sm text-slate-200">
              <Link href="mailto:sy415801@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <Mail className="h-4 w-4 text-sky-300" /> sy415801@gmail.com
              </Link>
              <Link href="https://www.linkedin.com/in/5atyam" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <Linkedin className="h-4 w-4 text-sky-300" /> linkedin.com/in/5atyam
              </Link>
              <Link href="https://github.com/54TYAM" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <Github className="h-4 w-4 text-sky-300" /> github.com/54TYAM
              </Link>
            </div>
          </GlassCard>
        </section>
      </div>

      <div className="pointer-events-none fixed bottom-6 left-6 z-50 rounded-2xl border border-white/10 bg-black/35 px-4 py-2 font-mono text-sm tracking-[0.12em] text-sky-100 backdrop-blur-md theme-clock">
        {clockTime
          ? clockTime.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            })
          : '--:--:--'}
      </div>

      <AnimatePresence>
        {showTopButton ? (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur-md transition hover:bg-sky-400/20"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
