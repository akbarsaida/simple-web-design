import { motion } from "framer-motion";
import type { ReactNode } from "react";

const skills = {
  WebDevelopment: [
    { name: "HTML", icon: "🌐", level: 90 },
    { name: "CSS", icon: "🎨", level: 90 },
    { name: "JavaScript", icon: "⚡", level: 85 },
    { name: "React", icon: "⚛️", level: 80 },
    { name: "Tailwind CSS", icon: "💨", level: 90 },
  ],
  AcademicStrengths: [
    { name: "Teamwork", icon: "🤝", level: 90 },
    { name: "Leadership", icon: "👑", level: 85 },
    { name: "Public Speaking", icon: "🎤", level: 88 },
    { name: "Problem Solving", icon: "🧠", level: 82 },
    { name: "Critical Thinking", icon: "💡", level: 78 },
  ],
  Achievements: [
    {
      title: "🏆 Juara 1 OBA Mts Competition",
      desc: "Meraih juara pertama dalam kompetisi akademik OBA dengan menunjukkan kemampuan analisis dan pemecahan masalah yang baik.",
    },
    {
      title: "🥇 Juara 1 OPAI Mts Competition",
      desc: "Berhasil meraih juara pertama dalam kompetisi OPAI melalui kemampuan berpikir kritis dan kerja sama tim.",
    },
    {
      title: "📖 Juara 1 Tahfiz Mts",
      desc: "Berhasil menghafal beberapa bagian Al-Qur’an dengan konsistensi dan disiplin tinggi.",
    },
    {
      title: "📚 Juara 2 Qiraatul Kutub Mts",
      desc: "Mendapatkan penghargaan atas kemampuan membaca dan memahami kitab-kitab klasik dengan baik.",
    },
    {
      title: "🎓 Juara 1 Kelas Mts",
      desc: "Meraih peringkat pertama di kelas dengan prestasi akademik yang konsisten dan disiplin dalam belajar.",
    },
  ],
};

function SkillBar({
  name,
  level,
  icon,
  delay,
}: {
  name: string;
  level: number;
  icon: ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>

      <div className="h-2 bg-white/40 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
        />
      </div>
    </motion.div>
  );
}

function AchievementCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-5 rounded-xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition"
    >
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-28 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-medium block mb-2">
            Keahlian
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & Achievements
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Web Development */}
          <div className="p-7 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              🎨 Web Development
            </h3>

            <div className="space-y-5">
              {skills.WebDevelopment.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

          {/* Academic Strengths */}
          <div className="p-7 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              ⚙️ Academic Strengths
            </h3>

            <div className="space-y-5">
              {skills.AcademicStrengths.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="p-7 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              🏆 Achievements
            </h3>

            <div className="space-y-4">
              {skills.Achievements.map((skill, index) => (
                <AchievementCard
                  key={index}
                  title={skill.title}
                  desc={skill.desc}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}