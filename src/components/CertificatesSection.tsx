import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const certificates = [
  {
    title: "Juara 1 Olimpiade Agama Islam",
    image: "/certificates/sertif1.jpeg",
  },
  {
    title: "Juara 1 Olimpiade Bahasa Arab",
    image: "/certificates/sertif2.jpeg",
  },
  {
    title: "Peringkat 1 Akademik",
    image: "/certificates/sertif3.jpeg",
  },
  {
    title: "Juara 2 Qiraatul Kutub",
    image: "/certificates/sertif4.jpeg",
  },
  {
    title: "Juara 1 Tahfiz",
    image: "/certificates/sertif5.jpeg",
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative py-32 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 overflow-hidden"
    >

      {/* Glow background */}
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
            Kredensial
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sertifikat Saya
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Slider */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: false,
          }}
          className="max-w-6xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index} className="w-[320px]">

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl overflow-hidden">

                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="rounded-t-2xl group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition">
                      {cert.title}
                    </h3>
                  </div>

                </div>
              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}