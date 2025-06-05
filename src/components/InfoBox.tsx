import { InfoBoxProps } from '@/types';

export default function InfoBox({ icon: Icon, type, messages }: InfoBoxProps) {
  return (
    <div
      className={`flex p-3 items-center gap-2 justify-center font-semibold rounded-sm ${
        type === 'success'
          ? 'bg-success/30 text-success'
          : 'bg-error/30 text-error '
      }`}
    >
      
      <div className='flex flex-col gap-2'>
        {messages.map((message, index) => (
          <div key={index} className='flex gap-2 items-center'><Icon/><p className="text-sm">
          {message}
        </p></div>
        
      ))}
      </div>
      
    </div>
  );
}
