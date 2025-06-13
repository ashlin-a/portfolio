import ImageSlider from "./ImageSlider";

const ProjectSection = () => {
    const images = ['one', 'two']
  return <div>
    <ImageSlider imgUrls={images} />
  </div>;
};

export default ProjectSection;
