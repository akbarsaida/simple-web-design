import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [lang, setLang] = useState("id");

  // 🔥 TAMBAHAN ACCORDION STATE
  const [open, setOpen] = useState<number | null>(0);

  const content = {
    id: {
      title: "Tentang Saya",
      p1: "Saya adalah siswa MAN Model Banda Aceh yang memiliki minat besar dalam dunia teknologi, khususnya Web Development. Saat ini saya sedang belajar membuat website modern menggunakan React dan TailwindCSS untuk terus meningkatkan kemampuan saya dalam dunia digital.",
      p2: "Website ini bukan sekadar tugas, tetapi juga menjadi bukti bahwa saya mampu belajar dan berkembang di dunia teknologi. Saya percaya setiap baris kode yang saya tulis adalah bagian dari perjalanan saya untuk terus belajar, berkreasi, dan meningkatkan kemampuan di dunia digital.",
      p3: "Melalui website ini, saya ingin menunjukkan bahwa dengan usaha, rasa ingin tahu, dan semangat belajar, seseorang dapat menciptakan sesuatu yang bermanfaat dan menarik.",
    },
    en: {
      title: "About Me",
      p1: "I am a student of MAN Model Banda Aceh who has a strong interest in technology, especially Web Development. Currently, I am learning to build modern websites using React and TailwindCSS to continuously improve my skills in the digital world.",
      p2: "This website is not just an assignment, but also proof that I am capable of learning and growing in the field of technology. I believe every line of code I write is part of my journey to keep learning, creating, and improving my skills in the digital world.",
      p3: "Through this website, I want to show that with effort, curiosity, and a strong willingness to learn, someone can create something useful and interesting.",
    },
  };

  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200"
    >
      {/* 🌍 SWITCH LANGUAGE */}
      <div className="absolute top-6 right-6 flex gap-2">
        <button
          onClick={() => setLang("id")}
          className={`px-3 py-1 rounded-full text-sm shadow ${
            lang === "id" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          ID
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded-full text-sm shadow ${
            lang === "en" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          EN
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-3xl opacity-30 group-hover:opacity-50 transition"></div>

            <img
              src="/profile/fotosaya.jpeg"
              alt="Hafizh Akbar Saida"
              className="relative w-[300px] h-[300px] object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </motion.div>

        {/* TEXT + ACCORDION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            {content[lang].title}
          </h2>

          {/* 🔥 ACCORDION ITEM 1 */}
          <div>
            <button
              onClick={() => setOpen(open === 0 ? null : 0)}
              className="w-full text-left font-semibold bg-white p-4 rounded-xl shadow hover:bg-blue-50 transition"
            >
              📌 {lang === "id" ? "Perkenalan" : "Introduction"}
            </button>

            {open === 0 && (
              <p className="mt-2 text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow">
                {content[lang].p1}
              </p>
            )}
          </div>

          {/* 🔥 ACCORDION ITEM 2 */}
          <div>
            <button
              onClick={() => setOpen(open === 1 ? null : 1)}
              className="w-full text-left font-semibold bg-white p-4 rounded-xl shadow hover:bg-blue-50 transition"
            >
              💻 {lang === "id" ? "Perjalanan" : "Journey"}
            </button>

            {open === 1 && (
              <p className="mt-2 text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow">
                {content[lang].p2}
              </p>
            )}
          </div>

          {/* 🔥 ACCORDION ITEM 3 */}
          <div>
            <button
              onClick={() => setOpen(open === 2 ? null : 2)}
              className="w-full text-left font-semibold bg-white p-4 rounded-xl shadow hover:bg-blue-50 transition"
            >
              🚀 {lang === "id" ? "Tujuan" : "Goals"}
            </button>

            {open === 2 && (
              <p className="mt-2 text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow">
                {content[lang].p3}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}