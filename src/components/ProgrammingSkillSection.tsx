import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiTypescript,
  SiJavascript,
  SiPrisma,
  SiCloudflareworkers,
  SiCloudflarepages,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiC,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiFlask,
  SiTailwindcss,
  SiHono,
  SiCypress,
  SiWebrtc,
  SiJest,
  SiVitest,
  SiKubernetes,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import TechExpItem from '@/components/TechExpItem';

const listItems = [
  // Core Languages
  { text: 'C Lang', icon: SiC },
  { text: 'Java', icon: DiJava },
  { text: 'Python', icon: SiPython },
  { text: 'Javascript', icon: SiJavascript },
  { text: 'Typescript', icon: SiTypescript },

  // Frontend (UI/Styling)
  { text: 'HTML', icon: SiHtml5 },
  { text: 'CSS', icon: SiCss3 },
  { text: 'Bootstrap', icon: SiBootstrap },
  { text: 'Tailwind', icon: SiTailwindcss },
  { text: 'React', icon: SiReact },
  { text: 'NextJs', icon: SiNextdotjs },

  // Backend (Frameworks/Runtimes)
  { text: 'NodeJS', icon: SiNodedotjs },
  { text: 'Express', icon: SiExpress },
  { text: 'Hono', icon: SiHono },
  { text: 'Flask', icon: SiFlask },

  // Databases & ORMs
  { text: 'MongoDB', icon: SiMongodb },
  { text: 'Mongoose', icon: SiMongoose },
  { text: 'MySQL', icon: SiMysql },
  { text: 'PostgreSQL', icon: SiPostgresql },
  { text: 'Prisma ORM', icon: SiPrisma },

  // Testing
  { text: 'Vitest', icon: SiVitest },
  { text: 'Jest', icon: SiJest },
  { text: 'Cypress', icon: SiCypress },

  // Specialized
  { text: 'WebRTC', icon: SiWebrtc },

  // DevOps & Cloud
  { text: 'Docker', icon: SiDocker },
  { text: 'Kubernetes', icon: SiKubernetes },
  { text: 'Cloudflare Workers', icon: SiCloudflareworkers },
  { text: 'Cloudflare Pages', icon: SiCloudflarepages },
];

const ProgrammingSkillSection = () => {
  return (
    <section
      className="p-4 sm:p-6 md:p-10 lg:p-20 text-dark-txt bg-secondary"
      aria-label="Programming Skills"
    >
      <div className="grid grid-cols-1 intersect-once intersect:motion-preset-slide-up lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            draggable="false"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            src="Hand-coding-bro.svg"
            alt="A person programming on the computer"
          />
        </div>
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-5 lg:col-span-2">
          <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center lg:text-left">
            Programming Skills
          </h3>
          <p className="font-light text-lg sm:text-xl md:text-2xl text-center lg:text-left">
            I specialize in modern frameworks and tools to build fast,
            user-friendly websites and apps. Here’s the tech I work with to
            create smooth experiences and reliable solutions.
          </p>
          <div className="flex gap-2 sm:gap-2 flex-wrap justify-center lg:justify-start">
            {listItems.map((item, index) => (
              <TechExpItem key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingSkillSection;
