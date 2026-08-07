import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaLaptopCode, FaServer, FaDatabase, FaCode, FaCogs, FaArrowRight, FaGraduationCap, FaCertificate } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#0B2E26] to-[#123D33] text-[#F5F1E8] scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <QualificationCertifications />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  return (
<nav className="fixed w-full flex items-center justify-between px-10 py-6 bg-[#0B2E26]/80 backdrop-blur-md z-50">

      <h1 className="text-3xl font-light tracking-widest text-[#D4AF37]">
  Vaishnavi R
</h1>

      
      <div className="flex gap-10 text-[#F5F1E8] font-light tracking-wide">
        <a href="#about" className="hover:text-[#D4AF37] transition">About</a>
        <a href="#skills" className="hover:text-[#D4AF37] transition">Skills</a>
        <a href="#qualification" className="hover:text-[#D4AF37] transition">Qualification</a>
        <a href="#projects" className="hover:text-[#D4AF37] transition">Projects</a>
        <a href="#contact" className="hover:text-[#D4AF37] transition">Contact</a>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 gap-20 pt-32 bg-[#123D33]">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-center md:-ml-8"
      >
        <div className="absolute w-[480px] h-[400px] bg-[#0F3A30] rounded-[60%] blur-3xl"></div>

        <img 
  src="/vaishnavi-portfolio/vaishnavi.jpg"
  alt="Vaishnavi"
  className="relative w-[400px] h-[400px] object-cover object-[center_28%] rounded-full border border-[#D4AF37]/40 shadow-[0_0_60px_rgba(212,175,55,0.2)]"
/>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-6xl md:text-7xl font-light tracking-widest text-[#D4AF37]">
          Vaishnavi R
        </h2>

        <div className="w-24  bg-[#D4AF37] mt-6 mb-6 mx-auto md:mx-0"></div>

        <h3 className="text-xl tracking-wide text-[#F5F1E8]/90">
          Student | Software Developer |
          <span className="block mt-2">Aspiring Data Analyst & Problem Solver</span>
        </h3>

        <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
          <FaEnvelope className="text-[#D4AF37]" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vaishnaviramesh204@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#F5F1E8]/80 hover:text-[#D4AF37] transition"
          >
            vaishnaviramesh204@gmail.com
          </a>
        </div>

        <div className="mt-10 flex gap-8 justify-center md:justify-start items-center">
          <a href="https://www.linkedin.com/in/vaishnavi-ramesh04/" target="_blank" rel="noreferrer"
            className="text-xl text-[#D4AF37] hover:scale-110 transition duration-300">
            <FaLinkedin />
          </a>

          <a href="https://github.com/Vaishnavi-Ramesh-04" target="_blank" rel="noreferrer"
            className="text-xl text-[#D4AF37] hover:scale-110 transition duration-300">
            <FaGithub />
          </a>

 <a
  href="/vaishnavi-portfolio/resume.pdf"
  download="Vaishnavi_R_Resume.pdf"
  className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0B2E26] transition duration-500"
>
  Resume
</a>



        </div>
      </motion.div>
    </section>
  );
}


/* ---------------- SECTION WRAPPER STYLE ---------------- */
const sectionStyle = "py-28 px-10 text-lg md:text-xl";

