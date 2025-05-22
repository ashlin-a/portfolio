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
  SiHono
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import TechExpItem from '@/components/TechExpItem';

const ProgrammingSkillSection = () => {
  return (
    <section className="p-4 sm:p-6 md:p-10 lg:p-20 bg-[#92e3a9]" aria-label="Programming Skills">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            draggable="false"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            src="Hand-coding-bro.svg"
            alt="A person programming on the computer"
          />
        </div>
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-5 lg:col-span-2">
          <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl">Programming Skills</h3>
          <p className="font-light text-lg sm:text-xl md:text-2xl">
            I specialize in modern frameworks and tools to build fast,
            user-friendly websites and apps. Here’s the tech I work with to
            create smooth experiences and reliable solutions.
          </p>
          <div className="flex gap-2 sm:gap-2 flex-wrap justify-center lg:justify-start">
            <TechExpItem text="Javascript" icon={SiJavascript} />
            <TechExpItem text="Typescript" icon={SiTypescript} />
            <TechExpItem text="Python" icon={SiPython} />
            <TechExpItem text="Java" icon={DiJava} />
            <TechExpItem text="C Lang" icon={SiC} />
            <TechExpItem text="HTML" icon={SiHtml5} />
            <TechExpItem text="CSS" icon={SiCss3} />
            <TechExpItem text="Bootstrap" icon={SiBootstrap} />
            <TechExpItem text="Tailwind" icon={SiTailwindcss} />
            <TechExpItem text="React" icon={SiReact} />
            <TechExpItem text="NextJs" icon={SiNextdotjs} />
            <TechExpItem text="NodeJS" icon={SiNodedotjs} />
            <TechExpItem text="Express" icon={SiExpress} />
            <TechExpItem text="Flask" icon={SiFlask} />
            <TechExpItem text="Hono" icon={SiHono} />
            <TechExpItem text="MongoDB" icon={SiMongodb} />
            <TechExpItem text="Mongoose" icon={SiMongoose} />
            <TechExpItem text="MySQL" icon={SiMysql} />
            <TechExpItem text="PostgreSQL" icon={SiPostgresql} />
            <TechExpItem text="Prisma ORM" icon={SiPrisma} />
            <TechExpItem text="Docker" icon={SiDocker} />
            <TechExpItem text="Cloudflare Workers" icon={SiCloudflareworkers} />
            <TechExpItem text="Cloudflare Pages" icon={SiCloudflarepages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingSkillSection;