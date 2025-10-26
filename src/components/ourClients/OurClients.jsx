import { Navigation, Pagination } from "swiper/modules";
import "../ourClients/OurClients.css";
import { clientData } from "./ClientsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../sectionTitle/sectionTitle";
import { client1, client2, client3 } from "../../assets/images";
import { slideInVariants } from "../../utils/animation";
import { motion } from "framer-motion";

const OurClients = () => {
  return (
    <section className="section our-client" id="clients">
      <div className="container flex-center">
        <SectionTitle title="Our Clients" subtitle="Our Clients" />
        <motion.div
          className="our-client-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={slideInVariants("bottom", 0.7, 70, false)}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="client-swiper"
          >
            {clientData.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="swiper-client-block">
                  <div className="client-img">
                    <img src={client.imgSrc} alt={client.name} />
                  </div>
                  <div className="client-details">
                    <p>{client.description}</p>
                    <h3>{client.name}</h3>
                    <span>{client.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
