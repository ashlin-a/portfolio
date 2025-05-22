import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section
      className="p-4 sm:p-6 md:p-10 lg:p-20 bg-[#3D315B] text-white"
      aria-label="Contact Information"
    >
      <div className="grid grid-cols-1 lg:grid-flow-col lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-20 max-w-7xl mx-auto">
        <ContactForm />
        <div className="flex flex-col gap-4 md:gap-5">
          <h3 className="text-3xl sm:text-4xl md:text-5xl pb-4 md:pb-5 font-bold">
            Quick Connect
          </h3>
          <div className="flex gap-3 sm:gap-4">
            <div className="text-base sm:text-lg md:text-xl font-semibold">
              <p>Phone:</p>
              <p>Email:</p>
              <p>Location:</p>
            </div>
            <div className="text-base sm:text-lg md:text-xl font-semibold flex flex-col">
              <a href="tel:+14164005885" aria-label="Phone number: +1 416 400 5885">
                +1 416 400 5885
              </a>
              <a href="mailto:mail@ashlin.dev" aria-label="Email: mail@ashlin.dev">
                mail@ashlin.dev
              </a>
              <p>Toronto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;