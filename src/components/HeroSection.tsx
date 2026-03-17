import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { FaReact, FaJs, FaPalette, FaGlobe } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const skills = [
  { icon: <FaReact className="text-cyan-500 text-lg" /> },
  { icon: <FaJs className="text-yellow-400 text-lg" /> },
  { icon: <FaPalette className="text-pink-500 text-lg" /> },
  { icon: <FaGlobe className="text-blue-500 text-lg" /> },
];

export default function HeroSection() {
  const [lang, setLang] = useState("id");

  const content = {
    id: {
      badge: "🎉 Selamat datang di portofolio",
      desc: "Saya adalah pelajar yang sedang belajar membuat website menggunakan HTML, CSS, dan React.",
      btn1: "Lihat Portofolio",
      btn2: "Kontak Saya",
    },
    en: {
      badge: "🚀 Welcome to my portfolio",
      desc: "I am a student learning to build websites using HTML, CSS, and React.",
      btn1: "View Portfolio",
      btn2: "Contact Me",
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300">

      {/* 🔥 background glow (tidak ganggu klik) */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] bg-cyan-400/30 blur-[200px] rounded-full top-[-200px] left-[-200px] pointer-events-none"
      />

      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-purple-400/30 blur-[200px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center px-6"
      >

        {/* badge */}
        <motion.div
          variants={item}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur text-sm shadow"
        >
          {content[lang].badge}
        </motion.div>

        {/* nama */}
        <motion.h1
          variants={item}
          className="text-6xl md:text-7xl font-bold text-gray-900 mb-3"
        >
          Hafizh Akbar Saida
        </motion.h1>

        {/* typewriter */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl text-blue-600 mb-6"
        >
          <Typewriter
            words={
              lang === "id"
                ? ["Pelajar Web Developer", "Frontend Developer", "Belajar React"]
                : ["Student Web Developer", "Frontend Developer", "Learning React"]
            }
            loop
            cursor
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* deskripsi */}
        <motion.p
          variants={item}
          className="text-gray-700 max-w-xl mx-auto mb-8"
        >
          {content[lang].desc}
        </motion.p>

        {/* tombol */}
        <motion.div
          variants={item}
          className="flex justify-center gap-4 mb-4"
        >
          <Button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-600 text-white px-6 rounded-full hover:scale-110 transition duration-300"
          >
            {content[lang].btn1}
          </Button>

          <Button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            className="rounded-full px-6 hover:scale-110 transition duration-300"
          >
            {content[lang].btn2}
          </Button>
        </motion.div>

        {/* ✅ EN ID DIPINDAH KE BAWAH (AMAN) */}
        <motion.div variants={item} className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setLang("id")}
            className={`px-3 py-1 rounded-full text-sm ${
              lang === "id" ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            ID
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded-full text-sm ${
              lang === "en" ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            EN
          </button>
        </motion.div>

        {/* icon logo */}
        <motion.div variants={item} className="flex justify-center gap-3 mb-6">
          {skills.map((itemIcon, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
              }}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition"
            >
              {itemIcon.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* social */}
        <motion.div
          variants={item}
          className="flex justify-center gap-6 text-gray-700 mb-10"
        >
          <Github className="cursor-pointer hover:scale-125 transition" />
          <Linkedin className="cursor-pointer hover:scale-125 transition" />
          <Youtube className="cursor-pointer hover:scale-125 transition" />
          <Instagram className="cursor-pointer hover:scale-125 transition" />
        </motion.div>
      </motion.div>

      {/* ⬇️ FIX: KE ABOUT */}
      <motion.div
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
}