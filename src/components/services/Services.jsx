import SectionTitle from "../sectionTitle/sectionTitle";
import { services } from "../../data/services";
import "../services/Services.css";
import ServiceItem from "../services/ServiceItem";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container flex-center">
        <SectionTitle title="Services" subtitle="Services" />
        <div className="services-wrapper">
          <motion.h3
            className="services-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
            variants={slideInVariants("top", 0.6, 50, true)}
          >
            What I provide
          </motion.h3>
          <ul className="services-list">
            <ServiceItem services={services} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
