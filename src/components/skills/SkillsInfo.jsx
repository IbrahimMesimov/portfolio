import "../skills/Skills.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import Education from "./Education";
import Awards from "./Awards";
import Skills from "./Skills";
// import WorkExperience from "./WorkExperience";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";

const SkillsInfo = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <SectionTitle title="Skills" subtitle="Skills" />
        <div className="inner-content">
          <motion.div
            className="skills-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideInVariants("top", 0.6, 50, true)}
          >
            <h3>Education & Skills & Hobbies</h3>
            <p>
              I have been passionately improving my skills in modern web
              development and now I’m eager to bring this experience to your
              team.
            </p>
          </motion.div>
          <div className="skills-info education-all">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={1}
              variants={slideInVariants("top", 0.7, 50, true)}
            >
              <Education />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={2}
              variants={slideInVariants("top", 0.7, 50, true)}
            >
              <Skills />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={3}
              variants={slideInVariants("top", 0.7, 50, true)}
            >
              <Awards />
            </motion.div>
          </div>
          {/* <WorkExperience /> */}
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
