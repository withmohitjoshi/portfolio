import { Element } from "react-scroll";
import ContactForm from "./components/ContactForm";
import QRCode from "./components/QRCode";
const Contact = () => {
  return (
    <Element name="contact" className="w-full bg-white py-6 md:py-12">
      <div className="text-center mb-4">
        <h1 className="text-gray-900 font-semibold uppercase text-xl md:text-3xl lg:text-4xl">
          Contact me
        </h1>
      </div>
      <div className="mx-6 md:mx-12 grid items-center grid-cols-1 md:grid-cols-2 sm:gap-4 lg:gap-8">
        <ContactForm />
        <QRCode />
      </div>
    </Element>
  );
};

export default Contact;
