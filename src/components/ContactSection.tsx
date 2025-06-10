import ContactForm from './ContactForm';
import { FaLinkedin } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="p-4 sm:p-6 md:p-10 lg:p-20 bg-tertiary text-light-txt"
      aria-label="Contact Information"
    >
      <div className="grid grid-cols-1 intersect-once intersect:motion-preset-slide-up lg:grid-flow-col lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-20 max-w-7xl mx-auto">
        <ContactForm />

        <div className="flex flex-col gap-4 md:gap-5">
          <h3 className="text-2xl sm:text-3xl md:text-4xl mt-10 pb-2 text-center md:text-left md:pb-3 font-bold">
            Connect
          </h3>
          <ul className="flex flex-col m-auto md:m-0 gap-3 sm:gap-4 w-min">
            <li>
              <a
                href="https://www.linkedin.com/in/simpleashlin"
                className="flex gap-3 items-center text-md md:text-xl font-light hover:text-secondary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <FaLinkedin className="text-2xl" />
                </div>
                <span>Ashlin Asokan</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:mail@ashlin.dev"
                className="flex gap-3 items-center text-md md:text-xl font-light hover:text-secondary transition-colors duration-200"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <HiOutlineMail className="text-2xl" />
                </div>
                <span>mail@ashlin.dev</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
