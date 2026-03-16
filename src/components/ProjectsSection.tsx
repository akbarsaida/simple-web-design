import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Task Manager App",
    description:  "Aplikasi untuk mengelola tugas harian dengan fitur tambah, hapus, dan checklist task.",
    tags: ["React", "Tailwind", "JavaScript"],
    image: "📝",
    color: "from-blue-500/20 to-cyan-500/20",
    github: "https://github.com/akbarsaida/task-manager.git",
    demo: "https://task-manager-ruddy-five.vercel.app",
  },
  {
    title: "Study Planner",
    description: "Aplikasi untuk mengatur jadwal belajar dan memonitor progress belajar.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "📚",
    color: "from-purple-500/20 to-pink-500/20",
    github: "https://github.com/akbarsaida/study-planner.git",
    demo: "https://study-planner-13h5.vercel.app",
  },
  {
    title:  "Islamic Learning Tracker",
    description: "Aplikasi untuk melacak hafalan Al-Qur'an dan progress belajar agama.",
    tags: ["React", "Tailwind"],
    image: "🕌",
    color: "from-green-500/20 to-emerald-500/20",
    github: "https://github.com/akbarsaida/islamic-learning-tracker.git",
    demo:"https://islamic-learning-tracker.vercel.app",
  },
  
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Projects &amp; Karya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <span className="text-6xl">{project.image}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
          
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="rounded-full" asChild>
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
