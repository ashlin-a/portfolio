import { InfoBoxProps } from '@/types';

export default function InfoBox({ icon: Icon, type }: InfoBoxProps) {
  if (type === 'success') {
    return (
      <div className={'flex p-3 items-center gap-2 justify-center bg-success/30 rounded-sm text-success font-semibold'}>
        <Icon />
        {'Your Message was sent successfully'}
      </div>
    );
  } else {
    return (
      <div className={'flex p-3 items-center gap-2 justify-center bg-error/30 rounded-sm text-error font-semibold'}>
        <Icon className='text-lg' />
        {'Failed to deliver message'}
      </div>
    );
  }
}
