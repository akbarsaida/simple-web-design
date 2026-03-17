import { motion } from "framer-motion";
import { useState } from "react";

export default function SkillsSection() {
  const [lang, setLang] = useState("id");

  const content = {
    id: {
      subtitle: "Keahlian",
      title: "Skills & Achievements",
      web: "Web Development",
      academic: "Kekuatan Akademik",
      achievement: "Prestasi",
      webSkills: [
        { name: "HTML", icon: "🌐", level: 90 },
        { name: "CSS", icon: "🎨", level: 90 },
        { name: "JavaScript", icon: "⚡", level: 85 },
        { name: "React", icon: "⚛️", level: 80 },
        { name: "Tailwind", icon: "💨", level: 90 },
      ],
      academicSkills: [
        { name: "Kerja Tim", icon: "🤝", level: 90 },
        { name: "Leadership", icon: "👑", level: 85 },
        { name: "Public Speaking", icon: "🎤", level: 88 },
        { name: "Problem Solving", icon: "🧠", level: 82 },
        { name: "Critical Thinking", icon: "💡", level: 78 },
      ],
      achievements: [
        { title: "🏆 Juara 1 OBA", desc: "Kompetisi akademik." },
        { title: "🥇 Juara 1 OPAI", desc: "Kerja tim & analisis." },
        { title: "📖 Juara 1 Tahfiz", desc: "Konsistensi tinggi." },
        { title: "📚 Juara 2 Qiraatul", desc: "Kitab klasik." },
        { title: "🎓 Juara 1 Kelas", desc: "Top akademik." },
      ],
    },

    en: {
      subtitle: "Skills",
      title: "Skills & Achievements",
      web: "Web Development",
      academic: "Academic Strengths",
      achievement: "Achievements",
      webSkills: [
        { name: "HTML", icon: "🌐", level: 90 },
        { name: "CSS", icon: "🎨", level: 90 },
        { name: "JavaScript", icon: "⚡", level: 85 },
        { name: "React", icon: "⚛️", level: 80 },
        { name: "Tailwind", icon: "💨", level: 90 },
      ],
      academicSkills: [
        { name: "Teamwork", icon: "🤝", level: 90 },
        { name: "Leadership", icon: "👑", level: 85 },
        { name: "Public Speaking", icon: "🎤", level: 88 },
        { name: "Problem Solving", icon: "🧠", level: 82 },
        { name: "Critical Thinking", icon: "💡", level: 78 },
      ],
      achievements: [
        { title: "🏆 1st Place OBA", desc: "Academic competition." },
        { title: "🥇 1st Place OPAI", desc: "Teamwork & analysis." },
        { title: "📖 Tahfiz Winner", desc: "High consistency." },
        { title: "📚 Qiraatul Kutub", desc: "Classical books." },
        { title: "🎓 Top Student", desc: "Best academic." },
      ],
    },
  };

  const data = content[lang];

  return (
    <section className="py-28 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 relative">

      {/* SWITCH */}
      <div className="absolute top-6 right-6 flex gap-2">
        <button
          onClick={() => setLang("id")}
          className={`px-3 py-1 rounded-full ${
            lang === "id" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          ID
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded-full ${
            lang === "en" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          EN
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 font-medium">{data.subtitle}</p>
          <h2 className="text-4xl font-bold">{data.title}</h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* WEB */}
          <div className="p-6 bg-white/70 backdrop-blur rounded-xl shadow">
            <h3 className="font-bold mb-4">🎨 {data.web}</h3>

            {data.webSkills.map((s, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between text-sm">
                  <span>{s.icon} {s.name}</span>
                  <span>{s.level}%</span>
                </div>

                <div className="h-2 bg-gray-200 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: s.level + "%" }}
                    className="h-2 bg-blue-500 rounded"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ACADEMIC */}
          <div className="p-6 bg-white/70 backdrop-blur rounded-xl shadow">
            <h3 className="font-bold mb-4">⚙️ {data.academic}</h3>

            {data.academicSkills.map((s, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between text-sm">
                  <span>{s.icon} {s.name}</span>
                  <span>{s.level}%</span>
                </div>

                <div className="h-2 bg-gray-200 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: s.level + "%" }}
                    className="h-2 bg-purple-500 rounded"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ACHIEVEMENT */}
          <div className="p-6 bg-white/70 backdrop-blur rounded-xl shadow">
            <h3 className="font-bold mb-4">🏆 {data.achievement}</h3>

            {data.achievements.map((a, i) => (
              <div key={i} className="mb-3 p-3 bg-white rounded shadow">
                <p className="font-semibold">{a.title}</p>
                <p className="text-sm text-gray-600">{a.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}