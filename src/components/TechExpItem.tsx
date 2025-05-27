import { TechExpItemProps } from '@/types';

export default function TechExpItem({ text, icon: Icon }: TechExpItemProps) {
    return (
        <div className='flex flex-row p-2 items-center rounded-full gap-1 bg-[#253238] text-white'>
            <span>
                <Icon className='text-2xl bg-[#92e3a9] text-black rounded-full p-0.5 ' />
            </span><p className='font-light'>
            {text}</p>
        </div>
    );
}
