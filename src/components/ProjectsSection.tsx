import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Task Manager App",
    description:
      "Aplikasi untuk mengelola tugas harian dengan fitur tambah, hapus, dan checklist task.",
    tags: ["React", "Tailwind", "JavaScript"],
    image: "📝",
    color: "from-blue-500/20 to-cyan-500/20",
    github: "https://github.com/akbarsaida/task-manager.git",
    demo: "https://task-manager-ruddy-five.vercel.app",
  },
  {
    title: "Study Planner",
    description:
      "Aplikasi untuk mengatur jadwal belajar dan memonitor progress belajar.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "📚",
    color: "from-purple-500/20 to-pink-500/20",
    github: "https://github.com/akbarsaida/study-planner.git",
    demo: "https://study-planner-13h5.vercel.app",
  },
  {
    title: "Islamic Learning Tracker",
    description:
      "Aplikasi untuk melacak hafalan Al-Qur'an dan progress belajar agama.",
    tags: ["React", "Tailwind"],
    image: "🕌",
    color: "from-green-500/20 to-emerald-500/20",
    github: "https://github.com/akbarsaida/islamic-learning-tracker.git",
    demo: "https://islamic-learning-tracker.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 overflow-hidden"
    >
      {/* Soft glow background */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-300/20 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-300/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium mb-2 block">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects & Karya
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group"
            >
              <div className="h-full p-6 bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl transition-all duration-300">
                
                {/* Icon */}
                <div
                  className={`aspect-video rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${project.color}`}
                >
                  <span className="text-6xl group-hover:scale-110 transition">
                    {project.image}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-white/80 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                        asChild
                      >
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                        asChild
                      >
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}