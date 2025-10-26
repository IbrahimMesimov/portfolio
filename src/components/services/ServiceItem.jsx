import { FaArrowRight } from "react-icons/fa";
import { services } from "../../data/services";
import ServiceModal from "./ServiceModal";
import { useState } from "react";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";

const ServiceItem = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const openModal = (index) => {
    setActiveIndex(index);
  };
  const closeModal = () => {
    setActiveIndex(null);
  };
  return (
    <>
      {services.map((item, index) => {
        return (
          <motion.li
            className="services-container"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={index}
            variants={slideInVariants("top", 0.6, 50, true)}
          >
            <div className="service-card">
              <item.icon className="services-icon" />
              <h3>{item.title}</h3>
              <div className="learn-more-btn" onClick={() => openModal(index)}>
                Learn More
                <FaArrowRight className="learn-more-icon" />
              </div>
            </div>

            <ServiceModal
              item={item}
              isActive={activeIndex === index}
              closeModal={closeModal}
            />
          </motion.li>
        );
      })}
    </>
  );
};

export default ServiceItem;

// {services.map((item, index) => (
//   <li className="services-container" key={index}>
//     <div className="service-card">
//       <item.icon className="services-icon" />
//       <h3>{item.title}</h3>
//       <div className="learn-more-btn" onClick={() => openModal(index)}>
//         Learn More
//         <FaArrowRight className="learn-more-icon" />
//       </div>
//     </div>
//     <ServiceModal
//       item={services[0]}
//       isActive={activeIndex === index}
//       closeModal={closeModal}
//     />
//   </li>
// ))}
