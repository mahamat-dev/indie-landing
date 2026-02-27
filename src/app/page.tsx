export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Indie Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          Building beautiful web experiences, one project at a time.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-black dark:border-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A beautiful web application built with modern technologies.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                  TypeScript
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                An innovative solution for everyday problems.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A creative project showcasing design and functionality.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
            I'm a passionate indie developer who loves creating clean,
            efficient, and user-friendly web applications. With a focus on
            modern technologies and best practices, I bring ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>✦ Frontend Development</li>
                <li>✦ Backend Development</li>
                <li>✦ Full-Stack Applications</li>
                <li>✦ UI/UX Design</li>
                <li>✦ Database Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  React
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Have a project in mind? Let's create something amazing together.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/mahamat-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>© 2024 Indie Developer. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
