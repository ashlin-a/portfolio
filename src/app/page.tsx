import LinkButton from '@/components/LinkButton';
import TechExpItem from '@/components/TechExpItem';
import { SiExpress } from 'react-icons/si';
import TextInput from '@/components/TextInput';
import TextAreaInput from '@/components/TextAreaInput';

export default function Home() {
    return (
        <div>
            <header className='bg-[#253238]'>
                <nav className='flex text-xl text-white font-semibold gap-10 justify-end p-10'>
                    <LinkButton href='/' text='Projects' />
                    <LinkButton href='/' text='Blog' />
                    <LinkButton href='/' text='Contact Me' />
                </nav>
            </header>
            <section className='px-10 bg-[#253238] text-white'>
                <div className='border-2 grid grid-flow-col'>
                    <img
                        className='w-4xl'
                        src='Programming-bro.svg'
                        alt='A person programming on the computer'
                    ></img>
                    <div className='border-2 p-20 flex flex-col justify-center'>
                        <h3 className=' font-bold text-4xl pb-5'>
                            Welcome, I’m Ashlin
                        </h3>
                        <p className='font-normal text-xl text-justify'>
                            I am a full stack developer specializing in creating
                            high-quality, user-centric websites and
                            applications. With expertise in modern technologies,
                            I deliver solutions that combine functionality with
                            seamless design. Explore my work to see how I can
                            bring your vision to life.
                        </p>
                    </div>
                </div>
            </section>
            <section className='px-10 bg-[#92e3a9]'>
                <div className='border-2 grid grid-flow-col'>
                    <div className='border-2 p-20 flex flex-col justify-center'>
                        <h3 className=' font-bold text-4xl pb-5'>
                            Technical Expertise
                        </h3>
                        <p className='font-normal text-xl text-justify'>
                            I specialize in modern frameworks and tools to build
                            fast, user-friendly websites and apps. Here’s the
                            tech I work with to create smooth experiences and
                            reliable solutions.
                        </p>
                        <TechExpItem text='Express' icon={SiExpress} />
                    </div>
                    <img
                        className='w-2xl'
                        src='Hand-coding-bro.svg'
                        alt='A person programming on the computer'
                    ></img>
                </div>
            </section>
            <section className='p-10 bg-[#253238] grid grid-flow-col gap-20 text-white'>
                <div className='flex flex-col gap-3'>
                    <h3 className='font-bold text-4xl pb-5'>Contact Form</h3>
                    <TextInput placeholder='Email' />
                    <TextInput placeholder='Subject' />
                    <TextAreaInput placeholder='Message' />
                </div>
                <div>
                    <h3 className='text-4xl pb-5 font-bold'>Quick Connect</h3>
                    <div className='flex gap-3'>
                        <div className='text-lg font-semibold'>
                            <p>Phone:</p>
                            <p>Email:</p>
                            <p>Location:</p>
                        </div>
                        <div className='text-lg flex flex-col font-semibold'>
                            <a href='tel:+14164005885'>
                                +1 416 400 5885
                            </a>
                            <a href='mailto:mail@ashlin.dev'>
                                mail@ashlin.dev
                            </a>
                            <p className='text-lg font-semibold'>Toronto</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
