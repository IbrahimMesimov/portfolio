import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import { slideInVariants } from "../../utils/animation";

const ContactForm = () => {
  return (
    <form className="form contact-form">
      <motion.div
        className="first-row"
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("left", 0.7, 50, true)}
      >
        <input placeholder="Name" type="text" />
      </motion.div>
      <motion.div
        className="second-row"
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("left", 0.7, 50, true)}
      >
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
      </motion.div>
      <motion.div
        className="third-row"
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("left", 0.7, 50, true)}
      >
        <textarea placeholder="Message"></textarea>
      </motion.div>
      <motion.button
        className="contact-btn inner-info-link"
        type="submit"
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("left", 0.7, 50, true)}
      >
        Send Message
        <FaPaperPlane />
      </motion.button>
    </form>
  );
};

export default ContactForm;
