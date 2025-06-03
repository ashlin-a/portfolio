import { InfoBoxProps } from '@/types';

export default function InfoBox({ icon: Icon, type }: InfoBoxProps) {
  if (type === 'success') {
    return (
      <div className={'flex p-5 items-center gap-2 bg-green-600/30'}>
        <Icon />
        {'Your Message was sent successfully'}
      </div>
    );
  } else {
    return (
      <div className={'flex p-3 items-center gap-2 justify-center bg-red-600/30 rounded-sm text-zinc-900 font-semibold'}>
        <Icon className='text-lg' />
        {'Failed to deliver message'}
      </div>
    );
  }
}
