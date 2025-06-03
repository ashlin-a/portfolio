import ContactForm from './ContactForm';
import { FaLocationDot,FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ContactSection = () => {
  return (
    <section id='contact'
      className="p-4 sm:p-6 md:p-10 lg:p-20 bg-zinc-800 text-white"
      aria-label="Contact Information"
    >
      <div className="grid grid-cols-1 lg:grid-flow-col lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-20 max-w-7xl mx-auto">
        <ContactForm />
        
        <div className="flex flex-col gap-4 md:gap-5">
          <h3 className="text-2xl sm:text-3xl md:text-4xl pb-4 md:pb-5 font-bold">
            Connect
          </h3>
          <ul className="flex flex-col gap-3 sm:gap-4 w-min">
            {/* <li className='flex gap-2 items-center text-xl font-light'><FaLocationDot/> Toronto</li> */}
            <a href='https://www.linkedin.com/in/simpleashlin' className='flex gap-2 items-center text-md md:text-xl font-light'><FaLinkedin/>Ashlin Asokan</a>
            <a href='mailto:mail@ashlin.dev' className='flex gap-2 items-center text-md md:text-xl font-light'><IoIosMail className='text-2xl'/>mail@ashlin.dev</a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;