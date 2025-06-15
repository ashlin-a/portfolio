import { SiGithub } from 'react-icons/si';
import ImageSlider from './ImageSlider';
import LinkButtonFilled from './LinkButtonFilled';

const ProjectSection = () => {
  const baseUrl = 'https://portfolio-files.ashlin.dev';
  const images = [
    'login-page.png',
    'login-page-dark.png',
    '1.png',
    '1-dark.png',
    '2.png',
    '2-dark.png',
    '3.png',
    '4.png',
    '4-dark.png',
  ].map((filename) => `${baseUrl}/${filename}`);
  return (
    <section
      className="p-4 sm:p-6 md:p-10 lg:p-20 w-[100vw] bg-primary text-dark-txt"
      aria-label="Projects Section" id='projects'
    >
      <div className="lg:grid intersect-once intersect:motion-preset-slide-up lg:grid-cols-5 lg:grid-flow-col lg:items-center lg:text-right text-center gap-6 max-w-7xl mx-auto">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:col-span-2 lg:justify-center text-center lg:text-right">
          <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl pb-4 md:pb-5">
            TSCF Records App
          </h3>
          <p className="font-light text-lg sm:text-xl md:text-2xl mb-4 md:mb-5">
            I made an app for The Second Chance Foundation, Non Profit
            Organization. Aim of the project was to digitize the manual form
            filling process for their clients. Click the repository link below
            to see more details.
          </p>
          <div className="flex justify-center lg:justify-end items-center gap-4 sm:gap-6">
            <LinkButtonFilled
              icon={SiGithub}
              href="https://github.com/ashlin-a/TSCF-Sign-In-App"
              text="Repo Link"
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end col-span-3">
          <div className="rounded-lg overflow-hidden max-w-3xl w-full m-auto">
            <ImageSlider imgUrls={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
