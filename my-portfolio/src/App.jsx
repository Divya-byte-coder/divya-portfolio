import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo">
          DIVYA
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          download="Divya-Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>

      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-text">

          <p className="hello">
            Hi There, I'm
          </p>

          <h1>
            Divya
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="description">
            I’m a passionate Information Technology student and
            aspiring Full Stack Developer, focused on building
            scalable, user-centric web applications that solve
            real-world problems.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="outline-btn"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="gradient-btn"
            >
              Contact Me
            </a>

          </div>

        </div>


        {/* PROFILE IMAGE */}
        <div className="profile-container">

          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>

          <div className="profile">

            <img
              src="/profile.png"
              alt="Divya profile"
            />

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section">

        <div className="section-heading">

          <p>
            GET TO KNOW ME
          </p>

          <h2>
            About Me
          </h2>

        </div>


        <div className="about-box">

          <div>

            <h3>
              Who I Am
            </h3>

            <p>
              I am a passionate Information Technology student
              interested in full-stack development, artificial
              intelligence, and modern software technologies.
            </p>

            <p>
              I enjoy transforming ideas into practical applications
              and building solutions that address real-world problems.
              I am continuously improving my technical and
              problem-solving skills through hands-on projects.
            </p>

          </div>


          <div className="about-info">

            <div>
              <span>🎓</span>

              <div>
                <h4>Education</h4>
                <p>Information Technology</p>
              </div>
            </div>


            <div>
              <span>💻</span>

              <div>
                <h4>Development</h4>
                <p>Web & Full Stack Development</p>
              </div>
            </div>


            <div>
              <span>🤖</span>

              <div>
                <h4>Interests</h4>
                <p>AI, APIs & Prompt Engineering</p>
              </div>
            </div>


            <div>
              <span>🚀</span>

              <div>
                <h4>Goal</h4>
                <p>Build Impactful Technology Solutions</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section">

        <div className="section-heading">

          <p>
            WHAT I KNOW
          </p>

          <h2>
            My Skills
          </h2>

        </div>


        <div className="skills">

          {/* FRONTEND */}
          <div className="skill-card">

            <div>🌐</div>

            <h3>
              Frontend
            </h3>

            <p>
              HTML • CSS • JavaScript • React.js
            </p>

          </div>


          {/* BACKEND */}
          <div className="skill-card">

            <div>⚙️</div>

            <h3>
              Backend
            </h3>

            <p>
              Node.js • Express.js • REST APIs
            </p>

          </div>


          {/* DATABASE */}
          <div className="skill-card">

            <div>🗄️</div>

            <h3>
              Database
            </h3>

            <p>
              MongoDB • MySQL
            </p>

          </div>


          {/* AI */}
          <div className="skill-card">

            <div>🤖</div>

            <h3>
              AI & API Integration
            </h3>

            <p>
              Prompt Engineering • REST APIs • AI Integration
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">

        <div className="section-heading">

          <p>
            MY WORK
          </p>

          <h2>
            Projects
          </h2>

        </div>


        <div className="projects">


          {/* ================= PROJECT 1 ================= */}
          <div className="project-card">

            <div className="project-icon">
              🤖
            </div>

            <h3>
              AI-Powered Interview Prep Platform
            </h3>

            <p>
              A full-stack AI-powered interview preparation platform
              that generates dynamic, role-based interview questions
              and answers using the Groq LLM API with
              prompt-engineered output control. Built with secure
              JWT authentication and MongoDB to manage users,
              multi-session history, and pinned Q&A.
            </p>

            <div className="tags">

              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Groq API</span>
              <span>JWT</span>
              <span>Prompt Engineering</span>

            </div>

            <a
              href="https://github.com/Divya-byte-coder/Interview-Prep"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>

          </div>


          {/* ================= PROJECT 2 ================= */}
          <div className="project-card">

            <div className="project-icon">
              💰
            </div>

            <h3>
              Expense Tracker
            </h3>

            <p>
              A full-stack financial management application built
              with the MERN stack, allowing multiple users to
              securely manage, analyze, and visualize their
              personal expenses. Includes interactive financial
              charts, category-wise breakdowns, downloadable
              reports, and RESTful APIs for efficient CRUD
              operations.
            </p>

            <div className="tags">

              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>REST API</span>
              <span>Authentication</span>

            </div>

            <a
              href="https://github.com/Divya-byte-coder/Expense-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>
            

          </div>


          {/* ================= PROJECT 3 ================= */}
          <div className="project-card">

            <div className="project-icon">
              👥
            </div>

            <h3>
              Employee Management System
            </h3>

            <p>
              A console-based Java application designed to
              efficiently manage employee records. Implemented
              core CRUD operations including adding, updating,
              searching, and deleting employee information using
              object-oriented programming principles and
              structured data management.
            </p>

            <div className="tags">

              <span>Java</span>
              <span>OOP</span>
              <span>CRUD</span>
              <span>Data Management</span>

            </div>

            <a
              href="https://github.com/Divya-byte-coder/Employee-management"
              target="_blank"
              rel="noreferrer"
            >
                View Project →
            </a>

          </div>

        </div>

      </section>

 {/* ================= CONTACT ================= */}
