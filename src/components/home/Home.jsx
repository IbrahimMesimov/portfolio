import { mainImg } from "../../assets/images";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import "../home/Home.css";

import { iconVariants, slideInVariants } from "../../utils/animation";
import { motion } from "framer-motion";

const icons = [
  {
    id: 1,
    href: "https://facebook.com",
    icon: <FaFacebookF />,
  },
  { id: 2, href: "https://instagram.com", icon: <FaInstagram /> },
  { id: 3, href: "https://github.com", icon: <FaGithub /> },
];

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((item, index) => (
            <motion.a
              href={item.href}
              key={item.id}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <div className="home-info">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0}
            variants={slideInVariants("left", 0.5, 50, true)}
          >
            Hi, i am Ibrahim
          </motion.h1>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
            variants={slideInVariants("left", 0.7, 50, true)}
          >
            Front-end Developer
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideInVariants("left", 0.9, 60, true)}
          >
            I create stunnig websites for your business,Highly experienced in
            web
          </motion.p>
          <motion.a
            href="#contact"
            className="home-info-link inner-info-link"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={4}
            variants={slideInVariants("left", 0.9, 100, true)}
          >
            Contact me
            <FaCircleArrowRight />
          </motion.a>
        </div>
        <motion.div
          className="home-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={slideInVariants("right", 0.9, 150, false)}
        >
          <img src={mainImg} alt="mainImg" />
        </motion.div>
      </div>
      <div>
        <a href="#about" className="scroll-down">
          Scroll down
          <FaArrowDownLong />
        </a>
      </div>
    </section>
  );
};

export default Home;
