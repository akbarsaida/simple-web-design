import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const certificates = [
  { title: "Juara 1 Olimpiade Agama Islam", image: "/certificates/sertif1.jpeg" },
  { title: "Juara 1 Olimpiade Bahasa Arab", image: "/certificates/sertif2.jpeg" },
  { title: "Peringkat 1 Akademik", image: "/certificates/sertif3.jpeg" },
  { title: "Juara 2 Qiraatul Kutub", image: "/certificates/sertif4.jpeg" },
  { title: "Juara 1 Tahfiz", image: "/certificates/sertif5.jpeg" },
];

export default function CertificatesSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="text-cyan-600 mb-2">Kredensial</p>
          <h2 className="text-5xl font-bold mb-4">Sertifikat Saya</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* SWIPER */}
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={3}
          loop
          navigation
          modules={[EffectCoverflow, Navigation]}
          coverflowEffect={{
            rotate: 0,        // biar elegan (gak terlalu miring)
            stretch: 0,
            depth: 200,       // ini bikin efek 3D
            modifier: 1.5,
            slideShadows: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {certificates.map((cert, i) => (
            <SwiperSlide key={i} className="max-w-[350px]">

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl shadow-xl"
              >

                {/* IMAGE */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300x200";
                  }}
                />

                {/* TITLE */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">
                    {cert.title}
                  </h3>
                </div>

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}