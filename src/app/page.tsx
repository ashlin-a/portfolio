import InputField from '@/components/InputField';
import LinkButton from '@/components/LinkButton';

export default function Home() {
    return (
        <div>
            <header className='bg-[#253238]'>
                <nav className='flex text-xl text-white font-semibold gap-10 justify-end p-10'>
                    <LinkButton href='/' text='Projects'/>
                    <LinkButton href='/' text='Blog'/>
                    <LinkButton href='/' text='Contact Me'/>
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
                    </div>
                    <img
                        className='w-2xl'
                        src='Hand-coding-bro.svg'
                        alt='A person programming on the computer'
                    ></img>
                </div>
            </section>
            <section className='p-10 bg-[#253238] text-white'>
                <div>
                    <h3 className='font-bold text-4xl pb-5'>Contact Form</h3>
                    <InputField placeholder='Name'/>
                </div>
            </section>
        </div>
    );
}
