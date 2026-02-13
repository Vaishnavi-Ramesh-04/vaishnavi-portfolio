import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from "react-icons/fa";
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
        className="relative flex items-center justify-center"
      >
        <div className="absolute w-[480px] h-[400px] bg-[#0F3A30] rounded-[60%] blur-3xl"></div>

        <img 
  src="/vaishnavi-portfolio/vaishnavi.jpg"
  alt="Vaishnavi"
  className="relative w-[400px] h-[400px] object-cover rounded-full border border-[#D4AF37]/40 shadow-[0_0_60px_rgba(212,175,55,0.2)]"
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
          Student | Web Developer
        </h3>

        <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
          <FaEnvelope className="text-[#D4AF37]" />
          <span className="text-[#F5F1E8]/80">
            vaishnaviramesh204@gmail.com
          </span>
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

        <p className="mt-8 text-lg md:text-xl text-[#F5F1E8]/80 leading-relaxed">
          I am a dedicated web developer passionate about creating refined, user-focused web applications. My expertise lies in modern front-end technologies and frameworks, enabling me to deliver efficient, scalable, and user-focused solutions. I am driven by continuous improvement, a strong attention to detail, and a commitment to writing clean, maintainable code. I bring a continuous-learning mindset and a passion for technology to every project I undertake.
        </p>
      </motion.div>
    </section>
  );
}

/* ---------------- CARD STYLE ---------------- */
const cardStyle =
  "bg-[#0F3A30] border border-[#D4AF37]/20 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition duration-500";

/* ---------------- SKILLS ---------------- */
function Skills() {
  return (
    <section id="skills" className={sectionStyle}>
      
      <h2 className="text-6xl md:text-7xl font-light tracking-widest text-[#D4AF37] text-center">
        Skills
      </h2>

      {/* Gold Line */}
      <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-4 mb-16"></div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <SkillCard title="Frontend">
          HTML, CSS, JavaScript, React, Tailwind
        </SkillCard>
        <SkillCard title="Backend">
          Python, Node.js, PHP, MySQL
        </SkillCard>
        <SkillCard title="Languages">
          C, C++, Java, Python
        </SkillCard>
        <SkillCard title="Tools">
          Git/GitHub, VS Code
        </SkillCard>
      </div>
    </section>
  );
}


function SkillCard({ title, children }) {
  return (
    <div className={cardStyle}>
      <h3 className="text-2xl md:text-3xl tracking-wide text-[#D4AF37] mb-4">{title}</h3>
      <p className="text-lg md:text-xl text-[#F5F1E8]/80">{children}</p>
    </div>
  );
}
function QualificationCertifications() {
  return (
    <section id="qualification" className="py-28 px-10 bg-[#123D33] text-lg md:text-xl">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-light tracking-widest text-[#D4AF37] text-center mb-6"
      >
        Qualification & Certifications
      </motion.h2>

      <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-16"></div>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0B2E26] p-10 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition duration-500"
        >
          <h3 className="text-3xl md:text-4xl font-light mb-6 text-[#D4AF37] tracking-wide">
            Qualification
          </h3>

          <p className="text-lg md:text-xl text-[#F5F1E8] leading-7">
            <strong>B.Tech Computer Science</strong><br />
            SCMS School of Engineering and Technology<br />
            2023 – 2027
          </p>

          <p className="mt-6 text-lg md:text-xl text-[#F5F1E8] leading-7">
            <strong>Higher Secondary (CBSE)</strong><br />
            Vyasa Vidya Nikethan Central School<br />
            2021 – 2023<br />
            Percentage: 92.4%
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0B2E26] p-10 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition duration-500"
        >
          <h3 className="text-3xl md:text-4xl font-light mb-6 text-[#D4AF37] tracking-wide">
            Certifications
          </h3>

          <ul className="text-lg md:text-xl text-[#F5F1E8] space-y-3 leading-7">
            <li>Keltron Internship Certification (Web Development)</li>
            <li>Cognifyz – Machine Learning Internship</li>
            <li>Saiket Internship – Web Development</li>
            <li>Web Developer Bootcamp (Udemy)</li>
            <li>LCC Python Certification</li>
            <li>C, C++, Python – G-Tech</li>
            <li>Infosys Springboard Certification</li>
            <li>NPTEL – Developing Soft Skills & Personality</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-28 px-10 bg-[#0B2E26] text-lg md:text-xl">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-light tracking-widest text-[#D4AF37] text-center mb-6"
      >
        Experience & Leadership
      </motion.h2>

      <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-16"></div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-[#123D33] p-10 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition duration-500 text-lg md:text-xl text-[#F5F1E8] space-y-6"
      >
        <p>
          <strong>Student Member</strong><br />
          Institution's Innovation Council (IIC)
        </p>

        <p>
          <strong>Internship Coordinator</strong><br />
          Institution's Innovation Council (IIC)<br />
          2025 – 2026
        </p>
      </motion.div>
    </section>
  );
}

function Projects() {
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

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        <ProjectCard 
          title="Portfolio Website"
          desc="Designed and developed a personal portfolio website using React and Tailwind CSS."
        />

        <ProjectCard 
          title="Machine Learning Projects"
          desc="Developed machine learning models using Python and libraries like scikit-learn and TensorFlow for various applications including predictive analytics and image recognition. Project was for Restaurant rating prediction using ML algorithms, Cuisine classification, Location based analysis."
        />

        <ProjectCard 
          title="Cake Website"
          desc="Created a dynamic cake ordering website using HTML, CSS, and JavaScript, and PHP implementing features like product listings, shopping cart, and user authentication."
        />

        <ProjectCard 
          title="To-Do List Website"
          desc="Built a to-do list web application with functionalities to add, edit, delete, and mark tasks as complete using JavaScript for interactivity. Categorising works based on different sections like personal, work, urgent, Reminder setting facilities were few highlights."
        />

        <ProjectCard 
          title="Canteen System"
          desc="Developed a canteen system where new members can register, login & logout option, display menu, place order & accordingly the cart will be updated using PHP, HTML, CSS and JavaScript."
        />

      </div>
    </section>
  );
}


function ProjectCard({ title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-[#0B2E26] p-10 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition duration-500"
    >
      <h3 className="text-2xl md:text-3xl font-light text-[#D4AF37] mb-4 tracking-wide">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-[#F5F1E8] leading-7">
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

    emailjs
      .sendForm(
        "service_9rva5sj",
        "template_a1uvesa",
        form.current,
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
    <section id="contact" className="py-28 px-10 bg-[#123D33] text-center text-lg md:text-xl">

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
