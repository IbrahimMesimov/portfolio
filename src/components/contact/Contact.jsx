import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import "../contact/Contact.css";
import SectionTitle from "../sectionTitle/sectionTitle";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container flex-center">
        <SectionTitle title="Contact Me" subtitle="Contact Me" />

        <div className="contact-wrapper">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};
export default Contact;
