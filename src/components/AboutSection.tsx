import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-3xl opacity-30 group-hover:opacity-50 transition"></div>

            <img
              src="/profile/fotosaya.jpeg"
              alt="Hafizh Akbar Saida"
              className="relative w-[300px] h-[300px] object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Tentang Saya
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Saya adalah siswa MAN Model Banda Aceh yang memiliki minat besar
            dalam dunia teknologi, khususnya Web Development. Saat ini saya
            sedang belajar membuat website modern menggunakan React dan
            TailwindCSS untuk terus meningkatkan kemampuan saya dalam dunia
            digital.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Website ini bukan sekadar tugas, tetapi juga menjadi bukti bahwa
            saya mampu belajar dan berkembang di dunia teknologi. Saya percaya
            setiap baris kode yang saya tulis adalah bagian dari perjalanan
            saya untuk terus belajar, berkreasi, dan meningkatkan kemampuan di
            dunia digital.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Melalui website ini, saya ingin menunjukkan bahwa dengan usaha,
            rasa ingin tahu, dan semangat belajar, seseorang dapat menciptakan
            sesuatu yang bermanfaat dan menarik.
          </p>

        </motion.div>

      </div>
    </section>
  );
}