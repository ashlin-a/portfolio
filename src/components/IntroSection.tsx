import { SiGithub } from 'react-icons/si';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import LinkButton from './LinkButton';
import LinkButtonFilled from './LinkButtonFilled';

const IntroSection = () => {
  return (
    <section
      className="p-4 sm:p-6 md:p-10 lg:p-20 w-[100vw] bg-[#FF9770] text-gray-900"
      aria-label="Introduction Section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-flow-col lg:items-center lg:text-right text-center gap-6 max-w-7xl mx-auto">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:col-span-2 lg:justify-center">
          <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl pb-4 md:pb-5">
            Welcome, I’m Ashlin
          </h3>
          <p className="font-light text-lg sm:text-xl md:text-2xl">
            I am a full stack developer specializing in creating high-quality,
            user-centric websites and applications. I deliver solutions that use
            modern technologies and combine functionality with seamless design.
            Explore my work to see how I can bring your vision to life.
          </p>
          <div className="flex justify-center lg:justify-end items-center gap-4 sm:gap-6 m-4 md:m-5">
            <LinkButtonFilled
              icon={SiGithub}
              href="https://github.com/ashlin-a/"
              text="Github"
            />
            <LinkButton icon={HiOutlineDocumentDownload} href="https://files.ashlin.dev/Ashlin-Resume.pdf" text="Resume" />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end col-span-1">
          <img
            draggable="false"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            src="Hand-coding-pana.svg"
            alt="A person programming on the computer"
          />
        </div>
      </div>
    </section>
  );
};
export default IntroSection;
