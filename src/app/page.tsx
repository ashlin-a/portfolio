import LinkButton from '@/components/LinkButton';
import TechExpItem from '@/components/TechExpItem';
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
  SiTailwindcss
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import TextInput from '@/components/TextInput';
import TextAreaInput from '@/components/TextAreaInput';

export default function Home() {
  return (
    <div>
      <header className="bg-[#FF9770]">
        <nav className="flex text-2xl text-gray-900 font-semibold gap-10 justify-end pt-10 px-20">
          <LinkButton href="/" text="Projects" />
          <LinkButton href="/" text="Blog" />
          <LinkButton href="/" text="Contact Me" />
        </nav>
      </header>
      <section className="p-20 bg-[#FF9770] text-gray-900">
        <div className=" grid grid-flow-col text-right">
          <div className="p-10 flex flex-col justify-center">
            <h3 className=" font-bold text-5xl pb-5">Welcome, I’m Ashlin</h3>
            <p className="font-light text-2xl">
              I am a full stack developer specializing in creating high-quality,
              user-centric websites and applications. With expertise in modern
              technologies, I deliver solutions that combine functionality with
              seamless design. Explore my work to see how I can bring your
              vision to life.
            </p>
          </div>
          <img
            className="w-7xl"
            src="Hand-coding-pana.svg"
            alt="A person programming on the computer"
          ></img>
        </div>
      </section>
      <section className="p-20 bg-[#92e3a9]">
        <div className="grid grid-cols-3 items-center">
          <img
            className="w-2xl flex"
            src="Hand-coding-bro.svg"
            alt="A person programming on the computer"
          ></img>
          <div className="col-span-2">
            <div className="p-20 flex flex-col gap-5 ">
              <h3 className=" font-bold text-5xl">Technical Expertise</h3>
              <p className="font-light text-2xl">
                I specialize in modern frameworks and tools to build fast,
                user-friendly websites and apps. Here’s the tech I work with to
                create smooth experiences and reliable solutions.
              </p>
              <div className="flex gap-2 flex-wrap">
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
                <TechExpItem text="MongoDB" icon={SiMongodb} />
                <TechExpItem text="Mongoose" icon={SiMongoose} />
                <TechExpItem text="My SQL" icon={SiMysql} />
                <TechExpItem text="PostgreSQL" icon={SiPostgresql} />
                <TechExpItem text="Prisma ORM" icon={SiPrisma} />
                <TechExpItem text="Docker" icon={SiDocker} />
                <TechExpItem
                  text="Cloudflare Workers"
                  icon={SiCloudflareworkers}
                />
                <TechExpItem text="Cloudflare Pages" icon={SiCloudflarepages} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-20 bg-[#3D315B] text-white grid grid-flow-col gap-20">
        <div className="flex text-gray-900 flex-col bg-white rounded-md p-10 gap-3">
          <h3 className="font-bold text-4xl pb-5">Contact Form</h3>
          <form className="flex flex-col gap-2">
            <TextInput placeholder="Email" />
            <TextInput placeholder="Subject" />
            <TextAreaInput placeholder="Message" />
          </form>
        </div>
        <div>
          <h3 className="text-5xl pb-5 font-bold">Quick Connect</h3>
          <div className="flex gap-3">
            <div className="text-xl font-semibold">
              <p>Phone:</p>
              <p>Email:</p>
              <p>Location:</p>
            </div>
            <div className="text-xl flex flex-col font-semibold">
              <a href="tel:+14164005885">+1 416 400 5885</a>
              <a href="mailto:mail@ashlin.dev">mail@ashlin.dev</a>
              <p>Toronto</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
