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
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Kredensial
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Sertifikat Saya
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
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
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          className="max-w-6xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index} className="w-[300px]">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-xl shadow-xl"
                />
              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}