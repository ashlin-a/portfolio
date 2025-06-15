import ImageSlider from './ImageSlider';

const ProjectSection = () => {
  const baseUrl = 'https://portfolio-files.ashlin.dev';
  const images = [
    '1.png',
    '1-dark.png',
    '2.png',
    '2-dark.png',
    '3.png',
    '4.png',
    '4-dark.png',
  ].map((filename) => `${baseUrl}/${filename}`);
  return (
    <section className="p-4 sm:p-6 md:p-10 lg:p-20 w-[100vw] bg-primary text-dark-txt">
      <div className="rounded-2xl overflow-hidden max-w-3xl w-full h-1/2 m-auto">
        <ImageSlider imgUrls={images} />
      </div>
    </section>
  );
};

export default ProjectSection;