/* ---------------- ABOUT ---------------- */
function About() {
  const aboutText =
    "I am a dedicated Software Developer with hands-on experience in building modern, user-centric applications that combine functionality, performance, and clean design. Proficient in Python, Java, C, and contemporary web technologies, I focus on developing scalable solutions that deliver seamless user experiences while solving complex problems through technology-driven approaches. With a strong foundation in database management, Git, Agile practices, and a commitment to continuous growth and clean coding, I strive to create impactful digital solutions that blend creativity with technical excellence.";

  return (
    <section id="about" className={sectionStyle}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-5xl mx-auto"
      >
        <h2 className="text-6xl md:text-7xl font-light tracking-widest text-[#D4AF37] mb-6">
          About
        </h2>

        <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-12"></div>

        <p className="italic text-xl md:text-2xl text-[#F5F1E8]/80 leading-relaxed">
          "Building elegant digital experiences through clean code and continuous learning."
        </p>

        <motion.div
          className="mt-8 text-lg md:text-xl text-[#F5F1E8]/80 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TypingText text={aboutText} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TypingText({ text }) {
  const words = text.split(" ");

  return (
    <motion.p
      className="text-lg md:text-xl text-[#F5F1E8]/80 leading-relaxed"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.07,
            delayChildren: 0.1
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-2 whitespace-nowrap"
          variants={{
            hidden: { opacity: 0, y: 8, filter: "blur(2px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

/* ---------------- CARD STYLE ---------------- */
const cardStyle =
  "bg-[#0F3A30] border border-[#D4AF37]/20 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition duration-500";

/* ---------------- SKILLS ---------------- */
function Skills() {
  const skillsData = [
    {
      title: "Frontend",
      icon: FaLaptopCode,
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      className: "md:translate-y-14"
    },
    {
      title: "Backend",
      icon: FaServer,
      items: ["Python", "Node.js", "PHP"],
      className: "md:-mt-10"
    },
    {
      title: "Database",
      icon: FaDatabase,
      items: ["MySQL", "MongoDB", "PostgreSQL"],
      className: "md:translate-y-14"
    },
    {
      title: "Languages",
      icon: FaCode,
      items: ["C", "C++", "Java", "Python"],
      className: "md:max-w-none md:justify-self-stretch"
    },
    {
      title: "Tools",
      icon: FaCogs,
      items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
      className: "md:max-w-none md:justify-self-stretch"
    }
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const totalSkills = skillsData.length;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalSkills);
  };

  const firstSkill = skillsData[startIndex];
  const secondSkill = skillsData[(startIndex + 1) % totalSkills];
  const thirdSkill = skillsData[(startIndex + 2) % totalSkills];

  return (
    <section id="skills" className={sectionStyle}>
      
      <h2 className="text-6xl md:text-7xl font-light tracking-widest text-[#D4AF37] text-center">
        Skills
      </h2>

      {/* Gold Line */}
      <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-4 mb-16"></div>

      <div className="mx-auto max-w-3xl px-2">
        <div className="relative pb-14 pt-2">
          <motion.div
            className="pointer-events-none absolute inset-x-8 top-10 z-0 rounded-[2rem] border border-[#D4AF37]/14 bg-[#0B2E26]/70 px-6 py-6 shadow-[0_22px_40px_rgba(0,0,0,0.32)]"
            animate={{
              opacity: isSwiping ? 0 : 1,
              y: isSwiping ? 44 : 26,
              x: isSwiping ? 18 : 10,
              rotate: -8,
              scale: isSwiping ? 0.94 : 0.98
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <SkillStackCardPreview skill={thirdSkill} offset="far" />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-x-14 top-[4.75rem] z-0 rounded-[2rem] border border-[#D4AF37]/18 bg-[#0E362D]/82 px-6 py-6 shadow-[0_18px_34px_rgba(0,0,0,0.32)]"
            animate={{
              opacity: isSwiping ? 0 : 1,
              y: isSwiping ? 22 : 10,
              x: isSwiping ? 8 : 4,
              rotate: -4,
              scale: isSwiping ? 0.97 : 1
            }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.04 }}
          >
            <SkillStackCardPreview skill={secondSkill} offset="near" />
          </motion.div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`stack-${firstSkill.title}`}
              className="relative z-20"
              initial={{ opacity: 0, y: 26, scale: 0.97, rotate: 1.4 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, x: 260, rotate: 8, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <SkillCard
                title={firstSkill.title}
                items={firstSkill.items}
                icon={firstSkill.icon}
                onNext={handleNext}
                currentIndex={startIndex + 1}
                total={totalSkills}
                onSwipeStateChange={setIsSwiping}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


function SkillStackCardPreview({ skill, offset }) {
  const Icon = skill.icon;

  const styles =
    offset === "far"
      ? "border-[#D4AF37]/10 bg-[#0A2B23]/80 shadow-[0_12px_24px_rgba(0,0,0,0.26)]"
      : "border-[#D4AF37]/16 bg-[#0C3229]/88 shadow-[0_14px_28px_rgba(0,0,0,0.28)]";

  return (
    <div className={`rounded-[1.75rem] border ${styles}`}>
      <div className="flex items-center gap-3 border-b border-[#D4AF37]/10 px-5 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#0B2E26] text-[#D4AF37]">
          <Icon className="text-lg" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#F5F1E8]/40">Stack preview</p>
          <h4 className="text-xl tracking-wide text-[#D4AF37]">{skill.title}</h4>
        </div>
      </div>
      <div className="px-5 py-4">
        <div className="grid gap-2 sm:grid-cols-2">
          {skill.items.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#D4AF37]/12 bg-[#0B2E26]/70 px-3 py-2 text-sm text-[#F5F1E8]/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
                  <span className="rounded-full border border-[#D4AF37]/18 px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-[#D4AF37]">2021 - 2023</span>
function SkillCard({ title, items, icon: Icon, className = "", onNext = null, currentIndex = 1, total = 1, onSwipeStateChange = null }) {
  const [isMoving, setIsMoving] = useState(false);
                <p className="mt-2 text-sm md:text-base text-[#F5F1E8]/60">92.4%</p>

  const handleArrowClick = () => {
    setIsMoving(true);
    if (typeof onSwipeStateChange === "function") onSwipeStateChange(true);

    if (typeof onNext === "function") onNext();

    if (moveTimerRef.current) {
      window.clearTimeout(moveTimerRef.current);
    }

    moveTimerRef.current = window.setTimeout(() => {
      setIsMoving(false);
      if (typeof onSwipeStateChange === "function") onSwipeStateChange(false);
    }, 380);
  };

  return (
    <motion.div
      className={`${cardStyle} h-full min-h-[20rem] ${className} shadow-[0_34px_64px_rgba(0,0,0,0.4)]`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      animate={{ x: isMoving ? 14 : 0, rotate: isMoving ? -0.8 : 0, scale: isMoving ? 0.995 : 1 }}
      whileHover={{ y: -4, rotate: -0.35 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}
      onDragStart={() => {
        if (typeof onSwipeStateChange === "function") onSwipeStateChange(true);
      }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 80) {
          handleArrowClick();
          return;
        }

        if (typeof onSwipeStateChange === "function") onSwipeStateChange(false);
      }}
      whileTap={{ scale: 0.995 }}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#0B2E26] text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.12)]">
            <Icon className="text-xl" />
          </div>
          <h3 className="text-2xl md:text-3xl tracking-wide text-[#D4AF37]">{title}</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[#D4AF37]/30 px-3 py-1 text-xs tracking-[0.2em] text-[#F5F1E8]/70">
            {currentIndex}/{total}
          </span>
          <motion.button
            type="button"
            aria-label={`Move ${title} card`}
            onClick={handleArrowClick}
            className="text-[#D4AF37] rounded-full p-2 transition hover:bg-[#0B2E26]/60"
            animate={{ x: isMoving ? 10 : 0, rotate: isMoving ? 0 : 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-lg md:text-xl text-[#F5F1E8]/80">
            <span className="text-[#D4AF37] text-2xl leading-none">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
function QualificationCertifications() {
  return (
    <section id="qualification" className="relative overflow-hidden py-28 px-10 bg-[#123D33] text-lg md:text-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent"></div>
      <div className="pointer-events-none absolute -top-24 left-[-6rem] h-72 w-72 rounded-full bg-[#D4AF37]/8 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-[-5rem] h-80 w-80 rounded-full bg-[#0B2E26]/70 blur-3xl"></div>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-light tracking-[0.18em] text-[#D4AF37] text-center mb-4"
      >
        Qualification & Certifications
      </motion.h2>

      
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] max-w-6xl mx-auto">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/16 bg-[#0B2E26]/88 p-9 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/28"
        >
          <div className="absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-[#D4AF37]/8 blur-2xl transition duration-500 group-hover:bg-[#D4AF37]/12"></div>
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/22 bg-[#0A2B23] text-[#D4AF37]">
              <FaGraduationCap className="text-2xl" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[#F5F1E8]/45">Academic Journey</p>
              <h3 className="text-3xl md:text-[2.35rem] font-light text-[#D4AF37] tracking-wide">
                Qualification
              </h3>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-[#D4AF37]/12 bg-[#0B2E26]/48 p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <p className="text-base md:text-lg font-semibold text-[#F5F1E8]">B.Tech Computer Science</p>
                <span className="rounded-full border border-[#D4AF37]/18 px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-[#D4AF37]">
                  2023 - 2027
                </span>
              </div>
              <p className="text-sm md:text-base text-[#F5F1E8]/75">SCMS School of Engineering and Technology</p>
              <p className="mt-2 text-sm md:text-base text-[#F5F1E8]/60">Current CGPA: 9.39</p>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/12 bg-[#0B2E26]/48 p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <p className="text-base md:text-lg font-semibold text-[#F5F1E8]">Higher Secondary (CBSE)</p>
                <span className="rounded-full border border-[#D4AF37]/18 px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-[#D4AF37]">
                  2021 - 2023
                </span>
              </div>
              <p className="text-sm md:text-base text-[#F5F1E8]/75">Vyasa Vidya Nikethan Central School</p>
              <p className="mt-2 text-sm md:text-base text-[#F5F1E8]/60">92.4%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/16 bg-[#0B2E26]/88 p-9 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/28"
        >
          <div className="absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-[#D4AF37]/8 blur-2xl transition duration-500 group-hover:bg-[#D4AF37]/12"></div>
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/22 bg-[#0A2B23] text-[#D4AF37]">
              <FaCertificate className="text-2xl" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[#F5F1E8]/45">Training & Courses</p>
              <h3 className="text-3xl md:text-[2.35rem] font-light text-[#D4AF37] tracking-wide">
                Certifications
              </h3>
            </div>
          </div>

          <ul className="space-y-3">
            {[
              "LCC Python Certification",
              "Web Developer Bootcamp (Udemy)",
              "C, C++, Python – G-Tech",
              "Infosys Springboard Certifications (Overview of Agile and DevOps, Software Engineering Fundamentals, Python Bootcamp)",
              "NPTEL – Developing Soft Skills & Personality",
              "Google AI Essentials and Google Prompting Essentials – Coursera",
              "Saiket & Cognifyz Internship – Web Development",
              "Keltron Web Development Internship"
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 rounded-2xl border border-[#D4AF37]/10 bg-[#0B2E26]/44 px-4 py-3 text-sm md:text-base leading-relaxed text-[#F5F1E8]/86 transition duration-300 hover:border-[#D4AF37]/20 hover:bg-[#0B2E26]/58">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.28)]"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

function Experience() {
  const roadmap = [
    {
      title: "Part-time Web Developer",
      company: "Cadeosys",
      date: "June 29 - Present",
      description: "Currently supporting web development work in an ongoing capacity with attention to maintainability and polish."
    },
    {
      title: "Web Development Intern",
      company: "Cadeosys",
      date: "June 15 - June 26",
      description: "Contributed to web development tasks with a focus on implementation, refinement, and delivery support."
    }
  ];

  return (
    <section className="relative overflow-hidden py-28 px-10 bg-[#0B2E26] text-lg md:text-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent"></div>
      <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#D4AF37]/6 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-[#123D33]/70 blur-3xl"></div>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-light tracking-[0.18em] text-[#D4AF37] text-center mb-4"
      >
        Experience
      </motion.h2>

      
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-[28px] border border-[#D4AF37]/16 bg-[#123D33]/92 p-8 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-500 hover:border-[#D4AF37]/28"
      >
        <div className="relative">
          <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-[#D4AF37]/25 via-[#D4AF37]/60 to-[#D4AF37]/20 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-10">
            {roadmap.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative flex items-start gap-6 pl-12 md:pl-0 ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div className="absolute left-1 top-2 z-10 h-4 w-4 rounded-full border-2 border-[#D4AF37] bg-[#0B2E26] shadow-[0_0_18px_rgba(212,175,55,0.35)] md:left-1/2 md:-translate-x-1/2"></div>

                  <div className={`w-full md:w-[46%] ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="rounded-2xl border border-[#D4AF37]/12 bg-[#0B2E26]/48 p-5 md:p-6">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-base md:text-lg font-semibold text-[#F5F1E8]">{step.title}</p>
                        <span className="rounded-full border border-[#D4AF37]/18 px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-[#D4AF37]">
                          {step.date}
                        </span>
                      </div>
                      <p className="inline-flex rounded-full border border-[#D4AF37]/18 bg-[#0F3A30]/80 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                        {step.company}
                      </p>
                      <p className="mt-2 text-sm md:text-base leading-relaxed text-[#F5F1E8]/72">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "AI Interviewer",
      tech: "Next.js, TypeScript, Appwrite",
      description:
        "Built an AI-supported interview practice platform with secure authentication, resume upload, and guided assessment flows. Designed the experience to help candidates prepare through structured feedback and progress tracking.",
      githubUrl: "https://github.com/Vaishnavi-Ramesh-04/AI-Interviewer"
    },
    {
      title: "ClassHub",
      tech: "React.js, Node.js, MySQL",
      description:
        "Created a role-based classroom management system for coordinators, teachers, and students with assignment handling, announcements, meetings, reminders, and submission tracking. Focused on clarity, responsiveness, and everyday classroom workflow.",
      githubUrl: "https://github.com/Vaishnavi-Ramesh-04/classHub"
    }
  ];

  return (
    <section id="projects" className="py-28 px-10 bg-[#123D33] text-lg md:text-xl">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-light tracking-widest text-[#D4AF37] text-center mb-6"
      >
        Projects
      </motion.h2>

      <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-16"></div>


      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tech={project.tech}
            desc={project.description}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
}


function ProjectCard({ title, tech, desc, githubUrl }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/16 bg-[#0B2E26]/92 p-8 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-500 hover:border-[#D4AF37]/36 hover:shadow-[0_0_40px_rgba(212,175,55,0.14)]"
    >
      <div className="absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-[#D4AF37]/8 blur-2xl transition duration-500 group-hover:bg-[#D4AF37]/12"></div>

      <p className="text-xs uppercase tracking-[0.34em] text-[#F5F1E8]/45">Selected Work</p>
      <div className="mt-2 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-light text-[#D4AF37] tracking-wide">
            {title}
          </h3>
          <p className="mt-2 text-sm md:text-base uppercase tracking-[0.22em] text-[#F5F1E8]/55">
            {tech}
          </p>
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#0F3A30]/85 px-4 py-2 text-sm uppercase tracking-[0.2em] text-[#D4AF37] transition duration-300 hover:border-[#D4AF37]/45 hover:bg-[#D4AF37] hover:text-[#0B2E26]"
          aria-label={`Open ${title} on GitHub`}
        >
          <FaGithub className="text-base" />
          GitHub
        </a>
      </div>

      <p className="mt-6 text-base md:text-lg leading-8 text-[#F5F1E8]/82">
        {desc}
      </p>
    </motion.div>
  );
}
/* ---------------- CONTACT ---------------- */
function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const now = new Date();
    const pad = (n) => n.toString().padStart(2, "0");

    const dateString =
      pad(now.getDate()) +
      "-" +
      pad(now.getMonth() + 1) +
      "-" +
      now.getFullYear();

    const timeString =
      pad(now.getHours()) + ":" + pad(now.getMinutes());

    const dateTimeString = dateString + " " + timeString;

    const formData = new FormData(form.current);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      send_time: dateTimeString, // ✅ now this will show in email
    };

    emailjs
      .send(
        "service_9rva5sj",
        "template_a1uvesa",
        templateParams,
        "L0wbSU8xclxUEN0-V"
      )
      .then(() => {
        setStatus({ type: "success", message: "Message sent successfully!" });
        e.target.reset();
        setTimeout(() => setStatus(null), 3000);
      })
      .catch(() => {
        setStatus({ type: "error", message: "Failed to send message." });
        setTimeout(() => setStatus(null), 3000);
      });
  };

  return (
    <section
      id="contact"
      className="py-28 px-10 bg-[#123D33] text-center text-lg md:text-xl"
    >
      <h2 className="text-6xl md:text-7xl font-light tracking-widest text-[#D4AF37] mb-6">
        Contact
      </h2>

      <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-16"></div>

      <div className="max-w-xl mx-auto bg-[#0F3A30] border border-[#D4AF37]/20 backdrop-blur-md rounded-2xl p-10 shadow-xl text-lg md:text-xl">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-[#123D33] text-[#F5F1E8] rounded-xl border border-[#D4AF37]/10 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-[#123D33] text-[#F5F1E8] rounded-xl border border-[#D4AF37]/10 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 bg-[#123D33] text-[#F5F1E8] rounded-xl border border-[#D4AF37]/10 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition"
          />

          <button
            type="submit"
            className="px-10 py-3 bg-[#D4AF37] text-[#0B2E26] rounded-full hover:bg-[#E6C77A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition duration-500"
          >
            Send
          </button>

          {status && (
            <p
              className={`mt-4 text-sm font-medium ${
                status.type === "success"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="py-12 bg-[#0B2E26] border-t border-[#D4AF37]/20 text-center text-lg md:text-xl">

      <p className="text-[#F5F1E8]/70 tracking-wide">
        © 2026 <span className="text-[#D4AF37]">Vaishnavi R</span> | All Rights Reserved
      </p>

    </footer>
  );
}
