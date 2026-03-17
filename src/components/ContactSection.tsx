import { motion } from "framer-motion";
import { Mail, Github, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [lang, setLang] = useState("id");

  const content = {
    id: {
      title: "Hubungi Saya ✨",
      desc: "Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar ngobrol santai. Silakan hubungi saya melalui platform berikut.",
      contacts: [
        {
          icon: Mail,
          emoji: "📧",
          title: "Email",
          description: "Hubungi saya langsung melalui email",
          value: "Kirim Email",
          link: "mailto:hafizakbar7790@gmail.com",
          color: "from-blue-400 to-blue-600",
        },
        {
          icon: Phone,
          emoji: "💬",
          title: "WhatsApp",
          description: "Chat langsung melalui WhatsApp",
          value: "Chat WhatsApp",
          link: "https://wa.me/6282211201308",
          color: "from-green-400 to-green-600",
        },
        {
          icon: Github,
          emoji: "💻",
          title: "GitHub",
          description: "Lihat project dan source code saya",
          value: "Lihat GitHub",
          link: "https://github.com/akbarsaida",
          color: "from-purple-500 to-indigo-600",
        },
      ],
    },

    en: {
      title: "Get in Touch ✨",
      desc: "I am open to new opportunities, collaborations, or just a casual chat. Feel free to contact me through the platforms below.",
      contacts: [
        {
          icon: Mail,
          emoji: "📧",
          title: "Email",
          description: "Contact me directly via email",
          value: "Send Email",
          link: "mailto:hafizakbar7790@gmail.com",
          color: "from-blue-400 to-blue-600",
        },
        {
          icon: Phone,
          emoji: "💬",
          title: "WhatsApp",
          description: "Chat directly via WhatsApp",
          value: "Chat WhatsApp",
          link: "https://wa.me/6282211201308",
          color: "from-green-400 to-green-600",
        },
        {
          icon: Github,
          emoji: "💻",
          title: "GitHub",
          description: "View my projects and source code",
          value: "View GitHub",
          link: "https://github.com/akbarsaida",
          color: "from-purple-500 to-indigo-600",
        },
      ],
    },
  };

  const data = content[lang];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 overflow-hidden"
    >

      {/* 🌍 SWITCH */}
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

      {/* 🔥 Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-300/20 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-300/20 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {data.title}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {data.desc}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07, y: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl text-center overflow-hidden"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-400/10 to-purple-400/10"></div>

              {/* ICON */}
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r ${contact.color} shadow-lg`}
              >
                <contact.icon className="text-white w-6 h-6" />
              </div>

              <div className="text-3xl mb-2">
                {contact.emoji}
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                {contact.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                {contact.description}
              </p>

              <div
                className={`inline-block px-6 py-2 rounded-full text-white text-sm bg-gradient-to-r ${contact.color} shadow-md group-hover:scale-105 transition`}
              >
                {contact.value}
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}