import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <header>
                <nav className='flex text-xl font-semibold gap-10 justify-end p-10'>
                    <Link href={'/'}>Projects</Link>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'}>Contact Me</Link>
                </nav>
            </header>
            <section className='px-10'>
                <div className='border-2 grid grid-flow-col'>
                    <img
                        className='w-2xl'
                        src='Programming-bro.svg'
                        alt='A person programming on the computer'
                    ></img>
                    <div className='border-2 p-20 flex flex-col justify-center'>
                        <h3 className=' font-bold text-4xl pb-5'>Welcome, I’m Ashlin</h3>
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
        </div>
    );
}
