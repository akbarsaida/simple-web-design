import { motion } from "framer-motion";
import { Mail, Github, Phone } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    description: "Hubungi saya langsung melalui email",
    value: "hafizakbar7790@gmail.com",
    link: "mailto:hafizakbar7790@gmail.com",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    description: "Chat langsung melalui WhatsApp",
    value: "Chat WhatsApp",
    link: "https://wa.me/6282211201308",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Lihat project dan source code saya",
    value: "View GitHub",
    link: "https://github.com/akbarsaida",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar
            ngobrol santai. Silakan hubungi saya melalui salah satu platform
            berikut.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-white/60 backdrop-blur-xl shadow-xl text-center group"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r ${contact.color}`}
              >
                <contact.icon className="text-white w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {contact.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                {contact.description}
              </p>

              <div
                className={`inline-block px-6 py-2 rounded-full text-white text-sm bg-gradient-to-r ${contact.color}`}
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