<section id="contact" className="section contact-section">

  <div className="section-heading">
    <p>GET IN TOUCH</p>
    <h2>Let's Work Together</h2>
  </div>

  <div className="contact-container">

    {/* LEFT SIDE */}
    <div className="contact-info">

      <div className="contact-intro">
        <span className="contact-badge">
          👋 Say Hello
        </span>

        <h3>
          Have a project in mind?
        </h3>

        <p>
          I'm always open to discussing new projects, creative ideas,
          or opportunities to be part of your team. Feel free to reach
          out and I'll get back to you as soon as possible.
        </p>
      </div>


      {/* EMAIL */}
      <a
        href="mailto:yourmail@gmail.com"
        className="contact-item"
      >
        <div className="contact-icon">
          ✉️
        </div>

        <div>
          <span>Email</span>
          <strong>divyaparthiban3011@gmail.com</strong>
        </div>
      </a>


      {/* PHONE */}
      <a
        href="tel:+910000000000"
        className="contact-item"
      >
        <div className="contact-icon">
          📱
        </div>

        <div>
          <span>Phone</span>
          <strong>+91 6381341368</strong>
        </div>
      </a>


      {/* LOCATION */}
      <div className="contact-item">
        <div className="contact-icon">
          📍
        </div>

        <div>
          <span>Location</span>
          <strong>India</strong>
        </div>
      </div>


      {/* SOCIAL LINKS */}
      <div className="social-links">

     <div className="social-links">

  {/* GitHub */}
  <a
    href="https://github.com/Divya-byte-coder"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    💻 GitHub ↗
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/divya-parthiban-434090301/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    💼 LinkedIn ↗
  </a>

</div>
      </div>

    </div>


    {/* RIGHT SIDE - FORM */}
    <div className="contact-form-wrapper">

      <div className="form-header">
        <span>CONTACT FORM</span>

        <h3>
          Send Me a Message
        </h3>

        <p>
          Fill out the form below and I'll get back to you shortly.
        </p>
      </div>


      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();

          const name = e.target.name.value;
          const email = e.target.email.value;
          const message = e.target.message.value;

          window.location.href =
            `mailto:yourmail@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0A%0AReply to: ${email}`;
        }}
      >

        <div className="form-row">

          <div className="form-group">

            <label htmlFor="name">
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

          </div>

        </div>


        <div className="form-group">

          <label htmlFor="subject">
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What would you like to discuss?"
            required
          />

        </div>


        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
            required
          ></textarea>

        </div>


        <button
          type="submit"
          className="send-message-btn"
        >
          Send Message
          <span>→</span>
        </button>

      </form>

    </div>

  </div>

</section>

      {/* ================= FOOTER ================= */}
      <footer>

        <p>
          © 2026 Divya. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;