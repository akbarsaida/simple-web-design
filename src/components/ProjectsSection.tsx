import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
  const [open, setOpen] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  // AUTO SLIDE
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-300/20 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-300/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">
            Projects & Karya
          </h2>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative">
          {/* BUTTON KIRI */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 backdrop-blur p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          {/* BUTTON KANAN */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 backdrop-blur p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>

          {/* SLIDER */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%]"
                >
                  <div className="p-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition">
                    
                    {/* ICON */}
                    <div
                      className={`aspect-video flex items-center justify-center rounded-xl mb-5 bg-gradient-to-br ${project.color}`}
                    >
                      <span className="text-6xl">{project.image}</span>
                    </div>

                    {/* TITLE */}
                    <h3
                      onClick={() =>
                        setOpen(open === index ? null : index)
                      }
                      className="text-xl font-bold cursor-pointer hover:text-blue-500"
                    >
                      {project.title}
                    </h3>

                    {/* ACCORDION */}
                    {open === index && (
                      <p className="text-sm mt-2 text-gray-600">
                        {project.description}
                      </p>
                    )}

                    {/* TAG */}
                    <div className="flex gap-2 flex-wrap mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-white rounded-full border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* BUTTON */}
                    <div className="flex gap-3 mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>

                      <Button size="sm" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}